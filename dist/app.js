let questionSeed = [
  {
    id: "q1",
    category: "Kuulamine ja märkmete tegemine",
    title: "Struktuurne kuulamine",
    subskills: "Olulise äratundmine · korratusest korra loomine",
    levels: {
      1: "Kuulab kõne ja saab selges kõnes peamistest argumentidest ja ümberlüketest aru. Suudab keskenduda algusest lõpuni.",
      2: "Kuulab kõne ja saab enamikes kõnedes raamist, peamistest argumentidest ja ümberlüketest aru.",
      3: "Kuulab kõne ja saab ka segases kõnes raamist ja argumentidest täies mahus aru, sealhulgas seletustest, näidetest ja mõjudest.",
    },
  },
  {
    id: "q2",
    category: "Kuulamine ja märkmete tegemine",
    title: "Märkmete tegemine",
    subskills: "Väitluslehe ülesehitus · lühendamine ja visualiseerimine",
    levels: {
      1: "Saab paberile üksikud mõtted kirja.",
      2: "Saab paberile peamised argumendiliinid kirja. Paneb sisu kirja nii, et seda on mugav kõnes lugeda.",
      3: "Saab paberile peamised argumendiliinid kirja nii, et nende põhjal saab väitluse sisu taasesitada. Koostab märkmeid tehes kõnelemiskava.",
    },
  },
  {
    id: "q3",
    category: "Argumenteeriv esitus",
    title: "Argumenteerimine",
    subskills: "Argumendi struktuur · mõju- ja tõenäosusanalüüs",
    levels: {
      1: "Koostab ja esitab lihtsamaid väide-seletus-näide-järeldus argumente.",
      2: "Toob välja, mis on argumendi mõju. Moodustab mitmetasandilisi argumente koos tõestusega.",
      3: "Tunneb ja esitab tüüpargumente koos tõestusega. Toob välja, mis on argumendi mõju ja tugevdab oma argumente.",
    },
  },
  {
    id: "q4",
    category: "Argumenteeriv esitus",
    title: "Ümberlükkamine",
    subskills: "Ümberlükkete tegemine · kaalumine",
    levels: {
      1: "Koostab lihtsamaid ümberlükkeid.",
      2: "Leiab enamikele argumentidele ümberlükke. Kaalub enamikes väitlustes, toetudes raamile.",
      3: "Tunneb ja kasutab argumendile vastavaid ümberlükkemeetodeid. Kaalub kõikides väitlustes, toetudes raamile.",
    },
  },
  {
    id: "q5",
    category: "Argumenteeriv esitus",
    title: "Vahemärkused",
    subskills: "Vahemärkuste esitamine · vahemärkuste kasutamine",
    levels: {
      1: "Julgeb esitada ja vastu võtta vahemärkusi.",
      2: "Esitab sisulisi vahemärkusi ja vastab vahemärkustele sisuliselt.",
      3: "Kasutab vahemärkuste esitamist ja vastamist strateegiliselt.",
    },
  },
  {
    id: "q6",
    category: "Argumenteeriv esitus",
    title: "Formaadi tundmine",
    subskills: "Kõne rollide teadmine · ajaplaanimine",
    levels: {
      1: "Teab formaadi reegleid ja kõnelejate rolle, kuid sageli unustab midagi neist praktikas.",
      2: "Formaat ja rolliootused on selged, kuid aja kasutamise tõhusamaks muutmise peale veel väga ei mõtle.",
      3: "Järgib mängleva kergusega formaadi reegleid ja rolliootuseid ning on väitluse jooksul hea ajaplaanija.",
    },
  },
  {
    id: "q7",
    category: "Argumenteeriv esitus",
    title: "Kaasuse koostamine",
    subskills: "Raami koostamine · tõestusmaterjali otsimine",
    levels: {
      1: "Otsib edukalt tõestusmaterjali. Koostab lihtsamate teemade puhul ausaid raame.",
      2: "Otsib edukalt tõestusmaterjali ja hindab kriitiliselt allikat. Koostab enamike teemade puhul ausaid raame.",
      3: "Otsib, analüüsib ja viitab edukalt tõestusmaterjalile. Koostab kõikide teemade puhul ausaid raame ning mõistab oma tõestuskoormist.",
    },
  },
  {
    id: "q8",
    category: "Avalik esinemine",
    title: "Stiil ja sõnakasutus",
    subskills: "Ärevuse kontrollimine · publiku kaasamine",
    levels: {
      1: "Julgeb võtta sõna, kuid ärevust on näha. Publikul või kohtunikul on kohati raske mõtet jälgida.",
      2: "Viisakas ja selge sõnakasutus. Mõte on jälgitav, kuid publiku või kohtunikuga eriti ei arvesta.",
      3: "Enesekindel ja kaasahaarav esineja. Mitmekesine sõnakasutus. Kõneleb publikule või kohtunikule ja käivitab neid.",
    },
  },
  {
    id: "q9",
    category: "Avalik esinemine",
    title: "Kõnetehnika",
    subskills: "Diktsioon ehk hääldus · parakeel",
    levels: {
      1: "Räägib kuuldavalt, aga ei pööra kõnetehnikale veel tähelepanu.",
      2: "Juhib kohati oma parakeelt ja diktsioon on selge.",
      3: "Parakeel toetab kõiges sisulist sõnumit.",
    },
  },
  {
    id: "q10",
    category: "Tagasisidestamine",
    title: "Refleksioon",
    subskills: "Enesearengu juhtimine",
    levels: {
      1: "Tunneb oma arengukohti.",
      2: "Tunneb oma arengukohti ja seostab neid tervikuga.",
      3: "Mõtestab endale juhiseid, kuidas ja kuhu suunas edasi areneda.",
    },
  },
  {
    id: "q11",
    category: "Tagasisidestamine",
    title: "Kohtunikutöö",
    subskills: "Võitluse kohta otsuse tegemine · tagasiside andmine",
    levels: {
      1: "Koostab väitlust kuulates tervikliku märkmelehe ja määrab väitluse võitja.",
      2: "Koostab väitlust kuulates tervikliku märkmelehe ja määrab väitluse võitja. Põhjendab oma otsust.",
      3: "Koostab väitlust kuulates tervikliku märkmelehe, määrab väitluse võitja ja annab nii kogu väitlejale kui ka igale väitlejale individuaalset tagasisidet.",
    },
  },
  {
    id: "q12",
    category: "Toetavad oskused",
    title: "Meeskonnatöö",
    subskills: "Rollide jagamine · tiimikaaslaste toetamine",
    levels: {
      1: "Töötab edukalt koos tuttavate väitluskaaslastega.",
      2: "Töötab edukalt kõikide väitluskaaslastega.",
      3: "Töötab edukalt kõikide väitluskaaslastega ja toetab kaaslasi ettevalmistusel.",
    },
  },
  {
    id: "q13",
    category: "Toetavad oskused",
    title: "Silmaring",
    subskills: "Meedia tarbimine · huvi maailmas toimuva vastu",
    levels: {
      1: "On kuulnud suurimatest vaidlusküsimustest ühiskonnas.",
      2: "Jälgib ajakirjandusmeediat ning on kursis peamiselt päevakajaliste teemadega Eestis ja sotsiaalmeedias.",
      3: "Jälgib nii Eesti kui ka välismeediat ja loeb peamisi ilmuvaid raporteid.",
    },
  },
];

const ratingValues = [1, 1.5, 2, 2.5, 3];
let categories = [...new Set(questionSeed.map((question) => question.category))];
const storageKey = "karli-test-state-v2";
const apiPrefix = "/api";

async function apiRequest(path, options = {}) {
  const headers = { "X-Karli-Client": "web", ...(options.body ? { "Content-Type": "application/json" } : {}), ...(options.headers || {}) };
  const response = await fetch(`${apiPrefix}${path}`, { credentials: "same-origin", ...options, headers });
  const payload = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(payload.error || "Teenusega ühenduse loomine ebaõnnestus.");
  return payload;
}

