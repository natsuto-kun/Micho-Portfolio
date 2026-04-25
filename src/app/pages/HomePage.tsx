import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { HeroSection } from '../components/HeroSection';
import { ProfileSection } from '../components/ProfileSection';
import { WorksSection } from '../components/WorksSection';
import { SystemPortfolioSection } from '../components/SystemPortfolioSection';
import { BlogSection } from '../components/BlogSection';

const NAV_LINKS = [
  { label: 'プロフィール', id: 'profile' },
  { label: 'シナリオ',     id: 'scenario' },
  { label: '作品',         id: 'works' },
  { label: 'ポートフォリオ', id: 'portfolio' },
  { label: 'ブログ',       id: 'blog' },
];

const UB = { fontFamily: "'Ubuntu', sans-serif" } as const;

/* ─── スティッキーナビ ────────────────────────────────────────────────────── */
function StickyNav({ onNavClick }: { onNavClick: (id: string) => void }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById('hero');
    if (!hero) return;
    const obs = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0 }
    );
    obs.observe(hero);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-3 border-b border-[rgba(0,34,255,0.15)] bg-white/95 backdrop-blur-sm transition-transform duration-300"
      style={{ transform: visible ? 'translateY(0)' : 'translateY(-100%)', pointerEvents: visible ? 'auto' : 'none' }}
    >
      <button
        onClick={() => onNavClick('hero')}
        className="text-[#0022ff] text-xl leading-none"
        style={{ ...UB, fontWeight: 400 }}
      >
        Michotaku
      </button>

      <div className="hidden md:flex items-center gap-7">
        {NAV_LINKS.map((link) => (
          <button
            key={link.id}
            onClick={() => onNavClick(link.id)}
            className="text-[#0022ff] text-sm hover:opacity-50 transition-opacity"
            style={UB}
          >
            {link.label}
          </button>
        ))}
      </div>

      <div className="flex items-center bg-white rounded-full shadow-[0px_1px_8px_0px_rgba(0,0,0,0.18)] px-2 py-1.5 gap-1">
        <button
          onClick={() => onNavClick('hero')}
          className="bg-[#0022ff] text-white rounded-full px-5 py-1.5 text-sm"
          style={UB}
        >
          ホーム
        </button>
        <button
          onClick={() => onNavClick('contact')}
          className="text-[#0022ff] text-sm px-5 py-1.5"
          style={UB}
        >
          お問い合わせ
        </button>
      </div>
    </div>
  );
}

/* ─── フッター ────────────────────────────────────────────────────────────── */
function Footer() {
  return (
    <footer id="contact" className="relative bg-[#0022ff] py-20 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage:
            'linear-gradient(to right,rgba(255,255,255,0.4) 1px,transparent 1px),linear-gradient(to bottom,rgba(255,255,255,0.4) 1px,transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
      <div className="relative z-10 max-w-4xl mx-auto px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="text-white leading-none mb-4"
          style={{ ...UB, fontWeight: 400, fontSize: 'clamp(2rem, 5vw, 4rem)' }}
        >
          お問い合わせ
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="text-white/70 text-base mb-8"
          style={{ ...UB, fontWeight: 300 }}
        >
          お気軽にどうぞ。コラボや依頼もお待ちしています。
        </motion.p>
        <motion.a
          href="mailto:contact@michotaku.dev"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
          whileHover={{ backgroundColor: '#fff', color: '#0022ff', scale: 1.03 }}
          className="inline-block border border-white text-white px-10 py-4 text-base transition-none"
          style={UB}
        >
          contact@michotaku.dev
        </motion.a>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center gap-6 mt-10"
        >
          {['Twitter / X', 'LitLink', 'GitHub', 'Pixiv'].map((s) => (
            <motion.a
              key={s}
              href="#"
              whileHover={{ opacity: 1, y: -2 }}
              transition={{ duration: 0.15 }}
              className="text-white/50 text-sm"
              style={{ ...UB, fontWeight: 300 }}
            >
              {s}
            </motion.a>
          ))}
        </motion.div>
        <p className="text-white/30 text-xs mt-16" style={{ ...UB, fontWeight: 300 }}>
          © 2024 Michotaku. 無断転載禁止。
        </p>
      </div>
    </footer>
  );
}

/* ─── ページ ──────────────────────────────────────────────────────────────── */
export default function HomePage() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white" style={{ scrollBehavior: 'smooth' }}>
      <StickyNav onNavClick={scrollTo} />
      <HeroSection onNavClick={scrollTo} />
      <ProfileSection />
      <WorksSection />
      <SystemPortfolioSection />
      <BlogSection />
      <Footer />
    </div>
  );
}
