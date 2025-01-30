import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const categories = [
  { label: "Leadership", value: "leadership" },
  { label: "Communication", value: "communication" },
  { label: "Technical Skills", value: "technical" },
  { label: "Teamwork", value: "teamwork" },
  { label: "Initiative", value: "initiative" },
];

const ratings = [
  { label: "Excellent", value: "5" },
  { label: "Very Good", value: "4" },
  { label: "Good", value: "3" },
  { label: "Fair", value: "2" },
  { label: "Needs Improvement", value: "1" },
];

const FeedbackForm = () => {
  return (
    <Card className="p-6">
      <form className="space-y-6">
        {categories.map((category) => (
          <div key={category.value} className="space-y-4">
            <div className="flex justify-between items-center">
              <Label className="text-base">{category.label}</Label>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select rating" />
                </SelectTrigger>
                <SelectContent>
                  {ratings.map((rating) => (
                    <SelectItem key={rating.value} value={rating.value}>
                      {rating.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <Textarea
              placeholder={`Provide feedback about ${category.label.toLowerCase()}`}
              className="h-24"
            />
          </div>
        ))}

        <div className="flex justify-end space-x-4">
          <Button variant="outline">Cancel</Button>
          <Button>Submit Feedback</Button>
        </div>
      </form>
    </Card>
  );
};

export default FeedbackForm;
