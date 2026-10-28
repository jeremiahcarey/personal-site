import { redirect } from 'next/navigation'

export default async function WritingPage({
  searchParams,
}: {
  searchParams: Promise<{ field?: string }>
}) {
  const { field } = await searchParams
  redirect(field === 'engineering' ? '/engineering' : '/philosophy')
}
