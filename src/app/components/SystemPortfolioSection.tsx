import { motion } from 'motion/react';
import { GridBackgroundSVG } from './GridBackground';
import { SectionHeader } from './SectionHeader';
import { FadeIn, StaggerGrid, StaggerItem } from './Animate';

const UB = { fontFamily: "'MOBO', sans-serif" } as const;

/* ───────────────────────── アーキテクチャ図 ─────────────────────────────── */

function ArchDiagramAlpha() {
  return (
    <svg viewBox="0 0 320 220" className="w-full h-full" style={{ filter: 'blur(2.5px)' }}>
      <rect x="20"  y="90"  width="72" height="40" rx="3" fill="rgba(0,34,255,0.12)" stroke="#0022ff" strokeWidth="1"/>
      <rect x="124" y="20"  width="72" height="40" rx="3" fill="rgba(0,34,255,0.12)" stroke="#0022ff" strokeWidth="1"/>
      <rect x="124" y="90"  width="72" height="40" rx="3" fill="rgba(0,34,255,0.12)" stroke="#0022ff" strokeWidth="1"/>
      <rect x="124" y="160" width="72" height="40" rx="3" fill="rgba(0,34,255,0.12)" stroke="#0022ff" strokeWidth="1"/>
      <rect x="228" y="90"  width="72" height="40" rx="3" fill="rgba(0,34,255,0.12)" stroke="#0022ff" strokeWidth="1"/>
      <line x1="92"  y1="110" x2="124" y2="40"  stroke="#0022ff" strokeWidth="0.8"/>
      <line x1="92"  y1="110" x2="124" y2="110" stroke="#0022ff" strokeWidth="0.8"/>
      <line x1="92"  y1="110" x2="124" y2="180" stroke="#0022ff" strokeWidth="0.8"/>
      <line x1="196" y1="110" x2="228" y2="110" stroke="#0022ff" strokeWidth="0.8"/>
      <text x="56"  y="115" textAnchor="middle" fill="#0022ff" fontSize="9" fontFamily="MOBO,sans-serif">クライアント</text>
      <text x="160" y="45"  textAnchor="middle" fill="#0022ff" fontSize="9" fontFamily="MOBO,sans-serif">認証</text>
      <text x="160" y="115" textAnchor="middle" fill="#0022ff" fontSize="9" fontFamily="MOBO,sans-serif">API</text>
      <text x="160" y="185" textAnchor="middle" fill="#0022ff" fontSize="9" fontFamily="MOBO,sans-serif">キュー</text>
      <text x="264" y="115" textAnchor="middle" fill="#0022ff" fontSize="9" fontFamily="MOBO,sans-serif">DB</text>
    </svg>
  );
}

function ArchDiagramBeta() {
  return (
    <svg viewBox="0 0 320 220" className="w-full h-full" style={{ filter: 'blur(2.5px)' }}>
      <rect x="120" y="10"  width="80" height="40" rx="3" fill="rgba(0,34,255,0.12)" stroke="#0022ff" strokeWidth="1"/>
      <rect x="40"  y="90"  width="80" height="40" rx="3" fill="rgba(0,34,255,0.12)" stroke="#0022ff" strokeWidth="1"/>
      <rect x="200" y="90"  width="80" height="40" rx="3" fill="rgba(0,34,255,0.12)" stroke="#0022ff" strokeWidth="1"/>
      <rect x="40"  y="168" width="80" height="40" rx="3" fill="rgba(0,34,255,0.12)" stroke="#0022ff" strokeWidth="1"/>
      <rect x="200" y="168" width="80" height="40" rx="3" fill="rgba(0,34,255,0.12)" stroke="#0022ff" strokeWidth="1"/>
      <line x1="160" y1="50"  x2="80"  y2="90"  stroke="#0022ff" strokeWidth="0.8"/>
      <line x1="160" y1="50"  x2="240" y2="90"  stroke="#0022ff" strokeWidth="0.8"/>
      <line x1="80"  y1="130" x2="80"  y2="168" stroke="#0022ff" strokeWidth="0.8"/>
      <line x1="240" y1="130" x2="240" y2="168" stroke="#0022ff" strokeWidth="0.8"/>
      <text x="160" y="34"  textAnchor="middle" fill="#0022ff" fontSize="9" fontFamily="MOBO,sans-serif">CDN</text>
      <text x="80"  y="115" textAnchor="middle" fill="#0022ff" fontSize="9" fontFamily="MOBO,sans-serif">フロント</text>
      <text x="240" y="115" textAnchor="middle" fill="#0022ff" fontSize="9" fontFamily="MOBO,sans-serif">CMS API</text>
      <text x="80"  y="193" textAnchor="middle" fill="#0022ff" fontSize="9" fontFamily="MOBO,sans-serif">ストレージ</text>
      <text x="240" y="193" textAnchor="middle" fill="#0022ff" fontSize="9" fontFamily="MOBO,sans-serif">PostgreSQL</text>
    </svg>
  );
}

