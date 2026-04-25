export type BlogBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; level: 2 | 3; text: string }
  | { type: 'code'; lang: string; code: string }
  | { type: 'image'; src: string; alt?: string; caption?: string }
  | { type: 'list'; items: string[] }
  | { type: 'divider' };

export interface BlogPost {
  id: number;
  slug: string;
  date: string;
  title: string;
  tags: string[];
  excerpt: string;
  thumbnail: string;
  heroImage: string;
  content: BlogBlock[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    slug: 'blog-hajimemashita',
    date: '2023-03-27',
    title: 'ブログはじめました🎉',
    tags: ['日常'],
    excerpt: 'Twitterとかの卓報告とかシナリオ進捗とか投げるアカウントの諸々はここに投げます。',
    thumbnail:
      'https://images.unsplash.com/photo-1653368653487-f55b96d90853?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmltZSUyMGNoYXJhY3RlciUyMGlsbHVzdHJhdGlvbiUyMGRpZ2l0YWwlMjBhcnR8ZW58MXx8fHwxNzc3MDk4ODA2fDA&ixlib=rb-4.1.0&q=80&w=400',
    heroImage:
      'https://images.unsplash.com/photo-1653368653487-f55b96d90853?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmltZSUyMGNoYXJhY3RlciUyMGlsbHVzdHJhdGlvbiUyMGRpZ2l0YWwlMjBhcnR8ZW58MXx8fHwxNzc3MDk4ODA2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    content: [
      {
        type: 'paragraph',
        text: 'ブログを始めました。以前からTwitter（現 X）に雑多に投げていたTRPG卓の報告や、シナリオの制作進捗、技術メモなどをここにまとめていこうと思います。',
      },
      {
        type: 'heading',
        level: 2,
        text: 'なぜブログを始めたか',
      },
      {
        type: 'paragraph',
        text: 'Twitterだと流れてしまう情報も、ブログなら後から検索・参照できます。特にシナリオの頒布情報やプレイレポートは後からまとめて読み返したいことが多いので、こうした場所を作ることにしました。',
      },
      {
        type: 'paragraph',
        text: 'また、技術系の記事（フロントエンド開発や環境構築など）も書いていく予定です。自分自身の備忘録として、そして同じ問題で困っている誰かの役に立てれば嬉しいです。',
      },
      {
        type: 'heading',
        level: 2,
        text: 'これから書くこと',
      },
      {
        type: 'list',
        items: [
          'TRPG（CoC・その他）の卓報告・プレイレポート',
          'シナリオ制作の進捗・アップデート',
          '開発メモ（React・TypeScript・Astro など）',
          '日常のこと、気になったもの',
          'イラスト・アートワークの制作日記',
        ],
      },
      {
        type: 'paragraph',
        text: 'ゆるゆると更新していければと思います。よろしくお願いします。',
      },
    ],
  },
  {
    id: 2,
    slug: 'astro-sawatte-mita',
    date: '2023-03-28',
    title: 'Astro触ってみた',
    tags: ['開発', 'Astro'],
    excerpt: 'ポートフォリオサイトを作るにあたってAstroを試してみました。SSGで快適、コンポーネントも書きやすい。',
    thumbnail:
      'https://images.unsplash.com/photo-1695088560164-84c9c42bbadd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc3RybyUyMHNwYWNlJTIwdGVjaG5vbG9neSUyMGJsb2clMjB0ZWNofGVufDF8fHx8MTc3NzEwNDMwOHww&ixlib=rb-4.1.0&q=80&w=400',
    heroImage:
      'https://images.unsplash.com/photo-1695088560164-84c9c42bbadd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc3RybyUyMHNwYWNlJTIwdGVjaG5vbG9neSUyMGJsb2clMjB0ZWNofGVufDF8fHx8MTc3NzEwNDMwOHww&ixlib=rb-4.1.0&q=80&w=1080',
    content: [
      {
        type: 'paragraph',
        text: '新しいポートフォリオサイトを作るにあたって、Astro を試してみました。以前は Next.js を使っていましたが、ブログ部分が多いサイトなら Astro の方がシンプルに書けるのでは、という動機です。',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Astro とは',
      },
      {
        type: 'paragraph',
        text: 'Astro は「コンテンツ重視のサイト」向けに設計された静的サイトジェネレーター（SSG）です。JavaScript を必要な箇所だけ送る「アイランドアーキテクチャ」が特徴で、デフォルトで非常に軽量なHTMLを出力します。',
      },
      {
        type: 'heading',
        level: 2,
        text: 'セットアップ',
      },
      {
        type: 'code',
        lang: 'bash',
        code: `npm create astro@latest
# テンプレートを選択して...
cd my-portfolio
npm install
npm run dev`,
      },
      {
        type: 'paragraph',
        text: 'セットアップは非常に簡単で、数分でローカル環境が立ち上がります。`.astro` ファイルは JSX ライクな構文で、React や Vue のコンポーネントも混在させることができます。',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Markdown との親和性',
      },
      {
        type: 'paragraph',
        text: 'ブログ記事をMarkdownで管理したい場合、Astro のコンテンツコレクション機能が便利です。`src/content/` ディレクトリにMarkdownファイルを置くだけで、型安全なAPIでコンテンツを取得できます。',
      },
      {
        type: 'code',
        lang: 'typescript',
        code: `import { getCollection } from 'astro:content';

const posts = await getCollection('blog');
// 型安全に記事一覧を取得できる`,
      },
      {
        type: 'heading',
        level: 2,
        text: 'まとめ',
      },
      {
        type: 'paragraph',
        text: 'ブログ+ポートフォリオという構成には Astro がよくフィットすると感じました。React が不要な部分は純粋なHTMLとして出力され、パフォーマンスが向上します。しばらく使い続けて、知見がたまったらまた記事にします。',
      },
    ],
  },
  {
    id: 3,
    slug: 'ducky-one2-mini-mac',
    date: '2023-05-08',
    title: 'Ducky One 2 miniをmacで使いたい人の為の記事',
    tags: ['キーボード', 'Ducky'],
    excerpt: 'Ducky One 2 miniを購入してmacで使うためにやった設定をまとめました。DIPスイッチからremapまで一通り解説します。',
    thumbnail:
      'https://images.unsplash.com/photo-1569693799105-4eb645d89aea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBqYXZhc2NyaXB0JTIwcHJvZ3JhbW1pbmclMjBsYXB0b3B8ZW58MXx8fHwxNzc3MTA0MzA0fDA&ixlib=rb-4.1.0&q=80&w=400',
    heroImage:
      'https://images.unsplash.com/photo-1613844538755-86ffc7378cf7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWNoYW5pY2FsJTIwa2V5Ym9hcmQlMjBkZXNrJTIwc2V0dXAlMjBtaW5pbWFsfGVufDF8fHx8MTc3NzEwNzgzOHww&ixlib=rb-4.1.0&q=80&w=1080',
    content: [
      {
        type: 'paragraph',
        text: 'Ducky One 2 mini（Cherry MX Red）を購入しました。60% キーボードなので US 配列かつキー数が少なく、Mac で使うにはいくつか設定が必要です。同じ状況で困っている方向けにまとめます。',
      },
      {
        type: 'heading',
        level: 2,
        text: 'DIPスイッチの設定',
      },
      {
        type: 'paragraph',
        text: 'Ducky One 2 mini の裏面には DIP スイッチが 4 つあります。Mac で使うために SW1 を ON にして CapsLock を Left Control に変更するのが最初のステップです。',
      },
      {
        type: 'list',
        items: [
          'SW1: ON → CapsLock を Left Ctrl に変更',
          'SW2: OFF のまま（デフォルト）',
          'SW3: OFF のまま（デフォルト）',
          'SW4: OFF のまま（デフォルト）',
        ],
      },
      {
        type: 'heading',
        level: 2,
        text: 'Command / Option キーの入れ替え',
      },
      {
        type: 'paragraph',
        text: 'US 配列の Windows キーボードを Mac に繋ぐと、Alt キーが Option、Win キーが Command になりますが、物理的な位置が Mac のキーボードと逆になります。システム環境設定 → キーボード → 修飾キー で入れ替えましょう。',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Karabiner-Elements でのリマップ',
      },
      {
        type: 'paragraph',
        text: '更に細かいリマップには Karabiner-Elements が便利です。例えば右 Command を Fn として使ったり、Fn + hjkl を矢印キーにしたりできます。',
      },
      {
        type: 'code',
        lang: 'json',
        code: `{
  "from": { "key_code": "right_command" },
  "to": [{ "key_code": "fn" }]
}`,
      },
      {
        type: 'heading',
        level: 2,
        text: 'まとめ',
      },
      {
        type: 'paragraph',
        text: '設定さえ済んでしまえば非常に快適なキーボードです。60% の小ささでデスクが広くなりますし、Cherry MX Red の軽いタッチは長時間の作業にも疲れにくいです。おすすめです。',
      },
    ],
  },
  {
    id: 4,
    slug: 'nodejs-socketio-realtime-chat',
    date: '2023-09-14',
    title: 'Node.js + Socket.io でリアルタイムチャット実装',
    tags: ['開発', 'Node.js'],
    excerpt: 'WebSocketを使ってリアルタイムチャットを実装したログです。TRPG卓用のサイドツール開発の一部として作りました。',
    thumbnail:
      'https://images.unsplash.com/photo-1775519520494-d12d91797a01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXJ2ZXIlMjBpbmZyYXN0cnVjdHVyZSUyMG5ldHdvcmslMjB0ZWNofGVufDF8fHx8MTc3NzEwNDMwMXww&ixlib=rb-4.1.0&q=80&w=400',
    heroImage:
      'https://images.unsplash.com/photo-1760548425425-e42e77fa38f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGUlMjBlZGl0b3IlMjBkYXJrJTIwc2NyZWVufGVufDF8fHx8MTc3NzEwNzgzOHww&ixlib=rb-4.1.0&q=80&w=1080',
    content: [
      {
        type: 'paragraph',
        text: 'TRPG の卓（セッション）を補助するサイドツールを開発しています。その中で「GM と PL がリアルタイムでメモを共有できる」機能が欲しくなり、Node.js + Socket.io でリアルタイムチャットを実装しました。',
      },
      {
        type: 'heading',
        level: 2,
        text: '構成',
      },
      {
        type: 'list',
        items: [
          'Server: Node.js + Express + Socket.io',
          'Client: React + socket.io-client',
          'Deploy: Railway（バックエンド）+ Vercel（フロントエンド）',
        ],
      },
      {
        type: 'heading',
        level: 2,
        text: 'サーバー側実装',
      },
      {
        type: 'code',
        lang: 'typescript',
        code: `import { Server } from 'socket.io';
import express from 'express';
import http from 'http';

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: process.env.CLIENT_URL }
});

io.on('connection', (socket) => {
  socket.on('join-room', (roomId: string) => {
    socket.join(roomId);
  });

  socket.on('send-message', ({ roomId, message }) => {
    io.to(roomId).emit('receive-message', message);
  });
});`,
      },
      {
        type: 'heading',
        level: 2,
        text: 'クライアント側実装',
      },
      {
        type: 'code',
        lang: 'typescript',
        code: `import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const socket = io(import.meta.env.VITE_SERVER_URL);

function Chat({ roomId }: { roomId: string }) {
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    socket.emit('join-room', roomId);
    socket.on('receive-message', (msg) => {
      setMessages(prev => [...prev, msg]);
    });
    return () => { socket.off('receive-message'); };
  }, [roomId]);
  // ...
}`,
      },
      {
        type: 'heading',
        level: 2,
        text: 'まとめ',
      },
      {
        type: 'paragraph',
        text: 'Socket.io を使うとリアルタイム通信の実装が驚くほど簡単でした。TRPG ツールとしては、メモ共有だけでなく、BGM 同期や秘密情報の受け渡しなど色々な応用が考えられます。引き続き機能を追加していく予定です。',
      },
    ],
  },
  {
    id: 5,
    slug: 'typescript-react-portfolio',
    date: '2024-01-20',
    title: 'TypeScript + React でポートフォリオを作り直す',
    tags: ['TypeScript', 'React', '開発'],
    excerpt: 'ポートフォリオサイトをTypeScriptとReactで全面リニューアルしました。設計思想とコンポーネント構成について書いています。',
    thumbnail:
      'https://images.unsplash.com/photo-1573867639040-6dd25fa5f597?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBVSSUyMHdpcmVmcmFtZSUyMGRlc2t0b3B8ZW58MXx8fHwxNzc3MTA0MzAxfDA&ixlib=rb-4.1.0&q=80&w=400',
    heroImage:
      'https://images.unsplash.com/photo-1573867639040-6dd25fa5f597?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBVSSUyMHdpcmVmcmFtZSUyMGRlc2t0b3B8ZW58MXx8fHwxNzc3MTA0MzAxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    content: [
      {
        type: 'paragraph',
        text: 'Astro で作っていたポートフォリオを、TypeScript + React で全面的に作り直しました。動的なインタラクションが増えてきたため、React の方が管理しやすいと判断したためです。',
      },
      {
        type: 'heading',
        level: 2,
        text: 'デザインシステム',
      },
      {
        type: 'paragraph',
        text: 'デザインは「コバルトブルー × ホワイト」のミニマルなシステムで統一しました。カードにはオフセットシャドウ、セクションヘッダーには矢印タブ型のラベルを使用しています。フォントは Ubuntu を採用。',
      },
      {
        type: 'heading',
        level: 2,
        text: 'コンポーネント設計',
      },
      {
        type: 'list',
        items: [
          'NetworkCanvas — Canvas APIでアニメーションする接続線ネットワーク',
          'SectionHeader — 矢印タブ型のセクションラベル',
          'WorkCard — 作品カード（サムネイル・タグ・タイトル・MORE矢印）',
          'GridBackground — ワイヤーフレームグリッドのSVG背景',
        ],
      },
      {
        type: 'heading',
        level: 2,
        text: 'ルーティング',
      },
      {
        type: 'code',
        lang: 'typescript',
        code: `import { createBrowserRouter, RouterProvider } from 'react-router';

const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: HomePage },
      { path: 'blog/:id', Component: BlogDetailPage },
      { path: 'works/:id', Component: WorkDetailPage },
    ],
  },
]);`,
      },
      {
        type: 'paragraph',
        text: 'React Router の Data Mode を使い、ブログとアートワークそれぞれの詳細ページへのナビゲーションを実装しました。データは TypeScript のオブジェクトとして管理しています。',
      },
      {
        type: 'heading',
        level: 2,
        text: 'まとめ',
      },
      {
        type: 'paragraph',
        text: '型安全なデータ管理と、コンポーネントの分離により、メンテナンスがしやすいポートフォリオになりました。今後は CMS や Supabase と連携して、記事をデータベースから動的に取得することも検討しています。',
      },
    ],
  },
];

export function getBlogPostById(id: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.id === Number(id) || p.slug === id);
}
