import React from "react";

const SearchBar = ({
  studentName,
  setStudentName,
  onSearch,
}) => {

  return (
    <div className="flex w-full flex-col gap-3 rounded-2xl bg-bone px-4 py-4 shadow-md sm:px-6 md:flex-row md:items-center md:gap-4">
      {/* Search Student */}
      <div className="flex w-full items-center gap-2 md:w-auto">
        <input
          type="text"
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
          placeholder="STUDENT NAME"
          className="h-8 min-w-0 flex-1 rounded-xl border border-gray-400 bg-transparent px-4 text-xs outline-none placeholder:text-gray-500 focus:border-swamp-green sm:text-xs uppercase"
        />

        <button
          type="button"
          onClick={onSearch}
          className="h-8 shrink-0 rounded-xl bg-gray-400 px-5 text-xs font-[PoppinsBold] text-white transition-colors hover:bg-swamp-green sm:text-sm"
        >
          SEARCH
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
