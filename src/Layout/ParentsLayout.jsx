import { Outlet } from "react-router-dom";
import ParentsHeader from "../Components/ParentsHeader";
import Copyright from "../Components/Copyright";

const ParentsLayout = () => {
  return (
    <div className="flex min-h-screen flex-col justify-between">
        <ParentsHeader />

      <div className="flex-1 justify-center bg-egg font-[Poppins] text-egg-dark">
        <Outlet />
      </div>

      <Copyright />
    </div>
  );
};

export default ParentsLayout;

