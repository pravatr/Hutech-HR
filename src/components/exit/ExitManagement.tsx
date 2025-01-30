import React from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ResignationForm from "./ResignationForm";
import ExitClearanceForm from "./ExitClearanceForm";

const ExitManagement = () => {
  return (
    <div className="p-6 bg-background w-full space-y-6">
      <Card className="p-6">
        <h1 className="text-2xl font-bold mb-6">Employee Exit Management</h1>
        <Tabs defaultValue="resignation" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="resignation">Resignation</TabsTrigger>
            <TabsTrigger value="clearance">Exit Clearance</TabsTrigger>
          </TabsList>
          <TabsContent value="resignation">
            <ResignationForm />
          </TabsContent>
          <TabsContent value="clearance">
            <ExitClearanceForm />
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
};

export default ExitManagement;
