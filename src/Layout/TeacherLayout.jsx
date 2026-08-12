import { Outlet } from "react-router-dom";
import TeacherHeader from "../Components/TeacherHeader";
import Copyright from "../Components/Copyright";

const TeacherLayout = () => {
  return (
    <div className="flex min-h-screen flex-col justify-between">
      <TeacherHeader />

      <div className="flex-1 justify-center bg-egg font-[Poppins] text-egg-dark">
        <Outlet />
      </div>

      <Copyright />
    </div>
  );
};

export default TeacherLayout;

