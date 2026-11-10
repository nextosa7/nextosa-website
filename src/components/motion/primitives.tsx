"use client";

import { motion, MotionConfig, type Variants } from "framer-motion";
import type { ReactNode } from "react";

// Shared motion language for the marketing site: calm, short, no overshoot.
// Reveals use an ease-out curve; hover uses a critically damped spring (stiffness 100, damping 20).
export const EASE = [0.22, 1, 0.36, 1] as const;
export const SPRING = { type: "spring", stiffness: 100, damping: 20 } as const;
const VIEWPORT = { once: true, amount: 0.15, margin: "0px 0px -60px 0px" } as const;

// Honours the visitor's "reduce motion" setting: transforms are skipped, opacity still fades.
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

const revealVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

const hoverLift = {
  scale: 1.015,
  y: -4,
  boxShadow: "0 20px 40px -18px rgba(15, 23, 42, 0.28)",
  transition: SPRING,
};

// Fades in and slides up slightly when it scrolls into view (once).
export function Reveal({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      className={className}
      variants={revealVariants}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

// A group whose StaggerItem children reveal one after another as the group scrolls into view.
export function Stagger({ children, className, gap = 0.08 }: { children: ReactNode; className?: string; gap?: number }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
      variants={{ hidden: {}, show: { transition: { staggerChildren: gap } } }}
    >
      {children}
    </motion.div>
  );
}

// `lift` adds the spring hover (small scale-up, rise and deeper shadow) for cards.
export function StaggerItem({ children, className, lift = false }: { children: ReactNode; className?: string; lift?: boolean }) {
  return (
    <motion.div className={className} variants={revealVariants} whileHover={lift ? hoverLift : undefined}>
      {children}
    </motion.div>
  );
}

// Same idea for content that should animate on first paint (the hero) instead of on scroll.
export function LoadStagger({ children, className, gap = 0.09, delay = 0.05 }: { children: ReactNode; className?: string; gap?: number; delay?: number }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      animate="show"
      variants={{ hidden: {}, show: { transition: { staggerChildren: gap, delayChildren: delay } } }}
    >
      {children}
    </motion.div>
  );
}

export function LoadItem({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div className={className} variants={revealVariants}>
      {children}
    </motion.div>
  );
}

// Plain card with the spring hover and no reveal of its own.
export function HoverCard({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div className={className} whileHover={hoverLift}>
      {children}
    </motion.div>
  );
}

// A single element that animates on first paint after a delay (hero screenshot).
export function LoadReveal({ children, className, delay = 0.5 }: { children: ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}
