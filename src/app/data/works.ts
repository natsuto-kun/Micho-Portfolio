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
  // External link (Booth, Pixiv, site URL, etc.)
  link?: string;
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
    year: '2024',
    description:
      'クトゥルフ神話TRPGの短時間シナリオ。どこか潮風の香る場所で、不思議なお姉さんとのんびりお話をするシナリオです。トレーラーの写真撮影から画像加工、デザイン制作・配布用部屋素材制作まで全て自作です。',
    tableInfo: {
      system: 'クトゥルフ神話TRPG（旧・新版）',
      players: 'PL 1人（KP1人）',
      duration: '1時間~あなたが望むのならどこまでも',
      type: 'SAN値回復・RP重視',
      distribution: 'Booth / 無料頒布',
    },
    tools: ['Notion', 'Figma', 'Clip Studio Paint'],
    gallery: [
      'https://images.unsplash.com/photo-1677396105034-06ba797233bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqZWxseWZpc2glMjB1bmRlcndhdGVyJTIwYmx1ZXxlbnwxfHx8fDE3NzcwOTc4MDl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1591771245255-ab5ba6016648?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW50YXN5JTIwbmlnaHQlMjBvY2VhbiUyMGdsb3dpbmclMjBqZWxseWZpc2glMjBkYXJrfGVufDF8fHx8MTc3NzEwNzgzM3ww&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    link: 'https://zenrataku.booth.pm/items/6189077',
  },
  {
    id: 2,
    slug: 'kimi-to-zirconia',
    thumbnail:
      'https://booth.pximg.net/cfbbcbb5-7f34-449e-bcc0-a03395ec4855/i/5776786/05322517-7500-4e8b-b5d8-e7681e19133b_base_resized.jpg',
    heroImage:
      'https://booth.pximg.net/cfbbcbb5-7f34-449e-bcc0-a03395ec4855/i/5776786/05322517-7500-4e8b-b5d8-e7681e19133b_base_resized.jpg',
    tags: [{ label: 'CoC' }, { label: '短時間' }],
    title: '君とジルコニア',
    titleJa: '君とジルコニア',
    category: 'Scenario',
    year: '2024',
    description:
      'PCとKPCで同棲準備に行くデートシナリオです。PCはKPCと一緒に家具を見に行ったり、カフェでお茶をしたりしながら、好きな話をしてください。ただ、回る前にはKPの方からの地雷チェックなどを踏まえた上で回ってください。',
    tableInfo: {
      system: 'クトゥルフ神話TRPG（旧・新版）',
      players: 'PL1人（KPC1人）',
      duration: '2~3時間',
      type: 'RP重視・少し苦しいシナリオ',
      distribution: 'Booth / 無料頒布',
    },
    tools: ['Notion', 'Canva', 'Clip Studio Paint'],
    gallery: [
      'https://booth.pximg.net/cfbbcbb5-7f34-449e-bcc0-a03395ec4855/i/5776786/8c559e98-3ba6-46f4-933d-7b3cfd636717_base_resized.jpg',
      'https://booth.pximg.net/cfbbcbb5-7f34-449e-bcc0-a03395ec4855/i/5776786/72be043c-4eb6-43ef-874f-dbe0a46fba24_base_resized.jpg',
    ],
    link: 'https://zenrataku.booth.pm/items/5776786',
  },
  {
    id: 3,
    slug: 'shin-en-no-chronos',
    thumbnail:
      'https://pbs.twimg.com/media/HHi_VODbMAA6PLv?format=png&name=900x900',
    heroImage:
      'https://pbs.twimg.com/media/HHi_VODbMAA6PLv?format=png&name=900x900',
    tags: [{ label: 'CoC' }, { label: '短時間' }],
    title: 'キミトノイド',
    category: 'Scenario',
    year: '2025',
    description:
      'KPCと一緒に科学館に行くシナリオです。片ロス救済版もありますが、片方回るともう片方は回れないのでご注意を。',
    tableInfo: {
      system: 'クトゥルフ神話TRPG（旧・新版）',
      players: 'KPC+PL1人(改変で+1人まで可)',
      duration: '3時間程度',
      type: 'RP重視・謎解き要素あり',
      distribution: 'Booth / 無料頒布',
    },
    tools: ['Notion', 'Canva', 'Figma'],
    gallery: [
      'https://pbs.twimg.com/media/HHi_VODbMAA6PLv?format=png&name=900x900',
      'https://pbs.twimg.com/media/HHi_VN_bMAAiEFm?format=png&name=360x360',
    ],
    link: 'https://booth.pm/',
  },
  {
    id: 4,
    slug: 'post-senpan',
    thumbnail:
      'https://pbs.twimg.com/media/HKKFn-Ra0AAjBUx?format=jpg&name=large',
    heroImage:
      'https://pbs.twimg.com/media/HKKFn-Ra0AAjBUx?format=jpg&name=large',
    tags: [{ label: 'Web' }, { label: 'LP' }],
    title: '海外メディアに声を届けよう',
    category: 'Web',
    year: '2026',
    description:
      '昨今の日本の情勢を受けて制作したサイトです。海外メディアへのアクションのハードルを下げるためのものになります。',
    tableInfo: {
      type: '個人制作',
      distribution: 'LP',
    },
    tools: ['React', 'Figma'],
    link: 'https://post-senpan.vercel.app/',
  },
  {
    id: 5,
    slug: 'oo-fism',
    thumbnail:
      'https://i.pinimg.com/736x/15/5a/0f/155a0fc794a78f87d352e332f08fcce8.jpg',
    heroImage:
      'https://i.pinimg.com/736x/15/5a/0f/155a0fc794a78f87d352e332f08fcce8.jpg',
    tags: [{ label: 'Artwork' }, { label: 'Pinterest' }],
    title: 'Pinterestクリップシリーズ',
    category: 'Artwork',
    year: '2026',
    description:
      '習作用でしたが折角なのでという事でまとめた、Pinterestのクリップ集です。',
    tableInfo: {
      type: '個人制作',
      distribution: 'Pinterest',
    },
    tools: ['Figma'],
    link: 'https://pin.it/79HXB63tZ',
  },
  {
    id: 6,
    slug: 'coc-amusment-park',
    thumbnail:
      'https://pbs.twimg.com/media/HKKJQe9bcAAOSq1?format=jpg&name=large',
    heroImage:
      'https://pbs.twimg.com/media/HKKJQe9bcAAOSq1?format=jpg&name=large',
    tags: [{ label: 'Web' }, { label: 'CoC' }],
    title: '友人制作のCoCシナリオ特設サイト',
    category: 'Web',
    year: '2026',
    description:
      '本文が出来ていないらしいので正式リリースはまだですが、友人が制作しているCoCシナリオの特設サイトを制作中です。シナリオの世界観に合わせたデザインと、シナリオの魅力を引き出すレイアウトを心がけています。',
    tableInfo: {
      system: 'クトゥルフ神話TRPG（旧・新版）',
      players: '未定',
      duration: '未定',
      type: 'わちゃわちゃ系シナリオ',
      distribution: '未定',
    },
    tools: ['Figma', 'React', 'Tailwind CSS'],
    link: 'https://cocamusementpark-ep1d.vercel.app/',
  },
  {
    id: 7,
    slug: 'scenario-trailer',
    thumbnail:
      'https://pbs.twimg.com/media/GTCKagRbQAAC7yR?format=jpg&name=large',
    heroImage:
      'https://pbs.twimg.com/media/GTCKagRbQAAC7yR?format=jpg&name=large',
    tags: [{ label: 'Artwork' }, { label: 'CoC' }],
    title: '未完成シナリオのトレーラーデザイン集',
    category: 'Artwork',
    year: '2024~2025',
    description:
      '本文が完成しなかったり、完成しても公開されなかったりしたシナリオのトレーラーをデザインしてまとめたものです。要望など頂ければ執筆を続けるかもしれません。',
    tableInfo: {
      system: 'クトゥルフ神話TRPG（旧・新版）, エモクロア',
      distribution: 'Booth',
    },
    tools: ['Figma', 'Canva'],
    gallery: [
      'https://pbs.twimg.com/media/GTCKagRbQAAC7yR?format=jpg&name=large',
      'https://pbs.twimg.com/media/GRR33owbUAAl4_x?format=jpg&name=medium',
      'https://pbs.twimg.com/media/GRR36E9aUAAnY89?format=jpg&name=medium',
      'https://pbs.twimg.com/media/GQkFmtgakAU5efA?format=jpg&name=4096x4096',
      'https://pbs.twimg.com/media/GetIZqdbsAAYXYW?format=jpg&name=large',
    ],
  },
];

export function getWorkById(id: string): Work | undefined {
  return WORKS.find((w) => w.id === Number(id) || w.slug === id);
}
