import React from "react";

const SearchBar = ({
  studentName,
  setStudentName,
  onSearch,
}) => {

  return (
    <div className="flex w-full flex-col gap-2 rounded-2xl bg-bone px-3 py-3 shadow-md sm:px-4 sm:py-4 md:flex-row md:items-center md:gap-4">
      {/* Search Student */}
      <div className="flex w-full items-center gap-1.5 sm:gap-2 md:w-auto">
        <input
          type="text"
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
          placeholder="STUDENT NAME"
          className="h-7 min-w-0 flex-1 rounded-xl border border-gray-400 bg-transparent px-2.5 text-2xs outline-none placeholder:text-gray-500 focus:border-swamp-green sm:h-8 sm:px-4 sm:text-xs uppercase"
        />

        <button
          type="button"
          onClick={onSearch}
          className="h-7 shrink-0 rounded-xl bg-gray-400 px-3 text-2xs font-[PoppinsBold] text-white transition-colors hover:bg-swamp-green sm:h-8 sm:px-5 sm:text-xs"
        >
          SEARCH
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
