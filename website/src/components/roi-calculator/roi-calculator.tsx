"use client";

import { useMemo, useState } from "react";

import { TechnicalLabel } from "@/components/ui/technical-label";
import { StatusNote } from "@/components/ui/status-note";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";
import {
  computeRoi,
  formatPayback,
  formatUsd,
  roiExampleDefaults,
  type RoiInputs,
  type RoiView,
} from "@/lib/roi-model";
import { roiViews } from "@/content/roi-content";

const fieldClass =
  "w-full rounded-[var(--radius-control)] border border-border bg-surface px-3.5 py-2.5 text-body text-foreground shadow-[var(--shadow-1)] outline-none transition-colors placeholder:text-accent-steel focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/40";

function parseMoney(raw: string): number {
  const n = Number(raw.replace(/[^0-9.-]/g, ""));
  return Number.isFinite(n) ? n : 0;
}

function MoneyField({
  label,
  hint,
  value,
  onChange,
}: {
  label: string;
  hint?: string;
  value: number;
  onChange: (n: number) => void;
}) {
  return (
    <label className="block">
      <span className="text-small mb-1.5 block font-medium">{label}</span>
      <input
        inputMode="decimal"
        className={fieldClass}
        value={Number.isFinite(value) ? String(value) : ""}
        onChange={(event) => onChange(parseMoney(event.target.value))}
      />
      {hint ? (
        <span className="text-small mt-1 block text-accent-steel">{hint}</span>
      ) : null}
    </label>
  );
}

function Stat({
  label,
  value,
  hint,
}: {
  label: string;
  value: string;
  hint?: string;
}) {
  return (
    <div className="rounded-[var(--radius-panel)] border border-border bg-surface p-5">
      <TechnicalLabel className="text-accent-aquatic">{label}</TechnicalLabel>
      <p className="text-h2 mt-2 text-foreground">{value}</p>
      {hint ? (
        <p className="text-small mt-2 text-accent-steel">{hint}</p>
      ) : null}
    </div>
  );
}

