import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {Loader2} from "lucide-react";
import SectionCard from "../Components/TAttendance/SectionCard";
import SearchBar from "../Components/TGrades/SearchBar";
import StudentTable from "../Components/TGrades/StudentTable";

const CLASS_SECTIONS = [
  { id: "sampaguita", name: "Sampaguita", level: "Nursery" },
  { id: "gumamela", name: "Gumamela", level: "Nursery" },
  { id: "hope", name: "Hope", level: "Nursery" },
];

const COLUMNS = [
  { key: "schoolId", label: "School ID" },
  { key: "lrn", label: "LRN" },
  { key: "name", label: "Full Name" },
  { key: "gender", label: "Gender" },
  { key: "actions", label: "Actions" },
];

const TEMP_STUDENTS = [
  { schoolId: "GCA-2026-001", lrn: "1204567891011", name: "Rosaline Romasanta", gender: "Female" },
  { schoolId: "GCA-2026-002", lrn: "1204567891012", name: "Angela Cruz", gender: "Female" },
  { schoolId: "GCA-2026-003", lrn: "1204567891013", name: "Miguel Santos", gender: "Male" },
  { schoolId: "GCA-2026-004", lrn: "1345698721234", name: "Jake Macasinag", gender: "Male" },
  { schoolId: "GCA-2026-005", lrn: "1345698721235", name: "Bella Reyes", gender: "Female" },
];

const TGrades = () => {
  const navigate = useNavigate();

  const [selectedId, setSelectedId] = useState(CLASS_SECTIONS[0].id);
  const [sections] = useState(CLASS_SECTIONS);
  const [studentName, setStudentName] = useState("");
  const [students] = useState(TEMP_STUDENTS);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // useEffect(() => {
  //   const fetchStudents = async () => {
  //     try {
  //       setLoading(true);
  //       setError("");
  //       // const response = await axios.get("http://localhost:5000/teacher/students");
  //       // setStudents(response.data);
  //     } catch (err) {
  //       console.error("Failed to fetch students:", err);
  //       setError("Unable to load students.");
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchStudents();
  // }, []);

  const handleSearch = () => {
    console.log("Searching:", studentName);
  };

  const handleGradesClick = (student) => {
    navigate(`/teacher/gradesreport/${student.schoolId}`);
  };

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(studentName.toLowerCase())
  );

  const hasStudents = !loading && !error && filteredStudents.length > 0;
  const isEmpty = !loading && !error && filteredStudents.length === 0;

  // LOADING
  if (loading) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-3 bg-black font-[Poppins]">
        <Loader2 size={32} className="animate-spin text-swamp-green" />
        <p className="text-sm text-gray-400">
          Loading Grades
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

  {isEmpty && (
    <div className="flex h-40 items-center justify-center">
      <p className="text-sm text-gray-400">No students found.</p>
    </div>
  )}

  return (
    <div className="min-h-screen cursor-default bg-[#ebe9e4] px-5 py-6 font-[Poppins]">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-4">

        <SectionCard
          sections={sections}
          selectedId={selectedId}
          onSelect={setSelectedId}
        />

        <SearchBar
          studentName={studentName}
          setStudentName={setStudentName}
          onSearch={handleSearch}
        />

        {hasStudents && (
          <StudentTable
            students={filteredStudents}
            columns={COLUMNS}
            onGradesClick={handleGradesClick}
          />
        )}
      </div>
    </div>
  );
};

export default TGrades;
