import { LegalLayout, LegalBlock } from "@/components/blocks/legal-layout";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Terms of Use",
  description: "The terms that govern your use of the Zinc'd website.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <LegalLayout
      title="Terms of Use"
      intro="The terms that govern your use of this website. This is a working draft prepared for review."
      statusNote="Draft for review. Binding terms will be confirmed following legal review and published here."
      currentPath="/terms"
    >
      <LegalBlock heading="Use of this website">
        <p>
          This website is provided for information about Zinc'd products and services.
          By using it, you agree to use it lawfully and not to misuse or disrupt it.
        </p>
      </LegalBlock>
      <LegalBlock heading="Product information">
        <p>
          Product descriptions and specifications are provided for general information
          and may be updated. Specifications are typical and subject to model; confirm
          details during an assessment or with a specialist.
        </p>
      </LegalBlock>
      <LegalBlock heading="Intellectual property">
        <p>
          The Zinc'd name, branding and site content are the property of their
          respective owners and may not be used without permission.
        </p>
      </LegalBlock>
      <LegalBlock heading="Limitation of liability">
        <p>
          To the extent permitted by law, the website is provided &ldquo;as is&rdquo;
          without warranties of any kind regarding its content. Product warranty terms
          are addressed separately on the Warranty page.
        </p>
      </LegalBlock>
    </LegalLayout>
  );
}
