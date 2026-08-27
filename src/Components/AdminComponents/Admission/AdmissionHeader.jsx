const AdmissionHeader = ({ tabs = [], activeTab, onTabChange }) => {
    
  return (
    <header className="flex items-center gap-7 rounded-2xl border border-gray-200 bg-bone px-4 py-4 shadow-[0_2px_4px_rgba(0,0,0,0.18)]">
      {tabs.map((tab) => (
        <button
          key={tab}
          type="button"
          onClick={() => onTabChange(tab)}
          className={`rounded-full px-7 py-2 text-[11px] font-medium transition lg:text-xs xl:text-sm ${
            activeTab === tab
              ? "bg-swamp-green text-white"
              : "text-gray-600 hover:bg-bone"
          }`}
        >
          {tab}
        </button>
      ))}
    </header>
  );
};

export default AdmissionHeader;