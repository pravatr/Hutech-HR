import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";

const clearanceItems = [
  {
    department: "IT Department",
    items: [
      { id: "laptop", label: "Laptop Returned" },
      { id: "access-card", label: "Access Card Returned" },
      { id: "email", label: "Email Account Deactivated" },
    ],
  },
  {
    department: "HR Department",
    items: [
      { id: "exit-interview", label: "Exit Interview Completed" },
      { id: "documents", label: "Documents Handed Over" },
      { id: "benefits", label: "Benefits Settlement Processed" },
    ],
  },
  {
    department: "Finance Department",
    items: [
      { id: "salary", label: "Final Settlement Processed" },
      { id: "advances", label: "Advances Cleared" },
      { id: "claims", label: "Expense Claims Settled" },
    ],
  },
];

const ExitClearanceForm = () => {
  return (
    <div className="space-y-6 mt-6">
      <Card className="p-6">
        <form className="space-y-8">
          {clearanceItems.map((section) => (
            <div key={section.department} className="space-y-4">
              <h3 className="text-lg font-semibold">{section.department}</h3>
              <div className="space-y-4">
                {section.items.map((item) => (
                  <div key={item.id} className="flex items-center space-x-2">
                    <Checkbox id={item.id} />
                    <Label htmlFor={item.id}>{item.label}</Label>
                  </div>
                ))}
                <div className="space-y-2">
                  <Label>Comments</Label>
                  <Textarea
                    placeholder={`Additional comments for ${section.department}`}
                  />
                </div>
              </div>
            </div>
          ))}

          <div className="flex justify-end space-x-4">
            <Button variant="outline">Cancel</Button>
            <Button>Submit Clearance</Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default ExitClearanceForm;
