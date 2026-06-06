import { useState } from 'react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { GridBackgroundSVG } from './GridBackground';
import { SectionHeader } from './SectionHeader';
import { StaggerGrid, StaggerItem, FadeIn } from './Animate';
import { WORKS } from '../data/works';

const UB = { fontFamily: "'MOBO', sans-serif" } as const;

const CATEGORIES = [
  { label: 'すべて',       value: 'All' },
  { label: 'シナリオ',     value: 'Scenario' },
  { label: 'アートワーク', value: 'Artwork' },
  { label: 'Web',          value: 'Web' },
] as const;

type CategoryValue = (typeof CATEGORIES)[number]['value'];

/* ─── Work card ──────────────────────────────────────────────────────────── */
function WorkCard({ id, thumbnail, tags, title }: (typeof WORKS)[number]) {
  return (
    <motion.div
      whileHover={{ y: -8, boxShadow: '8px 16px 0 0 #0022ff' }}
      transition={{ duration: 0.22, ease: 'easeOut' }}
      style={{ boxShadow: '4px 8px 0 0 #0022ff' }}
      className="border border-[#0022ff] bg-white"
    >
      <Link to={`/works/${id}`} className="group flex flex-col h-full">
        {/* サムネイル */}
        <div className="relative overflow-hidden" style={{ aspectRatio: '1 / 1' }}>
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-107 transition-transform duration-500 ease-out"
            style={{ display: 'block' }}
          />
          <div className="absolute inset-0" style={{ boxShadow: 'inset 2px 4px 0 0 #0022ff' }} />
          <div className="absolute inset-0 bg-[#0022ff] opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
        </div>

        {/* タグ */}
        <div className="flex gap-2 mt-4 mx-4 flex-wrap">
          {tags.map((tag) => (
            <span key={tag.label} className="bg-[#0022ff] text-white px-3 py-1 text-xs" style={UB}>
              {tag.label}
            </span>
          ))}
        </div>

        {/* タイトル */}
        <p className="mx-4 mt-3 mb-2 text-[#0022ff] text-sm" style={{ ...UB, fontWeight: 300 }}>
          {title}
        </p>

        {/* 詳細リンク */}
        <div className="mt-auto mx-4 mb-4 flex items-center justify-end gap-2 overflow-hidden">
          <motion.span
            className="text-[#0022ff] text-sm tracking-widest flex items-center gap-3"
            style={UB}
            initial={{ opacity: 0, x: 12 }}
            whileHover={{ opacity: 1, x: 0 }}
          >
            詳細
            <svg width="50" height="10" viewBox="0 0 50 10" fill="none">
              <line x1="0" y1="5" x2="42" y2="5" stroke="#0022ff" strokeWidth="1.5" />
              <path d="M38 1L46 5L38 9" stroke="#0022ff" strokeWidth="1.5" fill="none" />
            </svg>
          </motion.span>
          <span className="opacity-0 text-sm tracking-widest" style={UB} aria-hidden>
            詳細 →
          </span>
        </div>
      </Link>
    </motion.div>
  );
}

/* ─── サブセクション区切り ───────────────────────────────────────────────── */
function SubSectionDivider({ label }: { label: string }) {
  return (
    <FadeIn direction="left" className="flex items-center gap-4 mb-8 mt-4">
      <div className="h-px bg-[#0022ff] opacity-20 w-6" />
      <span
        className="text-[#0022ff] text-xs tracking-widest uppercase border border-[#0022ff] px-3 py-1"
        style={{ ...UB, fontWeight: 500 }}
      >
        {label}
      </span>
      <div className="flex-1 h-px bg-[#0022ff] opacity-20" />
    </FadeIn>
  );
}

/* ─── Section ────────────────────────────────────────────────────────────── */
export function WorksSection() {
  const [active, setActive] = useState<CategoryValue>('All');

  const filtered = active === 'All' ? WORKS : WORKS.filter((w) => w.category === active);
  const scenarios = filtered.filter((w) => w.category === 'Scenario');
  const artworks  = filtered.filter((w) => w.category === 'Artwork');
  const web       = filtered.filter((w) => w.category === 'Web');

  return (
    <section id="works" className="relative w-full bg-white overflow-hidden py-24">
      <GridBackgroundSVG opacity={0.14} size={40} />

      <div className="relative z-10 max-w-6xl mx-auto px-8">
        <div id="scenario">
          <SectionHeader title="works" />
        </div>

        {/* カテゴリフィルター */}
        <FadeIn direction="up" delay={0.05} className="flex gap-3 mb-12 flex-wrap">
          {CATEGORIES.map((cat) => (
            <motion.button
              key={cat.value}
              onClick={() => setActive(cat.value)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              transition={{ duration: 0.16 }}
              className="border border-[#0022ff] px-5 py-1.5 text-sm transition-colors"
              style={{
                ...UB,
                background: active === cat.value ? '#0022ff' : 'white',
                color: active === cat.value ? 'white' : '#0022ff',
              }}
            >
              {cat.label}
            </motion.button>
          ))}
        </FadeIn>

        {/* シナリオ */}
        {scenarios.length > 0 && (
          <div className="mb-16">
            <SubSectionDivider label="シナリオ" />
            <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" stagger={0.09}>
              {scenarios.map((work) => (
                <StaggerItem key={work.id}>
                  <WorkCard {...work} />
                </StaggerItem>
              ))}
            </StaggerGrid>
          </div>
        )}

        {/* アートワーク */}
        {artworks.length > 0 && (
          <div className="mb-16">
            <SubSectionDivider label="アートワーク" />
            <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" stagger={0.09}>
              {artworks.map((work) => (
                <StaggerItem key={work.id}>
                  <WorkCard {...work} />
                </StaggerItem>
              ))}
            </StaggerGrid>
          </div>
        )}

        {/* Web */}
        {web.length > 0 && (
          <div className="mb-8">
            <SubSectionDivider label="Web" />
            <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" stagger={0.09}>
              {web.map((work) => (
                <StaggerItem key={work.id}>
                  <WorkCard {...work} />
                </StaggerItem>
              ))}
            </StaggerGrid>
          </div>
        )}
      </div>
    </section>
  );
}
