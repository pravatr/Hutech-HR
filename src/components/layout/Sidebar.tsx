import React from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  Users,
  Calendar,
  FileText,
  Settings,
  Building2,
  ChevronLeft,
  ChevronRight,
  Wallet,
  Laptop,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface SidebarProps {
  collapsed?: boolean;
  onToggle?: () => void;
}

const navigationItems = [
  {
    title: "Dashboard",
    icon: Building2,
    href: "/",
  },
  {
    title: "Finance",
    icon: Wallet,
    href: "/finance",
  },
  {
    title: "Personnel",
    icon: Users,
    href: "/employee/1",
  },
  {
    title: "Leave",
    icon: Calendar,
    href: "/leave",
  },
  {
    title: "Travel",
    icon: Calendar,
    href: "/travel",
  },
  {
    title: "Assets",
    icon: Laptop,
    href: "/assets",
  },
  {
    title: "Master Data",
    icon: FileText,
    href: "/master",
  },
  {
    title: "Documents",
    icon: FileText,
    href: "/documents",
  },
  {
    title: "Exit Management",
    icon: FileText,
    href: "/exit",
  },
  {
    title: "Settings",
    icon: Settings,
    href: "/settings",
  },
];

const Sidebar = ({ collapsed = false, onToggle = () => {} }: SidebarProps) => {
  const location = useLocation();

  return (
    <div
      className={cn(
        "h-screen bg-background border-r transition-all duration-300 flex flex-col",
        collapsed ? "w-16" : "w-[280px]",
      )}
    >
      <div className="p-4 border-b flex items-center justify-between">
        {!collapsed && (
          <div className="font-semibold text-xl text-primary">HR Portal</div>
        )}
        <Button
          variant="ghost"
          size="icon"
          className="ml-auto"
          onClick={onToggle}
        >
          {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </Button>
      </div>

      <TooltipProvider>
        <nav className="flex-1 p-2 space-y-2">
          {navigationItems.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Tooltip key={item.href} delayDuration={0}>
                <TooltipTrigger asChild>
                  <Link
                    to={item.href}
                    className={cn(
                      "flex items-center space-x-2 px-3 py-2 rounded-md transition-colors",
                      "hover:bg-accent hover:text-accent-foreground",
                      isActive
                        ? "bg-accent text-accent-foreground"
                        : "text-muted-foreground",
                      collapsed && "justify-center",
                    )}
                  >
                    <item.icon size={20} />
                    {!collapsed && <span>{item.title}</span>}
                  </Link>
                </TooltipTrigger>
                {collapsed && (
                  <TooltipContent side="right">{item.title}</TooltipContent>
                )}
              </Tooltip>
            );
          })}
        </nav>
      </TooltipProvider>

      <div className="p-4 border-t">
        {!collapsed && (
          <div className="text-xs text-muted-foreground text-center">
            HR Management System v1.0
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
