import type { Metadata } from 'next'
import Link from 'next/link'
import { getPosts } from '@/lib/blog'
import { formatDate, profile } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Selected shorter pieces by Jeremiah Carey, many first published on Substack.',
}

export default function BlogPage() {
  const posts = getPosts()

  return (
    <div className="pb-8">
      <header className="flex max-w-2xl flex-col gap-6 py-16 md:py-20">
        <h1 className="text-4xl font-medium tracking-tight md:text-5xl">Blog</h1>
        <p className="text-pretty text-lg leading-relaxed">
          Shorter, occasional pieces. This is a small selection of favorites, many first published on{' '}
          {profile.substack ? (
            <a href={profile.substack} className="text-primary underline underline-offset-4">
              my Substack <span aria-hidden="true">↗</span>
            </a>
          ) : (
            'my Substack'
          )}
          .
        </p>
        <p className="leading-relaxed text-muted-foreground">
          For published academic work, see{' '}
          <Link href="/philosophy" className="text-primary underline underline-offset-4">
            Philosophical Writing
          </Link>{' '}
          or my{' '}
          <Link href="/cv/academic" className="text-primary underline underline-offset-4">
            academic CV
          </Link>
          .
        </p>
      </header>

      {posts.length === 0 ? (
        <p className="text-muted-foreground">Selected pieces will be collected here soon.</p>
      ) : (
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-md border transition-colors hover:border-primary"
              >
                {post.image && (
                  <div className="aspect-3/2 overflow-hidden border-b bg-muted">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={post.image}
                      alt={post.imageAlt ?? ''}
                      loading="lazy"
                      className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </div>
                )}
                <div className="flex flex-col gap-2 p-4">
                  <time dateTime={post.date} className="font-mono text-xs text-muted-foreground">
                    {formatDate(post.date, 'long')}
                  </time>
                  <h2 className="text-lg font-medium leading-snug tracking-tight text-balance transition-colors group-hover:text-primary">
                    {post.title}
                  </h2>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
