import { cn } from "@/lib/cn";

type SpecRow = { label: string; value: string; note?: string };

/**
 * Engineered specification table — mono values, hairline rows, card-stack on
 * mobile. Values should be presented as "typical / subject to model" by callers.
 */
export function SpecTable({
  rows,
  className,
}: {
  rows: readonly SpecRow[];
  className?: string;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-[var(--radius-panel)] border border-border bg-surface",
        className
      )}
    >
      <dl className="divide-y divide-border">
        {rows.map((row) => (
          <div
            key={row.label}
            className="grid grid-cols-1 gap-1 px-5 py-4 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-baseline sm:gap-6"
          >
            <dt className="text-small text-muted-foreground">{row.label}</dt>
            <dd className="flex items-baseline gap-3 sm:justify-end">
              <span className="text-technical text-foreground normal-case tracking-normal text-[0.95rem]">
                {row.value}
              </span>
              {row.note ? (
                <span className="text-small hidden text-accent-steel sm:inline">
                  {row.note}
                </span>
              ) : null}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
