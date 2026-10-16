import type { Metadata } from 'next'
import Link from 'next/link'
import { WritingList } from '@/components/writing-list'
import { getSortedWritings } from '@/lib/content'
import { cn } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Writing',
  description: 'Writing by Jeremiah Carey on ethics, philosophy of religion, and philosophical theology, alongside notes on software development.',
}

const filters = [
  { label: 'All', value: undefined },
  { label: 'Philosophy', value: 'philosophy' },
  { label: 'Engineering', value: 'engineering' },
] as const

export default async function WritingPage({
  searchParams,
}: {
  searchParams: Promise<{ field?: string }>
}) {
  const { field } = await searchParams
  const active = filters.find((f) => f.value === field)?.value
  const items = getSortedWritings().filter(
    (w) => !active || w.field.toLowerCase() === active,
  )

  return (
    <div className="grid gap-10 py-16 md:grid-cols-[10rem_1fr] md:py-20">
      <div className="flex flex-col gap-6">
        <h1 className="text-4xl font-medium tracking-tight md:text-2xl">Writing</h1>
        <nav aria-label="Filter by field">
          <ul className="flex gap-4 font-mono text-sm md:flex-col md:gap-2">
            {filters.map((f) => {
              const isActive = f.value === active
              return (
                <li key={f.label}>
                  <Link
                    href={f.value ? `/writing?field=${f.value}` : '/writing'}
                    aria-current={isActive ? 'page' : undefined}
                    className={cn(
                      'transition-colors hover:text-primary',
                      isActive ? 'text-primary underline underline-offset-4' : 'text-muted-foreground',
                    )}
                  >
                    {f.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
      <div className="min-w-0 md:-mt-6">
        <WritingList items={items} />
      </div>
    </div>
  )
}
