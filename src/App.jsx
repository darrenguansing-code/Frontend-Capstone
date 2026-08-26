import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Navigate,
} from "react-router-dom";

// ----- PARENTS SIDE -----
import ParentsLayout from "./Layout/ParentsLayout.jsx";
import ParentsDashboard from "./Parents-Side/ParentsDashboard.jsx";
import Grades from "./Parents-Side/Grades.jsx";
import Security from "./Parents-Side/Security.jsx";

// ----- LOGIN -----
import Login from "./Login - Forget/Login.jsx";
import ForgotPassword from "./Login - Forget/ForgotPassword.jsx";

// ----- TEACHER SIDE -----
import TeacherLayout from "./Layout/TeacherLayout.jsx";
import TDashBoard from "./Teacher-Side/TDashBoard.jsx";
import TAttendance from "./Teacher-Side/TAttendance.jsx";
import TGrades from "./Teacher-Side/TGrades.jsx";
import TWeeklySchedule from "./Teacher-Side/TWeeklySchedule.jsx";
import TReport from "./Teacher-Side/TReport.jsx";
import TGradesReport from "./Teacher-Side/TGradesReport.jsx";
import TSettings from "./Teacher-Side/TSettings.jsx";

// ----- ADMIN SIDE -----
import AdminLayout from "./Layout/AdminLayout.jsx";
import Dashboard from "./uAdmin-Side/Dashboard.jsx";


const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Navigate to="/parents" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/parents" element={<ParentsLayout />}>
          <Route index element={<ParentsDashboard />} />
          <Route path="grades/:studentId" element={<Grades />} />
          <Route path="security" element={<Security />} />
        </Route>
        <Route path="/teacher" element={<TeacherLayout />}>
          <Route index element={<TDashBoard />} />
          <Route path="attendance" element={<TAttendance />} />
          <Route path="grades" element={<TGrades />} />
          <Route path="weekly-schedule" element={<TWeeklySchedule />} />
          <Route path="report" element={<TReport />} />
          <Route path="gradesreport/:schoolId" element={<TGradesReport />} />
          <Route path="security" element={<TSettings />} />
        </Route>
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
          </Route>
      </>,
    ),
  );

  return <RouterProvider router={router} />;
};

export default App;

