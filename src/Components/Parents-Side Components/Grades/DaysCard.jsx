const DaysCard = ({ totalDays }) => {

  return (
    <div className="flex w-full flex-col justify-between rounded-2xl bg-linear-to-br from-[#777777] to-[#353535] px-4 py-4 font-[Poppins] text-white shadow-md md:w-32">
      <p className="max-w-22.5 text-2xs font-bold leading-tight text-white/80 lg:text-xs">
        TOTAL NUMBER OF DAYS
      </p>

      <p className="self-end text-2xl font-bold lg:text-3xl">
        {totalDays}
      </p>
    </div>
  );
};

export default DaysCard;
