import { cn } from "@/lib/cn";

const chipStyles = {
  b2b: "border-[color:var(--blue-700)] text-[color:var(--blue-700)] bg-[color:var(--blue-900)]/5",
  b2c: "border-accent-aquatic text-accent-aquatic bg-accent-aquatic/5",
  residential: "border-accent-aquatic text-accent-aquatic bg-accent-aquatic/5",
  commercial: "border-[color:var(--blue-700)] text-[color:var(--blue-700)] bg-[color:var(--blue-900)]/5",
  partner: "border-accent-steel text-[color:var(--blue-900)] bg-surface-muted",
  ecological: "border-accent-ecological text-accent-ecological bg-accent-ecological/5",
} as const;

export type AudienceChipVariant = keyof typeof chipStyles;

type AudienceChipProps = {
  label: string;
  variant?: AudienceChipVariant;
  className?: string;
};

export function AudienceChip({
  label,
  variant = "b2b",
  className,
}: AudienceChipProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-[var(--radius-control)] border px-2.5 py-1 text-small font-medium",
        chipStyles[variant],
        className
      )}
    >
      {label}
    </span>
  );
}
