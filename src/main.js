const STORAGE_KEY = 'agilewps-checkins-v2';
const CHANNEL_NAME = 'agilewps-checkins-live';

const staffMembers = ['Any available staff member', 'Cesar Suarez', 'Yelisa Murcia', 'Johanna Tavares', 'Sharling Laguna'];
const visitFocuses = ['Interview', 'Onboarding', 'Document drop-off', 'Job search', 'Recruiting', 'Billing', 'Payroll', 'Finance', 'Sales', 'Benefits', 'Other'];
const visitReasons = visitFocuses;
const staffMemberNames = ['Cesar Suarez', 'Yelisa Murcia', 'Johanna Tavares', 'Sharling Laguna', 'Margarita Valencia', 'Victor Torres'];
const applicantStatuses = [
  'Not an applicant',
  'New applicant',
  'Returning applicant or employee',
];
const languages = ['English', 'Spanish', 'Portuguese', 'French', 'Other'];
const statuses = ['Waiting', 'Seen', 'In Progress', 'Completed', 'No-Show'];
const roles = ['Admin', 'Recruiter', 'Front Desk'];

const copy = {
  en: {
    languageLabel: 'Language',
    navVisitor: 'Visitor Check-In',
    navDashboard: 'Staff Dashboard',
    roleLabel: 'Access mode',
    roleNote: 'Use the role switch to preview permissions. Production auth should come from the backend.',
    heroEyebrow: 'Agile Workplace Staffing',
    heroTitle: 'Digital check-in for visitors, applicants, and employees.',
    heroCopy: 'Replace paper intake with a clean, fast hub that records who arrived, why they are here, and which staff member needs to respond.',
    heroCta: 'Start check-in',
    heroDashboardCta: 'Open dashboard',
    statOneValue: '2 min',
    statOneLabel: 'Intake target',
    statTwoValue: 'Live',
    statTwoLabel: 'Queue updates',
    statThreeValue: 'PII',
    statThreeLabel: 'Consent required',
    snapshotTitle: 'Built for staffing office traffic',
    snapshotCopy: 'Everything is tuned for front desk speed, staff visibility, and simple handoff between teams.',
    snapshotOneTitle: 'Visitor intake',
    snapshotOneCopy: 'Capture required details once and reuse them across check-in, confirmation, and reporting.',
    snapshotTwoTitle: 'Live operations',
    snapshotTwoCopy: 'Staff can see new arrivals, filter the queue, and update status as visits move forward.',
    snapshotThreeTitle: 'Protective controls',
    snapshotThreeCopy: 'Consent, privacy notice, role-based access, and secure data handling are part of the flow.',
    formEyebrow: 'Visitor flow',
    formTitle: 'Check in at the front desk',
    formCopy: 'Complete the fields below. Time is captured automatically when the form is submitted.',
    contactTitle: 'Contact details',
    firstName: 'First name',
    lastName: 'Last name',
    phone: 'Phone number',
    email: 'Email address',
    visitTitle: 'Visit details',
    visitFocus: 'Visit focus',
    visitFocusOther: 'If other, tell us more',
    applicantType: 'Applicant status',
    newApplicant: 'New applicant',
    returningApplicant: 'Returning applicant or employee',
    preferredLanguage: 'Preferred language',
    staffMember: 'Staff member you are meeting with',
    notesTitle: 'Notes and consent',
    consent: 'I consent to AgileWPS collecting and using this information for visitor intake, recruiting, onboarding, and office support.',
    privacy: 'Privacy notice',
    submit: 'Submit check-in',
    timestampLabel: 'Date and time',
    timestampHint: 'Captured automatically on submission.',
    required: 'This field is required.',
    emailInvalid: 'Enter a valid email address.',
    phoneInvalid: 'Enter a valid phone number.',
    consentRequired: 'Consent is required before checking in.',
    confirmTitle: 'You are checked in',
    checkedInAt: 'Checked in at',
    assignedRecruiter: 'Staff member',
    nextSteps: 'Next steps',
    nextStepsText: 'Please take a seat. A team member will call your name shortly.',
    newCheckIn: 'New check-in',
    notificationTitle: 'Notification',
    notificationNotice: 'A staff-member notification email will be sent automatically if one is assigned.',
  },
  es: {
    languageLabel: 'Idioma',
    navVisitor: 'Registro de visita',
    navDashboard: 'Panel del equipo',
    roleLabel: 'Modo de acceso',
    roleNote: 'Use el selector de rol para previsualizar permisos. La autenticacion real debe venir del backend.',
    heroEyebrow: 'Agile Workplace Staffing',
    heroTitle: 'Registro digital para visitantes, solicitantes y empleados.',
    heroCopy: 'Reemplace los formularios en papel con un flujo limpio y rapido que registra quien llego, por que esta aqui y que miembro del equipo debe responder.',
    heroCta: 'Iniciar registro',
    heroDashboardCta: 'Abrir panel',
    statOneValue: '2 min',
    statOneLabel: 'Meta de registro',
    statTwoValue: 'En vivo',
    statTwoLabel: 'Actualizaciones',
    statThreeValue: 'PII',
    statThreeLabel: 'Consentimiento requerido',
    snapshotTitle: 'Disenado para una oficina de empleo',
    snapshotCopy: 'Todo esta pensado para la velocidad de recepcion, la visibilidad del equipo y el traspaso simple entre equipos.',
    snapshotOneTitle: 'Ingreso del visitante',
    snapshotOneCopy: 'Capture los datos requeridos una sola vez y reutilicelos en registro, confirmacion y reportes.',
    snapshotTwoTitle: 'Operacion en vivo',
    snapshotTwoCopy: 'El equipo puede ver llegadas nuevas, filtrar la cola y actualizar estados a medida que avanza la visita.',
    snapshotThreeTitle: 'Controles de proteccion',
    snapshotThreeCopy: 'Consentimiento, aviso de privacidad, acceso por rol y manejo seguro de datos forman parte del flujo.',
    formEyebrow: 'Flujo de visitante',
    formTitle: 'Registrese en recepcion',
    formCopy: 'Complete los campos abajo. La hora se captura automaticamente al enviar el formulario.',
    contactTitle: 'Datos de contacto',
    firstName: 'Nombre',
    lastName: 'Apellido',
    phone: 'Telefono',
    email: 'Correo electronico',
    visitTitle: 'Datos de la visita',
    visitFocus: 'Enfoque de la visita',
    visitFocusOther: 'Si es otro, cuentenos mas',
    applicantType: 'Estado del solicitante',
    newApplicant: 'Nuevo solicitante',
    returningApplicant: 'Solicitante o empleado que regresa',
    preferredLanguage: 'Idioma preferido',
    staffMember: 'Miembro del equipo con quien se reunira',
    notesTitle: 'Notas y consentimiento',
    consent: 'Doy mi consentimiento para que AgileWPS recopile y use esta informacion para registro de visitantes, reclutamiento, onboarding y apoyo de oficina.',
    privacy: 'Aviso de privacidad',
    submit: 'Enviar registro',
    timestampLabel: 'Fecha y hora',
    timestampHint: 'Se captura automaticamente al enviar.',
    required: 'Este campo es obligatorio.',
    emailInvalid: 'Ingrese un correo valido.',
    phoneInvalid: 'Ingrese un telefono valido.',
    consentRequired: 'Se requiere consentimiento antes de registrarse.',
    confirmTitle: 'Registro completado',
    checkedInAt: 'Registrado a las',
    assignedRecruiter: 'Miembro del equipo',
    nextSteps: 'Siguientes pasos',
    nextStepsText: 'Tome asiento. Un miembro del equipo lo llamara en breve.',
    newCheckIn: 'Nuevo registro',
    notificationTitle: 'Notificacion',
    notificationNotice: 'Se enviara automaticamente un correo al miembro del equipo si hay uno asignado.',
  },
};

