import Link from 'next/link'
import { Download } from 'lucide-react'
import { CvEntries } from '@/components/cv-entries'
import { MarginSection } from '@/components/margin-section'
import { PrintButton } from '@/components/print-button'
import { academicCv, contact, education, resume } from '@/lib/career'
import { profile } from '@/lib/content'

function DetailGroups({ groups }: { groups: { label: string; items: string }[] }) {
  return (
    <dl className="flex flex-col gap-4">
      {groups.map((group) => (
        <div key={group.label} className="grid gap-1 sm:grid-cols-[9rem_1fr] sm:gap-6">
          <dt className="pt-1 font-mono text-xs uppercase tracking-widest text-muted-foreground">{group.label}</dt>
          <dd className="leading-relaxed">{group.items}</dd>
        </div>
      ))}
    </dl>
  )
}

export function CareerDocument({ kind }: { kind: 'software' | 'academic' }) {
  const academic = kind === 'academic'
  const title = academic ? 'Academic CV' : 'Software engineering résumé'
  return (
    <div className="pb-8">
      <header className="flex flex-col gap-6 py-16 md:py-20 print:py-0 print:pb-6">
        <Link href="/cv" className="self-start font-mono text-sm text-primary hover:underline print:hidden">
          Résumé & CV
        </Link>
        <p className="font-mono text-sm text-muted-foreground">{title}</p>
        <h1 className="text-4xl font-medium tracking-tight md:text-5xl">{profile.name}</h1>
        {!academic && <p className="text-xl">{resume.headline}</p>}
        <address className="flex flex-wrap gap-x-5 gap-y-2 font-mono text-sm not-italic text-muted-foreground">
          {!academic && <span>{contact.location}</span>}
          <a href={`mailto:${contact.email}`} className="break-all text-primary hover:underline">{contact.email}</a>
          <a href={contact.phoneHref} className="text-primary hover:underline">{contact.phone}</a>
          <a href={academic ? contact.website : contact.linkedin} className="text-primary hover:underline">
            {academic ? 'www.jeremiahcarey.com' : 'LinkedIn'}
          </a>
        </address>
        <div className="flex flex-wrap items-center gap-3 print:hidden">
          <a
            href={academic ? '/cv.pdf' : '/resume.pdf'}
            download={academic ? 'Jeremiah-Carey-Academic-CV.pdf' : 'Jeremiah-Carey-Resume.pdf'}
            className="inline-flex items-center gap-2 rounded-sm border border-primary bg-primary px-3 py-1.5 font-mono text-sm text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <Download className="size-4" aria-hidden="true" />
            Download {academic ? 'CV' : 'résumé'} (PDF)
          </a>
          <PrintButton />
        </div>
      </header>

      {academic ? (
        <>
          <MarginSection label="Education" id="education"><CvEntries entries={education} /></MarginSection>
          <MarginSection label="Academic & professional employment" id="employment"><CvEntries entries={academicCv.employment} /></MarginSection>
          <MarginSection label="Areas of specialization & competence" id="areas"><DetailGroups groups={academicCv.areas} /></MarginSection>
          <MarginSection label="Books under contract" id="books-under-contract">
            <ol className="flex flex-col gap-5 leading-relaxed">
              {academicCv.booksUnderContract.map((book) => (
                <li key={book.title} className="text-pretty print:break-inside-avoid">
                  {book.contributors} <span className="italic">{book.title}</span> {book.status}
                </li>
              ))}
            </ol>
          </MarginSection>
          <MarginSection label="Publications" id="publications">
            <ol className="flex flex-col gap-5 leading-relaxed">
              {academicCv.publications.map((publication) => (
                <li key={publication.title} className="text-pretty print:break-inside-avoid">
                  {publication.title} <span className="italic">{publication.venue}</span>
                </li>
              ))}
            </ol>
          </MarginSection>
          <MarginSection label="Courses taught" id="teaching"><CvEntries entries={academicCv.teaching} /></MarginSection>
          <MarginSection label="Talks & presentations" id="talks"><CvEntries entries={academicCv.talks} /></MarginSection>
          <MarginSection label="Awards & honors" id="awards"><CvEntries entries={academicCv.awards} /></MarginSection>
          <MarginSection label="References" id="references">
            <ul className="flex flex-col gap-4">
              {academicCv.references.map((reference) => (
                <li key={reference.email} className="flex flex-wrap gap-x-4 gap-y-1">
                  <span>{reference.name}</span>
                  <a href={`mailto:${reference.email}`} className="break-all text-primary hover:underline">{reference.email}</a>
                </li>
              ))}
            </ul>
          </MarginSection>
        </>
      ) : (
        <>
          <MarginSection label="Summary" id="summary"><p className="text-pretty leading-relaxed">{resume.summary}</p></MarginSection>
          <MarginSection label="Experience" id="experience"><CvEntries entries={resume.experience} /></MarginSection>
          <MarginSection label="Skills" id="skills"><DetailGroups groups={resume.skills} /></MarginSection>
          <MarginSection label="Projects" id="projects">
            <ul className="flex flex-col gap-8">
              {resume.projects.map((project) => (
                <li key={project.name} className="print:break-inside-avoid">
                  <h3 className="text-lg font-medium">
                    <a href={project.href} className="text-primary underline-offset-4 hover:underline">{project.name} ↗</a>
                    {project.status && <span className="ml-3 font-mono text-xs font-normal text-muted-foreground">{project.status}</span>}
                  </h3>
                  <p className="mt-2 text-pretty leading-relaxed">{project.description}</p>
                </li>
              ))}
            </ul>
          </MarginSection>
          <MarginSection label="Education" id="education"><CvEntries entries={education.map(({ points, ...entry }) => entry)} /></MarginSection>
        </>
      )}
    </div>
  )
}
