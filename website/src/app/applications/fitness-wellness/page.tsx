import { ApplicationTemplate } from "@/components/blocks/application-template";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Fitness & Wellness",
  description:
    "Zinc'd for fitness, wellness and aquatic-therapy environments — a lower-chemical water experience within a responsible, monitored program.",
  path: "/applications/fitness-wellness",
});

export default function FitnessWellnessApplicationsPage() {
  return <ApplicationTemplate slug="fitness-wellness" />;
}
