"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { StatusNote } from "@/components/ui/status-note";
import { cn } from "@/lib/cn";
import {
  contactMethods,
  customerCategories,
  distributorLeadSchema,
  orderRanges,
  partnerInterests,
  type DistributorLeadInput,
  type DistributorLeadResponse,
} from "@/lib/leads/distributor-schema";

type FormValues = DistributorLeadInput;

type Outcome =
  | { kind: "sent" }
  | { kind: "acknowledged"; message: string }
  | { kind: "error"; message: string };

const fieldClass =
  "w-full rounded-[var(--radius-control)] border border-border bg-surface px-3.5 py-3 text-body text-foreground shadow-[var(--shadow-1)] outline-none transition-colors placeholder:text-accent-steel focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/40 aria-invalid:border-destructive";

const chipClass =
  "flex cursor-pointer items-start gap-3 rounded-[var(--radius-control)] border border-border bg-surface px-3.5 py-3 text-small text-foreground transition-colors has-[:checked]:border-primary has-[:checked]:bg-[color:var(--accent)] has-[:focus-visible]:ring-3 has-[:focus-visible]:ring-ring/40";

export function DistributorApplyForm() {
  const [outcome, setOutcome] = useState<Outcome | null>(null);

  const {
    register,
    handleSubmit,
    control,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(distributorLeadSchema),
    defaultValues: {
      company_website: "",
      customerCategories: [],
      interests: [],
      phone: "",
      orderRange: undefined,
      preferredContact: undefined,
    },
  });

  const preferredContact = useWatch({ control, name: "preferredContact" });

  const onSubmit = async (values: FormValues) => {
    setOutcome(null);

    let response: Response;
    try {
      response = await fetch("/api/distributor-leads", {
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

    const data = (await response.json().catch(() => null)) as
      | DistributorLeadResponse
      | null;

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
          {sent ? "Thanks — application sent" : "Thanks — details captured"}
        </h2>
        <p className="text-body mt-3 text-muted-foreground">
          {sent
            ? "Your distributor application is on its way to the Zinc'd team. We'll follow up using the contact method you chose."
            : outcome.message}
        </p>
        <Button
          variant="outline"
          size="lg"
          className="mt-6 rounded-[var(--radius-control)]"
          onClick={() => setOutcome(null)}
        >
          {sent ? "Submit another application" : "Edit your application"}
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="relative space-y-7"
      noValidate
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Company"
          error={errors.company?.message}
          htmlFor="company"
        >
          <input
            id="company"
            autoComplete="organization"
            className={fieldClass}
            aria-invalid={!!errors.company}
            aria-describedby={errors.company ? "company-error" : undefined}
            {...register("company")}
          />
        </Field>
        <Field
          label="Location"
          hint="City, region, country"
          error={errors.location?.message}
          htmlFor="location"
        >
          <input
            id="location"
            autoComplete="address-level2"
            className={fieldClass}
            aria-invalid={!!errors.location}
            aria-describedby={errors.location ? "location-error" : undefined}
            {...register("location")}
          />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Your name"
          error={errors.name?.message}
          htmlFor="name"
        >
          <input
            id="name"
            autoComplete="name"
            className={fieldClass}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            {...register("name")}
          />
        </Field>
        <Field
          label="Email"
          error={errors.email?.message}
          htmlFor="email"
        >
          <input
            id="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            className={fieldClass}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            {...register("email")}
          />
        </Field>
      </div>

      <Field
        label="Phone"
        hint={preferredContact === "Phone" ? "Required" : "Optional"}
        error={errors.phone?.message}
        htmlFor="phone"
      >
        <input
          id="phone"
          type="tel"
          autoComplete="tel"
          inputMode="tel"
          className={fieldClass}
          aria-invalid={!!errors.phone}
          aria-describedby={errors.phone ? "phone-error" : undefined}
          {...register("phone")}
        />
      </Field>

      <fieldset>
        <legend className="text-small mb-2 font-medium text-foreground">
          Existing customer categories
        </legend>
        <p className="text-small mb-3 text-accent-steel">Select all that apply.</p>
        <div className="grid gap-2 sm:grid-cols-2">
          {customerCategories.map((category) => (
            <label key={category} className={chipClass}>
              <input
                type="checkbox"
                value={category}
                className="mt-0.5 size-4 accent-[color:var(--teal-700)]"
                {...register("customerCategories")}
              />
              <span>{category}</span>
            </label>
          ))}
        </div>
        {errors.customerCategories?.message ? (
          <p className="text-small mt-2 text-[color:var(--danger)]">
            {errors.customerCategories.message}
          </p>
        ) : null}
      </fieldset>

      <Field
        label="Geographic coverage"
        hint="Territory, states, or countries"
        error={errors.geographicCoverage?.message}
        htmlFor="geographicCoverage"
      >
        <input
          id="geographicCoverage"
          className={fieldClass}
          aria-invalid={!!errors.geographicCoverage}
          aria-describedby={
            errors.geographicCoverage ? "geographicCoverage-error" : undefined
          }
          {...register("geographicCoverage")}
        />
      </Field>

      <Field
        label="Current pool or water-treatment portfolio"
        error={errors.portfolio?.message}
        htmlFor="portfolio"
      >
        <textarea
          id="portfolio"
          rows={4}
          className={cn(fieldClass, "resize-y")}
          placeholder="What you sell or service today — pumps, chemicals, ionization, hospitality accounts…"
          aria-invalid={!!errors.portfolio}
          aria-describedby={errors.portfolio ? "portfolio-error" : undefined}
          {...register("portfolio")}
        />
      </Field>

      <Field
        label="Estimated initial order range"
        error={errors.orderRange?.message}
        htmlFor="orderRange"
      >
        <select
          id="orderRange"
          className={fieldClass}
          defaultValue=""
          aria-invalid={!!errors.orderRange}
          aria-describedby={errors.orderRange ? "orderRange-error" : undefined}
          {...register("orderRange")}
        >
          <option value="" disabled>
            Select…
          </option>
          {orderRanges.map((range) => (
            <option key={range} value={range}>
              {range}
            </option>
          ))}
        </select>
      </Field>

      <fieldset>
        <legend className="text-small mb-2 font-medium text-foreground">
          Interest
        </legend>
        <p className="text-small mb-3 text-accent-steel">
          Distribution, wholesale, or resale — select all that fit.
        </p>
        <div className="grid gap-2 sm:grid-cols-3">
          {partnerInterests.map((interest) => (
            <label key={interest} className={chipClass}>
              <input
                type="checkbox"
                value={interest}
                className="mt-0.5 size-4 accent-[color:var(--teal-700)]"
                {...register("interests")}
              />
              <span>{interest}</span>
            </label>
          ))}
        </div>
        {errors.interests?.message ? (
          <p className="text-small mt-2 text-[color:var(--danger)]">
            {errors.interests.message}
          </p>
        ) : null}
      </fieldset>

      <fieldset>
        <legend className="text-small mb-2 font-medium text-foreground">
          Preferred contact method
        </legend>
        <div className="grid gap-2 sm:grid-cols-3">
          {contactMethods.map((method) => (
            <label key={method} className={chipClass}>
              <input
                type="radio"
                value={method}
                className="mt-0.5 size-4 accent-[color:var(--teal-700)]"
                {...register("preferredContact")}
              />
              <span>{method}</span>
            </label>
          ))}
        </div>
        {errors.preferredContact?.message ? (
          <p className="text-small mt-2 text-[color:var(--danger)]">
            {errors.preferredContact.message}
          </p>
        ) : null}
      </fieldset>

      <div aria-hidden className="absolute left-[-9999px]" tabIndex={-1}>
        <label htmlFor="company_website">Company website</label>
        <input
          id="company_website"
          tabIndex={-1}
          autoComplete="off"
          {...register("company_website")}
        />
      </div>

      <div aria-live="assertive">
        {outcome?.kind === "error" ? (
          <StatusNote tone="warning">{outcome.message}</StatusNote>
        ) : null}
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={isSubmitting}
        className="w-full rounded-[var(--radius-control)] sm:w-auto"
      >
        {isSubmitting ? "Submitting…" : "Send application"}
      </Button>

      <StatusNote>
        We use these details only to follow up about a Zinc'd partnership. See
        our{" "}
        <Link href="/privacy" className="underline underline-offset-4">
          privacy policy
        </Link>
        .
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
        <p
          id={`${htmlFor}-error`}
          className="text-small mt-1.5 text-[color:var(--danger)]"
        >
          {error}
        </p>
      ) : null}
    </div>
  );
}
