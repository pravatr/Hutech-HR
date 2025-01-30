import React from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const OrganizationConfig = () => {
  return (
    <div className="space-y-6 mt-6">
      <Card className="p-6">
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label>Organization Name</Label>
              <Input placeholder="Enter organization name" />
            </div>

            <div className="space-y-2">
              <Label>Registration Number</Label>
              <Input placeholder="Enter registration number" />
            </div>

            <div className="space-y-2">
              <Label>Tax ID</Label>
              <Input placeholder="Enter tax ID" />
            </div>

            <div className="space-y-2">
              <Label>Industry</Label>
              <Input placeholder="Enter industry" />
            </div>

            <div className="space-y-2">
              <Label>Founded Date</Label>
              <Input type="date" />
            </div>

            <div className="space-y-2">
              <Label>Website</Label>
              <Input type="url" placeholder="Enter website URL" />
            </div>

            <div className="space-y-2 md:col-span-2">
              <Label>Address</Label>
              <Textarea placeholder="Enter organization address" />
            </div>

            <div className="space-y-2 md:col-span-2">
              <Label>Description</Label>
              <Textarea placeholder="Enter organization description" />
            </div>
          </div>

          <div className="flex justify-end space-x-4">
            <Button variant="outline">Cancel</Button>
            <Button>Save Changes</Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default OrganizationConfig;
