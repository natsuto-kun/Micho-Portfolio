import { Link } from 'react-router';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';
import { BlogSection } from '../components/BlogSection';

const UB = { fontFamily: "'MOBO', sans-serif" } as const;

function PageNav() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-3 border-b border-[rgba(0,34,255,0.15)] bg-white/95 backdrop-blur-sm">
      <motion.div whileHover={{ x: -3, opacity: 0.6 }} transition={{ duration: 0.18 }}>
        <Link to="/" className="flex items-center gap-2 text-[#0022ff] text-sm" style={UB}>
          <ArrowLeft size={16} />
          ホームへ
        </Link>
      </motion.div>
      <Link to="/" className="text-[#0022ff] text-xl leading-none" style={{ ...UB, fontWeight: 400 }}>
        Michotaku
      </Link>
      <div className="w-16" />
    </div>
  );
}

function PageFooter() {
  return (
    <footer className="border-t border-[rgba(0,34,255,0.15)] py-10">
      <div className="max-w-6xl mx-auto px-8 flex justify-center">
        <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.18 }}>
          <Link
            to="/"
            className="border border-[#0022ff] text-[#0022ff] px-8 py-3 text-sm hover:bg-[#0022ff] hover:text-white transition-colors flex items-center gap-3"
            style={UB}
          >
            <ArrowLeft size={14} />
            ホームへ戻る
          </Link>
        </motion.div>
      </div>
      <p className="text-center text-[#0022ff] text-xs opacity-30 mt-8" style={{ ...UB, fontWeight: 300 }}>
        © 2026 Micho Portfolio. 無断転載禁止。
      </p>
    </footer>
  );
}

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageNav />
      <div className="pt-12">
        <BlogSection />
      </div>
      <PageFooter />
    </div>
  );
}
