import React from "react";

const AttendanceChecker = ({
  students,
  attendance,
  attendanceOptions,
  onAttendanceChange,
}) => {
  return (
    <div className="rounded-3xl border border-swamp-green/10 bg-white p-4 shadow-sm md:p-6">
      <div className="flex flex-col gap-2">

        {/* Header */}
        <div className="no-scrollbar overflow-x-auto">
          <div className="min-w-175">
            <div className="grid grid-cols-[1.2fr_1.2fr_1.8fr_1.2fr_1.4fr] gap-6 rounded-xl bg-[#e4e6f0] px-6 py-3 text-left text-xs font-[PoppinsBold] uppercase tracking-wide text-swamp-green">
              <span>School ID</span>
              <span>LRN</span>
              <span>Full Name</span>
              <span>Gender</span>
              <span>Attendance</span>
            </div>

            {/* Students */}
            <div className="flex flex-col gap-2">
              {students.map((student) => (
                <div
                  key={student.id}
                  className="grid grid-cols-[1.2fr_1.2fr_1.8fr_1.2fr_1.4fr] items-center gap-6 rounded-xl bg-bone px-6 py-3 text-left text-xs text-slate-600"
                >
                  <span className="min-w-0 truncate">{student.schoolId}</span>
                  <span className="min-w-0 truncate">{student.lrn}</span>
                  <span className="min-w-0 truncate">{student.fullName}</span>
                  <span className="min-w-0 truncate">{student.gender}</span>

                  {/* Attendance */}
                  <select
                    value={attendance[student.id] || student.attendance || "Present"}
                    onChange={(e) =>
                      onAttendanceChange(
                        student.id,
                        e.target.value
                      )
                    }
                    className={`h-10 w-full rounded-xl border bg-white px-4 text-xs outline-none focus:border-swamp-green ${
                      (attendance[student.id] || student.attendance || "Present") === "Present"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {attendanceOptions?.map((option) => (
                      <option
                        key={option.value}
                        value={option.value}
                        className={
                          option.value === "Absent"
                            ? "text-red-600"
                            : "text-green-600"
                        }
                      >
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttendanceChecker;
