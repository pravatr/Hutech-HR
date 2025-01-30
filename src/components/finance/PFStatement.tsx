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
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const PFStatement = () => {
  const pfHistory = [
    {
      month: "January 2024",
      employeeContribution: "600",
      employerContribution: "600",
      totalBalance: "24000",
    },
    {
      month: "December 2023",
      employeeContribution: "600",
      employerContribution: "600",
      totalBalance: "22800",
    },
    {
      month: "November 2023",
      employeeContribution: "600",
      employerContribution: "600",
      totalBalance: "21600",
    },
  ];

  return (
    <div className="space-y-6 mt-6">
      <Card className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">PF Statement</h3>
          <Button>
            <Download className="h-4 w-4 mr-2" />
            Download Statement
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Card className="p-4">
            <p className="text-sm text-muted-foreground">UAN Number</p>
            <p className="text-lg font-semibold">100XXXXXXXX</p>
          </Card>
          <Card className="p-4">
            <p className="text-sm text-muted-foreground">PF Number</p>
            <p className="text-lg font-semibold">PF/XXX/XXXXX</p>
          </Card>
          <Card className="p-4">
            <p className="text-sm text-muted-foreground">Total Balance</p>
            <p className="text-lg font-semibold">$24,000</p>
          </Card>
        </div>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Month</TableHead>
                <TableHead>Employee Contribution</TableHead>
                <TableHead>Employer Contribution</TableHead>
                <TableHead>Total Balance</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {pfHistory.map((item) => (
                <TableRow key={item.month}>
                  <TableCell>{item.month}</TableCell>
                  <TableCell>${item.employeeContribution}</TableCell>
                  <TableCell>${item.employerContribution}</TableCell>
                  <TableCell>${item.totalBalance}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>
    </div>
  );
};

export default PFStatement;
