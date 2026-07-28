"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

import { cn } from "@/lib/cn";

const ChamberStageScene = dynamic(() => import("./chamber-stage-scene"), {
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

/**
 * Premium chamber experience — procedural stainless + ion field.
 * Falls back to the approved product photograph. Pointer-reactive on desktop;
 * lighter particle count on phones.
 */
export function ChamberStage({ className }: { className?: string }) {
  const hostRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [inView, setInView] = useState(false);
  const [narrow, setNarrow] = useState(false);

  useEffect(() => {
    const reduced = matchMedia("(prefers-reduced-motion: reduce)");
    const narrowMq = matchMedia("(max-width: 768px)");
    const decide = () => {
      setNarrow(narrowMq.matches);
      setEnabled(!reduced.matches && canRunWebGL());
    };
    decide();
    reduced.addEventListener("change", decide);
    narrowMq.addEventListener("change", decide);
    return () => {
      reduced.removeEventListener("change", decide);
      narrowMq.removeEventListener("change", decide);
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const el = hostRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => setInView(entries.some((e) => e.isIntersecting)),
      { rootMargin: "180px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [enabled]);

  const show3D = enabled && inView;

  return (
    <div
      ref={hostRef}
      className={cn(
        "relative aspect-[4/5] w-full overflow-hidden rounded-[var(--radius)] sm:aspect-[5/4] lg:aspect-[16/11]",
        className
      )}
    >
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 40%, rgb(245 250 251 / 0.95), rgb(232 243 244 / 0.9) 55%, rgb(201 221 225 / 0.85))",
        }}
      />
      {show3D ? (
        <>
          <div className="absolute inset-0 cursor-grab active:cursor-grabbing">
            <ChamberStageScene particleCount={narrow ? 70 : 160} />
          </div>
          <p className="sr-only">
            An interactive visualization of the Zinc&rsquo;d copper–silver–zinc
            ionization chamber. Move your pointer or finger to tilt the scene. A
            product photograph is shown when 3D is unavailable.
          </p>
          <span
            aria-hidden
            className="text-technical pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2 rounded-[var(--radius-control)] border border-border bg-[color:var(--surface)]/90 px-2.5 py-1 text-[0.65rem] text-muted-foreground backdrop-blur-sm"
          >
            {narrow ? "Tilt with touch" : "Move to tilt · Cu · Ag · Zn"}
          </span>
        </>
      ) : (
        <Image
          src="/img/product/chamber-premium.png"
          alt="The Zinc'd water chamber: a polished stainless steel ionization cylinder with red and amber anode caps."
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-contain p-4 md:p-6"
        />
      )}
    </div>
  );
}