function ArchDiagramGamma() {
  return (
    <svg viewBox="0 0 320 220" className="w-full h-full" style={{ filter: 'blur(2.5px)' }}>
      <rect x="10"  y="90"  width="70" height="40" rx="3" fill="rgba(0,34,255,0.12)" stroke="#0022ff" strokeWidth="1"/>
      <rect x="100" y="90"  width="70" height="40" rx="3" fill="rgba(0,34,255,0.12)" stroke="#0022ff" strokeWidth="1"/>
      <rect x="190" y="90"  width="70" height="40" rx="3" fill="rgba(0,34,255,0.12)" stroke="#0022ff" strokeWidth="1"/>
      <rect x="100" y="168" width="70" height="40" rx="3" fill="rgba(0,34,255,0.12)" stroke="#0022ff" strokeWidth="1"/>
      <rect x="190" y="12"  width="70" height="40" rx="3" fill="rgba(0,34,255,0.12)" stroke="#0022ff" strokeWidth="1"/>
      <line x1="80"  y1="110" x2="100" y2="110" stroke="#0022ff" strokeWidth="0.8"/>
      <line x1="170" y1="110" x2="190" y2="110" stroke="#0022ff" strokeWidth="0.8"/>
      <line x1="135" y1="130" x2="135" y2="168" stroke="#0022ff" strokeWidth="0.8"/>
      <line x1="225" y1="90"  x2="225" y2="52"  stroke="#0022ff" strokeWidth="0.8"/>
      <text x="45"  y="115" textAnchor="middle" fill="#0022ff" fontSize="9" fontFamily="MOBO,sans-serif">ソース</text>
      <text x="135" y="115" textAnchor="middle" fill="#0022ff" fontSize="9" fontFamily="MOBO,sans-serif">変換</text>
      <text x="225" y="115" textAnchor="middle" fill="#0022ff" fontSize="9" fontFamily="MOBO,sans-serif">分析</text>
      <text x="135" y="193" textAnchor="middle" fill="#0022ff" fontSize="9" fontFamily="MOBO,sans-serif">データレイク</text>
      <text x="225" y="37"  textAnchor="middle" fill="#0022ff" fontSize="9" fontFamily="MOBO,sans-serif">ダッシュボード</text>
    </svg>
  );
}

/* ─────────────────────────── プロジェクトデータ ────────────────────────── */

const PROJECTS = [
  {
    id: 'alpha',
    codename: 'Project Alpha',
    client: '███ 企業（金融セクター）',
    period: '2023年 Q1〜Q3',
    description:
      '金融セクターの匿名企業クライアント向けに、スケーラブルなREST APIアーキテクチャを設計・実装しました。厳格な監査ログ、ロールベースアクセス制御、高負荷時でも100ms以下のレスポンスタイムが求められるシステムです。',
    deliverables: [
      'REST API（Node.js / Express + TypeScript）',
      'PostgreSQLスキーマ設計・マイグレーション',
      'JWT + OAuth 2.0 認証レイヤー',
      'CI/CDパイプライン（GitHub Actions + Docker）',
    ],
    tech: ['Node.js', 'TypeScript', 'PostgreSQL', 'Docker', 'AWS'],
    Diagram: ArchDiagramAlpha,
  },
  {
    id: 'beta',
    codename: 'Project Beta',
    client: '███ メディア企業（エンタメ業界）',
    period: '2022年 Q4〜2023年 Q2',
    description:
      '匿名メディア企業向けのフルスタックCMS。複雑な状態管理とWebSocketを使ったリアルタイム通知機能を持つReactフロントエンドと、AstroベースのCMS APIをバックエンドとして構築・納品しました。',
    deliverables: [
      'React + TypeScriptフロントエンド',
      'Astro + Node.js CMSバックエンド',
      'リアルタイム通知（WebSocket）',
      'モバイル対応UI・デザインシステム',
    ],
    tech: ['React', 'TypeScript', 'Astro', 'Supabase', 'Vercel'],
    Diagram: ArchDiagramBeta,
  },
  {
    id: 'gamma',
    codename: 'Project Gamma',
    client: '███ 分析会社（データサービス）',
    period: '2022年 Q1〜Q3',
    description:
      '匿名のデータサービス企業向けに、データ取り込みパイプラインとインタラクティブな分析ダッシュボードを構築。大規模データセットのカスタマイズ可能な変換処理を実装し、CSVおよびPDF形式のエクスポート機能を提供しました。',
    deliverables: [
      'Pythonデータ取り込み・変換パイプライン',
      'インタラクティブダッシュボード（React + Recharts）',
      'CSV / PDFエクスポート機能',
      'ロールベースアクセス制御・監査ログ',
    ],
    tech: ['Python', 'FastAPI', 'React', 'PostgreSQL', 'Recharts'],
    Diagram: ArchDiagramGamma,
  },
];

