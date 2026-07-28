"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

/**
 * Gate + fallback for the 360° product spin.
 *
 * Same discipline as `ion-field-stage.tsx`: the static product photograph is
 * the default and always renders first; WebGL and the 1.2 MB GLB load only
 * after mount, only when the device and the user's preferences allow, and only
 * when the component is near the viewport. A fixed aspect box keeps CLS at 0
 * across the swap.
 */

const ProductSpinScene = dynamic(() => import("./product-spin-scene"), {
  ssr: false,
  loading: () => null,
});

function canRunWebGL(): boolean {
  try {
    const canvas = document.createElement("canvas");
    return Boolean(canvas.getContext("webgl2") ?? canvas.getContext("webgl"));
  } catch {
    return false;
  }
}

type NavigatorWithMemory = Navigator & { deviceMemory?: number };

function deviceCanAfford3D(): boolean {
  const nav = navigator as NavigatorWithMemory;
  // Keep 3D on phones — only skip extremely constrained devices.
  if (typeof nav.deviceMemory === "number" && nav.deviceMemory <= 2) return false;
  return true;
}

export function ProductSpin({ className }: { className?: string }) {
  const hostRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const reduced = matchMedia("(prefers-reduced-motion: reduce)");
    const decide = () =>
      setEnabled(!reduced.matches && canRunWebGL() && deviceCanAfford3D());
    decide();
    reduced.addEventListener("change", decide);
    return () => reduced.removeEventListener("change", decide);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const el = hostRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => setInView(entries.some((e) => e.isIntersecting)),
      { rootMargin: "200px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [enabled]);

  const show3D = enabled && inView;

  return (
    <div
      ref={hostRef}
      className={`relative aspect-[3/4] w-full overflow-hidden rounded-[var(--radius)] ${className ?? ""}`}
    >
      {show3D ? (
        <>
          <div
            aria-hidden
            className="absolute inset-0 cursor-grab active:cursor-grabbing"
          >
            <ProductSpinScene />
          </div>
          <p className="sr-only">
            An interactive 360-degree view of the Zinc&rsquo;d water chamber. A
            still photograph of the same unit is shown when 3D is unavailable.
          </p>
          <span
            aria-hidden
            className="text-technical pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2 rounded-[var(--radius-control)] border border-border bg-[color:var(--surface-elevated)]/85 px-2.5 py-1 text-[0.65rem] text-muted-foreground backdrop-blur-sm"
          >
            Drag to rotate
          </span>
        </>
      ) : (
        <Image
          src="/img/product-chamber.png"
          alt="The Zinc'd water chamber: a stainless steel cylinder with two capped ports, marked with the copper, silver and zinc badges."
          fill
          sizes="(min-width: 1024px) 40vw, 100vw"
          className="object-contain"
        />
      )}
    </div>
  );
}
