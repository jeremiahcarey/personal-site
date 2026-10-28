// Transcribed from public/resume.pdf and public/cv.pdf.
export type CvEntry = {
  title: string
  org?: string
  period?: string
  location?: string
  points?: string[]
}

export const contact = {
  email: 'jeremiah.a.carey@gmail.com',
  phone: '(530) 302-7339',
  phoneHref: 'tel:+15303027339',
  location: 'Orlando, FL (Remote)',
  linkedin: 'https://www.linkedin.com/in/jeremiah-carey-ab3221158',
  website: 'https://www.jeremiahcarey.com',
}

export const education: CvEntry[] = [
  {
    title: 'Ph.D., Philosophy',
    org: 'University of California, Berkeley',
    period: '2017',
    points: [
      'Dissertation: Reason, Desire, and the Will: In Defense of a Tripartite Moral Psychology',
      'Committee: R. Jay Wallace (co-chair), Hannah Ginsborg (co-chair)',
    ],
  },
  {
    title: 'B.A., Philosophy',
    org: 'Florida State University',
    period: '2007',
    points: ['Summa cum laude, with honors'],
  },
]

export const resume = {
  headline: 'Software Engineer · Frontend & AI-Native Interfaces',
  summary: 'Frontend-focused software engineer building production web applications, most recently AI-native interfaces: an in-platform LLM-powered app builder with streaming chat, agent clarifying-question flows, and live previews of generated apps. Comfortable across the spectrum, from extending a large legacy frontend platform to owning greenfield features across the stack. Former philosophy PhD and university instructor who brings rigorous analytical thinking and clear written communication to engineering work.',
  experience: [
    {
      title: 'Software Engineer',
      org: 'Annalect (Omnicom)',
      period: 'May 2023–Present',
      location: 'New York, NY (Remote)',
      points: [
        'Frontend engineer on an AI app builder that lets non-technical users generate and deploy custom web apps through chat with an LLM agent; built the human-in-the-loop flow that lets the agent pause and ask users clarifying questions, and contributed to the streaming chat UX and template/tutorial onboarding.',
        'Led the frontend side of hardening the app builder’s untested prototype for production: broke up its monolithic generation logic and main chat view across six small, independently reviewable PRs and raised frontend unit test coverage from 0% to over 75%, all without pausing feature delivery.',
        'Led a greenfield Q&A platform (“Ask the Collective”): built the full frontend (rich-text editor, replies, filter/sort, sharing, permissions) and extended its Python/FastAPI backend.',
        'Designed and built the platform’s email notification system: AWS SES setup and domain verification, backend trigger logic, subscribe/unsubscribe, and one-click unsubscribe. Diagnosed and fixed an intermittent production delivery failure that couldn’t be reproduced locally.',
        'Extended the platform’s cross-frame messaging library (postMessage API) so embedded micro-frontend apps sync their routes to the parent URL, making deep links, bookmarks, and back-button navigation work for iframed apps for the first time.',
        'Designed a configurable, responsive carousel web component in Lit (navigation modes, cards per view, arbitrary slotted content) that was adopted across the platform, and led frontend work on the configurable homepage content block it anchors.',
      ],
    },
    {
      title: 'Visiting Assistant Professor, Philosophy',
      org: 'Siena College',
      period: 'August 2017–May 2020',
      location: 'Loudonville, NY',
      points: [
        'Taught undergraduate courses in introductory philosophy, ethics, and the history of philosophy.',
        'Published peer-reviewed research and presented at academic conferences.',
      ],
    },
  ] satisfies CvEntry[],
  skills: [
    { label: 'Languages', items: 'TypeScript, JavaScript, Python, HTML, CSS' },
    { label: 'Frontend', items: 'React, Next.js, Lit / Web Components, Zustand, SWR' },
    { label: 'Backend', items: 'REST APIs, Flask, FastAPI, Postgres, AWS SES' },
    { label: 'AI', items: 'LLM chat & streaming (SSE) interfaces, human-in-the-loop agent UX, Claude Code, GitHub Copilot' },
    { label: 'Tooling', items: 'Git, GitHub Actions, Vite, Vitest, Supabase, Vercel, Chrome Extensions' },
  ],
  projects: [
    {
      name: 'DocLens',
      href: 'https://www.doclens.net',
      description: 'Chrome extension that analyzes Google Docs revision history to surface writing patterns associated with AI-assisted content. Built the parsing logic and UI tools that let instructors review editing timelines and writing behavior.',
    },
    {
      name: 'SchoolBrief',
      status: 'In development',
      href: 'https://www.schoolbrief.app',
      description: 'AI-powered tool that summarizes school communications for families and surfaces key updates in a dashboard. Designing a full-stack pipeline that ingests emails and generates concise summaries with LLM workflows.',
    },
  ],
}

