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

/**
 * Full-viewport scroll chapters.
 *
 * Replaces the previous card-in-a-void pattern, where a small letterboxed
 * media card floated in a large pearl field — the composition read as an
 * unfinished template rather than a designed frame.
 *
 * Here each chapter *is* the viewport: a full-bleed still with a scrim and
 * sparse type. Scrolling crossfades between them while the frame stays
 * pinned, so there is never an empty margin around the media.
 *
 * Reduced motion falls back to stacked full-bleed sections — still full-bleed,
 * just without the pinning or the crossfade.
 */

export type Chapter = {
  id: string;
  eyebrow: string;
  title: string;
  body: string;
  image: string;
  imageAlt: string;
};

function ChapterFrame({
  chapter,
  index,
  total,
  progress,
}: {
  chapter: Chapter;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  // Each chapter owns a slice of the scroll range and crossfades with its
  // neighbours across a short overlap, so the media never cuts hard.
  const slice = 1 / total;
  const start = index * slice;
  const end = start + slice;
  const fadeIn = index === 0 ? start : start + slice * 0.12;
  const fadeOut = index === total - 1 ? end : end - slice * 0.12;

  const opacity = useTransform(
    progress,
    [start, fadeIn, fadeOut, end],
    index === 0
      ? [1, 1, 1, 0]
      : index === total - 1
        ? [0, 1, 1, 1]
        : [0, 1, 1, 0],
  );

  // Slow push-in across the chapter's life — ken burns, not a zoom effect.
  const scale = useTransform(progress, [start, end], [1.06, 1.14]);
  const textY = useTransform(progress, [start, fadeIn, fadeOut], [28, 0, -18]);

  return (
    <motion.div
      style={{ opacity }}
      className="absolute inset-0 bg-[color:var(--teal-900)]"
      aria-hidden={index !== 0}
    >
      <motion.div style={{ scale }} className="absolute inset-0">
        <Image
          src={chapter.image}
          alt={chapter.imageAlt}
          fill
          sizes="100vw"
          className="object-cover"
          priority={index === 0}
        />
      </motion.div>

      {/* Scrim: heavy at the base where type sits, clear at the top so the
          photograph still reads as a photograph. */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(to_top,rgb(4_32_38/0.95)_0%,rgb(4_32_38/0.86)_34%,rgb(4_32_38/0.66)_62%,rgb(4_32_38/0.48)_100%)]"
      />

      <div className="absolute inset-0 flex items-end pb-16 md:pb-20">
        <Container>
          <motion.div style={{ y: textY }} className="max-w-2xl">
            <TechnicalLabel className="text-[color:var(--aqua-400)]">
              {chapter.eyebrow}
            </TechnicalLabel>
            <h2 className="text-display mt-4 text-white">{chapter.title}</h2>
            <p className="text-body-large mt-5 max-w-xl text-white/85">
              {chapter.body}
            </p>
          </motion.div>
        </Container>
      </div>
    </motion.div>
  );
}

function StaticChapter({ chapter }: { chapter: Chapter }) {
  return (
    <section className="relative min-h-[70svh] overflow-hidden bg-[color:var(--teal-900)]">
      <Image
        src={chapter.image}
        alt={chapter.imageAlt}
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(to_top,rgb(4_32_38/0.95)_0%,rgb(4_32_38/0.86)_34%,rgb(4_32_38/0.66)_62%,rgb(4_32_38/0.48)_100%)]"
      />
      <div className="relative flex min-h-[70svh] items-end py-16">
        <Container>
          <div className="max-w-2xl">
            <TechnicalLabel className="text-[color:var(--aqua-400)]">
              {chapter.eyebrow}
            </TechnicalLabel>
            <h2 className="text-display mt-4 text-white">{chapter.title}</h2>
            <p className="text-body-large mt-5 max-w-xl text-white/85">
              {chapter.body}
            </p>
          </div>
        </Container>
      </div>
    </section>
  );
}

export function CinematicChapters({
  chapters,
  label,
}: {
  chapters: Chapter[];
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
      <section aria-label={label}>
        {chapters.map((c) => (
          <StaticChapter key={c.id} chapter={c} />
        ))}
      </section>
    );
  }

  return (
    <section
      ref={trackRef}
      aria-label={label}
      // One viewport of scroll per chapter, so each gets a full beat.
      style={{ height: `${chapters.length * 100}svh` }}
      className="relative"
    >
      <div className="sticky top-0 h-[100svh] overflow-hidden">
        {chapters.map((c, i) => (
          <ChapterFrame
            key={c.id}
            chapter={c}
            index={i}
            total={chapters.length}
            progress={scrollYProgress}
          />
        ))}
      </div>

      {/* The pinned frame is aria-hidden past the first chapter, so the full
          text of every chapter is still exposed once, here, for assistive
          technology and for crawlers. */}
      <div className="sr-only">
        {chapters.map((c) => (
          <article key={c.id}>
            <h2>{c.title}</h2>
            <p>{c.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
