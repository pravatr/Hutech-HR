import React from "react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface CategoryScore {
  category: string;
  score: number;
  feedback: string[];
}

const defaultScores: CategoryScore[] = [
  {
    category: "Leadership",
    score: 85,
    feedback: ["Strong decision making", "Excellent team guidance"],
  },
  {
    category: "Communication",
    score: 90,
    feedback: ["Clear and concise", "Active listener"],
  },
  {
    category: "Technical Skills",
    score: 95,
    feedback: ["Expert in required technologies", "Quick problem solver"],
  },
  {
    category: "Teamwork",
    score: 88,
    feedback: ["Collaborative", "Supportive team member"],
  },
  {
    category: "Initiative",
    score: 92,
    feedback: ["Self-starter", "Proactive approach"],
  },
];

const FeedbackSummary = () => {
  return (
    <div className="space-y-6">
      {defaultScores.map((item) => (
        <Card key={item.category} className="p-4">
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <h3 className="font-medium">{item.category}</h3>
              <span className="text-sm font-medium">{item.score}%</span>
            </div>
            <Progress value={item.score} className="h-2" />
            <div className="mt-2">
              {item.feedback.map((text, index) => (
                <div key={index} className="text-sm text-muted-foreground mt-1">
                  • {text}
                </div>
              ))}
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default FeedbackSummary;
