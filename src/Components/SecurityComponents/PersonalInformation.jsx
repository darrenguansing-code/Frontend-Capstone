const PersonalInformation = ({ fullName, contactNo, email }) => {

  return (
    <div className="flex flex-col gap-6">
      <div className="w-full rounded-2xl bg-linear-to-r from-[#0c2423] to-[#279257] px-6 py-5 shadow-md">
        <div className="flex flex-col gap-6">
          <h3 className="text-lg font-bold uppercase text-white">
            Personal Information
          </h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="flex flex-col gap-1">
              <p className="text-2xs font-medium text-white">
                Full Name:
              </p>
              <p className="text-sm font-bold text-white">
                {fullName}
              </p>
            </div>

            <div className="flex flex-col gap-1">
              <p className="text-2xs font-medium text-white">
                Contact No. :
              </p>
              <p className="text-sm font-bold text-white">
                {contactNo}
              </p>
            </div>

            <div className="flex flex-col gap-1">
              <p className="text-2xs font-medium text-white">
                Email:
              </p>
              <p className="text-sm font-bold text-white">
                {email}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInformation;
