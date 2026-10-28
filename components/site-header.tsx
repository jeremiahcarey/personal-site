import Link from 'next/link'
import { profile } from '@/lib/content'

const nav = [
  { label: 'Engineering', href: '/engineering' },
  { label: 'Philosophical Writing', href: '/philosophy' },
  { label: 'Résumé & CV', href: '/cv' },
  { label: 'Contact', href: '/#contact' },
]

export function SiteHeader() {
  return (
    <header className="flex flex-wrap items-center justify-between gap-4 border-b py-6 print:hidden">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:bg-background focus:p-2"
      >
        Skip to content
      </a>
      <Link href="/" className="font-mono text-sm tracking-tight text-foreground hover:text-primary">
        {profile.name}
      </Link>
      <nav aria-label="Primary">
        <ul className="flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-sm text-muted-foreground">
          {nav.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="transition-colors hover:text-primary">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
