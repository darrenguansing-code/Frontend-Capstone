const EmergencyContact = ({
  fullName,
  contactNo,
  relationship,
  onManage,
}) => {

  return (
    <div className="rounded-2xl bg-bone px-6 py-5 shadow-md">
      <div className="flex flex-col gap-6">

        {/* Header */}
        <div className="flex items-center justify-between">
          <h2 className="text-2xs font-bold uppercase text-swamp-green">
            Student Emergency Contact Information
          </h2>

          <button
            onClick={onManage}
            className="text-2xs text-gray-400 underline"
          >
            Manage
          </button>
        </div>

        {/* Information */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">

          <div className="flex flex-col gap-1">
            <p className="text-2xs text-swamp-green">
              Full Name:
            </p>

            <p className="text-sm font-bold text-swamp-green">
              {fullName}
            </p>
          </div>

          <div className="flex flex-col gap-1">
            <p className="text-2xs text-swamp-green">
              Contact No. :
            </p>

            <p className="text-sm font-bold text-swamp-green">
              {contactNo}
            </p>
          </div>

          <div className="flex flex-col gap-1">
            <p className="text-2xs text-swamp-green">
              Relation w/ student:
            </p>

            <p className="text-sm font-bold text-swamp-green">
              {relationship}
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default EmergencyContact;
