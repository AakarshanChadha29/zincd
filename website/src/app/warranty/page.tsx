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
          <dl className="divide-y divide-border">
            {warrantySummary.map((w) => (
              <div key={w.part} className="px-5 py-4">
                <div className="flex items-baseline justify-between gap-4">
                  <dt className="text-body font-medium text-[color:var(--blue-900)]">{w.part}</dt>
                  <dd className="text-technical normal-case tracking-normal text-accent-aquatic">
                    {w.term}
                  </dd>
                </div>
                <p className="text-small mt-1 text-muted-foreground">{w.note}</p>
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
