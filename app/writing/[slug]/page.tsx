import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import { ArticleBody } from '@/components/article-body'
import { formatDate, getWriting, writings } from '@/lib/content'

export function generateStaticParams() {
  return writings.map((w) => ({ slug: w.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const writing = getWriting(slug)
  if (!writing) return {}
  return { title: writing.title, description: writing.summary }
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const writing = getWriting(slug)
  if (!writing) notFound()

  return (
    <article className="grid gap-10 py-16 md:grid-cols-[10rem_1fr] md:py-20">
      <aside className="flex flex-col gap-6 font-mono text-xs text-muted-foreground">
        <Link
          href="/writing"
          className="inline-flex items-center gap-1.5 self-start transition-colors hover:text-primary"
        >
          <ArrowLeft className="size-3.5" aria-hidden="true" />
          All writing
        </Link>
        <dl className="flex flex-row flex-wrap gap-x-6 gap-y-3 md:flex-col">
          <div className="flex flex-col gap-0.5">
            <dt className="uppercase tracking-widest">Published</dt>
            <dd className="text-foreground">
              <time dateTime={writing.date}>{formatDate(writing.date, 'long')}</time>
            </dd>
          </div>
          <div className="flex flex-col gap-0.5">
            <dt className="uppercase tracking-widest">Field</dt>
            <dd className="text-foreground">{writing.field}</dd>
          </div>
          <div className="flex flex-col gap-0.5">
            <dt className="uppercase tracking-widest">Form</dt>
            <dd className="text-foreground">{writing.kind}</dd>
          </div>
          {writing.venue && (
            <div className="flex flex-col gap-0.5">
              <dt className="uppercase tracking-widest">Venue</dt>
              <dd className="text-foreground">{writing.venue}</dd>
            </div>
          )}
        </dl>
      </aside>

      <div className="flex min-w-0 max-w-2xl flex-col gap-10">
        <header className="flex flex-col gap-5">
          <h1 className="text-balance text-4xl font-medium leading-tight tracking-tight md:text-5xl">
            {writing.title}
          </h1>
          <p className="text-pretty text-xl leading-relaxed text-muted-foreground">
            {writing.summary}
          </p>
        </header>
        <ArticleBody blocks={writing.body} />
      </div>
    </article>
  )
}
