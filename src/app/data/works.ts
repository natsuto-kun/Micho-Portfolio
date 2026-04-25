import imgJellyfish from 'figma:asset/296c9b495bf7cab2ed5022992851fdba490cd5e7.png';

export interface Work {
  id: number;
  slug: string;
  thumbnail: string;
  tags: { label: string }[];
  title: string;
  titleJa?: string;
  category: 'Scenario' | 'Artwork' | 'Web';
  year: string;
  // Detail page fields
  heroImage: string;
  description: string;
  tools?: string[];
  // Scenario-specific
  tableInfo?: {
    system?: string;
    players?: string;
    duration?: string;
    type?: string;
    distribution?: string;
  };
  // Artwork-specific
  medium?: string;
  // Additional images for gallery
  gallery?: string[];
}

export const WORKS: Work[] = [
  {
    id: 1,
    slug: 'jellyfish-no-naki',
    thumbnail: imgJellyfish,
    heroImage: imgJellyfish,
    tags: [{ label: 'CoC' }, { label: '短時間' }],
    title: 'ジェリーフィッシュの_哭',
    titleJa: 'ジェリーフィッシュの_哭',
    category: 'Scenario',
    year: '2022',
    description:
      'クトゥルフ神話TRPGの短時間シナリオ。海沿いの小さな水族館を舞台に、ある夜突然発生した奇妙な事件を調査する物語です。クラゲの神秘的な美しさと不気味さを存分に活かしたシナリオです。プレイ時間は2〜3時間程度を想定しています。',
    tableInfo: {
      system: 'クトゥルフ神話TRPG（新版）',
      players: 'PL 2〜4人（KP1人）',
      duration: '2〜3時間',
      type: '探索・謎解き',
      distribution: 'Booth / 無料頒布',
    },
    tools: ['MS Word', 'Canva', 'Clip Studio Paint'],
    gallery: [
      'https://images.unsplash.com/photo-1677396105034-06ba797233bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqZWxseWZpc2glMjB1bmRlcndhdGVyJTIwYmx1ZXxlbnwxfHx8fDE3NzcwOTc4MDl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1591771245255-ab5ba6016648?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW50YXN5JTIwbmlnaHQlMjBvY2VhbiUyMGdsb3dpbmclMjBqZWxseWZpc2glMjBkYXJrfGVufDF8fHx8MTc3NzEwNzgzM3ww&ixlib=rb-4.1.0&q=80&w=1080',
    ],
  },
  {
    id: 2,
    slug: 'kimi-to-zirconia',
    thumbnail:
      'https://images.unsplash.com/photo-1711319551836-f7ca9764a898?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1lJTIwVFJQRyUyMGZhbnRhc3klMjBzY2VuZSUyMGlsbHVzdHJhdGlvbnxlbnwxfHx8fDE3NzcxMDQzMDd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    heroImage:
      'https://images.unsplash.com/photo-1711319551836-f7ca9764a898?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1lJTIwVFJQRyUyMGZhbnRhc3klMjBzY2VuZSUyMGlsbHVzdHJhdGlvbnxlbnwxfHx8fDE3NzcxMDQzMDd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: [{ label: 'TRPG' }, { label: '中編' }],
    title: '君とジルコニア',
    category: 'Scenario',
    year: '2023',
    description:
      'オリジナルシステムを使用した中編TRPG シナリオ。現代ファンタジーを舞台に、不思議な宝石「ジルコニア」を巡る群像劇です。複数の陣営が絡み合う複雑な人間関係と、プレイヤーの選択が結末を左右するマルチエンディング構造が特徴です。',
    tableInfo: {
      system: 'オリジナルシステム（汎用対応）',
      players: 'PL 3〜5人（KP1人）',
      duration: '4〜6時間',
      type: 'クライム・ヒューマンドラマ',
      distribution: 'Booth / 有料頒布 (500円)',
    },
    tools: ['MS Word', 'Adobe InDesign', 'Procreate'],
    gallery: [
      'https://images.unsplash.com/photo-1711319551836-f7ca9764a898?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1lJTIwVFJQRyUyMGZhbnRhc3klMjBzY2VuZSUyMGlsbHVzdHJhdGlvbnxlbnwxfHx8fDE3NzcxMDQzMDd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1746017217171-76b8683fbc65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW50YXN5JTIwZm9yZXN0JTIwbWFnaWMlMjBsaWdodCUyMGlsbHVzdHJhdGlvbnxlbnwxfHx8fDE3NzcxMDc4MzN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
  },
  {
    id: 3,
    slug: 'shin-en-no-chronos',
    thumbnail:
      'https://images.unsplash.com/photo-1677396105034-06ba797233bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqZWxseWZpc2glMjB1bmRlcndhdGVyJTIwYmx1ZXxlbnwxfHx8fDE3NzcwOTc4MDl8MA&ixlib=rb-4.1.0&q=80&w=400',
    heroImage:
      'https://images.unsplash.com/photo-1591771245255-ab5ba6016648?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW50YXN5JTIwbmlnaHQlMjBvY2VhbiUyMGdsb3dpbmclMjBqZWxseWZpc2glMjBkYXJrfGVufDF8fHx8MTc3NzEwNzgzM3ww&ixlib=rb-4.1.0&q=80&w=1080',
    tags: [{ label: 'CoC' }, { label: '長編' }],
    title: '深淵のクロノス',
    category: 'Scenario',
    year: '2023',
    description:
      'クトゥルフ神話TRPGの長編シナリオ。古い時計塔を巡る連作シナリオの第一章。時間と記憶をテーマに、現代と過去を行き来しながら真相へと迫る重厚な物語です。プレイヤーの選択によって探索ルートが変化するオープンワールド型の構成を採用しています。',
    tableInfo: {
      system: 'クトゥルフ神話TRPG（新版）',
      players: 'PL 2〜4人（KP1人）',
      duration: '6〜8時間（前後編）',
      type: '探索・ホラー・謎解き',
      distribution: 'Booth / 有料頒布 (800円)',
    },
    tools: ['MS Word', 'Canva', 'Clip Studio Paint'],
    gallery: [
      'https://images.unsplash.com/photo-1591771245255-ab5ba6016648?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW50YXN5JTIwbmlnaHQlMjBvY2VhbiUyMGdsb3dpbmclMjBqZWxseWZpc2glMjBkYXJrfGVufDF8fHx8MTc3NzEwNzgzM3ww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1677396105034-06ba797233bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqZWxseWZpc2glMjB1bmRlcndhdGVyJTIwYmx1ZXxlbnwxfHx8fDE3NzcwOTc4MDl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
  },
  {
    id: 4,
    slug: 'shiki-meguri-no-hyaku',
    thumbnail:
      'https://images.unsplash.com/photo-1653368653487-f55b96d90853?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmltZSUyMGNoYXJhY3RlciUyMGlsbHVzdHJhdGlvbiUyMGRpZ2l0YWwlMjBhcnR8ZW58MXx8fHwxNzc3MDk4ODA2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    heroImage:
      'https://images.unsplash.com/photo-1653368653487-f55b96d90853?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmltZSUyMGNoYXJhY3RlciUyMGlsbHVzdHJhdGlvbiUyMGRpZ2l0YWwlMjBhcnR8ZW58MXx8fHwxNzc3MDk4ODA2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: [{ label: 'イラスト' }, { label: 'オリジナル' }],
    title: '四季巡りの百',
    category: 'Artwork',
    year: '2023',
    medium: 'デジタルイラスト（Clip Studio Paint）',
    description:
      '春夏秋冬の四季をテーマにしたオリジナルキャラクターのイラストシリーズ。「百（もも）」というキャラクターが四季の情景の中に佇む、静謐でノスタルジックな作品群です。和の色彩と現代的なイラストタッチを組み合わせています。',
    tools: ['Clip Studio Paint', 'Procreate', 'Adobe Photoshop'],
    gallery: [
      'https://images.unsplash.com/photo-1653368653487-f55b96d90853?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmltZSUyMGNoYXJhY3RlciUyMGlsbHVzdHJhdGlvbiUyMGRpZ2l0YWwlMjBhcnR8ZW58MXx8fHwxNzc3MDk4ODA2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1746017217171-76b8683fbc65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW50YXN5JTIwZm9yZXN0JTIwbWFnaWMlMjBsaWdodCUyMGlsbHVzdHJhdGlvbnxlbnwxfHx8fDE3NzcxMDc4MzN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
  },
  {
    id: 5,
    slug: 'portfolio-site-v2',
    thumbnail:
      'https://images.unsplash.com/photo-1573867639040-6dd25fa5f597?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBVSSUyMHdpcmVmcmFtZSUyMGRlc2t0b3B8ZW58MXx8fHwxNzc3MTA0MzAxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    heroImage:
      'https://images.unsplash.com/photo-1573867639040-6dd25fa5f597?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBVSSUyMHdpcmVmcmFtZSUyMGRlc2t0b3B8ZW58MXx8fHwxNzc3MTA0MzAxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: [{ label: 'Web' }, { label: 'React' }],
    title: 'Portfolio Site v2',
    category: 'Web',
    year: '2024',
    description:
      'TypeScript + React で構築したポートフォリオサイト。コバルトブルーをアクセントカラーとしたミニマルなデザインシステムを採用。Canvas APIによる動的なネットワーク背景、React Routerによるページ遷移、GridBackgroundによるワイヤーフレーム質感が特徴です。',
    tools: ['React', 'TypeScript', 'Tailwind CSS', 'React Router', 'Vite'],
    gallery: [
      'https://images.unsplash.com/photo-1573867639040-6dd25fa5f597?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBVSSUyMHdpcmVmcmFtZSUyMGRlc2t0b3B8ZW58MXx8fHwxNzc3MTA0MzAxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1760548425425-e42e77fa38f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGUlMjBlZGl0b3IlMjBkYXJrJTIwc2NyZWVufGVufDF8fHx8MTc3NzEwNzgzOHww&ixlib=rb-4.1.0&q=80&w=1080',
    ],
  },
  {
    id: 6,
    slug: 'coc-fan-series',
    thumbnail:
      'https://images.unsplash.com/photo-1642356692954-3fbb84baf1a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhYmFzZSUyMGJhY2tlbmQlMjBjbG91ZCUyMGFyY2hpdGVjdHVyZSUyMGRpYWdyYW18ZW58MXx8fHwxNzc3MTA0MzA4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    heroImage:
      'https://images.unsplash.com/photo-1642356692954-3fbb84baf1a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhYmFzZSUyMGJhY2tlbmQlMjBjbG91ZCUyMGFyY2hpdGVjdHVyZSUyMGRpYWdyYW18ZW58MXx8fHwxNzc3MTA0MzA4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: [{ label: 'キャラクター' }, { label: 'シリーズ' }],
    title: 'CoC ファンアートシリーズ',
    category: 'Artwork',
    year: '2023',
    medium: 'デジタルイラスト（Procreate）',
    description:
      'クトゥルフ神話TRPGへのオマージュとして制作したファンアートシリーズ。各シナリオのキャラクターや怪異を、独自のタッチで描いています。暗い色調の中にコバルトブルーを差し色として使った、謎めいた雰囲気が特徴です。',
    tools: ['Procreate', 'Clip Studio Paint'],
    gallery: [
      'https://images.unsplash.com/photo-1642356692954-3fbb84baf1a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhYmFzZSUyMGJhY2tlbmQlMjBjbG91ZCUyMGFyY2hpdGVjdHVyZSUyMGRpYWdyYW18ZW58MXx8fHwxNzc3MTA0MzA4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1591771245255-ab5ba6016648?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW50YXN5JTIwbmlnaHQlMjBvY2VhbiUyMGdsb3dpbmclMjBqZWxseWZpc2glMjBkYXJrfGVufDF8fHx8MTc3NzEwNzgzM3ww&ixlib=rb-4.1.0&q=80&w=1080',
    ],
  },
];

export function getWorkById(id: string): Work | undefined {
  return WORKS.find((w) => w.id === Number(id) || w.slug === id);
}