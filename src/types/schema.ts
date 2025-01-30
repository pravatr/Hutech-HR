// Database Schema Types

// Employee Table
export interface Employee {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  position: string;
  department_id: string;
  manager_id: string | null;
  hire_date: string;
  status: "Active" | "Inactive" | "On Leave";
  avatar_url?: string;
  created_at: string;
  updated_at: string;
}

// Department Table
export interface Department {
  id: string;
  name: string;
  head_id: string;
  budget: number;
  status: "Active" | "Inactive";
  created_at: string;
  updated_at: string;
}

// Leave Request Table
export interface LeaveRequest {
  id: string;
  employee_id: string;
  leave_type: "Annual" | "Sick" | "Personal" | "Unpaid";
  start_date: string;
  end_date: string;
  duration: number;
  reason: string;
  status: "Pending" | "Approved" | "Rejected";
  approved_by?: string;
  created_at: string;
  updated_at: string;
}

// Travel Request Table
export interface TravelRequest {
  id: string;
  employee_id: string;
  travel_type: "Domestic" | "International" | "Local";
  purpose: string;
  destination: string;
  start_date: string;
  end_date: string;
  estimated_budget: number;
  actual_expenses?: number;
  status: "Pending" | "Approved" | "Rejected" | "Completed";
  approved_by?: string;
  created_at: string;
  updated_at: string;
}

// Travel Expense Table
export interface TravelExpense {
  id: string;
  travel_request_id: string;
  date: string;
  category: "Transportation" | "Accommodation" | "Meals" | "Others";
  amount: number;
  description: string;
  receipt_url?: string;
  status: "Pending" | "Approved" | "Rejected";
  created_at: string;
  updated_at: string;
}

// Asset Table
export interface Asset {
  id: string;
  name: string;
  type: "Hardware" | "Software" | "Furniture" | "Vehicle";
  purchase_date: string;
  purchase_cost: number;
  department_id: string;
  assigned_to?: string;
  expected_life_years: number;
  warranty_years: number;
  status: "Active" | "Inactive" | "Maintenance";
  created_at: string;
  updated_at: string;
}

// Document Table
export interface Document {
  id: string;
  name: string;
  type: string;
  file_url: string;
  size: number;
  employee_id?: string;
  department_id?: string;
  created_at: string;
  updated_at: string;
}

// Exit Request Table
export interface ExitRequest {
  id: string;
  employee_id: string;
  last_working_date: string;
  notice_period: number;
  reason: string;
  handover_notes: string;
  status: "Pending" | "In Progress" | "Completed";
  created_at: string;
  updated_at: string;
}

// Exit Clearance Table
export interface ExitClearance {
  id: string;
  exit_request_id: string;
  department: "IT" | "HR" | "Finance";
  checklist_item: string;
  status: "Pending" | "Completed";
  comments?: string;
  cleared_by?: string;
  cleared_at?: string;
  created_at: string;
  updated_at: string;
}

// Performance Review Table
export interface PerformanceReview {
  id: string;
  employee_id: string;
  reviewer_id: string;
  review_period: string;
  ratings: {
    leadership: number;
    communication: number;
    technical: number;
    teamwork: number;
    initiative: number;
  };
  feedback: string;
  created_at: string;
  updated_at: string;
}
