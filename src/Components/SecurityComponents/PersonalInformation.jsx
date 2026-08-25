const PersonalInformation = ({ fullName, contactNo, email }) => {
  const details = [
    {
      label: "Full Name:",
      value: fullName,
      fullWidth: true,
    },
    {
      label: "Contact No. :",
      value: contactNo,
    },
    {
      label: "Email:",
      value: email,
    },
  ];

  return (
    <div className="w-full rounded-2xl bg-linear-to-r from-[#0c2423] to-[#279257] px-4 py-4 shadow-md sm:px-6 sm:py-5">
      <div className="flex flex-col gap-5">
        <h2 className="text-xs font-bold uppercase text-white sm:text-sm">
          Personal Information
        </h2>

        <div className="grid grid-cols-1 gap-4 py-5 sm:grid-cols-[1.4fr_1fr_1fr] sm:gap-x-6">
          {details.map((detail) => (
            <div
              key={detail.label}
              className="flex min-w-0 flex-col gap-1"
            >
              <p className="text-2xs font-medium text-white">
                {detail.label}
              </p>

              <p className="wrap-break-word sm:whitespace-nowrap text-xs font-bold text-white">
                {detail.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PersonalInformation;
