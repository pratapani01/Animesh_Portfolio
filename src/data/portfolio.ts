/**
 * Central portfolio data for Animesh Pratap Singh.
 * Every fact on the site comes from this file. Update it here and the whole site follows.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Animesh Pratap Singh',
  displayName: 'Animesh',
  firstName: 'ANIMESH',
  seriesTag: 'THE SERIES',
  /** Fictional studio card shown at the very start of the opening sequence. */
  originalLabel: 'A PRATAP ORIGINAL',
  role: 'Full-Stack Developer | AI/ML Enthusiast',
  tagline: ['AI / Machine Learning', 'Full-Stack Development', 'Building AI-Powered Applications'],
  intro:
    'I am Animesh Pratap Singh, a final-year B.Tech Computer Science Engineering student specializing in Artificial Intelligence and Machine Learning at Roorkee Institute of Technology. I have hands-on experience in full-stack development, data analytics, and AI-powered applications. I enjoy building scalable, user-centric web applications, integrating AI APIs, and solving real-world problems through technology. I also have a strong leadership background through the National Cadet Corps (NCC).',
  location: 'Roorkee, Uttarakhand',
  email: 'anipratap01@gmail.com',
  phone: '+91-9554117566',
  links: {
    linkedin: 'https://www.linkedin.com/in/pratapani01/',
    github: 'https://github.com/pratapani01',
    codolio: 'https://codolio.com/profile/pratapani01',
  },
  resumePdf: '/assets/Animesh_Pratap_Singh_Resume.pdf',
  resumeFileName: 'Animesh_Pratap_Singh_Resume.pdf',
  portrait: {
    src: '/assets/portrait-720.webp',
    srcSet: '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w',
    alt: 'Portrait of Animesh Pratap Singh',
  },
  interests: ['Artificial Intelligence & Machine Learning', 'Full-Stack Development', 'Data Analytics', 'AI-Powered Applications', 'Competitive Programming'],
};

export const education = [
  {
    school: 'Roorkee Institute of Technology',
    place: 'Roorkee, Uttarakhand',
    degree: 'Bachelor of Technology — Computer Science Engineering (AI & ML)',
    period: '2023 – 2027',
    score: 'CGPA 7.86/10',
  },
  {
    school: 'Sun Shine Public School',
    place: 'Uttar Pradesh',
    degree: 'CBSE — Senior Secondary (PCM) & Secondary',
    period: '2020 – 2022',
    score: '12th: 75.6% · 10th: 87.6%',
  },
];

