import React from "react";

const DEFAULT_COLUMNS = [
  { key: "schoolId", label: "School ID" },
  { key: "lrn", label: "LRN" },
  { key: "fullName", label: "Full Name" },
  { key: "gender", label: "Gender" },
  { key: "birthdate", label: "Birthdate" },
  { key: "age", label: "Age", align: "center" },
];

const StudentTable = ({ students, columns = DEFAULT_COLUMNS }) => {
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
                <span key={col.key} className={col.align === "center" ? "text-center" : ""}>
                  {col.label}
                </span>
              ))}
            </div>

            <div className="flex flex-col gap-2">
              {students.map((student) => (
                <div
                  key={student.id}
                  className="grid gap-6 items-center rounded-xl bg-bone px-6 py-3 text-left text-xs text-slate-600"
                  style={{ gridTemplateColumns: `repeat(${colCount}, 1fr)` }}
                >
                  {columns.map((col) => (
                    <span key={col.key} className={col.align === "center" ? "text-center" : ""}>
                      {student[col.key]}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentTable;
