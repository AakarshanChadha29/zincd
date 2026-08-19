"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { StatusNote } from "@/components/ui/status-note";
import { cn } from "@/lib/cn";
import { resources, type ResourceId } from "@/content/resources-content";
import {
  resourceLeadSchema,
  type ResourceLeadResponse,
} from "@/lib/leads/resource-schema";

const fieldClass =
  "w-full rounded-[var(--radius-control)] border border-border bg-surface px-3.5 py-2.5 text-body text-foreground shadow-[var(--shadow-1)] outline-none transition-colors placeholder:text-accent-steel focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/40";

type Outcome =
  | { kind: "sent" }
  | { kind: "acknowledged"; message: string }
  | { kind: "error"; message: string };

export function ResourceRequestForm({ resourceId }: { resourceId: ResourceId }) {
  const resource = resources.find((item) => item.id === resourceId);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [organization, setOrganization] = useState("");
  const [role, setRole] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [outcome, setOutcome] = useState<Outcome | null>(null);
  const [fieldError, setFieldError] = useState<string | null>(null);

  if (!resource) return null;

  if (outcome?.kind === "sent" || outcome?.kind === "acknowledged") {
    const sent = outcome.kind === "sent";
    return (
      <div className="rounded-[var(--radius-panel)] border border-border bg-surface p-6 text-center">
        <CheckCircle2
          className="mx-auto size-8 text-accent-ecological"
          strokeWidth={1.5}
          aria-hidden
        />
        <p className="text-body mt-3 font-medium text-foreground">
          {sent
            ? resource.available
              ? "Request sent — we'll email the document."
              : "You're on the waitlist for the finalized manual."
            : outcome.message}
        </p>
      </div>
    );
  }

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setFieldError(null);
    setOutcome(null);

    const parsed = resourceLeadSchema.safeParse({
      kind: "resource",
      resourceId,
      name,
      email,
      organization: organization || undefined,
      role: role || undefined,
      company_website: honeypot,
    });
    if (!parsed.success) {
      setFieldError(parsed.error.issues[0]?.message ?? "Please check the form.");
      return;
    }

    setSubmitting(true);
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
        message: "We couldn't reach the server. Please try again.",
      });
      return;
    }

    const data = (await response.json().catch(() => null)) as ResourceLeadResponse | null;
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
      message: data?.message ?? "Something went wrong. Please try again.",
    });
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="text-small mb-1.5 block font-medium">Name</span>
          <input
            className={fieldClass}
            autoComplete="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>
        <label className="block">
          <span className="text-small mb-1.5 block font-medium">Email</span>
          <input
            type="email"
            className={fieldClass}
            autoComplete="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
        <label className="block">
          <span className="text-small mb-1.5 block font-medium">
            Organization <span className="text-accent-steel">optional</span>
          </span>
          <input
            className={fieldClass}
            autoComplete="organization"
            value={organization}
            onChange={(event) => setOrganization(event.target.value)}
          />
        </label>
        <label className="block">
          <span className="text-small mb-1.5 block font-medium">
            Role <span className="text-accent-steel">optional</span>
          </span>
          <input
            className={fieldClass}
            value={role}
            onChange={(event) => setRole(event.target.value)}
          />
        </label>
      </div>
      <div aria-hidden className="absolute left-[-9999px]">
        <label htmlFor={`company_website_${resourceId}`}>Company website</label>
        <input
          id={`company_website_${resourceId}`}
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(event) => setHoneypot(event.target.value)}
        />
      </div>
      {fieldError ? (
        <StatusNote tone="warning">{fieldError}</StatusNote>
      ) : null}
      {outcome?.kind === "error" ? (
        <StatusNote tone="warning">{outcome.message}</StatusNote>
      ) : null}
      <Button
        type="submit"
        size="lg"
        disabled={submitting}
        className={cn("rounded-[var(--radius-control)]")}
      >
        {submitting ? "Submitting…" : resource.cta}
      </Button>
    </form>
  );
}