function applyRemoteState(payload) {
  state.user = {
    name: payload.user.name,
    email: payload.user.email,
    club: payload.user.club,
    role: payload.user.role,
    id: payload.user.id,
    clubId: payload.user.clubId,
  };
  state.backendConnected = true;
  questionSeed = payload.questions.map((question) => ({ ...question, id: String(question.id) }));
  categories = [...new Set(questionSeed.map((question) => question.category))];
  const latest = payload.history[payload.history.length - 1];
  state.answers = latest?.answers || {};
  state.history = payload.history.map((item) => ({
    date: item.date,
    average: Number(item.average),
    label: formatShortDate(item.date),
  }));
  state.draftAnswers = payload.draft?.answers || {};
  state.remoteAssessmentId = payload.draft?.id || null;
  state.dueDate = latest?.dueDate || null;
  state.inviteCode = payload.inviteCode || "";
  state.members = (payload.members || []).map((member) => ({
    ...member,
    id: String(member.id),
    average: Number(member.average || 0),
    last: member.last || null,
    status: member.dueDate ? (member.dueDate < new Date().toISOString().slice(0, 10) ? "late" : "due") : "new",
  }));
}

async function syncRemoteState() {
  const payload = await apiRequest("/state");
  applyRemoteState(payload);
  saveState();
}

async function startRemoteAssessment() {
  if (!state.backendConnected || state.remoteAssessmentId) return;
  const payload = await apiRequest("/assessments/start", { method: "POST", body: JSON.stringify({}) });
  state.remoteAssessmentId = payload.assessment.id;
  state.draftAnswers = payload.assessment.answers || {};
}

const defaultState = {
  view: "dashboard",
  authMode: "login",
  user: {
    name: "Katri Saar",
    email: "katri@näidis.ee",
    club: "Tallinna väitlusselts",
    role: "member",
  },
  answers: {
    q1: 2.5,
    q2: 2,
    q3: 2.5,
    q4: 2,
    q5: 2.5,
    q6: 2.5,
    q7: 2,
    q8: 2.5,
    q9: 2,
    q10: 3,
    q11: 2.5,
    q12: 3,
    q13: 2,
  },
  draftAnswers: {},
  history: [
    { date: "2026-04-12", average: 2.1, label: "Aprill 2026" },
    { date: "2026-07-08", average: 2.3, label: "Juuli 2026" },
    { date: "2026-10-04", average: 2.4, label: "Oktoober 2026" },
  ],
  lastCompleted: "2026-07-08",
  dueDate: "2026-10-08",
  questionOverrides: {},
  members: [
    { id: "m1", name: "Katri Saar", email: "katri@näidis.ee", average: 2.4, last: "2026-07-08", status: "due" },
    { id: "m2", name: "Rasmus Tamm", email: "rasmus@näidis.ee", average: 2.7, last: "2026-09-19", status: "ok" },
    { id: "m3", name: "Grete Pärn", email: "grete@näidis.ee", average: 1.9, last: "2026-05-11", status: "late" },
    { id: "m4", name: "Oskar Kask", email: "oskar@näidis.ee", average: 2.2, last: "2026-07-27", status: "due" },
  ],
  selectedMember: "m1",
  memberHistory: [],
  adminAssessments: {},
  backendConnected: false,
  remoteAssessmentId: null,
  adminRemoteAssessmentId: null,
  toast: "",
  inviteCode: "TALLINN2026",
};

let state = loadState();

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey));
    if (saved) {
      const merged = { ...structuredClone(defaultState), ...saved };
      applyQuestionOverrides(merged.questionOverrides || {});
      return merged;
    }
    return { ...structuredClone(defaultState), user: null };
  } catch {
    return { ...structuredClone(defaultState), user: null };
  }
}

function applyQuestionOverrides(overrides) {
  Object.entries(overrides).forEach(([id, override]) => {
    const question = questionSeed.find((item) => item.id === id);
    if (!question) return;
    question.title = override.title || question.title;
    question.levels = { ...question.levels, ...(override.levels || {}) };
  });
}

function saveState() {
  localStorage.setItem(storageKey, JSON.stringify(state));
}

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function initials(name) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function formatDate(dateString) {
  if (!dateString) return "määramata";
  return new Intl.DateTimeFormat("et-EE", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(`${dateString}T12:00:00`));
}

function formatShortDate(dateString) {
  if (!dateString) return "Määramata";
  return new Intl.DateTimeFormat("et-EE", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(`${dateString}T12:00:00`));
}

function average(values) {
  const clean = values.filter((value) => typeof value === "number" && value > 0);
  return clean.length ? clean.reduce((sum, value) => sum + value, 0) / clean.length : 0;
}

function displayAverage(value) {
  const numeric = Number(value);
  return numeric > 0 ? numeric.toFixed(1) : "–";
}

function currentAverage() {
  return average(Object.values(state.answers)).toFixed(1);
}

function todayIso() {
  return new Date().toISOString().slice(0, 10);
}

function previousAverage() {
  return state.history.length > 1 ? Number(state.history[state.history.length - 2].average).toFixed(1) : "–";
}

function ratingDescription(value) {
  if (value === 1) return "Alustav oskus";
  if (value === 1.5) return "Oskus kujunemas";
  if (value === 2) return "Toimiv oskus";
  if (value === 2.5) return "Kindel oskus";
  return "Tugev oskus";
}

function explanationFor(question, value) {
  if (!value) return "Vali hinnang, et näha selle taseme kirjeldust.";
  if (value === 1 || value === 2 || value === 3) return question.levels[value];
  const lower = value < 2 ? question.levels[1] : question.levels[2];
  const upper = value < 2 ? question.levels[2] : question.levels[3];
  return `${lower} ${upper.split(".")[0]}.`;
}

function getQuestion(id) {
  return questionSeed.find((question) => question.id === id);
}

function getMember(id) {
  return state.members.find((member) => member.id === id) || state.members[0];
}

function setView(view) {
  state.view = view;
  state.toast = "";
  saveState();
  render();
}

function showToast(message) {
  state.toast = message;
  render();
  window.setTimeout(() => {
    state.toast = "";
    render();
  }, 2600);
}

function renderLogo(className = "") {
  return `<img class="${className}" src="assets/karli-test-editorial.png" alt="Karli testi logo" />`;
}

function icon(name) {
  const icons = {
    dashboard: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V10Z"/></svg>',
    questionnaire: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 4h14v16H5z"/><path d="m8 12 2 2 5-5"/></svg>',
    progress: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 19 10 13l4 3 6-8"/><path d="M16 8h4v4"/></svg>',
    admin: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5h16v14H4z"/><path d="M8 9h8M8 13h4"/></svg>',
    questions: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 5h12M6 12h12M6 19h8"/><circle cx="4" cy="5" r="1"/><circle cx="4" cy="12" r="1"/><circle cx="4" cy="19" r="1"/></svg>',
    settings: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-1.7 1.7-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6v.1h-2.4v-.1a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1L8 17l.1-.1A1.7 1.7 0 0 0 8.4 15a1.7 1.7 0 0 0-1.6-1H6v-2.4h.8a1.7 1.7 0 0 0 1.6-1A1.7 1.7 0 0 0 8.1 8L8 7.9l1.7-1.7.1.1a1.7 1.7 0 0 0 1.9.3 1.7 1.7 0 0 0 1-1.6v-.1h2.4V5a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1L19.8 8l-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1h.1v2.4H21a1.7 1.7 0 0 0-1.6 1Z"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h13M13 6l6 6-6 6"/></svg>',
    back: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H6M11 6l-6 6 6 6"/></svg>',
    check: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 4 4L19 6"/></svg>',
    calendar: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/></svg>',
    user: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></svg>',
  };
  return icons[name] || "";
}

