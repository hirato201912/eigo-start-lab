'use client'

import type { ReactNode } from 'react'

type HeroProps = {
  badges: string[]
  title: ReactNode
  subtitle: string
  perkLabels: string[]
  ctaLabel: string
}

export function Hero({ badges, title, subtitle, perkLabels, ctaLabel }: HeroProps) {
  const scrollToForm = () => {
    document
      .getElementById('reservation-form')
      ?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="bg-[#D94F8A] px-5 py-12 text-center">
      {badges.length > 0 && (
        <div className="flex flex-wrap justify-center gap-2 mb-7">
          {badges.map((b) => (
            <span
              key={b}
              className="bg-white/20 border border-white/50 text-white text-xs font-bold px-3 py-1.5 rounded-full"
            >
              {b}
            </span>
          ))}
        </div>
      )}

      <h1 className="text-white text-[1.75rem] font-black leading-snug mb-4">
        {title}
      </h1>

      <p className="text-white/90 text-sm leading-loose mb-7 mx-auto max-w-xs">
        {subtitle}
      </p>

      <div className="flex flex-col items-center gap-2 mb-7">
        {perkLabels.map((label) => (
          <div
            key={label}
            className="inline-block bg-white rounded-xl px-5 py-3"
          >
            <p className="text-[#D94F8A] font-bold text-sm">{label}</p>
          </div>
        ))}
      </div>

      <div>
        <button
          onClick={scrollToForm}
          className="bg-white text-[#D94F8A] font-bold text-base px-8 min-h-[52px] rounded-xl shadow-md hover:shadow-lg active:scale-[0.98] transition-all duration-200"
        >
          {ctaLabel}
        </button>
      </div>
    </section>
  )
}
