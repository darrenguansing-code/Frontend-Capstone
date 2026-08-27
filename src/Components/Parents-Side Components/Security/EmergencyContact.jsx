const EmergencyContact = ({
  fullName,
  contactNo,
  relationship,
  onManage,
}) => {
  const contactDetails = [
    {
      label: "Full Name:",
      value: fullName,
    },
    {
      label: "Contact No. :",
      value: contactNo,
    },
    {
      label: "Relation w/ student:",
      value: relationship,
    },
  ];

  return (
    <div className="h-full w-full rounded-2xl bg-bone px-4 py-4 shadow-md sm:px-6 sm:py-5">
      <div className="flex h-full flex-col justify-center gap-5">
        <div className="flex items-center justify-between">
          <h2 className="text-xs font-bold uppercase text-swamp-green sm:text-sm">
            Student Emergency Contact Information
          </h2>

          <button
            onClick={onManage}
            className="text-2xs text-gray-400 underline"
          >
            Manage
          </button>
        </div>

        <div className="grid grid-cols-1 gap-4 py-5 sm:grid-cols-3 sm:gap-x-12">
          {contactDetails.map((detail) => (
            <div
              key={detail.label}
              className="flex min-w-0 flex-col gap-1"
            >
              <p className="text-2xs text-swamp-green">
                {detail.label}
              </p>

              <p className="wrap-break-word sm:whitespace-nowrap text-xs font-bold text-swamp-green">
                {detail.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmergencyContact;
