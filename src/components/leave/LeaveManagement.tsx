import React from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LeaveRequest from "./LeaveRequest";
import LeaveBalance from "./LeaveBalance";

const LeaveManagement = () => {
  return (
    <div className="p-6 bg-background w-full space-y-6">
      <Card className="p-6">
        <h1 className="text-2xl font-bold mb-6">Leave Management</h1>
        <Tabs defaultValue="request" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="request">Leave Request</TabsTrigger>
            <TabsTrigger value="balance">Leave Balance</TabsTrigger>
          </TabsList>
          <TabsContent value="request">
            <LeaveRequest />
          </TabsContent>
          <TabsContent value="balance">
            <LeaveBalance />
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
};

export default LeaveManagement;
