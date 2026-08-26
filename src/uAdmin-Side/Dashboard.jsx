import AdminHeader from "../Components/AdminComponents/AdminHeader";
import DashboardCards from "../Components/AdminComponents/DashboardCards";
import RecentApplicants from "../Components/AdminComponents/RecentApplicants";

const APPLICANTS = [
  { id: "1452", lastName: "Agassi", firstName: "Carlos", gender: "Male", gradeLevel: "Nursery", dateApplied: "2026-08-24 10:45:00" },
  { id: "1456", lastName: "Bernado", firstName: "Kathryn", gender: "Female", gradeLevel: "Nursery", dateApplied: "2026-08-24 10:30:00" },
  { id: "1478", lastName: "Jumagesa", firstName: "Henry", gender: "Male", gradeLevel: "Nursery", dateApplied: "2026-08-24 10:15:00" },
  { id: "1475", lastName: "Kaligtan", firstName: "Michelle", gender: "Female", gradeLevel: "Kinder", dateApplied: "2026-08-24 10:00:00" },
  { id: "1723", lastName: "Kinalina", firstName: "Rexter", gender: "Male", gradeLevel: "Kinder", dateApplied: "2026-08-24 09:45:00" },
  { id: "1458", lastName: "Macasinag", firstName: "Jake", gender: "Male", gradeLevel: "Nursery", dateApplied: "2026-08-24 09:30:00" },
];

const Dashboard = () => {
  return (
    <div className="flex flex-1 flex-col gap-4 bg-[#ebe9e4] cursor-default font-[Poppins] ">
      <AdminHeader />

      <DashboardCards />

      <RecentApplicants 
        applicants={APPLICANTS} 
      />

      
    </div>
  );
};

export default Dashboard;
