type Variant = 'current' | 'new'

export function PriceSection({ variant }: { variant: Variant }) {
  if (variant === 'current') {
    return (
      <section className="bg-white px-5 py-12">
        <div className="max-w-lg mx-auto">
          <h2 className="text-[#333333] font-black text-xl text-center mb-8">
            料金のご案内
          </h2>

          <div className="border border-gray-200 rounded-2xl p-6 mb-4 text-center">
            <p className="text-sm text-gray-600 mb-2">月額</p>
            <p className="text-[#D94F8A] font-black text-4xl mb-1">
              3,800<span className="text-xl">円</span>
            </p>
            <p className="text-xs text-gray-500 mb-3">週1回・60分授業</p>
            <span className="inline-block bg-[#FFF0F7] rounded-full px-4 py-1.5 text-xs font-bold text-[#D94F8A]">
              ✓ 教材費込み（追加費用なし）
            </span>
          </div>

          <div className="bg-gray-50 rounded-xl px-5 py-4 text-sm text-[#333333] leading-relaxed mb-4">
            <p className="font-bold mb-2">維持管理費について</p>
            <p className="text-xs text-gray-600 mb-3">
              維持管理費は1家族につき2,200円（家族単位で計算されます）
            </p>
            <ul className="space-y-2 text-xs leading-relaxed">
              <li>
                ・<strong>塾生</strong>：現行2,200円のまま
                <span className="text-gray-600">（追加なし）</span>
              </li>
              <li>
                ・<strong>そろばん生</strong>：現行1,320円 → 2,200円
                <span className="text-[#D94F8A] font-bold">（差額880円のみ）</span>
              </li>
            </ul>
            <p className="text-xs text-gray-600 mt-3 leading-relaxed">
              ※ご兄弟が英語クラスを受講される場合も、家族単位で同じ扱いです（塾生のご兄弟は追加なし、そろばん生のご兄弟は差額880円のみ）
            </p>
          </div>

          <div className="bg-[#FFF0F7] border-2 border-[#D94F8A] rounded-2xl p-5 text-center">
            <p className="text-[#D94F8A] font-bold text-sm mb-2">
              先行予約特典の2ヶ月間は
            </p>
            <p className="text-[#D94F8A] font-black text-lg leading-snug">
              授業料・維持管理費の差額も
              <br />
              含めて完全無料
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="bg-white px-5 py-12">
      <div className="max-w-lg mx-auto">
        <h2 className="text-[#333333] font-black text-xl text-center mb-8">
          料金のご案内
        </h2>

        <div className="border border-gray-200 rounded-2xl p-6 mb-4">
          <p className="text-sm text-gray-600 mb-3 text-center">月額</p>
          <dl className="space-y-2 mb-3">
            <div className="flex justify-between text-sm text-[#333333]">
              <dt>授業料（週1回・60分）</dt>
              <dd className="font-bold">3,800円</dd>
            </div>
            <div className="flex justify-between text-sm text-[#333333]">
              <dt>維持管理費</dt>
              <dd className="font-bold">2,200円</dd>
            </div>
          </dl>
          <div className="border-t border-gray-300 pt-3 flex justify-between items-baseline">
            <p className="text-sm text-[#333333] font-bold">合計</p>
            <p className="text-[#D94F8A] font-black text-2xl">
              6,000<span className="text-base">円</span>
            </p>
          </div>
          <div className="mt-4 text-center">
            <span className="inline-block bg-[#FFF0F7] rounded-full px-4 py-1.5 text-xs font-bold text-[#D94F8A]">
              ✓ 教材費込み（追加費用なし）
            </span>
          </div>
        </div>

        <div className="border border-gray-200 rounded-2xl p-6 mb-5 text-center">
          <p className="text-sm text-gray-600 mb-2">入会金</p>
          <div className="flex justify-center items-baseline gap-3 mb-1">
            <span className="text-gray-400 text-base line-through">22,000円</span>
            <span className="text-[#D94F8A] font-black text-3xl">
              5,500<span className="text-lg">円</span>
            </span>
          </div>
          <p className="text-xs text-[#D94F8A] font-bold">▲16,500円OFF</p>
        </div>

        <div className="bg-[#FFF0F7] border-2 border-[#D94F8A] rounded-2xl p-5">
          <p className="text-[#D94F8A] font-bold text-sm mb-3 text-center">
            さらに初月の月謝（6,000円）も完全無料
          </p>
          <div className="bg-white rounded-xl p-4 text-center">
            <p className="text-xs text-gray-600 mb-1">
              通常28,000円の初期費用が
            </p>
            <p className="text-[#D94F8A] font-black text-2xl leading-snug">
              5,500円のみ
            </p>
            <p className="text-xs text-gray-500 mt-2">（▲22,500円お得）</p>
          </div>
        </div>
      </div>
    </section>
  )
}
