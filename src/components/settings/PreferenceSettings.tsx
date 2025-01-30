import React from "react";
import { useTheme } from "../theme-provider";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const PreferenceSettings = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div className="space-y-6 mt-6">
      <Card className="p-6">
        <div className="space-y-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Theme Preferences</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Theme Mode</Label>
                <Select
                  value={theme}
                  onValueChange={(value) =>
                    setTheme(value as "light" | "dark" | "system")
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select theme mode" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Language & Region</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Language</Label>
                <Select defaultValue="en">
                  <SelectTrigger>
                    <SelectValue placeholder="Select language" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="es">Spanish</SelectItem>
                    <SelectItem value="fr">French</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Time Zone</Label>
                <Select defaultValue="utc">
                  <SelectTrigger>
                    <SelectValue placeholder="Select time zone" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="utc">UTC</SelectItem>
                    <SelectItem value="est">EST</SelectItem>
                    <SelectItem value="pst">PST</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Accessibility</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <div>Reduce Animations</div>
                  <div className="text-sm text-muted-foreground">
                    Minimize motion effects throughout the interface
                  </div>
                </div>
                <Switch />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <div>High Contrast Mode</div>
                  <div className="text-sm text-muted-foreground">
                    Increase contrast for better visibility
                  </div>
                </div>
                <Switch />
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default PreferenceSettings;
