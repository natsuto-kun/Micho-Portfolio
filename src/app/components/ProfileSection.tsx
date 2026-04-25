import { motion } from 'motion/react';
import { GridBackgroundSVG } from './GridBackground';
import { SectionHeader } from './SectionHeader';
import { FadeIn, StaggerGrid, StaggerItem, HoverCard } from './Animate';

const UB = { fontFamily: "'Ubuntu', sans-serif" } as const;
const EASE = [0.22, 1, 0.36, 1] as const;

const SKILLS = [
  { category: '開発', tags: ['TypeScript', 'React', 'Node.js', 'Astro', 'Python', 'PostgreSQL'] },
  { category: 'デザイン', tags: ['UI/UX', 'Figma', 'イラスト', 'コンセプトアート', 'タイポグラフィ'] },
  { category: '言語', tags: ['日本語', '英語', 'フランス語（基礎）'] },
  { category: 'ツール', tags: ['Git', 'Docker', 'Supabase', 'AWS', 'Vercel'] },
];

const TIMELINE = [
  {
    period: '2023年〜現在',
    role: 'フルスタック開発者・デザイナー',
    place: 'フリーランス / 独立',
    desc: 'Webアプリ・クリエイティブツール・ナラティブデザインを手がけています。システム開発とイラスト・TRPGシナリオ執筆を融合させた制作活動を続けています。',
  },
  {
    period: '2022〜2023年',
    role: 'フロントエンドエンジニア',
    place: 'テックスタートアップ（リモート）',
    desc: 'ReactベースのダッシュボードやコンポーネントライブラリをO開発。エンジニアリングチーム全体のDX改善とCI/CDパイプラインの保守を担当。',
  },
  {
    period: '2021〜2022年',
    role: 'Webデザイナー・開発者',
    place: 'クリエイティブエージェンシー',
    desc: '国内外のクリエイティブブランド向けにマーケティングサイトやインタラクティブな体験をデザイン・実装。',
  },
  {
    period: '2019〜2021年',
    role: '情報工学専攻',
    place: '大学',
    desc: 'ソフトウェア工学・アルゴリズム・データベース・ヒューマンコンピュータインタラクションを専攻。優秀な成績で卒業。',
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
            はじめまして、<strong style={{ fontWeight: 500 }}>Michotaku</strong> です。日本在住のWeb開発者・イラストレーター・ナラティブデザイナーです。Webサービスを作りながら、TRPG用シナリオも制作しています。コードとアートが交わる場所に魅力を感じ、テクノロジーと創造性を融合させた表現を探求しています。
          </p>
          <p className="text-[#0022ff] text-lg leading-relaxed mt-4 opacity-70" style={{ ...UB, fontWeight: 300 }}>
            世界中のフリーランス案件を受け付けています · クリエイティブなコラボレーションも歓迎。
          </p>
          <div className="flex gap-4 mt-6">
            {['Twitter / X', 'LitLink', 'GitHub'].map((link) => (
              <motion.a
                key={link}
                href="#"
                whileHover={{ backgroundColor: '#0022ff', color: '#fff' }}
                transition={{ duration: 0.18 }}
                className="border border-[#0022ff] px-4 py-1 text-sm text-[#0022ff]"
                style={UB}
              >
                {link}
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
