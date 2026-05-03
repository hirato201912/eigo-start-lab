export function ThreeFeatures() {
  return (
    <section className="bg-white px-5 py-12">
      <div className="max-w-lg mx-auto">
        <h2 className="text-[#333333] font-black text-xl text-center mb-8">
          えいごスタートラボの
          <br />
          3つの特長
        </h2>

        <div className="space-y-5">
          <div className="bg-[#FFF0F7] border-2 border-[#D94F8A] rounded-2xl p-6 shadow-md">
            <span className="inline-block bg-[#D94F8A] text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
              最大の特長
            </span>
            <h3 className="text-[#D94F8A] font-black text-lg leading-snug mb-3">
              中学英語を、小学生のうちに先取りする
            </h3>
            <p className="text-[#333333] text-sm leading-loose">
              中学校に入った瞬間から英語が得意な状態でスタートできます。最初のテストで高得点を取ることで、英語への自信が一気につきます。無学年方式なので、学年を飛び越えてどんどん先に進むことも可能です。
            </p>
          </div>

          <div className="border border-gray-200 rounded-2xl p-6">
            <h3 className="text-[#333333] font-bold text-base mb-2">
              英検にも本格対応
            </h3>
            <p className="text-[#333333] text-sm leading-loose">
              5級・4級はもちろん、それ以上の級も目指せるカリキュラムです。
            </p>
          </div>

          <div className="border border-gray-200 rounded-2xl p-6">
            <h3 className="text-[#333333] font-bold text-base mb-2">
              週1回、習い事感覚で通える
            </h3>
            <p className="text-[#333333] text-sm leading-loose mb-4">
              月額3,800円（週1回）。他の習い事とも無理なく両立できます。
            </p>
            <div className="bg-gray-50 rounded-xl px-4 py-3 text-sm text-[#333333]">
              <p className="font-bold mb-1">授業時間</p>
              <p>月・水・木・金　17:05〜18:05（60分）</p>
              <p className="text-xs text-gray-500 mt-1">
                ご都合の良い曜日をお選びいただけます
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