export const academicCv = {
  employment: [
    { title: 'Software Engineer', org: 'Omnicom', period: '2023–present' },
    { title: 'Visiting Assistant Professor', org: 'Siena College', period: '2017–2019' },
    { title: 'Adjunct Professor', org: 'Siena College', period: '2019–2020' },
  ] satisfies CvEntry[],
  areas: [
    { label: 'Specialization', items: 'Philosophy of Religion, Ethics, Moral Psychology' },
    { label: 'Competence', items: 'Comparative Philosophy and Religion, and History of Philosophy' },
  ],
  publications: [
    { title: 'Review of Daniel Soars, The World and God Are Not-Two: A Hindu–Christian Conversation (Fordham University Press, 2023).', venue: 'Agatheos (forthcoming).' },
    { title: '“On trying to be an Orthodox Philosopher,”', venue: 'in Turning East II: Contemporary Philosophers and the Ancient Christian Faith, edited by Rico Vitz (St Vladimir’s Seminary Press, 2025).' },
    { title: '“Is ‘orthodox panentheism’ unorthodox? A response to James Dominic Rooney,”', venue: 'Religious Studies 61:2 (2025): 440–447.' },
    { title: '“On Orthodox panentheism,”', venue: 'Religious Studies 60:2 (2024): 269–275.' },
    { title: '“Mencius, Hume, and the Virtue of Humanity: Sources of Benevolent Moral Development,”', venue: 'British Journal for the History of Philosophy 28 (2020): 693–713.' },
    { title: '“Akrasia, Practical Reason, and the Diversity of Motivation: A New Defense of Tripartition,”', venue: 'European Journal of Philosophy 27:4 (2019): 971–981.' },
    { title: '“Spiritual, but not religious? On the nature of spirituality and its relation to religion,”', venue: 'International Journal for Philosophy of Religion 83 (2018): 261–269.' },
    { title: '“Dispassion as an Ethical Ideal,”', venue: 'Ergo 5 (2018): 645–663.' },
  ],
  teaching: [
    { title: 'Siena College', points: ['Philosophy and the Human Being', 'Ethics', 'Early Modern Philosophy', 'Greek and Roman Philosophy'] },
    { title: 'University of California, Berkeley', points: ['Individual Morality and Social Justice'] },
  ] satisfies CvEntry[],
  talks: [
    { title: 'Faith as Intention to Believe', points: ['Society of Christian Philosophers, Pacific Division, March 2017'] },
    { title: 'Akrasia and the Diversity of Motivation', points: ['Reasons and Agency, Graduate Conference, University of Toronto, May 2016; Eastern APA, January 2017.'] },
    { title: 'Spiritual, but not Religious?: On Spirituality and its Relation to Religion', points: ['The End of Religion?, Pacific Division of the SCP, University of San Diego, April 2016'] },
    { title: 'Dispassion as an Ethical Ideal', points: ['Richard Wollheim Society, University of California, Berkeley, Fall 2015'] },
    { title: 'Comments on Marshall', points: ['Berkeley-London Graduate Philosophy Conference, University of California, Berkeley, Spring 2015'] },
    { title: 'Desire and Reasons for Action', points: ['Richard Wollheim Society, University of California, Berkeley, Fall 2014'] },
    { title: 'Abortion and Reflective Equilibrium', points: ['Richard Wollheim Society, University of California, Berkeley, Fall 2011'] },
    { title: 'God and Evil', points: ['Invited discussion led at the Berkeley Undergraduate Philosophy Forum, Fall 2010'] },
    { title: 'The Principle of Alternative Possibilities and A-ing On-One’s-Own', points: ['Berkeley-Stanford-Davis Graduate Philosophy Conference, Stanford University, Spring 2009'] },
  ] satisfies CvEntry[],
  awards: [
    { title: 'Berkeley Connect Fellowship', period: 'Fall 2016 and Spring 2017' },
    { title: 'St Thomas Summer Seminar in Philosophy of Religion Stipend', period: 'Summer 2016' },
    { title: 'Summer Grant, Department of Philosophy, Berkeley', period: 'Summer 2014' },
    { title: 'Dean’s Normative Time Fellowship', period: 'Fall 2011 and Spring 2013' },
    { title: 'Ralph W. Church Fellowship', period: 'Fall 2007 and Spring 2008' },
  ] satisfies CvEntry[],
  references: [
    { name: 'R. Jay Wallace', email: 'rjw@berkeley.edu' },
    { name: 'Hannah Ginsborg', email: 'ginsborg@berkeley.edu' },
    { name: 'Lara Buchak', email: 'lbuchak@princeton.edu' },
    { name: 'Joshua Alexander', email: 'jalexander@siena.edu' },
    { name: 'David McNaughton', email: 'dmcnaughton@fsu.edu' },
  ],
}
