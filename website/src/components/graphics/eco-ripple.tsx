"use client";

import { useReducedMotion } from "motion/react";

import { cn } from "@/lib/cn";

/**
 * Soft expanding water-ripple rings — ecological motion motif.
 */
export function EcoRipple({ className }: { className?: string }) {
  const reduceMotion = useReducedMotion();

  return (
    <svg
      viewBox="0 0 400 400"
      className={cn("text-accent-ecological", className)}
      aria-hidden
      fill="none"
    >
      <circle
        cx="200"
        cy="200"
        r="48"
        className="fill-accent-ecological/15 stroke-accent-ecological/40"
        strokeWidth="1.5"
      />
      {[72, 110, 152, 198].map((r, i) => (
        <circle
          key={r}
          cx="200"
          cy="200"
          r={r}
          className={cn(
            "stroke-accent-ecological/25",
            !reduceMotion && "eco-ripple-ring"
          )}
          strokeWidth="1"
          style={
            reduceMotion
              ? undefined
              : { animationDelay: `${i * 0.7}s` }
          }
        />
      ))}
      {/* Mineral nodes */}
      <circle cx="200" cy="200" r="6" className="fill-accent-ecological/70" />
      <circle cx="248" cy="168" r="3.5" className="fill-accent-aquatic/60" />
      <circle cx="156" cy="230" r="3" className="fill-accent-aquatic/50" />
      <circle cx="232" cy="248" r="2.5" className="fill-accent-ecological/55" />
    </svg>
  );
}
