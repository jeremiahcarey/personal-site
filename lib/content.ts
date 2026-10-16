// First-pass copy. Add career dates, institutions, and contact links when available.
export const profile = {
  name: 'Jeremiah Carey',
  location: '',
  email: '',
  headline: 'writes software and philosophy.',
  intro:
    'I’m a software engineer at Omnicom, focused on frontend development. Before moving into software, I earned a PhD in philosophy and taught full time for three years. I continue to write on ethics, the philosophy of religion, and philosophical theology.',
  now: 'Frontend development at Omnicom.',
  site: 'Software, philosophy, and a place to collect my writing.',
  links: [] as { label: string; href: string }[],
}

export const practices = [
  {
    field: 'Engineering',
    summary:
      'My work at Omnicom focuses on frontend development: the part of software people see and interact with. This is where I’ll share projects, notes, and things I learn in the course of building for the web.',
    focus: ['Frontend development', 'Web interfaces', 'Software engineering'],
    cta: { label: 'View my engineering résumé', href: '/cv/software' },
  },
  {
    field: 'Philosophy',
    summary:
      'Philosophy remains part of my life after the move from teaching to software. I continue to write on ethics, the philosophy of religion, and philosophical theology. This site will bring that writing together in one place.',
    focus: ['Ethics', 'Philosophy of religion', 'Philosophical theology'],
    cta: { label: 'Explore my writing', href: '/writing?field=philosophy' },
  },
]

export type Field = 'Philosophy' | 'Engineering'
export type Kind = 'Essay' | 'Paper' | 'Note'

export type Block =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'quote'; text: string; cite?: string }

export type Writing = {
  slug: string
  title: string
  date: string
  field: Field
  kind: Kind
  summary: string
  venue?: string
  body: Block[]
}

// Add real essays and notes as they are ready to share.
export const writings: Writing[] = []

export function getSortedWritings() {
  return [...writings].sort((a, b) => b.date.localeCompare(a.date))
}

export function getWriting(slug: string) {
  return writings.find((w) => w.slug === slug)
}

export function formatDate(iso: string, style: 'short' | 'long' = 'short') {
  const date = new Date(`${iso}T00:00:00Z`)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: style === 'short' ? 'short' : 'long',
    day: style === 'long' ? 'numeric' : undefined,
    timeZone: 'UTC',
  })
}

export type CvEntry = {
  title: string
  org?: string
  period?: string
  location?: string
  points?: string[]
}

export const cv = {
  softwareSummary:
    'Software engineer at Omnicom, focused on frontend development. Before moving into software, I earned a PhD in philosophy and taught full time for three years.',
  academicSummary:
    'I hold a PhD in philosophy and taught full time for three years before moving into software engineering. I continue to write on ethics, the philosophy of religion, and philosophical theology.',
  summary:
    'Software engineer at Omnicom with a focus on frontend development. I hold a PhD in philosophy and taught full time for three years before changing careers. My ongoing philosophical writing concerns ethics, the philosophy of religion, and philosophical theology.',
  experience: [
    {
      title: 'Software Engineer',
      org: 'Omnicom',
      period: 'Present',
      points: ['Focused on frontend development.'],
    },
  ] satisfies CvEntry[],
  academic: [
    {
      title: 'Full-time teaching',
      period: 'Three years before moving into software',
      points: ['Taught full time before changing careers to software engineering.'],
    },
  ] satisfies CvEntry[],
  education: [
    { title: 'PhD in Philosophy' },
  ] satisfies CvEntry[],
  teaching: [] as string[],
  publications: [] as { citation: string; venue: string }[],
  skills: [
    { label: 'Engineering', items: 'Frontend development' },
    { label: 'Writing', items: 'Ethics, philosophy of religion, philosophical theology' },
  ],
}
