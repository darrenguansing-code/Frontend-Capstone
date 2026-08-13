const ScheduleTime = ({ time }) => {

  return (
    <div className="flex h-full items-start border-r border-gray-200 bg-bone px-3 py-5">
      <span className="whitespace-nowrap text-2xs font-[PoppinsBold] text-swamp-green">
        {time}
      </span>
    </div>
  );
};

export default ScheduleTime;