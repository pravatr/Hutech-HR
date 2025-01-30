import React from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const ProfileSettings = () => {
  return (
    <div className="space-y-6 mt-6">
      <Card className="p-6">
        <div className="space-y-8">
          <div className="flex items-center space-x-4">
            <Avatar className="h-24 w-24">
              <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=John" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="space-y-2">
              <Button>Upload New Picture</Button>
              <Button variant="outline">Remove Picture</Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label>First Name</Label>
              <Input placeholder="Enter first name" defaultValue="John" />
            </div>

            <div className="space-y-2">
              <Label>Last Name</Label>
              <Input placeholder="Enter last name" defaultValue="Doe" />
            </div>

            <div className="space-y-2">
              <Label>Email</Label>
              <Input
                type="email"
                placeholder="Enter email"
                defaultValue="john.doe@example.com"
              />
            </div>

            <div className="space-y-2">
              <Label>Phone Number</Label>
              <Input
                type="tel"
                placeholder="Enter phone number"
                defaultValue="+1 (555) 123-4567"
              />
            </div>

            <div className="space-y-2">
              <Label>Job Title</Label>
              <Input
                placeholder="Enter job title"
                defaultValue="Software Engineer"
              />
            </div>

            <div className="space-y-2">
              <Label>Department</Label>
              <Input
                placeholder="Enter department"
                defaultValue="Engineering"
              />
            </div>

            <div className="space-y-2 md:col-span-2">
              <Label>Bio</Label>
              <Textarea
                placeholder="Write a short bio"
                defaultValue="Senior Software Engineer with 5+ years of experience in web development."
              />
            </div>
          </div>

          <div className="flex justify-end space-x-4">
            <Button variant="outline">Cancel</Button>
            <Button>Save Changes</Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProfileSettings;
