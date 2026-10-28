import type { Metadata } from 'next'
import Link from 'next/link'
import { MarginSection } from '@/components/margin-section'
import { WritingList } from '@/components/writing-list'
import { resume } from '@/lib/career'
import { getSortedWritings } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Engineering',
  description: 'Side projects and software engineering work by Jeremiah Carey.',
}

export default function EngineeringPage() {
  const notes = getSortedWritings().filter((item) => item.field === 'Engineering')

  return (
    <div className="pb-8">
      <header className="flex max-w-2xl flex-col gap-6 py-16 md:py-20">
        <h1 className="text-4xl font-medium tracking-tight md:text-5xl">Engineering</h1>
        <p className="text-pretty text-lg leading-relaxed">
          I build web interfaces at Annalect (Omnicom). Here are my side projects and experiments in software.
        </p>
        <Link href="/cv/software" className="self-start font-mono text-sm text-primary underline-offset-4 hover:underline">
          Software engineering résumé →
        </Link>
      </header>
      <MarginSection label="Side projects" id="projects">
        <ul className="flex flex-col gap-10">
          {resume.projects.map((project) => (
            <li key={project.name} className="flex flex-col gap-3">
              <h2 className="text-2xl font-medium tracking-tight">
                <a href={project.href} className="text-primary underline-offset-4 hover:underline">{project.name} ↗</a>
              </h2>
              {project.status && <p className="font-mono text-xs text-muted-foreground">{project.status}</p>}
              <p className="text-pretty leading-relaxed">{project.description}</p>
            </li>
          ))}
        </ul>
      </MarginSection>
      {notes.length > 0 && (
        <MarginSection label="Notes" id="notes"><WritingList items={notes} /></MarginSection>
      )}
    </div>
  )
}
