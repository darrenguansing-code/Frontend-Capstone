import React from "react";
import { ChevronDown } from "lucide-react";

const FilterSelect = ({ value, options, onChange, className = "" }) => {
  return (
    <div className={`relative ${className}`}>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-9 w-full appearance-none rounded-xl border border-gray-300 bg-white pl-4 pr-9 text-xs text-gray-600 outline-none transition-colors focus:border-swamp-green"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      <ChevronDown
        size={14}
        className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
      />
    </div>
  );
};

export default FilterSelect;
