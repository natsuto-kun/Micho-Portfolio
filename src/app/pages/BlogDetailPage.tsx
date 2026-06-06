import { useParams, Link, useNavigate } from 'react-router';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { BLOG_POSTS, getBlogPostById, type BlogBlock } from '../data/blog';
import { GridBackgroundSVG } from '../components/GridBackground';

const UB = { fontFamily: "'MOBO', sans-serif" } as const;
const EASE = [0.22, 1, 0.36, 1] as const;

/* ─── 詳細ページ ナビゲーションバー ─────────────────────────────────────── */
function DetailNav() {
  const navigate = useNavigate();
  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-3 border-b border-[rgba(0,34,255,0.15)] bg-white/95 backdrop-blur-sm">
      <motion.button
        onClick={() => navigate(-1)}
        whileHover={{ x: -3, opacity: 0.6 }}
        transition={{ duration: 0.18 }}
        className="flex items-center gap-2 text-[#0022ff] text-sm"
        style={UB}
      >
        <ArrowLeft size={16} />
        戻る
      </motion.button>
      <Link to="/" className="text-[#0022ff] text-xl leading-none" style={{ ...UB, fontWeight: 400 }}>
        Michotaku
      </Link>
      <div className="w-16" />
    </div>
  );
}

/* ─── コンテンツブロックレンダラー ──────────────────────────────────────── */
function Block({ block, index }: { block: BlogBlock; index: number }) {
  const fade = {
    initial: { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.45, ease: EASE, delay: Math.min(index * 0.04, 0.3) },
  };

  switch (block.type) {
    case 'paragraph':
      return (
        <motion.p {...fade} className="text-[#0022ff] text-base leading-loose opacity-85 mb-5" style={{ ...UB, fontWeight: 300 }}>
          {block.text}
        </motion.p>
      );
    case 'heading':
      return block.level === 2 ? (
        <motion.h2 {...fade} className="text-[#0022ff] text-2xl mt-10 mb-4 pb-2 border-b border-[rgba(0,34,255,0.25)]" style={{ ...UB, fontWeight: 400 }}>
          {block.text}
        </motion.h2>
      ) : (
        <motion.h3 {...fade} className="text-[#0022ff] text-xl mt-8 mb-3" style={{ ...UB, fontWeight: 400 }}>
          {block.text}
        </motion.h3>
      );
    case 'code':
      return (
        <motion.div {...fade} className="my-6 border border-[#0022ff] overflow-hidden">
          <div className="bg-[#0022ff] px-4 py-1.5 text-white text-xs" style={{ ...UB, fontWeight: 300 }}>
            {block.lang}
          </div>
          <pre className="bg-[rgba(0,34,255,0.03)] p-5 text-sm text-[#0022ff] overflow-x-auto leading-relaxed" style={{ fontFamily: "'Ubuntu Mono', 'Courier New', monospace" }}>
            <code>{block.code}</code>
          </pre>
        </motion.div>
      );
    case 'image':
      return (
        <motion.figure {...fade} className="my-8 border border-[#0022ff]" style={{ boxShadow: '4px 8px 0 0 #0022ff' }}>
          <img src={block.src} alt={block.alt ?? ''} className="w-full object-cover max-h-[480px]" />
          {block.caption && (
            <figcaption className="px-4 py-2 text-xs text-[#0022ff] opacity-60 bg-[rgba(0,34,255,0.03)] border-t border-[rgba(0,34,255,0.2)]" style={UB}>
              {block.caption}
            </figcaption>
          )}
        </motion.figure>
      );
    case 'list':
      return (
        <motion.ul {...fade} className="my-5 flex flex-col gap-2 pl-1">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-[#0022ff] text-base opacity-85" style={{ ...UB, fontWeight: 300 }}>
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#0022ff] flex-shrink-0" />
              {item}
            </li>
          ))}
        </motion.ul>
      );
    case 'divider':
      return <hr className="my-8 border-t border-[rgba(0,34,255,0.2)]" />;
    default:
      return null;
  }
}

