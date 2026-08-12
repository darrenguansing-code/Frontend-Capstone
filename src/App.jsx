import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import ParentsLayout from "./Layout/ParentsLayout.jsx";
import ParentsDashboard from "./Parents-Side/ParentsDashboard.jsx";
import Grades from "./Parents-Side/Grades.jsx";
import Security from "./Parents-Side/Security.jsx";

import TeacherLayout from "./Layout/TeacherLayout.jsx";
import TDashBoard from "./Teacher-Side/TDashBoard.jsx";
import TAttendance from "./Teacher-Side/TAttendance.jsx";
import TGrades from "./Teacher-Side/TGrades.jsx";

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
        </Route>
      </>,
    ),
  );

  return <RouterProvider router={router} />;
};

export default App;

