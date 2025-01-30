import * as z from "zod";

export const departmentFormSchema = z.object({
  name: z.string().min(2, "Department name must be at least 2 characters"),
  head: z.string().min(2, "Department head name must be at least 2 characters"),
  employees: z.number().min(0, "Number of employees must be a positive number"),
  budget: z.string().min(1, "Budget is required"),
  status: z.string().min(1, "Please select a status"),
});

export type DepartmentFormValues = z.infer<typeof departmentFormSchema>;
