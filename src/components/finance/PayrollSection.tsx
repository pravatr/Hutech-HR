import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Download } from "lucide-react";

const PayrollSection = () => {
  const salaryHistory = [
    {
      month: "January 2024",
      basic: "5000",
      hra: "2500",
      allowances: "1500",
      deductions: "800",
      netPay: "8200",
    },
    {
      month: "December 2023",
      basic: "5000",
      hra: "2500",
      allowances: "1500",
      deductions: "800",
      netPay: "8200",
    },
    {
      month: "November 2023",
      basic: "5000",
      hra: "2500",
      allowances: "1500",
      deductions: "800",
      netPay: "8200",
    },
  ];

  const downloadPayslip = (month: string) => {
    console.log(`Downloading payslip for ${month}`);
  };

  return (
    <div className="space-y-6 mt-6">
      <Card className="p-4">
        <h3 className="text-lg font-semibold mb-4">Salary History</h3>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Month</TableHead>
                <TableHead>Basic</TableHead>
                <TableHead>HRA</TableHead>
                <TableHead>Allowances</TableHead>
                <TableHead>Deductions</TableHead>
                <TableHead>Net Pay</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {salaryHistory.map((item) => (
                <TableRow key={item.month}>
                  <TableCell>{item.month}</TableCell>
                  <TableCell>${item.basic}</TableCell>
                  <TableCell>${item.hra}</TableCell>
                  <TableCell>${item.allowances}</TableCell>
                  <TableCell>${item.deductions}</TableCell>
                  <TableCell>${item.netPay}</TableCell>
                  <TableCell>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => downloadPayslip(item.month)}
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Payslip
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>
    </div>
  );
};

export default PayrollSection;
