// ── Event metadata ──────────────────────────────────────────────
export const EVENT = {
  name: 'NEDA',
  year: 2026,
  tagline: 'From HDL to Silicon',
  subtitle: 'The complete EDA flow — step by step',
  description:
    'An online event for DSD students taking their first steps in Electronic Design Automation — two days of workshops followed by a week-long competition.',
  date: 'Jul. 2-10 · 2026',
  portalUrl: '',
  discordUrl: '',
  githubUrl: '',
};

// ── Schedule ─────────────────────────────────────────────────────
// Each entry has a display `time` label plus optional ISO `start` / `end` strings (server local time, or UTC with Z
// suffix). The UI marks an entry active when now is between start and end, and mutes it when end has already passed.
// Omit start/end to show the entry as a plain upcoming item.
export const SCHEDULE = [
  {
    time: 'Jul. 2-3',
    label: 'Registration, Workshops & Team Formation',
    start: '2026-07-02T00:00:00',
    end:   '2026-07-03T23:59:59',
  },
  {
    time: 'Jul. 4-10',
    label: 'Competition',
    start: '2026-07-04T00:00:00',
    end:   '2026-07-10T23:59:59',
  },
];

// ── Workshop resources ────────────────────────────────────────────
// status: 'available' | 'soon' | 'locked'
export const WORKSHOPS = [
  {
    id: 1,
    title: 'Workshop 1 - About NEDA',
    status: 'soon',
    resources: [
      // { icon: 'icon', label: 'label', url: '#', type: 'Download|Open|Pending' },
    ],
  },
];

// ── Updates / announcements ───────────────────────────────────────
export const UPDATES = [
  // {
  //   id: 1,
  //   time: 'Date · time',
  //   text: 'text',
  //   fresh: true,
  // },
];

// ── Hall of fame ──────────────────────────────────────────────────
// Fill in after the event
export const HALL_OF_FAME = [
  // { rank: 1, medal: '', name: 'Team Name', score: 980, type: 'Solo|Team', notebookUrl: '#' },
];

// ── Staff ─────────────────────────────────────────────────────────
// roles: any label you want — shown as a separate group heading
// url: GitHub or LinkedIn profile link
export const STAFF = [
  {
    role: 'Staff',
    members: [
      { name: 'Mahdi Bahramian', url: 'https://www.linkedin.com/in/mahdi-bahramian', github: 'https://github.com/MahdiGMK'  },
      { name: 'Mohammad Amin Koohi' , url: 'https://www.linkedin.com/in/mohammad-amin-koohi', github: 'https://github.com/MohammadAminKoohi'  },
      { name: 'Amirhossein Mirzaei', url: 'https://www.linkedin.com/in/amirhosein-mirzaei-39a86232b', github: 'https://github.com/radical-1'  },
      { name: 'SeyedAhmad MousaviAval' , url: 'https://www.linkedin.com/in/seyedahmad-mousaviaval-454301413', github: 'https://github.com/seyedahmadmosaviawal' },
      { name: 'Amirhossein Mohammadzadeh', url: 'https://www.linkedin.com/in/ahmz1833', github: 'https://github.com/ahmz1833'  },
      { name: 'Amirhossein Mousavifard', url: '', github: 'https://github.com/arkadashsiz'  },
    ],
  },
  {
    role: 'Organizer',
    members: [
      { name: 'Mohammad Alizadeh', url: 'https://www.linkedin.com/in/mohammad-alizadeh-195198286', github: 'https://github.com/mohaliza138' },
    ],
  },
];

// ── FAQ ───────────────────────────────────────────────────────────
export const FAQS = [
  {
    q: 'What does NEDA stand for?',
    a: 'NEDA stands for Newbie EDA — it is designed for students who are new to Electronic Design Automation and want a structured, hands-on introduction to the field.',
  },
  {
    q: 'What is EDA?',
    a: 'Electronic Design Automation (EDA) is a collection of tools and methodologies used to design and verify integrated circuits — covering everything from writing HDL code to generating a layout ready for fabrication.',
  },
  {
    q: 'Do I need prior EDA experience?',
    a: 'Not at all. NEDA is built for beginners. If you have taken the DSD course, you have everything you need to follow along and compete.',
  },
  {
    q: 'What tools do I need to install?',
    a: 'Nothing is required. The workshops introduce various EDA tools along the way, but you are free to use them or not — plain Python is enough to tackle the competition problems.',
  },
  {
    q: 'How does the competition work?',
    a: 'After the workshops, a 7-day online competition begins. The problems are simplified versions of real EDA challenges, solvable in plain Python or with any tools you picked up during the workshops. Submissions are evaluated by a live automated judge. You can compete solo or as a team of up to 2.',
  },
  {
    q: 'Can I use an LLM or AI assistant?',
    a: 'Yes, LLMs are allowed. That said, scores are calculated relative to the maximum achieved score, so while an LLM can help you get started, it is unlikely to take you to the top on its own.',
  },
  {
    q: 'Can I join without a team?',
    a: 'Yes. Solo participation is fully supported. If you would like a teammate, use the teammate finder on the event portal to connect with other participants before the competition starts.',
  },
];
