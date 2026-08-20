"use client";

import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";
import Image from "next/image";
import { Play } from "lucide-react";

import { cn } from "@/lib/cn";
import { Container } from "@/components/layout/container";
import { TechnicalLabel } from "@/components/ui/technical-label";
import { Reveal } from "@/components/motion/reveal";

type MotionGraphicBandProps = {
  src: string;
  poster: string;
  eyebrow?: string;
  title?: string;
  body?: string;
  children?: ReactNode;
  className?: string;
  id?: string;
  tone?: "deep" | "soft";
  /** Slow caustic overlay so still water in the film still reads as moving. */
  waterMotion?: boolean;
};

function armAutoplay(el: HTMLVideoElement) {
  el.muted = true;
  el.defaultMuted = true;
  el.volume = 0;
  el.playsInline = true;
  el.setAttribute("playsinline", "");
  el.setAttribute("webkit-playsinline", "");
  el.setAttribute("muted", "");
}

/**
 * Full-bleed motion band. Poster is always visible; video fades in only after
 * `playing` so mobile never shows a black plate. Tap-to-play recovers when
 * autoplay is blocked.
 */
export function MotionGraphicBand({
  src,
  poster,
  eyebrow,
  title,
  body,
  children,
  className,
  id,
  tone = "deep",
  waterMotion = false,
}: MotionGraphicBandProps) {
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [inView, setInView] = useState(false);
  const [needsGesture, setNeedsGesture] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const showVideo = !reduceMotion;

  useEffect(() => {
    const node = sectionRef.current;
    if (!node || reduceMotion) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin: "80px 0px", threshold: 0.12 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [reduceMotion]);

  useEffect(() => {
    if (!showVideo) return;
    const el = videoRef.current;
    if (!el) return;
    armAutoplay(el);

    const onPlaying = () => {
      setIsPlaying(true);
      setNeedsGesture(false);
    };
    const onPause = () => setIsPlaying(false);
    const onError = () => setNeedsGesture(true);
    el.addEventListener("playing", onPlaying);
    el.addEventListener("pause", onPause);
    el.addEventListener("error", onError);

    const cleanup = () => {
      el.removeEventListener("playing", onPlaying);
      el.removeEventListener("pause", onPause);
      el.removeEventListener("error", onError);
    };

    if (!inView) {
      el.pause();
      return cleanup;
    }

    void el.play().catch(() => setNeedsGesture(true));

    return cleanup;
  }, [inView, showVideo, src]);

  const retryPlay = () => {
    const el = videoRef.current;
    if (!el) return;
    armAutoplay(el);
    void el.play().then(
      () => {
        setIsPlaying(true);
        setNeedsGesture(false);
      },
      () => setNeedsGesture(true)
    );
  };

  return (
    <section
      id={id}
      ref={sectionRef}
      className={cn(
        // Shorter on phones. At 70vh with the copy bottom-aligned, the abstract
        // footage above it read as dead space on a narrow screen rather than as
        // a deliberate cinematic band.
        "relative flex min-h-[min(52vh,22rem)] items-end overflow-hidden border-y border-border md:min-h-[min(70vh,32rem)]",
        children && "min-h-0 items-stretch md:min-h-0",
        className
      )}
    >
      <Image
        src={poster}
        alt=""
        fill
        sizes="100vw"
        className="pointer-events-none object-cover"
        aria-hidden
      />
      {showVideo ? (
        <video
          ref={videoRef}
          className={cn(
            "pointer-events-none absolute inset-0 h-full w-full object-cover transition-opacity duration-500",
            isPlaying ? "opacity-100" : "opacity-0"
          )}
          src={src}
          poster={poster}
          muted
          playsInline
          loop
          preload="metadata"
          aria-hidden
        />
      ) : null}
      {waterMotion && !reduceMotion ? (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 pool-caustics pool-caustics-motion mix-blend-screen"
        />
      ) : null}
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-0",
          tone === "deep" ? "hero-scrim" : "bg-[color:var(--pearl)]/55"
        )}
      />
      {children && tone === "deep" ? (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[color:var(--teal-900)]/40"
        />
      ) : null}
      {!children ? (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-10 hero-scrim-bottom"
        />
      ) : null}
      {showVideo && needsGesture ? (
        <button
          type="button"
          onClick={retryPlay}
          className="absolute bottom-5 right-5 z-[3] inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/45 px-4 py-2 text-sm font-medium text-white backdrop-blur-md transition hover:bg-black/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
          aria-label="Play motion graphic"
        >
          <Play className="size-4 fill-current" aria-hidden />
          Play film
        </button>
      ) : null}
      <Container
        className={cn(
          "relative z-[2]",
          children ? "py-16 md:py-24" : "pb-10 pt-16 md:pb-20 md:pt-24"
        )}
      >
        {children ? (
          children
        ) : (
          <Reveal>
            <div className="max-w-xl space-y-4">
              {eyebrow ? (
                <TechnicalLabel
                  className={tone === "deep" ? "text-[color:var(--aqua-400)]" : undefined}
                >
                  {eyebrow}
                </TechnicalLabel>
              ) : null}
              {title ? (
                <h2
                  className={cn(
                    "text-h1",
                    tone === "deep" ? "text-white" : "text-foreground"
                  )}
                >
                  {title}
                </h2>
              ) : null}
              {body ? (
                <p
                  className={cn(
                    "text-body-large max-w-lg",
                    tone === "deep" ? "text-white/80" : "text-muted-foreground"
                  )}
                >
                  {body}
                </p>
              ) : null}
            </div>
          </Reveal>
        )}
      </Container>
    </section>
  );
}
