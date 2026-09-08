/**
 * Single source of truth for every piece of copy on the site.
 * Editing this file is all it takes to update the portfolio.
 */

export const profile = {
  name: 'Jammael Magallanes',
  handle: '@jammael',
  role: 'AI Automation Builder & Web Developer',
  shortRole: 'AI Automation & Web Dev',
  initials: 'JM',
  tagline: 'Automate the busywork. Ship the web app.',
  intro:
    'I build AI-powered automations and Laravel web applications for small teams — the kind that quietly handle the repetitive work so people can get back to the parts only they can do.',
  location: 'Canmano, Sagbayan, Bohol, Philippines',
  email: 'jammaelmagallanesph552022@gmail.com',
  phone: '09859012324',
  phoneHref: '+639859012324',
  github: 'https://github.com/Jammael',
  githubLabel: 'github.com/Jammael',
  availability: 'Available for freelance & internship work',
} as const;

export const seo = {
  title: 'Jammael Magallanes — AI Automation Builder & Web Developer',
  description:
    'Jammael Magallanes builds AI workflow automations, chatbots and Laravel web applications for small teams and businesses in the Philippines. Available for freelance and internship work.',
  keywords: [
    'AI automation builder',
    'workflow automation',
    'Laravel developer Philippines',
    'web developer Bohol',
    'n8n automation',
    'AI chatbot developer',
    'freelance web developer',
    'Jammael Magallanes',
  ],
} as const;

/** Left-hand navigation. Order here is the order on screen. */
export const nav = [
  { id: 'home', label: 'Home', icon: 'ph:house-bold' },
  { id: 'projects', label: 'Projects', icon: 'ph:folder-open-bold' },
  { id: 'services', label: 'Services', icon: 'ph:stack-bold' },
  { id: 'skills', label: 'Skills', icon: 'ph:code-bold' },
  { id: 'education', label: 'Education', icon: 'ph:graduation-cap-bold' },
  { id: 'contact', label: 'Contact', icon: 'ph:envelope-simple-bold' },
] as const;

/** Scrolling "Tools I work with" marquee. */
export const tools = [
  { name: 'Claude', icon: 'ph:sparkle-bold' },
  { name: 'Codex', icon: 'ph:terminal-window-bold' },
  { name: 'Google Antigravity', icon: 'ph:planet-bold' },
  { name: 'Cursor', icon: 'ph:cursor-bold' },
  { name: 'ChatGPT', icon: 'ph:chat-circle-dots-bold' },
  { name: 'n8n', icon: 'ph:flow-arrow-bold' },
  { name: 'Make', icon: 'ph:puzzle-piece-bold' },
  { name: 'Laravel', icon: 'ph:database-bold' },
  { name: 'Tailwind CSS', icon: 'ph:paint-brush-bold' },
  { name: 'VS Code', icon: 'ph:brackets-curly-bold' },
  { name: 'GitHub', icon: 'ph:git-branch-bold' },
  { name: 'MySQL', icon: 'ph:hard-drives-bold' },
] as const;

export const stats = [
  { value: '4', label: 'Projects shipped', icon: 'ph:folder-open-bold', tone: 'accent' },
  { value: '6 mos', label: 'Production Laravel experience', icon: 'ph:clock-bold', tone: 'green' },
  { value: '10+', label: 'Tools & technologies used', icon: 'ph:wrench-bold', tone: 'amber' },
] as const;

export const projects = [
  {
    title: 'RHUConnect',
    category: 'Healthcare',
    tone: 'accent',
    icon: 'ph:first-aid-kit-bold',
    summary:
      'Healthcare management system for Rural Health Units. I modernised the login experience with a centred-card layout built in Tailwind CSS and Blade, making it far easier to read on the low-end devices rural clinics actually use.',
    tags: ['Laravel', 'Blade', 'Tailwind CSS'],
  },
  {
    title: 'NutriCare',
    category: 'Health & Nutrition',
    tone: 'green',
    icon: 'ph:heartbeat-bold',
    summary:
      'Laravel web application supporting nutrition and health-tracking functions, with MySQL-backed records that staff can update without touching a spreadsheet.',
    tags: ['Laravel', 'MySQL', 'PHP'],
  },
  {
    title: 'CMC Scholars Attendance System',
    category: 'Academic Operations',
    tone: 'amber',
    icon: 'ph:users-three-bold',
    summary:
      'Web-based attendance tracking for Carmen Municipal College scholars at Flag Raising and Flag Retreat ceremonies — replacing paper sign-in sheets with a searchable record.',
    tags: ['Laravel', 'PHP', 'MySQL'],
  },
  {
    title: 'Hotel Management System',
    category: 'Hospitality',
    tone: 'violet',
    icon: 'ph:buildings-bold',
    summary:
      'Web application that simplifies hotel operations, giving administrators, staff and customers one place to manage bookings and services.',
    tags: ['PHP', 'MySQL'],
  },
] as const;

