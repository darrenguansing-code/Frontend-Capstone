import React from "react";
import { Plus, Search, ChevronDown } from "lucide-react";

const FILTERS = ["All", "Active", "Dropout", "Transferred"];

const SchoolYearToolbar = ({
  activeFilter,
  onFilterChange,
  onAddSchoolYear,
  searchValue,
  onSearchChange,
  onSearch,
  schoolYear = "2026-2027",
}) => {
  return (
    <div className="flex w-full items-center justify-between py-3">
      <div className="flex items-center gap-2">
        <h2 className="text-md font-semibold text-swamp-green">
          Students : 
        </h2>

        <p className="whitespace-nowrap text-sm font-[PoppinsBold] text-gray-600">
          S.Y {schoolYear}
        </p>
      </div>

      <div className="ml-auto flex items-center gap-3">
        <div className="relative">
          <select
            value={activeFilter}
            onChange={(e) => onFilterChange(e.target.value)}
            className="appearance-none rounded-full border border-gray-300 bg-white px-4 py-2 pr-8 text-xs text-gray-600 outline-none transition hover:border-swamp-green focus:border-swamp-green"
          >
            {FILTERS.map((filter) => (
              <option key={filter} value={filter}>
                {filter}
              </option>
            ))}
          </select>
          <ChevronDown
            size={14}
            className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-500"
          />
        </div>

        <button
          type="button"
          onClick={onAddSchoolYear}
          className="flex items-center gap-1.5 rounded-full bg-[#9caf88] px-5 py-2 text-xs font-medium text-white transition hover:bg-[#879b72]"
        >
          <Plus size={14} />
          Add School Year
        </button>

        <div className="relative ml-3">
          <Search
            size={14}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            value={searchValue}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="Search Student"
            className="w-60 rounded-full border border-gray-300 bg-[#f7f7ff] py-2 pl-8 pr-4 text-xs text-gray-700 outline-none focus:border-[#9caf88]"
          />
        </div>

        <button
          type="button"
          onClick={onSearch}
          className="rounded-full bg-[#9caf88] px-6 py-2 text-xs font-medium text-white transition hover:bg-[#879b72]"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SchoolYearToolbar;