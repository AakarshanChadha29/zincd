"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

import { IonizationCell } from "./ionization-cell";

/**
 * Decides whether the hero shows the WebGL ion field or the static schematic,
 * and never lets the decision cost anything on the critical path.
 *
 * The static SVG is the default and always renders first. WebGL is loaded only
 * after the component mounts, only if the device and the user's preferences
 * both allow it, and only when the hero is actually near the viewport. If
 * anything is missing — reduced motion, no WebGL, a modest device — the
 * schematic simply stays. It is a genuine fallback, not a placeholder: it is
 * the same illustration the page shipped with, and it explains more than the
 * 3D does.
 *
 * Sizing is fixed by an aspect-ratio box so swapping one for the other cannot
 * shift layout (measured CLS stays 0).
 */

const IonFieldScene = dynamic(() => import("./ion-field-scene"), {
  ssr: false,
  loading: () => null,
});

function canRunWebGL(): boolean {
  try {
    const canvas = document.createElement("canvas");
    return Boolean(
      canvas.getContext("webgl2") ?? canvas.getContext("webgl"),
    );
  } catch {
    return false;
  }
}

type NavigatorWithMemory = Navigator & { deviceMemory?: number };

/**
 * Skip WebGL on devices likely to struggle with it. `motion-system.md` calls
 * for exactly this on mobile: "Prefer static or CSS frame-swap; skip WebGL
 * under memory/GPU heuristics."
 */
function deviceCanAfford3D(): boolean {
  const nav = navigator as NavigatorWithMemory;
  if (typeof nav.deviceMemory === "number" && nav.deviceMemory <= 4) return false;
  if (nav.hardwareConcurrency && nav.hardwareConcurrency <= 4) return false;
  // Touch-primary devices below tablet width get the schematic.
  const coarse = matchMedia("(pointer: coarse)").matches;
  if (coarse && window.innerWidth < 1024) return false;
  return true;
}

export function IonFieldStage() {
  const hostRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const reduced = matchMedia("(prefers-reduced-motion: reduce)");

    const decide = () => {
      setEnabled(!reduced.matches && canRunWebGL() && deviceCanAfford3D());
    };
    decide();

    // Honour a mid-session change to the OS reduced-motion setting.
    reduced.addEventListener("change", decide);
    return () => reduced.removeEventListener("change", decide);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const el = hostRef.current;
    if (!el) return;

    // Only render frames while the hero is on screen; stop when it isn't.
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
      className="relative aspect-[7/6] w-full overflow-hidden rounded-[var(--radius)]"
    >
      {show3D ? (
        <>
          <div aria-hidden className="absolute inset-0 ion-chamber" />
          {/* `cursor` inherits, so the canvas picks these up without any
              imperative style mutation. */}
          <div
            aria-hidden
            className="absolute inset-0 cursor-grab active:cursor-grabbing"
          >
            <IonFieldScene />
          </div>
          <p className="sr-only">
            An animated abstract visualisation of copper, silver, and zinc ions
            moving between three electrode plates. Decorative; the same
            information is given in the text on this page.
          </p>
          <span
            aria-hidden
            className="text-technical pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2 rounded-[var(--radius-control)] border border-white/15 bg-[color:var(--blue-900)]/50 px-2.5 py-1 text-[0.65rem] text-white/70 backdrop-blur-sm"
          >
            Drag to orbit
          </span>
        </>
      ) : (
        <div className="flex h-full w-full items-center justify-center">
          <IonizationCell />
        </div>
      )}
    </div>
  );
}
