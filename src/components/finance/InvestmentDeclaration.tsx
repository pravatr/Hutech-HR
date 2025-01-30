import React from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const InvestmentDeclaration = () => {
  return (
    <div className="space-y-6 mt-6">
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-6">
          Investment Declaration Form
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h4 className="font-medium">Section 80C (Max: ₹150,000)</h4>
            <div className="space-y-3">
              <div>
                <Label>PF Contribution</Label>
                <Input type="number" placeholder="Enter amount" />
              </div>
              <div>
                <Label>Life Insurance Premium</Label>
                <Input type="number" placeholder="Enter amount" />
              </div>
              <div>
                <Label>ELSS Mutual Funds</Label>
                <Input type="number" placeholder="Enter amount" />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium">Section 80D (Health Insurance)</h4>
            <div className="space-y-3">
              <div>
                <Label>Self & Family</Label>
                <Input type="number" placeholder="Enter amount" />
              </div>
              <div>
                <Label>Parents</Label>
                <Input type="number" placeholder="Enter amount" />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium">House Rent Allowance</h4>
            <div className="space-y-3">
              <div>
                <Label>Annual Rent Paid</Label>
                <Input type="number" placeholder="Enter amount" />
              </div>
              <div>
                <Label>Landlord PAN</Label>
                <Input placeholder="Enter PAN number" />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium">Other Deductions</h4>
            <div className="space-y-3">
              <div>
                <Label>Education Loan Interest</Label>
                <Input type="number" placeholder="Enter amount" />
              </div>
              <div>
                <Label>NPS Contribution</Label>
                <Input type="number" placeholder="Enter amount" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-end space-x-4">
          <Button variant="outline">Save as Draft</Button>
          <Button>Submit Declaration</Button>
        </div>
      </Card>
    </div>
  );
};

export default InvestmentDeclaration;
