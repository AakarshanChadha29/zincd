"use client";

import { type ReactNode, useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

import { cn } from "@/lib/cn";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

/**
 * Lightweight entrance reveal (opacity + small Y). Uses an IntersectionObserver
 * for a scroll-triggered effect, with two safeguards so content is never left
 * invisible:
 *  - reduced-motion users get a plain, fully-visible element (no animation);
 *  - a short fallback timer reveals content even if the observer never fires.
 */
export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Reduced-motion renders a plain, already-visible element (below), so the
    // observer path only matters for the animated case.
    if (reduceMotion) return;
    const el = ref.current;
    if (!el) return;

    // Fallback: reveal even if the observer never fires (hidden tab, no support).
    const fallback = window.setTimeout(() => setVisible(true), 900);

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setVisible(true);
          window.clearTimeout(fallback);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, [reduceMotion]);

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      initial={{ opacity: 0, y: 12 }}
      animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
      transition={{ duration: 0.4, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
