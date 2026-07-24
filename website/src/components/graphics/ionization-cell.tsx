import { cn } from "@/lib/cn";

/**
 * Engineered cross-section of the Cu–Ag–Zn ionization cell.
 * Original schematic illustration — decorative and educational, never required
 * to read the page. Animation is pure CSS and disabled under reduced-motion.
 */
export function IonizationCell({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 420 360"
      role="img"
      aria-label="Schematic cross-section of the Zinc'd copper–silver–zinc ionization cell with water flowing across the electrodes."
      className={cn("h-auto w-full", className)}
    >
      <defs>
        <linearGradient id="cellWater" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#22d3ee" stopOpacity="0.16" />
          <stop offset="1" stopColor="#0e7490" stopOpacity="0.28" />
        </linearGradient>
        <linearGradient id="steel" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#e2e8f0" />
          <stop offset="1" stopColor="#94a3b8" />
        </linearGradient>
        <linearGradient id="copperG" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#c2734a" />
          <stop offset="1" stopColor="#9a5433" />
        </linearGradient>
        <linearGradient id="silverG" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#e5e9ef" />
          <stop offset="1" stopColor="#aab4c2" />
        </linearGradient>
        <linearGradient id="zincG" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#8fa3b8" />
          <stop offset="1" stopColor="#5f7386" />
        </linearGradient>
      </defs>

      {/* Housing */}
      <rect x="40" y="52" width="340" height="256" rx="16" fill="url(#cellWater)" stroke="url(#steel)" strokeWidth="3" />
      <rect x="40" y="52" width="340" height="256" rx="16" fill="none" stroke="#0b1f33" strokeOpacity="0.08" strokeWidth="1" />

      {/* Inlet / outlet ports */}
      <rect x="16" y="150" width="26" height="60" rx="6" fill="url(#steel)" stroke="#0b1f33" strokeOpacity="0.15" />
      <rect x="378" y="150" width="26" height="60" rx="6" fill="url(#steel)" stroke="#0b1f33" strokeOpacity="0.15" />

      {/* Water-flow lines across the cell */}
      {[96, 132, 168, 204, 240, 276].map((y, i) => (
        <path
          key={y}
          d={`M56 ${y} C 150 ${y - 10}, 270 ${y + 10}, 364 ${y}`}
          fill="none"
          stroke="#0e7490"
          strokeOpacity="0.5"
          strokeWidth="2"
          className="flow-line"
          style={{ animationDelay: `${i * 0.28}s` }}
        />
      ))}

      {/* Three electrode plates: Copper, Silver, Zinc */}
      {[
        { x: 138, fill: "url(#copperG)", label: "Cu" },
        { x: 198, fill: "url(#silverG)", label: "Ag" },
        { x: 258, fill: "url(#zincG)", label: "Zn" },
      ].map((e) => (
        <g key={e.label}>
          <rect x={e.x} y="86" width="24" height="188" rx="5" fill={e.fill} stroke="#0b1f33" strokeOpacity="0.2" />
          <text
            x={e.x + 12}
            y="298"
            textAnchor="middle"
            fontSize="15"
            fontFamily="var(--font-plex-mono), monospace"
            fill="#0b1f33"
            fontWeight="600"
          >
            {e.label}
          </text>
        </g>
      ))}

      {/* Rising mineral ions between the plates */}
      {[
        { cx: 168, cy: 210, d: "0s", c: "#c2734a" },
        { cx: 176, cy: 170, d: "1.1s", c: "#c2734a" },
        { cx: 228, cy: 200, d: "0.6s", c: "#aab4c2" },
        { cx: 236, cy: 150, d: "1.8s", c: "#aab4c2" },
        { cx: 150, cy: 140, d: "2.3s", c: "#c2734a" },
        { cx: 250, cy: 240, d: "1.4s", c: "#7f93a7" },
      ].map((ion, i) => (
        <circle
          key={i}
          cx={ion.cx}
          cy={ion.cy}
          r="4.5"
          fill={ion.c}
          className="ion-rise"
          style={{ animationDelay: ion.d }}
        />
      ))}

      {/* PWM control node + lead */}
      <path d="M300 86 L340 46" stroke="#0369a1" strokeWidth="2.5" fill="none" />
      <rect x="316" y="20" width="72" height="30" rx="6" fill="#0b1f33" />
      <text x="352" y="40" textAnchor="middle" fontSize="12" fontFamily="var(--font-plex-mono), monospace" fill="#22d3ee" fontWeight="600">
        PWM 24V
      </text>
      <circle cx="300" cy="86" r="4.5" fill="#0369a1" className="ion-pulse" />
    </svg>
  );
}
