import { motion } from 'motion/react';

interface SectionHeaderProps {
  title: string;
  id?: string;
}

const EASE = [0.22, 1, 0.36, 1] as const;

export function SectionHeader({ title, id }: SectionHeaderProps) {
  return (
    <motion.div
      id={id}
      className="flex items-stretch mb-12 pt-2"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, ease: EASE }}
    >
      {/* Label box */}
      <div className="border border-r-0 border-[#0022ff] px-10 py-5 bg-white flex items-center">
        <h2
          className="text-[#0022ff] leading-none not-italic"
          style={{
            fontFamily: "'MOBO', sans-serif",
            fontWeight: 400,
            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
          }}
        >
          {title}
        </h2>
      </div>

      {/* Chevron arrow */}
      <div className="self-stretch flex-shrink-0" style={{ width: 52 }}>
        <svg
          viewBox="0 0 40 100"
          preserveAspectRatio="none"
          style={{ width: '100%', height: '100%', display: 'block' }}
          fill="none"
        >
          <polyline points="0,0 38,50 0,100" stroke="#0022ff" strokeWidth="1" />
        </svg>
      </div>

      {/* Horizontal rule */}
      <div className="flex-1 self-center border-t border-[#0022ff]" />
    </motion.div>
  );
}
