# えいごスタートラボ｜運営ハンドブック

このドキュメントは、ランディングページ運用・配信・印刷物・外部サイト連携・SEO等、コードからは読み取れない**運用ノウハウと判断の背景**をまとめたものです。

---

## 1. 料金・特典の体系

### 1.1 確定した料金体系

| 区分 | 月額 | 入会金 | 維持管理費（家族単位） |
|---|---|---|---|
| **新規生徒** | 6,000円（授業料3,800 + 維持管理費2,200） | **5,500円**（通常22,000円） | 含む |
| **塾生** | 3,800円 | なし | 現行2,200円のまま（追加なし） |
| **そろばん生** | 3,800円 | なし | 1,320円→2,200円（差額**880円**のみ） |
| **ご兄弟（塾生）** | 3,800円 | なし | 家族単位で扱い・追加なし |
| **ご兄弟（そろばん生）** | 3,800円 | なし | 家族単位で扱い・差額880円のみ |

教材費はすべて月謝に含む（追加費用なし）。

### 1.2 特典の体系

**在校生（そろばん生・塾生・ご兄弟）限定の二大特典**
1. 2ヶ月分授業料 無料（7,600円相当）
2. 初回英検検定料 全額負担（お一人様1回限り）

→ 2ヶ月の特典期間中は維持管理費の差額（そろばん生の880円）も含めて完全無料

**新規生徒限定の特典**
1. 入会金割引 22,000円→5,500円（▲16,500円OFF）
2. 1ヶ月分月謝 無料体験（6,000円相当）

→ 通常28,000円の初期費用が5,500円のみ（▲22,500円お得）

### 1.3 決定の背景（なぜこの体系か）

- **教材費を月謝に含める**：「あとから追加請求」というクレーム要素を完全に排除し「コミコミ料金」として訴求力を最大化
- **維持管理費を家族単位**：兄弟ケースでも公平、運営側の管理もシンプル
- **そろばん生の差額880円は特典期間で吸収**：実質的な値上げ感を防ぎ、信頼を毀損しない
- **新規の入会金割引（5,500円）**：少額の支払い行為を残すことで「無料に対する警戒感」を回避

---

## 2. 申込フォーム関連

### 2.1 Supabase テーブル定義

テーブル名：`eigo_reservations`

| カラム | 型 | 必須 | 備考 |
|---|---|---|---|
| `student_name` | text | ✓ | 生徒のお名前 |
| `grade` | text | ✓ | 学年（小学1〜6年） |
| `course` | text | ◯（在校生のみ） | そろばん／塾／ご兄弟 |
| `phone` | text | ✓ | 電話番号 |
| `email` | text | ◯（新規のみ必須） | メールアドレス |
| `preferred_days` | text[] | - | 体験希望曜日 |
| `interview_method` | text | ✓ | 面談の希望方法 |
| `source` | text | ✓ | `current` または `new` |

### 2.2 マイグレーションSQL

スキーマ拡張時に Supabase ダッシュボードで実行したSQL：

```sql
ALTER TABLE eigo_reservations
  ADD COLUMN IF NOT EXISTS source text,
  ADD COLUMN IF NOT EXISTS email  text,
  ADD COLUMN IF NOT EXISTS phone  text;

ALTER TABLE eigo_reservations
  ALTER COLUMN course DROP NOT NULL;

UPDATE eigo_reservations SET source = 'current' WHERE source IS NULL;
```

### 2.3 環境変数

`.env.local`（ローカル）と Vercel の Environment Variables の両方に設定：

| 変数名 | 公開可否 |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | 公開可（クライアントバンドルに含まれる） |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | 公開可（保護はSupabase RLS依存） |

⚠️ **`SUPABASE_SERVICE_ROLE_KEY` は絶対に Vercel に設定しない／コードに含めない**（管理者権限のため漏洩すると致命的）

---

## 3. デプロイ運用

### 3.1 Vercel基本設定

Settings → General → Framework Settings：
- **Framework Preset**：`Next.js`（必須・自動検出されない場合は手動設定）
- **Build Command**：オーバーライドなし（`next build`）
- **Output Directory**：オーバーライドなし
- **Root Directory**：`./`
- **Node.js Version**：24.x

⚠️ Framework Preset が `Other` のままだと404になるので、初回プロジェクト作成時は要確認。

