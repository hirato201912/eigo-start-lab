type Variant = 'current' | 'new'

export function EikenVenue({ variant }: { variant: Variant }) {
  const isCurrent = variant === 'current'

  return (
    <section className="bg-white px-5 py-12">
      <div className="max-w-lg mx-auto">
        <span className="inline-block bg-[#D94F8A] text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
          {isCurrent ? 'NEW' : '英検準会場'}
        </span>
        <h2 className="text-[#D94F8A] font-black text-xl leading-snug mb-4">
          {isCurrent ? (
            <>
              この夏より、当教室で
              <br />
              英検試験を実施します。
            </>
          ) : (
            <>
              英検準会場として認定。
              <br />
              今夏より試験実施開始。
            </>
          )}
        </h2>
        <p className="text-[#333333] text-sm leading-loose">
          {isCurrent ? (
            <>
              えいごスタートラボの教室がそのまま英検の準会場になります。普段から学んでいる場所で、慣れ親しんだ先生のもと、初めての英検にチャレンジできます。慣れない会場への移動や引率の負担もありません。
            </>
          ) : (
            <>
              当教室は、日本英語検定協会の準会場として登録されています。今年の夏より、教室にて英検試験の実施を開始します。慣れた教室・先生のもとで受験できる安心感があり、初めての英検でも落ち着いて臨めます。
            </>
          )}
        </p>
      </div>
    </section>
  )
}
