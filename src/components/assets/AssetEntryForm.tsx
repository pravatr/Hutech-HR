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

const AssetEntryForm = () => {
  return (
    <Card className="p-6">
      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label>Asset Name</Label>
            <Input placeholder="Enter asset name" />
          </div>

          <div className="space-y-2">
            <Label>Asset Type</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select asset type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="hardware">Hardware</SelectItem>
                <SelectItem value="software">Software</SelectItem>
                <SelectItem value="furniture">Furniture</SelectItem>
                <SelectItem value="vehicle">Vehicle</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Purchase Date</Label>
            <Input type="date" />
          </div>

          <div className="space-y-2">
            <Label>Purchase Cost</Label>
            <Input type="number" placeholder="Enter cost" />
          </div>

          <div className="space-y-2">
            <Label>Department</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select department" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="it">IT</SelectItem>
                <SelectItem value="hr">HR</SelectItem>
                <SelectItem value="finance">Finance</SelectItem>
                <SelectItem value="operations">Operations</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Assigned To</Label>
            <Input placeholder="Enter employee name" />
          </div>

          <div className="space-y-2">
            <Label>Expected Life (Years)</Label>
            <Input type="number" placeholder="Enter years" />
          </div>

          <div className="space-y-2">
            <Label>Warranty Period (Years)</Label>
            <Input type="number" placeholder="Enter years" />
          </div>

          <div className="space-y-2 md:col-span-2">
            <Label>Description</Label>
            <Textarea placeholder="Enter asset description" />
          </div>
        </div>

        <div className="flex justify-end space-x-4">
          <Button variant="outline">Cancel</Button>
          <Button>Add Asset</Button>
        </div>
      </form>
    </Card>
  );
};

export default AssetEntryForm;
