"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "motion/react";

import { Container } from "@/components/layout/container";
import { TechnicalLabel } from "@/components/ui/technical-label";

/**
 * One continuous pool panorama that pans right-to-left across the viewport
 * while three points surface over successive stretches of the same frame.
 *
 * This replaces the previous pairing of CinematicChapters + HardwareScrollStage,
 * which pinned two near-identical crossfade stages back to back and cost ~570svh
 * of scroll to say three things. Here a single image carries the whole sequence,
 * so the page reads as one continuous place rather than a slideshow of stock
 * photography, at roughly half the scroll length.
 *
 * The pan distance is measured rather than assumed: the panorama is laid out at
 * the stage's height and its natural aspect, and we translate by exactly the
 * overflow (image width - viewport width). That keeps the far edge of the photo
 * landing flush with the right edge of the screen at progress = 1 on any
 * viewport, instead of guessing a percentage that only holds at one size.
 *
 * Reduced motion drops the pan entirely and renders three stacked frames, each
 * showing its own third of the same photograph via object-position — the same
 * narrative, no scroll-driven movement.
 */

export type PoolStoryPoint = {
  id: string;
  eyebrow: string;
  title: string;
  body: string;
  /** Horizontal focus of this point within the panorama, 0 (left) to 1 (right). */
  focus: number;
};

/** Must match the shipped panorama exactly — the pan distance derives from it. */
const PANORAMA_ASPECT = 4096 / 1258;

