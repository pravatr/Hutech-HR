import React from "react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface LeaveType {
  type: string;
  total: number;
  used: number;
  remaining: number;
}

const leaveTypes: LeaveType[] = [
  {
    type: "Annual Leave",
    total: 20,
    used: 5,
    remaining: 15,
  },
  {
    type: "Sick Leave",
    total: 10,
    used: 2,
    remaining: 8,
  },
  {
    type: "Personal Leave",
    total: 5,
    used: 1,
    remaining: 4,
  },
];

const LeaveBalance = () => {
  return (
    <div className="space-y-6 mt-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {leaveTypes.map((leave) => (
          <Card key={leave.type} className="p-4">
            <h3 className="font-semibold mb-2">{leave.type}</h3>
            <div className="space-y-2">
              <Progress
                value={(leave.used / leave.total) * 100}
                className="h-2"
              />
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>{leave.used} used</span>
                <span>{leave.remaining} remaining</span>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Card className="p-4">
        <h3 className="font-semibold mb-4">Leave History</h3>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Type</TableHead>
                <TableHead>Start Date</TableHead>
                <TableHead>Duration</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Annual Leave</TableCell>
                <TableCell>Jan 15, 2024</TableCell>
                <TableCell>5 days</TableCell>
                <TableCell>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Approved
                  </span>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Sick Leave</TableCell>
                <TableCell>Dec 10, 2023</TableCell>
                <TableCell>2 days</TableCell>
                <TableCell>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Approved
                  </span>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </Card>
    </div>
  );
};

export default LeaveBalance;
