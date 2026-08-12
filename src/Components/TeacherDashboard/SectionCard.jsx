import React from "react";

const SCHOOL_YEAR = "2026 - 2027";
const SectionCard = ({ sections, selectedId, onSelect }) => {
  return (
    <section className="flex w-full flex-col gap-4 p-4 md:p-6">
      <h2 className="flex items-center gap-2 text-md font-[PoppinsBold] uppercase tracking-wide text-swamp-green">
        <span> 
            Class Sections: 
        </span>
        <span className="text-gray-600">
            S.Y.{SCHOOL_YEAR}
        </span>
      </h2>

      <div className="flex flex-wrap gap-5">
        {sections.map((section) => {
          const isSelected = section.id === selectedId;

          return (
            <button
              key={section.id}
              type="button"
              onClick={() => onSelect(section.id)}
              aria-pressed={isSelected}
              className={`flex flex-col w-70 items-start gap-1 rounded-xl px-5 py-3 text-left transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-swamp-green ${
                isSelected ? "bg-swamp-green text-bone" : "bg-bone text-gray-600"
              }`}
            >
              <span className="text-sm font-[PoppinsBold] uppercase tracking-wide">
                {section.name}
              </span>
              <span className="text-xs font-[PoppinsBold] uppercase tracking-wide">
                {section.level}
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
}

export default SectionCard;
