import type { Metadata } from 'next'
import Link from 'next/link'
import { MarginSection } from '@/components/margin-section'
import { WritingList } from '@/components/writing-list'
import { getSortedWritings } from '@/lib/content'
import { academicCv, contact } from '@/lib/career'

export const metadata: Metadata = {
  title: 'Philosophical Writing',
  description: 'Papers and essays by Jeremiah Carey on ethics, philosophy of religion, and philosophical theology.',
}

export default function PhilosophyPage() {
  const papers = getSortedWritings().filter((item) => item.field === 'Philosophy')

  return (
    <div className="pb-8">
      <header className="flex max-w-2xl flex-col gap-6 py-16 md:py-20">
        <h1 className="text-4xl font-medium tracking-tight md:text-5xl">Philosophical Writing</h1>
        <p className="text-pretty text-lg leading-relaxed">
          My writing explores ethics, the philosophy of religion, and philosophical theology. This is a place to collect my papers and essays.
        </p>
        <p className="leading-relaxed text-muted-foreground">
          PDFs of any of these works are available by request.{' '}
          <a href={`mailto:${contact.email}?subject=Paper%20PDF%20request`} className="text-primary underline underline-offset-4">
            Email me
          </a>{' '}for a copy.
        </p>
        <Link href="/cv/academic" className="self-start font-mono text-sm text-primary underline-offset-4 hover:underline">
          Academic CV →
        </Link>
      </header>
      <MarginSection label="Books under contract" id="books-under-contract">
        <ol className="flex flex-col gap-8">
          {academicCv.booksUnderContract.map((book) => (
            <li key={book.title} className="flex flex-col gap-3">
              <h3 className="text-xl font-medium tracking-tight text-pretty">{book.title}</h3>
              <p className="leading-relaxed text-muted-foreground">{book.contributors}</p>
              <p className="leading-relaxed text-muted-foreground">{book.status}</p>
            </li>
          ))}
        </ol>
      </MarginSection>
      <MarginSection label="Publications" id="publications">
        <ol className="flex flex-col gap-8">
          {academicCv.publications.map((publication) => (
            <li key={publication.title} className="flex flex-col gap-3">
              <h3 className="text-xl font-medium tracking-tight text-pretty">
                {publication.title.replace(/^“|,”$/g, '')}
              </h3>
              <p className="leading-relaxed text-muted-foreground">{publication.venue}</p>
              {publication.href && (
                <a href={publication.href} className="self-start font-mono text-sm text-primary underline-offset-4 hover:underline">
                  {publication.linkLabel} <span aria-hidden="true">↗</span>
                </a>
              )}
            </li>
          ))}
        </ol>
      </MarginSection>
      {papers.length > 0 && (
        <MarginSection label="More writing" id="papers"><WritingList items={papers} /></MarginSection>
      )}
    </div>
  )
}
