"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";

import { cn } from "@/lib/cn";
import { Container } from "@/components/layout/container";
import { TechnicalLabel } from "@/components/ui/technical-label";
import { MetalOrbit } from "@/components/motion/metal-orbit";

/**
 * Full-bleed kinetic band: scrolling marquee of product language + 3D metal orbit.
 */
export function KineticMetalBand({ className }: { className?: string }) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-35%"]);

  const phrase =
    "Cu · Ag · Zn  —  mineral ions  —  PWM control  —  ecological clarity  —  ";

  return (
    <section
      ref={ref}
      className={cn(
        "relative overflow-hidden border-y border-border bg-surface-muted py-14 md:py-20",
        className
      )}
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 hero-aura opacity-60" />
      {!reduceMotion ? (
        <motion.div
          aria-hidden
          className="text-display absolute top-6 left-0 whitespace-nowrap text-foreground/[0.06]"
          style={{ x }}
        >
          {phrase.repeat(6)}
        </motion.div>
      ) : null}
      <Container className="relative">
        <TechnicalLabel className="justify-center">The alloy</TechnicalLabel>
        <p className="text-h2 mx-auto mt-3 max-w-xl text-center text-foreground">
          Three metals. One engineered cell.
        </p>
        <MetalOrbit className="mt-6" />
        <p className="text-small mx-auto mt-4 max-w-md text-center text-muted-foreground">
          Scroll to spin the orbit — move your pointer to tilt. Decorative
          visualization of the Cu–Ag–Zn system.
        </p>
      </Container>
    </section>
  );
}
