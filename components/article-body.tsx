import type { Block } from '@/lib/content'

export function ArticleBody({ blocks }: { blocks: Block[] }) {
  return (
    <div className="flex flex-col gap-6 border-t pt-10 text-lg leading-relaxed">
      {blocks.map((block, i) => {
        switch (block.type) {
          case 'h2':
            return (
              <h2 key={i} className="pt-4 text-2xl font-medium tracking-tight text-balance">
                {block.text}
              </h2>
            )
          case 'quote':
            return (
              <blockquote
                key={i}
                className="border-l-2 border-primary py-1 pl-6 text-xl italic text-foreground"
              >
                <p>{block.text}</p>
                {block.cite && (
                  <footer className="pt-2 font-mono text-xs not-italic text-muted-foreground">
                    {block.cite}
                  </footer>
                )}
              </blockquote>
            )
          default:
            return (
              <p key={i} className="text-pretty">
                {block.text}
              </p>
            )
        }
      })}
    </div>
  )
}
