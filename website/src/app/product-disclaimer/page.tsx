import { LegalLayout, LegalBlock } from "@/components/blocks/legal-layout";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Product Disclaimer",
  description:
    "How to interpret Zinc'd product and performance statements, including the role of responsible pool sanitation.",
  path: "/product-disclaimer",
  noIndex: true,
});

export default function ProductDisclaimerPage() {
  return (
    <LegalLayout
      title="Product Disclaimer"
      intro="How product and performance statements on this website should be interpreted."
      statusNote="Draft for review. Performance and regulatory statements are published only when supported by documentation and review."
      currentPath="/product-disclaimer"
    >
      <LegalBlock heading="Ionization complements sanitation">
        <p>
          Zinc'd copper–silver–zinc ionization is designed to reduce chlorine
          dependency as part of a responsible water program. It is not a
          &ldquo;chemical-free&rdquo; system: technical documentation recommends
          maintaining a residual of free chlorine (typically ~1.0 ppm), and water
          should be tested regularly to stay in range.
        </p>
      </LegalBlock>
      <LegalBlock heading="Results vary">
        <p>
          Water conditions, pool size, usage, circulation and maintenance all affect
          outcomes. Descriptions of how the product helps control algae and supports
          biofilm control are general and not guarantees of a specific result.
        </p>
      </LegalBlock>
      <LegalBlock heading="Specifications">
        <p>
          Published specifications are typical and subject to model. Confirm the
          correct series and details for your pool during a pool assessment.
        </p>
      </LegalBlock>
      <LegalBlock heading="Regulatory & performance claims">
        <p>
          Certification, testing and performance claims are published only where
          supported by current documentation and applicable review. Where such
          information is not yet published here, it should not be assumed.
        </p>
      </LegalBlock>
    </LegalLayout>
  );
}
