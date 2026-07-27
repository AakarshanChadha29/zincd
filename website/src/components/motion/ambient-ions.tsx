"use client";

import { useReducedMotion } from "motion/react";

import { cn } from "@/lib/cn";

type AmbientIonsProps = {
  className?: string;
  /** Soft ecological green tint vs aquatic teal. */
  tone?: "aquatic" | "ecological";
  density?: "sparse" | "medium";
};

const PARTICLES = [
  { x: "8%", y: "22%", s: 4, d: "0s", a: "ion-drift-a" },
  { x: "18%", y: "68%", s: 3, d: "1.2s", a: "ion-drift-b" },
  { x: "32%", y: "14%", s: 5, d: "0.4s", a: "ion-drift-a" },
  { x: "46%", y: "56%", s: 3, d: "2.1s", a: "ion-drift-b" },
  { x: "58%", y: "28%", s: 4, d: "0.8s", a: "ion-drift-a" },
  { x: "72%", y: "74%", s: 3, d: "1.6s", a: "ion-drift-b" },
  { x: "84%", y: "18%", s: 5, d: "0.2s", a: "ion-drift-a" },
  { x: "91%", y: "48%", s: 3, d: "2.4s", a: "ion-drift-b" },
  { x: "24%", y: "42%", s: 2, d: "1.8s", a: "ion-drift-a" },
  { x: "66%", y: "12%", s: 2, d: "0.6s", a: "ion-drift-b" },
  { x: "40%", y: "82%", s: 4, d: "1.4s", a: "ion-drift-a" },
  { x: "78%", y: "58%", s: 3, d: "2.8s", a: "ion-drift-b" },
] as const;

/**
 * Decorative floating mineral-ion field for section atmosphere.
 * CSS-only; disabled under prefers-reduced-motion.
 */
export function AmbientIons({
  className,
  tone = "aquatic",
  density = "medium",
}: AmbientIonsProps) {
  const reduceMotion = useReducedMotion();
  const count = density === "sparse" ? 6 : PARTICLES.length;
  const color =
    tone === "ecological"
      ? "rgb(4 120 87 / 0.45)"
      : "rgb(13 115 119 / 0.4)";

  if (reduceMotion) return null;

  return (
    <div
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
      aria-hidden
    >
      {PARTICLES.slice(0, count).map((p, i) => (
        <span
          key={i}
          className={cn("absolute rounded-full", p.a)}
          style={{
            left: p.x,
            top: p.y,
            width: p.s,
            height: p.s,
            background: color,
            boxShadow: `0 0 ${p.s * 3}px ${color}`,
            animationDelay: p.d,
          }}
        />
      ))}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            tone === "ecological"
              ? "radial-gradient(50% 40% at 70% 30%, rgb(16 185 129 / 0.12), transparent 70%)"
              : "radial-gradient(50% 40% at 30% 70%, rgb(45 212 191 / 0.14), transparent 70%)",
        }}
      />
    </div>
  );
}
