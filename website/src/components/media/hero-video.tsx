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
  /** Seconds each clip stays visible before swap (multi-clip only). */
  intervalSec?: number;
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
 */
export function HeroVideo({
  clips,
  className,
  intervalSec = 8,
}: HeroVideoProps) {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(0);
  const [narrow, setNarrow] = useState(false);
  const [playbackFailed, setPlaybackFailed] = useState(false);
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
    setActive(0);
    setIsPlaying(false);
  }, [narrow]);

  useEffect(() => {
    if (reduceMotion || pool.length < 2) return;
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % pool.length);
      setIsPlaying(false);
    }, intervalSec * 1000);
    return () => window.clearInterval(id);
  }, [reduceMotion, pool.length, intervalSec]);

  useEffect(() => {
    if (reduceMotion || playbackFailed || !clip) return;
    const el = videoRef.current;
    if (!el) return;

    armAutoplay(el);
    setIsPlaying(false);

    let cancelled = false;

    const onPlaying = () => {
      if (!cancelled) setIsPlaying(true);
    };
    const onError = () => {
      if (!cancelled) setPlaybackFailed(true);
    };

    el.addEventListener("playing", onPlaying);
    el.addEventListener("error", onError);

    const tryPlay = () => {
      void el.play().catch(() => {
        if (!cancelled) setPlaybackFailed(true);
      });
    };

    if (el.readyState >= 2) tryPlay();
    else el.addEventListener("loadeddata", tryPlay, { once: true });

    // If nothing starts within 2.5s, keep the poster visible permanently
    const timeout = window.setTimeout(() => {
      if (!cancelled && el.paused) setPlaybackFailed(true);
    }, 2500);

    return () => {
      cancelled = true;
      window.clearTimeout(timeout);
      el.removeEventListener("playing", onPlaying);
      el.removeEventListener("error", onError);
      el.removeEventListener("loadeddata", tryPlay);
    };
  }, [active, reduceMotion, playbackFailed, clip]);

  if (!clip) return null;

  const stillOnly = Boolean(reduceMotion) || playbackFailed;

  return (
    <div className={cn("absolute inset-0 overflow-hidden bg-[color:var(--teal-900)]", className)} aria-hidden>
      <Image
        src={clip.poster}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      {!stillOnly ? (
        <video
          key={clip.src}
          ref={videoRef}
          className={cn(
            "absolute inset-0 h-full w-full object-cover transition-opacity duration-500",
            isPlaying ? "opacity-100" : "opacity-0"
          )}
          src={clip.src}
          poster={clip.poster}
          muted
          playsInline
          loop
          autoPlay
          preload="auto"
          controls={false}
          disablePictureInPicture
        />
      ) : null}
    </div>
  );
}
