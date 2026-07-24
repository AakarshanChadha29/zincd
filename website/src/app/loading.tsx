import { Container } from "@/components/layout/container";
import { TechnicalLabel } from "@/components/ui/technical-label";

export default function Loading() {
  return (
    <div className="py-[var(--section-space-md)]" aria-busy="true" aria-live="polite">
      <Container>
        <TechnicalLabel>Loading</TechnicalLabel>
        <div className="mt-6 space-y-4">
          <div className="h-8 w-2/3 max-w-md animate-pulse rounded-[var(--radius-control)] bg-surface-muted" />
          <div className="h-4 w-full max-w-2xl animate-pulse rounded-[var(--radius-control)] bg-surface-muted" />
          <div className="h-4 w-5/6 max-w-xl animate-pulse rounded-[var(--radius-control)] bg-surface-muted" />
        </div>
        <span className="sr-only">Loading page content</span>
      </Container>
    </div>
  );
}
