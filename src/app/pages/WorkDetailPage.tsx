import { useParams, Link, useNavigate } from 'react-router';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { WORKS, getWorkById } from '../data/works';
import { GridBackgroundSVG } from '../components/GridBackground';
import { NetworkCanvas } from '../components/NetworkCanvas';
import { StaggerGrid, StaggerItem, FadeIn } from '../components/Animate';

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

/* ─── テーブル情報行 ─────────────────────────────────────────────────────── */
function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex gap-0 border-b border-[rgba(0,34,255,0.15)] last:border-b-0">
      <div
        className="w-32 flex-shrink-0 px-4 py-3 bg-[rgba(0,34,255,0.04)] text-[#0022ff] text-xs opacity-70 flex items-center"
        style={{ ...UB, fontWeight: 500 }}
      >
        {label}
      </div>
      <div className="flex-1 px-4 py-3 text-[#0022ff] text-sm" style={{ ...UB, fontWeight: 300 }}>
        {value}
      </div>
    </div>
  );
}

/* ─── カテゴリバッジ ─────────────────────────────────────────────────────── */
function CategoryLabel({ category }: { category: string }) {
  const map: Record<string, string> = {
    Scenario: 'シナリオ',
    Artwork:  'アートワーク',
    Web:      'Web制作',
  };
  return (
    <div className="inline-flex items-center border border-[#0022ff] px-4 py-1 text-[#0022ff] text-xs tracking-widest uppercase" style={UB}>
      {map[category] ?? category}
    </div>
  );
}

/* ─── ギャラリー画像カード ───────────────────────────────────────────────── */
function GalleryCard({ src, alt }: { src: string; alt: string }) {
  return (
    <motion.div
      whileHover={{ y: -5, boxShadow: '6px 12px 0 0 #0022ff' }}
      transition={{ duration: 0.22, ease: 'easeOut' }}
      style={{ boxShadow: '3px 6px 0 0 #0022ff' }}
      className="border border-[#0022ff] overflow-hidden"
    >
      <img src={src} alt={alt} className="w-full object-cover" style={{ aspectRatio: '4/3', display: 'block' }} />
    </motion.div>
  );
}

