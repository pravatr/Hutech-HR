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

const travelHistory = [
  {
    id: "TR001",
    type: "Domestic",
    destination: "New York",
    startDate: "2024-02-15",
    endDate: "2024-02-18",
    purpose: "Client Meeting",
    status: "Approved",
    budget: 1500,
  },
  {
    id: "TR002",
    type: "International",
    destination: "London",
    startDate: "2024-03-01",
    endDate: "2024-03-05",
    purpose: "Conference",
    status: "Pending",
    budget: 3500,
  },
];

const TravelHistory = () => {
  return (
    <div className="space-y-6 mt-6">
      <Card className="p-4">
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Request ID</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Destination</TableHead>
                <TableHead>Dates</TableHead>
                <TableHead>Purpose</TableHead>
                <TableHead>Budget</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {travelHistory.map((travel) => (
                <TableRow key={travel.id}>
                  <TableCell>{travel.id}</TableCell>
                  <TableCell>{travel.type}</TableCell>
                  <TableCell>{travel.destination}</TableCell>
                  <TableCell>
                    {new Date(travel.startDate).toLocaleDateString()} -{" "}
                    {new Date(travel.endDate).toLocaleDateString()}
                  </TableCell>
                  <TableCell>{travel.purpose}</TableCell>
                  <TableCell>${travel.budget}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        travel.status === "Approved" ? "default" : "secondary"
                      }
                    >
                      {travel.status}
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

export default TravelHistory;
