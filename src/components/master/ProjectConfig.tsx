import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Pencil } from "lucide-react";
import EditDialog from "./EditDialog";
import ProjectEditForm from "./ProjectEditForm";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const defaultProjects = [
  {
    id: "P001",
    name: "HR System Upgrade",
    manager: "Alice Cooper",
    department: "IT",
    team: ["John Doe", "Jane Smith", "Bob Wilson"],
    status: "In Progress",
    deadline: "2024-06-30",
  },
  {
    id: "P002",
    name: "Marketing Campaign",
    manager: "David Lee",
    department: "Marketing",
    team: ["Sarah Johnson", "Mike Brown"],
    status: "Planning",
    deadline: "2024-07-15",
  },
];

const ProjectConfig = () => {
  const [editingProject, setEditingProject] = useState<
    (typeof defaultProjects)[0] | null
  >(null);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);

  const handleEdit = (project: (typeof defaultProjects)[0]) => {
    setEditingProject({ ...project });
    setIsEditDialogOpen(true);
  };

  const handleEditChange = (
    field: keyof (typeof defaultProjects)[0],
    value: any,
  ) => {
    setEditingProject((prev) => (prev ? { ...prev, [field]: value } : null));
  };

  const handleSave = () => {
    console.log("Saving project:", editingProject);
    setIsEditDialogOpen(false);
    setEditingProject(null);
  };
  return (
    <div className="space-y-6 mt-6">
      <Card className="p-4">
        <div className="flex justify-between items-center mb-4">
          <div className="space-y-1">
            <h3 className="text-lg font-semibold">Projects</h3>
            <p className="text-sm text-muted-foreground">
              Manage your organization's projects
            </p>
          </div>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Add Project
          </Button>
        </div>

        <div className="flex gap-4 mb-4">
          <Input placeholder="Search projects..." className="max-w-sm" />
        </div>

        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Project ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Manager</TableHead>
                <TableHead>Department</TableHead>
                <TableHead>Team Members</TableHead>
                <TableHead>Deadline</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {defaultProjects.map((project) => (
                <TableRow key={project.id}>
                  <TableCell>{project.id}</TableCell>
                  <TableCell>{project.name}</TableCell>
                  <TableCell>{project.manager}</TableCell>
                  <TableCell>{project.department}</TableCell>
                  <TableCell>{project.team.join(", ")}</TableCell>
                  <TableCell>{project.deadline}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        project.status === "In Progress"
                          ? "default"
                          : "secondary"
                      }
                    >
                      {project.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleEdit(project)}
                    >
                      <Pencil className="h-4 w-4 mr-2" />
                      Edit
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {editingProject && (
          <EditDialog
            isOpen={isEditDialogOpen}
            onClose={() => setIsEditDialogOpen(false)}
            title="Edit Project"
            onSave={handleSave}
          >
            <ProjectEditForm
              data={editingProject}
              onChange={handleEditChange}
            />
          </EditDialog>
        )}
      </Card>
    </div>
  );
};

export default ProjectConfig;
