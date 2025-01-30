import React from "react";
import StatsGrid from "./dashboard/StatsGrid";
import QuickActions from "./dashboard/QuickActions";
import MainContent from "./dashboard/MainContent";

const Home = () => {
  return (
    <div className="p-6 space-y-6">
      <StatsGrid />
      <QuickActions />
      <MainContent />
    </div>
  );
};

export default Home;
