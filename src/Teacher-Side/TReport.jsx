import React from "react";
import { useState } from "react";
import axios from "axios";
import { Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SectionCard from "../Components/TReport/SectionCard";
import ReportFilters from "../Components/TReport/ReportToolbar";
import AttendanceTable from "../Components/TReport/AttendanceTable";

const CLASS_SECTIONS = [
  { id: "sampaguita", name: "Sampaguita", level: "Nursery" },
  { id: "gumamela", name: "Gumamela", level: "Nursery" },
  { id: "waling-waling", name: "Waling - Waling", level: "Nursery" },
];

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const DATES = [
  "Jul 31",
  "Jul 30",
  "Jul 29",
  "Jul 28",
  "Jul 27",
  "Jul 26",
  "Jul 25",
  "Jul 24",
];

const YEARS = ["2026", "2027", "2028"];

const STUDENTS = [
  {
    schoolId: "GCA-2026-001",
    name: "Rosaline Romasanta",
    attendance: {
      "Jul 31": true,
      "Jul 30": true,
      "Jul 29": false,
      "Jul 28": true,
      "Jul 27": true,
      "Jul 26": true,
      "Jul 25": true,
      "Jul 24": true,
    },
  },
  {
    schoolId: "GCA-2026-002",
    name: "Jake Macasing",
    attendance: {
      "Jul 31": false,
      "Jul 30": true,
      "Jul 29": true,
      "Jul 28": false,
      "Jul 27": true,
      "Jul 26": true,
      "Jul 25": true,
      "Jul 24": false,
    },
  },
];

const TReport = () => {
  const navigate = useNavigate();

  const [sections] = useState(CLASS_SECTIONS);
  const [students] = useState(STUDENTS);
  const [months] = useState(MONTHS);
  const [years] = useState(YEARS);
  const [dates] = useState(DATES);

  const [selectedId, setSelectedId] = useState(CLASS_SECTIONS[0].id);
  const [month, setMonth] = useState("July");
  const [year, setYear] = useState("2026");
  const [studentName, setStudentName] = useState("");

  const [loading] = useState(false);
  const [error] = useState("");

//   // Fetch report data
//   useEffect(() => {
//     const fetchReport = async () => {
//       try {
//         setLoading(true);
//         setError("");

//         const response = await axios.get(
//           ""
//         );

//         const data = response.data;

//         setSections(data.sections);
//         setStudents(data.students);
//         setMonths(data.months);
//         setYears(data.years);
//         setDates(data.dates);

//         // Select first section
//         if (data.sections.length > 0) {
//           setSelectedId(data.sections[0].id);
//         }

//         // Select first month/year
//         if (data.months.length > 0) {
//           setMonth(data.months[0]);
//         }

//         if (data.years.length > 0) {
//           setYear(data.years[0]);
//         }
//       } catch (error) {
//         console.error("Failed to fetch report:", error);
//         setError("Unable to load attendance report.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchReport();
//   }, []);

  // Filter students
  const filteredStudents = students.filter(
    (student) =>
      student.name
        .toLowerCase()
        .includes(studentName.toLowerCase()) ||
      student.schoolId
        .toLowerCase()
        .includes(studentName.toLowerCase())
  );

  // Save report
  const handleSaveReport = async () => {
    try {
      await axios.post(
        "",
        {
          sectionId: selectedId,
          month,
          year,
        }
      );

      console.log("Report saved.");
    } catch (error) {
      console.error("Failed to save report:", error);
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-3 bg-black font-[Poppins]">
        <Loader2 size={32} className="animate-spin text-swamp-green" />
        <p className="text-sm text-gray-400">
          Loading Reporting
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
    <div className="min-h-screen cursor-default bg-[#ebe9e4] px-5 py-6 font-[Poppins]">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-4">

        <SectionCard
          sections={sections}
          selectedId={selectedId}
          onSelect={setSelectedId}
          onBack={() => navigate("/teacher/attendance")}
        />

        <ReportFilters
          month={month}
          year={year}
          studentName={studentName}
          months={months}
          years={years}
          onMonthChange={setMonth}
          onYearChange={setYear}
          onStudentNameChange={setStudentName}
          onSaveReport={handleSaveReport}
        />

        <AttendanceTable
          students={filteredStudents}
          dates={dates}
        />

      </div>
    </div>
  );
};

export default TReport;