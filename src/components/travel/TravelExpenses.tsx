import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Plus, Upload } from "lucide-react";

const defaultExpenses = [
  {
    id: "EXP001",
    travel_request_id: "TR001",
    date: "2024-02-15",
    category: "Transportation",
    description: "Flight tickets",
    amount: 800,
    status: "Approved",
  },
  {
    id: "EXP002",
    travel_request_id: "TR001",
    date: "2024-02-15",
    category: "Accommodation",
    description: "Hotel stay - 3 nights",
    amount: 450,
    status: "Approved",
  },
  {
    id: "EXP003",
    travel_request_id: "TR002",
    date: "2024-02-16",
    category: "Meals",
    description: "Lunch with client",
    amount: 75,
    status: "Pending",
  },
];

const TravelExpenses = () => {
  return (
    <div className="space-y-6 mt-6">
      <Card className="p-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h3 className="text-lg font-semibold">Travel Expenses</h3>
            <p className="text-sm text-muted-foreground">
              Total: $
              {defaultExpenses.reduce((sum, exp) => sum + exp.amount, 0)}
            </p>
          </div>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Add Expense
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="space-y-2">
            <Label>Travel Request ID</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select travel request" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="TR001">
                  TR001 - New York Client Meeting
                </SelectItem>
                <SelectItem value="TR002">TR002 - London Conference</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Category</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="transportation">Transportation</SelectItem>
                <SelectItem value="accommodation">Accommodation</SelectItem>
                <SelectItem value="meals">Meals</SelectItem>
                <SelectItem value="others">Others</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Amount</Label>
            <Input type="number" placeholder="Enter amount" />
          </div>

          <div className="space-y-2">
            <Label>Date</Label>
            <Input type="date" />
          </div>

          <div className="space-y-2">
            <Label>Receipt</Label>
            <div className="flex gap-2">
              <Input type="file" className="hidden" id="receipt" />
              <Button
                variant="outline"
                className="w-full"
                onClick={() => document.getElementById("receipt")?.click()}
              >
                <Upload className="h-4 w-4 mr-2" />
                Upload Receipt
              </Button>
            </div>
          </div>

          <div className="space-y-2 md:col-span-2">
            <Label>Description</Label>
            <Textarea placeholder="Enter expense details" />
          </div>
        </div>

        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Travel ID</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {defaultExpenses.map((expense) => (
                <TableRow key={expense.id}>
                  <TableCell>{expense.travel_request_id}</TableCell>
                  <TableCell>
                    {new Date(expense.date).toLocaleDateString()}
                  </TableCell>
                  <TableCell>{expense.category}</TableCell>
                  <TableCell>{expense.description}</TableCell>
                  <TableCell>${expense.amount}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        expense.status === "Approved" ? "default" : "secondary"
                      }
                    >
                      {expense.status}
                    </Badge>
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

export default TravelExpenses;
