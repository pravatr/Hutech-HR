import React from "react";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

interface Asset {
  id: string;
  name: string;
  type: string;
  assignedTo: string;
  department: string;
  purchaseDate: string;
  purchaseCost: number;
  currentValue: number;
  status: string;
}

const defaultAssets: Asset[] = [
  {
    id: "A001",
    name: "MacBook Pro",
    type: "Hardware",
    assignedTo: "John Doe",
    department: "IT",
    purchaseDate: "2023-01-15",
    purchaseCost: 2000,
    currentValue: 1600,
    status: "Active",
  },
  {
    id: "A002",
    name: "Office Desk",
    type: "Furniture",
    assignedTo: "Jane Smith",
    department: "HR",
    purchaseDate: "2023-06-20",
    purchaseCost: 500,
    currentValue: 450,
    status: "Active",
  },
];

const AssetList = () => {
  return (
    <Card className="p-4">
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Asset ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Assigned To</TableHead>
              <TableHead>Department</TableHead>
              <TableHead>Purchase Cost</TableHead>
              <TableHead>Current Value</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {defaultAssets.map((asset) => (
              <TableRow key={asset.id}>
                <TableCell>{asset.id}</TableCell>
                <TableCell>{asset.name}</TableCell>
                <TableCell>{asset.type}</TableCell>
                <TableCell>{asset.assignedTo}</TableCell>
                <TableCell>{asset.department}</TableCell>
                <TableCell>${asset.purchaseCost}</TableCell>
                <TableCell>${asset.currentValue}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      asset.status === "Active" ? "default" : "secondary"
                    }
                  >
                    {asset.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Card>
  );
};

export default AssetList;