function navItems() {
  const base = [
    ["dashboard", "Ülevaade", "dashboard"],
    ["questionnaire", "Küsimustik", "questionnaire"],
    ["progress", "Minu areng", "progress"],
  ];
  if (state.user.role === "admin") {
    base.push(["admin", "Klubi liikmed", "admin"], ["questions", "Küsimuste haldus", "questions"]);
  }
  base.push(["settings", "Seaded", "settings"]);
  return base;
}

function shell(content) {
  const items = navItems();
  return `
    <div class="app-shell">
      <aside class="sidebar">
        <div>
          <div class="brand">
            ${renderLogo()}
          </div>
          <div class="nav-section">Minu töölaud</div>
          <nav class="nav" aria-label="Põhinavigeerimine">
            ${items
              .map(
                ([view, label, iconName]) => `
                <button class="${state.view === view ? "active" : ""}" data-action="navigate" data-view="${view}">
                  <span class="nav-icon">${icon(iconName)}</span>
                  <span>${label}</span>
                </button>
              `,
              )
              .join("")}
          </nav>
        </div>
        <div class="sidebar-footer">
          <div class="club-mini">
            <span>Minu klubi</span>
            <strong>${escapeHtml(state.user.club)}</strong>
          </div>
          <div class="sidebar-user">
            <span class="avatar">${initials(state.user.name)}</span>
            <div>
              <strong>${escapeHtml(state.user.name)}</strong>
              <span>${state.user.role === "admin" ? "Administraator" : "Liige"}</span>
            </div>
          </div>
        </div>
      </aside>
      <main class="main-area">
        <header class="topbar">
          <div class="breadcrumb">
            <span>${escapeHtml(state.user.club)}</span>
            <strong>${pageTitle(state.view)}</strong>
          </div>
          <div class="top-actions">
            <span class="club-pill">${icon("calendar")} Järgmine hindamine ${formatShortDate(state.dueDate)}</span>
            <span class="avatar">${initials(state.user.name)}</span>
          </div>
        </header>
        <div class="content page-transition">${content}</div>
      </main>
    </div>
    <nav class="mobile-nav" aria-label="Mobiilinavigeerimine">
      ${items
        .slice(0, 4)
        .map(
          ([view, label, iconName]) => `
          <button class="${state.view === view ? "active" : ""}" data-action="navigate" data-view="${view}">
            <span class="nav-icon">${icon(iconName)}</span>
            <span>${label}</span>
          </button>
        `,
        )
        .join("")}
    </nav>
    ${state.toast ? `<div class="toast">${escapeHtml(state.toast)}</div>` : ""}
  `;
}

function pageTitle(view) {
  const titles = {
    dashboard: "Ülevaade",
    questionnaire: "Küsimustik",
    results: "Tulemus",
    progress: "Minu areng",
    admin: "Klubi liikmed",
    member: "Liikme detailvaade",
    questions: "Küsimuste haldus",
    settings: "Seaded",
  };
  return titles[view] || "Ülevaade";
}

function isAdminPortal() {
  return /^\/admin(?:\/|$)/.test(window.location.pathname);
}

function render() {
  const app = document.querySelector("#app");
  const adminPortal = isAdminPortal();
  if (adminPortal && state.user && (!state.backendConnected || state.user.role !== "admin")) {
    state.user = null;
    state.backendConnected = false;
    state.remoteAssessmentId = null;
  }
  app.innerHTML = state.user ? shell(renderView()) : renderAuth(adminPortal);
  bindEvents();
}

function renderAuth(adminPortal = false) {
  if (adminPortal) state.authMode = "login";
  return `
    <main class="auth-page page-transition">
      <header class="auth-nav">
        <a class="auth-nav-brand" href="/" aria-label="Karli test">
          ${renderLogo("auth-nav-logo")}
        </a>
        <nav class="auth-nav-links" aria-label="Karli testi tutvustus">
          <span>Enesehindamine</span>
          <span>Areng ajas</span>
          <span>Klubi koostöö</span>
        </nav>
        <div class="auth-nav-login"><span>${adminPortal ? "Liikme vaade" : "Oled juba liige?"}</span><button data-action="auth-mode" data-mode="login">Logi sisse</button></div>
      </header>
      <section class="auth-layout">
        <section class="auth-intro">
          <div class="auth-intro-decor" aria-hidden="true"><span></span><span></span><span></span></div>
          <div class="auth-intro-content">
            <div class="auth-issue"><span></span><span>${adminPortal ? "Karli test · administraatoriportaal" : "Karli test · väitleja areng"}</span></div>
            <div class="auth-statement">
              <h1>Areng algab<br /><em>märkamises.</em></h1>
              <div class="auth-rule"></div>
              <p>${adminPortal ? "Jälgi oma klubi liikmete arengut, anna sihipärast tagasisidet ja hoia järgmised hindamised õigel ajal järjel." : "Karli test aitab sul oma väitlusoskusi ausalt hinnata, märgata järgmist harjutuskohta ja näha, kuidas töö ajas tulemuseks muutub."}</p>
            </div>
            <div class="auth-info-grid">
              <div><strong>13</strong><span>oskust, mida<br />vaadata</span></div>
              <div><strong>1–3</strong><span>selge ja ühine<br />skaala</span></div>
              <div><strong>3 kuud</strong><span>rahulik rütm<br />uueks hindamiseks</span></div>
            </div>
          </div>
          <div class="auth-quote"><p>„Hea arengukoht ei ole hinnang inimesele. See on järgmine koht, kuhu tähelepanu panna.“</p><span>Karli testi põhimõte</span></div>
        </section>
        <div class="auth-panel">
          <p class="auth-kicker">${adminPortal ? "Klubi administraatori konto" : "Klubi liikme konto"}</p>
          <div class="auth-tabs">
            <button class="${state.authMode === "login" ? "active" : ""}" data-action="auth-mode" data-mode="login">Logi sisse</button>
            ${adminPortal ? "" : `<button class="${state.authMode === "register" ? "active" : ""}" data-action="auth-mode" data-mode="register">Loo konto</button>`}
          </div>
          <h1>${adminPortal ? "Juhi klubi arengut." : state.authMode === "login" ? "Jätka oma arengulugu." : "Alusta oma arengulugu."}</h1>
          <p class="auth-lede">${adminPortal ? "Logi sisse administraatorina, et avada oma klubi liikmete vaade." : state.authMode === "login" ? "Sinu vastused ja tulemused ootavad sind." : "Loo konto ja liitu oma väitlusklubi arenguruumiga."}</p>
          <form id="auth-form" class="form-grid">
            ${
              state.authMode === "register" && !adminPortal
                ? `<div class="field"><label for="auth-name">Nimi</label><input id="auth-name" name="name" required placeholder="Ees- ja perekonnanimi" /></div>`
                : ""
            }
            <div class="field"><label for="auth-email">E-post</label><input id="auth-email" name="email" type="email" required placeholder="nimi@e-post.ee" /></div>
            <div class="field"><label for="auth-password">Parool</label><input id="auth-password" name="password" type="password" minlength="10" required placeholder="Vähemalt 10 märki" /></div>
            ${
              state.authMode === "register" && !adminPortal
                ? `<div class="field"><label for="auth-club">Klubi kutsekood</label><input id="auth-club" name="clubCode" required placeholder="Sisesta administraatorilt saadud kood" /><small>Kutsekoode jagab sinu klubi administraator.</small></div>`
                : ""
            }
            <button class="button" type="submit">${adminPortal ? "Ava administraatori vaade" : state.authMode === "login" ? "Logi sisse" : "Loo konto ja jätka"} ${icon("arrow")}</button>
          </form>
          <div class="auth-security"><span>${icon("check")}</span><p>${adminPortal ? "Turvaline seanss · admin näeb ainult enda klubi andmeid." : "Turvaline seanss · sinu tulemusi näed ainult sina ja sinu klubi administraator."}</p></div>
          <p class="auth-note">${adminPortal ? "Liikmete vaade on administraatori rolliga kontodele." : "Klubiga liitumiseks vajad administraatorilt saadud kutsekoodi."}</p>
        </div>
      </section>
      <footer class="auth-footer-bar"><span>Karli test · väitlusoskuste areng</span><span>Selge tagasiside. Järgmine samm. Parem väitlus.</span></footer>
    </main>
  `;
}

