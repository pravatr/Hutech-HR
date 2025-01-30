import * as z from "zod";

export const organizationFormSchema = z.object({
  name: z.string().min(2, "Organization name must be at least 2 characters"),
  registrationNumber: z.string().min(1, "Registration number is required"),
  taxId: z.string().min(1, "Tax ID is required"),
  industry: z.string().min(1, "Industry is required"),
  foundedDate: z.string().min(1, "Founded date is required"),
  website: z.string().url("Please enter a valid URL"),
  address: z.string().min(10, "Address must be at least 10 characters"),
  description: z.string().optional(),
});

export type OrganizationFormValues = z.infer<typeof organizationFormSchema>;
