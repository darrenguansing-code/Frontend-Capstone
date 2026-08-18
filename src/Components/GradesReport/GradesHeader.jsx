import React from "react";

const GradesHeader = ({ student, onBack }) => {
  return (
    <div className="flex flex-col gap-3 sm:gap-4 md:gap-6">
      <div className="flex items-center justify-between px-1 py-1 sm:px-2 sm:py-2">
        <h1 className="text-[11px] font-[PoppinsBold] uppercase text-[#9caf7d] sm:text-xs md:text-sm">
          Student Grades
        </h1>

        <button
          type="button"
          onClick={onBack}
          className="rounded-full border border-gray-300 bg-slate-50 px-3 py-1.5 text-[9px] font-[PoppinsBold] uppercase text-gray-600 transition hover:bg-gray-100 sm:px-4 sm:py-2 sm:text-2xs md:px-5 md:text-xs"
        >
          Back
        </button>
      </div>

      {/* Mobile: stacked layout */}
      <div className="flex flex-col gap-3 rounded-2xl bg-linear-to-r from-[#0c2423] to-[#479257] px-4 py-4 shadow-md sm:rounded-3xl sm:px-5 sm:py-5 md:hidden">
        <div className="flex flex-col gap-0.5">
          <span className="text-[8px] font-[PoppinsBold] uppercase text-white/60">
            Selected Student
          </span>
          <h2 className="text-sm font-[PoppinsBold] leading-tight text-white sm:text-base">
            {student.name}
          </h2>
        </div>

        {/* LRN + Student ID + Grade Level on one line */}
        <div className="flex items-center gap-3">
          <div className="flex flex-col gap-0.5">
            <span className="text-[8px] font-[PoppinsBold] uppercase text-white/60">
              LRN
            </span>
            <span className="text-2xs font-[PoppinsBold] uppercase text-white">
              {student.lrn}
            </span>
          </div>

          <div className="h-6 w-px bg-white/20" />

          <div className="flex flex-col gap-0.5">
            <span className="text-[8px] font-[PoppinsBold] uppercase text-white/60">
              Student ID
            </span>
            <span className="text-2xs font-[PoppinsBold] uppercase text-white">
              {student.schoolId}
            </span>
          </div>

          <div className="h-6 w-px bg-white/20" />

          <div className="flex flex-col gap-0.5">
            <span className="text-[8px] font-[PoppinsBold] uppercase text-white/60">
              Grade Level
            </span>
            <span className="text-2xs font-[PoppinsBold] uppercase text-white">
              {student.gradeLevel}
            </span>
          </div>
        </div>
      </div>

      {/* Tablet/Desktop: grid layout */}
      <div className="hidden grid-cols-[2fr_1fr_1fr_1fr] items-center gap-4 rounded-3xl bg-linear-to-r from-[#073b32] to-[#449957] px-5 py-5 shadow-md sm:px-6 sm:py-6 md:grid lg:px-8 lg:py-8">
        <div className="flex flex-col gap-1">
          <span className="text-[9px] font-[PoppinsBold] uppercase text-white/60">
            Selected Student
          </span>
          <h2 className="text-base font-[PoppinsBold] leading-tight text-white lg:text-xl">
            {student.name}
          </h2>
        </div>

        <div className="flex flex-col gap-1">
          <span className="text-[9px] font-[PoppinsBold] uppercase text-white/60">
            Learner Reference Number
          </span>
          <span className="text-[11px] font-[PoppinsBold] uppercase text-white sm:text-xs">
            {student.lrn}
          </span>
        </div>

        <div className="flex flex-col gap-1">
          <span className="text-[9px] font-[PoppinsBold] uppercase text-white/60">
            Student ID Number
          </span>
          <span className="text-[11px] font-[PoppinsBold] uppercase text-white sm:text-xs">
            {student.schoolId}
          </span>
        </div>

        <div className="flex flex-col gap-1">
          <span className="text-[9px] font-[PoppinsBold] uppercase text-white/60">
            Grade Level
          </span>
          <span className="text-[11px] font-[PoppinsBold] uppercase text-white sm:text-xs">
            {student.gradeLevel}
          </span>
        </div>
      </div>
    </div>
  );
};

export default GradesHeader;