### 3.2 自動デプロイの流れ

```
ローカルで編集
  ↓
git push origin main
  ↓
GitHub → Vercel が変更検知
  ↓
自動でビルド（next build）
  ↓
本番環境（eigo-start-lab.vercel.app）に反映（通常1〜2分）
```

### 3.3 デプロイ前の確認

```bash
npm run build       # ローカルでビルドが通ることを確認
```

エラーが出なければ push してOK。

---

## 4. 配信テンプレート

### 4.1 配信のベストプラクティス

| 時間帯 | 推奨度 | 理由 |
|---|---|---|
| 7:00〜9:00 | △ | 開封率は高いが熟読されない |
| 12:00〜13:00 | △ | 短文向き |
| 15:00〜17:00 | × | 多忙、避ける |
| **20:00〜21:00** | **◎** | 開封率・熟読率ともに最高 |
| 22:00以降 | △ | 通知オフが多い |

→ **20:00ジャストの配信予約**が黄金パターン。

### 4.2 配信テンプレート（フル版）

```
━━━━━━━━━━━━━━

【本日受付開始】
えいごスタートラボ｜先行予約

━━━━━━━━━━━━━━

お待たせしました！本日5月5日（こどもの日）より、新講座「えいごスタートラボ」の先行予約受付を開始します。

そろばん生・塾生、そしてそのご兄弟の皆様への、感謝を込めた特別な特典です。

▼ ご案内・お申し込みはこちら
https://eigo-start-lab.vercel.app/current

━━━━━━━━━━━━━━
■ 在校生限定 二大特典
━━━━━━━━━━━━━━

【特典①】 2ヶ月分授業料 無料
　（通常7,600円相当）

【特典②】 初回英検検定料 全額負担
　（お子様が初めて受験される英検の検定料を、当校が全額負担／お一人様1回限り）

※ご兄弟が受講される場合も対象です。

━━━━━━━━━━━━━━
■ 講座概要
━━━━━━━━━━━━━━

〇 開講：6月
〇 対象：小学生
〇 授業：週1回・60分（月・水・木・金 17:05〜18:05）
〇 場所：前原駅前校
〇 月額：3,800円（教材費込み・追加費用なし）

━━━━━━━━━━━━━━
■ 維持管理費について
━━━━━━━━━━━━━━

維持管理費は1家族につき2,200円となります（家族単位）。

・塾生のご家族：現行2,200円のまま（追加なし）
・そろばん生のご家族：現行1,320円から2,200円（差額880円のみ）
・ご兄弟が受講される場合も、家族単位で同じ扱いです

※先行予約特典の2ヶ月無料期間中は、これらすべてを含めて完全無料です。

━━━━━━━━━━━━━━
■ お知らせ：英検準会場として始動
━━━━━━━━━━━━━━

当教室は、日本英語検定協会の準会場として2026年秋以降、教室で英検試験の実施を開始します。

慣れた教室で、普段の先生のもと、初めての英検にも安心して臨んでいただけます。

━━━━━━━━━━━━━━

定員に限りがありますので、ご希望の方はお早めにご検討ください。

▼ 先行予約はこちら
https://eigo-start-lab.vercel.app/current

ご不明な点は、お気軽にお問い合わせください。

━━━━━━━━━━━━━━
```

### 4.3 配信テンプレート（短縮版・推奨）

LP に詳細が完備しているので、本文は要点のみ。約500文字。

```
━━━━━━━━━━━━━━

【本日受付開始】
えいごスタートラボ｜先行予約

━━━━━━━━━━━━━━

お待たせしました！本日5月5日（こどもの日）より、新講座「えいごスタートラボ」の先行予約受付を開始します。

そろばん生・塾生、そしてそのご兄弟の皆様への、感謝を込めた特別な特典をご用意しました。

▼ ご案内・お申し込みはこちら
https://eigo-start-lab.vercel.app/current

━━━━━━━━━━━━━━
■ 在校生限定 二大特典
━━━━━━━━━━━━━━

【特典①】 2ヶ月分授業料 無料（7,600円相当）
【特典②】 初回英検検定料 全額負担（お一人様1回限り）

※ご兄弟が受講される場合も対象です。

━━━━━━━━━━━━━━
■ 講座概要
━━━━━━━━━━━━━━

〇 開講：6月／対象：小学生
〇 授業：週1回・60分（月・水・木・金）
〇 月額：3,800円（教材費込み・追加費用なし）
〇 場所：前原駅前校
〇 当教室は英検準会場として2026年秋以降、教室で英検を実施予定

▼ 詳しい料金体系（維持管理費の取り扱い等）・先行予約はサイトをご覧ください

https://eigo-start-lab.vercel.app/current

定員に限りがありますので、ご希望の方はお早めにご検討ください。
ご不明な点は、お気軽にお問い合わせください。

━━━━━━━━━━━━━━
```

