const QuarterSelector = ({
  quarters,
  selectedQuarter,
  onQuarterChange,
  onSave,
}) => {
  return (
    <div className="flex items-center justify-between gap-2 rounded-2xl bg-slate-50 px-3 py-3 shadow-md sm:rounded-3xl sm:px-4 sm:py-4 md:px-5 md:py-5">
      <div className="flex flex-wrap items-center gap-1 sm:gap-1.5 md:gap-3">
        {quarters.map((quarter) => {
          const isSelected = selectedQuarter === quarter.value;

          return (
            <button
              key={quarter.value}
              type="button"
              onClick={() => onQuarterChange(quarter.value)}
              className={`rounded-full px-2.5 py-1.5 text-[9px] font-[PoppinsBold] uppercase transition sm:px-3 sm:py-2 md:px-4 ${
                isSelected
                  ? "bg-[#9caf7d] text-white"
                  : "text-[#9caf7d] hover:bg-[#9caf7d]/10"
              }`}
            >
              {quarter.label}
            </button>
          );
        })}
      </div>

      {/* Save */}
      <button
        type="button"
        onClick={onSave}
        className="shrink-0 rounded-full bg-swamp-green px-4 py-1.5 text-[9px] font-[PoppinsBold] uppercase text-white transition hover:opacity-90 sm:px-5 sm:py-2"
      >
        Save
      </button>
    </div>
  );
};

export default QuarterSelector;
