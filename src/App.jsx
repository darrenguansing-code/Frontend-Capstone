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

// ----- TEACHER SIDE -----
import TeacherLayout from "./Layout/TeacherLayout.jsx";
import TDashBoard from "./Teacher-Side/TDashBoard.jsx";
import TAttendance from "./Teacher-Side/TAttendance.jsx";
import TGrades from "./Teacher-Side/TGrades.jsx";
import TWeeklySchedule from "./Teacher-Side/TWeeklySchedule.jsx";
import TReport from "./Teacher-Side/TReport.jsx";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Navigate to="/parents" replace />} />
        <Route path="/parents" element={<ParentsLayout />}>
          <Route index element={<ParentsDashboard />} />
          <Route path="grades" element={<Grades />} />
          <Route path="security" element={<Security />} />
        </Route>
        <Route path="/teacher" element={<TeacherLayout />}>
          <Route index element={<TDashBoard />} />
          <Route path="attendance" element={<TAttendance />} />
          <Route path="grades" element={<TGrades />} />
          <Route path="weekly-schedule" element={<TWeeklySchedule />} />
          <Route path="report" element={<TReport />} />
        </Route>
      </>,
    ),
  );

  return <RouterProvider router={router} />;
};

export default App;

