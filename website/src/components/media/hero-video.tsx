"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useReducedMotion } from "motion/react";
import { Play } from "lucide-react";

import { cn } from "@/lib/cn";

export type HeroVideoClip = {
  /** Omit for a still-only hero (poster Image, no <video>). */
  src?: string;
  poster: string;
};

type HeroVideoProps = {
  clips: HeroVideoClip[];
  className?: string;
  /** Seconds each clip stays visible before swap (multi-clip only). */
  intervalSec?: number;
  /** Slow caustic overlay so still water still reads as moving. */
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
 * Full-bleed hero media — mobile-first.
 *
 * Critical: the <video> stays opacity-0 until `playing`. Otherwise Safari/Chrome
 * on phones often paint a black rectangle over the poster and look “empty”.
 * Only one clip is mounted at a time. On narrow viewports we rotate posters
 * even when video is blocked (Low Power Mode / data saver).
 *
 * If autoplay is blocked, a tap/click retries playback instead of freezing
 * forever on the poster.
 */
export function HeroVideo({
  clips,
  className,
  intervalSec = 8,
  waterMotion = false,
}: HeroVideoProps) {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(0);
  const [narrow, setNarrow] = useState(false);
  const [needsGesture, setNeedsGesture] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const safeClips = clips.length > 0 ? clips : [];
  // Phones: fewer sources = faster first paint
  const pool = narrow && safeClips.length > 2 ? safeClips.slice(0, 2) : safeClips;
  const clip = pool[active % pool.length] ?? safeClips[0];

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    const sync = () => setNarrow(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (reduceMotion || pool.length < 2) return;
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % pool.length);
      setIsPlaying(false);
      setNeedsGesture(false);
    }, intervalSec * 1000);
    return () => window.clearInterval(id);
  }, [reduceMotion, pool.length, intervalSec]);

  useEffect(() => {
    if (reduceMotion || !clip) return;
    const el = videoRef.current;
    if (!el) return;

    armAutoplay(el);
    setIsPlaying(false);
    setNeedsGesture(false);

    let cancelled = false;

    const onPlaying = () => {
      if (!cancelled) {
        setIsPlaying(true);
        setNeedsGesture(false);
      }
    };
    const onError = () => {
      if (!cancelled) setNeedsGesture(true);
    };

    el.addEventListener("playing", onPlaying);
    el.addEventListener("error", onError);

    const tryPlay = () => {
      void el.play().catch(() => {
        if (!cancelled) setNeedsGesture(true);
      });
    };

    if (el.readyState >= 2) tryPlay();
    else el.addEventListener("loadeddata", tryPlay, { once: true });

    const timeout = window.setTimeout(() => {
      if (!cancelled && el.paused) setNeedsGesture(true);
    }, 2500);

    return () => {
      cancelled = true;
      window.clearTimeout(timeout);
      el.removeEventListener("playing", onPlaying);
      el.removeEventListener("error", onError);
      el.removeEventListener("loadeddata", tryPlay);
    };
  }, [active, reduceMotion, clip]);

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

  if (!clip) return null;

  const stillOnly = Boolean(reduceMotion) || !clip.src;

  return (
    <div
      className={cn(
        "absolute inset-0 overflow-hidden bg-[color:var(--teal-900)]",
        className
      )}
      aria-hidden={stillOnly || !needsGesture ? true : undefined}
    >
      <Image
        src={clip.poster}
        alt=""
        fill
        priority
        sizes="100vw"
        className="pointer-events-none object-cover"
      />
      {!stillOnly && clip.src ? (
        <video
          key={clip.src}
          ref={videoRef}
          className={cn(
            "pointer-events-none absolute inset-0 h-full w-full object-cover transition-opacity duration-500",
            isPlaying ? "opacity-100" : "opacity-0"
          )}
          src={clip.src}
          poster={clip.poster}
          muted
          playsInline
          loop
          autoPlay
          preload="metadata"
          controls={false}
          disablePictureInPicture
        />
      ) : null}
      {waterMotion && !reduceMotion ? (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 pool-caustics pool-caustics-motion mix-blend-screen"
        />
      ) : null}
      {!stillOnly && needsGesture ? (
        <button
          type="button"
          onClick={retryPlay}
          className="absolute bottom-5 right-5 z-[2] inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/45 px-4 py-2 text-sm font-medium text-white backdrop-blur-md transition hover:bg-black/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
          aria-label="Play background video"
        >
          <Play className="size-4 fill-current" aria-hidden />
          Play film
        </button>
      ) : null}
    </div>
  );
}
