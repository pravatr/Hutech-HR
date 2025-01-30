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

const documents = [
  {
    id: "1",
    name: "Policy Document",
    type: "PDF",
    lastUpdated: "2024-01-15",
    size: "2.5 MB",
  },
  {
    id: "2",
    name: "Letter Head",
    type: "DOCX",
    lastUpdated: "2024-01-10",
    size: "1.2 MB",
  },
  {
    id: "3",
    name: "HR Letter",
    type: "PDF",
    lastUpdated: "2024-01-05",
    size: "1.8 MB",
  },
  {
    id: "4",
    name: "House Rent Agreement",
    type: "PDF",
    lastUpdated: "2024-01-01",
    size: "3.0 MB",
  },
  {
    id: "5",
    name: "Employee Terms and Conditions",
    type: "PDF",
    lastUpdated: "2023-12-25",
    size: "4.2 MB",
  },
  {
    id: "6",
    name: "Laptop Letter",
    type: "PDF",
    lastUpdated: "2023-12-20",
    size: "1.5 MB",
  },
];

const DocumentsList = () => {
  return (
    <div className="p-6 bg-background w-full space-y-6">
      <Card className="p-6">
        <h1 className="text-2xl font-bold mb-6">Important Documents</h1>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Document Name</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Last Updated</TableHead>
                <TableHead>Size</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {documents.map((doc) => (
                <TableRow key={doc.id}>
                  <TableCell className="font-medium">{doc.name}</TableCell>
                  <TableCell>{doc.type}</TableCell>
                  <TableCell>
                    {new Date(doc.lastUpdated).toLocaleDateString()}
                  </TableCell>
                  <TableCell>{doc.size}</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      Download
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

export default DocumentsList;
