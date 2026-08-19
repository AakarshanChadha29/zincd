import { z } from "zod";

import {
  automationOptions,
  currentTreatmentOptions,
  electricalOptions,
  filtrationOptions,
  heaterOptions,
  painOptions,
  photoChecklist,
  pipeSizeOptions,
  poolTypeOptions,
  propertyTypeOptions,
} from "@/content/assess-content";

const listed = <T extends readonly [string, ...string[]]>(options: T) =>
  z.enum(options);

const photoIds = photoChecklist.map((item) => item.id) as [
  (typeof photoChecklist)[number]["id"],
  ...(typeof photoChecklist)[number]["id"][],
];

export const assessLeadSchema = z.object({
  kind: z.literal("assess"),
  name: z.string().trim().min(2, "Please enter your name.").max(100),
  email: z.email("Please enter a valid email address.").max(200),
  organization: z.string().trim().max(150).optional(),
  phone: z.string().trim().max(40).optional(),
  poolType: listed(poolTypeOptions),
  propertyType: listed(propertyTypeOptions),
  pains: z.array(listed(painOptions)).min(1, "Select at least one item.").max(painOptions.length),
  painNotes: z.string().trim().max(1500).optional(),
  currentTreatment: listed(currentTreatmentOptions),
  volumeLitres: z.number().positive().max(10_000_000).optional(),
  volumeGallons: z.number().positive().max(3_000_000).optional(),
  recommendedSeries: z.string().trim().max(40).optional(),
  length: z.string().trim().max(20).optional(),
  width: z.string().trim().max(20).optional(),
  shallow: z.string().trim().max(20).optional(),
  deep: z.string().trim().max(20).optional(),
  dimensionUnit: z.enum(["ft", "m"]).optional(),
  pipeSize: listed(pipeSizeOptions),
  filtration: listed(filtrationOptions),
  heater: listed(heaterOptions),
  automation: listed(automationOptions),
  electricalNearby: listed(electricalOptions),
  photosReady: z.array(z.enum(photoIds)).max(photoIds.length),
  ph: z.string().trim().max(20).optional(),
  alkalinity: z.string().trim().max(20).optional(),
  hardness: z.string().trim().max(20).optional(),
  chlorine: z.string().trim().max(20).optional(),
  copper: z.string().trim().max(20).optional(),
  notes: z.string().trim().max(2000).optional(),
  company_website: z.string().max(200).optional(),
});

export type AssessLeadInput = z.infer<typeof assessLeadSchema>;

export type AssessLeadResponse = {
  delivered: boolean;
  configured: boolean;
  message: string;
  errors?: Partial<Record<keyof AssessLeadInput, string[]>>;
};
