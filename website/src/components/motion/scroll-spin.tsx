"use client";

import { type ReactNode, useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";

import { cn } from "@/lib/cn";

type ScrollSpinProps = {
  children: ReactNode;
  className?: string;
  /** Degrees of rotation across the scroll range. */
  degrees?: number;
  axis?: "y" | "z";
};

/**
 * Scroll-linked spin — element rotates as it moves through the viewport.
 */
export function ScrollSpin({
  children,
  className,
  degrees = 360,
  axis = "y",
}: ScrollSpinProps) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const rotate = useTransform(scrollYProgress, [0, 1], [0, degrees]);

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div ref={ref} className={cn("[perspective:900px]", className)}>
      <motion.div
        className="will-change-transform"
        style={
          axis === "z"
            ? { rotate }
            : { rotateY: rotate, transformStyle: "preserve-3d" }
        }
      >
        {children}
      </motion.div>
    </div>
  );
}

type ScrollTiltProps = {
  children: ReactNode;
  className?: string;
};

/** Soft 3D tilt of a stage as the user scrolls past. */
export function ScrollTilt({ children, className }: ScrollTiltProps) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const rotateY = useTransform(scrollYProgress, [0, 0.5, 1], [-10, 0, 10]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [6, 0, -6]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.94, 1, 0.96]);

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div ref={ref} className={cn("[perspective:1200px]", className)}>
      <motion.div
        className="will-change-transform"
        style={{
          rotateY,
          rotateX,
          scale,
          transformStyle: "preserve-3d",
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
