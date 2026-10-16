import type { Metadata } from 'next'
import { CareerDocument } from '@/components/career-document'
import { profile } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Software engineering résumé',
  description: `Software engineering résumé for ${profile.name}.`,
}

export default function DocumentPage() {
  return <CareerDocument kind="software" />
}
