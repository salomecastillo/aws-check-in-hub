const STORAGE_KEY = 'agilewps-checkins-v2';

const staffMembers = ['Any available staff member', 'Cesar Suarez', 'Yelisa Murcia', 'Johanna Tavares', 'Sharling Laguna'];
const visitFocuses = ['Interview', 'Onboarding', 'Document drop-off', 'Job search', 'Recruiting', 'Billing', 'Timecards', 'Finance', 'Sales', 'Management', 'Other'];
const statuses = ['Waiting', 'Seen', 'In Progress', 'Completed', 'No-Show'];

const copy = {
  en: {
    languageLabel: 'Language',
    dashboardEyebrow: 'Staff operations',
    dashboardTitle: 'Live visitor queue',
    dashboardCopy: 'See who is waiting, review details, update status, and export the current queue.',
    summaryTitle: 'Daily summary',
    total: 'Total',
    waiting: 'Waiting',
    inProgress: 'In progress',
    completed: 'Completed',
    noShow: 'No-show',
    filterDate: 'Date',
    filterRecruiter: 'Staff member',
    filterVisit: 'Visit type',
    filterStatus: 'Status',
    allRecruiters: 'All staff members',
    allVisits: 'All visit types',
    allStatuses: 'All statuses',
    exportCsv: 'Export CSV',
    visitor: 'Visitor',
    visit: 'Visit',
    time: 'Time',
    status: 'Status',
    details: 'Visitor details',
    selectVisitor: 'Select a visitor from the queue.',
    assignedRecruiter: 'Staff member',
    recruiterNotice: 'Staff member notification',
    phone: 'Phone number',
    email: 'Email address',
    applicantType: 'Applicant status',
    preferredLanguage: 'Preferred language',
    staffMember: 'Staff member you are meeting with',
    visitFocus: 'Visit focus',
    permissionsTitle: 'Permissions preview',
    permissionsText: 'Admin can export and remove records. Recruiter can review assignments. Front Desk can update status.',
    deleteRecord: 'Delete record',
    deleteConfirm: 'Delete this check-in record? This cannot be undone.',
    apiTitle: 'API contract',
    schemaTitle: 'Database shape',
    securityTitle: 'Security and compliance',
    notificationTitle: 'Notification routes',
    deliveryTitle: 'Delivery notes',
    apiText: 'The queue reads and writes the same local data model used by the visitor hub.',
    notificationText: 'Team email notifications should be sent automatically from the backend.',
    securityText: 'Consent, RBAC, encrypted storage, audit logs, and privacy notice links are required in production.',
    noMatches: 'No visitors match the current filters.',
    assignedFallback: 'Front Desk',
    waitingLabel: 'Waiting now',
    liveIndicator: 'Live',
    statusUpdated: 'Status updated',
    currentTime: 'Current local time',
  },
  es: {
    languageLabel: 'Idioma',
    dashboardEyebrow: 'Operacion del equipo',
    dashboardTitle: 'Cola de visitantes en vivo',
    dashboardCopy: 'Vea quien esta esperando, revise detalles, actualice el estado y exporte la cola actual.',
    summaryTitle: 'Resumen del dia',
    total: 'Total',
    waiting: 'En espera',
    inProgress: 'En proceso',
    completed: 'Completado',
    noShow: 'No se presento',
    filterDate: 'Fecha',
    filterRecruiter: 'Miembro del equipo',
    filterVisit: 'Tipo de visita',
    filterStatus: 'Estado',
    allRecruiters: 'Todos los miembros del equipo',
    allVisits: 'Todos los tipos',
    allStatuses: 'Todos los estados',
    exportCsv: 'Exportar CSV',
    visitor: 'Visitante',
    visit: 'Visita',
    time: 'Hora',
    status: 'Estado',
    details: 'Detalles del visitante',
    selectVisitor: 'Seleccione un visitante de la cola.',
    assignedRecruiter: 'Miembro del equipo',
    recruiterNotice: 'Aviso al miembro del equipo',
    phone: 'Telefono',
    email: 'Correo electronico',
    applicantType: 'Estado del solicitante',
    preferredLanguage: 'Idioma preferido',
    staffMember: 'Miembro del equipo con quien se reunira',
    visitFocus: 'Enfoque de la visita',
    permissionsTitle: 'Vista de permisos',
    permissionsText: 'Admin puede exportar y eliminar registros. Reclutador puede revisar asignaciones. Recepcion puede actualizar estados.',
    deleteRecord: 'Eliminar registro',
    deleteConfirm: 'Eliminar este registro? Esto no se puede deshacer.',
    apiTitle: 'Contrato API',
    schemaTitle: 'Forma de la base de datos',
    securityTitle: 'Seguridad y cumplimiento',
    notificationTitle: 'Rutas de notificacion',
    deliveryTitle: 'Notas de entrega',
    apiText: 'La cola usa el mismo modelo local de datos que el registro de visitantes.',
    notificationText: 'Las notificaciones por correo al equipo deben salir automaticamente del backend.',
    securityText: 'Consentimiento, RBAC, almacenamiento cifrado, auditoria y enlaces de privacidad son necesarios en produccion.',
    noMatches: 'No hay visitantes con estos filtros.',
    assignedFallback: 'Recepcion',
    waitingLabel: 'En espera ahora',
    liveIndicator: 'En vivo',
    statusUpdated: 'Estado actualizado',
    currentTime: 'Hora local actual',
  },
};

