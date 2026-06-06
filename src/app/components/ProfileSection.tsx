import { motion } from 'motion/react';
import { GridBackgroundSVG } from './GridBackground';
import { SectionHeader } from './SectionHeader';
import { FadeIn, StaggerGrid, StaggerItem, HoverCard } from './Animate';
import { SOCIAL_LINKS } from '../data/social';

const UB = { fontFamily: "'MOBO', sans-serif" } as const;
const EASE = [0.22, 1, 0.36, 1] as const;

const SKILLS = [
  { category: '開発', tags: ['TypeScript', 'React', 'Node.js', 'Next.js', 'Vue.js', 'Nuxt.js', 'Python', 'Liquid'] },
  { category: 'デザイン', tags: ['UI/UX', 'Figma', 'イラスト', 'コンセプトアート', 'タイポグラフィ', 'バナー作成', 'LPデザイン'] },
  { category: '言語', tags: ['日本語', '英語(基礎)'] },
  { category: 'ツール', tags: ['Git', 'Docker', 'Shopify', 'FutureShop', 'Supabase', 'AWS', 'GCP', '各種生成AI'] },
];

const TIMELINE = [
  {
    period: '2024年〜現在',
    role: 'フロントエンドエンジニア',
    place: '企業所属',
    desc: 'Webサービス開発だけでなく、社内ツールの開発・運用や業務改善・自動化も担当。また、ShopifyやFutureShopを活用したECサイトの構築・運用が最近の主な業務です。',
  },
  {
    period: '2019〜2023年',
    role: '情報工学専攻',
    place: '工業高等専門学校',
    desc: '学科では情報工学・電気工学を学び、独学と研究ではUIUXデザインやフロントエンド開発を中心に学びました。',
  },
];

export function ProfileSection() {
  return (
    <section id="profile" className="relative w-full bg-white overflow-hidden py-24">
      <GridBackgroundSVG opacity={0.12} size={40} />

      <div className="relative z-10 max-w-6xl mx-auto px-8">
        <SectionHeader title="profile" />

        {/* 自己紹介 */}
        <FadeIn direction="left" className="mb-16 border-l-4 border-[#0022ff] pl-8 max-w-3xl">
          <p className="text-[#0022ff] text-lg leading-relaxed" style={{ ...UB, fontWeight: 300 }}>
            はじめまして、<strong style={{ fontWeight: 500 }}>Micho</strong> です。日本在住のフロントエンドエンジニア・イラストレーター・デザイナーです。普段は業務でフロントエンドエンジニアをしながら、TRPG用シナリオも制作しています。<br />Webサービス・ツールの開発とクリエイティブ制作、EC開発・運用、ナレーションや製品紹介のプレゼンまで幅広く対応しております。
            <br />最近は生成AIのプロンプト改善や業務改善・自動化に力を入れています。
          </p>
          <p className="text-[#0022ff] text-lg leading-relaxed mt-4 opacity-70" style={{ ...UB, fontWeight: 300 }}>
            フリーランス案件を受け付けています · クリエイティブなコラボレーションも大歓迎です！
          </p>
          <div className="flex gap-4 mt-6">
            {SOCIAL_LINKS.filter((s) => s.label !== 'Pixiv').map((link) => (
              <motion.a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ backgroundColor: '#0022ff', color: '#fff' }}
                transition={{ duration: 0.18 }}
                className="border border-[#0022ff] px-4 py-1 text-sm text-[#0022ff]"
                style={UB}
              >
                {link.label}
              </motion.a>
            ))}
          </div>
        </FadeIn>

        {/* スキル */}
        <FadeIn direction="none" delay={0.05} className="mb-16">
          <p
            className="text-[#0022ff] text-sm tracking-widest uppercase mb-8 opacity-60"
            style={{ ...UB, fontWeight: 500 }}
          >
            スキル・専門領域
          </p>
          <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 gap-6" stagger={0.1}>
            {SKILLS.map((group) => (
              <StaggerItem key={group.category}>
                <HoverCard
                  shadowBase="3px 6px 0 0 #0022ff"
                  shadowHover="6px 12px 0 0 #0022ff"
                  liftY={-4}
                  className="border border-[#0022ff] p-6 bg-white h-full"
                >
                  <p
                    className="text-[#0022ff] mb-4 text-xs tracking-widest uppercase"
                    style={{ ...UB, fontWeight: 500 }}
                  >
                    {group.category}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {group.tags.map((tag) => (
                      <motion.span
                        key={tag}
                        whileHover={{ scale: 1.07 }}
                        transition={{ duration: 0.15 }}
                        className="bg-[#0022ff] text-white px-3 py-1 text-sm cursor-default"
                        style={{ ...UB, fontWeight: 400 }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </HoverCard>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </FadeIn>

        {/* 経歴 */}
        <FadeIn direction="none" delay={0.05}>
          <p
            className="text-[#0022ff] text-sm tracking-widest uppercase mb-8 opacity-60"
            style={{ ...UB, fontWeight: 500 }}
          >
            経歴
          </p>
          <div className="relative">
            <div className="absolute left-[148px] top-0 bottom-0 w-px bg-[#0022ff] opacity-25" />

            <div className="flex flex-col">
              {TIMELINE.map((item, i) => (
                <motion.div
                  key={i}
                  className="flex relative"
                  initial={{ opacity: 0, x: -18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.55, ease: EASE, delay: i * 0.1 }}
                >
                  <div className="w-[148px] flex-shrink-0 pt-7 pr-6 text-right">
                    <span className="text-[#0022ff] text-xs leading-snug block" style={{ ...UB, fontWeight: 300 }}>
                      {item.period}
                    </span>
                  </div>

                  <div className="flex-shrink-0 flex items-start pt-8">
                    <motion.div
                      whileInView={{ scale: [0, 1.3, 1] }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, ease: EASE, delay: i * 0.1 + 0.2 }}
                      className="w-3 h-3 rounded-full bg-[#0022ff] border-2 border-white ring-1 ring-[#0022ff] relative z-10 -ml-[6px]"
                    />
                  </div>

                  <div className="pl-8 pb-10 pt-6 flex-1">
                    <p className="text-[#0022ff] text-base mb-1" style={{ ...UB, fontWeight: 500 }}>
                      {item.role}
                    </p>
                    <p className="text-[#0022ff] text-sm mb-2 opacity-60" style={{ ...UB, fontWeight: 300 }}>
                      {item.place}
                    </p>
                    <p className="text-[#0022ff] text-sm leading-relaxed opacity-75 max-w-xl" style={{ ...UB, fontWeight: 300 }}>
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
