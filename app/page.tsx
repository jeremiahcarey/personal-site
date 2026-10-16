import Link from 'next/link'
import { Contact } from '@/components/contact'
import { Hero } from '@/components/hero'
import { MarginSection } from '@/components/margin-section'
import { Practices } from '@/components/practices'
import { WritingList } from '@/components/writing-list'
import { getSortedWritings } from '@/lib/content'

export default function HomePage() {
  const recent = getSortedWritings().slice(0, 4)

  return (
    <>
      <Hero />
      <Practices />
      <MarginSection label="From the notebook" id="writing">
        <div className="flex flex-col gap-4">
          <div className="-mt-6">
            <WritingList items={recent} />
          </div>
          <Link
            href="/writing"
            className="self-start font-mono text-sm text-primary underline-offset-4 hover:underline"
          >
            Browse the notebook
          </Link>
        </div>
      </MarginSection>
      <Contact />
    </>
  )
}