const state = {
  language: 'en',
  checkins: [],
  selectedId: null,
  filters: {
    date: new Date().toISOString().slice(0, 10),
    recruiter: '',
    visit: '',
    status: 'Waiting',
  },
  message: '',
};

function t(key) {
  return copy[state.language][key] || copy.en[key] || key;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function joinName(firstName, lastName) {
  return [firstName, lastName].filter(Boolean).join(' ').trim();
}

function displayName(item) {
  return item.fullName || joinName(item.firstName, item.lastName);
}

function contactLabel(item) {
  return item.staffMember || (item.visitFocus === 'Job search' ? 'Not required' : t('assignedFallback'));
}

function contactFieldLabel(item) {
  return t('assignedRecruiter');
}

function formatDateTime(value) {
  return new Intl.DateTimeFormat(state.language === 'es' ? 'es-US' : 'en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  }).format(new Date(value));
}

function formatTime(value) {
  return new Intl.DateTimeFormat(state.language === 'es' ? 'es-US' : 'en-US', {
    hour: 'numeric',
    minute: '2-digit',
  }).format(new Date(value));
}

function formatDateLabel(value) {
  return new Intl.DateTimeFormat(state.language === 'es' ? 'es-US' : 'en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(`${value}T12:00:00`));
}

function seedCheckins() {
  const now = new Date();
  const earlier = (minutes) => new Date(now.getTime() - minutes * 60000).toISOString();
  return [
    {
      id: crypto.randomUUID(),
      firstName: 'Elena',
      lastName: 'Martinez',
      phone: '(603) 555-0188',
      email: 'elena.martinez@example.com',
      visitFocus: 'Interview',
      visitFocusOther: '',
      applicantType: 'New applicant',
      preferredLanguage: 'Spanish',
      staffMember: 'Cesar Suarez',
      consent: true,
      status: 'Waiting',
      createdAt: earlier(15),
      updatedAt: earlier(15),
    },
    {
      id: crypto.randomUUID(),
      firstName: 'Robert',
      lastName: 'Chen',
      phone: '(978) 555-0124',
      email: 'robert.chen@example.com',
      visitFocus: 'Document drop-off',
      visitFocusOther: '',
      applicantType: 'Returning applicant or employee',
      preferredLanguage: 'English',
      staffMember: '',
      consent: true,
      status: 'In Progress',
      createdAt: earlier(42),
      updatedAt: earlier(27),
    },
    {
      id: crypto.randomUUID(),
      firstName: 'Avery',
      lastName: 'Brooks',
      phone: '(603) 555-0139',
      email: 'avery.brooks@example.com',
      visitFocus: 'Recruiting',
      visitFocusOther: '',
      applicantType: 'New applicant',
      preferredLanguage: 'English',
      staffMember: 'Yelisa Murcia',
      consent: true,
      status: 'Seen',
      createdAt: earlier(68),
      updatedAt: earlier(59),
    },
  ];
}

function normalizeCheckin(item) {
  return {
    ...item,
    staffMember: item.staffMember || item.recruiter || item.teamMeeting || '',
    visitFocus: item.visitFocus || item.reason || '',
    visitFocusOther: item.visitFocusOther || '',
  };
}

function loadCheckins() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) return JSON.parse(stored).map(normalizeCheckin);
  const seeded = seedCheckins().map(normalizeCheckin);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(seeded));
  return seeded;
}

