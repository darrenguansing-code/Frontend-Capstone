import React from "react";
import FilterSelect from "./FilterSelect";

const ReportFilters = ({
  month,
  year,
  studentName,
  months,
  years,
  onMonthChange,
  onYearChange,
  onStudentNameChange,
  onSearch,
  onSaveReport,
}) => {
  return (
    <div className="flex w-full flex-col gap-2 rounded-2xl bg-bone p-2 shadow-md sm:p-3 md:flex-row md:items-center md:justify-between md:gap-4 md:p-4">

      {/* Search */}
      <div className="flex w-full items-center gap-1.5 sm:gap-2 md:w-auto">
        <input
          type="text"
          value={studentName}
          onChange={(e) => onStudentNameChange(e.target.value)}
          placeholder="STUDENT NAME"
          className="h-7 min-w-0 flex-1 rounded-xl border border-gray-300 bg-transparent px-2 text-[9px] text-gray-500 outline-none placeholder:text-gray-500 focus:border-swamp-green sm:h-8 sm:px-3 sm:text-xs uppercase md:w-52 md:flex-none"
        />

        <button
          type="button"
          onClick={onSearch}
          className="h-7 shrink-0 rounded-xl bg-gray-400 px-2.5 text-[9px] font-[PoppinsBold] text-white transition-colors hover:bg-swamp-green sm:h-8 sm:px-4 sm:text-xs"
        >
          SEARCH
        </button>
      </div>

      {/* Date Filters + Save Report */}
      <div className="flex w-full items-center gap-1.5 sm:gap-2 md:w-auto md:justify-start">
        <FilterSelect
          value={month}
          options={months}
          onChange={onMonthChange}
          className="h-7 min-w-0 flex-1 sm:h-8 sm:flex-1 md:w-32 md:flex-none"
        />

        <FilterSelect
          value={year}
          options={years}
          onChange={onYearChange}
          className="h-7 min-w-0 flex-1 sm:h-8 sm:flex-1 md:w-24 md:flex-none"
        />

        <button
          type="button"
          onClick={onSaveReport}
          className="h-7 shrink-0 rounded-xl bg-[#9caf7d] px-2 text-[9px] font-[PoppinsBold] text-white transition-colors hover:bg-swamp-green sm:h-8 sm:px-4 sm:text-xs"
        >
          SAVE REPORT
        </button>
      </div>

    </div>
  );
};

export default ReportFilters;