function renderView() {
  if (state.view === "dashboard") return renderDashboard();
  if (state.view === "questionnaire") return renderQuestionnaire();
  if (state.view === "results") return renderResults();
  if (state.view === "progress") return renderProgress();
  if (state.view === "admin") return renderAdmin();
  if (state.view === "member") return renderMemberDetail();
  if (state.view === "questions") return renderQuestionManagement();
  if (state.view === "settings") return renderSettings();
  return renderDashboard();
}

function renderDashboard() {
  const averageValue = Number(currentAverage());
  const previous = Number(previousAverage());
  const delta = Number.isFinite(previous) ? (averageValue - previous).toFixed(1) : "–";
  const overdue = state.dueDate && state.dueDate < todayIso();
  const firstAssessment = !state.history.length;
  const noticeTitle = firstAssessment ? "Alusta esimest enesehindamist" : overdue ? "Uus hindamine on tähtajast üle" : "Järgmine hindamine on peagi käes";
  const noticeText = firstAssessment ? "Esimene hindamine loob sulle lähtekoha, mille järgi edasist arengut jälgida." : `Sinu järgmine küsimustik on oodatud ${formatDate(state.dueDate)}. Vastuseid saad täita ka mitmes osas.`;
  const focus = [...questionSeed]
    .map((question) => ({ ...question, value: state.answers[question.id] || 0 }))
    .sort((a, b) => a.value - b.value)
    .slice(0, 3);
  const categoryAverages = categories.map((category) => {
    const values = questionSeed.filter((question) => question.category === category).map((question) => state.answers[question.id]);
    return { category, value: average(values) };
  });

  return `
    <div class="page-heading">
      <div>
        <p class="eyebrow">Tere, ${escapeHtml(state.user.name.split(" ")[0])}</p>
        <h1>Sinu areng ühel pilgul</h1>
        <p class="lede">Vaata viimast tulemust, leia järgmine harjutuskoht ja hoia oma arengul silm peal.</p>
      </div>
      <div class="button-row">
        <button class="button" data-action="navigate" data-view="questionnaire">${icon("questionnaire")} Alusta küsimustikku</button>
      </div>
    </div>

    <div class="notice" style="margin-bottom:18px;">
      <span class="notice-icon">!</span>
      <div><strong>${noticeTitle}</strong><p>${noticeText}</p></div>
      <button class="button ghost" data-action="navigate" data-view="questionnaire">Alusta ${icon("arrow")}</button>
    </div>

    <div class="grid stats" style="margin-bottom:18px;">
      <div class="card stat-card"><span class="stat-label">Praegune keskmine</span><strong class="stat-value">${displayAverage(averageValue)}</strong><span class="stat-detail"><span>3-palli skaalal</span><span class="delta-up">${delta === "–" ? "Esimene tulemus" : `+${delta} viimase korraga`}</span></span></div>
      <div class="card stat-card"><span class="stat-label">Eelmine tulemus</span><strong class="stat-value">${Number.isFinite(previous) ? previous.toFixed(1) : "–"}</strong><span class="stat-detail"><span>${state.history.length > 1 ? formatShortDate(state.history[state.history.length - 2].date) : "Esimene hindamine"}</span><span class="delta-neutral">võrdluspunkt</span></span></div>
      <div class="card stat-card"><span class="stat-label">Vastatud küsimused</span><strong class="stat-value">${Object.keys(state.answers).length}/${questionSeed.length}</strong><span class="stat-detail"><span>${Object.keys(state.answers).length === questionSeed.length ? "kõik oskused kaetud" : "esimene samm"}</span><span class="tag ${Object.keys(state.answers).length === questionSeed.length ? "green" : "amber"}">${Object.keys(state.answers).length === questionSeed.length ? "Valmis" : "Pooleli"}</span></span></div>
      <div class="card stat-card"><span class="stat-label">Järgmine tähtaeg</span><strong class="stat-value" style="font-size:24px;">${formatShortDate(state.dueDate)}</strong><span class="stat-detail"><span>3 kuu rütm</span><span class="tag amber">${overdue ? "Üle tähtaja" : state.dueDate ? "Peagi" : "Pärast esimest"}</span></span></div>
    </div>

    <div class="grid two" style="margin-bottom:18px;">
      <section class="card">
        <div class="section-title"><div><h2>Areng ajas</h2><p>Sinu viimased enesehindamised</p></div><button class="button ghost" data-action="navigate" data-view="progress">Vaata ajalugu ${icon("arrow")}</button></div>
        ${renderTrendChart()}
      </section>
      <section class="card">
        <div class="section-title"><div><h2>Järgmised fookused</h2><p>Oskused, mida tasub praegu harjutada</p></div></div>
        <div class="focus-list">
          ${focus
            .map(
              (question) => `
                <div class="focus-row">
                  <div><strong>${escapeHtml(question.title)}</strong><span>${escapeHtml(question.category)}</span></div>
                  <span class="score ${question.value < 2 ? "low" : ""}">${question.value.toFixed(1)}</span>
                </div>
              `,
            )
            .join("")}
        </div>
      </section>
    </div>

    <section class="card">
      <div class="section-title"><div><h2>Oskuste lõikes</h2><p>Keskmine hinnang teemade kaupa</p></div></div>
      <div class="skill-bars">
        ${categoryAverages
          .map(
            ({ category, value }) => `
            <div>
              <div class="skill-bar-head"><strong>${escapeHtml(category)}</strong><span>${value.toFixed(1)} / 3,0</span></div>
              <div class="progress-bar"><span style="width:${(value / 3) * 100}%"></span></div>
            </div>
          `,
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderTrendChart(history = state.history) {
  if (!history.length) {
    return `<div class="empty-state">Pärast esimest lõpetatud hindamist ilmub siia sinu areng ajas.</div>`;
  }
  const points = history.map((item, index) => {
    const span = Math.max(1, history.length - 1);
    const x = 45 + (index / span) * 435;
    const y = 170 - ((Number(item.average) - 1) / 2) * 130;
    return { ...item, x, y };
  });
  const pointString = points.map((point) => `${point.x},${point.y}`).join(" ");
  const areaString = `${points[0].x},170 ${pointString} ${points[points.length - 1].x},170`;
  return `
    <div class="chart-wrap">
      <svg viewBox="0 0 500 205" role="img" aria-label="Keskmise tulemuse muutus ajas">
        <defs><linearGradient id="areaFill" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stop-color="#7b2d3b" stop-opacity=".18"/><stop offset="100%" stop-color="#7b2d3b" stop-opacity="0"/></linearGradient></defs>
        <line class="chart-grid" x1="30" y1="40" x2="480" y2="40"/><line class="chart-grid" x1="30" y1="105" x2="480" y2="105"/><line class="chart-grid" x1="30" y1="170" x2="480" y2="170"/>
        <text class="chart-label" x="5" y="44">3,0</text><text class="chart-label" x="5" y="109">2,0</text><text class="chart-label" x="5" y="174">1,0</text>
        <polygon class="chart-area" points="${areaString}"></polygon>
        <polyline class="chart-line" points="${pointString}"></polyline>
        ${points.map((point) => `<circle class="chart-point" cx="${point.x}" cy="${point.y}" r="5"></circle><text class="chart-label" text-anchor="middle" x="${point.x}" y="194">${point.label.split(" ")[0]}</text>`).join("")}
      </svg>
    </div>
  `;
}

function renderQuestionnaire() {
  if (!state.questionIndex && state.questionIndex !== 0) state.questionIndex = 0;
  const question = questionSeed[state.questionIndex];
  const selected = state.draftAnswers[question.id] || state.answers[question.id] || 0;
  const progress = ((state.questionIndex + 1) / questionSeed.length) * 100;
  return `
    <div class="question-shell">
      <div class="page-heading">
        <div><p class="eyebrow">Enesehindamine</p><h1>Väitlusoskuste küsimustik</h1><p class="lede">Hinda oma praegust taset ausalt. Iga küsimus aitab valida järgmise harjutuse.</p></div>
        <div class="button-row"><button class="button secondary" data-action="navigate" data-view="dashboard">${icon("back")} Salvesta ja lahku</button></div>
      </div>
      <div class="question-progress"><div class="progress-bar"><span style="width:${progress}%"></span></div><span>${state.questionIndex + 1} / ${questionSeed.length}</span></div>
      <section class="card question-card">
        <div class="question-meta"><span class="tag">${escapeHtml(question.category)}</span><span class="tag">${escapeHtml(question.subskills.split(" · ")[0])}</span></div>
        <h2>${escapeHtml(question.title)}</h2>
        <p class="question-subskills">${escapeHtml(question.subskills)}</p>
        <p style="color:var(--muted);font-size:13px;">Milline kirjeldus vastab kõige paremini sinu tänasele tasemele?</p>
        <div class="rating-grid">
          ${ratingValues
            .map(
              (value) => `
              <button class="rating-button ${selected === value ? "selected" : ""}" data-action="rate" data-value="${value}">
                <strong>${value.toString().replace(".", ",")}</strong><span>${ratingDescription(value)}</span>
              </button>
            `,
            )
            .join("")}
        </div>
        <div class="explanation"><strong>${selected ? `Tase ${selected.toString().replace(".", ",")}` : "Taseme kirjeldus"}</strong><p>${escapeHtml(explanationFor(question, selected))}</p></div>
        <div class="question-actions">
          <p class="muted">${selected ? (state.backendConnected ? "Vastus on turvaliselt salvestatud." : "Vastus on salvestatud selles brauseris.") : "Vali üks vastus, et edasi liikuda."}</p>
          <div class="button-row">
            ${state.questionIndex > 0 ? `<button class="button secondary" data-action="previous-question">${icon("back")} Eelmine</button>` : ""}
            <button class="button" ${selected ? "" : "disabled"} data-action="${state.questionIndex === questionSeed.length - 1 ? "finish-questionnaire" : "next-question"}">${state.questionIndex === questionSeed.length - 1 ? "Vaata tulemust" : "Järgmine"} ${icon("arrow")}</button>
          </div>
        </div>
      </section>
    </div>
  `;
}

function renderResults() {
  const value = Number(currentAverage());
  const answered = Object.keys(state.draftAnswers).length || questionSeed.length;
  const categoryAverages = categories.map((category) => {
    const values = questionSeed.filter((question) => question.category === category).map((question) => state.draftAnswers[question.id] || state.answers[question.id]);
    return { category, value: average(values) };
  });
  return `
    <div class="page-heading"><div><p class="eyebrow">Küsimustik lõpetatud</p><h1>Sinu uus tulemus</h1><p class="lede">Pane tähele, millised oskused vajavad järgmist teadlikku harjutust.</p></div><div class="button-row"><button class="button" data-action="navigate" data-view="dashboard">Tagasi ülevaatesse ${icon("arrow")}</button></div></div>
    <div class="card result-hero" style="margin-bottom:18px;">
      <div class="result-ring"><div><strong>${value.toFixed(1)}</strong><span>/ 3,0</span></div></div>
      <div><h2>Hea töö, ${escapeHtml(state.user.name.split(" ")[0])}!</h2><p>Hindasid ${answered} oskust. Sinu tulemus on selge lähtekoht, millele järgmise kolme kuu jooksul toetuda.</p><div class="button-row" style="margin-top:16px;"><button class="button secondary" data-action="navigate" data-view="progress">Vaata arengulugu</button></div></div>
    </div>
    <div class="grid two">
      <section class="card"><div class="section-title"><div><h2>Tulemus teemade kaupa</h2><p>Kus on sinu tugevused ja järgmised sammud</p></div></div><div class="skill-bars">${categoryAverages.map(({ category, value: categoryValue }) => `<div><div class="skill-bar-head"><strong>${escapeHtml(category)}</strong><span>${categoryValue.toFixed(1)}</span></div><div class="progress-bar"><span style="width:${(categoryValue / 3) * 100}%"></span></div></div>`).join("")}</div></section>
      <section class="card"><div class="section-title"><div><h2>Järgmine samm</h2><p>Väike fookus teeb arengu nähtavaks</p></div></div><div class="focus-list">${questionSeed.slice().sort((a,b) => (state.answers[a.id] || 0) - (state.answers[b.id] || 0)).slice(0,3).map(q => `<div class="focus-row"><div><strong>${escapeHtml(q.title)}</strong><span>${escapeHtml(q.category)}</span></div><span class="tag amber">Harjuta</span></div>`).join("")}</div></section>
    </div>
  `;
}

function renderProgress() {
  const current = Number(currentAverage());
  const delta = (current - Number(previousAverage())).toFixed(1);
  return `
    <div class="page-heading"><div><p class="eyebrow">Isiklik arengulugu</p><h1>Minu areng</h1><p class="lede">Siin näed enda tulemusi ajas. Võrdlus teiste liikmetega ei ole eesmärk.</p></div><div class="button-row"><button class="button" data-action="navigate" data-view="questionnaire">${icon("questionnaire")} Uus hindamine</button></div></div>
    <div class="grid stats" style="margin-bottom:18px;"><div class="card stat-card"><span class="stat-label">Praegune keskmine</span><strong class="stat-value">${current.toFixed(1)}</strong><span class="stat-detail"><span>viimane hindamine</span><span class="delta-up">+${delta}</span></span></div><div class="card stat-card"><span class="stat-label">Hindamisi kokku</span><strong class="stat-value">${state.history.length}</strong><span class="stat-detail"><span>alates aprillist 2026</span><span class="tag green">Järjepidev</span></span></div><div class="card stat-card"><span class="stat-label">Vastatud oskusi</span><strong class="stat-value">${questionSeed.length}</strong><span class="stat-detail"><span>kõik küsimused</span><span class="delta-neutral">100%</span></span></div><div class="card stat-card"><span class="stat-label">Järgmine kuupäev</span><strong class="stat-value" style="font-size:24px;">${formatShortDate(state.dueDate)}</strong><span class="stat-detail"><span>viimasest 3 kuud</span><span class="tag amber">Peagi</span></span></div></div>
    <div class="grid two" style="margin-bottom:18px;"><section class="card"><div class="section-title"><div><h2>Tulemus ajas</h2><p>Kolme kuu kaupa tehtud enesehindamised</p></div></div>${renderTrendChart()}</section><section class="card"><div class="section-title"><div><h2>Vastuste ajalugu</h2><p>Viimased lõpetatud hindamised</p></div></div><div class="history-list">${state.history.slice().reverse().map((item, index) => `<div class="history-row"><div><strong>${escapeHtml(item.label)}</strong><span>${formatDate(item.date)} · ${index === 0 ? "viimane" : "lõpetatud"}</span></div><span class="score ${item.average >= 2.5 ? "high" : ""}">${item.average.toFixed(1)}</span></div>`).join("")}</div></section></div>
    <section class="card"><div class="section-title"><div><h2>Minu vastused</h2><p>Viimase hindamise küsimuste kaupa</p></div></div><div class="question-list">${questionSeed.map((question) => `<div class="question-row"><div><strong>${escapeHtml(question.title)}</strong><span>${escapeHtml(question.category)}</span></div><span class="score ${state.answers[question.id] < 2 ? "low" : state.answers[question.id] >= 2.5 ? "high" : ""}">${state.answers[question.id].toFixed(1)}</span></div>`).join("")}</div></section>
  `;
}

function renderAdmin() {
  const dueCount = state.members.filter((member) => member.status !== "ok").length;
  return `
    <div class="page-heading"><div><p class="eyebrow">Administraatori vaade</p><h1>${escapeHtml(state.user.club)}</h1><p class="lede">Vaata oma klubi liikmete viimaseid tulemusi, hindamise staatust ja järgmist vestluskohta.</p></div><div class="button-row"><button class="button secondary" data-action="navigate" data-view="questions">${icon("questions")} Halda küsimusi</button></div></div>
    <div class="grid stats" style="margin-bottom:18px;"><div class="card stat-card"><span class="stat-label">Liikmeid</span><strong class="stat-value">${state.members.length}</strong><span class="stat-detail"><span>aktiivsed klubis</span><span class="tag green">Aktiivne</span></span></div><div class="card stat-card"><span class="stat-label">Ootab tähelepanu</span><strong class="stat-value">${dueCount}</strong><span class="stat-detail"><span>hindamine vajab jälgimist</span><span class="tag amber">Vaata üle</span></span></div><div class="card stat-card"><span class="stat-label">Klubi keskmine</span><strong class="stat-value">${displayAverage(average(state.members.map((member) => member.average)))}</strong><span class="stat-detail"><span>ainult sinu klubi</span><span class="delta-neutral">privaatne</span></span></div><div class="card stat-card"><span class="stat-label">Kutsekood</span><strong class="stat-value" style="font-size:22px;">${escapeHtml(state.inviteCode || "–")}</strong><span class="stat-detail"><span>jaga uute liikmetega</span><button class="button ghost" data-action="copy-code">Kopeeri</button></span></div></div>
    <section class="card"><div class="section-title"><div><h2>Liikmed</h2><p>Administraator näeb ainult ${escapeHtml(state.user.club)} liikmeid.</p></div><span class="status-pill ok">${icon("check")} Andmed on klubipõhised</span></div><div class="table-wrap"><table class="data-table"><thead><tr><th>Liige</th><th>Keskmine</th><th>Viimane hindamine</th><th>Staatus</th><th></th></tr></thead><tbody>${state.members.map((member) => `<tr><td><div class="member-cell"><span class="avatar">${initials(member.name)}</span><div><strong>${escapeHtml(member.name)}</strong><span>${escapeHtml(member.email)}</span></div></div></td><td><span class="score ${member.average >= 2.5 ? "high" : member.average > 0 && member.average < 2 ? "low" : ""}">${displayAverage(member.average)}</span></td><td>${formatShortDate(member.last)}</td><td>${statusLabel(member.status)}</td><td><button class="button ghost" data-action="open-member" data-member-id="${member.id}">Ava detail ${icon("arrow")}</button></td></tr>`).join("")}</tbody></table></div></section>
  `;
}

function statusLabel(status) {
  if (status === "ok") return `<span class="status-pill ok">${icon("check")} Värske</span>`;
  if (status === "late") return `<span class="status-pill warning">Üle tähtaja</span>`;
  if (status === "new") return `<span class="tag">Alustamata</span>`;
  return `<span class="status-pill warning">Peagi tähtajaks</span>`;
}

function renderMemberDetail() {
  const member = getMember(state.selectedMember);
  const assessment = state.adminAssessments[member.id] || {};
  const ratedCount = questionSeed.filter((question) => ratingValues.includes(Number(assessment[question.id]))).length;
  const complete = ratedCount === questionSeed.length;
  return `
    <div class="page-heading"><div><p class="eyebrow">Liikme hindamine</p><h1>${escapeHtml(member.name)}</h1><p class="lede">${escapeHtml(member.email)} · viimane hindamine ${formatShortDate(member.last)}</p></div><div class="button-row"><button class="button secondary" data-action="navigate" data-view="admin">${icon("back")} Kõik liikmed</button></div></div>
    <div class="grid two" style="margin-bottom:18px;"><section class="card"><div class="section-title"><div><h2>Areng ajas</h2><p>Liikme varasemad tulemused</p></div><span class="score ${member.average >= 2.5 ? "high" : ""}">${displayAverage(member.average)}</span></div>${renderTrendChart(state.memberHistory)}</section><section class="card"><div class="section-title"><div><h2>Administraatori märge</h2><p>Lisa lühike kommentaar järgmise vestluse jaoks.</p></div></div><div class="field"><label for="member-comment">Kommentaar</label><textarea id="member-comment" placeholder="Näiteks: harjutame järgmises trennis ümberlükkamise struktuuri...">${escapeHtml(assessment.comment || "")}</textarea></div><button class="button" style="margin-top:12px;" data-action="save-member-comment" data-member-id="${member.id}">Salvesta kommentaar</button></section></div>
    <section class="card"><div class="section-title"><div><h2>Hinda oskusi</h2><p>Vali iga rea juures üks tase. Hinded salvestuvad kohe.</p></div><span class="tag ${complete ? "green" : "amber"}">${ratedCount}/${questionSeed.length} hinnatud</span></div><div class="question-list">${questionSeed.map((question) => { const value = Number(assessment[question.id]) || 0; return `<div class="question-row" style="align-items:flex-start;"><div style="min-width:210px;"><strong>${escapeHtml(question.title)}</strong><span>${escapeHtml(question.category)}</span></div><div class="button-row">${ratingValues.map((rating) => `<button class="rating-button ${value === rating ? "selected" : ""}" style="min-height:52px;min-width:54px;" data-action="admin-rate" data-member-id="${member.id}" data-question-id="${question.id}" data-value="${rating}" aria-label="${escapeHtml(question.title)}: ${rating}"><strong style="font-size:16px;">${rating.toString().replace(".", ",")}</strong></button>`).join("")}</div></div>`; }).join("")}</div><div class="question-actions"><p class="muted">${complete ? "Kõik oskused on hinnatud." : "Jätka, kuni kõik oskused on hinnatud."}</p><div class="button-row"><button class="button" ${complete ? "" : "disabled"} data-action="finish-admin-assessment" data-member-id="${member.id}">Salvesta hindamine ${icon("check")}</button><button class="button secondary" data-action="navigate" data-view="admin">Tagasi liikmete juurde</button></div></div></section>
  `;
}

function renderQuestionManagement() {
  return `
    <div class="page-heading"><div><p class="eyebrow">Klubi seadistused</p><h1>Küsimuste haldus</h1><p class="lede">Hoia arengumudeli sõnastus ajakohane. Muudatused mõjutavad uusi hindamisi, varasemad vastused jäävad alles.</p></div><div class="button-row"><button class="button secondary" data-action="navigate" data-view="admin">${icon("back")} Tagasi liikmeteni</button><button class="button" data-action="add-question">Lisa küsimus ${icon("arrow")}</button></div></div>
    <section class="card"><div class="section-title"><div><h2>Arengumudeli küsimused</h2><p>${questionSeed.length} küsimust · ${categories.length} teemat</p></div><span class="status-pill ok">${icon("check")} Klubi küsimused</span></div><div class="question-list">${questionSeed.map((question) => `<div class="question-row"><div><strong>${escapeHtml(question.title)}</strong><span>${escapeHtml(question.category)}${question.subskills ? ` · ${escapeHtml(question.subskills)}` : ""}</span></div><button class="button ghost" data-action="edit-question" data-question-id="${question.id}">Muuda ${icon("arrow")}</button></div>`).join("")}</div></section>
    ${state.editingQuestionId ? renderQuestionModal() : ""}
  `;
}

function renderQuestionModal() {
  const isNew = state.editingQuestionId === "new";
  const question = isNew ? { id: "new", category: "", title: "", subskills: "", levels: { 1: "", 2: "", 3: "" } } : getQuestion(state.editingQuestionId);
  return `<div class="modal-backdrop"><div class="modal"><div class="section-title"><div><h2>${isNew ? "Lisa küsimus" : "Muuda küsimust"}</h2><p>${isNew ? "Loo klubile uus arengukoht." : escapeHtml(question.category)}</p></div><button class="button ghost" data-action="close-modal">Sulge</button></div><form id="question-edit-form" class="form-grid"><input type="hidden" name="id" value="${question.id}" /><div class="form-grid two-col"><div class="field"><label for="edit-category">Teema</label><input id="edit-category" name="category" value="${escapeHtml(question.category)}" required /></div><div class="field"><label for="edit-title">Küsimuse nimi</label><input id="edit-title" name="title" value="${escapeHtml(question.title)}" required /></div></div><div class="field"><label for="edit-subskills">Alamoskused</label><input id="edit-subskills" name="subskills" value="${escapeHtml(question.subskills)}" placeholder="Näiteks struktuur · selgus" /></div><div class="field"><label for="edit-level-1">Tase 1 kirjeldus</label><textarea id="edit-level-1" name="level1" required>${escapeHtml(question.levels[1])}</textarea></div><div class="field"><label for="edit-level-2">Tase 2 kirjeldus</label><textarea id="edit-level-2" name="level2" required>${escapeHtml(question.levels[2])}</textarea></div><div class="field"><label for="edit-level-3">Tase 3 kirjeldus</label><textarea id="edit-level-3" name="level3" required>${escapeHtml(question.levels[3])}</textarea></div><button class="button" type="submit">Salvesta küsimus ${icon("check")}</button></form></div></div>`;
}

function renderSettings() {
  return `
    <div class="page-heading"><div><p class="eyebrow">Minu konto</p><h1>Seaded</h1><p class="lede">Hoia oma profiil ja meeldetuletused korras.</p></div></div>
    <div class="grid two"><section class="card form-card"><div class="section-title"><div><h2>Profiil</h2><p>Muuda nime. E-post ja klubi on seotud kontoga.</p></div></div><form id="profile-form" class="form-grid"><div class="field"><label for="profile-name">Nimi</label><input id="profile-name" name="name" value="${escapeHtml(state.user.name)}" required /></div><div class="field"><label for="profile-email">E-post</label><input id="profile-email" name="email" type="email" value="${escapeHtml(state.user.email)}" readonly /></div><div class="field"><label for="profile-club">Klubi</label><input id="profile-club" name="club" value="${escapeHtml(state.user.club)}" readonly /></div><button class="button" type="submit">Salvesta nimi ${icon("check")}</button></form></section><section class="card"><div class="section-title"><div><h2>Meeldetuletused</h2><p>Uus hindamine iga kolme kuu järel.</p></div><span class="status-pill ok">${icon("check")} Aktiivne</span></div><div class="notice"><span class="notice-icon">!</span><div><strong>Järgmine hindamine</strong><p>${formatDate(state.dueDate)} · rakendus näitab tähtaja saabudes siin uut märguannet.</p></div></div><div class="divider"></div><div class="section-title"><div><h3>Praegune klubi</h3><p>${escapeHtml(state.user.club)}</p></div><span class="tag">${state.user.role === "admin" ? "Administraator" : "Liige"}</span></div><p style="color:var(--muted);font-size:12px;">Klubiga liitutakse kutsekoodi kaudu. Klubi administraator vastutab liikmete haldamise eest.</p></section></div>
    <section class="card" style="margin-top:16px;"><div class="section-title"><div><h2>Seanss</h2><p>Kui kasutad jagatud arvutit, lõpeta töö järel seanss.</p></div><button class="button danger" data-action="logout">Logi välja</button></div></section>
    ${state.backendConnected ? "" : `<section class="card" style="margin-top:16px;"><div class="section-title"><div><h2>Näidisvaade</h2><p>See konto töötab ainult lokaalselt ega salvesta andmeid serverisse.</p></div><span class="tag amber">Demo</span></div><div class="button-row"><button class="button secondary" data-action="set-role" data-role="member">Liikme vaade</button><button class="button secondary" data-action="set-role" data-role="admin">Administraatori vaade</button></div></section>`}
  `;
}

function bindEvents() {
  document.querySelectorAll("[data-action]").forEach((element) => {
    element.addEventListener("click", handleAction);
  });
  document.querySelector("#auth-form")?.addEventListener("submit", handleAuthSubmit);
  document.querySelector("#profile-form")?.addEventListener("submit", handleProfileSubmit);
  document.querySelector("#question-edit-form")?.addEventListener("submit", handleQuestionEdit);
}

async function handleAuthSubmit(event) {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const isRegister = state.authMode === "register";
  if (isAdminPortal() && isRegister) {
    state.authMode = "login";
    render();
    return;
  }
  try {
    await apiRequest(isRegister ? "/auth/register" : "/auth/login", {
      method: "POST",
      body: JSON.stringify({
        name: form.get("name"),
        email: form.get("email"),
        password: form.get("password"),
        inviteCode: form.get("clubCode"),
      }),
    });
    await syncRemoteState();
    if (isAdminPortal() && state.user.role !== "admin") {
      await apiRequest("/auth/logout", { method: "POST", body: JSON.stringify({}) }).catch(() => {});
      state.user = null;
      state.backendConnected = false;
      state.remoteAssessmentId = null;
      saveState();
      render();
      window.alert("See sisenemine on ainult administraatoritele.");
      return;
    }
    state.view = isAdminPortal() ? "admin" : "dashboard";
    state.questionIndex = 0;
    saveState();
    render();
  } catch (error) {
    window.alert(error.message || "Sisselogimine ei õnnestunud.");
  }
}

async function handleProfileSubmit(event) {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const name = String(form.get("name") || "").trim();
  try {
    if (state.backendConnected) {
      await apiRequest("/profile", { method: "PUT", body: JSON.stringify({ name }) });
      await syncRemoteState();
    } else {
      state.user.name = name;
      saveState();
    }
    showToast("Profiil on salvestatud.");
  } catch (error) {
    window.alert(error.message || "Profiili salvestamine ei õnnestunud.");
  }
}

async function handleQuestionEdit(event) {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const id = String(form.get("id"));
  const values = {
    title: String(form.get("title") || "").trim(),
    category: String(form.get("category") || "Üldoskused").trim(),
    subskills: String(form.get("subskills") || "").trim(),
    levels: { 1: String(form.get("level1") || "").trim(), 2: String(form.get("level2") || "").trim(), 3: String(form.get("level3") || "").trim() },
  };
  try {
    if (id === "new") {
      const payload = await apiRequest("/admin/questions", { method: "POST", body: JSON.stringify(values) });
      questionSeed.push({ id: String(payload.id), ...values });
    } else if (state.backendConnected) {
      await apiRequest(`/admin/questions/${id}`, { method: "PUT", body: JSON.stringify({ title: values.title, levels: values.levels }) });
      await syncRemoteState();
    } else {
      const question = getQuestion(id);
      Object.assign(question, values);
      state.questionOverrides[question.id] = { title: question.title, levels: question.levels };
      saveState();
    }
    state.editingQuestionId = null;
    render();
    showToast("Küsimus on salvestatud.");
  } catch (error) {
    window.alert(error.message || "Küsimuse salvestamine ei õnnestunud.");
  }
}

async function handleAction(event) {
  const action = event.currentTarget.dataset.action;
  if (action === "navigate") {
    state.questionIndex = 0;
    if (event.currentTarget.dataset.view === "questionnaire" && state.backendConnected) {
      try {
        await startRemoteAssessment();
      } catch (error) {
        window.alert(error.message || "Küsimustiku avamine ei õnnestunud.");
        return;
      }
    }
    setView(event.currentTarget.dataset.view);
    return;
  }
  if (action === "auth-mode") {
    state.authMode = event.currentTarget.dataset.mode;
    render();
    return;
  }
  if (action === "demo-login") {
    state.user = structuredClone(defaultState.user);
    state.backendConnected = false;
    state.remoteAssessmentId = null;
    state.view = "dashboard";
    saveState();
    render();
    return;
  }
  if (action === "rate") {
    const question = questionSeed[state.questionIndex];
    const rating = Number(event.currentTarget.dataset.value);
    if (state.backendConnected && state.remoteAssessmentId) {
      try {
        await apiRequest(`/assessments/${state.remoteAssessmentId}/answer`, {
          method: "PUT",
          body: JSON.stringify({ questionId: question.id, rating }),
        });
      } catch (error) {
        window.alert(error.message || "Vastuse salvestamine ei õnnestunud.");
        return;
      }
    }
    state.draftAnswers[question.id] = rating;
    saveState();
    render();
    return;
  }
  if (action === "next-question") {
    state.questionIndex = Math.min(questionSeed.length - 1, state.questionIndex + 1);
    saveState();
    render();
    return;
  }
  if (action === "previous-question") {
    state.questionIndex = Math.max(0, state.questionIndex - 1);
    saveState();
    render();
    return;
  }
  if (action === "finish-questionnaire") {
    if (state.backendConnected && state.remoteAssessmentId) {
      try {
        await apiRequest(`/assessments/${state.remoteAssessmentId}/complete`, { method: "POST", body: JSON.stringify({}) });
        await syncRemoteState();
      } catch (error) {
        window.alert(error.message || "Küsimustiku lõpetamine ei õnnestunud.");
        return;
      }
    }
    state.answers = { ...state.answers, ...state.draftAnswers };
    state.draftAnswers = {};
    if (!state.backendConnected) {
      const today = todayIso();
      const due = new Date(`${today}T12:00:00`);
      due.setMonth(due.getMonth() + 3);
      const dueDate = due.toISOString().slice(0, 10);
      state.history.push({ date: today, average: Number(currentAverage()), label: formatShortDate(today) });
      state.lastCompleted = today;
      state.dueDate = dueDate;
    }
    state.remoteAssessmentId = null;
    state.questionIndex = 0;
    state.view = "results";
    saveState();
    render();
    return;
  }
  if (action === "open-member") {
    state.selectedMember = event.currentTarget.dataset.memberId;
    if (state.backendConnected) {
      try {
        let payload = await apiRequest(`/admin/members/${state.selectedMember}`);
        state.memberHistory = (payload.history || []).map((item) => ({
          date: item.date,
          average: Number(item.average),
          label: formatShortDate(item.date),
        }));
        let draft = payload.draft;
        if (!draft) {
          const started = await apiRequest(`/admin/members/${state.selectedMember}/start`, { method: "POST", body: JSON.stringify({}) });
          draft = started.assessment;
        }
        state.adminRemoteAssessmentId = draft.id;
        state.adminAssessments[state.selectedMember] = { ...(draft.answers || {}), comment: draft.comment || "" };
      } catch (error) {
        window.alert(error.message || "Liikme avamine ei õnnestunud.");
        return;
      }
    } else {
      state.memberHistory = [];
    }
    state.view = "member";
    saveState();
    render();
    return;
  }
  if (action === "admin-rate") {
    const memberId = event.currentTarget.dataset.memberId;
    const questionId = event.currentTarget.dataset.questionId;
    const rating = Number(event.currentTarget.dataset.value);
    if (state.backendConnected && state.adminRemoteAssessmentId) {
      try {
        await apiRequest(`/assessments/${state.adminRemoteAssessmentId}/answer`, { method: "PUT", body: JSON.stringify({ questionId, rating }) });
      } catch (error) {
        window.alert(error.message || "Hinde salvestamine ei õnnestunud.");
        return;
      }
    }
    state.adminAssessments[memberId] = { ...(state.adminAssessments[memberId] || {}), [questionId]: rating };
    saveState();
    render();
    return;
  }
  if (action === "save-member-comment") {
    const memberId = event.currentTarget.dataset.memberId;
    const comment = document.querySelector("#member-comment")?.value || "";
    if (state.backendConnected && state.adminRemoteAssessmentId) {
      try {
        await apiRequest(`/assessments/${state.adminRemoteAssessmentId}/comment`, { method: "PUT", body: JSON.stringify({ comment }) });
      } catch (error) {
        window.alert(error.message || "Kommentaari salvestamine ei õnnestunud.");
        return;
      }
    }
    state.adminAssessments[memberId] = { ...(state.adminAssessments[memberId] || {}), comment };
    saveState();
    showToast("Kommentaar on salvestatud.");
    return;
  }
  if (action === "finish-admin-assessment") {
    const memberId = event.currentTarget.dataset.memberId;
    if (state.backendConnected && state.adminRemoteAssessmentId) {
      try {
        await apiRequest(`/assessments/${state.adminRemoteAssessmentId}/complete`, { method: "POST", body: JSON.stringify({}) });
        await syncRemoteState();
        state.adminRemoteAssessmentId = null;
        state.view = "admin";
        render();
        return;
      } catch (error) {
        window.alert(error.message || "Hindamise lõpetamine ei õnnestunud.");
        return;
      }
    }
    const assessment = state.adminAssessments[memberId] || {};
    const values = questionSeed.map((question) => assessment[question.id]).filter(Boolean);
    const member = getMember(memberId);
    if (values.length) member.average = average(values);
    member.last = todayIso();
    member.status = "ok";
    saveState();
    showToast("Liikme hindamine on salvestatud.");
    return;
  }
  if (action === "edit-question") {
    state.editingQuestionId = event.currentTarget.dataset.questionId;
    render();
    return;
  }
  if (action === "close-modal") {
    state.editingQuestionId = null;
    render();
    return;
  }
  if (action === "add-question") {
    state.editingQuestionId = "new";
    render();
    return;
  }
  if (action === "copy-code") {
    navigator.clipboard?.writeText(state.inviteCode || "");
    showToast("Kutsekood on kopeeritud.");
    return;
  }
  if (action === "set-role") {
    if (state.backendConnected) return;
    state.user.role = event.currentTarget.dataset.role;
    state.view = event.currentTarget.dataset.role === "admin" ? "admin" : "dashboard";
    saveState();
    render();
    return;
  }
  if (action === "logout") {
    if (state.backendConnected) {
      await apiRequest("/auth/logout", { method: "POST", body: JSON.stringify({}) }).catch(() => {});
    }
    state.user = null;
    state.backendConnected = false;
    state.remoteAssessmentId = null;
    state.adminRemoteAssessmentId = null;
    state.authMode = "login";
    state.view = "dashboard";
    saveState();
    render();
  }
}

async function boot() {
  if (state.user && state.backendConnected) {
    try {
      await syncRemoteState();
      if (isAdminPortal() && state.user.role !== "admin") {
        state.user = null;
        state.backendConnected = false;
        state.remoteAssessmentId = null;
      } else if (isAdminPortal()) {
        state.view = "admin";
      }
    } catch {
      state.user = null;
      state.backendConnected = false;
      state.remoteAssessmentId = null;
      saveState();
    }
  }
  if (isAdminPortal() && state.user?.role === "admin") state.view = "admin";
  render();
}

boot();

