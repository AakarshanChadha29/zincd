import { cn } from "@/lib/cn";

/**
 * Decorative electrode-and-ion motif for section corners and bands.
 * Purely ornamental; hidden from assistive tech.
 */
export function IonMotif({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 320"
      aria-hidden
      className={cn("h-auto w-auto", className)}
      fill="none"
    >
      {/* three electrode plates */}
      {[70, 120, 170].map((x) => (
        <rect
          key={x}
          x={x}
          y="60"
          width="14"
          height="200"
          rx="4"
          stroke="currentColor"
          strokeWidth="2"
        />
      ))}
      {/* ion orbits */}
      {[
        { cx: 100, cy: 130, r: 5 },
        { cx: 150, cy: 180, r: 5 },
        { cx: 100, cy: 210, r: 4 },
        { cx: 150, cy: 110, r: 4 },
        { cx: 125, cy: 250, r: 3 },
      ].map((c, i) => (
        <circle
          key={i}
          cx={c.cx}
          cy={c.cy}
          r={c.r}
          fill="currentColor"
          className="ion-pulse"
          style={{ animationDelay: `${i * 0.5}s` }}
        />
      ))}
      {/* flow lines */}
      {[90, 160, 230].map((y, i) => (
        <path
          key={y}
          d={`M40 ${y} C 90 ${y - 12}, 160 ${y + 12}, 210 ${y}`}
          stroke="currentColor"
          strokeWidth="1.5"
          strokeOpacity="0.6"
          className="flow-line"
          style={{ animationDelay: `${i * 0.3}s` }}
        />
      ))}
    </svg>
  );
}
