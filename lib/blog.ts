import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'

// Selected shorter pieces, many first published on Substack.
// Add a post by dropping `<slug>.md` into content/blog/ with frontmatter:
//   title, date (YYYY-MM-DD), substackUrl, image + imageAlt (optional cover for the card and link previews)
// Put any images in public/blog/<slug>/ and reference them as /blog/<slug>/file.jpg.
const postsDir = path.join(process.cwd(), 'content/blog')

export type PostMeta = {
  slug: string
  title: string
  date: string
  // Not shown on the page; used as the meta description for search and link previews.
  excerpt: string
  substackUrl?: string
  image?: string
  imageAlt?: string
}

export type Post = PostMeta & { body: string }

function readPost(slug: string): Post {
  const { data, content } = matter(fs.readFileSync(path.join(postsDir, `${slug}.md`), 'utf8'))
  // YAML parses bare dates as Date objects; normalize to YYYY-MM-DD.
  const date = data.date instanceof Date ? data.date.toISOString().slice(0, 10) : String(data.date)
  return {
    slug,
    title: data.title,
    date,
    excerpt: excerpt(content),
    substackUrl: data.substackUrl,
    image: data.image,
    imageAlt: data.imageAlt,
    body: content,
  }
}

// First prose paragraph, stripped of basic Markdown and trimmed to ~160 characters.
function excerpt(markdown: string) {
  const para = markdown.split(/\n\s*\n/).find((block) => /^[A-Za-z“"‘']/.test(block.trim())) ?? ''
  const text = para
    .replace(/!?\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/[*_`]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
  return text.length > 160 ? `${text.slice(0, 157).replace(/\s+\S*$/, '')}…` : text
}

export function getPosts(): PostMeta[] {
  if (!fs.existsSync(postsDir)) return []
  return fs
    .readdirSync(postsDir)
    .filter((file) => file.endsWith('.md'))
    .map((file) => {
      const { body: _body, ...meta } = readPost(file.replace(/\.md$/, ''))
      return meta
    })
    .sort((a, b) => b.date.localeCompare(a.date))
}

export function getPost(slug: string): Post | undefined {
  if (!fs.existsSync(path.join(postsDir, `${slug}.md`))) return undefined
  return readPost(slug)
}
