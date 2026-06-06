import { motion } from 'motion/react';
import { NetworkCanvas } from './NetworkCanvas';

const NAV_LINKS = [
  { label: 'プロフィール', id: 'profile' },
  { label: 'シナリオ',     id: 'scenario' },
  { label: '作品',         id: 'works' },
  { label: 'ポートフォリオ', id: 'portfolio' },
  { label: 'ブログ',       id: 'blog' },
];

const UB = { fontFamily: "'MOBO', sans-serif" } as const;
const EASE = [0.22, 1, 0.36, 1] as const;

interface HeroSectionProps {
  onNavClick: (section: string) => void;
}

export function HeroSection({ onNavClick }: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen bg-white overflow-hidden flex flex-col"
    >
      <NetworkCanvas nodeCount={65} maxDist={200} />

      {/* トップバー */}
      <div className="relative z-10 flex items-start justify-between px-10 pt-8">
        <div />

        <nav className="flex flex-col items-end gap-2">
          {NAV_LINKS.map((link, i) => (
            <motion.button
              key={link.id}
              onClick={() => onNavClick(link.id)}
              initial={{ opacity: 0, x: 18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: EASE, delay: 0.1 + i * 0.07 }}
              whileHover={{ opacity: 0.45, x: -3 }}
              className="text-[#0022ff] text-base transition-none text-right leading-snug tracking-wide"
              style={{ ...UB, fontWeight: 400 }}
            >
              {link.label}
            </motion.button>
          ))}
        </nav>
      </div>

      {/* メインコンテンツ */}
      <div className="flex-1 flex flex-col items-start justify-center px-10 md:px-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.75, ease: EASE, delay: 0.05 }}
          className="border border-[#0022ff] bg-white px-8 py-6"
        >
          <h1
            className="text-[#0022ff] leading-none not-italic"
            style={{
              ...UB,
              fontWeight: 400,
              fontSize: 'clamp(3.5rem, 9vw, 7.5rem)',
            }}
          >
            Micho Portfolio
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 0.6, y: 0 }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.35 }}
          className="mt-5 text-[#0022ff] text-sm md:text-base max-w-xs"
          style={{ ...UB, fontWeight: 300, letterSpacing: '0.05em' }}
        >
          デザイナー · 開発者 · ストーリーテラー
        </motion.p>
      </div>

      {/* ボトムピルボタン */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: EASE, delay: 0.5 }}
        className="flex justify-center pb-14 relative z-10"
      >
        <div className="flex items-center bg-white rounded-full shadow-[0px_2px_14px_0px_rgba(0,0,0,0.25)] px-3 py-3 gap-2">
          <motion.button
            onClick={() => onNavClick('hero')}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.18 }}
            className="bg-[#0022ff] text-white rounded-full px-8 py-3 text-base"
            style={{ ...UB, fontWeight: 400 }}
          >
            ホーム
          </motion.button>
          <motion.button
            onClick={() => onNavClick('contact')}
            whileHover={{ opacity: 0.55 }}
            transition={{ duration: 0.18 }}
            className="text-[#0022ff] text-base px-7 py-3"
            style={{ ...UB, fontWeight: 400 }}
          >
            お問い合わせ
          </motion.button>
        </div>
      </motion.div>

      {/* スクロールキュー */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1, delay: 1.1 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-8 bg-[#0022ff]"
        />
        <span className="text-[#0022ff] text-[10px] tracking-widest" style={UB}>
          スクロール
        </span>
      </motion.div>
    </section>
  );
}
