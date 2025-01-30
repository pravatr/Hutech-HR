import * as z from "zod";

export const projectFormSchema = z.object({
  name: z.string().min(2, "Project name must be at least 2 characters"),
  manager: z.string().min(2, "Manager name must be at least 2 characters"),
  department: z.string().min(1, "Department is required"),
  team: z.array(z.string()).min(1, "At least one team member is required"),
  deadline: z.string().min(1, "Deadline is required"),
  status: z.string().min(1, "Please select a status"),
});

export type ProjectFormValues = z.infer<typeof projectFormSchema>;
