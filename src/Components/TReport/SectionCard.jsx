import React from "react";

const SectionCard = ({ sections, selectedId, onSelect, onBack }) => {
  return (
    <div className="flex w-full flex-col gap-4 p-4 md:p-6">
      <div className="flex items-center gap-3 justify-between">
        <h2 className="text-sm font-[PoppinsBold] uppercase tracking-wide text-swamp-green sm:text-md">
          Class Sections:
        </h2>
        <button
          type="button"
          onClick={onBack}
          className="rounded-full bg-bone border px-4 py-2 text-xs font-[PoppinsBold] text-gray-600 transition-colors hover:bg-swamp-green hover:text-bone sm:text-sm"
        >
          Back →
        </button>
      </div>

      {/* Sections */}
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
                isSelected
                  ? "bg-swamp-green text-bone"
                  : "bg-bone text-gray-600"
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
};

export default SectionCard;