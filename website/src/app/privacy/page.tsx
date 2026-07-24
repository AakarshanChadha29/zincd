import { LegalLayout, LegalBlock } from "@/components/blocks/legal-layout";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Privacy Policy",
  description:
    "How Zinc'd collects, uses and protects information submitted through this website.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      intro="How Zinc'd handles information you provide through this website. This is a working draft prepared for review."
      statusNote="Draft for review. Final privacy language will be confirmed once data-collection systems (enquiry forms, analytics) are finalized and legal review is complete."
      currentPath="/privacy"
    >
      <LegalBlock heading="Information we collect">
        <p>
          When you submit an enquiry, we may collect the details you provide, such as
          your name, email address, organization and message. We may also collect
          standard analytics about how the site is used.
        </p>
      </LegalBlock>
      <LegalBlock heading="How we use information">
        <p>
          Enquiry details are used to respond to your request and, where relevant,
          to follow up about a pool assessment or partnership. Analytics help us
          understand and improve the website.
        </p>
      </LegalBlock>
      <LegalBlock heading="Sharing">
        <p>
          We do not sell your personal information. Details are shared only as needed
          to respond to your enquiry or as required by law.
        </p>
      </LegalBlock>
      <LegalBlock heading="Your choices">
        <p>
          You may request access to, correction of, or deletion of the information you
          have provided. Confirmed contact details for such requests will be published
          on the Contact page.
        </p>
      </LegalBlock>
    </LegalLayout>
  );
}
