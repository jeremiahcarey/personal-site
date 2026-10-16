import { ArrowUpRight } from 'lucide-react'
import { MarginSection } from '@/components/margin-section'
import { profile } from '@/lib/content'

export function Contact() {
  return (
    <MarginSection label="Contact" id="contact">
      <div className="flex flex-col gap-8">
        <p className="max-w-xl text-pretty text-lg leading-relaxed">
          {
            "Good conversations often start with a shared question. If something here connects with what you’re working on or thinking about, I’d be glad to hear about it."
          }
        </p>
        {profile.email ? <a
          href={`mailto:${profile.email}`}
          className="self-start text-2xl font-medium tracking-tight text-primary underline decoration-1 underline-offset-8 hover:decoration-2 md:text-3xl"
        >
          {profile.email}
        </a> : <p className="font-mono text-sm text-muted-foreground">Contact details coming soon.</p>}
        <ul className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-sm text-muted-foreground">
          {profile.links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 transition-colors hover:text-primary"
              >
                {link.label}
                <ArrowUpRight className="size-3.5" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </MarginSection>
  )
}
