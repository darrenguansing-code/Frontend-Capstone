import React, { useState, useEffect, useMemo } from "react";
import {
  getEnrolled,
  getStudents,
} from "../../utils/data/Admin/students";
import { subscribe } from "../../utils/data/core";
import Header from "../../Components/AdminComponents/Academic Management/Header";
import SchoolYearToolbar from "../../Components/AdminComponents/Academic Management/SchoolYearToolbar";
import ApplicantsTable from "../../Components/AdminComponents/Academic Management/Students/ApplicantsTable";

const COLUMNS = [
  { key: "no", label: "NO." },
  { key: "lastName", label: "LAST NAME" },
  { key: "firstName", label: "FIRST NAME" },
  { key: "gradeLevel", label: "GRADE LEVEL" },
  { key: "section", label: "SECTION" },
  { key: "status", label: "STATUS" },
];

const Students = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchValue, setSearchValue] = useState("");
  const [viewedStudent, setViewedStudent] = useState(null);

  const [enrolled, setEnrolled] = useState(getEnrolled);

  useEffect(() => {
    return subscribe(() => setEnrolled(getEnrolled()));
  }, []);

  const allStudents = useMemo(
    () => [...getStudents(), ...enrolled],
    [enrolled]
  );

  const handleAddSchoolYear = () => {
    console.log("Add School Year");
  };

  const handleSearch = () => {
    console.log("Search:", searchValue);
  };

  const filteredStudents = allStudents.filter((student) => {
    const matchesFilter =
      activeFilter === "All" || student.status === activeFilter;

    const term = searchValue.trim().toLowerCase();
    const fullName =
      `${student.lastName} ${student.firstName}`.toLowerCase();
    const matchesSearch =
      term === "" ||
      student.lastName.toLowerCase().includes(term) ||
      student.firstName.toLowerCase().includes(term) ||
      fullName.includes(term);

    return matchesFilter && matchesSearch;
  });

  return (
    <div className="flex min-h-0 flex-1 cursor-default flex-col gap-2 bg-[#ebe9e4] font-[Poppins]">
      <Header />

      <div className="flex flex-1 flex-col gap-2 min-h-0">
        <SchoolYearToolbar
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
          onAddSchoolYear={handleAddSchoolYear}
          searchValue={searchValue}
          onSearchChange={setSearchValue}
          onSearch={handleSearch}
        />

        <ApplicantsTable
          applicants={filteredStudents}
          columns={COLUMNS}
          onView={setViewedStudent}
        />
      </div>

      {viewedStudent && (
        <pre>{JSON.stringify(viewedStudent, null, 2)}</pre>
      )}
    </div>
  );
};

export default Students;