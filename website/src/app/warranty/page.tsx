import { LegalLayout, LegalBlock } from "@/components/blocks/legal-layout";
import { warrantySummary } from "@/content/product-data";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Warranty",
  description:
    "Summary of Zinc'd warranty coverage for the ionization anode and electronic components, with conditions and exclusions.",
  path: "/warranty",
});

export default function WarrantyPage() {
  return (
    <LegalLayout
      title="Warranty"
      intro="A summary of warranty coverage for the Zinc'd system, drawn from product documentation."
      statusNote="Warranty terms are summarized from product documentation and confirmed with current warranty paperwork before purchase. Specific terms and exclusions may vary by model and conditions."
      currentPath="/warranty"
    >
      <LegalBlock heading="Coverage summary">
        <p>Indicative coverage as documented:</p>
        <div className="mt-3 overflow-hidden rounded-[var(--radius-panel)] border border-border bg-surface">
          {/* A <dl> may only contain <div> wrappers holding <dt>/<dd>. Nesting
              another <div> around them, or adding a sibling <p>, breaks that
              structure — so the layout is grid and the note lives in the <dd>. */}
          <dl className="divide-y divide-border">
            {warrantySummary.map((w) => (
              <div
                key={w.part}
                className="grid grid-cols-[1fr_auto] items-baseline gap-x-4 px-5 py-4"
              >
                <dt className="text-body font-medium text-foreground">{w.part}</dt>
                <dd className="text-technical normal-case tracking-normal text-accent-aquatic">
                  {w.term}
                  <span className="text-small mt-1 block font-sans normal-case tracking-normal text-muted-foreground">
                    {w.note}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </LegalBlock>
      <LegalBlock heading="What's covered">
        <p>
          Covered manufacturing defects follow a replacement policy for the affected
          component rather than field repair, subject to the applicable conditions.
        </p>
      </LegalBlock>
      <LegalBlock heading="Conditions & exclusions">
        <p>
          Coverage assumes correct installation, responsible operation and routine
          maintenance — including periodic anode cleaning and keeping water chemistry
          in range. Standard exclusions apply; full conditions are provided with your
          warranty documentation.
        </p>
      </LegalBlock>
      <LegalBlock heading="Maintaining your warranty">
        <p>
          Keep records of installation and routine maintenance. See{" "}
          <a href="/installation-maintenance" className="text-primary underline underline-offset-4">
            Installation &amp; Maintenance
          </a>{" "}
          for routine care expectations.
        </p>
      </LegalBlock>
    </LegalLayout>
  );
}
