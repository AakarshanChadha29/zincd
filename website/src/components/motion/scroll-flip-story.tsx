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

import { cn } from "@/lib/cn";
import { Container } from "@/components/layout/container";
import { TechnicalLabel } from "@/components/ui/technical-label";

export type StoryStage = {
  id: string;
  eyebrow: string;
  title: string;
  body: string;
  image: string;
  imageAlt: string;
};

function StagePanel({
  stage,
  index,
  total,
  progress,
  reduceMotion,
}: {
  stage: StoryStage;
  index: number;
  total: number;
  progress: MotionValue<number>;
  reduceMotion: boolean | null;
}) {
  const start = index / total;
  const mid = (index + 0.45) / total;
  const end = (index + 1) / total;

  const opacity = useTransform(progress, [start, mid, end], [0, 1, 0]);
  const rotateX = useTransform(progress, [start, mid, end], [18, 0, -14]);
  const y = useTransform(progress, [start, mid, end], [64, 0, -48]);
  const scale = useTransform(progress, [start, mid, end], [0.94, 1, 0.96]);

  if (reduceMotion) {
    return (
      <div className="relative overflow-hidden rounded-[var(--radius)] border border-border bg-surface shadow-[var(--shadow-2)]">
        <div className="relative aspect-[16/10] md:aspect-[21/9]">
          <Image
            src={stage.image}
            alt={stage.imageAlt}
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-[color:var(--teal-900)]/85 via-[color:var(--teal-900)]/25 to-transparent" />
        </div>
        <div className="absolute inset-x-0 bottom-0 p-6 md:p-10">
          <TechnicalLabel className="text-[color:var(--aqua-400)]">
            {stage.eyebrow}
          </TechnicalLabel>
          <h3 className="text-h1 mt-3 text-white">{stage.title}</h3>
          <p className="text-body-large mt-3 max-w-xl text-white/80">{stage.body}</p>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      style={{
        opacity,
        rotateX,
        y,
        scale,
        transformPerspective: 1200,
        transformOrigin: "center center",
      }}
      className="absolute inset-0 overflow-hidden rounded-[var(--radius)] border border-white/15 bg-[color:var(--teal-900)] shadow-[var(--shadow-2)] will-change-transform"
    >
      <div className="absolute inset-0">
        <Image
          src={stage.image}
          alt={stage.imageAlt}
          fill
          sizes="100vw"
          className="object-cover"
          priority={index === 0}
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-[color:var(--teal-900)]/90 via-[color:var(--teal-900)]/35 to-[color:var(--teal-900)]/10"
        />
        <div
          aria-hidden
          className="absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(ellipse at 30% 20%, rgb(72 209 204 / 0.25), transparent 55%)",
          }}
        />
      </div>
      <div className="absolute inset-x-0 bottom-0 p-6 md:p-10 lg:p-12">
        <TechnicalLabel className="text-[color:var(--aqua-400)]">
          {stage.eyebrow}
        </TechnicalLabel>
        <h3 className="text-h1 mt-3 max-w-2xl text-white">{stage.title}</h3>
        <p className="text-body-large mt-3 max-w-xl text-white/80">{stage.body}</p>
      </div>
      <span className="text-technical absolute top-5 right-5 text-white/50 md:top-8 md:right-8">
        {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
      </span>
    </motion.div>
  );
}

/**
 * Scroll-driven story: panels flip/fade as the user moves through a tall sticky stage.
 * Feels dimensional on phone and desktop without scrolljacking.
 */
export function ScrollFlipStory({
  stages,
  className,
}: {
  stages: StoryStage[];
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  if (stages.length === 0) return null;

  if (reduceMotion) {
    return (
      <section className={cn("border-y border-border bg-[color:var(--surface-muted)] py-16", className)}>
        <Container className="space-y-8">
          {stages.map((stage, index) => (
            <StagePanel
              key={stage.id}
              stage={stage}
              index={index}
              total={stages.length}
              progress={scrollYProgress}
              reduceMotion
            />
          ))}
        </Container>
      </section>
    );
  }

  return (
    <section
      ref={ref}
      className={cn("relative", className)}
      style={{ height: `${stages.length * 100}vh` }}
    >
      <div className="sticky top-0 flex h-[100svh] items-center overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(165deg, var(--pearl) 0%, color-mix(in oklab, var(--aqua-400) 12%, white) 42%, var(--pearl-deep) 100%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgb(12 31 36 / 0.06) 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />
        <Container className="relative w-full py-8">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-5xl sm:aspect-[16/10] md:aspect-[21/9]">
            {stages.map((stage, index) => (
              <StagePanel
                key={stage.id}
                stage={stage}
                index={index}
                total={stages.length}
                progress={scrollYProgress}
                reduceMotion={false}
              />
            ))}
          </div>
          <p className="text-small mt-5 text-center text-muted-foreground md:mt-6">
            Scroll to move through the water story
          </p>
        </Container>
      </div>
    </section>
  );
}