export function PoolStoryPan({
  points,
  image,
  imageAlt,
  label,
}: {
  points: PoolStoryPoint[];
  image: string;
  imageAlt: string;
  label: string;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const [panDistance, setPanDistance] = useState(0);

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  });

  // Smooth the raw scroll value so the pan glides instead of tracking every
  // wheel tick — a long horizontal move amplifies scroll jitter badly.
  const progress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 26,
    restDelta: 0.0005,
  });

  const measure = useCallback(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const { width, height } = stage.getBoundingClientRect();
    // The panorama is rendered at stage height, so its laid-out width is
    // height * aspect. Only the overflow beyond the viewport is pannable.
    const imageWidth = height * PANORAMA_ASPECT;
    setPanDistance(Math.max(0, imageWidth - width));
  }, []);

  useEffect(() => {
    if (reduceMotion) return;
    measure();
    const stage = stageRef.current;
    if (!stage || typeof ResizeObserver === "undefined") {
      window.addEventListener("resize", measure);
      return () => window.removeEventListener("resize", measure);
    }
    const observer = new ResizeObserver(measure);
    observer.observe(stage);
    return () => observer.disconnect();
  }, [measure, reduceMotion]);

  const x = useTransform(progress, [0, 1], [0, -panDistance]);

  if (reduceMotion) {
    return (
      <section aria-label={label} className="border-y border-border">
        {points.map((point) => (
          <StaticFrame
            key={point.id}
            point={point}
            image={image}
            imageAlt={imageAlt}
          />
        ))}
      </section>
    );
  }

  return (
    <section
      ref={trackRef}
      aria-label={label}
      // One viewport of scroll per point, plus a lead-in so the first point is
      // readable before the pan starts moving under it.
      style={{ height: `${points.length * 85 + 15}svh` }}
      className="relative border-y border-border"
    >
      <div
        ref={stageRef}
        className="sticky top-0 h-[100svh] overflow-hidden bg-[color:var(--teal-900)]"
      >
        <motion.div
          style={{ x, width: `${PANORAMA_ASPECT * 100}svh` }}
          className="absolute inset-y-0 left-0 will-change-transform"
        >
          <Image
            src={image}
            alt={imageAlt}
            fill
            sizes="400vw"
            priority
            className="object-cover"
          />
        </motion.div>

        {/* Two-part scrim. The vertical pass keeps the base dark enough for
            type; the horizontal pass weights the left, where the copy column
            sits, so a headline never lands on a bright patch of water as the
            panorama travels underneath it. */}
        <div
          aria-hidden
          className="absolute inset-0 bg-[linear-gradient(to_top,rgb(4_32_38/0.94)_0%,rgb(4_32_38/0.82)_30%,rgb(4_32_38/0.42)_60%,rgb(4_32_38/0.16)_100%)]"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-[linear-gradient(to_right,rgb(4_32_38/0.72)_0%,rgb(4_32_38/0.40)_38%,transparent_70%)]"
        />

        <div className="absolute inset-0 flex items-end pb-14 md:pb-20">
          <Container>
            {/* Each point is absolutely positioned so they can crossfade in
                place, which means this box must reserve room for the TALLEST
                of them. Undersized, the longest point overflowed and its body
                copy ran straight through the progress rail below, reading as a
                strikethrough. Measured tallest copy: 319px at 390w, 233px at
                768w, 362px at 1440w — the display type scales up, so the
                desktop value is the largest. */}
            <div className="relative min-h-[21rem] max-w-2xl md:min-h-[16rem] lg:min-h-[24rem]">
              {points.map((point, index) => (
                <PointCopy
                  key={point.id}
                  point={point}
                  index={index}
                  total={points.length}
                  progress={progress}
                />
              ))}
            </div>
            <ProgressRail
              total={points.length}
              progress={progress}
              points={points}
            />
          </Container>
        </div>
      </div>

      {/* The pinned stage swaps its copy as you scroll, so every point is also
          exposed once here in full for assistive technology and crawlers. */}
      <div className="sr-only">
        {points.map((point) => (
          <article key={point.id}>
            <h2>{point.title}</h2>
            <p>{point.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function PointCopy({
  point,
  index,
  total,
  progress,
}: {
  point: PoolStoryPoint;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const slice = 1 / total;
  const start = index * slice;
  const inAt = start + slice * 0.16;
  const outAt = start + slice * 0.84;
  const end = start + slice;

  const opacity = useTransform(
    progress,
    [start, inAt, outAt, end],
    index === 0
      ? [1, 1, 1, 0]
      : index === total - 1
        ? [0, 1, 1, 1]
        : [0, 1, 1, 0],
  );
  const y = useTransform(progress, [start, inAt, outAt, end], [26, 0, 0, -22]);

  return (
    <motion.div
      style={{ opacity, y }}
      className="absolute inset-x-0 top-0"
      aria-hidden={index !== 0}
    >
      <TechnicalLabel className="text-[color:var(--aqua-400)]">
        {point.eyebrow}
      </TechnicalLabel>
      <h2 className="text-display mt-4 text-white">{point.title}</h2>
      <p className="text-body-large mt-5 max-w-xl text-white/85">
        {point.body}
      </p>
    </motion.div>
  );
}

/** Thin segmented rail showing which of the three points is live. */
function ProgressRail({
  total,
  progress,
  points,
}: {
  total: number;
  progress: MotionValue<number>;
  points: PoolStoryPoint[];
}) {
  return (
    <div aria-hidden className="mt-10 flex gap-2">
      {points.map((point, index) => (
        <RailSegment
          key={point.id}
          index={index}
          total={total}
          progress={progress}
        />
      ))}
    </div>
  );
}

function RailSegment({
  index,
  total,
  progress,
}: {
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const slice = 1 / total;
  const start = index * slice;
  const end = start + slice;
  const scaleX = useTransform(progress, [start, end], [0, 1], {
    clamp: true,
  });

  return (
    <div className="h-px w-12 bg-white/25 md:w-16">
      <motion.div
        style={{ scaleX, transformOrigin: "left" }}
        className="h-full bg-[color:var(--aqua-400)]"
      />
    </div>
  );
}

/** Reduced-motion fallback — one stacked frame per point, no pan. */
function StaticFrame({
  point,
  image,
  imageAlt,
}: {
  point: PoolStoryPoint;
  image: string;
  imageAlt: string;
}) {
  return (
    <section className="relative min-h-[68svh] overflow-hidden bg-[color:var(--teal-900)]">
      <Image
        src={image}
        alt={imageAlt}
        fill
        sizes="100vw"
        className="object-cover"
        style={{ objectPosition: `${point.focus * 100}% 50%` }}
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(to_top,rgb(4_32_38/0.94)_0%,rgb(4_32_38/0.82)_30%,rgb(4_32_38/0.42)_60%,rgb(4_32_38/0.16)_100%)]"
      />
      <div className="relative flex min-h-[68svh] items-end py-16">
        <Container>
          <div className="max-w-2xl">
            <TechnicalLabel className="text-[color:var(--aqua-400)]">
              {point.eyebrow}
            </TechnicalLabel>
            <h2 className="text-display mt-4 text-white">{point.title}</h2>
            <p className="text-body-large mt-5 max-w-xl text-white/85">
              {point.body}
            </p>
          </div>
        </Container>
      </div>
    </section>
  );
}
