/**
 * Pool volume sizing + Zinc'd series recommendation.
 *
 * Volume formulas and series bands mirror the client Pool Series Calculator
 * and the installer handbook (Series-1 → Custom multi-unit).
 */

export const US_GALLONS_TO_LITRES = 3.785411784;

export type PoolShape = "rectangle" | "circle" | "oval" | "irregular";
export type LengthUnit = "ft" | "m";
export type CapacityUnit = "litres" | "gallons";

export type SeriesId = "Series-1" | "Series-2" | "Series-3" | "Custom";

export type SeriesRecommendation = {
  series: SeriesId;
  pipe: string;
  category: string;
  range: string;
  /** True when volume is below the published Series-1 floor. */
  caution: boolean;
};

const FT_TO_M = 0.3048;

/** Shape metadata for UI + formula hints (US-gallon factors). */
export const poolShapes = [
  {
    id: "rectangle" as const,
    label: "Rectangular",
    factor: 7.5,
    formulaFt: "Length × width × average depth × 7.5 = gallons",
    formulaM: "Length × width × average depth × 1000 = litres",
  },
  {
    id: "circle" as const,
    label: "Circular",
    factor: 5.9,
    formulaFt: "Diameter × diameter × average depth × 5.9 = gallons",
    formulaM: "Diameter × diameter × average depth × 785 = litres",
  },
  {
    id: "oval" as const,
    label: "Oval",
    factor: 5.9,
    formulaFt: "Length × width × average depth × 5.9 = gallons",
    formulaM: "Length × width × average depth × 785 = litres",
  },
  {
    id: "irregular" as const,
    label: "Irregular",
    factor: null,
    formulaFt: "Use known capacity or contractor measurements.",
    formulaM: "Use known capacity or contractor measurements.",
  },
] as const;

export function toFeet(value: number, unit: LengthUnit): number {
  return unit === "ft" ? value : value / FT_TO_M;
}

export function litresFromGallons(gallons: number): number {
  return gallons * US_GALLONS_TO_LITRES;
}

export function gallonsFromLitres(litres: number): number {
  return litres / US_GALLONS_TO_LITRES;
}

/**
 * Approximate US-gallon volume from imperial (feet) dimensions.
 * Metric path converts to feet first, then applies the same factors —
 * matching the client calculator.
 */
export function gallonsFromDimensions(input: {
  shape: Exclude<PoolShape, "irregular">;
  length: number;
  width: number;
  depth: number;
  diameter: number;
  unit: LengthUnit;
}): number {
  const length = toFeet(input.length, input.unit);
  const width = toFeet(input.width, input.unit);
  const depth = toFeet(input.depth, input.unit);
  const diameter = toFeet(input.diameter, input.unit);

  switch (input.shape) {
    case "rectangle":
      return length * width * depth * 7.5;
    case "oval":
      return length * width * depth * 5.9;
    case "circle":
      return diameter * diameter * depth * 5.9;
  }
}

export function capacityToLitres(
  value: number,
  unit: CapacityUnit
): number {
  return unit === "litres" ? value : litresFromGallons(value);
}

/**
 * Handbook series bands (litres).
 * Series-1 splits Small (20–40k) vs Standard (40–70k) for display only.
 */
export function recommendSeries(litres: number): SeriesRecommendation {
  if (!Number.isFinite(litres) || litres <= 0) {
    return {
      series: "Series-1",
      pipe: "—",
      category: "Enter pool details",
      range: "—",
      caution: false,
    };
  }

  if (litres < 20_000) {
    return {
      series: "Series-1",
      pipe: "2 inch",
      category: "Below published range",
      range: "20,000–40,000 L",
      caution: true,
    };
  }

  if (litres <= 40_000) {
    return {
      series: "Series-1",
      pipe: "2 inch",
      category: "Small Residential",
      range: "20,000–40,000 L",
      caution: false,
    };
  }

  if (litres <= 70_000) {
    return {
      series: "Series-1",
      pipe: "2 inch",
      category: "Standard Residential",
      range: "40,000–70,000 L",
      caution: false,
    };
  }

  if (litres <= 100_000) {
    return {
      series: "Series-2",
      pipe: "2–4 inch",
      category: "Large Residential / Club",
      range: "70,000–100,000 L",
      caution: false,
    };
  }

  if (litres <= 150_000) {
    return {
      series: "Series-3",
      pipe: "4 inch",
      category: "Luxury / Small Commercial",
      range: "100,000–150,000 L",
      caution: false,
    };
  }

  return {
    series: "Custom",
    pipe: "As required",
    category: "Commercial multi-unit",
    range: "Above 150,000 L",
    caution: false,
  };
}

export function formatVolume(value: number, digits = 0): string {
  if (!Number.isFinite(value) || value <= 0) return "—";
  return Math.round(value).toLocaleString("en-US", {
    maximumFractionDigits: digits,
  });
}