function saveCheckins(checkins) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(checkins));
  state.checkins = checkins;
}

function getFilteredCheckins() {
  return state.checkins.filter((item) => {
    const itemDate = item.createdAt.slice(0, 10);
    return (!state.filters.date || itemDate === state.filters.date)
      && (!state.filters.recruiter || item.staffMember === state.filters.recruiter)
      && (!state.filters.visit || item.visitFocus === state.filters.visit)
      && (!state.filters.status || item.status === state.filters.status);
  });
}

function getSummary(items) {
  return {
    total: items.length,
    waiting: items.filter((item) => item.status === 'Waiting').length,
    inProgress: items.filter((item) => item.status === 'In Progress').length,
    completed: items.filter((item) => item.status === 'Completed').length,
    noShow: items.filter((item) => item.status === 'No-Show').length,
  };
}

function statusBadge(status) {
  return `<span class="badge ${status.toLowerCase().replace(/\s+/g, '-')}">${escapeHtml(status)}</span>`;
}

function selectedItem(items) {
  if (state.selectedId) {
    const current = items.find((item) => item.id === state.selectedId);
    if (current) return current;
  }
  const first = items[0] || null;
  if (first) state.selectedId = first.id;
  return first;
}

function renderSummaryCard(label, value) {
  return `<div class="summary-card"><strong>${value}</strong><span>${label}</span></div>`;
}

function renderAlerts(item) {
  const value = contactLabel(item);
  return `<span>${escapeHtml(value)}</span>`;
}

