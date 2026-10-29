import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { JetBrains_Mono, Source_Serif_4 } from 'next/font/google'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { profile } from '@/lib/content'
import './globals.css'

const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  variable: '--font-source-serif',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: `${profile.name} — Software Engineer & Philosopher`,
    template: `%s — ${profile.name}`,
  },
  description: `${profile.name} is a frontend-focused software engineer at Omnicom with a PhD in philosophy. Writing on ethics, philosophy of religion, and philosophical theology.`,
  icons: {
    icon: [
      { url: '/favicon.ico?v=jc-1', sizes: '16x16 32x32 48x48' },
      { url: '/icon-32.png?v=jc-1', sizes: '32x32', type: 'image/png' },
      { url: '/icon.svg?v=jc-1', sizes: 'any', type: 'image/svg+xml' },
    ],
    apple: { url: '/apple-icon.png?v=jc-1', sizes: '180x180', type: 'image/png' },
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f5f6f8',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${sourceSerif.variable} ${jetbrainsMono.variable} bg-background`}>
      <body className="font-serif antialiased">
        <div className="mx-auto flex min-h-dvh w-full max-w-5xl flex-col px-6 md:px-10">
          <SiteHeader />
          <main id="main" className="flex-1">
            {children}
          </main>
          <SiteFooter />
        </div>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
