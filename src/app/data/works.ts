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
  },
];

export function getWorkById(id: string): Work | undefined {
  return WORKS.find((w) => w.id === Number(id) || w.slug === id);
}
