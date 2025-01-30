import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface BusinessUnitData {
  id: string;
  name: string;
  head: string;
  departments: string[];
  revenue: string;
  status: string;
}

interface BusinessUnitEditFormProps {
  data: BusinessUnitData;
  onChange: (field: keyof BusinessUnitData, value: any) => void;
}

const BusinessUnitEditForm = ({
  data,
  onChange,
}: BusinessUnitEditFormProps) => {
  return (
    <div className="grid gap-4 py-4">
      <div className="grid gap-2">
        <Label>Business Unit Name</Label>
        <Input
          value={data.name}
          onChange={(e) => onChange("name", e.target.value)}
        />
      </div>
      <div className="grid gap-2">
        <Label>Head</Label>
        <Input
          value={data.head}
          onChange={(e) => onChange("head", e.target.value)}
        />
      </div>
      <div className="grid gap-2">
        <Label>Departments (comma-separated)</Label>
        <Input
          value={data.departments.join(", ")}
          onChange={(e) => onChange("departments", e.target.value.split(", "))}
        />
      </div>
      <div className="grid gap-2">
        <Label>Revenue</Label>
        <Input
          value={data.revenue}
          onChange={(e) => onChange("revenue", e.target.value)}
        />
      </div>
      <div className="grid gap-2">
        <Label>Status</Label>
        <Select
          value={data.status}
          onValueChange={(value) => onChange("status", value)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Active">Active</SelectItem>
            <SelectItem value="Inactive">Inactive</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default BusinessUnitEditForm;
