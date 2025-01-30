import React from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AssetEntryForm from "./AssetEntryForm";
import AssetList from "./AssetList";

const AssetManagement = () => {
  return (
    <div className="p-6 bg-background w-full space-y-6">
      <Card className="p-6">
        <h1 className="text-2xl font-bold mb-6">Asset Management</h1>
        <Tabs defaultValue="list" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="list">Asset List</TabsTrigger>
            <TabsTrigger value="entry">Add New Asset</TabsTrigger>
          </TabsList>
          <TabsContent value="list">
            <AssetList />
          </TabsContent>
          <TabsContent value="entry">
            <AssetEntryForm />
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
};

export default AssetManagement;