function renderTable(items) {
  if (!items.length) return `<p class="empty-state">${t('noMatches')}</p>`;
  return `
    <table>
      <thead>
        <tr>
          <th>${t('visitor')}</th>
          <th>${t('visit')}</th>
          <th>${t('assignedRecruiter')}</th>
          <th>${t('time')}</th>
          <th>${t('status')}</th>
        </tr>
      </thead>
      <tbody>
        ${items.map((item) => `
          <tr data-id="${item.id}" class="${item.id === state.selectedId ? 'selected' : ''}">
            <td><span class="visitor-name">${escapeHtml(displayName(item))}</span><span class="row-sub">${escapeHtml(item.phone)}</span></td>
            <td><span>${escapeHtml(item.visitFocus)}${item.visitFocusOther ? ` - ${escapeHtml(item.visitFocusOther)}` : ''}</span><span class="row-sub">${escapeHtml(contactLabel(item))}</span></td>
            <td>${renderAlerts(item)}</td>
            <td>${formatTime(item.createdAt)}</td>
            <td>${statusBadge(item.status)}</td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  `;
}

function renderDetails(item) {
  if (!item) {
    return `
      <aside class="details-panel">
        <div class="details-head"><h2>${t('details')}</h2></div>
        <div class="details-body">
          <p class="empty-state">${t('selectVisitor')}</p>
        </div>
      </aside>
    `;
  }

  return `
    <aside class="details-panel">
      <div class="details-head">
        <div>
          <h2>${escapeHtml(displayName(item))}</h2>
          <p class="muted">${formatDateTime(item.createdAt)}</p>
        </div>
        ${statusBadge(item.status)}
      </div>
      <div class="details-body">
        <div class="status-actions">
          ${statuses.map((status) => `<button type="button" data-status="${status}" class="${item.status === status ? 'active' : ''}">${status}</button>`).join('')}
        </div>
        <div class="detail-list">
          <div class="detail-row"><span>${t('phone')}</span><strong>${escapeHtml(item.phone)}</strong></div>
          <div class="detail-row"><span>${t('email')}</span><strong>${escapeHtml(item.email)}</strong></div>
          ${item.visitFocus !== 'Job search' ? `<div class="detail-row"><span>${contactFieldLabel(item)}</span><strong>${escapeHtml(contactLabel(item))}</strong></div>` : ''}
          <div class="detail-row"><span>${t('applicantType')}</span><strong>${escapeHtml(item.applicantType)}</strong></div>
          <div class="detail-row"><span>${t('preferredLanguage')}</span><strong>${escapeHtml(item.preferredLanguage)}</strong></div>
          <div class="detail-row"><span>${t('visitFocus')}</span><strong>${escapeHtml(item.visitFocus)}${item.visitFocusOther ? ` - ${escapeHtml(item.visitFocusOther)}` : ''}</strong></div>
        </div>
        <div class="detail-actions">
          <button class="danger-button" data-delete="${item.id}" type="button">${t('deleteRecord')}</button>
        </div>
        <div class="permission-card">
          <strong>${t('permissionsTitle')}</strong>
          <p>${t('permissionsText')}</p>
        </div>
      </div>
    </aside>
  `;
}

function renderDeliveryNotes() {
  return `
    <section class="delivery-notes">
      <div class="note-card">
        <h2>${t('deliveryTitle')}</h2>
        <p>${t('apiText')}</p>
        <div class="code-grid">
          <div class="code-item">
            <strong>${t('apiTitle')}</strong>
            <code>GET /api/checkins
PATCH /api/checkins/:id
DELETE /api/checkins/:id
GET /api/checkins/export.csv</code>
          </div>
          <div class="code-item">
            <strong>${t('schemaTitle')}</strong>
            <code>visitors(id, first_name, last_name, phone, email)
checkins(id, visitor_id, visit_focus, visit_focus_other, staff_member, status, created_at)
audit_log(id, actor_id, action)</code>
          </div>
          <div class="code-item">
            <strong>${t('securityTitle')}</strong>
            <code>RBAC: Admin, Recruiter, Front Desk
PII encrypted at rest
Consent + privacy notice required</code>
          </div>
          <div class="code-item">
            <strong>${t('notificationTitle')}</strong>
            <code>Staff member email sent automatically
Delivery audit logging</code>
          </div>
        </div>
        <p class="muted note-foot">${t('notificationText')} ${t('securityText')}</p>
      </div>
    </section>
  `;
}

function render() {
  const items = getFilteredCheckins();
  const selected = selectedItem(items);
  const summary = getSummary(items);
  const root = document.querySelector('#admin-app');
  root.innerHTML = `
    <div class="app-shell">
      <header class="topbar">
        <div class="container topbar-inner">
          <div class="brand" aria-label="Agile Workplace Staffing">
            <img class="brand-logo" src="/Agile-logo.png" alt="Agile Workplace Staffing" onerror="this.style.display='none';this.nextElementSibling.style.display='block'">
            <div class="brand-fallback" style="display:none">
              <p class="brand-name">Agile Workplace Staffing</p>
              <p class="brand-subtitle">Staff Dashboard</p>
            </div>
          </div>
          <div class="topbar-actions">
            <div class="language-toggle" aria-label="${t('languageLabel')}">
              <button class="lang-button" data-lang="en" aria-pressed="${state.language === 'en'}">EN</button>
              <button class="lang-button" data-lang="es" aria-pressed="${state.language === 'es'}">ES</button>
            </div>
          </div>
        </div>
      </header>

      <main class="section">
        <div class="container">
          <div class="section-head dashboard-head">
            <div>
              <p class="eyebrow">${t('dashboardEyebrow')}</p>
              <h1 class="section-title">${t('dashboardTitle')}</h1>
              <p class="section-copy">${t('dashboardCopy')}</p>
            </div>
            <div class="role-box">
              <span class="live-chip">${t('liveIndicator')}</span>
              <span class="muted">${t('waitingLabel')}: ${getSummary(items).waiting}</span>
            </div>
          </div>

          <div class="dashboard-grid">
            <section class="dashboard-main">
              <div class="dashboard-toolbar">
                <div>
                  <h2>${t('summaryTitle')}</h2>
                  <p class="muted">${formatDateLabel(state.filters.date)}</p>
                </div>
                <button class="secondary-button" id="export-btn" type="button">${t('exportCsv')}</button>
              </div>

              <div class="summary-grid">
                ${renderSummaryCard(t('total'), summary.total)}
                ${renderSummaryCard(t('waiting'), summary.waiting)}
                ${renderSummaryCard(t('inProgress'), summary.inProgress)}
                ${renderSummaryCard(t('completed'), summary.completed)}
                ${renderSummaryCard(t('noShow'), summary.noShow)}
              </div>

              <div class="filter-bar">
              <input type="date" id="filter-date" value="${state.filters.date}" aria-label="${t('filterDate')}">
              <select id="filter-recruiter" aria-label="${t('filterRecruiter')}">
                <option value="">${t('allRecruiters')}</option>
                  ${staffMembers.slice(1).map((name) => `<option value="${name}" ${state.filters.recruiter === name ? 'selected' : ''}>${name}</option>`).join('')}
              </select>
              <select id="filter-visit" aria-label="${t('filterVisit')}">
                <option value="">${t('allVisits')}</option>
                  ${visitFocuses.map((reason) => `<option value="${reason}" ${state.filters.visit === reason ? 'selected' : ''}>${reason}</option>`).join('')}
                </select>
                <select id="filter-status" aria-label="${t('filterStatus')}">
                  <option value="">${t('allStatuses')}</option>
                  ${statuses.map((status) => `<option value="${status}" ${state.filters.status === status ? 'selected' : ''}>${status}</option>`).join('')}
                </select>
              </div>

              <div class="table-shell">${renderTable(items)}</div>
            </section>

            ${renderDetails(selected)}
          </div>

          ${renderDeliveryNotes()}
        </div>
      </main>
    </div>
  `;
  bind();
}

function exportCsv() {
  const rows = getFilteredCheckins();
  const header = ['Full Name', 'Phone', 'Email', 'Visit Focus', 'Staff Member', 'Status', 'Checked In'];
  const csv = [header, ...rows.map((item) => [
    item.fullName,
    item.phone,
    item.email,
    item.visitFocus,
    item.staffMember || t('assignedFallback'),
    item.status,
    item.createdAt,
  ])].map((row) => row.map((value) => `"${String(value).replace(/"/g, '""')}"`).join(',')).join('\n');

  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `agilewps-admin-${state.filters.date || 'all'}.csv`;
  link.click();
  URL.revokeObjectURL(url);
}

