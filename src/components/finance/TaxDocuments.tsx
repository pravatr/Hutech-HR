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

const TaxDocuments = () => {
  const documents = [
    {
      year: "2023-24",
      type: "Form 16",
      status: "Available",
      generatedDate: "31 Mar 2024",
    },
    {
      year: "2023-24",
      type: "Form 12BB",
      status: "Available",
      generatedDate: "31 Mar 2024",
    },
    {
      year: "2022-23",
      type: "Form 16",
      status: "Available",
      generatedDate: "31 Mar 2023",
    },
    {
      year: "2022-23",
      type: "Form 12BB",
      status: "Available",
      generatedDate: "31 Mar 2023",
    },
  ];

  return (
    <div className="space-y-6 mt-6">
      <Card className="p-4">
        <h3 className="text-lg font-semibold mb-4">Tax Documents</h3>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Financial Year</TableHead>
                <TableHead>Document Type</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Generated Date</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {documents.map((doc, index) => (
                <TableRow key={index}>
                  <TableCell>{doc.year}</TableCell>
                  <TableCell>{doc.type}</TableCell>
                  <TableCell>{doc.status}</TableCell>
                  <TableCell>{doc.generatedDate}</TableCell>
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

export default TaxDocuments;
