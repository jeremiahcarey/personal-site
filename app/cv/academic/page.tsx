import type { Metadata } from 'next'
import { CareerDocument } from '@/components/career-document'
import { profile } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Academic CV',
  description: `Academic CV for ${profile.name}.`,
}

export default function DocumentPage() {
  return <CareerDocument kind="academic" />
}
