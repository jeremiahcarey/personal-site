import Image from 'next/image'
import portrait from '@/public/me.jpg'
import { profile } from '@/lib/content'

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="grid gap-10 py-16 md:py-24 lg:grid-cols-[1fr_15rem] lg:gap-16"
    >
      <div className="flex flex-col gap-8">
        <h1
          id="hero-heading"
          className="text-balance text-4xl font-medium leading-tight tracking-tight md:text-6xl md:leading-[1.05]"
        >
          {profile.name} <span className="text-muted-foreground">{profile.headline}</span>
        </h1>
        <p className="max-w-2xl text-pretty text-lg leading-relaxed">{profile.intro}</p>
      </div>

      <div className="flex flex-col gap-8 lg:mt-3">
        <Image
          src={portrait}
          alt={`Portrait of ${profile.name}`}
          sizes="(min-width: 1024px) 240px, (min-width: 768px) 320px, 80vw"
          preload
          placeholder="blur"
          className="aspect-square w-full max-w-80 rounded-sm object-cover lg:max-w-none"
        />
        <aside
          aria-label="At a glance"
          className="flex flex-col gap-6 border-l-2 border-primary pl-5 font-mono text-sm leading-relaxed"
        >
          <div className="flex flex-col gap-1">
            <p className="text-xs uppercase tracking-widest text-primary">Now</p>
            <p className="text-foreground">{profile.now}</p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-xs uppercase tracking-widest text-primary">This site</p>
            <p className="text-foreground">{profile.site}</p>
          </div>
        </aside>
      </div>
    </section>
  )
}
