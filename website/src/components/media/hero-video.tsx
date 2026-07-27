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

/**
 * Decorative full-bleed background video.
 * - muted + playsInline for autoplay policies
 * - poster still when reduced-motion is preferred
 * - one active clip at a time with opacity crossfade when multiple clips
 */
export function HeroVideo({
  clips,
  className,
  intervalSec = 9,
}: HeroVideoProps) {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const safeClips = clips.length > 0 ? clips : [];

  useEffect(() => {
    if (reduceMotion || safeClips.length < 2) return;
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % safeClips.length);
    }, intervalSec * 1000);
    return () => window.clearInterval(id);
  }, [reduceMotion, safeClips.length, intervalSec]);

  useEffect(() => {
    if (reduceMotion) return;
    videoRefs.current.forEach((el, i) => {
      if (!el) return;
      if (i === active) {
        void el.play().catch(() => {
          /* autoplay blocked — poster still visible via attribute */
        });
      } else {
        el.pause();
      }
    });
  }, [active, reduceMotion]);

  if (safeClips.length === 0) return null;

  if (reduceMotion) {
    const poster = safeClips[0].poster;
    return (
      <div className={cn("absolute inset-0 overflow-hidden", className)} aria-hidden>
        <Image
          src={poster}
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
      {safeClips.map((clip, i) => (
        <video
          key={clip.src}
          ref={(el) => {
            videoRefs.current[i] = el;
          }}
          className={cn(
            "absolute inset-0 h-full w-full object-cover transition-opacity duration-[1200ms] ease-[var(--ease-out-premium)]",
            i === active ? "opacity-100" : "opacity-0"
          )}
          src={clip.src}
          poster={clip.poster}
          muted
          playsInline
          loop
          autoPlay={i === 0}
          preload={i === 0 ? "auto" : "metadata"}
        />
      ))}
    </div>
  );
}
