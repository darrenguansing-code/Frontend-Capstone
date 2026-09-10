import React from 'react'
import Header from '../../Components/AdminComponents/Academic Management/Header'
import SectionToolbar from '../../Components/AdminComponents/Academic Management/Section/SectionToolbar'

const NAV_ITEMS = [
  { name: "Students", path: "/admin/academic" },
  { name: "Teachers", path: "/admin/academic/teachers" },
  { name: "Parents", path: "/admin/academic/parents" },
  { name: "Section", path: "/admin/academic/section" },
  { name: "Schedules", path: "/admin/academic/schedules" },
  { name: "Grade Levels", path: "/admin/academic/grade-levels" },
  { name: "School Years", path: "/admin/academic/school-years" },
];

const SCHOOL_YEAR = "2026-2027";

const Section = () => {
  return (
    <div className="flex min-h-0 flex-1 cursor-default flex-col gap-2 bg-[#ebe9e4] font-[Poppins]">

      <Header 
        navItems={NAV_ITEMS} 
      />

      <div className="flex flex-1 flex-col gap-2 min-h-0">
        <SectionToolbar
          schoolYear={SCHOOL_YEAR}
        />
      </div>
    </div>
  )
}

export default Section