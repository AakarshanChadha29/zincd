"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "motion/react";

import { cn } from "@/lib/cn";

type LivingFieldProps = {
  className?: string;
  /** denser = more particles (desktop). */
  density?: "sparse" | "medium" | "rich";
  tone?: "pearl" | "deep";
};

/**
 * Interactive atmospheric canvas — soft mineral “ions” that drift and
 * parallax with the pointer. CSS/canvas only (no WebGL) so it stays smooth
 * behind content on phones and desktops.
 */
export function LivingField({
  className,
  density = "medium",
  tone = "pearl",
}: LivingFieldProps) {
  const reduceMotion = useReducedMotion();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reduceMotion) return;
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const count =
      density === "rich" ? 48 : density === "medium" ? 32 : 18;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0;
    let h = 0;
    let raf = 0;
    let pointerX = 0.5;
    let pointerY = 0.5;
    let targetX = 0.5;
    let targetY = 0.5;

    type Particle = {
      x: number;
      y: number;
      r: number;
      vx: number;
      vy: number;
      hue: number;
      a: number;
    };

    let particles: Particle[] = [];

    const resize = () => {
      const rect = wrap.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = Math.max(1, Math.floor(w * dpr));
      canvas.height = Math.max(1, Math.floor(h * dpr));
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: 1.2 + Math.random() * 2.8,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        hue: [32, 190, 168][Math.floor(Math.random() * 3)],
        a: 0.15 + Math.random() * 0.35,
      }));
    };

    const onPointer = (e: PointerEvent) => {
      const rect = wrap.getBoundingClientRect();
      targetX = (e.clientX - rect.left) / Math.max(rect.width, 1);
      targetY = (e.clientY - rect.top) / Math.max(rect.height, 1);
    };

    const draw = () => {
      pointerX += (targetX - pointerX) * 0.06;
      pointerY += (targetY - pointerY) * 0.06;
      ctx.clearRect(0, 0, w, h);

      const ox = (pointerX - 0.5) * 28;
      const oy = (pointerY - 0.5) * 20;

      // Soft wash
      const g = ctx.createRadialGradient(
        w * pointerX,
        h * pointerY,
        0,
        w * 0.5,
        h * 0.5,
        Math.max(w, h) * 0.7
      );
      if (tone === "deep") {
        g.addColorStop(0, "rgba(45, 212, 191, 0.14)");
        g.addColorStop(0.55, "rgba(10, 61, 66, 0.06)");
        g.addColorStop(1, "rgba(10, 61, 66, 0)");
      } else {
        g.addColorStop(0, "rgba(45, 212, 191, 0.16)");
        g.addColorStop(0.5, "rgba(20, 184, 166, 0.06)");
        g.addColorStop(1, "rgba(245, 250, 251, 0)");
      }
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);

      for (const p of particles) {
        p.x += p.vx + (pointerX - 0.5) * 0.15;
        p.y += p.vy + (pointerY - 0.5) * 0.1;
        if (p.x < -20) p.x = w + 20;
        if (p.x > w + 20) p.x = -20;
        if (p.y < -20) p.y = h + 20;
        if (p.y > h + 20) p.y = -20;

        ctx.beginPath();
        ctx.arc(p.x + ox * p.a, p.y + oy * p.a, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 70%, 45%, ${p.a})`;
        ctx.fill();
      }

      // Subtle connecting lines near pointer
      ctx.strokeStyle =
        tone === "deep" ? "rgba(45, 212, 191, 0.08)" : "rgba(13, 115, 119, 0.08)";
      ctx.lineWidth = 1;
      const px = pointerX * w;
      const py = pointerY * h;
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i];
        const dx = a.x - px;
        const dy = a.y - py;
        if (dx * dx + dy * dy < 140 * 140) {
          ctx.beginPath();
          ctx.moveTo(px, py);
          ctx.lineTo(a.x, a.y);
          ctx.stroke();
        }
      }

      raf = requestAnimationFrame(draw);
    };

    resize();
    draw();
    wrap.addEventListener("pointermove", onPointer, { passive: true });
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(raf);
      wrap.removeEventListener("pointermove", onPointer);
      window.removeEventListener("resize", resize);
    };
  }, [reduceMotion, density, tone]);

  if (reduceMotion) {
    return (
      <div
        aria-hidden
        className={cn("pointer-events-none absolute inset-0", className)}
        style={{
          background:
            tone === "deep"
              ? "radial-gradient(ellipse at 40% 30%, rgb(45 212 191 / 0.12), transparent 55%)"
              : "radial-gradient(ellipse at 50% 20%, rgb(45 212 191 / 0.1), transparent 50%)",
        }}
      />
    );
  }

  return (
    <div
      ref={wrapRef}
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
    </div>
  );
}
