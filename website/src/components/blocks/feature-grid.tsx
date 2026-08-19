import {
  Building2,
  Cpu,
  Droplets,
  FlaskConical,
  ShieldCheck,
  Waypoints,
  type LucideIcon,
} from "lucide-react";

import { cn } from "@/lib/cn";

const iconMap: Record<string, LucideIcon> = {
  droplets: Droplets,
  cpu: Cpu,
  shield: ShieldCheck,
  flask: FlaskConical,
  waypoints: Waypoints,
  building: Building2,
};

type Feature = {
  id: string;
  label: string;
  title: string;
  body: string;
  icon: string;
};

/**
 * `columns` picks the desktop track count. Three is the original layout and
 * stays the default; two exists for four-item sets, which would otherwise leave
 * a single orphaned cell on the second row.
 */
export function FeatureGrid({
  features,
  className,
  columns = 3,
}: {
  features: readonly Feature[];
  className?: string;
  columns?: 2 | 3;
}) {
  return (
    <div
      className={cn(
        "grid gap-px overflow-hidden rounded-[var(--radius-panel)] border border-border bg-border",
        columns === 2 ? "md:grid-cols-2" : "md:grid-cols-3",
        className,
      )}
    >
      {features.map((feature) => {
        const Icon = iconMap[feature.icon] ?? Droplets;
        return (
          <div
            key={feature.id}
            className="group flex flex-col gap-4 bg-surface p-7 transition-colors hover:bg-surface-elevated"
          >
            <div className="flex size-11 items-center justify-center rounded-[var(--radius-control)] border border-border bg-surface-elevated text-accent-aquatic">
              <Icon strokeWidth={1.5} className="size-5" aria-hidden />
            </div>
            <div className="text-technical text-accent-aquatic">{feature.label}</div>
            <h3 className="text-h3 text-foreground">{feature.title}</h3>
            <p className="text-small text-muted-foreground">{feature.body}</p>
          </div>
        );
      })}
    </div>
  );
}
