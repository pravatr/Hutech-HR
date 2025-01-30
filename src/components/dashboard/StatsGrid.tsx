import React from "react";
import { Card, CardContent } from "../ui/card";
import { Users, Clock, FileText, TrendingUp } from "lucide-react";

interface StatCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  change?: string;
  trend?: "up" | "down" | "neutral";
}

interface StatsGridProps {
  stats?: StatCardProps[];
}

const StatCard = ({
  icon,
  title,
  value,
  change,
  trend = "neutral",
}: StatCardProps) => {
  const trendColor = {
    up: "text-green-500",
    down: "text-red-500",
    neutral: "text-gray-500",
  }[trend];

  return (
    <Card className="bg-card">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-2 bg-muted rounded-lg">{icon}</div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                {title}
              </p>
              <h3 className="text-2xl font-bold">{value}</h3>
            </div>
          </div>
          {change && <div className={`text-sm ${trendColor}`}>{change}</div>}
        </div>
      </CardContent>
    </Card>
  );
};

const StatsGrid = ({ stats }: StatsGridProps) => {
  const defaultStats: StatCardProps[] = [
    {
      icon: <Users className="w-6 h-6 text-blue-500" />,
      title: "Total Employees",
      value: "1,234",
      change: "+12% this month",
      trend: "up",
    },
    {
      icon: <Clock className="w-6 h-6 text-orange-500" />,
      title: "Pending Requests",
      value: "23",
      change: "-5% this week",
      trend: "down",
    },
    {
      icon: <FileText className="w-6 h-6 text-purple-500" />,
      title: "Documents",
      value: "456",
      change: "No change",
      trend: "neutral",
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-green-500" />,
      title: "Active Projects",
      value: "89",
      change: "+3% this month",
      trend: "up",
    },
  ];

  const displayStats = stats || defaultStats;

  return (
    <div className="w-full bg-card p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {displayStats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>
    </div>
  );
};

export default StatsGrid;
