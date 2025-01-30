import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Pencil } from "lucide-react";
import EditDialog from "./EditDialog";
import BusinessUnitEditForm from "./BusinessUnitEditForm";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const defaultBusinessUnits = [
  {
    id: "BU001",
    name: "Enterprise Solutions",
    head: "Robert Brown",
    departments: ["Sales", "Development"],
    revenue: "$2.5M",
    status: "Active",
  },
  {
    id: "BU002",
    name: "Consumer Products",
    head: "Lisa Anderson",
    departments: ["Marketing", "Support"],
    revenue: "$1.8M",
    status: "Active",
  },
];

const BusinessUnitConfig = () => {
  const [editingUnit, setEditingUnit] = useState<
    (typeof defaultBusinessUnits)[0] | null
  >(null);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);

  const handleEdit = (unit: (typeof defaultBusinessUnits)[0]) => {
    setEditingUnit({ ...unit });
    setIsEditDialogOpen(true);
  };

  const handleEditChange = (
    field: keyof (typeof defaultBusinessUnits)[0],
    value: any,
  ) => {
    setEditingUnit((prev) => (prev ? { ...prev, [field]: value } : null));
  };

  const handleSave = () => {
    console.log("Saving business unit:", editingUnit);
    setIsEditDialogOpen(false);
    setEditingUnit(null);
  };
  return (
    <div className="space-y-6 mt-6">
      <Card className="p-4">
        <div className="flex justify-between items-center mb-4">
          <div className="space-y-1">
            <h3 className="text-lg font-semibold">Business Units</h3>
            <p className="text-sm text-muted-foreground">
              Manage your organization's business units
            </p>
          </div>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Add Business Unit
          </Button>
        </div>

        <div className="flex gap-4 mb-4">
          <Input placeholder="Search business units..." className="max-w-sm" />
        </div>

        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Unit ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Head</TableHead>
                <TableHead>Departments</TableHead>
                <TableHead>Revenue</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {defaultBusinessUnits.map((unit) => (
                <TableRow key={unit.id}>
                  <TableCell>{unit.id}</TableCell>
                  <TableCell>{unit.name}</TableCell>
                  <TableCell>{unit.head}</TableCell>
                  <TableCell>{unit.departments.join(", ")}</TableCell>
                  <TableCell>{unit.revenue}</TableCell>
                  <TableCell>{unit.status}</TableCell>
                  <TableCell>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleEdit(unit)}
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

        {editingUnit && (
          <EditDialog
            isOpen={isEditDialogOpen}
            onClose={() => setIsEditDialogOpen(false)}
            title="Edit Business Unit"
            onSave={handleSave}
          >
            <BusinessUnitEditForm
              data={editingUnit}
              onChange={handleEditChange}
            />
          </EditDialog>
        )}
      </Card>
    </div>
  );
};

export default BusinessUnitConfig;
