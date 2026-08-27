const AbsentCard = ({ absences }) => {

  return (
    <div className="flex w-full flex-col justify-between rounded-2xl bg-linear-to-br from-[#d04b70] to-[#a5004b] px-4 py-4 font-[Poppins] text-white shadow-md md:w-32">
      <p className="text-2xs font-bold text-white/80 lg:text-xs">
        ABSENCES
      </p>

      <p className="self-end text-2xl font-bold lg:text-3xl">
        {absences}
      </p>
    </div>
  );
};

export default AbsentCard;
