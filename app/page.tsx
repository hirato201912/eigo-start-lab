import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'えいごスタートラボ｜ご案内ページ',
  description:
    '小学生のうちに中学英語を先取り。在校生・ご兄弟の方／はじめての方それぞれにご案内をご用意しています。',
}

export default function Page() {
  return (
    <main className="min-h-screen bg-white px-5 py-10">
      <div className="max-w-lg mx-auto">
        <header className="text-center mb-8">
          <Image
            src="/eigo_star.png"
            alt=""
            width={96}
            height={96}
            className="mx-auto mb-4"
            priority
          />
          <h1 className="text-[#D94F8A] font-black text-2xl mb-3">
            えいごスタートラボ
          </h1>
          <p className="text-[#333333] text-sm">
            ご案内ページをお選びください
          </p>
        </header>

        <div className="space-y-4">
          <Link
            href="/current"
            className="block bg-[#D94F8A] text-white rounded-2xl p-6 shadow-md hover:shadow-lg active:scale-[0.99] transition-all"
          >
            <p className="text-xs font-bold mb-1 opacity-90">
              対象：そろばん生・塾生・ご兄弟
            </p>
            <h2 className="text-lg font-black mb-3 leading-snug">
              在校生・ご兄弟のご家族へ
            </h2>
            <ul className="space-y-1.5 mb-4 text-sm">
              <li>✓ 2ヶ月分授業料 無料</li>
              <li>✓ 初回英検検定料 全額負担</li>
            </ul>
            <span className="inline-flex items-center gap-2 text-sm font-bold">
              こちらのご案内へ <span aria-hidden>→</span>
            </span>
          </Link>

          <Link
            href="/new"
            className="block bg-white border-2 border-[#D94F8A] text-[#D94F8A] rounded-2xl p-6 shadow-md hover:shadow-lg active:scale-[0.99] transition-all"
          >
            <p className="text-xs font-bold mb-1 opacity-80">
              対象：外部からご検討の方
            </p>
            <h2 className="text-lg font-black mb-3 leading-snug">
              はじめての方へ
            </h2>
            <ul className="space-y-1.5 mb-4 text-sm">
              <li>✓ 1ヶ月無料体験（6,000円相当）</li>
              <li>✓ 入会金 22,000円→5,500円</li>
              <li>✓ 英検準会場として今秋以降始動</li>
            </ul>
            <span className="inline-flex items-center gap-2 text-sm font-bold">
              こちらのご案内へ <span aria-hidden>→</span>
            </span>
          </Link>
        </div>

        <footer className="mt-10 text-center text-xs text-gray-500">
          📍 前原駅前校　月・水・木・金 17:05〜18:05
        </footer>
      </div>
    </main>
  )
}
