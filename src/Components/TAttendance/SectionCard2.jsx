import React from "react";

const SectionCard2 = ({ sections, selectedId, onSelect }) => {
  return (
    <div className="flex w-full flex-col gap-4 p-4 md:p-6">
      <h2 className="flex items-center gap-2 text-sm font-[PoppinsBold] uppercase tracking-wide text-swamp-green sm:text-md">
        <span>
          Class Sections:
        </span>
      </h2>

      <div className="grid grid-cols-2 gap-5 lg:flex">
        {sections.map((section) => {
          const isSelected = section.id === selectedId;

          return (
            <button
              key={section.id}
              type="button"
              onClick={() => onSelect(section.id)}
              aria-pressed={isSelected}
              className={`flex min-w-0 flex-col items-start gap-1 rounded-xl px-5 py-3 text-left transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-swamp-green lg:w-70 lg:flex-none ${
                isSelected ? "bg-swamp-green text-bone" : "bg-bone text-gray-600"
              }`}
            >
              <span className="text-xs font-[PoppinsBold] uppercase tracking-wide sm:text-sm">
                {section.name}
              </span>
              <span className="text-2xs font-[PoppinsBold] uppercase tracking-wide sm:text-xs">
                {section.level}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default SectionCard2;
