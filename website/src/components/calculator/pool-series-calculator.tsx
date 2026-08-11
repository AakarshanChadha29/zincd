"use client";

import { useMemo, useState, type ReactNode } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import {
  ArrowRight,
  Info,
  Waves,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { TechnicalLabel } from "@/components/ui/technical-label";
import { EcoRipple } from "@/components/graphics/eco-ripple";
import { cn } from "@/lib/cn";
import {
  capacityToLitres,
  formatVolume,
  gallonsFromLitres,
  litresFromDimensions,
  poolShapes,
  recommendSeries,
  seriesLadder,
  type CapacityUnit,
  type LengthUnit,
  type PoolShape,
} from "@/lib/pool-volume";

type ShapeIconProps = { className?: string };

function RectIcon({ className }: ShapeIconProps) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden fill="none">
      <rect
        x="8"
        y="14"
        width="24"
        height="12"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function CircleIcon({ className }: ShapeIconProps) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden fill="none">
      <circle cx="20" cy="20" r="10" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function OvalIcon({ className }: ShapeIconProps) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden fill="none">
      <ellipse
        cx="20"
        cy="20"
        rx="14"
        ry="8"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function IrregularIcon({ className }: ShapeIconProps) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden fill="none">
      <path
        d="M8 22c3-6 5-8 8-8s5 5 8 5 5-5 8-2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

const shapeIcons: Record<PoolShape, (p: ShapeIconProps) => ReactNode> = {
  rectangle: RectIcon,
  circle: CircleIcon,
  oval: OvalIcon,
  irregular: IrregularIcon,
};

function SegmentedControl<T extends string>({
  value,
  options,
  onChange,
  ariaLabel,
  size = "md",
}: {
  value: T;
  options: { value: T; label: string }[];
  onChange: (value: T) => void;
  ariaLabel: string;
  size?: "sm" | "md";
}) {
  return (
    <div
      role="group"
      aria-label={ariaLabel}
      className={cn(
        "inline-flex rounded-[var(--radius-control)] border border-border bg-muted/50 p-0.5",
        size === "sm" && "text-[0.75rem]"
      )}
    >
      {options.map((option) => {
        const active = option.value === value;
        return (
          <button
            key={option.value}
            type="button"
            onClick={() => onChange(option.value)}
            aria-pressed={active}
            className={cn(
              "cursor-pointer rounded-[calc(var(--radius-control)-1px)] font-medium transition-colors duration-200",
              size === "sm" ? "px-2.5 py-1" : "px-3.5 py-1.5 text-small",
              active
                ? "bg-surface text-foreground shadow-[var(--shadow-1)]"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}

function NumberField({
  id,
  label,
  value,
  unit,
  onChange,
  step = 0.5,
  min = 0,
}: {
  id: string;
  label: string;
  value: string;
  unit: string;
  onChange: (next: string) => void;
  step?: number;
  min?: number;
}) {
  const numeric = Number(value);
  const bump = (dir: 1 | -1) => {
    const base = Number.isFinite(numeric) ? numeric : 0;
    const next = Math.max(min, Math.round((base + dir * step) * 1000) / 1000);
    onChange(String(next));
  };

  return (
    <label className="block min-w-0" htmlFor={id}>
      <span className="text-technical mb-1.5 block text-accent-steel">
        {label}
      </span>
      <div className="flex items-stretch overflow-hidden rounded-[var(--radius-control)] border border-border bg-muted/40 focus-within:border-ring focus-within:ring-3 focus-within:ring-ring/30">
        <input
          id={id}
          type="number"
          inputMode="decimal"
          min={min}
          step="any"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="min-w-0 flex-1 bg-transparent px-3.5 py-3 text-body font-medium text-foreground outline-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
        />
        <span className="flex items-center border-l border-border px-2.5 text-small text-accent-steel">
          {unit}
        </span>
        <div className="flex flex-col border-l border-border">
          <button
            type="button"
            aria-label={`Increase ${label}`}
            onClick={() => bump(1)}
            className="cursor-pointer px-2 py-1 text-accent-steel transition-colors hover:bg-surface hover:text-foreground"
          >
            ▴
          </button>
          <button
            type="button"
            aria-label={`Decrease ${label}`}
            onClick={() => bump(-1)}
            className="cursor-pointer border-t border-border px-2 py-1 text-accent-steel transition-colors hover:bg-surface hover:text-foreground"
          >
            ▾
          </button>
        </div>
      </div>
    </label>
  );
}

export function PoolSeriesCalculator() {
  const reduceMotion = useReducedMotion();
  const [shape, setShape] = useState<PoolShape>("rectangle");
  const [lengthUnit, setLengthUnit] = useState<LengthUnit>("ft");
  const [length, setLength] = useState("30");
  const [width, setWidth] = useState("15");
  const [depth, setDepth] = useState("5");
  const [diameter, setDiameter] = useState("20");
  const [capacity, setCapacity] = useState("75000");
  const [capacityUnit, setCapacityUnit] = useState<CapacityUnit>("litres");

  const shapeMeta = poolShapes.find((s) => s.id === shape)!;
  const unitLabel = lengthUnit === "ft" ? "FT" : "M";

  const result = useMemo(() => {
    if (shape === "irregular") {
      const raw = Number(capacity);
      if (!Number.isFinite(raw) || raw <= 0) {
        return { litres: 0, gallons: 0, recommendation: recommendSeries(0) };
      }
      const litres = capacityToLitres(raw, capacityUnit);
      return {
        litres,
        gallons: gallonsFromLitres(litres),
        recommendation: recommendSeries(litres),
      };
    }

    const values = {
      length: Number(length),
      width: Number(width),
      depth: Number(depth),
      diameter: Number(diameter),
    };

    const needed =
      shape === "circle"
        ? [values.diameter, values.depth]
        : [values.length, values.width, values.depth];

    if (needed.some((n) => !Number.isFinite(n) || n <= 0)) {
      return { litres: 0, gallons: 0, recommendation: recommendSeries(0) };
    }

    // Evaluated in the unit the visitor typed, so the figure shown always
    // matches the formula printed under the inputs.
    const litres = litresFromDimensions({
      shape,
      length: values.length,
      width: values.width,
      depth: values.depth,
      diameter: values.diameter,
      unit: lengthUnit,
    });
    return {
      litres,
      gallons: gallonsFromLitres(litres),
      recommendation: recommendSeries(litres),
    };
  }, [
    shape,
    length,
    width,
    depth,
    diameter,
    lengthUnit,
    capacity,
    capacityUnit,
  ]);

  const hasVolume = result.litres > 0;
  const rec = result.recommendation;
  const assessmentHref = hasVolume
    ? `/contact?intent=assessment&series=${encodeURIComponent(rec.series)}&volume=${Math.round(result.litres)}`
    : "/contact?intent=assessment";

  const formulaHint =
    shape === "irregular"
      ? "Use the contractor or owner's confirmed capacity whenever available. Confirmed capacity is used directly for the series recommendation."
      : lengthUnit === "ft"
        ? shapeMeta.formulaFt
        : shapeMeta.formulaM;

  return (
    <div className="relative">
      {/* Header runs full width. Previously it sat in its own column beside the
          form, and because it was much shorter it left a tall empty block on
          desktop — the two columns below are now both substantial, so neither
          side runs out of content. */}
      <header className="relative max-w-3xl">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-20 -top-10 hidden h-64 w-64 opacity-30 lg:block"
        >
          <EcoRipple className="h-full w-full text-accent-aquatic" />
        </div>
        <TechnicalLabel className="relative text-accent-aquatic">
          Zinc&apos;d pool sizing calculator
        </TechnicalLabel>
        <h1 className="text-display relative mt-4 text-foreground">
          What size pool ionizer{" "}
          <span className="text-gradient-aqua">do I need?</span>
        </h1>
        <p className="text-body-large relative mt-5 max-w-2xl text-muted-foreground">
          Enter your pool&apos;s measurements to estimate its capacity in US
          gallons, then see which Zinc&apos;d series matches — Series-1 through
          commercial multi-unit. Takes about a minute.
        </p>
        <div className="relative mt-8 flex max-w-2xl items-start gap-3 border-y border-border py-4">
          <Info
            className="mt-0.5 size-4 shrink-0 text-accent-aquatic"
            aria-hidden
          />
          <p className="text-small text-muted-foreground">
            Use <strong className="font-semibold text-foreground">average
            depth</strong> — shallow end plus deep end, divided by two.
          </p>
        </div>
      </header>

      {/* Form and result are full-width rows rather than side-by-side columns.
          Two columns of unequal content left ~225px of dead space under the
          shorter one on desktop; stacked rows cannot develop that gap, and the
          two halves inside each row share one background so any height
          difference is absorbed instead of showing as a hole. */}
      <div className="relative mt-10">
        <div
          aria-hidden
          className="pointer-events-none absolute -inset-6 -z-10 rounded-[calc(var(--radius)+1.5rem)] bg-[radial-gradient(ellipse_at_top,rgb(20_184_166/0.12),transparent_55%)]"
        />
        <div className="overflow-hidden rounded-[var(--radius)] border border-border-strong bg-surface-elevated shadow-[var(--shadow-2)] lg:grid lg:grid-cols-2">
          {/* Step 01 */}
          <div className="border-b border-border p-6 md:p-8 lg:border-b-0 lg:border-r">
              <div className="flex items-baseline gap-3">
                <span className="text-technical text-accent-aquatic">01</span>
                <TechnicalLabel>Pool shape</TechnicalLabel>
              </div>
              <h2 className="text-h3 mt-2 text-foreground">
                Choose the closest shape
              </h2>
              <div
                role="radiogroup"
                aria-label="Pool shape"
                className="mt-5 grid grid-cols-2 gap-2.5 sm:grid-cols-4"
              >
                {poolShapes.map((item) => {
                  const Icon = shapeIcons[item.id];
                  const active = shape === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      role="radio"
                      aria-checked={active}
                      onClick={() => setShape(item.id)}
                      className={cn(
                        "group cursor-pointer rounded-[var(--radius-control)] border px-2 py-3 text-center transition-all duration-200",
                        active
                          ? "border-accent-aquatic bg-[color:var(--accent)] shadow-[var(--shadow-1)]"
                          : "border-border bg-muted/30 hover:border-border-strong hover:bg-surface"
                      )}
                    >
                      <Icon
                        className={cn(
                          "mx-auto size-9 transition-colors",
                          active
                            ? "text-accent-aquatic"
                            : "text-accent-steel group-hover:text-accent-aquatic"
                        )}
                      />
                      <span
                        className={cn(
                          "mt-1.5 block text-[0.7rem] font-medium tracking-wide",
                          active ? "text-accent-aquatic" : "text-muted-foreground"
                        )}
                      >
                        {item.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 02 */}
            <div className="p-6 md:p-8">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-technical text-accent-aquatic">02</span>
                    <TechnicalLabel>Dimensions</TechnicalLabel>
                  </div>
                  <h2 className="text-h3 mt-2 text-foreground">
                    {shape === "irregular"
                      ? "Build your pool capacity"
                      : "Enter pool measurements"}
                  </h2>
                </div>
                {shape !== "irregular" ? (
                  <SegmentedControl
                    ariaLabel="Dimension unit"
                    value={lengthUnit}
                    onChange={setLengthUnit}
                    size="sm"
                    options={[
                      { value: "ft", label: "Feet" },
                      { value: "m", label: "Metres" },
                    ]}
                  />
                ) : null}
              </div>

              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={shape === "irregular" ? "capacity" : `${shape}-${lengthUnit}`}
                  initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduceMotion ? undefined : { opacity: 0, y: -6 }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                  className="mt-5"
                >
                  {shape === "irregular" ? (
                    <div className="space-y-4">
                      <label className="block" htmlFor="pool-capacity">
                        <span className="text-technical mb-1.5 block text-accent-steel">
                          Pool capacity
                        </span>
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-stretch">
                          <div className="flex min-w-0 flex-1 items-stretch overflow-hidden rounded-[var(--radius-control)] border border-border bg-muted/40 focus-within:border-ring focus-within:ring-3 focus-within:ring-ring/30">
                            <input
                              id="pool-capacity"
                              type="number"
                              inputMode="decimal"
                              min={0}
                              step="any"
                              value={capacity}
                              onChange={(e) => setCapacity(e.target.value)}
                              className="min-w-0 flex-1 bg-transparent px-4 py-3.5 text-h3 font-medium text-foreground outline-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                            />
                          </div>
                          <SegmentedControl
                            ariaLabel="Capacity unit"
                            value={capacityUnit}
                            onChange={setCapacityUnit}
                            options={[
                              { value: "litres", label: "Litres" },
                              { value: "gallons", label: "US gallons" },
                            ]}
                          />
                        </div>
                      </label>
                    </div>
                  ) : shape === "circle" ? (
                    <div className="grid gap-3 sm:grid-cols-2">
                      <NumberField
                        id="diameter"
                        label="Diameter"
                        value={diameter}
                        unit={unitLabel}
                        onChange={setDiameter}
                      />
                      <NumberField
                        id="average-depth"
                        label="Average depth"
                        value={depth}
                        unit={unitLabel}
                        onChange={setDepth}
                      />
                    </div>
                  ) : (
                    <div className="grid gap-3 sm:grid-cols-3">
                      <NumberField
                        id="length"
                        label="Length"
                        value={length}
                        unit={unitLabel}
                        onChange={setLength}
                      />
                      <NumberField
                        id="width"
                        label="Width"
                        value={width}
                        unit={unitLabel}
                        onChange={setWidth}
                      />
                      <NumberField
                        id="average-depth"
                        label="Average depth"
                        value={depth}
                        unit={unitLabel}
                        onChange={setDepth}
                      />
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>

              <p className="text-small mt-4 italic text-accent-steel">
                {formulaHint}
              </p>
            </div>
          </div>
        </div>

      {/* Result band — full width, two halves on one shared background. */}
      <div
        aria-live="polite"
        className="relative mt-6 overflow-hidden rounded-[var(--radius)] border border-border-strong bg-[linear-gradient(150deg,var(--teal-900)_0%,var(--teal-800)_52%,var(--teal-700)_100%)] shadow-[var(--shadow-2)]"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -right-10 -top-10 opacity-15"
        >
          <Waves className="size-40 text-white" strokeWidth={1} />
        </div>

        <div className="relative grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          {/* Capacity + match — US gallons lead for a US market. */}
          <div className="border-b border-white/10 p-6 md:p-8 lg:border-b-0 lg:border-r">
            <TechnicalLabel className="text-[color:var(--aqua-400)]">
              Estimated pool capacity
            </TechnicalLabel>
            <div className="mt-3 flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <strong className="text-display tabular-nums text-white">
                {hasVolume ? formatVolume(result.gallons) : "—"}
              </strong>
              <span className="text-technical text-white/70">US gallons</span>
            </div>
            <p className="text-body mt-1 text-white/60">
              {hasVolume
                ? `${formatVolume(result.litres)} litres`
                : "Enter your pool measurements"}
            </p>

            <hr className="my-6 border-white/10" />

            <TechnicalLabel className="text-[color:var(--aqua-400)]">
              Your recommended system
            </TechnicalLabel>
            <div className="mt-3 flex flex-wrap items-center gap-3">
              <h2 className="text-h1 text-white">
                {hasVolume ? rec.series : "—"}
              </h2>
              {hasVolume ? (
                <span className="rounded-full border border-[color:var(--aqua-400)]/40 bg-white/10 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-[color:var(--aqua-400)]">
                  Best match
                </span>
              ) : null}
            </div>
            <p className="text-body mt-2 text-white/70">
              {hasVolume
                ? `${rec.category} · ${rec.pipe} circulation line`
                : "Your match appears here as you type."}
            </p>

            {rec.caution && hasVolume ? (
              <p className="text-small mt-4 rounded-[var(--radius-control)] border border-[color:var(--aqua-400)]/30 bg-white/5 px-4 py-3 text-[color:var(--aqua-400)]">
                This volume sits below the published Series-1 range. We&apos;ll
                confirm suitability during your assessment.
              </p>
            ) : null}
          </div>

          {/* Comparison + next step */}
          <div className="p-6 md:p-8">
            {/* The full ladder, so the match is visible in context rather than
                asserted on its own. */}
            <div>
              <TechnicalLabel className="text-white/45">
                How the series compare
              </TechnicalLabel>
              <ul className="mt-3 space-y-1.5">
                {seriesLadder.map((tier) => {
                  const active = hasVolume && tier.series === rec.series;
                  return (
                    <li
                      key={tier.series}
                      aria-current={active ? "true" : undefined}
                      className={cn(
                        "flex items-baseline gap-x-3 rounded-[var(--radius-control)] border px-3.5 py-2.5 transition-colors",
                        active
                          ? "border-[color:var(--aqua-400)]/50 bg-[color:var(--aqua-400)]/12"
                          : "border-white/10 bg-white/[0.03]"
                      )}
                    >
                      <b
                        className={cn(
                          "text-small shrink-0 font-semibold",
                          active ? "text-[color:var(--aqua-400)]" : "text-white/85"
                        )}
                      >
                        {tier.series}
                      </b>
                      {/* One line per tier. The pipe size drops away on the
                          narrowest screens rather than wrapping or squeezing
                          the volume range into an ellipsis — the range is the
                          number people are matching against. */}
                      <span
                        className={cn(
                          "text-small flex-1 whitespace-nowrap text-right tabular-nums",
                          active ? "text-white" : "text-white/60"
                        )}
                      >
                        {tier.gallons}
                      </span>
                      <span className="text-small hidden w-16 shrink-0 whitespace-nowrap text-right text-white/40 sm:inline">
                        {tier.pipe}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button
                size="lg"
                className="rounded-[var(--radius-control)] bg-white text-[color:var(--teal-900)] hover:bg-white/90"
                render={<Link href={assessmentHref} />}
              >
                Get my free pool assessment
                <ArrowRight className="size-4" aria-hidden />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-[var(--radius-control)] border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white"
                render={<Link href="/product#buy" />}
              >
                View the system
              </Button>
            </div>

            <p className="text-small mt-5 text-white/45">
              Capacity is an estimate. We confirm measurements, pipe size, and
              final selection before anything ships.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
