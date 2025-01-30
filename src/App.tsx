import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import DashboardLayout from "./components/layout/DashboardLayout";
import Home from "./components/home";
import DocumentsList from "./components/documents/DocumentsList";
import ExitManagement from "./components/exit/ExitManagement";
import EmployeeProfile from "./components/employee/EmployeeProfile";
import FinanceDashboard from "./components/finance/FinanceDashboard";
import LeaveManagement from "./components/leave/LeaveManagement";
import TravelManagement from "./components/travel/TravelManagement";
import AssetManagement from "./components/assets/AssetManagement";
import MasterDataConfig from "./components/master/MasterDataConfig";
import UserSettings from "./components/settings/UserSettings";

function App() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center h-screen">
          Loading...
        </div>
      }
    >
      <Routes>
        <Route element={<DashboardLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/employee/:id" element={<EmployeeProfile />} />
          <Route path="/finance" element={<FinanceDashboard />} />
          <Route path="/leave" element={<LeaveManagement />} />
          <Route path="/travel" element={<TravelManagement />} />
          <Route path="/assets" element={<AssetManagement />} />
          <Route path="/master" element={<MasterDataConfig />} />
          <Route path="/settings" element={<UserSettings />} />
          <Route path="/exit" element={<ExitManagement />} />
          <Route path="/documents" element={<DocumentsList />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
