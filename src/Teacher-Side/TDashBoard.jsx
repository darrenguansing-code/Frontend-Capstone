import React, { useState } from 'react'
import SectionCard from "../Components/TeacherDashboard/SectionCard"
import StudentTable from '../Components/TeacherDashboard/StudentTable';

const CLASS_SECTIONS = [
  { id: "sampaguita", name: "Sampaguita", level: "Nursery" },
  { id: "gumamela", name: "Gumamela", level: "Nursery" },
  { id: "waling-waling", name: "Waling - Waling", level: "Nursery" },
];

const STUDENTS = [
  {
    id: 1,
    sectionId: "sampaguita",
    lrn: "1204567891011",
    fullName: "Rosaline Romasanta",
    gender: "Female",
    birthdate: "10/20/2021",
    age: 4,
  }, 
  {
    id: 2,
    sectionId: "gumamela",
    lrn: "1345698721234",
    fullName: "Jake Macasinag",
    gender: "Male",
    birthdate: "09/15/2022",
    age: 3,
  },
   {
    id: 3,
    sectionId: "waling-waling",
    lrn: "1232173271321",
    fullName: "Harold Mendez",
    gender: "Male",
    birthdate: "09/25/2022",
    age: 3,
  },
];


const TDashBoard = () => {
  const [sections] = useState(CLASS_SECTIONS);
  const [students] = useState(STUDENTS);

  const [selectedId, setSelectedId] = useState(sections[0].id);
  const filteredStudents = students.filter(
  (student) => student.sectionId === selectedId
);

  return (
    <div className="min-h-screen bg-[#ebe9e4] px-5 py-6 font-[Poppins] cursor-default">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-4">

      <SectionCard 
        sections={CLASS_SECTIONS}
        selectedId={selectedId}
        onSelect={setSelectedId}
      />

      <StudentTable 
        students={filteredStudents} 
      />

      </div>
    </div>
  )
}

export default TDashBoard;
