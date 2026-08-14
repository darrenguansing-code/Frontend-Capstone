import React from "react";

const AttendanceRow = ({ student, dates, layout = "stacked" }) => {
  if (layout === "pane") {
    return (
      <div className="grid grid-cols-8 items-center gap-10 border-b border-gray-200 px-5 py-3">
        {dates.map((date) => {
          const isPresent = student.attendance[date];

          return (
            <div
              key={date}
              className="flex justify-center"
            >
              <span
                className={`flex h-5 w-5 items-center justify-center rounded text-[9px] font-[PoppinsBold] text-white ${
                  isPresent
                    ? "bg-swamp-green"
                    : "bg-[#f17a72]"
                }`}
              >
                {isPresent ? "P" : "A"}
              </span>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-[minmax(160px,2fr)_repeat(8,1fr)] items-center border-t border-gray-200">
      <div className="sticky left-0 z-10 min-w-0 bg-bone py-3 pl-5 pr-10">
        <p className="min-w-0 truncate text-xs text-gray-500">
          {student.schoolId}
        </p>

        <p className="whitespace-nowrap font-[Poppins] text-xs text-gray-600">
          {student.name}
        </p>
      </div>

      {dates.map((date) => {
        const isPresent = student.attendance[date];

        return (
          <div
            key={date}
            className="flex justify-center px-2 py-3"
          >
            <span
              className={`flex h-5 w-5 items-center justify-center rounded text-[9px] font-[PoppinsBold] text-white ${
                isPresent
                  ? "bg-swamp-green"
                  : "bg-[#f17a72]"
              }`}
            >
              {isPresent ? "P" : "A"}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default AttendanceRow;
