'use client'

import { Printer } from 'lucide-react'

export function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="inline-flex items-center gap-2 self-start rounded-sm border border-primary px-3 py-1.5 font-mono text-sm text-primary transition-colors hover:bg-primary hover:text-primary-foreground print:hidden"
    >
      <Printer className="size-4" aria-hidden="true" />
      Print / save as PDF
    </button>
  )
}