function bind() {
  document.querySelectorAll('[data-lang]').forEach((button) => {
    button.addEventListener('click', () => {
      state.language = button.dataset.lang;
      render();
    });
  });

  document.querySelector('#filter-date')?.addEventListener('change', (event) => {
    state.filters.date = event.target.value;
    render();
  });

  document.querySelector('#filter-recruiter')?.addEventListener('change', (event) => {
    state.filters.recruiter = event.target.value;
    render();
  });

  document.querySelector('#filter-visit')?.addEventListener('change', (event) => {
    state.filters.visit = event.target.value;
    render();
  });

  document.querySelector('#filter-status')?.addEventListener('change', (event) => {
    state.filters.status = event.target.value;
    render();
  });

  document.querySelectorAll('[data-id]').forEach((row) => {
    row.addEventListener('click', () => {
      state.selectedId = row.dataset.id;
      render();
    });
  });

  document.querySelectorAll('[data-status]').forEach((button) => {
    button.addEventListener('click', () => {
      const selected = state.checkins.find((item) => item.id === state.selectedId);
      if (!selected) return;
      const updated = state.checkins.map((item) => (item.id === selected.id ? { ...item, status: button.dataset.status, updatedAt: new Date().toISOString() } : item));
      saveCheckins(updated);
      state.message = t('statusUpdated');
      render();
    });
  });

  document.querySelectorAll('[data-delete]').forEach((button) => {
    button.addEventListener('click', () => {
      const id = button.dataset.delete;
      if (!window.confirm(t('deleteConfirm'))) return;
      const updated = state.checkins.filter((item) => item.id !== id);
      saveCheckins(updated);
      state.selectedId = updated[0]?.id || null;
      render();
    });
  });

  document.querySelector('#export-btn')?.addEventListener('click', exportCsv);
}

function init() {
  state.checkins = loadCheckins();
  state.selectedId = state.checkins[0]?.id || null;
  render();

  window.addEventListener('storage', (event) => {
    if (event.key === STORAGE_KEY) {
      state.checkins = event.newValue ? JSON.parse(event.newValue).map(normalizeCheckin) : [];
      render();
    }
  });
}

init();
