import { Link } from 'react-router';
import { motion } from 'motion/react';
import { GridBackgroundSVG } from './GridBackground';
import { SectionHeader } from './SectionHeader';
import { StaggerGrid, StaggerItem, FadeIn } from './Animate';
import { BLOG_POSTS } from '../data/blog';

const UB = { fontFamily: "'MOBO', sans-serif" } as const;

/* ─── ブログ記事リストアイテム ───────────────────────────────────────────── */
function BlogPostItem({ id, date, title, tags, excerpt, thumbnail }: (typeof BLOG_POSTS)[number]) {
  return (
    <StaggerItem>
      <motion.div
        whileHover={{ x: 5 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
      >
        <Link
          to={`/blog/${id}`}
          className="group flex gap-6 py-8 border-b border-[#0022ff] border-opacity-20 hover:bg-[rgba(0,34,255,0.025)] transition-colors"
        >
          {/* サムネイル */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="flex-shrink-0 border border-[#0022ff] overflow-hidden"
            style={{ width: 96, height: 96 }}
          >
            <img
              src={thumbnail}
              alt={title}
              className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
            />
          </motion.div>

          {/* コンテンツ */}
          <div className="flex flex-col justify-center gap-2 flex-1 min-w-0">
            {/* 日付・タグ */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-[#0022ff] text-xs opacity-50 tabular-nums" style={{ ...UB, fontWeight: 300 }}>
                {date}
              </span>
              <div className="flex gap-2 flex-wrap">
                {tags.map((tag) => (
                  <span key={tag} className="bg-[#0022ff] text-white px-2 py-0.5 text-xs" style={UB}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* タイトル */}
            <p
              className="text-[#0022ff] text-lg leading-snug group-hover:underline"
              style={{ ...UB, fontWeight: 400 }}
            >
              {title}
            </p>

            {/* 概要 */}
            <p
              className="text-[#0022ff] text-sm leading-relaxed opacity-60 line-clamp-2"
              style={{ ...UB, fontWeight: 300 }}
            >
              {excerpt}
            </p>
          </div>

          {/* 詳細矢印 */}
          <div className="flex-shrink-0 self-center hidden md:flex items-center">
            <motion.span
              className="text-[#0022ff] text-xs tracking-widest flex items-center gap-2"
              style={UB}
              initial={{ opacity: 0, x: -8 }}
              whileHover={{ opacity: 1, x: 0 }}
            >
              詳細
              <svg width="36" height="10" viewBox="0 0 36 10" fill="none">
                <line x1="0" y1="5" x2="28" y2="5" stroke="#0022ff" strokeWidth="1.2" />
                <path d="M24 1L32 5L24 9" stroke="#0022ff" strokeWidth="1.2" fill="none" />
              </svg>
            </motion.span>
          </div>
        </Link>
      </motion.div>
    </StaggerItem>
  );
}

/* ─── Section ─────────────────────────────────────────────────────────────── */
export function BlogSection() {
  return (
    <section id="blog" className="relative w-full bg-white overflow-hidden py-24">
      <GridBackgroundSVG opacity={0.12} size={40} />

      <div className="relative z-10 max-w-6xl mx-auto px-8">
        <SectionHeader title="blog" />

        <StaggerGrid className="flex flex-col" stagger={0.08}>
          {BLOG_POSTS.map((post) => (
            <BlogPostItem key={post.id} {...post} />
          ))}
        </StaggerGrid>

        {/* すべての記事を見る */}
        <FadeIn direction="up" delay={0.1} className="mt-10 flex justify-end">
          <motion.div whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
            <Link
              to="/blog/1"
              className="border border-[#0022ff] text-[#0022ff] px-8 py-3 text-sm hover:bg-[#0022ff] hover:text-white transition-colors flex items-center gap-3"
              style={UB}
            >
              すべての記事を見る
              <svg width="36" height="10" viewBox="0 0 36 10" fill="none">
                <line x1="0" y1="5" x2="28" y2="5" stroke="currentColor" strokeWidth="1.2" />
                <path d="M24 1L32 5L24 9" stroke="currentColor" strokeWidth="1.2" fill="none" />
              </svg>
            </Link>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  );
}
