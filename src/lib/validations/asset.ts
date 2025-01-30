import * as z from "zod";

export const assetFormSchema = z.object({
  name: z.string().min(2, "Asset name must be at least 2 characters"),
  type: z.string().min(1, "Please select an asset type"),
  purchaseDate: z.string().min(1, "Purchase date is required"),
  purchaseCost: z.number().min(0, "Purchase cost must be a positive number"),
  department: z.string().min(1, "Please select a department"),
  assignedTo: z.string().min(2, "Assigned to must be at least 2 characters"),
  expectedLife: z.number().min(0, "Expected life must be a positive number"),
  warrantyPeriod: z
    .number()
    .min(0, "Warranty period must be a positive number"),
  description: z.string().optional(),
});

export type AssetFormValues = z.infer<typeof assetFormSchema>;
