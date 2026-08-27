import React from "react";
import { Search } from "lucide-react";

const STATUS_ITEMS = [
  "Pending",
  "Approved",
  "Rejected",
];

const AdmissionToolbar = ({
  activeStatus,
  search,
  onStatusChange,
  onSearchChange,
  onApproveSelected,
  onClearSelection,
  selectionMode,
  onToggleSelectionMode,
}) => {
  
  return (
    <>
      <div className="flex items-center justify-between py-6">
        <nav className="flex items-center gap-5">
          {STATUS_ITEMS.map((status) => (
            <button
              key={status}
              type="button"
              onClick={() => onStatusChange(status)}
              className={`rounded-full px-7 py-2 text-[11px] font-[Poppins] transition lg:text-xs xl:text-sm ${
                activeStatus === status
                  ? "bg-swamp-green text-white"
                  : "text-gray-600 hover:bg-bone"
              }`}
            >
              {status}
            </button>
          ))}
        </nav>

        {/* Search */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onToggleSelectionMode}
            className="rounded-full bg-swamp-green px-7 py-2 text-[11px] font-medium text-white transition hover:bg-swamp-green lg:text-xs xl:text-sm"
          >
            {selectionMode ? "Done" : "Check Multiple"}
          </button>

          {selectionMode && (
            <>
              <button
                type="button"
                onClick={onApproveSelected}
                className="rounded-full bg-swamp-green px-5 py-2 text-[11px] font-medium text-white transition hover:bg-swamp-green lg:text-xs xl:text-sm"
              >
                Approve Selected
              </button>

              <button
                type="button"
                onClick={onClearSelection}
                className="rounded-full border border-gray-300 px-5 py-2 text-[11px] font-medium text-gray-600 transition hover:bg-white lg:text-xs xl:text-sm"
              >
                Clear
              </button>
            </>
          )}

          <div className="flex w-56 items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm">
            <Search size={16} className="text-gray-400" />

            <input
              type="text"
              value={search}
              onChange={(event) => onSearchChange(event.target.value)}
              placeholder="Search Applicants"
              className="w-full bg-transparent px-2 text-[11px] text-gray-600 outline-none uppercase placeholder:text-gray-400 border-none focus:outline-none focus:border-hidden focus:ring-0 focus:ring-offset-0 focus:shadow-none lg:text-xs xl:text-sm"
            />
          </div>

          <button
            type="button"
            className="rounded-full bg-swamp-green px-7 py-2 text-[11px] font-medium text-white transition hover:bg-swamp-green lg:text-xs xl:text-sm"
          >
            Search
          </button>
        </div>
      </div>
    </>
  );
};

export default AdmissionToolbar;