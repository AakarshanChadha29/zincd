import { cn } from "@/lib/cn";

type Step = { step?: string; title: string; body: string };

/**
 * Editorial process list — large type, no numbered circles or rails.
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
    <ol className={cn("relative space-y-10", className)}>
      {steps.map((step, index) => (
        <li key={step.title} className="max-w-2xl">
          {numbered ? (
            <p className="text-technical text-accent-aquatic">
              {step.step ?? String(index + 1).padStart(2, "0")}
            </p>
          ) : null}
          <h3 className="text-h2 mt-3 text-foreground">{step.title}</h3>
          <p className="text-body-large mt-3 text-muted-foreground">{step.body}</p>
        </li>
      ))}
    </ol>
  );
}
