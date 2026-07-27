import {
  Cpu,
  Droplets,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

import { cn } from "@/lib/cn";

const iconMap: Record<string, LucideIcon> = {
  droplets: Droplets,
  cpu: Cpu,
  shield: ShieldCheck,
};

type Feature = {
  id: string;
  label: string;
  title: string;
  body: string;
  icon: string;
};

export function FeatureGrid({
  features,
  className,
}: {
  features: readonly Feature[];
  className?: string;
}) {
  return (
    <div className={cn("grid gap-px overflow-hidden rounded-[var(--radius-panel)] border border-border bg-border md:grid-cols-3", className)}>
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
