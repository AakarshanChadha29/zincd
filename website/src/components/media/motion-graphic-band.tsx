"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";
import Image from "next/image";

import { cn } from "@/lib/cn";
import { Container } from "@/components/layout/container";
import { TechnicalLabel } from "@/components/ui/technical-label";
import { Reveal } from "@/components/motion/reveal";

type MotionGraphicBandProps = {
  src: string;
  poster: string;
  eyebrow: string;
  title: string;
  body: string;
  className?: string;
  tone?: "deep" | "soft";
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
 * `playing` so mobile never shows a black plate.
 */
export function MotionGraphicBand({
  src,
  poster,
  eyebrow,
  title,
  body,
  className,
  tone = "deep",
}: MotionGraphicBandProps) {
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [inView, setInView] = useState(false);
  const [playbackFailed, setPlaybackFailed] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const showVideo = !reduceMotion && !playbackFailed;

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

    // `pause` drives the state so nothing is set synchronously in the effect.
    const onPlaying = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    el.addEventListener("playing", onPlaying);
    el.addEventListener("pause", onPause);

    const cleanup = () => {
      el.removeEventListener("playing", onPlaying);
      el.removeEventListener("pause", onPause);
    };

    if (!inView) {
      el.pause();
      return cleanup;
    }

    void el.play().catch(() => setPlaybackFailed(true));

    return cleanup;
  }, [inView, showVideo, src]);

  return (
    <section
      ref={sectionRef}
      className={cn(
        "relative flex min-h-[min(70vh,32rem)] items-end overflow-hidden border-y border-border",
        className
      )}
    >
      <Image
        src={poster}
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
        aria-hidden
      />
      {showVideo ? (
        <video
          ref={videoRef}
          className={cn(
            "absolute inset-0 h-full w-full object-cover transition-opacity duration-500",
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
      <div
        aria-hidden
        className={cn(
          "absolute inset-0",
          tone === "deep" ? "hero-scrim" : "bg-[color:var(--pearl)]/55"
        )}
      />
      <div aria-hidden className="absolute inset-x-0 bottom-0 h-40 hero-scrim-bottom" />
      <Container className="relative pb-14 pt-24 md:pb-20">
        <Reveal>
          <div className="max-w-xl space-y-4">
            <TechnicalLabel
              className={tone === "deep" ? "text-[color:var(--aqua-400)]" : undefined}
            >
              {eyebrow}
            </TechnicalLabel>
            <h2
              className={cn(
                "text-h1",
                tone === "deep" ? "text-white" : "text-foreground"
              )}
            >
              {title}
            </h2>
            <p
              className={cn(
                "text-body-large max-w-lg",
                tone === "deep" ? "text-white/80" : "text-muted-foreground"
              )}
            >
              {body}
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
