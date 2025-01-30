import React from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import OrganizationConfig from "./OrganizationConfig";
import BranchConfig from "./BranchConfig";
import DepartmentConfig from "./DepartmentConfig";
import BusinessUnitConfig from "./BusinessUnitConfig";
import ProjectConfig from "./ProjectConfig";

const MasterDataConfig = () => {
  return (
    <div className="p-6 bg-background w-full space-y-6">
      <Card className="p-6">
        <h1 className="text-2xl font-bold mb-6">Master Data Configuration</h1>
        <Tabs defaultValue="organization" className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="organization">Organization</TabsTrigger>
            <TabsTrigger value="branches">Branches</TabsTrigger>
            <TabsTrigger value="departments">Departments</TabsTrigger>
            <TabsTrigger value="business-units">Business Units</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
          </TabsList>
          <TabsContent value="organization">
            <OrganizationConfig />
          </TabsContent>
          <TabsContent value="branches">
            <BranchConfig />
          </TabsContent>
          <TabsContent value="departments">
            <DepartmentConfig />
          </TabsContent>
          <TabsContent value="business-units">
            <BusinessUnitConfig />
          </TabsContent>
          <TabsContent value="projects">
            <ProjectConfig />
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
};

export default MasterDataConfig;
