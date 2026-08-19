import { z } from "zod";

import { resourceIds } from "@/content/resources-content";

export const resourceLeadSchema = z.object({
  kind: z.literal("resource"),
  resourceId: z.enum(resourceIds),
  name: z.string().trim().min(2, "Please enter your name.").max(100),
  email: z.email("Please enter a valid email address.").max(200),
  organization: z.string().trim().max(150).optional(),
  role: z.string().trim().max(80).optional(),
  company_website: z.string().max(200).optional(),
});

export type ResourceLeadInput = z.infer<typeof resourceLeadSchema>;

export type ResourceLeadResponse = {
  delivered: boolean;
  configured: boolean;
  message: string;
  errors?: Partial<Record<keyof ResourceLeadInput, string[]>>;
};
