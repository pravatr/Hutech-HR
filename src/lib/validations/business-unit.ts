import * as z from "zod";

export const businessUnitFormSchema = z.object({
  name: z.string().min(2, "Business unit name must be at least 2 characters"),
  head: z.string().min(2, "Head name must be at least 2 characters"),
  departments: z
    .array(z.string())
    .min(1, "At least one department is required"),
  revenue: z.string().min(1, "Revenue is required"),
  status: z.string().min(1, "Please select a status"),
});

export type BusinessUnitFormValues = z.infer<typeof businessUnitFormSchema>;
