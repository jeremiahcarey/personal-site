import { profile } from '@/lib/content'

export function SiteFooter() {
  return (
    <footer className="flex flex-col gap-2 border-t py-8 font-mono text-xs text-muted-foreground md:flex-row md:items-center md:justify-between print:hidden">
      <p>
        {'© '}
        {new Date().getFullYear()} {profile.name}
      </p>
      <p>A work in progress, by {profile.name.split(' ')[0]}.</p>
    </footer>
  )
}
