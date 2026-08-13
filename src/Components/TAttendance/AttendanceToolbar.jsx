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
    <div className="flex w-full items-center justify-between rounded-2xl bg-bone px-4 py-4 shadow-md sm:px-6">
      {/* Search Student */}
      <div className="flex items-center gap-2">
        <input
          type="text"
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
          placeholder="STUDENT NAME"
          className="h-8 w-40 rounded-xl border border-gray-400 bg-transparent px-4 text-xs outline-none placeholder:text-gray-500 focus:border-swamp-green sm:w-56 uppercase"
        />

        <button
          type="button"
          onClick={onSearch}
          className="h-8 rounded-xl bg-gray-400 px-6 text-sm font-[PoppinsBold] text-white transition-colors hover:bg-swamp-green"
        >
          SEARCH
        </button>
      </div>

      {/* Attendance Date */}
      <div className="flex items-center gap-3">
        <span className="text-xs font-[Poppins] text-gray-500">
          ATTENDANCE FOR :
        </span>

        <div className="relative">
          <CalendarDays
            size={13}
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
          />

          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="h-8 w-35 rounded-xl border border-gray-400 bg-transparent pl-8 pr-3 text-xs text-gray-600 outline-none focus:border-swamp-green"
          />
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={onSave}
          className="h-8 rounded-xl bg-swamp-green px-6 text-xs font-[PoppinsBold] text-white transition-colors hover:bg-swamp-green"
        >
          SAVE
        </button>

        <button
          type="button"
          onClick={onReport}
          className="h-8 rounded-xl border border-gray-400 bg-transparent px-5 text-xs font-[PoppinsBold] text-gray-500 transition-colors hover:border-swamp-green hover:text-swamp-green"
        >
          REPORT
        </button>
      </div>
    </div>
  );
};

export default AttendanceToolbar;