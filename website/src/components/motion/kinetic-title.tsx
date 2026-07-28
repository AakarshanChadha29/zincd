"use client";

import { useRef } from "react";
import {
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";

import { cn } from "@/lib/cn";
import { ScrollWords } from "@/components/motion/scroll-words";

type KineticHeroTitleProps = {
  className?: string;
  lead: string;
  accent: string;
  trail: string;
};

function WordCascade({
  text,
  className,
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const words = text.split(" ");

  return (
    <span ref={ref} className={cn("inline", className)} aria-hidden>
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="inline-block overflow-hidden align-bottom">
          <motion.span
            className="inline-block will-change-transform"
            initial={{ opacity: 0, y: "110%" }}
            animate={inView ? { opacity: 1, y: "0%" } : undefined}
            transition={{
              duration: 0.7,
              delay: delay + i * 0.05,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {word}
            {i < words.length - 1 ? "\u00A0" : null}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

/**
 * Hero kinetic title — word cascade + scroll parallax fade as you leave the hero.
 */
export function KineticHeroTitle({
  lead,
  accent,
  trail,
  className,
}: KineticHeroTitleProps) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLHeadingElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 72]);
  const opacity = useTransform(scrollYProgress, [0, 0.9], [1, 0.2]);

  if (reduceMotion) {
    return (
      <h1 className={cn("text-display text-white", className)}>
        {lead} <span className="text-gradient-aqua">{accent}</span> {trail}
      </h1>
    );
  }

  return (
    <motion.h1
      ref={ref}
      className={cn("text-display text-white", className)}
      style={{ y, opacity }}
    >
      <span className="sr-only">
        {lead} {accent} {trail}
      </span>
      <WordCascade text={lead} />{" "}
      <motion.span
        className="text-gradient-aqua inline-block"
        initial={{ opacity: 0, rotate: -12, scale: 0.88 }}
        animate={{ opacity: 1, rotate: 0, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        aria-hidden
      >
        {accent}
      </motion.span>{" "}
      <WordCascade text={trail} delay={0.55} />
    </motion.h1>
  );
}

type KineticSectionTitleProps = {
  title: string;
  className?: string;
  as?: "h1" | "h2" | "h3";
  mode?: "rise" | "spin" | "cascade";
};

export function KineticSectionTitle({
  title,
  className,
  as = "h2",
  mode = "spin",
}: KineticSectionTitleProps) {
  const size =
    as === "h1" ? "text-h1" : as === "h3" ? "text-h3" : "text-h2";

  return (
    <ScrollWords
      text={title}
      as={as}
      mode={mode}
      drift
      className={cn(size, "text-foreground", className)}
    />
  );
}
