"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { StatusNote } from "@/components/ui/status-note";
import { TechnicalLabel } from "@/components/ui/technical-label";
import { cn } from "@/lib/cn";
import {
  assessPrivacyNote,
  assessSteps,
  automationOptions,
  currentTreatmentOptions,
  customerExplanation,
  electricalOptions,
  filtrationOptions,
  heaterOptions,
  painOptions,
  photoChecklist,
  pipeSizeOptions,
  poolTypeOptions,
  propertyTypeOptions,
} from "@/content/assess-content";
import { assessLeadSchema, type AssessLeadResponse } from "@/lib/leads/assess-schema";
import {
  gallonsFromLitres,
  litresFromDimensions,
  recommendSeries,
  type LengthUnit,
} from "@/lib/pool-volume";

const fieldClass =
  "w-full rounded-[var(--radius-control)] border border-border bg-surface px-3.5 py-2.5 text-body text-foreground shadow-[var(--shadow-1)] outline-none transition-colors placeholder:text-accent-steel focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/40 aria-invalid:border-destructive";

type Outcome =
  | { kind: "sent" }
  | { kind: "acknowledged"; message: string }
  | { kind: "error"; message: string };

type Draft = {
  poolType: string;
  propertyType: string;
  pains: string[];
  painNotes: string;
  currentTreatment: string;
  knownVolume: string;
  volumeUnit: "gallons" | "litres";
  length: string;
  width: string;
  shallow: string;
  deep: string;
  dimensionUnit: LengthUnit;
  pipeSize: string;
  filtration: string;
  heater: string;
  automation: string;
  electricalNearby: string;
  photosReady: string[];
  ph: string;
  alkalinity: string;
  hardness: string;
  chlorine: string;
  copper: string;
  notes: string;
  name: string;
  email: string;
  organization: string;
  phone: string;
  company_website: string;
};

function toggleIn(list: string[], value: string) {
  return list.includes(value) ? list.filter((item) => item !== value) : [...list, value];
}

