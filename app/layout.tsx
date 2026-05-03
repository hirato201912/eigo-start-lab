import type { Metadata } from 'next'
import { Noto_Sans_JP } from 'next/font/google'
import './globals.css'

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'えいごスタートラボ',
    template: '%s',
  },
  description:
    '小学生のうちに中学英語を先取り。えいごスタートラボ、6月開講予定。',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja" className={notoSansJP.className}>
      <body className="antialiased">{children}</body>
    </html>
  )
}
