"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useReducedMotion } from "motion/react";

import { cn } from "@/lib/cn";

export type HeroVideoClip = {
  src: string;
  poster: string;
};

type HeroVideoProps = {
  clips: HeroVideoClip[];
  className?: string;
  /** Seconds each clip stays visible before crossfade (multi-clip only). */
  intervalSec?: number;
};

/** iOS Safari needs muted/playsInline set as properties, not only JSX attrs. */
function armAutoplay(el: HTMLVideoElement) {
  el.muted = true;
  el.defaultMuted = true;
  el.playsInline = true;
  el.setAttribute("playsinline", "");
  el.setAttribute("webkit-playsinline", "");
  el.setAttribute("muted", "");
}

/**
 * Decorative full-bleed background video.
 * - One clip mounted at a time (iOS often blocks multi-video autoplay)
 * - Poster Image always underneath so mobile never goes black
 * - Falls back to still if autoplay is blocked (Low Power Mode, data saver)
 * - Still-only when prefers-reduced-motion is on
 */
export function HeroVideo({
  clips,
  className,
  intervalSec = 9,
}: HeroVideoProps) {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(0);
  const [playbackFailed, setPlaybackFailed] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const safeClips = clips.length > 0 ? clips : [];
  const clip = safeClips[active] ?? safeClips[0];

  useEffect(() => {
    if (reduceMotion || playbackFailed || safeClips.length < 2) return;
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % safeClips.length);
    }, intervalSec * 1000);
    return () => window.clearInterval(id);
  }, [reduceMotion, playbackFailed, safeClips.length, intervalSec]);

  useEffect(() => {
    if (reduceMotion || playbackFailed || !clip) return;
    const el = videoRef.current;
    if (!el) return;

    armAutoplay(el);

    const tryPlay = () => {
      void el.play().catch(() => {
        setPlaybackFailed(true);
      });
    };

    if (el.readyState >= 2) {
      tryPlay();
    } else {
      el.addEventListener("loadeddata", tryPlay, { once: true });
      el.addEventListener(
        "error",
        () => {
          setPlaybackFailed(true);
        },
        { once: true }
      );
    }

    return () => {
      el.removeEventListener("loadeddata", tryPlay);
    };
  }, [active, reduceMotion, playbackFailed, clip]);

  if (!clip) return null;

  if (reduceMotion || playbackFailed) {
    return (
      <div className={cn("absolute inset-0 overflow-hidden", className)} aria-hidden>
        <Image
          src={clip.poster}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)} aria-hidden>
      {/* Poster underlay — visible until the first decoded frame paints */}
      <Image
        src={clip.poster}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <video
        key={clip.src}
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        src={clip.src}
        poster={clip.poster}
        muted
        playsInline
        loop
        autoPlay
        preload="auto"
      />
    </div>
  );
}
