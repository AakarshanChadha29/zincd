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

/** Metric litres-per-cubic-metre factors, mirroring the imperial ones. */
const M_FACTORS = { rectangle: 1000, oval: 785, circle: 785 } as const;

/**
 * Volume in litres from pool dimensions.
 *
 * Each unit system is evaluated with its OWN published factors rather than
 * converting to feet first. Routing metric input through the imperial factors
 * made the result disagree with the formula shown on screen — 7.5 gal/ft³ is a
 * rounding of 7.48052, so a 10 x 5 x 1.5 m pool read 75,193 L against a stated
 * L x W x D x 1000 = 75,000 L. Now the number on screen is exactly what the
 * printed formula produces, in both units.
 */
export function litresFromDimensions(input: {
  shape: Exclude<PoolShape, "irregular">;
  length: number;
  width: number;
  depth: number;
  diameter: number;
  unit: LengthUnit;
}): number {
  const { length, width, depth, diameter, shape, unit } = input;

  if (unit === "m") {
    const factor = M_FACTORS[shape];
    return shape === "circle"
      ? diameter * diameter * depth * factor
      : length * width * depth * factor;
  }

  return litresFromGallons(gallonsFromDimensions(input));
}

/**
 * US-gallon volume from imperial (feet) dimensions, using the handbook
 * factors. Metric input is converted to feet first; prefer
 * `litresFromDimensions` for display, which keeps each unit exact.
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
 * The full series ladder, in order — rendered as a comparison so a visitor can
 * see where their pool falls against every option, not just the matched one.
 * US gallons lead because this is a US-market site; litres follow because the
 * installer handbook bands are published in litres.
 */
export const seriesLadder = [
  {
    series: "Series-1" as const,
    category: "Residential",
    pipe: '2"',
    gallons: "5,300–18,500 gal",
    litres: "20,000–70,000 L",
  },
  {
    series: "Series-2" as const,
    category: "Large residential / club",
    pipe: '2–4"',
    gallons: "18,500–26,400 gal",
    litres: "70,000–100,000 L",
  },
  {
    series: "Series-3" as const,
    category: "Luxury / small commercial",
    pipe: '4"',
    gallons: "26,400–39,600 gal",
    litres: "100,000–150,000 L",
  },
  {
    series: "Custom" as const,
    category: "Commercial multi-unit",
    pipe: "As required",
    gallons: "Above 39,600 gal",
    litres: "Above 150,000 L",
  },
] as const;

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
