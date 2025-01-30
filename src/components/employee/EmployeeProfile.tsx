import React from "react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Mail, Phone, MapPin, Building2, Calendar } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";
import FeedbackForm from "@/components/feedback/FeedbackForm";
import FeedbackSummary from "@/components/feedback/FeedbackSummary";

interface EmployeeProfileProps {
  employee?: {
    id: string;
    name: string;
    position: string;
    department: string;
    email: string;
    phone: string;
    location: string;
    startDate: string;
    status: string;
    avatar?: string;
  };
}

const defaultEmployee = {
  id: "1",
  name: "Pravat Kumar",
  position: "Senior Developer",
  department: "Engineering",
  email: "pravat.kumar@company.com",
  phone: "+91 98765 43210",
  location: "Bangalore, India",
  startDate: "2023-01-15",
  status: "Active",
  avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Pravat",
};

const EmployeeProfile: React.FC<EmployeeProfileProps> = ({
  employee = defaultEmployee,
}) => {
  return (
    <div className="p-6 bg-background w-full space-y-6">
      <Card className="p-6">
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-start space-x-4">
            <Avatar className="h-20 w-20">
              <AvatarImage src={employee.avatar} />
              <AvatarFallback>
                {employee.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-2xl font-bold">{employee.name}</h1>
              <p className="text-muted-foreground">{employee.position}</p>
              <div className="mt-2">
                <Badge
                  variant={
                    employee.status === "Active" ? "default" : "secondary"
                  }
                >
                  {employee.status}
                </Badge>
              </div>
            </div>
          </div>
          <Button>Edit Profile</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="space-y-3">
            <div className="flex items-center space-x-2 text-sm">
              <Mail className="h-4 w-4 text-muted-foreground" />
              <span>{employee.email}</span>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <Phone className="h-4 w-4 text-muted-foreground" />
              <span>{employee.phone}</span>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              <span>{employee.location}</span>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center space-x-2 text-sm">
              <Building2 className="h-4 w-4 text-muted-foreground" />
              <span>{employee.department}</span>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <span>
                Started {new Date(employee.startDate).toLocaleDateString()}
              </span>
            </div>
          </div>
        </div>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="documents">Documents</TabsTrigger>
            <TabsTrigger value="attendance">Attendance</TabsTrigger>
            <TabsTrigger value="performance">Performance</TabsTrigger>
            <TabsTrigger value="feedback">360° Feedback</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-4">
                <h3 className="font-semibold mb-2">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">TypeScript</Badge>
                  <Badge variant="secondary">Node.js</Badge>
                  <Badge variant="secondary">UI/UX</Badge>
                </div>
              </Card>
              <Card className="p-4">
                <h3 className="font-semibold mb-2">Current Projects</h3>
                <ul className="space-y-2">
                  <li>HR Dashboard Redesign</li>
                  <li>Mobile App Development</li>
                </ul>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="documents" className="mt-6">
            <Card className="p-4">
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Document Name</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Date Uploaded</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="w-[100px]">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>Employment Contract</TableCell>
                      <TableCell>Legal</TableCell>
                      <TableCell>Jan 15, 2023</TableCell>
                      <TableCell>
                        <Badge>Active</Badge>
                      </TableCell>
                      <TableCell>
                        <Button variant="ghost" size="sm">
                          View
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Performance Review Q4 2023</TableCell>
                      <TableCell>Review</TableCell>
                      <TableCell>Dec 20, 2023</TableCell>
                      <TableCell>
                        <Badge>Active</Badge>
                      </TableCell>
                      <TableCell>
                        <Button variant="ghost" size="sm">
                          View
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Training Certificate</TableCell>
                      <TableCell>Certificate</TableCell>
                      <TableCell>Nov 10, 2023</TableCell>
                      <TableCell>
                        <Badge>Active</Badge>
                      </TableCell>
                      <TableCell>
                        <Button variant="ghost" size="sm">
                          View
                        </Button>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </Card>
          </TabsContent>
          <TabsContent value="attendance" className="mt-6">
            <Card className="p-4">
              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2">
                  Attendance Overview
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <Card className="p-4">
                    <p className="text-sm text-muted-foreground">
                      Present Days
                    </p>
                    <h4 className="text-2xl font-bold text-green-600">22/23</h4>
                  </Card>
                  <Card className="p-4">
                    <p className="text-sm text-muted-foreground">
                      Late Arrivals
                    </p>
                    <h4 className="text-2xl font-bold text-yellow-600">2</h4>
                  </Card>
                  <Card className="p-4">
                    <p className="text-sm text-muted-foreground">Absences</p>
                    <h4 className="text-2xl font-bold text-red-600">1</h4>
                  </Card>
                </div>
              </div>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Date</TableHead>
                      <TableHead>Clock In</TableHead>
                      <TableHead>Clock Out</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      {
                        date: "2024-01-15",
                        clockIn: "09:00 AM",
                        clockOut: "05:00 PM",
                        status: "Present",
                      },
                      {
                        date: "2024-01-14",
                        clockIn: "09:15 AM",
                        clockOut: "05:30 PM",
                        status: "Late",
                      },
                      {
                        date: "2024-01-13",
                        clockIn: "09:00 AM",
                        clockOut: "05:00 PM",
                        status: "Present",
                      },
                      {
                        date: "2024-01-12",
                        clockIn: "-",
                        clockOut: "-",
                        status: "Absent",
                      },
                    ].map((record, index) => (
                      <TableRow key={index}>
                        <TableCell>
                          {new Date(record.date).toLocaleDateString()}
                        </TableCell>
                        <TableCell>{record.clockIn}</TableCell>
                        <TableCell>{record.clockOut}</TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              record.status === "Present"
                                ? "default"
                                : record.status === "Late"
                                  ? "warning"
                                  : "destructive"
                            }
                          >
                            {record.status}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </Card>
          </TabsContent>
          <TabsContent value="performance" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-4">
                <h3 className="font-semibold mb-4">Performance Metrics</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm">Project Delivery</span>
                      <span className="text-sm font-medium">90%</span>
                    </div>
                    <Progress value={90} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm">Code Quality</span>
                      <span className="text-sm font-medium">85%</span>
                    </div>
                    <Progress value={85} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm">Team Collaboration</span>
                      <span className="text-sm font-medium">95%</span>
                    </div>
                    <Progress value={95} className="h-2" />
                  </div>
                </div>
              </Card>
              <Card className="p-4">
                <h3 className="font-semibold mb-4">Recent Feedback</h3>
                <div className="space-y-4">
                  <div className="p-3 bg-muted rounded-lg">
                    <p className="text-sm mb-2">
                      "Excellent work on the recent project delivery. Shows
                      great initiative and leadership."
                    </p>
                    <p className="text-xs text-muted-foreground">
                      - Team Lead, Jan 2024
                    </p>
                  </div>
                  <div className="p-3 bg-muted rounded-lg">
                    <p className="text-sm mb-2">
                      "Consistently delivers high-quality code and maintains
                      good documentation."
                    </p>
                    <p className="text-xs text-muted-foreground">
                      - Tech Lead, Dec 2023
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="feedback" className="mt-6">
            <div className="space-y-6">
              <Card className="p-4">
                <h3 className="text-lg font-semibold mb-4">Feedback Summary</h3>
                <FeedbackSummary />
              </Card>
              <Card className="p-4">
                <h3 className="text-lg font-semibold mb-4">Provide Feedback</h3>
                <FeedbackForm />
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
};

export default EmployeeProfile;
