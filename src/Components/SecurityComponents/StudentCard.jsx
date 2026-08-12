import { ChevronDown } from "lucide-react";

const StudentCard = ({ student, spin, setSpin, infoFields, summaryFields }) => {
  return (
    <div className="flex flex-col gap-3 rounded-3xl border border-swamp-green/10 bg-bone p-3 md:gap-6 md:p-6">

      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 md:gap-4">
        <div className="flex flex-col gap-1 md:gap-2">
          <p className="text-2xs uppercase tracking-[0.2em] text-gray-500 md:text-xs">
            Enrolled Student
          </p>

          <h3 className="text-base font-[PoppinsBold] text-swamp-green md:text-2xl">
            {student.fullName}
          </h3>
        </div>

        <button
          type="button"
          onClick={() => setSpin(!spin)}
          className="flex items-center gap-1 rounded-lg border border-swamp-green/10 bg-white px-2.5 py-1.5 text-[11px] font-[PoppinsBold] text-gray-500 transition hover:border-swamp-green hover:text-swamp-green md:gap-2 md:rounded-xl md:px-4 md:py-3 md:text-sm"
        >
          View Student
          <ChevronDown
            size={12}
            className={`transition-transform duration-700 md:size-4.5 ${
              spin ? "rotate-180" : "rotate-0"
            }`}
          />
        </button>

      </div>

      {/* Summary */}
      <div className="grid grid-cols-2 gap-2 md:gap-4">
        {summaryFields.map(({ key, label, fallback }) => (
          <div key={key} className="flex flex-col justify-between rounded-2xl bg-white p-2 shadow-sm md:p-5">
            <span className="truncate text-2xs uppercase tracking-wider text-gray-500 md:text-xs">
              {label}
            </span>

            <p className="truncate text-xs font-[PoppinsBold] text-swamp-green md:text-lg">
              {student[key] || fallback}
            </p>
          </div>
        ))}
      </div>

      {/* Details */}
      <div className="grid gap-2 md:grid-cols-2 xl:grid-cols-5 md:gap-4">
        {infoFields.map(({ key, label, icon: Icon }) => (
          <div
            key={key}
            className="flex flex-row items-center gap-2 rounded-2xl bg-white p-2 shadow-sm transition hover:-translate-y-1 hover:shadow-lg md:flex-col md:gap-4 md:p-5"
          >
            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-black/5 text-black md:h-11 md:w-11">
              <Icon size={12} className="md:size-5.5" />
            </div>

            <div className="flex flex-col gap-0.5 truncate">
              <span className="truncate text-2xs uppercase tracking-wider text-gray-500 md:text-xs">
                {label}
              </span>

              <p className="truncate text-[11px] font-[PoppinsBold] leading-4 text-swamp-green md:text-sm md:leading-6">
                {student[key]}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentCard;
