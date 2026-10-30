import express, { type NextFunction, type Request, type Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';

type Role = 'Admin' | 'Recruiter' | 'Front Desk';

type CheckInStatus = 'Waiting' | 'Seen' | 'In Progress' | 'Completed' | 'No-Show';

interface AuthRequest extends Request {
  user?: {
    id: string;
    role: Role;
    recruiterName?: string;
  };
}

interface CheckInRecord {
  id: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  visitFocus: string;
  visitFocusOther?: string;
  applicantType: string;
  preferredLanguage: string;
  staffMember?: string;
  consent: boolean;
  status: CheckInStatus;
  createdAt: string;
  updatedAt: string;
}

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());

const checkins = new Map<string, CheckInRecord>();

function requireAuth(req: AuthRequest, res: Response, next: NextFunction) {
  const role = (req.header('x-role') as Role | undefined) || 'Front Desk';
  req.user = {
    id: req.header('x-user-id') || 'demo-user',
    role,
    recruiterName: req.header('x-recruiter-name') || undefined,
  };
  next();
}

function requireRole(...allowed: Role[]) {
  return (req: AuthRequest, res: Response, next: NextFunction) => {
    const role = req.user?.role;
    if (!role || !allowed.includes(role)) {
      return res.status(403).json({ message: 'Forbidden' });
    }
    next();
  };
}

app.use(requireAuth);

app.get('/health', (_req, res) => {
  res.json({ ok: true });
});

app.get('/api/checkins', requireRole('Admin', 'Recruiter', 'Front Desk'), (_req, res) => {
  res.json(Array.from(checkins.values()));
});

app.get('/api/checkins/:id', requireRole('Admin', 'Recruiter', 'Front Desk'), (req, res) => {
  const item = checkins.get(req.params.id);
  if (!item) return res.status(404).json({ message: 'Not found' });
  res.json(item);
});

app.post('/api/checkins', requireRole('Admin', 'Front Desk'), (req, res) => {
  const now = new Date().toISOString();
  const id = crypto.randomUUID();
  const record: CheckInRecord = {
    id,
    firstName: String(req.body.firstName || '').trim(),
    lastName: String(req.body.lastName || '').trim(),
    phone: String(req.body.phone || '').trim(),
    email: String(req.body.email || '').trim(),
    visitFocus: String(req.body.visitFocus || '').trim(),
    visitFocusOther: String(req.body.visitFocusOther || '').trim() || undefined,
    applicantType: String(req.body.applicantType || '').trim(),
    preferredLanguage: String(req.body.preferredLanguage || '').trim(),
    staffMember: String(req.body.staffMember || '').trim() || undefined,
    consent: req.body.consent === 'true' || req.body.consent === 'on',
    status: 'Waiting',
    createdAt: now,
    updatedAt: now,
  };

  if (record.visitFocus !== 'Job search' && !record.staffMember) {
    return res.status(400).json({ message: 'Staff member is required unless the visitor selected job search.' });
  }

  checkins.set(id, record);
  // Production implementation should queue the recruiter email here.
  res.status(201).json(record);
});

app.patch('/api/checkins/:id', requireRole('Admin', 'Recruiter', 'Front Desk'), (req, res) => {
  const existing = checkins.get(req.params.id);
  if (!existing) return res.status(404).json({ message: 'Not found' });

  const patch = req.body as Partial<CheckInRecord>;
  const updated = {
    ...existing,
    ...patch,
    updatedAt: new Date().toISOString(),
  };

  checkins.set(existing.id, updated);
  res.json(updated);
});

app.delete('/api/checkins/:id', requireRole('Admin'), (req, res) => {
  checkins.delete(req.params.id);
  res.status(204).send();
});

app.get('/api/checkins/export.csv', requireRole('Admin', 'Front Desk'), (_req, res) => {
  const rows = Array.from(checkins.values());
  const header = ['First Name', 'Last Name', 'Phone', 'Email', 'Visit Focus', 'Staff Member', 'Status', 'Checked In'];
  const csv = [header, ...rows.map((item) => [
    item.firstName,
    item.lastName,
    item.phone,
    item.email,
    item.visitFocus,
    item.staffMember || '',
    item.status,
    item.createdAt,
  ])].map((row) => row.map((value) => `"${String(value).replace(/"/g, '""')}"`).join(',')).join('\n');

  res.type('text/csv').send(csv);
});

app.listen(3001, () => {
  console.log('AgileWPS check-in API listening on http://localhost:3001');
});
