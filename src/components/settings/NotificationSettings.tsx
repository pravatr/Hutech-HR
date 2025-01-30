import React from "react";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";

const notifications = [
  {
    category: "Email Notifications",
    settings: [
      {
        title: "Leave Requests",
        description: "Receive notifications for leave request updates",
        enabled: true,
      },
      {
        title: "Travel Requests",
        description: "Receive notifications for travel request updates",
        enabled: true,
      },
      {
        title: "Performance Reviews",
        description: "Receive notifications for performance review schedules",
        enabled: true,
      },
    ],
  },
  {
    category: "System Notifications",
    settings: [
      {
        title: "Task Assignments",
        description: "Receive notifications when tasks are assigned to you",
        enabled: true,
      },
      {
        title: "Document Updates",
        description: "Receive notifications for document updates",
        enabled: false,
      },
      {
        title: "Team Updates",
        description: "Receive notifications for team announcements",
        enabled: true,
      },
    ],
  },
];

const NotificationSettings = () => {
  return (
    <div className="space-y-6 mt-6">
      {notifications.map((section) => (
        <Card key={section.category} className="p-6">
          <h3 className="text-lg font-semibold mb-4">{section.category}</h3>
          <div className="space-y-6">
            {section.settings.map((setting) => (
              <div
                key={setting.title}
                className="flex items-center justify-between"
              >
                <div className="space-y-0.5">
                  <div>{setting.title}</div>
                  <div className="text-sm text-muted-foreground">
                    {setting.description}
                  </div>
                </div>
                <Switch defaultChecked={setting.enabled} />
              </div>
            ))}
          </div>
        </Card>
      ))}
    </div>
  );
};

export default NotificationSettings;
