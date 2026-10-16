import Link from 'next/link'
import { CvEntries } from '@/components/cv-entries'
import { MarginSection } from '@/components/margin-section'
import { PrintButton } from '@/components/print-button'
import { cv, profile } from '@/lib/content'

export function CareerDocument({ kind }: { kind: 'software' | 'academic' }) {
  const academic = kind === 'academic'
  const title = academic ? 'Academic CV' : 'Software engineering résumé'
  const summary = academic ? cv.academicSummary : cv.softwareSummary
  return (
    <div className="pb-8">
      <header className="flex flex-col gap-6 py-16 md:py-20 print:py-0 print:pb-6">
        <Link href="/cv" className="self-start font-mono text-sm text-primary hover:underline print:hidden">
          Résumé & CV
        </Link>
        <p className="font-mono text-sm text-muted-foreground">{title}</p>
        <h1 className="text-4xl font-medium tracking-tight md:text-5xl">{profile.name}</h1>
        {(profile.location || profile.email) && <p className="font-mono text-sm text-muted-foreground">
          {profile.location}
          {profile.location && profile.email && <span aria-hidden="true">{' · '}</span>}
          <a href={`mailto:${profile.email}`} className="text-primary hover:underline">
            {profile.email}
          </a>
        </p>}
        <p className="max-w-2xl text-pretty text-lg leading-relaxed">{summary}</p>
        <p className="font-mono text-sm text-muted-foreground">Selected background. More details to come.</p>
        <PrintButton />
      </header>

      {!academic && cv.experience.length > 0 && (
        <MarginSection label="Engineering" id="experience">
          <CvEntries entries={cv.experience} />
        </MarginSection>
      )}

      {academic && cv.academic.length > 0 && (
        <MarginSection label="Teaching experience" id="academic">
          <CvEntries entries={cv.academic} />
        </MarginSection>
      )}

      {cv.education.length > 0 && (
        <MarginSection label="Education" id="education">
          <CvEntries entries={cv.education} />
        </MarginSection>
      )}

      {academic && cv.teaching.length > 0 && (
        <MarginSection label="Teaching" id="teaching">
          <ul className="flex flex-col gap-1 leading-relaxed">
            {cv.teaching.map((course) => (
              <li key={course}>{course}</li>
            ))}
          </ul>
        </MarginSection>
      )}

      {academic && cv.publications.length > 0 && (
        <MarginSection label="Papers & talks" id="publications">
          <ul className="flex flex-col gap-3 leading-relaxed">
            {cv.publications.map((pub) => (
              <li key={pub.citation} className="text-pretty">
                {pub.citation} <span className="italic text-muted-foreground">{pub.venue}</span>
              </li>
            ))}
          </ul>
        </MarginSection>
      )}

      {cv.skills.length > 0 && (
        <MarginSection label={academic ? 'Writing interests' : 'Focus'} id="skills">
          <dl className="grid gap-3 md:grid-cols-[7rem_1fr] md:gap-x-6">
            {cv.skills.filter((group) => group.label === (academic ? 'Writing' : 'Engineering')).map((group) => (
              <div key={group.label} className="contents">
                <dt className="font-mono text-xs uppercase tracking-widest text-muted-foreground md:pt-1">
                  {group.label}
                </dt>
                <dd className="leading-relaxed">{group.items}</dd>
              </div>
            ))}
          </dl>
        </MarginSection>
      )}
    </div>
  )
}