### 4.4 配信テンプレート（超短縮版）

LINEプッシュ通知向き。約140文字。

```
【本日受付開始】えいごスタートラボ

本日5月5日より先行予約受付を開始しました！

▼ 在校生限定 二大特典 ▼
①2ヶ月分授業料 無料（7,600円相当）
②初回英検検定料 全額負担

ご兄弟も対象です。詳細・お申し込みはこちら：
https://eigo-start-lab.vercel.app/current
```

### 4.5 タイトル候補（メール件名／LINE通知欄）

- 【本日受付開始】えいごスタートラボ｜在校生限定特典つき（推奨）
- 【先行予約スタート】小学生向け英語講座「えいごスタートラボ」
- 【お待たせしました】えいごスタートラボ｜本日5月5日より受付開始
- 【こどもの日特別配信】えいごスタートラボ｜先行予約スタート

---

## 5. 印刷物テンプレート

### 5.1 説明会用1枚シートの作成プロンプト

別Claude（または別のLLMセッション）に以下のプロンプトを渡すと、A4縦1枚の印刷用HTMLを生成可能。

```
# あなたの役割
小学生向け英語教室「えいごスタートラボ」の説明会で、保護者にお渡しする「A4・1枚もの紹介シート」のデザインとコピーを作成してください。印刷して手渡すことを前提とした、見やすく信頼感のあるシートに仕上げてください。

# 教室の基本情報
- 教室名：えいごスタートラボ
- 運営：伊都塾 / そろばん教室（同じ運営者の新規講座）
- 場所：前原駅前校（福岡県糸島市）
- 対象：小学1〜6年
- 授業：週1回・60分（月・水・木・金 17:05〜18:05）
- 開講：2026年6月

# 教室の強み（保護者に伝えたいこと）
1. 中学英語を小学生のうちに先取り → 中学入学後の最初のテストで自信が持てる
2. 英検対応カリキュラム（5級・4級・以上の級も）
3. 週1回・月謝3,800円で他の習い事と無理なく両立
4. 当教室が英検準会場として2026年秋以降、教室で英検試験を実施開始（移動・引率の負担なし、慣れた先生のもと受験）

# 解決する保護者の悩み
- 中学校に入った瞬間、英語でつまずく子が多い
- 教科書改訂で中学英語の難易度が大幅にアップ
- 小学校の英語と中学校の英語はまったく別物
→ 小学生のうちに「英語の貯金」を作ることの意義を伝える

# 料金（透明性を重視）

【新規生徒】
- 月額：6,000円（授業料3,800円 + 維持管理費2,200円）※教材費込み・追加費用なし
- 入会金：通常22,000円 → 特別5,500円（▲16,500円OFF）
- 初めての方限定：1ヶ月分の月謝（6,000円）が完全無料
- → 通常28,000円の初期費用が、特典適用で5,500円のみ（▲22,500円お得）

【在校生・ご兄弟（そろばん生・塾生のご家族）】
- 月額：3,800円（教材費込み）
- 入会金：なし
- 維持管理費：1家族につき2,200円（家族単位）
  - 塾生のご家族：現行2,200円のまま（追加なし）
  - そろばん生のご家族：現行1,320円→2,200円（差額880円のみ）
  - ご兄弟が受講する場合も、家族単位で同じ扱い
- 在校生限定二大特典：
  ① 2ヶ月分授業料 無料（7,600円相当）
  ② 初回英検検定料 全額負担（お一人様1回限り）
- 特典期間中（2ヶ月）は維持管理費差額も含めて完全無料

# お申し込みの流れ
1. 公式サイトのフォームから予約
2. 担当より日程連絡
3. 無料体験＆10分の簡単な面談
4. お子さまのご様子を見ながらスタート
（しつこい勧誘は一切行いません）

# 公式サイト
https://eigo-start-lab.vercel.app/
※QRコードを貼るスペースを設けてください（実際のQRコードは後でこちらで貼ります）

# 出力形式
- A4縦1枚（210mm × 297mm）に収まるように設計
- HTML + CSS（@page と @media print を使い、ブラウザの印刷機能でそのままA4に出力できる形に）
- 白背景、ブランドカラーはピンク（#D94F8A）をアクセントに
- フォント：Noto Sans JP（system fontでも可）
- 印刷余白：上下左右 10〜15mm

# 構成（推奨セクション）
1. ヘッダー：教室名 + キャッチコピー（例：「中学英語の貯金、今から始めませんか。」）
2. なぜいま英語？（保護者の不安を共感→解決の方向性）
3. えいごスタートラボの3つの特徴
4. 料金のご案内（新規・在校生で分けて、表またはカード形式で見やすく）
5. 英検準会場として始動（信頼の証明として、2026年秋以降と明記）
6. お申し込みの流れ（4ステップ）
7. フッター：公式サイトURL + QRコード用スペース + 連絡先

# コピー・トーンの指針
- 過度に営業的にならず、保護者目線の丁寧な語り口
- 「お子さま」「ご家族」など丁寧語を使用
- 数字（金額・授業時間・対象学年）はしっかり明示
- 漢字とひらがなのバランスは「読みやすさ重視」（小難しい言葉は避ける）
- 「他塾より安いから」ではなく「ここで得られる価値・体験」を伝える

# 完成イメージ
- 説明会後、保護者が持ち帰って配偶者と再検討する場面を想定
- 文字情報だけで判断材料がそろっていること
- 一目でセクションが分かる視覚的階層

それでは、上記の全条件を反映したA4・1枚もの紹介シートを、印刷しやすいHTMLコードとして出力してください。
```