/* ─── 関連作品カード ─────────────────────────────────────────────────────── */
function RelatedCard({ id, thumbnail, tags, title }: (typeof WORKS)[number]) {
  return (
    <motion.div
      whileHover={{ y: -6, boxShadow: '6px 12px 0 0 #0022ff' }}
      transition={{ duration: 0.22, ease: 'easeOut' }}
      style={{ boxShadow: '3px 6px 0 0 #0022ff' }}
      className="border border-[#0022ff] bg-white"
    >
      <Link to={`/works/${id}`} className="group flex flex-col h-full">
        <div className="overflow-hidden" style={{ aspectRatio: '4/3' }}>
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="p-4 flex flex-col gap-2">
          <div className="flex gap-2 flex-wrap">
            {tags.map((t) => (
              <span key={t.label} className="bg-[#0022ff] text-white px-2 py-0.5 text-xs" style={UB}>
                {t.label}
              </span>
            ))}
          </div>
          <p className="text-[#0022ff] text-sm group-hover:underline" style={{ ...UB, fontWeight: 400 }}>
            {title}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}

/* ─── ページ ─────────────────────────────────────────────────────────────── */
export default function WorkDetailPage() {
  const { id } = useParams<{ id: string }>();
  const work = id ? getWorkById(id) : undefined;

  const allWorksInCategory = work ? WORKS.filter((w) => w.category === work.category) : [];
  const currentIndex = work ? allWorksInCategory.findIndex((w) => w.id === work.id) : -1;
  const prevWork = currentIndex > 0 ? allWorksInCategory[currentIndex - 1] : null;
  const nextWork = currentIndex < allWorksInCategory.length - 1 ? allWorksInCategory[currentIndex + 1] : null;
  const related  = work ? WORKS.filter((w) => w.category === work.category && w.id !== work.id).slice(0, 3) : [];

  if (!work) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <DetailNav />
        <div className="text-center mt-20">
          <p className="text-[#0022ff] text-4xl mb-6" style={UB}>404 — 作品が見つかりません</p>
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

      {/* ── ヒーロー ── */}
      <div className="pt-12 relative w-full bg-white overflow-hidden" style={{ minHeight: '55vh' }}>
        <NetworkCanvas nodeCount={40} maxDist={180} opacity={0.3} />
        <div className="relative z-10 flex items-center justify-center px-8" style={{ minHeight: '55vh' }}>
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.75, ease: EASE }}
            whileHover={{ y: -6, boxShadow: '10px 18px 0 0 #0022ff' }}
            style={{ boxShadow: '6px 12px 0 0 #0022ff', maxWidth: 520, width: '100%' }}
            className="border border-[#0022ff] overflow-hidden relative"
          >
            <img
              src={work.heroImage}
              alt={work.title}
              className="w-full object-cover"
              style={{ maxHeight: '44vh', display: 'block' }}
            />
            <div className="absolute inset-0 pointer-events-none" style={{ boxShadow: 'inset 2px 4px 0 0 #0022ff' }} />
          </motion.div>
        </div>
      </div>

      {/* ── メインコンテンツ ── */}
      <div className="relative bg-white">
        <GridBackgroundSVG opacity={0.1} size={40} />

        <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-8 py-16">

          {/* タイトルエリア */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: EASE, delay: 0.1 }}
            className="mb-12"
          >
            <div className="flex flex-wrap items-start gap-4 mb-4">
              <CategoryLabel category={work.category} />
              <span className="text-[#0022ff] text-sm opacity-40 mt-1" style={{ ...UB, fontWeight: 300 }}>{work.year}年</span>
            </div>
            <div className="flex flex-wrap gap-2 mb-5">
              {work.tags.map((tag) => (
                <span key={tag.label} className="bg-[#0022ff] text-white px-3 py-0.5 text-xs" style={UB}>{tag.label}</span>
              ))}
            </div>
            <h1 className="text-[#0022ff] leading-tight" style={{ ...UB, fontWeight: 400, fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
              {work.title}
            </h1>
          </motion.div>

          {/* 2カラムレイアウト */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12">

            {/* 左：説明・ギャラリー */}
            <div>
              <FadeIn direction="left" delay={0.05} className="mb-10 border-l-4 border-[#0022ff] pl-6">
                <p className="text-[#0022ff] text-base leading-loose opacity-85" style={{ ...UB, fontWeight: 300 }}>
                  {work.description}
                </p>
              </FadeIn>

              {work.gallery && work.gallery.length > 0 && (
                <FadeIn direction="up" delay={0.1}>
                  <p className="text-[#0022ff] text-xs tracking-widest uppercase mb-4 opacity-50" style={{ ...UB, fontWeight: 500 }}>
                    ギャラリー
                  </p>
                  <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 gap-4" stagger={0.1}>
                    {work.gallery.map((src, i) => (
                      <StaggerItem key={i}>
                        <GalleryCard src={src} alt={`${work.title} ${i + 1}`} />
                      </StaggerItem>
                    ))}
                  </StaggerGrid>
                </FadeIn>
              )}
            </div>

            {/* 右：サイドバー */}
            <FadeIn direction="right" delay={0.15} className="flex flex-col gap-6">
              {work.tableInfo && (
                <motion.div
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.18 }}
                  className="border border-[#0022ff]"
                  style={{ boxShadow: '3px 6px 0 0 #0022ff' }}
                >
                  <div className="bg-[#0022ff] px-4 py-2">
                    <p className="text-white text-xs tracking-widest uppercase" style={{ ...UB, fontWeight: 500 }}>シナリオ情報</p>
                  </div>
                  <div className="divide-y divide-[rgba(0,34,255,0.15)]">
                    {work.tableInfo.system       && <InfoRow label="システム" value={work.tableInfo.system} />}
                    {work.tableInfo.players      && <InfoRow label="人数"     value={work.tableInfo.players} />}
                    {work.tableInfo.duration     && <InfoRow label="時間"     value={work.tableInfo.duration} />}
                    {work.tableInfo.type         && <InfoRow label="タイプ"   value={work.tableInfo.type} />}
                    {work.tableInfo.distribution && <InfoRow label="頒布"     value={work.tableInfo.distribution} />}
                  </div>
                </motion.div>
              )}

              {work.medium && (
                <motion.div
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.18 }}
                  className="border border-[#0022ff]"
                  style={{ boxShadow: '3px 6px 0 0 #0022ff' }}
                >
                  <div className="bg-[#0022ff] px-4 py-2">
                    <p className="text-white text-xs tracking-widest uppercase" style={{ ...UB, fontWeight: 500 }}>使用媒体</p>
                  </div>
                  <div className="px-4 py-3">
                    <p className="text-[#0022ff] text-sm" style={{ ...UB, fontWeight: 300 }}>{work.medium}</p>
                  </div>
                </motion.div>
              )}

              {work.tools && work.tools.length > 0 && (
                <motion.div
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.18 }}
                  className="border border-[#0022ff]"
                  style={{ boxShadow: '3px 6px 0 0 #0022ff' }}
                >
                  <div className="bg-[#0022ff] px-4 py-2">
                    <p className="text-white text-xs tracking-widest uppercase" style={{ ...UB, fontWeight: 500 }}>使用ツール</p>
                  </div>
                  <div className="p-4 flex flex-wrap gap-2">
                    {work.tools.map((t) => (
                      <motion.span
                        key={t}
                        whileHover={{ backgroundColor: '#0022ff', color: '#fff', scale: 1.06 }}
                        transition={{ duration: 0.16 }}
                        className="border border-[#0022ff] text-[#0022ff] px-2 py-0.5 text-xs cursor-default"
                        style={UB}
                      >
                        {t}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              )}

              {work.link && (
                <motion.a
                  href={work.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ opacity: 0.88, y: -2 }}
                  transition={{ duration: 0.18 }}
                  className="border border-[#0022ff] bg-[#0022ff] text-white text-sm px-6 py-4 text-center flex items-center justify-center gap-3"
                  style={UB}
                >
                  {work.category === 'Scenario' ? 'Boothで見る' : work.category === 'Web' ? 'サイトを見る' : 'サイトで見る'}
                  <ArrowRight size={14} />
                </motion.a>
              )}
            </FadeIn>
          </div>

          {/* 前後作品ナビゲーション */}
          <FadeIn direction="up" delay={0.05} className="mt-16 pt-8 border-t border-[rgba(0,34,255,0.2)] grid grid-cols-2 gap-4">
            {prevWork ? (
              <motion.div whileHover={{ y: -4, boxShadow: '4px 8px 0 0 #0022ff' }} transition={{ duration: 0.2 }} style={{ boxShadow: '2px 4px 0 0 #0022ff' }}>
                <Link to={`/works/${prevWork.id}`} className="flex flex-col gap-2 border border-[#0022ff] p-4 hover:bg-[rgba(0,34,255,0.04)] transition-colors group overflow-hidden">
                  <span className="text-[#0022ff] text-xs opacity-50 flex items-center gap-1" style={UB}>
                    <ArrowLeft size={12} /> 前の作品
                  </span>
                  <div className="flex items-center gap-3">
                    <img src={prevWork.thumbnail} alt={prevWork.title} className="w-14 h-14 object-cover border border-[rgba(0,34,255,0.3)] flex-shrink-0" />
                    <span className="text-[#0022ff] text-sm line-clamp-2 group-hover:underline" style={{ ...UB, fontWeight: 400 }}>{prevWork.title}</span>
                  </div>
                </Link>
              </motion.div>
            ) : <div />}

            {nextWork ? (
              <motion.div whileHover={{ y: -4, boxShadow: '4px 8px 0 0 #0022ff' }} transition={{ duration: 0.2 }} style={{ boxShadow: '2px 4px 0 0 #0022ff' }}>
                <Link to={`/works/${nextWork.id}`} className="flex flex-col gap-2 border border-[#0022ff] p-4 hover:bg-[rgba(0,34,255,0.04)] transition-colors group overflow-hidden text-right">
                  <span className="text-[#0022ff] text-xs opacity-50 flex items-center justify-end gap-1" style={UB}>
                    次の作品 <ArrowRight size={12} />
                  </span>
                  <div className="flex items-center justify-end gap-3">
                    <span className="text-[#0022ff] text-sm line-clamp-2 group-hover:underline" style={{ ...UB, fontWeight: 400 }}>{nextWork.title}</span>
                    <img src={nextWork.thumbnail} alt={nextWork.title} className="w-14 h-14 object-cover border border-[rgba(0,34,255,0.3)] flex-shrink-0" />
                  </div>
                </Link>
              </motion.div>
            ) : <div />}
          </FadeIn>

          {/* 関連作品 */}
          {related.length > 0 && (
            <div className="mt-16">
              <FadeIn direction="left" className="flex items-center gap-4 mb-8">
                <span className="text-[#0022ff] text-xs tracking-widest uppercase opacity-50" style={{ ...UB, fontWeight: 500 }}>関連作品</span>
                <div className="flex-1 h-px bg-[#0022ff] opacity-15" />
              </FadeIn>
              <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6" stagger={0.1}>
                {related.map((w) => (
                  <StaggerItem key={w.id}>
                    <RelatedCard {...w} />
                  </StaggerItem>
                ))}
              </StaggerGrid>
            </div>
          )}

          {/* 一覧へ戻る */}
          <div className="mt-12 flex justify-center">
            <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.18 }}>
              <Link
                to="/works"
                className="border border-[#0022ff] text-[#0022ff] px-8 py-3 text-sm hover:bg-[#0022ff] hover:text-white transition-colors flex items-center gap-3"
                style={UB}
              >
                <ArrowLeft size={14} />
                作品一覧へ戻る
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
