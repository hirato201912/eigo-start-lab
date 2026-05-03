import type { Metadata } from 'next'
import { Hero } from '@/app/_components/Hero'
import { Empathy } from '@/app/_components/Empathy'
import { ThreeFeatures } from '@/app/_components/ThreeFeatures'
import { EikenVenue } from '@/app/_components/EikenVenue'
import { BenefitsCurrent } from '@/app/_components/BenefitsCurrent'
import { FAQ, type QAItem } from '@/app/_components/FAQ'
import { FormSection } from '@/app/_components/FormSection'

export const metadata: Metadata = {
  title: 'えいごスタートラボ｜在校生・ご兄弟のご家族へ',
  description:
    'そろばん生・塾生・ご兄弟限定。2ヶ月分授業料無料 ＋ 初回英検検定料全額負担。先行予約受付中。',
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
    a: 'はい。先行予約の方には無料体験授業をご用意しています。初回に10分程度の簡単な面談もセットです。お子さまのレベルや目標をお聞きした上でスタートします。',
  },
  {
    q: 'そろばん生のご兄弟は特典の対象になりますか？',
    a: 'はい、対象になります。フォームの「現在通っているコース」で「ご兄弟」をお選びください。',
  },
  {
    q: '英検の検定料負担は何回まで対象ですか？',
    a: '初めて英検を受験される際の1回のみ、検定料を全額負担いたします。2回目以降は通常の検定料となります。受験級は学習進度をふまえてご相談のうえ決定します。',
  },
]

export default function CurrentPage() {
  return (
    <main>
      <Hero
        badges={['そろばん生・塾生 先行受付中', '6月開講予定', '📍 前原駅前校']}
        title={
          <>
            中学英語の貯金、
            <br />
            今から始めませんか。
          </>
        }
        subtitle="小学生のうちに中学英語を先取りすることが、入学後の一番の自信になります。"
        perkLabels={[
          '先行予約特典｜2ヶ月分授業料 無料',
          '初回英検検定料 全額負担',
        ]}
        ctaLabel="先行予約をする（無料）"
      />
      <Empathy />
      <ThreeFeatures />
      <EikenVenue variant="current" />
      <BenefitsCurrent />
      <FAQ items={QA_ITEMS} />
      <FormSection variant="current" />
    </main>
  )
}
