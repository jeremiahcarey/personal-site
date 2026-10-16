import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { MarginSection } from '@/components/margin-section'
import { practices } from '@/lib/content'

export function Practices() {
  return (
    <MarginSection label="Work & interests" id="practices">
      <div className="grid gap-12 md:grid-cols-2 md:gap-10">
        {practices.map((practice) => (
          <article key={practice.field} className="flex flex-col gap-5">
            <h3 className="text-2xl font-medium tracking-tight">{practice.field}</h3>
            <p className="text-pretty leading-relaxed text-foreground">{practice.summary}</p>
            <ul className="flex flex-col gap-1 font-mono text-sm text-muted-foreground">
              {practice.focus.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <Link
              href={practice.cta.href}
              className="group inline-flex items-center gap-2 self-start font-mono text-sm text-primary underline-offset-4 hover:underline"
            >
              {practice.cta.label}
              <ArrowRight
                className="size-4 transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          </article>
        ))}
      </div>
    </MarginSection>
  )
}
