import Link from 'next/link'
import { formatDate, type Writing } from '@/lib/content'

export function WritingList({ items }: { items: Writing[] }) {
  if (items.length === 0) {
    return <p className="text-muted-foreground">I’m bringing my writing together here. Check back for pieces on ethics, philosophy of religion, and philosophical theology, alongside notes on software development.</p>
  }

  return (
    <ul className="flex flex-col">
      {items.map((item) => (
        <li key={item.slug} className="border-b last:border-b-0">
          <Link
            href={`/writing/${item.slug}`}
            className="group grid gap-2 py-6 md:grid-cols-[6.5rem_1fr] md:gap-6"
          >
            <time dateTime={item.date} className="font-mono text-xs text-muted-foreground md:pt-1.5">
              {formatDate(item.date)}
            </time>
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-medium tracking-tight text-balance transition-colors group-hover:text-primary">
                {item.title}
              </h3>
              <p className="text-pretty leading-relaxed text-muted-foreground">{item.summary}</p>
              <p className="font-mono text-xs text-muted-foreground">
                {item.field}
                <span aria-hidden="true">{' · '}</span>
                {item.kind}
              </p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}
