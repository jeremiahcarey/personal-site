import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { cn } from '@/lib/utils'

// Markdown counterpart to ArticleBody, styled to match it.
export function MarkdownBody({ source }: { source: string }) {
  return (
    <div className="flex flex-col gap-6 border-t pt-10 text-lg leading-relaxed">
      <Markdown
        remarkPlugins={[remarkGfm]}
        components={{
          p: ({ node: _node, ...props }) => <p className="text-pretty" {...props} />,
          h2: ({ node: _node, className, ...props }) => (
            <h2 className={cn('pt-4 text-2xl font-medium tracking-tight text-balance', className)} {...props} />
          ),
          h3: ({ node: _node, ...props }) => <h3 className="pt-2 text-xl font-medium tracking-tight text-balance" {...props} />,
          a: ({ node: _node, ...props }) => (
            <a className="text-primary underline underline-offset-4 wrap-break-word" {...props} />
          ),
          blockquote: ({ node: _node, ...props }) => (
            <blockquote className="flex flex-col gap-4 border-l-2 border-primary py-1 pl-6 text-xl italic text-foreground" {...props} />
          ),
          ul: ({ node: _node, ...props }) => <ul className="flex list-disc flex-col gap-2 pl-6" {...props} />,
          ol: ({ node: _node, ...props }) => <ol className="flex list-decimal flex-col gap-2 pl-6" {...props} />,
          hr: () => <hr className="my-4 border-border" />,
          img: ({ node: _node, alt, ...props }) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img alt={alt ?? ''} className="h-auto max-w-full" loading="lazy" {...props} />
          ),
          sup: ({ node: _node, ...props }) => <sup className="font-mono text-xs" {...props} />,
          section: ({ node: _node, className, ...props }) => (
            <section
              className={cn(className, className?.includes('footnotes') && 'flex flex-col gap-2 border-t pt-6 text-base text-muted-foreground')}
              {...props}
            />
          ),
        }}
      >
        {source}
      </Markdown>
    </div>
  )
}
