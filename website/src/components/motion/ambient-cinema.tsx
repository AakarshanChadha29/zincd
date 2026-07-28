"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useReducedMotion } from "motion/react";

import { cn } from "@/lib/cn";
import { LivingField } from "@/components/motion/living-field";

type AmbientCinemaProps = {
  src: string;
  poster: string;
  className?: string;
  /** Overlay pointer-reactive ion field on top of the film. */
  interactive?: boolean;
  density?: "sparse" | "medium" | "rich";
  tone?: "pearl" | "deep";
};

/**
 * Full-bleed cinematic ambient layer for desktop/mobile sections.
 * Video fades in only after `playing` so phones never show black plates.
 * Optional LivingField adds pointer interactivity on top.
 */
export function AmbientCinema({
  src,
  poster,
  className,
  interactive = true,
  density = "medium",
  tone = "pearl",
}: AmbientCinemaProps) {
  const reduceMotion = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const hostRef = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const node = hostRef.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      ([e]) => setInView(e.isIntersecting),
      { rootMargin: "100px", threshold: 0.08 }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (reduceMotion || failed) return;
    const el = videoRef.current;
    if (!el) return;
    el.muted = true;
    el.defaultMuted = true;
    el.volume = 0;
    el.playsInline = true;
    el.setAttribute("playsinline", "");
    el.setAttribute("webkit-playsinline", "");

    // Drive `isPlaying` from media events rather than setting it inside the
    // effect: calling `el.pause()` fires `pause`, so the handler updates state
    // for us and there is no synchronous setState cascading a re-render.
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

    void el.play().catch(() => setFailed(true));
    return cleanup;
  }, [inView, reduceMotion, failed, src]);

  return (
    <div
      ref={hostRef}
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      <Image src={poster} alt="" fill sizes="100vw" className="object-cover" />
      {!reduceMotion && !failed ? (
        <video
          ref={videoRef}
          className={cn(
            "absolute inset-0 h-full w-full object-cover transition-opacity duration-700",
            isPlaying ? "opacity-100" : "opacity-0"
          )}
          src={src}
          poster={poster}
          muted
          playsInline
          loop
          preload="metadata"
        />
      ) : null}
      <div
        className={cn(
          "absolute inset-0",
          tone === "deep"
            ? "bg-[color:var(--teal-900)]/45"
            : "bg-[color:var(--pearl)]/55"
        )}
      />
      {interactive ? (
        <LivingField density={density} tone={tone} className="opacity-90" />
      ) : null}
    </div>
  );
}