export const experience = [
  {
    company: 'Arcoiris Logics',
    role: 'Technical Intern',
    place: 'Internship',
    period: 'July 2025 – September 2025',
    points: [
      'Developed full-stack web applications, including social media platforms and portfolio websites.',
      'Worked on frontend-backend integration and API handling.',
      'Worked with database management and practical web application development.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  /** Small badge shown on the card, e.g. "LIVE". */
  badge: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  /** Omit when the repository isn't public — the GitHub button is hidden. */
  github?: string;
  /** Omit when there is no deployed version — the Live button is hidden. */
  live?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants' | 'spark' | 'badge';
};

export const projects: Project[] = [
  {
    id: 'gramconnect-ai',
    title: 'GramConnect AI',
    badge: 'LIVE',
    genre: 'AI • Governance • Full-Stack',
    logline: 'An AI-powered rural governance platform for grievance management and government scheme assistance.',
    stack: ['Full-Stack', 'AI Integration', 'Vercel'],
    build: [
      'Built an AI-powered platform for rural governance, focused on rural grievance management and government scheme assistance.',
      'Implemented grievance-management functionality and government scheme assistance.',
      'Developed a full-stack architecture with AI integration.',
    ],
    features: ['Rural grievance management', 'Government scheme assistance', 'AI integration', 'Full-stack architecture'],
    metrics: [
      { value: 'AI', label: 'powered governance platform' },
      { value: '2', label: 'core modules: grievances & schemes' },
      { value: 'Live', label: 'deployed on Vercel' },
    ],
    live: 'https://gram-connect-ai.vercel.app/login',
    palette: { from: '#2a0610', via: '#7a0f24', to: '#0b0710', accent: '#ff3d5a' },
    motif: 'shield',
  },
  {
    id: 'postify',
    title: 'Postify',
    badge: 'LIVE',
    genre: 'Social • MERN • Full-Stack',
    logline: 'A social networking platform designed for sharing posts and user engagement.',
    stack: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
    build: [
      'Developed post-creation functionality for a social media application.',
      'Implemented social networking and user engagement features using the MERN stack.',
    ],
    features: ['Post creation', 'Social networking', 'User engagement features', 'MERN stack architecture'],
    metrics: [
      { value: 'MERN', label: 'full-stack architecture' },
      { value: 'Live', label: 'deployed on Vercel' },
    ],
    live: 'https://postify-ani.vercel.app/',
    palette: { from: '#1a0d02', via: '#8a4a07', to: '#0a0806', accent: '#ffb547' },
    motif: 'tenants',
  },
  {
    id: 'ai-rasoi',
    title: 'AI Rasoi',
    badge: 'AI',
    genre: 'AI • Gemini • Voice & Vision',
    logline: 'An AI recipe-generation app that helps users explore recipes through different input methods.',
    stack: ['Gemini API', 'Voice Input', 'Image Input'],
    build: [
      "Integrated Google's Gemini API for recipe generation.",
      'Added voice-based and image-based input support.',
    ],
    features: ['AI recipe generation', "Google's Gemini API", 'Voice-based input', 'Image-based input'],
    metrics: [
      { value: 'Gemini', label: 'API-powered recipes' },
      { value: '2', label: 'input modes: voice & image' },
    ],
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'spark',
  },
  {
    id: 'ncc-rit-portal',
    title: 'NCC RIT Portal',
    badge: 'PORTAL',
    genre: 'Web • Community • NCC',
    logline: 'A college NCC portal to share information and keep students connected.',
    stack: ['Web Portal', 'Gallery', 'Announcements'],
    build: [
      'Built a portal for NCC activities and announcements.',
      'Included a gallery and student communication features.',
    ],
    features: ['NCC activities & announcements', 'Photo gallery', 'Student communication'],
    metrics: [
      { value: 'NCC', label: 'information portal' },
      { value: '2', label: 'features: gallery & communication' },
    ],
    palette: { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' },
    motif: 'badge',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'hackindia',
    title: 'Top 5',
    org: 'HackIndia 2025',
    detail: 'Participated in HackIndia 2025 and secured a Top 5 position among 97 teams.',
    laurel: 'Top 5 of 97 Teams',
  },
  {
    id: 'ncc-c',
    title: 'NCC C Certificate',
    org: 'National Cadet Corps',
    detail: 'Successfully completed the NCC C Certificate with an A Grade.',
    laurel: 'A Grade',
  },
  {
    id: 'dsa',
    title: '266+ Problems Solved',
    org: 'Coding Platforms',
    detail: 'Solved 266+ Data Structures and Algorithms problems on coding platforms.',
    laurel: 'Competitive Coding',
  },
  {
    id: 'hr-30days',
    title: '30 Days of Code',
    org: 'HackerRank',
    detail: 'Completed the HackerRank 30 Days of Code Challenge.',
    laurel: 'Challenge Complete',
  },
  {
    id: 'hr-badges',
    title: 'Proficiency Badges',
    org: 'HackerRank',
    detail: 'Earned proficiency badges in Python, C++, and C on HackerRank.',
    laurel: 'Three Languages',
  },
];

export type Certification = { issuer: string; name: string; link?: string };

export const certifications: Certification[] = [
  { issuer: 'Forage', name: 'Deloitte Australia Data Analytics Job Simulation (July 2026)' },
  { issuer: 'HackerRank', name: 'Python Basics' },
  { issuer: 'Cisco', name: 'Cybersecurity' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Languages',
    subtitle: 'Programming languages',
    skills: [
      { name: 'Python', mono: 'Py' },
      { name: 'C', mono: 'C' },
      { name: 'C++', mono: 'C+' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    subtitle: 'Interfaces & the web platform',
    skills: [
      { name: 'HTML', mono: 'Ht' },
      { name: 'CSS', mono: 'Cs' },
      { name: 'JavaScript', mono: 'Js' },
      { name: 'React.js', mono: 'Re' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    subtitle: 'Server-side logic',
    skills: [
      { name: 'Node.js', mono: 'No' },
      { name: 'Express.js', mono: 'Ex' },
      { name: 'REST API integration', mono: 'Ap' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    subtitle: 'Storing & querying data',
    skills: [
      { name: 'MongoDB', mono: 'Mg' },
      { name: 'MySQL', mono: 'My' },
    ],
  },
  {
    id: 'aiml',
    title: 'AI / ML Tools',
    subtitle: 'Building AI-powered apps',
    skills: [
      { name: 'Gemini API', mono: 'Gm' },
      { name: 'Whisper', mono: 'Wh' },
      { name: 'Gradio', mono: 'Gr' },
      { name: 'Streamlit', mono: 'St' },
    ],
  },
  {
    id: 'analytics',
    title: 'Data Analytics',
    subtitle: 'Insights from data',
    skills: [
      { name: 'Tableau', mono: 'Tb' },
      { name: 'Microsoft Excel', mono: 'Xl' },
    ],
  },
  {
    id: 'tools',
    title: 'Developer Tools',
    subtitle: 'Everyday workflow',
    skills: [
      { name: 'Git', mono: 'Gt' },
      { name: 'GitHub', mono: 'Gh' },
      { name: 'Visual Studio Code', mono: 'VS' },
    ],
  },
  {
    id: 'professional',
    title: 'Professional',
    subtitle: 'Beyond the code',
    skills: [
      { name: 'Leadership & team coordination', mono: 'Ld' },
      { name: 'Problem-solving', mono: 'Ps' },
      { name: 'Mentoring & communication', mono: 'Mc' },
      { name: 'Project development & collaboration', mono: 'Pd' },
    ],
  },
  {
    id: 'interests',
    title: 'Interests',
    subtitle: 'Coming soon to the series',
    skills: [
      { name: 'AI & Machine Learning', mono: 'Ai' },
      { name: 'Full-Stack Development', mono: 'Fs' },
      { name: 'Data Analytics', mono: 'Da' },
      { name: 'AI-powered applications', mono: 'Ap' },
      { name: 'Competitive programming', mono: 'Cp' },
    ],
  },
];

/**
 * Factual cross-references shown when a skill card is hovered/tapped:
 * where the skill appears in projects, experience, certifications or achievements.
 */
export const skillEvidence: Record<string, string[]> = {
  Python: ['HackerRank Python Basics', 'HackerRank proficiency badge'],
  C: ['HackerRank proficiency badge'],
  'C++': ['HackerRank proficiency badge'],
  'React.js': ['Postify', 'Arcoiris Logics internship'],
  'Node.js': ['Postify', 'Arcoiris Logics internship'],
  'Express.js': ['Postify'],
  'REST API integration': ['Arcoiris Logics internship'],
  MongoDB: ['Postify'],
  'Gemini API': ['AI Rasoi'],
  Tableau: ['Deloitte Data Analytics job simulation'],
  'Microsoft Excel': ['Deloitte Data Analytics job simulation'],
  'Leadership & team coordination': ['NCC C Certificate (A Grade)'],
  'Mentoring & communication': ['National Cadet Corps'],
  'Competitive programming': ['266+ DSA problems', 'HackerRank 30 Days of Code'],
  'Data Analytics': ['Deloitte Australia job simulation'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Beginning',
    period: '2020 – 2022',
    synopsis: 'School years at Sun Shine Public School, Uttar Pradesh — CBSE Secondary and Senior Secondary (PCM).',
    episodes: [
      {
        code: 'S01 E01',
        title: 'The Foundation',
        description: 'CBSE Class 10 (Secondary), finishing with 87.6%.',
        tags: ['CBSE', 'Class 10'],
        runtime: '2020',
        palette: amber,
      },
      {
        code: 'S01 E02',
        title: 'The Science Stream',
        description: 'CBSE Class 12 Senior Secondary with Physics, Chemistry and Mathematics (PCM) — 75.6%.',
        tags: ['CBSE', 'Class 12', 'PCM'],
        runtime: '2022',
        palette: violet,
      },
    ],
  },
  {
    number: 2,
    title: 'Enter: AI & ML',
    period: '2023 – 2027',
    synopsis: 'B.Tech in Computer Science Engineering (AI & ML) at Roorkee Institute of Technology.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'The Engineer',
        description: 'Bachelor of Technology in Computer Science Engineering, specializing in AI & ML — CGPA 7.86/10.',
        tags: ['B.Tech', 'CSE', 'AI & ML', 'CGPA 7.86'],
        runtime: '2023 – 2027',
        palette: violet,
      },
      {
        code: 'S02 E02',
        title: 'The Cadet',
        description: 'Completed the NCC C Certificate with an A Grade — leadership, team coordination and mentoring through the National Cadet Corps.',
        tags: ['NCC', 'Leadership', 'A Grade'],
        runtime: 'National Cadet Corps',
        palette: crimson,
      },
      {
        code: 'S02 E03',
        title: 'The Problem Solver',
        description: 'Solved 266+ DSA problems, completed HackerRank 30 Days of Code and earned badges in Python, C++ and C.',
        tags: ['DSA', 'HackerRank', 'Python', 'C++', 'C'],
        runtime: '266+ problems',
        palette: jade,
      },
    ],
  },
  {
    number: 3,
    title: 'Learning to Build',
    period: '2025',
    synopsis: 'Technical Intern at Arcoiris Logics, July – September 2025.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'The Intern',
        description: 'Joined Arcoiris Logics as a Technical Intern across full-stack development, API integration, database management and web development.',
        tags: ['Full-Stack', 'API Integration', 'Databases'],
        runtime: 'Jul – Sep 2025',
        palette: ocean,
      },
      {
        code: 'S03 E02',
        title: 'The Developer',
        description: 'Developed full-stack web applications, including social media platforms and portfolio websites, on the MERN stack.',
        tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
        runtime: 'Arcoiris Logics',
        palette: violet,
      },
      {
        code: 'S03 E03',
        title: 'The Integrator',
        description: 'Worked on frontend-backend integration, API handling and database management in practical web applications.',
        tags: ['Frontend', 'Backend', 'APIs'],
        runtime: 'Arcoiris Logics',
        palette: jade,
      },
    ],
  },
  {
    number: 4,
    title: 'Building Real Products',
    period: '2025 – 2026',
    synopsis: 'Four Originals — rural governance AI, a social app, an AI recipe generator and an NCC portal — plus a Top 5 finish at HackIndia 2025.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'The AI Builder',
        description: 'GramConnect AI and AI Rasoi — AI-powered products for rural governance and recipe generation with the Gemini API.',
        tags: ['AI', 'Gemini API', 'Voice & Image'],
        runtime: 'Originals',
        palette: crimson,
      },
      {
        code: 'S04 E02',
        title: 'The Full-Stacker',
        description: 'Postify, a MERN social platform, and the NCC RIT Portal for activities, announcements and student communication.',
        tags: ['MERN', 'Social', 'Portal'],
        runtime: 'Originals',
        palette: amber,
      },
      {
        code: 'S04 E03',
        title: 'The Finalist',
        description: 'Secured a Top 5 position among 97 teams at HackIndia 2025.',
        tags: ['HackIndia 2025', 'Top 5 of 97'],
        runtime: 'HackIndia 2025',
        palette: ocean,
      },
      {
        code: 'S04 E04',
        title: 'The Analyst',
        description: 'Completed the Deloitte Australia Data Analytics Job Simulation on Forage.',
        tags: ['Data Analytics', 'Deloitte', 'Forage'],
        runtime: 'Jul 2026',
        palette: jade,
      },
    ],
  },
  {
    number: 5,
    title: "What's Next",
    period: 'Now streaming',
    synopsis: 'The interests point to the next arc of the story.',
    episodes: [
      {
        code: 'S05 E01',
        title: 'The Next Chapter',
        description: 'Going deeper into AI & Machine Learning, full-stack development, data analytics and AI-powered applications — and more competitive programming.',
        tags: ['AI / ML', 'Full-Stack', 'Data Analytics'],
        runtime: 'In production',
        palette: violet,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Biggest stage', title: 'HackIndia 2025', detail: 'Top 5 among 97 teams', palette: ocean },
  { label: 'The AI Original', title: 'GramConnect AI', detail: 'Rural governance • live on Vercel', palette: crimson },
  { label: 'Leadership', title: 'NCC C Certificate', detail: 'A Grade • National Cadet Corps', palette: amber },
  { label: 'Problems solved', title: '266+', detail: 'Data Structures & Algorithms', palette: jade },
  { label: 'The Social Original', title: 'Postify', detail: 'MERN social app • live on Vercel', palette: violet },
  { label: 'Gemini-powered', title: 'AI Rasoi', detail: 'Voice & image recipe generation', palette: crimson },
  { label: 'The internship arc', title: 'Arcoiris Logics', detail: 'Technical Intern • Jul – Sep 2025', palette: ocean },
  { label: 'Data credential', title: 'Deloitte Analytics', detail: 'Forage job simulation • July 2026', palette: jade },
  { label: 'Challenge complete', title: '30 Days of Code', detail: 'HackerRank', palette: amber },
  { label: 'Current focus', title: 'AI / ML', detail: 'with Full-Stack & Data Analytics', palette: violet },
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'B.Tech · CSE (AI & ML)',
    lines: ['Roorkee Institute of Technology, Roorkee', '2023 – 2027'],
    chips: ['CGPA 7.86/10'],
  },
  {
    kicker: 'Skills',
    title: 'Full-stack meets AI.',
    lines: ['Python, C, C++ · React.js, Node.js, Express.js', 'MongoDB, MySQL · Gemini API, Whisper, Gradio, Streamlit'],
    chips: ['Python', 'React.js', 'Node.js', 'MongoDB', 'Gemini API', 'Tableau'],
  },
  {
    kicker: 'Experience',
    title: 'The Internship Arc',
    lines: ['Technical Intern · Arcoiris Logics', 'July 2025 – September 2025', 'Full-Stack · API Integration · Databases'],
  },
  {
    kicker: 'Projects',
    title: 'Four Originals',
    lines: ['GramConnect AI — rural governance, live', 'Postify — MERN social platform, live', 'AI Rasoi — Gemini-powered recipes', 'NCC RIT Portal — activities & announcements'],
  },
  {
    kicker: 'Achievements',
    title: 'Top Moments',
    lines: ['Top 5 of 97 teams — HackIndia 2025', 'NCC C Certificate — A Grade', '266+ DSA problems solved'],
  },
  {
    kicker: 'Certified',
    title: `${certifications.length} Certifications`,
    lines: ['Deloitte Australia Data Analytics (Forage)', 'HackerRank Python Basics · Cisco Cybersecurity'],
  },
  {
    kicker: 'Current mission',
    title: 'Now exploring',
    lines: ['AI & Machine Learning · Full-Stack · Data Analytics'],
  },
];

export type ProfileId = 'main' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'main',
    name: 'Animesh',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, achievements & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, stack & GitHub first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story arc & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & experience', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 from the resume', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'My Achievements', meta: `${achievements.length} Moments • ${certifications.length} Certifications`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};
