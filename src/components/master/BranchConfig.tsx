import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Pencil } from "lucide-react";
import EditDialog from "./EditDialog";
import BranchEditForm from "./BranchEditForm";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const defaultBranches = [
  {
    id: "B001",
    name: "Head Office",
    location: "New York",
    employees: 150,
    manager: "John Smith",
    status: "Active",
  },
  {
    id: "B002",
    name: "West Coast Branch",
    location: "San Francisco",
    employees: 75,
    manager: "Sarah Johnson",
    status: "Active",
  },
];

const BranchConfig = () => {
  const [editingBranch, setEditingBranch] = useState<
    (typeof defaultBranches)[0] | null
  >(null);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);

  const handleEdit = (branch: (typeof defaultBranches)[0]) => {
    setEditingBranch({ ...branch });
    setIsEditDialogOpen(true);
  };

  const handleEditChange = (
    field: keyof (typeof defaultBranches)[0],
    value: any,
  ) => {
    setEditingBranch((prev) => (prev ? { ...prev, [field]: value } : null));
  };

  const handleSave = () => {
    // Here you would typically update the data in your backend
    console.log("Saving branch:", editingBranch);
    setIsEditDialogOpen(false);
    setEditingBranch(null);
  };
  return (
    <div className="space-y-6 mt-6">
      <Card className="p-4">
        <div className="flex justify-between items-center mb-4">
          <div className="space-y-1">
            <h3 className="text-lg font-semibold">Branch Offices</h3>
            <p className="text-sm text-muted-foreground">
              Manage your organization's branch offices
            </p>
          </div>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Add Branch
          </Button>
        </div>

        <div className="flex gap-4 mb-4">
          <Input placeholder="Search branches..." className="max-w-sm" />
        </div>

        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Branch ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Employees</TableHead>
                <TableHead>Manager</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {defaultBranches.map((branch) => (
                <TableRow key={branch.id}>
                  <TableCell>{branch.id}</TableCell>
                  <TableCell>{branch.name}</TableCell>
                  <TableCell>{branch.location}</TableCell>
                  <TableCell>{branch.employees}</TableCell>
                  <TableCell>{branch.manager}</TableCell>
                  <TableCell>{branch.status}</TableCell>
                  <TableCell>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleEdit(branch)}
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

        {editingBranch && (
          <EditDialog
            isOpen={isEditDialogOpen}
            onClose={() => setIsEditDialogOpen(false)}
            title="Edit Branch"
            onSave={handleSave}
          >
            <BranchEditForm data={editingBranch} onChange={handleEditChange} />
          </EditDialog>
        )}
      </Card>
    </div>
  );
};

export default BranchConfig;
