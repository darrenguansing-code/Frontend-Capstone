const ScheduleCell = ({ section, subject }) => {

  if (!section && !subject) {
    return <div className="h-full" />;
  }
  
  const isSnackTime = section === "Snack Time";

  return (
    <div
      className={`flex h-full flex-col justify-center px-5 py-4 ${
        isSnackTime ? "bg-red-50" : ""
      }`}
    >
      <p
        className={`font-[PoppinsBold] text-sm ${
          isSnackTime ? "text-red-500" : "text-gray-600"
        }`}
      >
        {section}
      </p>

      <p
        className={`py-2 text-[11px] ${
          isSnackTime ? "text-red-400" : "text-gray-500"
        }`}
      >
        {subject}
      </p>
    </div>
  );
};

export default ScheduleCell;