export const services = [
  {
    number: '01',
    title: 'AI Workflow Automation',
    icon: 'ph:flow-arrow-bold',
    description:
      'Automations that connect the apps you already use, so lead follow-ups, reports and hand-offs happen without anyone remembering to do them.',
  },
  {
    number: '02',
    title: 'AI Agents & Chatbots',
    icon: 'ph:robot-bold',
    description:
      'Assistants that answer questions from your own documents, qualify enquiries and pass the real ones on to a human.',
  },
  {
    number: '03',
    title: 'Laravel Web Applications',
    icon: 'ph:stack-bold',
    description:
      'Dashboards, record systems and role-based admin panels built on Laravel, Blade and MySQL — structured so the next developer can follow them.',
  },
  {
    number: '04',
    title: 'Website Development',
    icon: 'ph:browsers-bold',
    description:
      'Fast, responsive, accessible websites in Tailwind CSS or Astro, built to score well on Core Web Vitals and read clearly on any screen.',
  },
  {
    number: '05',
    title: 'Bug Fixing & Maintenance',
    icon: 'ph:bug-beetle-bold',
    description:
      'Debugging, refactoring and UI clean-up on live applications — the work I did day to day on a production Laravel system.',
  },
  {
    number: '06',
    title: 'Database Design & Reporting',
    icon: 'ph:database-bold',
    description:
      'MySQL schemas, queries and exports that turn scattered records into reports somebody can actually act on.',
  },
] as const;

export const skillGroups = [
  {
    title: 'AI & Automation',
    icon: 'ph:sparkle-bold',
    tone: 'accent',
    skills: ['Claude', 'Codex', 'Cursor', 'Google Antigravity', 'ChatGPT', 'n8n', 'Make', 'Prompt engineering'],
  },
  {
    title: 'Back-End',
    icon: 'ph:database-bold',
    tone: 'green',
    skills: ['PHP', 'Laravel', 'Blade', 'MySQL', 'REST APIs'],
  },
  {
    title: 'Front-End',
    icon: 'ph:layout-bold',
    tone: 'amber',
    skills: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS', 'Astro', 'Responsive & accessible UI'],
  },
  {
    title: 'Tools & Workflow',
    icon: 'ph:wrench-bold',
    tone: 'violet',
    skills: ['Git', 'GitHub', 'VS Code', 'Figma basics', 'Agile hand-offs'],
  },
] as const;

export const timeline = [
  {
    title: 'Web Developer (Laravel)',
    org: 'YS Construction Inc.',
    date: '2025 — 2026',
    kind: 'Experience',
    icon: 'ph:briefcase-bold',
    tone: 'accent',
    points: [
      'Fixed bugs and resolved issues in an existing Laravel application to improve reliability and day-to-day usability.',
      'Refined the front-end UI with Tailwind CSS and Blade templates for a cleaner, more consistent interface.',
      'Worked directly in the codebase to test and validate every fix before deployment.',
    ],
  },
  {
    title: 'BS in Information Systems',
    org: 'Carmen Municipal College, Carmen, Bohol',
    date: '2026 — 2027 · 4th Year',
    kind: 'Education',
    icon: 'ph:graduation-cap-bold',
    tone: 'green',
    points: ['Coursework across systems analysis, database design and web application development.'],
  },
  {
    title: 'Web Development Certificate',
    org: 'SoloLearn · Certificate CC-DSHHGRDL',
    date: 'Issued 11 December 2025',
    kind: 'Certification',
    icon: 'ph:certificate-bold',
    tone: 'amber',
    points: ['Covers HTML, CSS and JavaScript fundamentals with hands-on assessments.'],
  },
] as const;

export const contactChannels = [
  {
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: 'ph:envelope-simple-bold',
  },
  { label: 'Phone', value: profile.phone, href: `tel:${profile.phoneHref}`, icon: 'ph:phone-bold' },
  { label: 'GitHub', value: profile.githubLabel, href: profile.github, icon: 'ph:github-logo-bold' },
  { label: 'Location', value: profile.location, href: null, icon: 'ph:map-pin-bold' },
] as const;
