"use client";

import { type ReactNode, useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";

import { cn } from "@/lib/cn";

type ScrollParallaxProps = {
  children: ReactNode;
  className?: string;
  /** Vertical travel in px across the scroll range. */
  offset?: number;
};

/**
 * Soft scroll-linked vertical parallax for media / graphics.
 * No-op under prefers-reduced-motion.
 */
export function ScrollParallax({
  children,
  className,
  offset = 48,
}: ScrollParallaxProps) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div ref={ref} className={cn("overflow-hidden", className)}>
      <motion.div style={{ y }} className="will-change-transform">
        {children}
      </motion.div>
    </div>
  );
}