/* ───────────────────────── システムカード ───────────────────────────────── */

function SystemCard({
  codename,
  client,
  period,
  description,
  deliverables,
  tech,
  Diagram,
}: (typeof PROJECTS)[number]) {
  return (
    <motion.div
      whileHover={{ y: -5, boxShadow: '8px 16px 0 0 #0022ff' }}
      transition={{ duration: 0.22, ease: 'easeOut' }}
      style={{ boxShadow: '4px 8px 0 0 #0022ff' }}
      className="border border-[#0022ff] bg-white flex flex-col lg:flex-row"
    >
      {/* 左：アーキテクチャ図 */}
      <div className="lg:w-[40%] border-b lg:border-b-0 lg:border-r border-[#0022ff] bg-[rgba(0,34,255,0.03)] flex items-center justify-center p-6 min-h-[220px]">
        <div className="w-full h-full max-h-[200px] select-none pointer-events-none overflow-hidden">
          <Diagram />
        </div>
      </div>

      {/* 右：プロジェクト情報 */}
      <div className="flex-1 p-8 flex flex-col justify-between gap-5">
        <div>
          <div className="flex items-start justify-between gap-4 flex-wrap mb-3">
            <p className="text-[#0022ff] text-xl" style={{ ...UB, fontWeight: 500 }}>
              {codename}
            </p>
            <span className="text-[#0022ff] text-xs opacity-60 mt-1" style={{ ...UB, fontWeight: 300 }}>
              {period}
            </span>
          </div>
          <p className="text-[#0022ff] text-xs opacity-50 mb-4" style={{ ...UB, fontWeight: 300 }}>
            クライアント：{client}
          </p>
          <p className="text-[#0022ff] text-sm leading-relaxed opacity-80" style={{ ...UB, fontWeight: 300 }}>
            {description}
          </p>
        </div>

        {/* 主な成果物 */}
        <div>
          <p className="text-[#0022ff] text-xs tracking-widest uppercase mb-3 opacity-50" style={{ ...UB, fontWeight: 500 }}>
            主な成果物
          </p>
          <ul className="flex flex-col gap-1.5">
            {deliverables.map((d) => (
              <li key={d} className="text-[#0022ff] text-sm flex items-start gap-2 opacity-80" style={{ ...UB, fontWeight: 300 }}>
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#0022ff] flex-shrink-0 opacity-70" />
                {d}
              </li>
            ))}
          </ul>
        </div>

        {/* 技術タグ */}
        <div className="flex flex-wrap gap-2">
          {tech.map((t) => (
            <motion.span
              key={t}
              whileHover={{ backgroundColor: '#0022ff', color: '#fff', scale: 1.06 }}
              transition={{ duration: 0.16 }}
              className="border border-[#0022ff] text-[#0022ff] px-3 py-0.5 text-xs cursor-default"
              style={UB}
            >
              {t}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

/* ──────────────────────── セクションコンポーネント ─────────────────────── */

export function SystemPortfolioSection() {
  return (
    <section id="portfolio" className="relative w-full bg-white overflow-hidden py-24">
      <GridBackgroundSVG opacity={0.12} size={40} />

      <div className="relative z-10 max-w-6xl mx-auto px-8">
        <SectionHeader title="system portfolio" />

        <FadeIn direction="left" delay={0.05}>
          <p
            className="text-[#0022ff] text-sm leading-relaxed opacity-60 max-w-2xl mb-12"
            style={{ ...UB, fontWeight: 300 }}
          >
            法人クライアント向けのシステム開発実績です。NDAに基づき、すべての企業名および識別情報は匿名化しています。アーキテクチャ図も意図的に不明瞭にしています。
          </p>
        </FadeIn>

        <StaggerGrid className="flex flex-col gap-10" stagger={0.12}>
          {PROJECTS.map((proj) => (
            <StaggerItem key={proj.id}>
              <SystemCard {...proj} />
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}
