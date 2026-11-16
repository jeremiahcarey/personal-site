import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import { MarkdownBody } from '@/components/markdown-body'
import { getPost, getPosts } from '@/lib/blog'
import { formatDate } from '@/lib/content'

export const dynamicParams = false

export function generateStaticParams() {
  return getPosts().map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
      images: post.image ? [{ url: post.image, alt: post.imageAlt }] : undefined,
    },
    twitter: { card: post.image ? 'summary_large_image' : 'summary' },
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  return (
    <article className="grid gap-10 py-16 md:grid-cols-[10rem_1fr] md:py-20">
      <aside className="flex flex-col gap-6 font-mono text-xs text-muted-foreground">
        <Link href="/blog" className="inline-flex items-center gap-1.5 self-start transition-colors hover:text-primary">
          <ArrowLeft className="size-3.5" aria-hidden="true" />
          Blog
        </Link>
        <dl className="flex flex-row flex-wrap gap-x-6 gap-y-3 md:flex-col">
          <div className="flex flex-col gap-0.5">
            <dt className="uppercase tracking-widest">Published</dt>
            <dd className="text-foreground">
              <time dateTime={post.date}>{formatDate(post.date, 'long')}</time>
            </dd>
          </div>
        </dl>
      </aside>

      <div className="flex min-w-0 max-w-2xl flex-col gap-10">
        <h1 className="text-balance text-4xl font-medium leading-tight tracking-tight md:text-5xl">{post.title}</h1>
        <MarkdownBody source={post.body} />
        {post.substackUrl && (
          <p className="font-mono text-xs text-muted-foreground">
            Originally published{' '}
            <a href={post.substackUrl} className="text-primary underline-offset-4 hover:underline">
              here
            </a>
            .
          </p>
        )}
      </div>
    </article>
  )
}
