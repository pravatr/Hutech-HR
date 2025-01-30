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

interface ProjectData {
  id: string;
  name: string;
  manager: string;
  department: string;
  team: string[];
  status: string;
  deadline: string;
}

interface ProjectEditFormProps {
  data: ProjectData;
  onChange: (field: keyof ProjectData, value: any) => void;
}

const ProjectEditForm = ({ data, onChange }: ProjectEditFormProps) => {
  return (
    <div className="grid gap-4 py-4">
      <div className="grid gap-2">
        <Label>Project Name</Label>
        <Input
          value={data.name}
          onChange={(e) => onChange("name", e.target.value)}
        />
      </div>
      <div className="grid gap-2">
        <Label>Project Manager</Label>
        <Input
          value={data.manager}
          onChange={(e) => onChange("manager", e.target.value)}
        />
      </div>
      <div className="grid gap-2">
        <Label>Department</Label>
        <Input
          value={data.department}
          onChange={(e) => onChange("department", e.target.value)}
        />
      </div>
      <div className="grid gap-2">
        <Label>Team Members (comma-separated)</Label>
        <Input
          value={data.team.join(", ")}
          onChange={(e) => onChange("team", e.target.value.split(", "))}
        />
      </div>
      <div className="grid gap-2">
        <Label>Deadline</Label>
        <Input
          type="date"
          value={data.deadline}
          onChange={(e) => onChange("deadline", e.target.value)}
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
            <SelectItem value="Planning">Planning</SelectItem>
            <SelectItem value="In Progress">In Progress</SelectItem>
            <SelectItem value="Completed">Completed</SelectItem>
            <SelectItem value="On Hold">On Hold</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default ProjectEditForm;
