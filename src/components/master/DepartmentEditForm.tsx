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

interface DepartmentData {
  id: string;
  name: string;
  head: string;
  employees: number;
  budget: string;
  status: string;
}

interface DepartmentEditFormProps {
  data: DepartmentData;
  onChange: (field: keyof DepartmentData, value: any) => void;
}

const DepartmentEditForm = ({ data, onChange }: DepartmentEditFormProps) => {
  return (
    <div className="grid gap-4 py-4">
      <div className="grid gap-2">
        <Label>Department Name</Label>
        <Input
          value={data.name}
          onChange={(e) => onChange("name", e.target.value)}
        />
      </div>
      <div className="grid gap-2">
        <Label>Department Head</Label>
        <Input
          value={data.head}
          onChange={(e) => onChange("head", e.target.value)}
        />
      </div>
      <div className="grid gap-2">
        <Label>Number of Employees</Label>
        <Input
          type="number"
          value={data.employees}
          onChange={(e) => onChange("employees", parseInt(e.target.value))}
        />
      </div>
      <div className="grid gap-2">
        <Label>Budget</Label>
        <Input
          value={data.budget}
          onChange={(e) => onChange("budget", e.target.value)}
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

export default DepartmentEditForm;
