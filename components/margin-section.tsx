import { cn } from '@/lib/utils'

type MarginSectionProps = {
  label: string
  id?: string
  children: React.ReactNode
  className?: string
}

export function MarginSection({ label, id, children, className }: MarginSectionProps) {
  const headingId = id ? `${id}-heading` : undefined
  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={cn('grid gap-4 border-t py-12 md:grid-cols-[10rem_1fr] md:gap-10', className)}
    >
      <h2
        id={headingId}
        className="font-mono text-xs uppercase tracking-widest text-muted-foreground md:pt-1"
      >
        {label}
      </h2>
      <div className="min-w-0">{children}</div>
    </section>
  )
}
