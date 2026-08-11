"use client";

import { useSyncExternalStore } from "react";
import { motion, useReducedMotion, useScroll } from "motion/react";

const subscribe = () => () => {};

/**
 * Thin top-of-page scroll progress for the homepage cinematic feel.
 * Hidden under prefers-reduced-motion.
 */
export function ScrollProgress() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  // Render nothing until hydration so the server and client agree on markup.
  // useSyncExternalStore gives us that without a setState-in-effect cascade.
  const hydrated = useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );

  if (reduceMotion || !hydrated) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-[color:var(--aqua-400)]"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
