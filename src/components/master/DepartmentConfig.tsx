import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Pencil } from "lucide-react";
import EditDialog from "./EditDialog";
import DepartmentEditForm from "./DepartmentEditForm";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const defaultDepartments = [
  {
    id: "D001",
    name: "Human Resources",
    head: "Jane Wilson",
    employees: 15,
    budget: "$250,000",
    status: "Active",
  },
  {
    id: "D002",
    name: "Information Technology",
    head: "Mike Chen",
    employees: 30,
    budget: "$500,000",
    status: "Active",
  },
];

const DepartmentConfig = () => {
  const [editingDepartment, setEditingDepartment] = useState<
    (typeof defaultDepartments)[0] | null
  >(null);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);

  const handleEdit = (department: (typeof defaultDepartments)[0]) => {
    setEditingDepartment({ ...department });
    setIsEditDialogOpen(true);
  };

  const handleEditChange = (
    field: keyof (typeof defaultDepartments)[0],
    value: any,
  ) => {
    setEditingDepartment((prev) => (prev ? { ...prev, [field]: value } : null));
  };

  const handleSave = () => {
    console.log("Saving department:", editingDepartment);
    setIsEditDialogOpen(false);
    setEditingDepartment(null);
  };
  return (
    <div className="space-y-6 mt-6">
      <Card className="p-4">
        <div className="flex justify-between items-center mb-4">
          <div className="space-y-1">
            <h3 className="text-lg font-semibold">Departments</h3>
            <p className="text-sm text-muted-foreground">
              Manage your organization's departments
            </p>
          </div>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Add Department
          </Button>
        </div>

        <div className="flex gap-4 mb-4">
          <Input placeholder="Search departments..." className="max-w-sm" />
        </div>

        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Dept ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Head</TableHead>
                <TableHead>Employees</TableHead>
                <TableHead>Budget</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {defaultDepartments.map((dept) => (
                <TableRow key={dept.id}>
                  <TableCell>{dept.id}</TableCell>
                  <TableCell>{dept.name}</TableCell>
                  <TableCell>{dept.head}</TableCell>
                  <TableCell>{dept.employees}</TableCell>
                  <TableCell>{dept.budget}</TableCell>
                  <TableCell>{dept.status}</TableCell>
                  <TableCell>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleEdit(dept)}
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

        {editingDepartment && (
          <EditDialog
            isOpen={isEditDialogOpen}
            onClose={() => setIsEditDialogOpen(false)}
            title="Edit Department"
            onSave={handleSave}
          >
            <DepartmentEditForm
              data={editingDepartment}
              onChange={handleEditChange}
            />
          </EditDialog>
        )}
      </Card>
    </div>
  );
};

export default DepartmentConfig;
