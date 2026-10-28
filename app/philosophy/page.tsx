import type { Metadata } from 'next'
import Link from 'next/link'
import { MarginSection } from '@/components/margin-section'
import { WritingList } from '@/components/writing-list'
import { getSortedWritings } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Philosophical Writing',
  description: 'Papers and essays by Jeremiah Carey on ethics, philosophy of religion, and philosophical theology.',
}

export default function PhilosophyPage() {
  const papers = getSortedWritings().filter((item) => item.field === 'Philosophy')

  return (
    <div className="pb-8">
      <header className="flex max-w-2xl flex-col gap-6 py-16 md:py-20">
        <h1 className="text-4xl font-medium tracking-tight md:text-5xl">Philosophical Writing</h1>
        <p className="text-pretty text-lg leading-relaxed">
          My writing explores ethics, the philosophy of religion, and philosophical theology. This is a place to collect my papers and essays.
        </p>
        <Link href="/cv/academic" className="self-start font-mono text-sm text-primary underline-offset-4 hover:underline">
          Academic CV →
        </Link>
      </header>
      <MarginSection label="Papers & essays" id="papers">
        <WritingList items={papers} emptyMessage="I’ll add links to my papers here. For a full list of publications, see my academic CV." />
      </MarginSection>
    </div>
  )
}
