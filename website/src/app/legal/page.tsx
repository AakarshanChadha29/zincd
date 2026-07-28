import { LegalLayout, LegalBlock } from "@/components/blocks/legal-layout";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Legal Center",
  description:
    "Index of Zinc'd legal and policy pages — privacy, terms, product disclaimer and warranty.",
  path: "/legal",
  noIndex: true,
});

export default function LegalPage() {
  return (
    <LegalLayout
      title="Legal Center"
      intro="Policy and disclosure documents for Zinc'd. Final wording is prepared for the applicable US jurisdiction and reviewed before publication."
      statusNote="These documents are being finalized and reviewed. The content below describes their intended scope; binding legal text is published once review is complete."
      currentPath="/legal"
    >
      <LegalBlock heading="Privacy Policy">
        <p>
          Describes what information Zinc'd collects through this website — such as
          enquiry-form details and analytics — and how it is used and protected.
        </p>
      </LegalBlock>
      <LegalBlock heading="Terms of Use">
        <p>
          Governs use of this website, acceptable use, intellectual property, and
          limitations of liability.
        </p>
      </LegalBlock>
      <LegalBlock heading="Product Disclaimer">
        <p>
          Sets out how product and performance statements should be interpreted,
          including that ionization complements — and does not replace — responsible
          pool sanitation.
        </p>
      </LegalBlock>
      <LegalBlock heading="Warranty">
        <p>
          Summarizes warranty coverage for the ionization anode and electronic
          components, along with conditions and exclusions.
        </p>
      </LegalBlock>
    </LegalLayout>
  );
}
