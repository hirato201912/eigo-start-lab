'use client'

import { useState } from 'react'

export type QAItem = { q: string; a: string }

function QAItemRow({ q, a }: QAItem) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full text-left py-5 flex justify-between items-start gap-3"
      >
        <span className="font-bold text-[#333333] text-base leading-snug flex-1">
          Q. {q}
        </span>
        <span
          className="text-[#D94F8A] text-2xl font-light leading-none mt-0.5 flex-shrink-0 w-6 text-center"
          aria-hidden="true"
        >
          {open ? '−' : '+'}
        </span>
      </button>
      {open && (
        <p className="pb-5 text-[#333333] text-sm leading-loose">A. {a}</p>
      )}
    </div>
  )
}

export function FAQ({ items }: { items: QAItem[] }) {
  return (
    <section className="bg-white px-5 py-12">
      <div className="max-w-lg mx-auto">
        <h2 className="text-[#333333] font-black text-xl text-center mb-8">
          よくあるご質問
        </h2>
        <div>
          {items.map((item) => (
            <QAItemRow key={item.q} q={item.q} a={item.a} />
          ))}
        </div>
      </div>
    </section>
  )
}
