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
    description: 'My work in software, with a focus on frontend development and my current role at Omnicom.',
    href: '/cv/software',
    label: 'View résumé',
  },
  {
    title: 'Academic CV',
    description: 'My background in philosophy: doctoral education, teaching experience, and ongoing writing in ethics, philosophy of religion, and philosophical theology.',
    href: '/cv/academic',
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
            <Link href={document.href} className="mt-auto self-start font-mono text-sm text-primary underline-offset-4 hover:underline">
              {document.label} →
            </Link>
          </section>
        ))}
      </div>
    </div>
  )
}
