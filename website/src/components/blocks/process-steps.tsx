import { cn } from "@/lib/cn";

type Step = { step?: string; title: string; body: string };

/**
 * Vertical numbered process with a connecting rail. Reads correctly with motion
 * disabled; the connecting line is decorative.
 */
export function ProcessSteps({
  steps,
  className,
  numbered = true,
}: {
  steps: readonly Step[];
  className?: string;
  numbered?: boolean;
}) {
  return (
    <ol className={cn("relative space-y-0", className)}>
      {steps.map((step, index) => (
        <li key={step.title} className="relative grid grid-cols-[auto_minmax(0,1fr)] gap-5 pb-8 last:pb-0">
          {/* Rail */}
          {index < steps.length - 1 ? (
            <span
              aria-hidden
              className="absolute left-[21px] top-11 bottom-0 w-px bg-gradient-to-b from-border to-transparent"
            />
          ) : null}
          <span className="relative z-10 flex size-11 shrink-0 items-center justify-center rounded-full border border-border bg-surface text-technical text-accent-aquatic shadow-[var(--shadow-1)]">
            {numbered ? (step.step ?? String(index + 1).padStart(2, "0")) : null}
            {!numbered ? (
              <span className="size-2 rounded-full bg-accent-aquatic" />
            ) : null}
          </span>
          <div className="pt-1">
            <h3 className="text-h3 text-[color:var(--blue-900)]">{step.title}</h3>
            <p className="text-body mt-2 text-muted-foreground">{step.body}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
