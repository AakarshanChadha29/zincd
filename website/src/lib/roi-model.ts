/**
 * Hotel pool planning-model math.
 *
 * Formulas follow `hotel_pool_ionization_cost_savings.pdf` (pages 2–4).
 * Outputs are modeled — not measured savings. The 90% figure is a chlorine
 * *purchasing* assumption to validate against invoices, never an efficacy claim.
 */

export type RoiInputs = {
  /** Current monthly pool-company / service contract. */
  contractMonthly: number;
  /** True when the contract already includes treatment chemicals. */
  chemicalsIncludedInContract: boolean;
  chlorine: number;
  algaecide: number;
  cya: number;
  otherChemistry: number;
  electricity: number;
  /** 0–1. Default 0.90 = chlorine purchasing assumption. */
  chlorinePurchaseReduction: number;
  currentSpecialistAfter: number;
  equipmentMrp: number;
  horizonMonths: number;
};

export type RoiView = "chemical" | "allIn";

export type RoiLine = {
  label: string;
  current: number;
  modeled: number;
};

export type RoiResult = {
  chemicalCurrent: number;
  chemicalModeled: number;
  chemicalGross: number;
  visitsCurrent: number;
  visitsModeled: number;
  allInCurrent: number;
  allInModeled: number;
  allInGross: number;
  amort: number;
  chemical: RoiHeadline;
  allIn: RoiHeadline;
  chemicalLines: RoiLine[];
  allInLines: RoiLine[];
};

export type RoiHeadline = {
  grossOperating: number;
  monthlyNet: number;
  paybackMonths: number | null;
  fiveYearNet: number;
};

/** Expected-case defaults from the hotel planning-model PDF. */
export const roiExampleDefaults: RoiInputs = {
  contractMonthly: 1500,
  chemicalsIncludedInContract: true,
  chlorine: 175,
  algaecide: 20,
  cya: 3,
  otherChemistry: 152,
  electricity: 3,
  chlorinePurchaseReduction: 0.9,
  currentSpecialistAfter: 500,
  equipmentMrp: 5000,
  horizonMonths: 60,
};

function money(n: number): number {
  return Number.isFinite(n) ? n : 0;
}

function clamp01(n: number): number {
  if (!Number.isFinite(n)) return 0;
  return Math.min(1, Math.max(0, n));
}

function headline(
  grossOperating: number,
  mrp: number,
  horizon: number,
): RoiHeadline {
  const amort = horizon > 0 ? mrp / horizon : 0;
  const paybackMonths =
    grossOperating > 0 ? mrp / grossOperating : null;
  return {
    grossOperating,
    monthlyNet: grossOperating - amort,
    paybackMonths,
    fiveYearNet: grossOperating * horizon - mrp,
  };
}

export function computeRoi(raw: RoiInputs): RoiResult {
  const chlorine = money(raw.chlorine);
  const algaecide = money(raw.algaecide);
  const cya = money(raw.cya);
  const other = money(raw.otherChemistry);
  const electricity = money(raw.electricity);
  const reduction = clamp01(raw.chlorinePurchaseReduction);
  const contract = money(raw.contractMonthly);
  const specialist = money(raw.currentSpecialistAfter);
  const mrp = money(raw.equipmentMrp);
  const horizon = Math.max(1, money(raw.horizonMonths));

  const chlorineModeled = chlorine * (1 - reduction);
  const chemicalCurrent = chlorine + algaecide + cya + other;
  const chemicalModeled = chlorineModeled + other + electricity;
  const chemicalGross = chemicalCurrent - chemicalModeled;

  const visitsModeled = specialist;
  const visitsCurrent = raw.chemicalsIncludedInContract
    ? Math.max(0, contract - chemicalCurrent)
    : contract;

  const allInCurrent = raw.chemicalsIncludedInContract
    ? contract
    : contract + chemicalCurrent;
  const allInModeled = visitsModeled + chemicalModeled;
  const allInGross = allInCurrent - allInModeled;

  const amort = mrp / horizon;

  return {
    chemicalCurrent,
    chemicalModeled,
    chemicalGross,
    visitsCurrent,
    visitsModeled,
    allInCurrent,
    allInModeled,
    allInGross,
    amort,
    chemical: headline(chemicalGross, mrp, horizon),
    allIn: headline(allInGross, mrp, horizon),
    chemicalLines: [
      { label: "Chlorine purchases", current: chlorine, modeled: chlorineModeled },
      { label: "Routine algaecide", current: algaecide, modeled: 0 },
      { label: "Stabilizer / CYA", current: cya, modeled: 0 },
      { label: "Other water-balancing chemistry", current: other, modeled: other },
      { label: "Ionizer electricity allowance", current: 0, modeled: electricity },
    ],
    allInLines: [
      { label: "Outsourced service / visits", current: visitsCurrent, modeled: specialist },
      { label: "Chlorine purchases", current: chlorine, modeled: chlorineModeled },
      { label: "Routine algaecide", current: algaecide, modeled: 0 },
      { label: "Stabilizer / CYA", current: cya, modeled: 0 },
      { label: "Other water-balancing chemistry", current: other, modeled: other },
      { label: "Ionizer electricity allowance", current: 0, modeled: electricity },
    ],
  };
}

const usd = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

const usdPrecise = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export function formatUsd(value: number, precise = false): string {
  return (precise ? usdPrecise : usd).format(value);
}

export function formatPayback(months: number | null): string {
  if (months == null || !Number.isFinite(months) || months <= 0) {
    return "Not reached in this model";
  }
  if (months < 18) return `${months.toFixed(1)} mo`;
  return `${Math.round(months)} months`;
}