export function AssessFunnel() {
  const params = useSearchParams();
  const prefilledLitres = Number(params.get("volume") ?? "");
  const prefilledGallons = Number(params.get("gallons") ?? "");
  const prefilledSeries = params.get("series") ?? "";

  const initialVolume =
    Number.isFinite(prefilledGallons) && prefilledGallons > 0
      ? String(Math.round(prefilledGallons))
      : Number.isFinite(prefilledLitres) && prefilledLitres > 0
        ? String(Math.round(prefilledLitres))
        : "";

  const [step, setStep] = useState(0);
  const [outcome, setOutcome] = useState<Outcome | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [stepError, setStepError] = useState<string | null>(null);
  const [draft, setDraft] = useState<Draft>({
    poolType: "",
    propertyType: "",
    pains: [],
    painNotes: "",
    currentTreatment: "",
    knownVolume: initialVolume,
    volumeUnit:
      Number.isFinite(prefilledGallons) && prefilledGallons > 0 ? "gallons" : "litres",
    length: "",
    width: "",
    shallow: "",
    deep: "",
    dimensionUnit: "ft",
    pipeSize: "",
    filtration: "",
    heater: "",
    automation: "",
    electricalNearby: "",
    photosReady: [],
    ph: "",
    alkalinity: "",
    hardness: "",
    chlorine: "",
    copper: "",
    notes: "",
    name: "",
    email: "",
    organization: "",
    phone: "",
    company_website: "",
  });

  const computed = useMemo(() => {
    const known = Number(draft.knownVolume);
    if (Number.isFinite(known) && known > 0) {
      const litres =
        draft.volumeUnit === "litres" ? known : known * 3.785411784;
      return {
        litres,
        gallons: litres / 3.785411784,
        series: recommendSeries(litres).series,
      };
    }

    const length = Number(draft.length);
    const width = Number(draft.width);
    const shallow = Number(draft.shallow);
    const deep = Number(draft.deep);
    if ([length, width, shallow, deep].every((n) => Number.isFinite(n) && n > 0)) {
      const depth = (shallow + deep) / 2;
      const litres = litresFromDimensions({
        shape: "rectangle",
        length,
        width,
        depth,
        diameter: 0,
        unit: draft.dimensionUnit,
      });
      return {
        litres,
        gallons: gallonsFromLitres(litres),
        series: recommendSeries(litres).series,
      };
    }

    if (Number.isFinite(prefilledLitres) && prefilledLitres > 0) {
      return {
        litres: prefilledLitres,
        gallons: gallonsFromLitres(prefilledLitres),
        series: prefilledSeries || recommendSeries(prefilledLitres).series,
      };
    }

    return { litres: 0, gallons: 0, series: prefilledSeries };
  }, [draft, prefilledLitres, prefilledSeries]);

  const patch = (partial: Partial<Draft>) => {
    setStepError(null);
    setDraft((current) => ({ ...current, ...partial }));
  };

  const validateStep = (index: number): string | null => {
    if (index === 0 && (!draft.poolType || !draft.propertyType)) {
      return "Choose a pool type and property type.";
    }
    if (index === 1 && (draft.pains.length === 0 || !draft.currentTreatment)) {
      return "Select at least one pain point and your current treatment.";
    }
    if (index === 2 && computed.litres <= 0) {
      return "Enter a known capacity or length, width, shallow and deep.";
    }
    if (
      index === 3 &&
      (!draft.pipeSize ||
        !draft.filtration ||
        !draft.heater ||
        !draft.automation ||
        !draft.electricalNearby)
    ) {
      return "Complete the plant-room fields — use “Not sure” if you don’t know.";
    }
    if (index === 6 && (draft.name.trim().length < 2 || !draft.email.includes("@"))) {
      return "Name and a valid email are required to send this assessment.";
    }
    return null;
  };

  const goNext = () => {
    const error = validateStep(step);
    if (error) {
      setStepError(error);
      return;
    }
    setStep((current) => Math.min(current + 1, assessSteps.length - 1));
  };

  const onSubmit = async () => {
    const error = validateStep(6);
    if (error) {
      setStepError(error);
      return;
    }

    setSubmitting(true);
    setOutcome(null);

    const payload = {
      kind: "assess" as const,
      name: draft.name,
      email: draft.email,
      organization: draft.organization || undefined,
      phone: draft.phone || undefined,
      poolType: draft.poolType,
      propertyType: draft.propertyType,
      pains: draft.pains,
      painNotes: draft.painNotes || undefined,
      currentTreatment: draft.currentTreatment,
      volumeLitres: computed.litres > 0 ? computed.litres : undefined,
      volumeGallons: computed.gallons > 0 ? computed.gallons : undefined,
      recommendedSeries: computed.series || undefined,
      length: draft.length || undefined,
      width: draft.width || undefined,
      shallow: draft.shallow || undefined,
      deep: draft.deep || undefined,
      dimensionUnit: draft.dimensionUnit,
      pipeSize: draft.pipeSize,
      filtration: draft.filtration,
      heater: draft.heater,
      automation: draft.automation,
      electricalNearby: draft.electricalNearby,
      photosReady: draft.photosReady,
      ph: draft.ph || undefined,
      alkalinity: draft.alkalinity || undefined,
      hardness: draft.hardness || undefined,
      chlorine: draft.chlorine || undefined,
      copper: draft.copper || undefined,
      notes: draft.notes || undefined,
      company_website: draft.company_website,
    };

    const parsed = assessLeadSchema.safeParse(payload);
    if (!parsed.success) {
      setSubmitting(false);
      setStepError(parsed.error.issues[0]?.message ?? "Please check the form.");
      return;
    }

    let response: Response;
    try {
      response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
    } catch {
      setSubmitting(false);
      setOutcome({
        kind: "error",
        message:
          "We couldn't reach the server. Please check your connection and try again.",
      });
      return;
    }

    const data = (await response.json().catch(() => null)) as AssessLeadResponse | null;
    setSubmitting(false);

    if (response.ok && data?.delivered) {
      setOutcome({ kind: "sent" });
      return;
    }
    if (data && !data.configured) {
      setOutcome({ kind: "acknowledged", message: data.message });
      return;
    }
    setOutcome({
      kind: "error",
      message: data?.message ?? "Something went wrong on our end. Please try again.",
    });
  };

  if (outcome?.kind === "sent" || outcome?.kind === "acknowledged") {
    const sent = outcome.kind === "sent";
    return (
      <div className="rounded-[var(--radius)] border border-border bg-surface p-8 text-center shadow-[var(--shadow-1)] md:p-10">
        <CheckCircle2
          className="mx-auto size-10 text-accent-ecological"
          strokeWidth={1.5}
          aria-hidden
        />
        <h2 className="text-h2 mt-4 text-foreground">
          {sent ? "Assessment sent" : "Details captured"}
        </h2>
        <p className="text-body mt-3 text-muted-foreground">
          {sent
            ? "Your assessment is on its way. We'll follow up at the email you provided — photos can be attached in reply."
            : outcome.message}
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-[var(--radius)] border border-border-strong bg-surface-elevated p-1 shadow-[var(--shadow-2)]">
      <form
        className="rounded-[calc(var(--radius)-2px)] border border-border bg-surface p-6 md:p-8"
        onSubmit={(event) => {
          event.preventDefault();
          if (step === assessSteps.length - 1) void onSubmit();
          else goNext();
        }}
        noValidate
      >
        <ol className="mb-8 flex flex-wrap gap-2">
          {assessSteps.map((item, index) => (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => {
                  if (index <= step) setStep(index);
                }}
                className={cn(
                  "rounded-[var(--radius-control)] border px-2.5 py-1 text-[0.7rem] font-medium tracking-wide",
                  index === step
                    ? "border-accent-aquatic bg-[color:var(--accent)] text-foreground"
                    : index < step
                      ? "border-border text-foreground"
                      : "border-transparent text-muted-foreground",
                )}
              >
                {String(index + 1).padStart(2, "0")} {item.label}
              </button>
            </li>
          ))}
        </ol>

        {step === 0 ? (
          <fieldset className="space-y-6">
            <legend className="sr-only">Site</legend>
            <SelectField
              label="Pool type"
              value={draft.poolType}
              options={poolTypeOptions}
              onChange={(poolType) => patch({ poolType })}
            />
            <SelectField
              label="Property type"
              value={draft.propertyType}
              options={propertyTypeOptions}
              onChange={(propertyType) => patch({ propertyType })}
            />
          </fieldset>
        ) : null}

        {step === 1 ? (
          <fieldset className="space-y-6">
            <legend className="sr-only">Pain inventory</legend>
            <div>
              <TechnicalLabel>What is the water doing that you don’t want?</TechnicalLabel>
              <div className="mt-3 grid gap-2">
                {painOptions.map((option) => (
                  <label key={option} className={chipClass(draft.pains.includes(option))}>
                    <input
                      type="checkbox"
                      className="mt-1"
                      checked={draft.pains.includes(option)}
                      onChange={() => patch({ pains: toggleIn(draft.pains, option) })}
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            </div>
            <SelectField
              label="Current treatment"
              value={draft.currentTreatment}
              options={currentTreatmentOptions}
              onChange={(currentTreatment) => patch({ currentTreatment })}
            />
            <label className="block">
              <span className="text-small mb-1.5 block font-medium">Notes</span>
              <textarea
                rows={3}
                className={cn(fieldClass, "resize-y")}
                value={draft.painNotes}
                onChange={(event) => patch({ painNotes: event.target.value })}
              />
            </label>
          </fieldset>
        ) : null}

        {step === 2 ? (
          <fieldset className="space-y-6">
            <legend className="sr-only">Capacity</legend>
            {prefilledSeries ? (
              <StatusNote>
                Calculator prefill: {prefilledSeries}
                {computed.litres > 0
                  ? ` · ~${Math.round(computed.gallons).toLocaleString("en-US")} gal`
                  : ""}
                . You can replace these numbers.
              </StatusNote>
            ) : null}
            <div className="grid gap-4 sm:grid-cols-[1fr_auto]">
              <label className="block">
                <span className="text-small mb-1.5 block font-medium">Known capacity</span>
                <input
                  type="number"
                  min={0}
                  className={fieldClass}
                  value={draft.knownVolume}
                  onChange={(event) => patch({ knownVolume: event.target.value })}
                />
              </label>
              <label className="block">
                <span className="text-small mb-1.5 block font-medium">Unit</span>
                <select
                  className={fieldClass}
                  value={draft.volumeUnit}
                  onChange={(event) =>
                    patch({ volumeUnit: event.target.value as Draft["volumeUnit"] })
                  }
                >
                  <option value="gallons">US gallons</option>
                  <option value="litres">Litres</option>
                </select>
              </label>
            </div>
            <p className="text-small text-muted-foreground">
              Or measure a rectangle: length × width × average of shallow and deep × 7.5
              (gallons).
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              <NumberInput label="Length" value={draft.length} onChange={(length) => patch({ length })} />
              <NumberInput label="Width" value={draft.width} onChange={(width) => patch({ width })} />
              <NumberInput
                label="Shallow end"
                value={draft.shallow}
                onChange={(shallow) => patch({ shallow })}
              />
              <NumberInput label="Deep end" value={draft.deep} onChange={(deep) => patch({ deep })} />
            </div>
            <select
              className={cn(fieldClass, "max-w-40")}
              value={draft.dimensionUnit}
              onChange={(event) =>
                patch({ dimensionUnit: event.target.value as LengthUnit })
              }
            >
              <option value="ft">Feet</option>
              <option value="m">Metres</option>
            </select>
            {computed.litres > 0 ? (
              <p className="text-body text-foreground">
                Estimate: {Math.round(computed.gallons).toLocaleString("en-US")} gal ·{" "}
                {computed.series || "series at assessment"}
              </p>
            ) : null}
          </fieldset>
        ) : null}

        {step === 3 ? (
          <fieldset className="grid gap-5 sm:grid-cols-2">
            <legend className="sr-only">Plant room</legend>
            <SelectField
              label="Pipe size"
              value={draft.pipeSize}
              options={pipeSizeOptions}
              onChange={(pipeSize) => patch({ pipeSize })}
            />
            <SelectField
              label="Filtration"
              value={draft.filtration}
              options={filtrationOptions}
              onChange={(filtration) => patch({ filtration })}
            />
            <SelectField
              label="Heater"
              value={draft.heater}
              options={heaterOptions}
              onChange={(heater) => patch({ heater })}
            />
            <SelectField
              label="Automation"
              value={draft.automation}
              options={automationOptions}
              onChange={(automation) => patch({ automation })}
            />
            <div className="sm:col-span-2">
              <SelectField
                label="Electrical near the pad"
                value={draft.electricalNearby}
                options={electricalOptions}
                onChange={(electricalNearby) => patch({ electricalNearby })}
              />
            </div>
          </fieldset>
        ) : null}

        {step === 4 ? (
          <fieldset className="space-y-4">
            <legend className="sr-only">Photo checklist</legend>
            <p className="text-body text-muted-foreground">
              Tick what you can send after this form. Do not upload files here.
            </p>
            {photoChecklist.map((item) => (
              <label key={item.id} className={chipClass(draft.photosReady.includes(item.id))}>
                <input
                  type="checkbox"
                  className="mt-1"
                  checked={draft.photosReady.includes(item.id)}
                  onChange={() =>
                    patch({ photosReady: toggleIn(draft.photosReady, item.id) })
                  }
                />
                <span>
                  <span className="block font-medium">{item.label}</span>
                  <span className="text-small text-muted-foreground">{item.hint}</span>
                </span>
              </label>
            ))}
          </fieldset>
        ) : null}

        {step === 5 ? (
          <fieldset className="grid gap-4 sm:grid-cols-2">
            <legend className="sr-only">Water test</legend>
            <NumberInput label="pH" value={draft.ph} onChange={(ph) => patch({ ph })} />
            <NumberInput
              label="Total alkalinity (ppm)"
              value={draft.alkalinity}
              onChange={(alkalinity) => patch({ alkalinity })}
            />
            <NumberInput
              label="Calcium hardness (ppm)"
              value={draft.hardness}
              onChange={(hardness) => patch({ hardness })}
            />
            <NumberInput
              label="Free chlorine (ppm)"
              value={draft.chlorine}
              onChange={(chlorine) => patch({ chlorine })}
            />
            <NumberInput
              label="Copper (ppm)"
              value={draft.copper}
              onChange={(copper) => patch({ copper })}
            />
            {Number(draft.hardness) > 300 ? (
              <StatusNote className="sm:col-span-2">
                Hardness above about 300 ppm: we may discuss the Catalytic Super
                Conditioner or a partial drain and refill during follow-up.
              </StatusNote>
            ) : null}
          </fieldset>
        ) : null}

        {step === 6 ? (
          <fieldset className="space-y-5">
            <legend className="sr-only">Contact</legend>
            <ul className="space-y-2 rounded-[var(--radius-panel)] border border-border bg-surface-muted/40 p-4">
              {customerExplanation.map((line) => (
                <li key={line} className="text-small text-muted-foreground">
                  {line}
                </li>
              ))}
            </ul>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="text-small mb-1.5 block font-medium">Name</span>
                <input
                  className={fieldClass}
                  autoComplete="name"
                  value={draft.name}
                  onChange={(event) => patch({ name: event.target.value })}
                />
              </label>
              <label className="block">
                <span className="text-small mb-1.5 block font-medium">Email</span>
                <input
                  type="email"
                  className={fieldClass}
                  autoComplete="email"
                  value={draft.email}
                  onChange={(event) => patch({ email: event.target.value })}
                />
              </label>
              <label className="block">
                <span className="text-small mb-1.5 block font-medium">
                  Organization <span className="text-accent-steel">optional</span>
                </span>
                <input
                  className={fieldClass}
                  autoComplete="organization"
                  value={draft.organization}
                  onChange={(event) => patch({ organization: event.target.value })}
                />
              </label>
              <label className="block">
                <span className="text-small mb-1.5 block font-medium">
                  Phone <span className="text-accent-steel">optional</span>
                </span>
                <input
                  className={fieldClass}
                  autoComplete="tel"
                  value={draft.phone}
                  onChange={(event) => patch({ phone: event.target.value })}
                />
              </label>
            </div>
            <label className="block">
              <span className="text-small mb-1.5 block font-medium">Anything else</span>
              <textarea
                rows={4}
                className={cn(fieldClass, "resize-y")}
                value={draft.notes}
                onChange={(event) => patch({ notes: event.target.value })}
              />
            </label>
            <div aria-hidden className="absolute left-[-9999px]">
              <label htmlFor="company_website">Company website</label>
              <input
                id="company_website"
                tabIndex={-1}
                autoComplete="off"
                value={draft.company_website}
                onChange={(event) => patch({ company_website: event.target.value })}
              />
            </div>
            <StatusNote>{assessPrivacyNote}</StatusNote>
          </fieldset>
        ) : null}

        {stepError ? (
          <StatusNote tone="warning" className="mt-6">
            {stepError}
          </StatusNote>
        ) : null}
        {outcome?.kind === "error" ? (
          <StatusNote tone="warning" className="mt-6">
            {outcome.message}
          </StatusNote>
        ) : null}

        <div className="mt-8 flex flex-wrap gap-3">
          {step > 0 ? (
            <Button
              type="button"
              variant="outline"
              size="lg"
              className="rounded-[var(--radius-control)]"
              onClick={() => setStep((current) => Math.max(0, current - 1))}
            >
              Back
            </Button>
          ) : null}
          <Button
            type="submit"
            size="lg"
            disabled={submitting}
            className="rounded-[var(--radius-control)]"
          >
            {step === assessSteps.length - 1
              ? submitting
                ? "Submitting…"
                : "Submit assessment"
              : "Continue"}
          </Button>
        </div>
      </form>
    </div>
  );
}

function chipClass(active: boolean) {
  return cn(
    "flex cursor-pointer items-start gap-3 rounded-[var(--radius-control)] border px-3.5 py-3 text-small transition-colors",
    active
      ? "border-primary bg-[color:var(--accent)] text-foreground"
      : "border-border bg-surface text-foreground",
  );
}

function SelectField({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: readonly string[];
  onChange: (value: string) => void;
}) {
  return (
    <label className="block">
      <span className="text-small mb-1.5 block font-medium">{label}</span>
      <select
        className={fieldClass}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      >
        <option value="">Select…</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

function NumberInput({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <label className="block">
      <span className="text-small mb-1.5 block font-medium">{label}</span>
      <input
        type="number"
        inputMode="decimal"
        min={0}
        step="any"
        className={fieldClass}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </label>
  );
}
