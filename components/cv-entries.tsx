import type { CvEntry } from '@/lib/content'

export function CvEntries({ entries }: { entries: CvEntry[] }) {
  return (
    <ol className="flex flex-col gap-8">
      {entries.map((entry) => (
        <li
          key={`${entry.title}-${entry.org}`}
          className="grid gap-1 md:grid-cols-[1fr_auto] md:gap-x-6 print:break-inside-avoid"
        >
          <h3 className="text-lg font-medium tracking-tight">
            {entry.title}
            {entry.org && <span className="text-muted-foreground">{', '}{entry.org}</span>}
          </h3>
          {(entry.period || entry.location) && <p className="font-mono text-xs text-muted-foreground md:row-start-1 md:col-start-2 md:pt-1.5 md:text-right">
            {entry.period}
            {entry.location && (
              <>
                {entry.period && <span aria-hidden="true">{' · '}</span>}
                {entry.location}
              </>
            )}
          </p>}
          {entry.points && entry.points.length > 0 && (
            <ul className="flex list-disc flex-col gap-1 pt-2 pl-5 leading-relaxed marker:text-muted-foreground md:col-span-2">
              {entry.points.map((point) => (
                <li key={point} className="text-pretty">
                  {point}
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ol>
  )
}