/* ─── 前後記事カード ─────────────────────────────────────────────────────── */
function NavCard({ to, label, title, align }: { to: string; label: string; title: string; align: 'left' | 'right' }) {
  return (
    <motion.div whileHover={{ y: -4, boxShadow: '4px 8px 0 0 #0022ff' }} transition={{ duration: 0.2 }} style={{ boxShadow: '2px 4px 0 0 #0022ff' }}>
      <Link
        to={to}
        className={`flex flex-col gap-1 border border-[#0022ff] p-4 hover:bg-[rgba(0,34,255,0.04)] transition-colors group ${align === 'right' ? 'text-right' : ''}`}
      >
        <span className={`text-[#0022ff] text-xs opacity-50 flex items-center gap-1 ${align === 'right' ? 'justify-end' : ''}`} style={UB}>
          {align === 'left' && <ArrowLeft size={12} />}
          {label}
          {align === 'right' && <ArrowRight size={12} />}
        </span>
        <span className="text-[#0022ff] text-sm group-hover:underline line-clamp-2" style={{ ...UB, fontWeight: 400 }}>
          {title}
        </span>
      </Link>
    </motion.div>
  );
}

/* ─── ページ ─────────────────────────────────────────────────────────────── */
export default function BlogDetailPage() {
  const { id } = useParams<{ id: string }>();
  const post = id ? getBlogPostById(id) : undefined;

  const currentIndex = post ? BLOG_POSTS.findIndex((p) => p.id === post.id) : -1;
  const prevPost = currentIndex > 0 ? BLOG_POSTS[currentIndex - 1] : null;
  const nextPost = currentIndex < BLOG_POSTS.length - 1 ? BLOG_POSTS[currentIndex + 1] : null;

  if (!post) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <DetailNav />
        <div className="text-center mt-20">
          <p className="text-[#0022ff] text-4xl mb-6" style={UB}>404 — 記事が見つかりません</p>
          <Link to="/" className="border border-[#0022ff] text-[#0022ff] px-6 py-3 text-sm hover:bg-[#0022ff] hover:text-white transition-all" style={UB}>
            ← ホームへ戻る
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <DetailNav />

      {/* ヒーロー画像 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: EASE }}
        className="pt-12 relative w-full"
        style={{ maxHeight: '60vh', overflow: 'hidden' }}
      >
        <motion.img
          src={post.heroImage}
          alt={post.title}
          initial={{ scale: 1.06 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.0, ease: EASE }}
          className="w-full object-cover"
          style={{ maxHeight: '55vh', display: 'block' }}
        />
        <div className="absolute inset-0 bg-[rgba(0,34,255,0.10)]" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </motion.div>

      {/* 記事本文 */}
      <div className="relative max-w-3xl mx-auto px-6 md:px-8 pb-24">
        <GridBackgroundSVG opacity={0.07} size={40} />

        {/* メタヘッダー */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.15 }}
          className="relative z-10 pt-2 pb-10 border-b border-[rgba(0,34,255,0.2)] mb-10"
        >
          <div className="flex flex-wrap gap-2 mb-5">
            {post.tags.map((tag) => (
              <span key={tag} className="bg-[#0022ff] text-white px-3 py-0.5 text-xs" style={UB}>
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-[#0022ff] leading-tight mb-3" style={{ ...UB, fontWeight: 400, fontSize: 'clamp(1.75rem, 4vw, 2.75rem)' }}>
            {post.title}
          </h1>

          <p className="text-[#0022ff] text-sm opacity-50 tabular-nums" style={{ ...UB, fontWeight: 300 }}>
            {post.date}
          </p>
        </motion.div>

        {/* 本文 */}
        <div className="relative z-10">
          {post.content.map((block, i) => (
            <Block key={i} block={block} index={i} />
          ))}
        </div>

        {/* 前後記事ナビゲーション */}
        <div className="relative z-10 mt-16 pt-8 border-t border-[rgba(0,34,255,0.2)] grid grid-cols-2 gap-4">
          {prevPost ? <NavCard to={`/blog/${prevPost.id}`} label="前の記事" title={prevPost.title} align="left" /> : <div />}
          {nextPost ? <NavCard to={`/blog/${nextPost.id}`} label="次の記事" title={nextPost.title} align="right" /> : <div />}
        </div>

        {/* 一覧へ戻る */}
        <div className="relative z-10 mt-8 flex justify-center">
          <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.18 }}>
            <Link
              to="/#blog"
              className="border border-[#0022ff] text-[#0022ff] px-8 py-3 text-sm hover:bg-[#0022ff] hover:text-white transition-colors flex items-center gap-3"
              style={UB}
            >
              <ArrowLeft size={14} />
              ブログ一覧へ戻る
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