const todayIso = () => new Date().toISOString().slice(0, 10);

let state = {
  language: 'en',
  view: 'visitor',
  role: 'Front Desk',
  checkins: [],
  selectedId: null,
  confirmation: null,
  filters: {
    date: todayIso(),
    recruiter: '',
    visit: '',
    status: '',
  },
  errors: {},
  statusMessage: '',
};

const channel = 'BroadcastChannel' in window ? new BroadcastChannel(CHANNEL_NAME) : null;

const api = {
  async listCheckins() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return JSON.parse(stored).map(normalizeCheckin);

    const seeded = seedCheckins().map(normalizeCheckin);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(seeded));
    return seeded;
  },
  async createCheckin(payload) {
    const checkins = await this.listCheckins();
    const created = {
      id: crypto.randomUUID(),
      status: 'Waiting',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      ...payload,
    };
    checkins.unshift(created);
    saveCheckins(checkins);
    return created;
  },
  async updateCheckin(id, patch) {
    const checkins = await this.listCheckins();
    const updated = checkins.map((item) => (item.id === id ? { ...item, ...patch, updatedAt: new Date().toISOString() } : item));
    saveCheckins(updated);
    return updated;
  },
  async deleteCheckin(id) {
    const checkins = await this.listCheckins();
    const updated = checkins.filter((item) => item.id !== id);
    saveCheckins(updated);
    return updated;
  },
};

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
      notifications: ['sms', 'email'],
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
      notifications: ['email'],
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
      notifications: [],
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