---

## 6. 外部サイト連携（WordPress 塾サイト）

### 6.1 設置済みのピンクバナーHTML

塾サイトの `header.php` 内、既存の青バナー（`サイトが新しくなりました`）の直後、`<?php do_action( 'tcd_before_header', $options ); ?>` の直前に挿入：

```html
<div style="background: #D94F8A; text-align: center; padding: 25px 15px; box-shadow: 0 4px 15px rgba(217, 79, 138, 0.3);">
  <a href="https://eigo-start-lab.vercel.app/new" style="color: white; text-decoration: none; display: block;">
    <span style="font-size: 18px; font-weight: bold; display: block; margin-bottom: 10px; letter-spacing: 1px;">🐧 小学生向け英語クラス 開講予定</span>
    <span style="font-size: 14px; display: block; margin-bottom: 15px; opacity: 0.9;">えいごスタートラボ｜中学英語の貯金、今から。</span>
    <span style="background: white; color: #D94F8A; padding: 12px 35px; border-radius: 30px; font-size: 16px; font-weight: bold; display: inline-block; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">案内ページへ →</span>
  </a>
</div>
```

⚠️ リンク先は `/new`（外部生用LP）。理由：塾サイトを訪れる外部保護者に在校生限定特典を見せると離脱要因になるため。在校生のご家族が誤って到達した場合は `/new` ページ内の誘導リンクから `/current` に戻れるよう設計済み。

### 6.2 編集手順（WordPress管理画面から）

1. `https://yesjyuku.pico-tatenaga.com/wp-admin` にログイン
2. 左メニュー → 外観 → テーマファイルエディター
3. 右側ファイルリストから `header.php` を選択
4. `Ctrl+F` で `eigo-start-lab.vercel.app` を検索
5. 必要に応じてHTMLを編集
6. 「ファイルを更新」ボタンで保存
7. 塾サイトを開いて表示確認

### 6.3 ドメイン変更時の対応

カスタムドメイン取得後は、`href` のURLを置き換える：

```diff
- <a href="https://eigo-start-lab.vercel.app/new" ...>
+ <a href="https://◯◯.com/new" ...>
```

---

## 7. SEO・集客戦略

### 7.1 短期施策（最優先）

