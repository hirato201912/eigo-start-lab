type Variant = 'current' | 'new'

export function EikenVenue({ variant }: { variant: Variant }) {
  const isCurrent = variant === 'current'

  return (
    <section className="bg-white px-5 py-12">
      <div className="max-w-lg mx-auto">
        <span className="inline-block bg-[#D94F8A] text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
          {isCurrent ? '新規開始' : '英検準会場'}
        </span>
        <h2 className="text-[#D94F8A] font-black text-xl leading-snug mb-4">
          {isCurrent ? (
            <>
              この秋以降、当教室で
              <br />
              英検試験を実施します。
            </>
          ) : (
            <>
              英検準会場として認定。
              <br />
              今秋以降、試験実施開始。
            </>
          )}
        </h2>
        <p className="text-[#333333] text-sm leading-loose mb-5">
          {isCurrent ? (
            <>
              えいごスタートラボの教室がそのまま英検の準会場になります。普段から学んでいる場所で、初めての英検にチャレンジできます。
            </>
          ) : (
            <>
              当教室は、日本英語検定協会の準会場として登録されています。今年の秋以降、教室にて英検試験の実施を開始します。
            </>
          )}
        </p>

        <ul className="space-y-3 text-sm text-[#333333]">
          <li className="flex gap-2">
            <span className="text-[#D94F8A] flex-shrink-0">✓</span>
            <span>
              <strong>慣れた教室</strong>で受験できる安心感
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-[#D94F8A] flex-shrink-0">✓</span>
            <span>
              普段の<strong>先生がそばにいる</strong>から、初めてでも落ち着いて受験
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-[#D94F8A] flex-shrink-0">✓</span>
            <span>
              慣れない会場への<strong>移動・引率の負担なし</strong>
            </span>
          </li>
        </ul>

        {isCurrent && (
          <p className="text-xs text-gray-500 mt-5">
            ※在校生・ご兄弟限定で、初回英検検定料は当校が全額負担します。
          </p>
        )}
      </div>
    </section>
  )
}