function saveCheckins(checkins) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(checkins));
  state.checkins = checkins;
  if (channel) channel.postMessage({ type: 'sync' });
}

function t(key) {
  return copy[state.language][key] || copy.en[key] || key;
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
  if (!value) return t('allStatuses');
  return new Intl.DateTimeFormat(state.language === 'es' ? 'es-US' : 'en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(`${value}T12:00:00`));
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

function render() {
  const app = document.querySelector('#app');
  app.innerHTML = `
    <div class="app-shell">
      ${renderTopbar()}
      <main>
        ${renderVisitorView()}
      </main>
      ${renderFooter()}
      <div class="sr-only" aria-live="polite">${escapeHtml(state.statusMessage)}</div>
    </div>
  `;
  bindEvents();
}

function renderTopbar() {
  return `
    <header class="topbar">
      <div class="container topbar-inner">
        <div class="brand" aria-label="Agile Workplace Staffing">
          <img class="brand-logo" src="/Agile-logo.png" alt="Agile Workplace Staffing" onerror="this.style.display='none';this.nextElementSibling.style.display='block'">
          <div class="brand-fallback" style="display:none">
            <p class="brand-name">Agile Workplace Staffing</p>
            <p class="brand-subtitle">Check-In Hub</p>
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
  `;
}

function renderVisitorView() {
  if (state.confirmation) return renderConfirmation();

  return `
    <section class="section" id="checkin-form">
      <div class="container">
        <div class="section-head">
          <div>
            <p class="eyebrow">${t('formEyebrow')}</p>
            <h2 class="section-title">${t('formTitle')}</h2>
            <p class="section-copy">${t('formCopy')}</p>
          </div>
        </div>
        ${renderForm()}
      </div>
    </section>
  `;
}

function renderForm() {
  const now = formatDateTime(new Date().toISOString());

  return `
    <form class="form-card" id="visitor-form" novalidate>
      <div class="form-grid">
        <div class="field-block">
          <h3>${t('contactTitle')}</h3>
          <div class="field-grid">
            ${fieldInput('firstName', t('firstName'), 'text', true, 'Jordan', 'given-name')}
            ${fieldInput('lastName', t('lastName'), 'text', true, 'Smith', 'family-name')}
            ${fieldInput('phone', t('phone'), 'tel', true, '(603) 555-0123', 'tel')}
            ${fieldInput('email', t('email'), 'email', true, 'name@example.com', 'email')}
          </div>
        </div>

        <div class="field-block">
          <h3>${t('visitTitle')}</h3>
          <div class="field-grid">
            ${radioGroup('visitFocus', t('visitFocus'), visitFocuses)}
            ${fieldInput('visitFocusOther', t('visitFocusOther'), 'text', false, 'Share the reason here')}
            ${selectField('applicantType', t('applicantType'), applicantStatuses, true)}
            ${selectField('preferredLanguage', t('preferredLanguage'), languages, true)}
            <div id="staff-member-slot" class="field full"></div>
          </div>
        </div>

        <div class="field-block">
          <h3>${t('notesTitle')}</h3>
          <div class="field-grid">
            <div class="field full">
              <div class="timestamp-panel">
                <div>
                  <span>${t('timestampLabel')}</span>
                  <strong>${now}</strong>
                </div>
                <p>${t('timestampHint')}</p>
              </div>
            </div>
            <div class="field full notice-inline">
              <strong>${t('notificationNotice')}</strong>
            </div>
          </div>
        </div>
      </div>

      <label class="consent-row">
        <input id="consent" name="consent" type="checkbox" aria-invalid="${Boolean(state.errors.consent)}">
        <span>
          ${t('consent')}
          <a href="https://agilewps.com/privacy-policy/" target="_blank" rel="noreferrer">${t('privacy')}</a>
        </span>
      </label>
      ${errorFor('consent')}

      <div class="form-footer">
        <div class="muted small-note">${t('timestampHint')}</div>
        <button class="primary-button" type="submit">${t('submit')}</button>
      </div>
    </form>
  `;
}

function updateStaffMemberField() {
  const selected = document.querySelector('input[name="visitFocus"]:checked')?.value;
  const slot = document.querySelector('#staff-member-slot');

  if (!slot) return;

  const visible = selected && selected !== 'Job search';
  slot.innerHTML = visible ? renderStaffMemberField() : '';
  if (!visible) {
    delete state.errors.staffMember;
  }
}

function renderStaffMemberField() {
  return `
    <label for="staffMember">${t('staffMember')} *</label>
    <select id="staffMember" name="staffMember" required aria-invalid="${Boolean(state.errors.staffMember)}">
      <option value="">Select</option>
      ${staffMemberNames.map((name) => `<option value="${name}">${name}</option>`).join('')}
    </select>
    ${errorFor('staffMember')}
  `;
}

function fieldInput(name, label, type, required, placeholder, autoComplete = 'off') {
  return `
    <div class="field ${name === 'visitFocusOther' ? 'full' : ''}">
      <label for="${name}">${label}${required ? ' *' : ''}</label>
      <input
        id="${name}"
        name="${name}"
        type="${type}"
        ${required ? 'required' : ''}
        ${placeholder ? `placeholder="${placeholder}"` : ''}
        ${autoComplete ? `autocomplete="${autoComplete}"` : ''}
        aria-invalid="${Boolean(state.errors[name])}"
      />
      ${errorFor(name)}
    </div>
  `;
}

function selectField(name, label, options, required) {
  return `
    <div class="field">
      <label for="${name}">${label}${required ? ' *' : ''}</label>
      <select id="${name}" name="${name}" ${required ? 'required' : ''} aria-invalid="${Boolean(state.errors[name])}">
        <option value="">Select</option>
        ${options.map((option) => `<option value="${option}">${option}</option>`).join('')}
      </select>
      ${errorFor(name)}
    </div>
  `;
}

function radioGroup(name, label, options) {
  return `
    <fieldset class="field full">
      <legend>${label}</legend>
      <div class="chip-group">
        ${options.map((option, index) => `
          <label class="chip-option">
            <input type="radio" name="${name}" value="${option}" ${index === 0 ? 'checked' : ''}>
            <span>${option}</span>
          </label>
        `).join('')}
      </div>
    </fieldset>
  `;
}

function errorFor(name) {
  return `<span class="error-message">${state.errors[name] || ''}</span>`;
}

function renderConfirmation() {
  const item = state.confirmation;
  const fullName = joinName(item.firstName, item.lastName);
  const staffMember = item.visitFocus === 'Job search' ? '' : (item.staffMember || t('assignedFallback'));

  return `
    <section class="section">
      <div class="container">
        <article class="confirmation-card">
          <div class="confirmation-main">
            <p class="eyebrow">${t('confirmTitle')}</p>
            <h1 class="confirmation-name">${escapeHtml(fullName)}</h1>
            <div class="confirmation-meta">
              <div class="meta-row">
                <span>${t('checkedInAt')}</span>
                <strong>${formatDateTime(item.createdAt)}</strong>
              </div>
              ${item.visitFocus !== 'Job search' ? `
                <div class="meta-row">
                  <span>${t('staffMember')}</span>
                  <strong>${escapeHtml(staffMember)}</strong>
                </div>
              ` : ''}
              <div class="meta-row">
                <span>${t('visit')}</span>
                <strong>${escapeHtml(item.visitFocus)}${item.visitFocusOther ? ` - ${escapeHtml(item.visitFocusOther)}` : ''}</strong>
              </div>
              <div class="meta-row">
                <span>${t('notificationTitle')}</span>
                <strong>${t('notificationNotice')}</strong>
              </div>
            </div>
            <h2>${t('nextSteps')}</h2>
            <p>${t('nextStepsText')}</p>
            <div class="confirmation-actions">
              <button class="primary-button" data-reset-confirmation type="button">${t('newCheckIn')}</button>
            </div>
          </div>
        </article>
      </div>
    </section>
  `;
}

function renderDashboardView() {
  const filtered = getFilteredCheckins();
  const selected = resolveSelectedItem(filtered);
  const summary = getSummary(filtered);
  const canExport = state.role === 'Admin' || state.role === 'Front Desk';
  const canDelete = state.role === 'Admin';

  return `
    <section class="section">
      <div class="container">
        <div class="section-head dashboard-head">
          <div>
            <p class="eyebrow">${t('dashboardEyebrow')}</p>
            <h1 class="section-title">${t('dashboardTitle')}</h1>
            <p class="section-copy">${t('dashboardCopy')}</p>
          </div>
          <div class="role-box">
            <label for="role">${t('roleLabel')}</label>
            <select id="role" name="role">
              ${roles.map((role) => `<option ${role === state.role ? 'selected' : ''}>${role}</option>`).join('')}
            </select>
            <span>${t('roleNote')}</span>
          </div>
        </div>

        <div class="dashboard-grid">
          <section class="dashboard-main">
            <div class="dashboard-toolbar">
              <div>
                <h2>${t('summaryTitle')}</h2>
                <p class="muted">${formatDateLabel(state.filters.date)}</p>
              </div>
              ${canExport ? `<button class="secondary-button" data-export type="button">${t('exportCsv')}</button>` : ''}
            </div>

            <div class="summary-grid">
              ${summaryCard(t('total'), summary.total)}
              ${summaryCard(t('waiting'), summary.waiting)}
              ${summaryCard(t('inProgress'), summary.inProgress)}
              ${summaryCard(t('completed'), summary.completed)}
              ${summaryCard(t('noShow'), summary.noShow)}
            </div>

            <div class="filter-bar">
              <input type="date" id="filter-date" value="${state.filters.date}" aria-label="${t('filterDate')}">
              <select id="filter-recruiter" aria-label="${t('filterRecruiter')}">
                <option value="">${t('allRecruiters')}</option>
                ${staffMembers.slice(1).map((name) => `<option value="${name}" ${state.filters.recruiter === name ? 'selected' : ''}>${name}</option>`).join('')}
              </select>
              <select id="filter-visit" aria-label="${t('filterVisit')}">
                <option value="">${t('allVisits')}</option>
                ${visitReasons.map((reason) => `<option value="${reason}" ${state.filters.visit === reason ? 'selected' : ''}>${reason}</option>`).join('')}
              </select>
              <select id="filter-status" aria-label="${t('filterStatus')}">
                <option value="">${t('allStatuses')}</option>
                ${statuses.map((status) => `<option value="${status}" ${state.filters.status === status ? 'selected' : ''}>${status}</option>`).join('')}
              </select>
            </div>

            <div class="table-shell">
              ${renderTable(filtered)}
            </div>
          </section>

          ${renderDetails(selected, canDelete)}
        </div>

        ${renderDeliveryNotes()}
      </div>
    </section>
  `;
}

function summaryCard(label, value) {
  return `
    <div class="summary-card">
      <strong>${value}</strong>
      <span>${label}</span>
    </div>
  `;
}

function renderTable(items) {
  if (!items.length) {
    return `<p class="empty-state">${t('noMatches')}</p>`;
  }

  return `
    <table>
      <thead>
        <tr>
          <th>${t('visitor')}</th>
          <th>${t('visit')}</th>
          <th>${t('assignedRecruiter')}</th>
          <th>${t('time')}</th>
          <th>${t('status')}</th>
          <th>${t('alerts')}</th>
        </tr>
      </thead>
      <tbody>
        ${items.map((item) => `
          <tr data-select="${item.id}" class="${item.id === state.selectedId ? 'selected' : ''}">
            <td>
              <span class="visitor-name">${escapeHtml(item.fullName)}</span>
              <span class="row-sub">${escapeHtml(item.phone)}</span>
            </td>
            <td>
              <span>${escapeHtml(item.visitFocus)}${item.visitFocusOther ? ` - ${escapeHtml(item.visitFocusOther)}` : ''}</span>
              <span class="row-sub">${escapeHtml(item.staffMember || t('assignedFallback'))}</span>
            </td>
            <td>${escapeHtml(item.staffMember || t('assignedFallback'))}</td>
            <td>${formatTime(item.createdAt)}</td>
            <td>${statusBadge(item.status)}</td>
            <td>${renderAlerts(item.notifications)}</td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  `;
}

function renderAlerts(notifications = []) {
  if (!notifications.length) return '<span class="row-sub">None</span>';
  return `<span>${notifications.map((value) => value.toUpperCase()).join(', ')}</span>`;
}

function renderDetails(item, canDelete) {
  if (!item) {
    return `
      <aside class="details-panel">
        <div class="details-head">
          <h2>${t('details')}</h2>
        </div>
        <div class="details-body">
          <p class="empty-state">${t('selectVisitor')}</p>
          <div class="permission-card">
            <strong>${t('permissionsTitle')}</strong>
            <p>${t('permissionsText')}</p>
          </div>
        </div>
      </aside>
    `;
  }

  return `
    <aside class="details-panel">
      <div class="details-head">
        <div>
          <h2>${escapeHtml(item.fullName)}</h2>
          <p class="muted">${formatDateTime(item.createdAt)}</p>
        </div>
        ${statusBadge(item.status)}
      </div>
      <div class="details-body">
        <div class="status-actions" aria-label="Update visitor status">
          ${statusActionButtons(item)}
        </div>
        <div class="detail-list">
          ${detailRow(t('phone'), item.phone)}
          ${detailRow(t('email'), item.email)}
          ${detailRow(t('applicantType'), item.applicantType)}
          ${detailRow(t('preferredLanguage'), item.preferredLanguage)}
          ${detailRow(t('visitFocus'), item.visitFocus + (item.visitFocusOther ? ` - ${item.visitFocusOther}` : ''))}
          ${item.visitFocus !== 'Job search' ? detailRow(t('staffMember'), item.staffMember || t('assignedFallback')) : ''}
        </div>
        ${renderStatusControls(item, canDelete)}
        <div class="permission-card">
          <strong>${t('permissionsTitle')}</strong>
          <p>${t('permissionsText')}</p>
        </div>
      </div>
    </aside>
  `;
}

function statusActionButtons(item) {
  return statuses.map((status) => `
    <button type="button" data-status="${status}" class="${item.status === status ? 'active' : ''}">
      ${escapeHtml(status)}
    </button>
  `).join('');
}

function renderStatusControls(item, canDelete) {
  return `
    <div class="detail-actions">
      ${canDelete ? `<button class="danger-button" data-delete="${item.id}" type="button">${t('actionDelete')}</button>` : ''}
    </div>
  `;
}

function detailRow(label, value) {
  return `
    <div class="detail-row">
      <span>${label}</span>
      <strong>${escapeHtml(value)}</strong>
    </div>
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
POST /api/checkins
PATCH /api/checkins/:id
DELETE /api/checkins/:id
GET /api/checkins/export.csv</code>
          </div>
          <div class="code-item">
            <strong>${t('schemaTitle')}</strong>
            <code>visitors(id, full_name, phone, email)
checkins(id, visitor_id, visit_focus, staff_member, status, created_at)
audit_log(id, actor_id, action)</code>
          </div>
          <div class="code-item">
            <strong>${t('securityTitle')}</strong>
            <code>RBAC: Admin, Recruiter, Front Desk
PII encrypted at rest
Consent + privacy notice required
Auto-email staff member on check-in</code>
          </div>
          <div class="code-item">
            <strong>${t('notificationTitle')}</strong>
            <code>Staff member email sent automatically
Optional thank-you message
Delivery audit logging</code>
          </div>
        </div>
        <p class="muted note-foot">${t('notificationText')} ${t('securityText')}</p>
      </div>
    </section>
  `;
}

function renderFooter() {
  return `
    <footer class="footer">
      <div class="container footer-inner">
        <div>
          <strong>Agile Workplace Staffing</strong>
          <p>Manufacturing, warehouse, and production staffing across New Hampshire and Massachusetts.</p>
        </div>
        <p>(603) 821-7521 - info@agilewps.com</p>
      </div>
    </footer>
  `;
}

function bindEvents() {
  document.querySelectorAll('[data-view]').forEach((button) => {
    button.addEventListener('click', () => {
      state.view = button.dataset.view;
      state.confirmation = null;
      state.statusMessage = '';
      render();
    });
  });

  document.querySelectorAll('[data-lang]').forEach((button) => {
    button.addEventListener('click', () => {
      state.language = button.dataset.lang;
      render();
    });
  });

  document.querySelector('#visitor-form')?.addEventListener('submit', handleSubmit);
  document.querySelectorAll('input[name="visitFocus"]').forEach((input) => {
    input.addEventListener('change', updateStaffMemberField);
  });
  updateStaffMemberField();

  document.querySelector('[data-reset-confirmation]')?.addEventListener('click', () => {
    state.confirmation = null;
    state.errors = {};
    render();
  });

  document.querySelector('#role')?.addEventListener('change', (event) => {
    state.role = event.target.value;
    render();
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

  document.querySelectorAll('[data-select]').forEach((row) => {
    row.addEventListener('click', () => {
      state.selectedId = row.dataset.select;
      render();
    });
  });

  document.querySelectorAll('[data-status]').forEach((button) => {
    button.addEventListener('click', async () => {
      const selected = state.checkins.find((item) => item.id === state.selectedId);
      if (!selected) return;
      state.checkins = await api.updateCheckin(selected.id, { status: button.dataset.status });
      state.statusMessage = `${selected.fullName} -> ${button.dataset.status}`;
      render();
    });
  });

  document.querySelectorAll('[data-delete]').forEach((button) => {
    button.addEventListener('click', async () => {
      const id = button.dataset.delete;
      if (!window.confirm(t('deleteConfirm'))) return;
      state.checkins = await api.deleteCheckin(id);
      state.selectedId = state.checkins[0]?.id || null;
      state.statusMessage = 'Record deleted';
      render();
    });
  });

  document.querySelector('[data-export]')?.addEventListener('click', exportCsv);
}

function handleSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const formData = new FormData(form);
  const visitFocus = String(formData.get('visitFocus') || '').trim();
  const visitFocusOther = String(formData.get('visitFocusOther') || '').trim();
  const staffMember = String(formData.get('staffMember') || '').trim();
  const needsStaffMember = visitFocus !== 'Job search';

  const payload = {
    firstName: String(formData.get('firstName') || '').trim(),
    lastName: String(formData.get('lastName') || '').trim(),
    phone: String(formData.get('phone') || '').trim(),
    email: String(formData.get('email') || '').trim(),
    visitFocus,
    visitFocusOther,
    applicantType: String(formData.get('applicantType') || '').trim(),
    preferredLanguage: String(formData.get('preferredLanguage') || '').trim(),
    staffMember: needsStaffMember ? staffMember : '',
    consent: formData.get('consent') === 'on',
  };

  state.errors = validate(payload);
  if (Object.keys(state.errors).length) {
    render();
    document.querySelector('[aria-invalid="true"]')?.focus();
    return;
  }

  api.createCheckin(payload).then(async (created) => {
    state.checkins = await api.listCheckins();
    state.confirmation = created;
    state.selectedId = created.id;
    state.errors = {};
    state.statusMessage = `${joinName(created.firstName, created.lastName)} checked in`;
    render();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

function validate(payload) {
  const errors = {};
  ['firstName', 'lastName', 'phone', 'email', 'visitFocus', 'applicantType', 'preferredLanguage'].forEach((key) => {
    if (!payload[key]) errors[key] = t('required');
  });
  if (payload.visitFocus === 'Other' && !payload.visitFocusOther) errors.visitFocusOther = t('required');
  if (payload.visitFocus !== 'Job search' && !payload.staffMember) errors.staffMember = t('required');
  if (payload.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) errors.email = t('emailInvalid');
  if (payload.phone && !/^[0-9()+\-\s.]{7,}$/.test(payload.phone)) errors.phone = t('phoneInvalid');
  if (!payload.consent) errors.consent = t('consentRequired');
  return errors;
}

function resolveSelectedItem(filtered) {
  if (state.selectedId) {
    const current = filtered.find((item) => item.id === state.selectedId);
    if (current) return current;
  }

  const first = filtered[0] || null;
  if (first) state.selectedId = first.id;
  return first;
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
  ])].map((row) => row.map(csvCell).join(',')).join('\n');

  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `agilewps-checkins-${state.filters.date || 'all'}.csv`;
  link.click();
  URL.revokeObjectURL(url);
}

function csvCell(value) {
  return `"${String(value).replace(/"/g, '""')}"`;
}

function init() {
  state.view = 'visitor';
  api.listCheckins().then((checkins) => {
    state.checkins = checkins;
    state.selectedId = checkins[0]?.id || null;
    render();
  });

  window.addEventListener('storage', (event) => {
    if (event.key === STORAGE_KEY) {
      state.checkins = event.newValue ? JSON.parse(event.newValue).map(normalizeCheckin) : [];
      render();
    }
  });

  channel?.addEventListener('message', async (event) => {
    if (event.data?.type === 'sync') {
      state.checkins = await api.listCheckins();
      render();
    }
  });
}

init();
