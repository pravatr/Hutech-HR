import React from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

const SecuritySettings = () => {
  return (
    <div className="space-y-6 mt-6">
      <Card className="p-6">
        <div className="space-y-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Change Password</h3>
            <div className="grid gap-4">
              <div className="space-y-2">
                <Label>Current Password</Label>
                <Input type="password" placeholder="Enter current password" />
              </div>
              <div className="space-y-2">
                <Label>New Password</Label>
                <Input type="password" placeholder="Enter new password" />
              </div>
              <div className="space-y-2">
                <Label>Confirm New Password</Label>
                <Input type="password" placeholder="Confirm new password" />
              </div>
              <Button className="w-fit">Update Password</Button>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Two-Factor Authentication</h3>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <div>Two-factor authentication</div>
                <div className="text-sm text-muted-foreground">
                  Add an extra layer of security to your account
                </div>
              </div>
              <Switch />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Login Sessions</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <div>Chrome on Windows</div>
                  <div className="text-sm text-muted-foreground">
                    Last active: 2 hours ago
                  </div>
                </div>
                <Button variant="outline">Sign Out</Button>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <div>Safari on iPhone</div>
                  <div className="text-sm text-muted-foreground">
                    Last active: 5 days ago
                  </div>
                </div>
                <Button variant="outline">Sign Out</Button>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default SecuritySettings;
