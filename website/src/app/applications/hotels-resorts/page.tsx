import { ApplicationTemplate } from "@/components/blocks/application-template";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Hotels & Resorts Pool Ionization",
  description:
    "Zinc'd for hospitality aquatic amenities — guest-facing water experience with engineered PWM control and documented specifications for resort engineering teams.",
  path: "/applications/hotels-resorts",
  keywords: ["hotel pool ionization", "resort pool water treatment"],
});

export default function HotelsResortsApplicationsPage() {
  return <ApplicationTemplate slug="hotels-resorts" />;
}
