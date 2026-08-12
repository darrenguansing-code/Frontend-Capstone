const AccountSettings = ({
  email,
  password,
  onChangePassword,
}) => {

  return (
    <div className="rounded-2xl bg-egg-dark px-6 py-5 shadow-md">
      <div className="flex flex-col gap-6">

        {/* Header */}
        <h2 className="text-2xs font-bold uppercase text-white">
          Account Settings
        </h2>

        {/* Account Information */}
        <div className="grid grid-cols-2 gap-6">

          <div className="flex flex-col gap-1">
            <p className="text-2xs font-medium text-white">
              Email
            </p>

            <p className="text-sm font-bold text-white">
              {email}
            </p>
          </div>

          <div className="flex flex-col gap-1">
            <p className="text-2xs font-medium text-white">
              Password:
            </p>

            <button
              onClick={onChangePassword}
              className="w-fit text-2xs font-bold text-white underline"
            >
              {password}
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AccountSettings;