export function RoiCalculator() {
  const [inputs, setInputs] = useState<RoiInputs>(roiExampleDefaults);
  const [view, setView] = useState<RoiView>("allIn");

  const result = useMemo(() => computeRoi(inputs), [inputs]);
  const headline = view === "allIn" ? result.allIn : result.chemical;
  const lines = view === "allIn" ? result.allInLines : result.chemicalLines;
  const currentTotal = view === "allIn" ? result.allInCurrent : result.chemicalCurrent;
  const modeledOperating =
    view === "allIn" ? result.allInModeled : result.chemicalModeled;

  const patch = (partial: Partial<RoiInputs>) =>
    setInputs((prev) => ({ ...prev, ...partial }));

  const reductionPct = Math.round(inputs.chlorinePurchaseReduction * 100);

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
      <div className="space-y-6">
        <div className="flex flex-wrap gap-2">
          {roiViews.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setView(item.id)}
              className={cn(
                "rounded-full border px-4 py-2 text-small font-medium transition-colors",
                view === item.id
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-surface text-muted-foreground hover:border-border-strong hover:text-foreground",
              )}
            >
              {item.label}
            </button>
          ))}
        </div>
        <p className="text-small text-muted-foreground">
          {roiViews.find((item) => item.id === view)?.blurb}
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          <MoneyField
            label="Current monthly contract"
            hint="Service / visits. Confirm whether chemicals are inside this number."
            value={inputs.contractMonthly}
            onChange={(contractMonthly) => patch({ contractMonthly })}
          />
          <label className="block sm:col-span-2">
            <span className="text-small mb-1.5 block font-medium">
              Does that contract include treatment chemicals?
            </span>
            <select
              className={fieldClass}
              value={inputs.chemicalsIncludedInContract ? "yes" : "no"}
              onChange={(event) =>
                patch({
                  chemicalsIncludedInContract: event.target.value === "yes",
                })
              }
            >
              <option value="yes">Yes — chemicals are inside the contract</option>
              <option value="no">No — chemicals are extra</option>
            </select>
          </label>
          <MoneyField
            label="Chlorine purchases / month"
            value={inputs.chlorine}
            onChange={(chlorine) => patch({ chlorine })}
          />
          <MoneyField
            label="Routine algaecide / month"
            value={inputs.algaecide}
            onChange={(algaecide) => patch({ algaecide })}
          />
          <MoneyField
            label="Stabilizer / CYA / month"
            value={inputs.cya}
            onChange={(cya) => patch({ cya })}
          />
          <MoneyField
            label="Other balancing chemistry / month"
            value={inputs.otherChemistry}
            onChange={(otherChemistry) => patch({ otherChemistry })}
          />
          <label className="block sm:col-span-2">
            <span className="text-small mb-1.5 block font-medium">
              Chlorine purchasing assumption
            </span>
            <div className="flex items-center gap-4">
              <input
                type="range"
                min={0}
                max={90}
                step={5}
                value={reductionPct}
                onChange={(event) =>
                  patch({
                    chlorinePurchaseReduction: Number(event.target.value) / 100,
                  })
                }
                className="w-full accent-[color:var(--teal-700)]"
              />
              <span className="text-technical w-14 shrink-0 text-accent-aquatic">
                {reductionPct}%
              </span>
            </div>
            <span className="text-small mt-1 block text-accent-steel">
              Purchasing assumption to validate against invoices — not an
              efficacy claim. Cap is 90% to match the hotel model.
            </span>
          </label>
          {view === "allIn" ? (
            <>
              <MoneyField
                label="Periodic specialist after / month"
                hint="Retained oversight, not a full outsourced program."
                value={inputs.currentSpecialistAfter}
                onChange={(currentSpecialistAfter) =>
                  patch({ currentSpecialistAfter })
                }
              />
              <MoneyField
                label="Incremental hotel-staff labor / month"
                value={inputs.incrementalStaff}
                onChange={(incrementalStaff) => patch({ incrementalStaff })}
              />
            </>
          ) : null}
          <MoneyField
            label="Electricity allowance / month"
            hint="Default $3. Replace with measured kWh × tariff."
            value={inputs.electricity}
            onChange={(electricity) => patch({ electricity })}
          />
          <MoneyField
            label="Equipment MRP"
            value={inputs.equipmentMrp}
            onChange={(equipmentMrp) => patch({ equipmentMrp })}
          />
        </div>

        <Button
          type="button"
          variant="outline"
          className="rounded-[var(--radius-control)]"
          onClick={() => setInputs(roiExampleDefaults)}
        >
          Reset to hotel-model example
        </Button>
      </div>

      <div className="space-y-4 lg:sticky lg:top-28">
        <StatusNote tone="warning">
          Modeled outputs from the inputs on the left. Not actual savings. Not a
          national hotel-cost average.
        </StatusNote>
        <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
          <Stat
            label="Modeled monthly net"
            value={formatUsd(headline.monthlyNet, true)}
            hint="Operating change minus equipment spread over 60 months"
          />
          <Stat
            label="Estimated payback"
            value={formatPayback(headline.paybackMonths)}
            hint="Equipment MRP ÷ modeled operating change (before amortization)"
          />
          <Stat
            label="Five-year modeled net"
            value={formatUsd(headline.fiveYearNet)}
            hint="Operating change × 60 months, minus equipment MRP"
          />
        </div>

        <div className="overflow-hidden rounded-[var(--radius-panel)] border border-border bg-surface">
          <div className="border-b border-border px-5 py-4">
            <TechnicalLabel>Cost stack</TechnicalLabel>
          </div>
          <table className="w-full text-small">
            <thead>
              <tr className="border-b border-border text-left text-accent-steel">
                <th className="px-5 py-3 font-medium">Component</th>
                <th className="px-3 py-3 font-medium">Current</th>
                <th className="px-5 py-3 font-medium">Modeled</th>
              </tr>
            </thead>
            <tbody>
              {lines.map((line) => (
                <tr key={line.label} className="border-b border-border last:border-0">
                  <td className="px-5 py-2.5 text-muted-foreground">{line.label}</td>
                  <td className="px-3 py-2.5 tabular-nums">
                    {formatUsd(line.current, true)}
                  </td>
                  <td className="px-5 py-2.5 tabular-nums">
                    {formatUsd(line.modeled, true)}
                  </td>
                </tr>
              ))}
              <tr className="bg-surface-muted/60 font-medium">
                <td className="px-5 py-3">Operating total</td>
                <td className="px-3 py-3 tabular-nums">
                  {formatUsd(currentTotal, true)}
                </td>
                <td className="px-5 py-3 tabular-nums">
                  {formatUsd(modeledOperating, true)}
                </td>
              </tr>
              <tr className="text-accent-steel">
                <td className="px-5 py-3">Equipment over {inputs.horizonMonths} months</td>
                <td className="px-3 py-3 tabular-nums">{formatUsd(0, true)}</td>
                <td className="px-5 py-3 tabular-nums">
                  {formatUsd(result.amort, true)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
