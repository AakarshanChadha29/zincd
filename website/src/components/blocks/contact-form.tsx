"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { StatusNote } from "@/components/ui/status-note";
import { cn } from "@/lib/cn";

const intents = [
  { value: "assessment", label: "Pool assessment" },
  { value: "specialist", label: "Talk to a specialist" },
  { value: "partner", label: "Distributor / partner" },
] as const;

const schema = z.object({
  intent: z.enum(["assessment", "specialist", "partner"]),
  name: z.string().min(2, "Please enter your name."),
  email: z.string().email("Please enter a valid email address."),
  organization: z.string().optional(),
  poolType: z.string().optional(),
  message: z.string().min(10, "A little more detail helps us respond well."),
  // Honeypot — must stay empty.
  company_website: z.string().max(0).optional(),
});

type FormValues = z.infer<typeof schema>;

const fieldClass =
  "w-full rounded-[var(--radius-control)] border border-border bg-surface px-3.5 py-2.5 text-body text-foreground shadow-[var(--shadow-1)] outline-none transition-colors placeholder:text-accent-steel focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/40 aria-invalid:border-destructive";

export function ContactForm() {
  const params = useSearchParams();
  const intentParam = params.get("intent");
  const defaultIntent =
    intents.find((i) => i.value === intentParam)?.value ?? "assessment";

  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { intent: defaultIntent, company_website: "" },
  });

  const selectedIntent = watch("intent");

  const onSubmit = async () => {
    // Submission backend (email / CRM) is a later phase. We validate and
    // acknowledge locally without sending or storing data.
    await new Promise((r) => setTimeout(r, 500));
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-[var(--radius)] border border-border bg-surface p-8 text-center shadow-[var(--shadow-1)]">
        <CheckCircle2 className="mx-auto size-10 text-accent-ecological" strokeWidth={1.5} aria-hidden />
        <h2 className="text-h2 mt-4 text-[color:var(--blue-900)]">Thanks — details captured</h2>
        <p className="text-body mt-3 text-muted-foreground">
          Your enquiry has been validated in your browser. Message delivery and
          official contact channels are being finalized and will be connected here
          shortly — no message has been sent or stored yet.
        </p>
        <Button
          variant="outline"
          size="lg"
          className="mt-6 rounded-[var(--radius-control)]"
          onClick={() => setSubmitted(false)}
        >
          Edit your enquiry
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-[var(--radius)] border border-border bg-surface p-6 shadow-[var(--shadow-1)] md:p-8"
      noValidate
    >
      {/* Intent selector */}
      <fieldset>
        <legend className="text-technical text-accent-aquatic">I'm here to…</legend>
        <div className="mt-3 grid gap-2 sm:grid-cols-3">
          {intents.map((intent) => (
            <button
              key={intent.value}
              type="button"
              onClick={() => setValue("intent", intent.value)}
              aria-pressed={selectedIntent === intent.value}
              className={cn(
                "rounded-[var(--radius-control)] border px-3 py-2.5 text-small font-medium transition-colors",
                selectedIntent === intent.value
                  ? "border-primary bg-[color:var(--accent)] text-[color:var(--blue-900)]"
                  : "border-border bg-surface text-muted-foreground hover:border-border-strong"
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
            <input id="name" autoComplete="name" className={fieldClass} aria-invalid={!!errors.name} {...register("name")} />
          </Field>
          <Field label="Email" error={errors.email?.message} htmlFor="email">
            <input id="email" type="email" autoComplete="email" className={fieldClass} aria-invalid={!!errors.email} {...register("email")} />
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
              <option>Residential / home</option>
              <option>Hotel / resort</option>
              <option>Commercial / community</option>
              <option>Fitness / wellness</option>
              <option>Other</option>
            </select>
          </Field>
        </div>

        <Field label="How can we help?" error={errors.message?.message} htmlFor="message">
          <textarea
            id="message"
            rows={5}
            className={cn(fieldClass, "resize-y")}
            aria-invalid={!!errors.message}
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

      <div className="mt-7">
        <Button type="submit" size="lg" disabled={isSubmitting} className="w-full rounded-[var(--radius-control)] sm:w-auto">
          {isSubmitting ? "Submitting…" : "Submit enquiry"}
        </Button>
      </div>

      <StatusNote className="mt-6">
        Message delivery isn't connected yet — official contact channels are being
        confirmed. Your details are validated in-browser and are not sent or stored.
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
        <label htmlFor={htmlFor} className="text-small font-medium text-[color:var(--blue-900)]">
          {label}
        </label>
        {hint ? <span className="text-small text-accent-steel">{hint}</span> : null}
      </div>
      {children}
      {error ? <p className="text-small mt-1.5 text-[color:var(--danger)]">{error}</p> : null}
    </div>
  );
}
