/**
 * Shared animation primitives using Motion (motion/react).
 *
 * FadeIn        — scroll-triggered fade-up (or left/right/none) for any element
 * StaggerGrid   — wraps a grid/list; children animate in stagger when scrolled into view
 * StaggerItem   — direct child of StaggerGrid
 */

import { motion, type Variants } from 'motion/react';
import type { ReactNode, CSSProperties } from 'react';

/* ─── Easing ─────────────────────────────────────────────────── */
const EASE = [0.22, 1, 0.36, 1] as const;

/* ─── Variant maps ───────────────────────────────────────────── */
const VARIANTS: Record<string, Variants> = {
  up: {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0 },
  },
  left: {
    hidden: { opacity: 0, x: -24 },
    visible: { opacity: 1, x: 0 },
  },
  right: {
    hidden: { opacity: 0, x: 24 },
    visible: { opacity: 1, x: 0 },
  },
  none: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
};

/* ─── FadeIn ──────────────────────────────────────────────────── */
interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'left' | 'right' | 'none';
  className?: string;
  style?: CSSProperties;
}

export function FadeIn({
  children,
  delay = 0,
  duration = 0.6,
  direction = 'up',
  className,
  style,
}: FadeInProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-64px' }}
      variants={VARIANTS[direction]}
      transition={{ duration, ease: EASE, delay }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

/* ─── Stagger container ───────────────────────────────────────── */
const STAGGER_CONTAINER: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const STAGGER_ITEM_VAR: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE },
  },
};

interface StaggerGridProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  stagger?: number;
}

export function StaggerGrid({ children, className, style, stagger = 0.1 }: StaggerGridProps) {
  const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: stagger, delayChildren: 0.05 } },
  };
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-64px' }}
      variants={containerVariants}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  style,
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <motion.div variants={STAGGER_ITEM_VAR} className={className} style={style}>
      {children}
    </motion.div>
  );
}

/* ─── HoverCard — cobalt-shadow lift ─────────────────────────── */
interface HoverCardProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  shadowBase?: string;
  shadowHover?: string;
  liftY?: number;
}

export function HoverCard({
  children,
  className,
  style,
  shadowBase = '4px 8px 0 0 #0022ff',
  shadowHover = '8px 16px 0 0 #0022ff',
  liftY = -6,
}: HoverCardProps) {
  return (
    <motion.div
      whileHover={{ y: liftY, boxShadow: shadowHover }}
      transition={{ duration: 0.22, ease: 'easeOut' }}
      style={{ boxShadow: shadowBase, ...style }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── HoverShift — subtle horizontal nudge (for list items) ──── */
export function HoverShift({
  children,
  className,
  style,
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <motion.div
      whileHover={{ x: 5 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}
