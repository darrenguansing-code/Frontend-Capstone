import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

const StudentInfo = ({
  student,
  spin,
  setSpin,
  infoFields,
  idFields,
  schoolYearField = { key: "schoolYear", label: "School Year" },
}) => {

  return (
    <div className="relative w-full overflow-hidden rounded-3xl bg-linear-to-br from-[#0f2419] via-[#1c3a28] to-[#3f7a4f] p-4 font-[Poppins] lg:p-6">
      <div className="flex w-full flex-col gap-4 lg:flex-row lg:gap-6">
        <div className="flex min-w-0 flex-col gap-4 lg:w-1/3">
          <div className="flex min-w-0 flex-col">
            <p className="py-3 text-2xs uppercase tracking-[0.2em] text-white/50 lg:text-xs">
              Enrolled Student/s
            </p>

            <div className="flex min-w-0 items-center gap-30">
              <h3 className="min-w-0 wrap-break-words text-lg font-[PoppinsBold] uppercase leading-tight tracking-wide text-white lg:text-3xl">
                {student.lastName}
              </h3>

              <button
                type="button"
                onClick={() => setSpin(!spin)}
                aria-label="View Student"
                className="shrink-0 py-1.5 text-white/70 transition hover:text-white"
              >
                <ChevronDown
                  size={16}
                  strokeWidth={5}
                  className={`transition-transform duration-700 ${
                    spin ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>
            </div>

            <p className="wrap-break-words text-lg font-[PoppinsBold] leading-tight text-white/80 lg:text-3xl">
              {student.firstName}
            </p>
          </div>

          {/* Learner Reference Number / Student ID Number */}
          <div className="py-auto flex flex-col gap-6">
            <div className="flex flex-wrap gap-8">
              {idFields.map(({ key, label }) => (
                <div key={key} className="flex flex-col gap-1.5">
                  <span className="text-2xs uppercase tracking-wider text-white/40 lg:text-2xs">
                    {label}
                  </span>
                  <p className="text-xs font-[PoppinsBold] text-white lg:text-sm">
                    {student[key] || "Not Applicable"}
                  </p>
                </div>
              ))}
            </div>

            <Link
              to="/parents/grades"
              className="flex w-full items-center justify-center rounded-xl bg-bone/95 px-6 py-3 text-sm font-[PoppinsBold] uppercase tracking-wide text-swamp-green transition hover:bg-white"
            >
              Grades
            </Link>
          </div>
        </div>

        {/* Right: tile grid */}
        <div className="grid min-w-0 flex-1 grid-cols-2 gap-2 sm:grid-cols-3 lg:gap-4">
          {/* School Year - highlighted / bordered tile */}
          <div className="flex flex-col items-center justify-center gap-1 rounded-2xl border border-white/40 p-3 text-center lg:p-5">
            <span className="text-2xs uppercase tracking-wider text-white/60 lg:text-xs">
              {schoolYearField.label}
            </span>
            <p className="text-sm font-[PoppinsBold] text-white lg:text-lg">
              {student[schoolYearField.key]}
            </p>
          </div>

          {infoFields.map(({ key, label, icon: Icon }) => (
            <div
              key={key}
              className="flex flex-col gap-2 rounded-2xl bg-white p-3 shadow-sm transition hover:-translate-y-1 hover:shadow-lg lg:gap-3 lg:p-5"
            >
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-black/5 text-black lg:h-9 lg:w-9">
                <Icon size={12} className="lg:size-4.5" />
              </div>

              <div className="flex flex-col gap-0.5 truncate">
                <span className="truncate text-2xs uppercase tracking-wider text-gray-500 lg:text-xs">
                  {label}
                </span>

                <p className="truncate text-[11px] font-[PoppinsBold] leading-4 text-swamp-green lg:text-sm lg:leading-6">
                  {student[key]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentInfo;
