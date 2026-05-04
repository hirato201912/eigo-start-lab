import type { Metadata } from 'next'
import { Hero } from '@/app/_components/Hero'
import { Empathy } from '@/app/_components/Empathy'
import { ThreeFeatures } from '@/app/_components/ThreeFeatures'
import { EikenVenue } from '@/app/_components/EikenVenue'
import { PriceSection } from '@/app/_components/PriceSection'
import { FAQ, type QAItem } from '@/app/_components/FAQ'
import { FormSection } from '@/app/_components/FormSection'

export const metadata: Metadata = {
  title: 'えいごスタートラボ｜はじめての方へ',
  description:
    '小学生のうちに中学英語を先取り。1ヶ月分授業料無料の体験受付中。英検準会場として今秋以降、試験実施開始。',
}

const QA_ITEMS: QAItem[] = [
  {
    q: '英語がまったくできない子でも大丈夫ですか？',
    a: 'はい、問題ありません。アルファベットから丁寧に始めます。お子さまのペースに合わせて進めますのでご安心ください。',
  },
  {
    q: '他の習い事と両立できますか？',
    a: '週1回なので、他の習い事と無理なく両立できます。',
  },
  {
    q: '体験授業はありますか？',
    a: '初めての方限定で、1ヶ月分の授業料を無料体験としてご利用いただけます。お子さまのレベルや目標をお聞きする簡単な面談もセットです。',
  },
  {
    q: '駐車場はありますか？',
    a: '前原駅前校付近のコインパーキングをご利用ください。送迎時の短時間停車場所についてはお気軽にお問い合わせください。',
  },
  {
    q: '英検は教室で受験できますか？',
    a: 'はい。当教室は日本英語検定協会の準会場として登録されており、今年の秋以降、教室にて英検試験の実施を開始します。慣れた教室で受験いただけます。',
  },
  {
    q: '月謝のほかに費用はかかりますか？',
    a: '月謝の中に教材費も含まれます。追加費用は一切いただきません。月額は授業料3,800円＋維持管理費2,200円の計6,000円、入会金は通常22,000円のところ特別価格5,500円です。なお、初めての方限定で初月の月謝（6,000円）は完全無料となります。',
  },
]

export default function NewPage() {
  return (
    <main>
      <Hero
        badges={['📍 前原駅前校', '6月開講予定', '英検準会場']}
        title={
          <>
            中学英語の貯金、
            <br />
            今から始めませんか。
          </>
        }
        subtitle="小学生のうちに中学英語を先取りすることが、入学後の一番の自信になります。"
        perkLabels={[
          '初めての方限定｜1ヶ月無料体験（6,000円相当）',
          '入会金 22,000円 → 5,500円',
        ]}
        ctaLabel="無料体験を申し込む"
      />
      <Empathy />
      <ThreeFeatures />
      <EikenVenue variant="new" />
      <PriceSection variant="new" />
      <FAQ items={QA_ITEMS} />
      <FormSection variant="new" />
    </main>
  )
}
