import { cn } from "@/lib/cn";

/**
 * The treatment loop — where Zinc'd sits in a pool circulation system.
 *
 * A genuinely closed circuit: water leaves the pool on the left rail, is drawn
 * through the pump and filter, passes the Zinc'd ionization cell on the
 * bottom run, and rises back into the same basin on the right rail. The pool
 * is the fourth side of the loop, so the closure is structural rather than
 * decorated with an arrow.
 *
 * Two devices carry the meaning without relying on colour alone:
 *   - the pipe changes weight and tone at the cell (steel before, aquatic
 *     after), so the Zinc'd stage is visibly the state change in the circuit;
 *   - the cell is the only band-deep object in the drawing, and the only
 *     one with a controller above it, making it the focal mass.
 * Direction is carried redundantly by arrowheads, not by hue.
 *
 * Colour comes only from globals.css custom properties, so the graphic follows
 * any theme layer added later. `--aqua-400` is used exclusively for decorative
 * overlays (drift dashes, halo, ion nodes) — it does not clear 3:1 on a light
 * surface and never carries meaning on its own.
 *
 * Original schematic illustration. Decorative and educational: the five stage
 * captions are rendered as real HTML beside this graphic (see ProcessSteps in
 * the treatment-loop section), so nothing here is the sole source of content.
 * Animation is pure CSS via .flow-line / .ion-rise / .ion-pulse, all of which
 * are disabled under prefers-reduced-motion in globals.css.
 *
 * Sized deliberately: the viewBox is portrait and the caller caps it at ~440px,
 * so the render scale only ever ranges ~0.76 (375px phone) to 1.0 (desktop) and
 * the in-diagram labels stay legible at both ends without a second geometry.
 */
