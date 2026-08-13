import { useState } from "react";
import { Loader2 } from "lucide-react";

import SectionCard from "../Components/TeacherDashboard/SectionCard";
import StudentTable from "../Components/TeacherDashboard/StudentTable";

const CLASS_SECTIONS = [
  { id: "sampaguita", name: "Sampaguita", level: "Nursery" },
  { id: "gumamela", name: "Gumamela", level: "Nursery" },
  { id: "waling-waling", name: "Waling - Waling", level: "Nursery" },
];

const STUDENTS = [
  {
    id: 1,
    sectionId: "sampaguita",
    schoolId: "GCA-2026-001",
    lrn: "1204567891011",
    fullName: "Rosaline Romasanta",
    gender: "Female",
    birthdate: "10/20/2021",
    age: 4,
  },
  {
    id: 2,
    sectionId: "sampaguita",
    schoolId: "GCA-2026-002",
    lrn: "1204567891012",
    fullName: "Angela Cruz",
    gender: "Female",
    birthdate: "11/02/2021",
    age: 4,
  },
  {
    id: 3,
    sectionId: "sampaguita",
    schoolId: "GCA-2026-003",
    lrn: "1204567891013",
    fullName: "Miguel Santos",
    gender: "Male",
    birthdate: "01/15/2022",
    age: 3,
  },
  {
    id: 4,
    sectionId: "gumamela",
    schoolId: "GCA-2026-004",
    lrn: "1345698721234",
    fullName: "Jake Macasinag",
    gender: "Male",
    birthdate: "09/15/2022",
    age: 3,
  },
  {
    id: 5,
    sectionId: "gumamela",
    schoolId: "GCA-2026-005",
    lrn: "1345698721235",
    fullName: "Bella Reyes",
    gender: "Female",
    birthdate: "02/28/2022",
    age: 3,
  },
  {
    id: 6,
    sectionId: "waling-waling",
    schoolId: "GCA-2026-006",
    lrn: "1232173271321",
    fullName: "Harold Mendez",
    gender: "Male",
    birthdate: "09/25/2022",
    age: 3,
  },
  {
    id: 7,
    sectionId: "waling-waling",
    schoolId: "GCA-2026-007",
    lrn: "1232173271322",
    fullName: "Liza Bautista",
    gender: "Female",
    birthdate: "05/14/2022",
    age: 3,
  },
];

const TDashBoard = () => {
  const [sections] = useState(CLASS_SECTIONS);
  const [students] = useState(STUDENTS);
  const [selectedId, setSelectedId] = useState(CLASS_SECTIONS[0].id);

  const [loading] = useState(false);
  const [error] = useState("");

  // Get sections and students from backend
  // useEffect(() => {
  //   const fetchDashboardData = async () => {
  //     try {
  //       setLoading(true);
  //       setError("");

  //       const response = await axios.get(
  //         ""
  //       );

  //       setSections(response.data.sections);
  //       setStudents(response.data.students);

  //       // Select the first section automatically
  //       if (response.data.sections.length > 0) {
  //         setSelectedId(response.data.sections[0].id);
  //       }
  //     } catch (error) {
  //       console.error("Failed to fetch dashboard data:", error);
  //       setError("Unable to load dashboard data.");
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchDashboardData();
  // }, []);

  // Filter students based on selected section
  const filteredStudents = students.filter(
    (student) => student.sectionId === selectedId
  );

  if (loading) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-3 bg-black font-[Poppins]">
        <Loader2 size={32} className="animate-spin text-swamp-green" />
        <p className="text-sm text-gray-400">
          Loading dashboard pls wait
          <span className="loading-dots">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#ebe9e4] font-[Poppins]">
        <p className="text-sm text-red-400">
          {error}
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen cursor-default bg-bg-[#ebe9e4] px-5 py-6 font-[Poppins]">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-4">

        <SectionCard
          sections={sections}
          selectedId={selectedId}
          onSelect={setSelectedId}
        />

        <StudentTable
          students={filteredStudents}
        />

      </div>
    </div>
  );
};

export default TDashBoard;