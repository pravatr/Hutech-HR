import React from "react";
import { Button } from "../ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { UserPlus, ClipboardCheck, BellPlus, FileText } from "lucide-react";

interface QuickAction {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
  tooltip: string;
}

interface QuickActionsProps {
  actions?: QuickAction[];
}

const defaultActions: QuickAction[] = [
  {
    icon: <UserPlus className="h-5 w-5" />,
    label: "Add Employee",
    onClick: () => console.log("Add Employee clicked"),
    tooltip: "Add a new employee to the system",
  },
  {
    icon: <ClipboardCheck className="h-5 w-5" />,
    label: "Approve Requests",
    onClick: () => console.log("Approve Requests clicked"),
    tooltip: "View and approve pending requests",
  },
  {
    icon: <BellPlus className="h-5 w-5" />,
    label: "Post Announcement",
    onClick: () => console.log("Post Announcement clicked"),
    tooltip: "Create a new announcement",
  },
  {
    icon: <FileText className="h-5 w-5" />,
    label: "Generate Report",
    onClick: () => console.log("Generate Report clicked"),
    tooltip: "Generate HR reports",
  },
];

const QuickActions: React.FC<QuickActionsProps> = ({
  actions = defaultActions,
}) => {
  return (
    <div className="w-full bg-background p-4 rounded-lg shadow-sm border">
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <TooltipProvider>
          {actions.map((action, index) => (
            <Tooltip key={index}>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  className="flex items-center gap-2 min-w-[140px] justify-start"
                  onClick={action.onClick}
                >
                  {action.icon}
                  <span>{action.label}</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>{action.tooltip}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </TooltipProvider>
      </div>
    </div>
  );
};

export default QuickActions;