export function TreatmentLoop({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 440 600"
      role="img"
      aria-label="Closed pool circulation loop: water leaves the pool, passes through the pump and filter, then the Zinc'd ionization cell, and returns treated to the same pool."
      className={cn("h-auto w-full max-w-[27.5rem]", className)}
      fill="none"
    >
      <title>
        The Zinc'd treatment loop — pool, pump, filter, ionization cell,
        treated-water return.
      </title>

      {/* Focus field behind the Zinc'd stage — drawn first so the pipe and the
          cell sit on top of it. */}
      <rect
        x="160"
        y="384"
        width="120"
        height="136"
        rx="12"
        fill="var(--accent-aquatic)"
        fillOpacity="0.06"
        stroke="var(--aqua-400)"
        strokeOpacity="0.5"
        strokeWidth="1.5"
      />

      {/* 01 — Pool basin. Also the closing side of the circuit. */}
      <rect
        x="28"
        y="28"
        width="384"
        height="112"
        rx="10"
        fill="var(--surface)"
        stroke="var(--border-strong)"
        strokeWidth="2"
      />
      <rect x="38" y="38" width="364" height="92" rx="6" fill="var(--accent)" />
      <clipPath id="pool-basin-clip">
        <rect x="38" y="38" width="364" height="92" rx="6" />
      </clipPath>
      <g clipPath="url(#pool-basin-clip)">
        {[
          { d: "M214 62 C 262 54, 330 74, 388 62", delay: "0s" },
          { d: "M196 88 C 254 80, 324 100, 388 86", delay: "0.6s" },
          { d: "M214 114 C 268 106, 330 124, 388 112", delay: "1.2s" },
          { d: "M52 78 C 110 70, 168 92, 214 80", delay: "0.3s" },
          { d: "M52 104 C 118 96, 176 118, 220 106", delay: "0.9s" },
        ].map((wave) => (
          <path
            key={wave.d}
            d={wave.d}
            stroke="var(--aqua-400)"
            strokeOpacity="0.55"
            strokeWidth="2"
            strokeLinecap="round"
            className="pool-wave"
            style={{ animationDelay: wave.delay }}
          />
        ))}
      </g>

      {/* Suction and return ports through the basin wall */}
      <rect x="78" y="132" width="20" height="12" rx="2" fill="var(--accent-steel)" />
      <rect x="342" y="132" width="20" height="12" rx="2" fill="var(--accent-aquatic)" />

      {/* Untreated leg: pool → pump → filter → cell inlet */}
      <path
        d="M88 144 V 440 Q88 470 118 470 H 168"
        stroke="var(--accent-steel)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M88 144 V 440 Q88 470 118 470 H 168"
        stroke="var(--surface)"
        strokeWidth="1.5"
        className="flow-line"
      />

      {/* Treated leg: cell outlet → return → pool. Heavier stroke and
          aquatic tone mark the state change at the cell. */}
      <path
        d="M272 470 H 322 Q352 470 352 440 V 144"
        stroke="var(--accent-aquatic)"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M272 470 H 322 Q352 470 352 440 V 144"
        stroke="var(--aqua-400)"
        strokeWidth="2"
        className="flow-line"
        style={{ animationDelay: "0.5s" }}
      />

      {/* Direction arrowheads — flow reads without colour */}
      {[
        { d: "M81 168 L88 182 L95 168 Z", fill: "var(--accent-steel)" },
        { d: "M81 292 L88 306 L95 292 Z", fill: "var(--accent-steel)" },
        { d: "M136 463 L150 470 L136 477 Z", fill: "var(--accent-steel)" },
        { d: "M293 463 L307 470 L293 477 Z", fill: "var(--accent-aquatic)" },
        { d: "M345 212 L352 198 L359 212 Z", fill: "var(--accent-aquatic)" },
      ].map((arrow) => (
        <path key={arrow.d} d={arrow.d} fill={arrow.fill} />
      ))}

      {/* 02 — Circulation pump on the suction rail */}
      <circle
        cx="88"
        cy="230"
        r="26"
        fill="var(--surface)"
        stroke="var(--border-strong)"
        strokeWidth="2"
      />
      <circle cx="88" cy="230" r="12" stroke="var(--accent-steel)" strokeWidth="1.5" />
      {[45, 135, 225, 315].map((angle) => (
        <line
          key={angle}
          x1="88"
          y1="218"
          x2="88"
          y2="208"
          stroke="var(--accent-steel)"
          strokeWidth="2"
          strokeLinecap="round"
          transform={`rotate(${angle} 88 230)`}
        />
      ))}

      {/* 03 — Filter vessel straddling the same rail */}
      <rect
        x="64"
        y="336"
        width="48"
        height="68"
        rx="8"
        fill="var(--surface)"
        stroke="var(--border-strong)"
        strokeWidth="2"
      />
      <path d="M64 354 H112" stroke="var(--border)" strokeWidth="1.5" />
      {[
        [76, 368],
        [88, 376],
        [100, 368],
        [82, 388],
        [94, 388],
      ].map(([cx, cy]) => (
        <circle
          key={`${cx}-${cy}`}
          cx={cx}
          cy={cy}
          r="3"
          fill="var(--accent-steel)"
          fillOpacity="0.5"
        />
      ))}

      {/* 05 — Treated-water return inlet, with mineral ions carried back in */}
      <rect
        x="338"
        y="284"
        width="28"
        height="30"
        rx="4"
        fill="var(--surface)"
        stroke="var(--accent-aquatic)"
        strokeWidth="2"
      />
      <path d="M345 282 L352 270 L359 282 Z" fill="var(--accent-aquatic)" />
      {[
        { cx: 372, cy: 252, r: 3.5, fill: "var(--accent-ecological)", delay: "0s" },
        { cx: 382, cy: 214, r: 3, fill: "var(--aqua-400)", delay: "1.4s" },
        { cx: 370, cy: 182, r: 2.5, fill: "var(--accent-ecological)", delay: "2.6s" },
      ].map((ion) => (
        <circle
          key={ion.cy}
          cx={ion.cx}
          cy={ion.cy}
          r={ion.r}
          fill={ion.fill}
          className="ion-rise"
          style={{ animationDelay: ion.delay }}
        />
      ))}

      {/* 04 — Zinc'd: PWM control above, ionization cell inline. The only
          band-deep mass in the drawing. */}
      <rect x="180" y="392" width="80" height="32" rx="6" fill="var(--band-deep)" />
      <text
        x="220"
        y="413"
        textAnchor="middle"
        fontSize="13"
        fontFamily="var(--font-plex-mono), ui-monospace, monospace"
        letterSpacing="0.08em"
        fontWeight="600"
        fill="var(--aqua-400)"
      >
        PWM
      </text>
      <line
        x1="220"
        y1="424"
        x2="220"
        y2="436"
        stroke="var(--accent-aquatic)"
        strokeWidth="2.5"
      />
      <rect
        x="168"
        y="436"
        width="104"
        height="68"
        rx="8"
        fill="var(--band-deep)"
        stroke="var(--aqua-400)"
        strokeOpacity="0.45"
        strokeWidth="1.5"
      />
      {[
        { x: 194, opacity: 1 },
        { x: 216, opacity: 0.7 },
        { x: 238, opacity: 0.45 },
      ].map((electrode) => (
        <rect
          key={electrode.x}
          x={electrode.x}
          y="448"
          width="8"
          height="44"
          rx="2"
          fill="var(--band-deep-foreground)"
          fillOpacity={electrode.opacity}
        />
      ))}
      {[
        { cx: 208, cy: 456, r: 3, delay: "0s" },
        { cx: 230, cy: 470, r: 3, delay: "0.7s" },
        { cx: 208, cy: 484, r: 2.5, delay: "1.4s" },
      ].map((ion) => (
        <circle
          key={ion.cy}
          cx={ion.cx}
          cy={ion.cy}
          r={ion.r}
          fill="var(--aqua-400)"
          className="ion-pulse"
          style={{ animationDelay: ion.delay }}
        />
      ))}

      {/* Stage labels. Names only — numbered indices fought the diagram. */}
      {[
        { name: "POOL", x: 60, y: 92, anchor: "start" as const },
        { name: "PUMP", x: 124, y: 236, anchor: "start" as const },
        { name: "FILTER", x: 124, y: 362, anchor: "start" as const },
        { name: "RETURN", x: 316, y: 308, anchor: "end" as const },
      ].map((label) => (
        <text
          key={label.name}
          x={label.x}
          y={label.y}
          textAnchor={label.anchor}
          fontSize="17"
          fontFamily="var(--font-plex-mono), ui-monospace, monospace"
          letterSpacing="0.08em"
          fontWeight="600"
          fill="var(--foreground)"
        >
          {label.name}
        </text>
      ))}

      {/* The stage the partner sells — largest label in the drawing. */}
      <text
        x="220"
        y="548"
        textAnchor="middle"
        fontSize="22"
        fontFamily="var(--font-plex-mono), ui-monospace, monospace"
        letterSpacing="0.08em"
        fontWeight="600"
        fill="var(--accent-aquatic)"
      >
        ZINC'D
      </text>
      <text
        x="220"
        y="578"
        textAnchor="middle"
        fontSize="13"
        fontFamily="var(--font-plex-mono), ui-monospace, monospace"
        letterSpacing="0.08em"
        fill="var(--muted-foreground)"
      >
        IONIZATION CELL
      </text>
    </svg>
  );
}
