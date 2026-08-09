"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "motion/react";

import { Container } from "@/components/layout/container";
import { TechnicalLabel } from "@/components/ui/technical-label";

export type HardwareBeat = {
  id: string;
  eyebrow: string;
  title: string;
  body: string;
  image: string;
  imageAlt: string;
};

/**
 * Sticky scroll stage — product photography stays pinned while copy beats
 * advance. Built for the homepage "hardware truth" sequence.
 */
export function HardwareScrollStage({
  beats,
  label,
}: {
  beats: HardwareBeat[];
  label: string;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  });

  if (reduceMotion) {
    return (
      <section aria-label={label} className="border-y border-border bg-surface">
        <Container className="space-y-16 py-16 md:py-20">
          {beats.map((beat) => (
            <div
              key={beat.id}
              className="grid items-center gap-10 lg:grid-cols-2"
            >
              <div>
                <TechnicalLabel>{beat.eyebrow}</TechnicalLabel>
                <h2 className="text-h1 mt-4 text-foreground">{beat.title}</h2>
                <p className="text-body-large mt-4 text-muted-foreground">
                  {beat.body}
                </p>
              </div>
              <div className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius-panel)] border border-border bg-[color:var(--teal-900)]">
                <Image
                  src={beat.image}
                  alt={beat.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 40vw, 90vw"
                  className="object-contain p-6"
                />
              </div>
            </div>
          ))}
        </Container>
      </section>
    );
  }

  return (
    <section
      ref={trackRef}
      aria-label={label}
      style={{ height: `${Math.max(beats.length, 1) * 90}svh` }}
      className="relative border-y border-border"
    >
      <div className="sticky top-0 flex h-[100svh] items-center overflow-hidden bg-[color:var(--pearl)]">
        <Container className="relative grid w-full items-center gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-14">
          <div className="relative min-h-[16rem] md:min-h-[18rem]">
            {beats.map((beat, index) => (
              <BeatCopy
                key={beat.id}
                beat={beat}
                index={index}
                total={beats.length}
                progress={scrollYProgress}
              />
            ))}
          </div>
          <div className="relative mx-auto aspect-[4/5] w-full max-w-lg overflow-hidden rounded-[var(--radius-panel)] border border-border bg-[color:var(--teal-900)] shadow-[var(--shadow-2)]">
            {beats.map((beat, index) => (
              <BeatImage
                key={beat.id}
                beat={beat}
                index={index}
                total={beats.length}
                progress={scrollYProgress}
              />
            ))}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgb(45_212_191/0.16),transparent_55%)]"
            />
          </div>
        </Container>
      </div>

      <div className="sr-only">
        {beats.map((beat) => (
          <article key={beat.id}>
            <h2>{beat.title}</h2>
            <p>{beat.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function BeatCopy({
  beat,
  index,
  total,
  progress,
}: {
  beat: HardwareBeat;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const slice = 1 / total;
  const start = index * slice;
  const mid = start + slice * 0.2;
  const end = start + slice;
  const opacity = useTransform(
    progress,
    [start, mid, end - slice * 0.15, end],
    index === 0
      ? [1, 1, 1, 0]
      : index === total - 1
        ? [0, 1, 1, 1]
        : [0, 1, 1, 0]
  );
  const y = useTransform(progress, [start, mid, end], [28, 0, -20]);

  return (
    <motion.div
      style={{ opacity, y }}
      className="absolute inset-x-0 top-1/2 -translate-y-1/2"
    >
      <TechnicalLabel className="text-accent-aquatic">{beat.eyebrow}</TechnicalLabel>
      <h2 className="text-h1 mt-4 text-foreground">{beat.title}</h2>
      <p className="text-body-large mt-4 max-w-lg text-muted-foreground">
        {beat.body}
      </p>
    </motion.div>
  );
}

function BeatImage({
  beat,
  index,
  total,
  progress,
}: {
  beat: HardwareBeat;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const slice = 1 / total;
  const start = index * slice;
  const mid = start + slice * 0.18;
  const end = start + slice;
  const opacity = useTransform(
    progress,
    [start, mid, end - slice * 0.12, end],
    index === 0
      ? [1, 1, 1, 0]
      : index === total - 1
        ? [0, 1, 1, 1]
        : [0, 1, 1, 0]
  );
  const scale = useTransform(progress, [start, end], [1.04, 1]);

  return (
    <motion.div style={{ opacity, scale }} className="absolute inset-0">
      <Image
        src={beat.image}
        alt={beat.imageAlt}
        fill
        sizes="(min-width: 1024px) 40vw, 90vw"
        className="object-contain p-8 md:p-10"
        priority={index === 0}
      />
    </motion.div>
  );
}
