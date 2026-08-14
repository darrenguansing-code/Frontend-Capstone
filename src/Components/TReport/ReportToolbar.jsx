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
    <div className="flex w-full flex-col gap-3 rounded-2xl bg-bone px-4 py-4 shadow-md sm:px-6 md:flex-row md:items-center md:gap-4">

      {/* Date Filters + Save Report (one lane on mobile) */}
      <div className="flex w-full items-center gap-3 md:contents">
        <FilterSelect
          value={month}
          options={months}
          onChange={onMonthChange}
          className="flex-1 order-1 md:w-32 md:flex-none"
        />

        <FilterSelect
          value={year}
          options={years}
          onChange={onYearChange}
          className="flex-1 order-2 md:w-24 md:flex-none"
        />

        <button
          type="button"
          onClick={onSaveReport}
          className="h-9 order-4 shrink-0 rounded-xl bg-[#9caf7d] px-5 text-xs font-[PoppinsBold] text-white transition-colors hover:bg-swamp-green sm:text-xs"
        >
          SAVE REPORT
        </button>
      </div>

      {/* Search */}
      <div className="flex w-full items-center gap-2 order-3 md:ml-auto md:w-auto">
        <input
          type="text"
          value={studentName}
          onChange={(e) => onStudentNameChange(e.target.value)}
          placeholder="STUDENT NAME"
          className="h-8 min-w-0 flex-1 rounded-xl border border-gray-300 bg-transparent px-4 text-xs text-gray-500 outline-none placeholder:text-gray-500 focus:border-swamp-green sm:text-xs uppercase md:w-52 md:flex-none"
        />

        <button
          type="button"
          onClick={onSearch}
          className="h-8 shrink-0 rounded-xl bg-gray-400 px-5 text-xs font-[PoppinsBold] text-white transition-colors hover:bg-swamp-green sm:text-xs"
        >
          SEARCH
        </button>
      </div>

    </div>
  );
};

export default ReportFilters;
