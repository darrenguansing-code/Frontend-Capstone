import React from "react";
import StudentRow from "./StudentRow";

const StudentTable = ({ students, columns, onGradesClick }) => {
  const colCount = columns.length;

  return (
    <div className="rounded-3xl border border-swamp-green/10 bg-white p-4 shadow-sm md:p-6">
      <div className="flex flex-col gap-2">
        <div className="no-scrollbar overflow-x-auto">
          <div className="min-w-175">
            <div
              className="grid gap-6 rounded-xl bg-[#e4e6f0] px-6 py-3 text-left text-xs font-[PoppinsBold] uppercase tracking-wide text-swamp-green"
              style={{ gridTemplateColumns: `repeat(${colCount}, 1fr)` }}
            >
              {columns.map((col) => (
                <span key={col.key}>{col.label}</span>
              ))}
            </div>

            <div className="flex flex-col gap-2">
              {students.map((student) => (
                <StudentRow
                  key={student.schoolId}
                  student={student}
                  columns={columns}
                  colCount={colCount}
                  onGradesClick={onGradesClick}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentTable;
