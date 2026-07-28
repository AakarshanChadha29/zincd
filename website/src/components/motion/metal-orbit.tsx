"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";

import { cn } from "@/lib/cn";

const METALS = [
  { symbol: "Cu", name: "Copper", tone: "text-[color:var(--teal-700)]" },
  { symbol: "Ag", name: "Silver", tone: "text-[color:var(--teal-800)]" },
  { symbol: "Zn", name: "Zinc", tone: "text-accent-ecological" },
] as const;

/**
 * Interactive Cu · Ag · Zn orbit — scroll spins the ring; pointer tilts it.
 * Pure Motion + CSS 3D (no Higgsfield).
 */
export function MetalOrbit({ className }: { className?: string }) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scrollRotate = useTransform(scrollYProgress, [0, 1], [-40, 280]);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const springX = useSpring(mx, { stiffness: 120, damping: 18 });
  const springY = useSpring(my, { stiffness: 120, damping: 18 });
  const tiltX = useTransform(springY, [-0.5, 0.5], [12, -12]);
  const tiltY = useTransform(springX, [-0.5, 0.5], [-16, 16]);

  if (reduceMotion) {
    return (
      <div
        className={cn(
          "flex items-center justify-center gap-8 py-10 text-display",
          className
        )}
        aria-label="Copper, silver, and zinc"
      >
        {METALS.map((m) => (
          <span key={m.symbol} className={m.tone}>
            {m.symbol}
          </span>
        ))}
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className={cn(
        "relative mx-auto flex h-[min(52vw,22rem)] w-full max-w-3xl items-center justify-center [perspective:1100px]",
        className
      )}
      onPointerMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        mx.set((e.clientX - rect.left) / rect.width - 0.5);
        my.set((e.clientY - rect.top) / rect.height - 0.5);
      }}
      onPointerLeave={() => {
        mx.set(0);
        my.set(0);
      }}
      aria-label="Interactive copper, silver, and zinc orbit"
    >
      <motion.div
        className="relative size-[min(70vw,18rem)] will-change-transform"
        style={{
          rotateY: scrollRotate,
          rotateX: tiltX,
          transformStyle: "preserve-3d",
        }}
      >
        <motion.div
          className="absolute inset-0"
          style={{ rotateY: tiltY, transformStyle: "preserve-3d" }}
        >
          <div
            aria-hidden
            className="absolute inset-[8%] rounded-full border border-border-strong/40"
            style={{ transform: "rotateX(72deg) translateZ(0)" }}
          />
          <div
            aria-hidden
            className="absolute inset-[18%] rounded-full border border-accent-aquatic/25"
            style={{ transform: "rotateX(72deg)" }}
          />

          {METALS.map((m, i) => {
            const angle = (i / METALS.length) * Math.PI * 2 - Math.PI / 2;
            const radius = 118;
            const x = Math.cos(angle) * radius;
            const z = Math.sin(angle) * radius;
            return (
              <motion.div
                key={m.symbol}
                className="absolute left-1/2 top-1/2 -ml-10 -mt-10 flex size-20 flex-col items-center justify-center rounded-[var(--radius)] border border-border bg-surface/90 shadow-[var(--shadow-2)] backdrop-blur-sm"
                style={{
                  transform: `translate3d(${x}px, 0px, ${z}px)`,
                  transformStyle: "preserve-3d",
                }}
                whileHover={{ scale: 1.08 }}
              >
                <span className={cn("text-h1 font-semibold", m.tone)}>
                  {m.symbol}
                </span>
                <span className="text-technical mt-0.5 normal-case tracking-normal text-muted-foreground">
                  {m.name}
                </span>
              </motion.div>
            );
          })}

          <div
            className="absolute left-1/2 top-1/2 flex size-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-accent-ecological/30 bg-surface-muted text-technical text-accent-ecological"
            style={{ transform: "translateZ(28px)" }}
          >
            ions
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
