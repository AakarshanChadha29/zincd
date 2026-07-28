"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  useInView,
} from "motion/react";

import { cn } from "@/lib/cn";

type ScrollWordsProps = {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  /** Word entrance: rise, spin-in, or cascade. */
  mode?: "rise" | "spin" | "cascade";
  /** Soft scroll-linked drift after reveal. */
  drift?: boolean;
};

/**
 * Kinetic word reveal on scroll — words slide / spin into place.
 * Reduced-motion: plain text. No scrolljacking.
 */
export function ScrollWords({
  text,
  className,
  as: Tag = "h2",
  mode = "rise",
  drift = false,
}: ScrollWordsProps) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.35 });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const driftY = useTransform(scrollYProgress, [0, 1], [18, -18]);

  const words = text.split(" ");

  if (reduceMotion) {
    return (
      <Tag className={className} ref={ref as never}>
        {text}
      </Tag>
    );
  }

  const MotionTag = motion[Tag];

  return (
    <MotionTag
      ref={ref as never}
      className={cn("flex flex-wrap gap-x-[0.28em] gap-y-1", className)}
      style={drift ? { y: driftY } : undefined}
      aria-label={text}
    >
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="inline-block overflow-hidden">
          <motion.span
            className="inline-block will-change-transform"
            initial={
              mode === "spin"
                ? { opacity: 0, y: 28, rotateX: -70 }
                : mode === "cascade"
                  ? { opacity: 0, y: 40, filter: "blur(6px)" }
                  : { opacity: 0, y: 32 }
            }
            animate={
              inView
                ? { opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)" }
                : undefined
            }
            transition={{
              duration: 0.65,
              delay: i * 0.045,
              ease: [0.16, 1, 0.3, 1],
            }}
            style={{ transformOrigin: "bottom center", perspective: 600 }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </MotionTag>
  );
}