1. **カスタムドメイン取得**
   - `eigo-start-lab.com` / `eigo-startlab.jp` 等
   - お名前.com・ムームードメイン等で年1,000〜2,000円
   - Vercel Settings → Domains から接続
   - ⚠️ これ無しではSEO効果は限定的

2. **Google ビジネスプロフィール強化**（既存の塾リスティングを活用）
   - 副カテゴリーに「英語教室」「英会話教室」を追加
   - サービス欄に「えいごスタートラボ」を登録、LP URLをリンク
   - Google投稿で「6月開講」「先行予約」を発信
   - 教室・教材の写真を5〜10枚追加
   - ⚠️ 別の Google ビジネスプロフィールは作らない（同住所・同運営はGoogleポリシー違反）

3. **塾サイトからの被リンク**（実装済み）

### 7.2 技術SEO（カスタムドメイン取得後に実装推奨）

- JSON-LD 構造化データ（LocalBusiness / EducationalOrganization）
- sitemap.xml / robots.txt
- OG画像（SNSシェア用）
- メタデータに地域キーワード（「糸島」「前原」「小学生英語」等）
- canonical タグ

### 7.3 中長期施策

- コラム記事の追加（月1〜2本：「中学英語で困らないために小学生のうちにやっておくこと」等）
- 保護者の声・体験談の掲載
- Instagram / LINE オープンチャットでの発信
- Google レビュー獲得（在校生のご家族にお願い）

### 7.4 期待値の目安

- カスタムドメイン取得 → Google認識：2〜4週間
- 上位表示まで：通常 3〜6ヶ月
- 「糸島 英語教室」「前原 子ども英語」などのローカル中規模キーワードが現実的なターゲット
- 「英語教室」のようなビッグワードは大手の独壇場、避ける

---

## 8. アイコン・画像

### 8.1 ファイル構成

| ファイル | サイズ | 用途 |
|---|---|---|
| `public/eigo_star.png` | 2048×2048（透明背景） | 全アイコンのソース画像 |
| `app/icon.png` | 512×512 | モダンブラウザのタブ・SEO |
| `app/apple-icon.png` | 180×180 | iPhone/iPad ホーム画面追加時 |
| `app/favicon.ico` | 64×64 | 旧ブラウザ・社外クローラ向け |

### 8.2 アイコン再生成スクリプト（PowerShell）

ソース画像（`public/eigo_star.png`）を差し替えた場合、以下を PowerShell で実行すると全アイコンを一括再生成できる。

```powershell
Add-Type -AssemblyName System.Drawing
$src = [System.Drawing.Image]::FromFile("$PWD\public\eigo_star.png")

function Resize-Img($source, $size, $dest) {
    $bmp = New-Object System.Drawing.Bitmap $size, $size
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $g.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
    $g.Clear([System.Drawing.Color]::Transparent)
    $g.DrawImage($source, 0, 0, $size, $size)
    $bmp.Save($dest, [System.Drawing.Imaging.ImageFormat]::Png)
    $g.Dispose(); $bmp.Dispose()
}

Resize-Img $src 512 "$PWD\app\icon.png"
Resize-Img $src 180 "$PWD\app\apple-icon.png"

# favicon.ico
$bmp = New-Object System.Drawing.Bitmap 64, 64
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
$g.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
$g.Clear([System.Drawing.Color]::Transparent)
$g.DrawImage($src, 0, 0, 64, 64)
$hicon = $bmp.GetHicon()
$icon = [System.Drawing.Icon]::FromHandle($hicon)
$fs = New-Object System.IO.FileStream("$PWD\app\favicon.ico", [System.IO.FileMode]::Create)
$icon.Save($fs)
$fs.Close()
$icon.Dispose(); $g.Dispose(); $bmp.Dispose(); $src.Dispose()

Write-Output "Done"
```

実行後は `git add app/icon.png app/apple-icon.png app/favicon.ico` でステージしてコミット・プッシュ。

### 8.3 ブランドカラー

- メインピンク：`#D94F8A`
- 薄ピンク（背景）：`#FFF0F7`
- テキスト：`#333333`

### 8.4 不使用画像

以下は現在のLPでは使用していないが、将来の用途のため保管：

- `public/eigo_image.jpg`（黒線画版・初期版）
- `public/eigo_pink_image.png`（ピンク版・初期）
- `public/eigo_pink_big.png`（ピンク大判）
