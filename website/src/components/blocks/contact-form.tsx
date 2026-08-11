"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { StatusNote } from "@/components/ui/status-note";
import { cn } from "@/lib/cn";
import {
  leadIntents,
  leadSchema,
  poolTypes,
  type LeadInput,
  type LeadResponse,
} from "@/lib/leads/schema";

type FormValues = LeadInput;

/**
 * Outcome of a submission. `sent` and `acknowledged` are both successes from
 * the visitor's point of view, but only `sent` means a message actually left
 * the building — the copy differs so we never claim delivery that didn't happen.
 */
type Outcome =
  | { kind: "sent" }
  | { kind: "acknowledged"; message: string }
  | { kind: "error"; message: string };

const fieldClass =
  "w-full rounded-[var(--radius-control)] border border-border bg-surface px-3.5 py-2.5 text-body text-foreground shadow-[var(--shadow-1)] outline-none transition-colors placeholder:text-accent-steel focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/40 aria-invalid:border-destructive";

export function ContactForm() {
  const params = useSearchParams();
  const intentParam = params.get("intent");
  const seriesParam = params.get("series");
  const volumeParam = params.get("volume");
  const defaultIntent =
    leadIntents.find((i) => i.value === intentParam)?.value ?? "assessment";

  const defaultMessage =
    seriesParam && volumeParam
      ? `Calculator result: recommended ${seriesParam} for approximately ${Number(volumeParam).toLocaleString("en-US")} litres. Please confirm series and next steps for my pool.`
      : seriesParam
        ? `Calculator result: recommended ${seriesParam}. Please confirm series and next steps for my pool.`
        : "";

  const [outcome, setOutcome] = useState<Outcome | null>(null);

  const {
    register,
    handleSubmit,
    control,
    setValue,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(leadSchema),
    defaultValues: {
      intent: defaultIntent,
      company_website: "",
      message: defaultMessage,
    },
  });

  // `useWatch` rather than `watch()` — the latter returns a fresh function on
  // every render, which React Compiler cannot memoize safely.
  const selectedIntent = useWatch({ control, name: "intent" });

  const onSubmit = async (values: FormValues) => {
    setOutcome(null);

    let response: Response;
    try {
      response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
    } catch {
      setOutcome({
        kind: "error",
        message:
          "We couldn't reach the server. Please check your connection and try again.",
      });
      return;
    }

    const data = (await response.json().catch(() => null)) as LeadResponse | null;

    // Server-side validation disagreed with the client. Surface it per-field.
    if (response.status === 400 && data?.errors) {
      for (const [field, messages] of Object.entries(data.errors)) {
        if (messages?.[0]) {
          setError(field as keyof FormValues, {
            type: "server",
            message: messages[0],
          });
        }
      }
      return;
    }

    if (response.ok && data?.delivered) {
      setOutcome({ kind: "sent" });
      return;
    }

    // Delivery isn't wired up yet (503) — a success for the visitor's input,
    // but explicitly not a claim that anything was sent.
    if (data && !data.configured) {
      setOutcome({ kind: "acknowledged", message: data.message });
      return;
    }

    setOutcome({
      kind: "error",
      message:
        data?.message ??
        "Something went wrong on our end. Please try again in a moment.",
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
          {sent ? "Thanks — enquiry sent" : "Thanks — details captured"}
        </h2>
        <p className="text-body mt-3 text-muted-foreground">
          {sent
            ? "Your enquiry is on its way to the Zinc'd team. We'll get back to you at the email address you provided."
            : outcome.message}
        </p>
        <Button
          variant="outline"
          size="lg"
          className="mt-6 rounded-[var(--radius-control)]"
          onClick={() => setOutcome(null)}
        >
          {sent ? "Send another enquiry" : "Edit your enquiry"}
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="relative rounded-[var(--radius)] bg-surface p-6 md:p-7"
      noValidate
    >
      {/* Intent selector */}
      <fieldset>
        <legend className="text-technical text-accent-aquatic">I&apos;m here to…</legend>
        <div className="mt-3 grid gap-2 sm:grid-cols-3">
          {leadIntents.map((intent) => (
            <button
              key={intent.value}
              type="button"
              onClick={() => setValue("intent", intent.value)}
              aria-pressed={selectedIntent === intent.value}
              className={cn(
                "rounded-[var(--radius-control)] border px-3 py-3 text-small font-medium transition-colors",
                selectedIntent === intent.value
                  ? "border-primary bg-[color:var(--accent)] text-foreground shadow-[var(--shadow-1)]"
                  : "border-border bg-muted/30 text-muted-foreground hover:border-border-strong hover:bg-surface"
              )}
            >
              {intent.label}
            </button>
          ))}
        </div>
      </fieldset>

      <div className="mt-6 grid gap-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Name" error={errors.name?.message} htmlFor="name">
            <input
              id="name"
              autoComplete="name"
              className={fieldClass}
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "name-error" : undefined}
              {...register("name")}
            />
          </Field>
          <Field label="Email" error={errors.email?.message} htmlFor="email">
            <input
              id="email"
              type="email"
              autoComplete="email"
              className={fieldClass}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
              {...register("email")}
            />
          </Field>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Organization" hint="Optional" htmlFor="organization">
            <input id="organization" autoComplete="organization" className={fieldClass} {...register("organization")} />
          </Field>
          <Field label="Pool type" hint="Optional" htmlFor="poolType">
            <select id="poolType" className={fieldClass} defaultValue="" {...register("poolType")}>
              <option value="" disabled>
                Select…
              </option>
              {poolTypes.map((type) => (
                <option key={type}>{type}</option>
              ))}
            </select>
          </Field>
        </div>

        <Field label="How can we help?" error={errors.message?.message} htmlFor="message">
          <textarea
            id="message"
            rows={5}
            className={cn(fieldClass, "resize-y")}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "message-error" : undefined}
            placeholder="Tell us about your pool, circulation system, or partnership interest."
            {...register("message")}
          />
        </Field>

        {/* Honeypot — visually hidden, off-screen */}
        <div aria-hidden className="absolute left-[-9999px]" tabIndex={-1}>
          <label htmlFor="company_website">Company website</label>
          <input id="company_website" tabIndex={-1} autoComplete="off" {...register("company_website")} />
        </div>
      </div>

      {/* Persistent live region so the failure is announced when it appears. */}
      <div aria-live="assertive">
        {outcome?.kind === "error" ? (
          <StatusNote tone="warning" className="mt-6">
            {outcome.message}
          </StatusNote>
        ) : null}
      </div>

      <div className="mt-7">
        <Button type="submit" size="lg" disabled={isSubmitting} className="w-full rounded-[var(--radius-control)] sm:w-auto">
          {isSubmitting ? "Submitting…" : "Submit enquiry"}
        </Button>
      </div>

      <StatusNote className="mt-6">
        We use your details only to respond to this enquiry. Official contact
        channels are still being confirmed.
      </StatusNote>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  hint,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  hint?: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="mb-1.5 flex items-baseline justify-between gap-2">
        <label htmlFor={htmlFor} className="text-small font-medium text-foreground">
          {label}
        </label>
        {hint ? <span className="text-small text-accent-steel">{hint}</span> : null}
      </div>
      {children}
      {error ? (
        <p id={`${htmlFor}-error`} className="text-small mt-1.5 text-[color:var(--danger)]">
          {error}
        </p>
      ) : null}
    </div>
  );
}
