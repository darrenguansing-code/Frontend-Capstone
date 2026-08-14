import React from "react";
import { CalendarDays } from "lucide-react";

const AttendanceToolbar = ({
  studentName,
  setStudentName,
  selectedDate,
  setSelectedDate,
  onSearch,
  onSave,
  onReport,
}) => {

  return (
    <div className="flex w-full flex-col gap-3 rounded-2xl bg-bone px-4 py-4 shadow-md sm:px-6 md:flex-row md:items-center md:justify-between md:gap-4">
      {/* Search Student */}
      <div className="flex w-full items-center gap-2 md:w-auto">
        <input
          type="text"
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
          placeholder="STUDENT NAME"
          className="h-8 min-w-0 flex-1 rounded-xl border border-gray-400 bg-transparent px-4 text-xs outline-none placeholder:text-gray-500 focus:border-swamp-green sm:text-xs uppercase"
        />

        <button
          type="button"
          onClick={onSearch}
          className="h-8 shrink-0 rounded-xl bg-gray-400 px-5 text-xs font-[PoppinsBold] text-white transition-colors hover:bg-swamp-green sm:text-sm"
        >
          SEARCH
        </button>
      </div>

      <div className="flex w-full items-center justify-between gap-3 md:contents">
        <div className="flex min-w-0 items-center gap-2">
          <span className="hidden whitespace-nowrap text-sm font-[Poppins] text-gray-500 lg:inline">
            ATTENDANCE FOR :
          </span>

          <div className="relative min-w-0">
            <CalendarDays
              size={14}
              className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 sm:size-4"
            />

            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="h-8 w-40 rounded-xl border border-gray-400 bg-transparent pl-9 pr-3 text-xs text-gray-600 outline-none focus:border-swamp-green sm:text-sm"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            onClick={onSave}
            className="h-8 rounded-xl bg-swamp-green px-6 text-xs font-[PoppinsBold] text-white transition-colors hover:bg-swamp-green sm:text-sm"
          >
            SAVE
          </button>

          <button
            type="button"
            onClick={onReport}
            className="h-8 rounded-xl border border-gray-400 bg-transparent px-5 text-xs font-[PoppinsBold] text-gray-500 transition-colors hover:border-swamp-green hover:text-swamp-green sm:text-sm"
          >
            REPORT
          </button>
        </div>
      </div>
    </div>
  );
};

export default AttendanceToolbar;
