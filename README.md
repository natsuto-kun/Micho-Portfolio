# Micho Portfolio

フロントエンドエンジニア・イラストレーター・デザイナー「Micho」のポートフォリオサイトです。
React + TypeScript + Vite で構築したシングルページアプリケーションです。

[ポートフォリオのURL](https://micho-portfolio.vercel.app/)

---

## 技術スタック

| カテゴリ | 使用技術 |
|---|---|
| フレームワーク | React 18 + TypeScript |
| ビルドツール | Vite 6 |
| ルーティング | React Router v7 |
| スタイリング | Tailwind CSS v4 |
| アニメーション | motion/react（Framer Motion） |
| UIコンポーネント | Radix UI（shadcn形式） |

---

## ページ構成

| パス | 内容 |
|---|---|
| `/` | トップページ（ヒーロー・プロフィール・作品・ポートフォリオ・ブログ・お問い合わせ） |
| `/profile` | プロフィール詳細（スキル・経歴） |
| `/works` | 作品一覧（カテゴリフィルター付き） |
| `/works/:id` | 作品詳細 |
| `/portfolio` | システムポートフォリオ（法人向け実績） |
| `/blog` | ブログ一覧 |
| `/blog/:id` | ブログ記事詳細 |

---

## コンテンツ管理

コンテンツはすべて TypeScript の静的配列で管理しています。CMS・DBは使用していません。
今後の展望としてmicroCMSの導入を検討中。

- **作品データ** → `src/app/data/works.ts`（`WORKS` 配列）
- **ブログデータ** → `src/app/data/blog.ts`（`BLOG_POSTS` 配列）
- **SNSリンク** → `src/app/data/social.ts`（`SOCIAL_LINKS` 配列）

---

## 開発環境の起動

```bash
# 依存関係のインストール
npm install

# 開発サーバー起動
npm run dev

# 本番ビルド
npm run build
```

---

## ディレクトリ構成

```
src/
├── app/
│   ├── components/        # セクションコンポーネント
│   │   ├── ui/            # Radix UI プリミティブ（shadcn）
│   │   └── figma/         # Figma連携ユーティリティ
│   ├── data/              # 静的コンテンツデータ
│   │   ├── works.ts       # 作品データ
│   │   ├── blog.ts        # ブログデータ
│   │   └── social.ts      # SNSリンク
│   ├── pages/             # ページコンポーネント
│   └── routes.tsx         # ルーティング定義
├── assets/                # 画像アセット
└── styles/                # グローバルスタイル・テーマ
```

---

## デザインシステム

- **ブランドカラー** `#0022ff`（コバルトブルー）
- **フォント** MOBO（見出し・本文）
- **スタイル** ミニマル・モノクローム・オフセットシャドウ
- **アニメーション** イージング `[0.22, 1, 0.36, 1]` を全体で統一

---

© 2026 Micho Portfolio. 無断転載禁止。
