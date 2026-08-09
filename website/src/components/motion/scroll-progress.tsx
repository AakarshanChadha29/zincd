"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion, useScroll } from "motion/react";

/**
 * Thin top-of-page scroll progress for the homepage cinematic feel.
 * Hidden under prefers-reduced-motion.
 */
export function ScrollProgress() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (reduceMotion || !mounted) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-[color:var(--aqua-400)]"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
