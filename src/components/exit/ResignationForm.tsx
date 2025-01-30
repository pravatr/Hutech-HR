import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const ResignationForm = () => {
  const [lastWorkingDate, setLastWorkingDate] = React.useState<Date>();

  return (
    <div className="space-y-6 mt-6">
      <Card className="p-6">
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label>Last Working Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !lastWorkingDate && "text-muted-foreground",
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {lastWorkingDate ? (
                      format(lastWorkingDate, "PPP")
                    ) : (
                      <span>Pick a date</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={lastWorkingDate}
                    onSelect={setLastWorkingDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div className="space-y-2">
              <Label>Notice Period (Days)</Label>
              <Input type="number" placeholder="Enter notice period" />
            </div>

            <div className="space-y-2 md:col-span-2">
              <Label>Reason for Resignation</Label>
              <Textarea
                placeholder="Please provide your reason for resignation"
                className="h-32"
              />
            </div>

            <div className="space-y-2 md:col-span-2">
              <Label>Handover Notes</Label>
              <Textarea
                placeholder="Please provide details about your current responsibilities and handover plans"
                className="h-32"
              />
            </div>
          </div>

          <div className="flex justify-end space-x-4">
            <Button variant="outline">Cancel</Button>
            <Button>Submit Resignation</Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default ResignationForm;
