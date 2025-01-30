import * as z from "zod";

export const branchFormSchema = z.object({
  name: z.string().min(2, "Branch name must be at least 2 characters"),
  location: z.string().min(2, "Location must be at least 2 characters"),
  employees: z.number().min(0, "Number of employees must be a positive number"),
  manager: z.string().min(2, "Manager name must be at least 2 characters"),
  status: z.string().min(1, "Please select a status"),
});

export type BranchFormValues = z.infer<typeof branchFormSchema>;
