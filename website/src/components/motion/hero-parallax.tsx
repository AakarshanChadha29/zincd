"use client";

import { type ReactNode, useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";

import { cn } from "@/lib/cn";

type HeroParallaxProps = {
  children: ReactNode;
  className?: string;
};

/**
 * Gentle rising parallax for the homepage hero product float as the page
 * begins to scroll away — keeps the first screen feeling alive.
 */
export function HeroParallax({ children, className }: HeroParallaxProps) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.35]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div ref={ref} className={cn("relative", className)}>
      <motion.div style={{ y, opacity, scale }} className="will-change-transform">
        {children}
      </motion.div>
    </div>
  );
}
