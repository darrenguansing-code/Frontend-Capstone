const DevelopmentCard = ({ title, onGradesClick }) => {

  return (
    <div className="flex items-center justify-between gap-3 rounded-3xl border border-gray-200 bg-[#f4f6ff] px-4 py-4 font-[Poppins] shadow-sm sm:px-6 sm:py-5">
      <h3 className="min-w-0 text-2xs font-bold text-[#9caf7d] lg:text-xs">
        {title}
      </h3>

      <button
        type="button"
        onClick={onGradesClick}
        className="shrink-0 rounded-full bg-[#9caf7d] px-4 py-2.5 text-[9px] font-bold text-white transition-all duration-200 hover:bg-[#899d6c] sm:px-6 sm:py-3 lg:text-[11px]"
      >
        GRADES
      </button>
    </div>
  );
};

export default DevelopmentCard;
