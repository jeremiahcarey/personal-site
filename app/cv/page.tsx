import type { Metadata } from 'next'
import Link from 'next/link'
import { profile } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Résumé & CV',
  description: `Software engineering résumé and academic CV for ${profile.name}.`,
}

const documents = [
  {
    title: 'Software engineering résumé',
    description: 'Frontend engineering and AI-native interfaces at Annalect (Omnicom), technical skills, and independent projects.',
    href: '/cv/software',
    pdf: '/resume.pdf',
    label: 'View résumé',
  },
  {
    title: 'Academic CV',
    description: 'My background in philosophy: education, academic appointments, publications, courses, talks, and honors.',
    href: '/cv/academic',
    pdf: '/cv.pdf',
    label: 'View academic CV',
  },
]

export default function CvPage() {
  return (
    <div className="py-16 md:py-20">
      <header className="flex max-w-2xl flex-col gap-6">
        <h1 className="text-4xl font-medium tracking-tight md:text-5xl">Résumé & CV</h1>
        <p className="text-pretty text-lg leading-relaxed">
          My work spans software engineering and philosophy. Choose a document for a closer look at either part of my background.
        </p>
      </header>
      <div className="mt-12 grid gap-10 md:grid-cols-2">
        {documents.map((document) => (
          <section key={document.href} className="flex flex-col gap-5 border-t pt-6">
            <h2 className="text-2xl font-medium tracking-tight">{document.title}</h2>
            <p className="text-pretty leading-relaxed text-muted-foreground">{document.description}</p>
            <div className="mt-auto flex flex-wrap gap-x-6 gap-y-3 font-mono text-sm text-primary">
              <Link href={document.href} className="underline-offset-4 hover:underline">
                {document.label} →
              </Link>
              <a href={document.pdf} download className="underline-offset-4 hover:underline" aria-label={`Download ${document.title} (PDF)`}>
                Download PDF ↓
              </a>
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
