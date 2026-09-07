import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

// ----- LANDING PAGE -----
import HomePage from "./LandingPage/Homepage.jsx";
import AdmissionPage from "./LandingPage/AdmissionPage.jsx";
import TransportationPage from "./LandingPage/TransportationPage.jsx";

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
import DashBoard from "./Teacher-Side/DashBoard.jsx";
import Attendance from "./Teacher-Side/Attendance.jsx";
import TeacherGrades from "./Teacher-Side/Grades.jsx";
import WeeklySchedule from "./Teacher-Side/WeeklySchedule.jsx";
import Report from "./Teacher-Side/Report.jsx";
import GradesReport from "./Teacher-Side/GradesReport.jsx";
import Settings from "./Teacher-Side/Settings.jsx";

// ----- ADMIN SIDE -----
import AdminLayout from "./Layout/AdminLayout.jsx";
import Dashboard from "./uAdmin-Side/Dashboard.jsx";
import Admission from "./uAdmin-Side/Admission.jsx";
import Students from "./uAdmin-Side/Academic Management Page/Students.jsx"
import SubmissionDocs from "./uAdmin-Side/SubmissionDocs.jsx";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/admission" element={<AdmissionPage />} />
          <Route path="/transport" element={<TransportationPage />} />
          
          <Route path="/parents" element={<ParentsLayout />}>
          <Route index element={<ParentsDashboard />} />
          <Route path="grades/:studentId" element={<Grades />} />
          <Route path="security" element={<Security />} />
        </Route>
        <Route path="/teacher" element={<TeacherLayout />}>
          <Route index element={<DashBoard />} />
          <Route path="attendance" element={<Attendance />} />
          <Route path="grades" element={<TeacherGrades />} />
          <Route path="weekly-schedule" element={<WeeklySchedule />} />
          <Route path="report" element={<Report />} />
          <Route path="gradesreport/:schoolId" element={<GradesReport />} />
          <Route path="security" element={<Settings />} />
        </Route>
          <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="admission" element={<Admission />} />
          <Route path="academic" element={<Students />} />
          <Route path="submission" element={<SubmissionDocs />} />
        </Route>
      </>,
    ),
  );

  return <RouterProvider router={router} />;
};

export default App;

