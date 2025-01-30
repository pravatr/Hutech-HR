import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import PayrollSection from "./PayrollSection";
import PFStatement from "./PFStatement";
import InvestmentDeclaration from "./InvestmentDeclaration";
import TaxDocuments from "./TaxDocuments";

const FinanceDashboard = () => {
  return (
    <div className="p-6 bg-background w-full space-y-6">
      <Card className="p-6">
        <h1 className="text-2xl font-bold mb-6">Finance Dashboard</h1>
        <Tabs defaultValue="payroll" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="payroll">Payroll</TabsTrigger>
            <TabsTrigger value="pf">PF Statement</TabsTrigger>
            <TabsTrigger value="investment">Investment Declaration</TabsTrigger>
            <TabsTrigger value="tax">Tax Documents</TabsTrigger>
          </TabsList>
          <TabsContent value="payroll">
            <PayrollSection />
          </TabsContent>
          <TabsContent value="pf">
            <PFStatement />
          </TabsContent>
          <TabsContent value="investment">
            <InvestmentDeclaration />
          </TabsContent>
          <TabsContent value="tax">
            <TaxDocuments />
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
};

export default FinanceDashboard;
