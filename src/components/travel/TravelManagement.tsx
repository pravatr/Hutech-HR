import React from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TravelRequest from "./TravelRequest";
import TravelHistory from "./TravelHistory";
import TravelExpenses from "./TravelExpenses";

const TravelManagement = () => {
  return (
    <div className="p-6 bg-background w-full space-y-6">
      <Card className="p-6">
        <h1 className="text-2xl font-bold mb-6">Travel Management</h1>
        <Tabs defaultValue="request" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="request">Travel Request</TabsTrigger>
            <TabsTrigger value="history">Travel History</TabsTrigger>
            <TabsTrigger value="expenses">Expenses</TabsTrigger>
          </TabsList>
          <TabsContent value="request">
            <TravelRequest />
          </TabsContent>
          <TabsContent value="history">
            <TravelHistory />
          </TabsContent>
          <TabsContent value="expenses">
            <TravelExpenses />
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
};

export default TravelManagement;
