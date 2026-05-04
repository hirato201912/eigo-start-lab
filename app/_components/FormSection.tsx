import Link from 'next/link'
import { ReservationForm } from './ReservationForm'

type Variant = 'current' | 'new'

export function FormSection({ variant }: { variant: Variant }) {
  const isNew = variant === 'new'

  return (
    <section id="reservation-form" className="bg-[#D94F8A] px-5 py-12">
      <div className="max-w-lg mx-auto">
        <h2 className="text-white font-black text-2xl text-center leading-snug mb-3">
          まずは、気軽に
          <br />
          体験してみてください。
        </h2>
        <p className="text-white/90 text-sm text-center leading-relaxed mb-3">
          フォーム送信後、こちらから日程をご連絡します。
          <br />
          しつこい勧誘は一切しません。
        </p>
        <p className="text-white/80 text-xs text-center mb-6">
          📍 前原駅前校　月・水・木・金 17:05〜18:05
        </p>

        {!isNew && (
          <p className="text-white text-xs text-center mb-6 leading-relaxed bg-white/10 rounded-lg px-4 py-3">
            外部からご検討の方は、
            <Link href="/new" className="underline font-bold">
              はじめての方のご案内
            </Link>
            からお申し込みください。
          </p>
        )}

        {isNew && (
          <p className="text-white text-xs text-center mb-6 leading-relaxed bg-white/10 rounded-lg px-4 py-3">
            そろばん生・塾生・ご兄弟のご家族は、
            <Link href="/current" className="underline font-bold">
              在校生限定のご案内
            </Link>
            をご覧ください。
          </p>
        )}

        <ReservationForm variant={variant} />

        {isNew && (
          <p className="text-white/80 text-xs text-center mt-4">
            ※ ご入力いただいたメールアドレス・電話番号は、日程のご連絡にのみ使用します。
          </p>
        )}
      </div>
    </section>
  )
}
