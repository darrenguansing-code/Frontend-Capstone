const AccountSettings = ({
  email,
  password,
  onChangePassword,
}) => {

  return (
    <div className="h-full w-full rounded-2xl bg-egg-dark px-4 py-4 shadow-md sm:px-6 sm:py-5">
      <div className="flex h-full flex-col justify-center gap-5">
        <h2 className="text-xs font-bold uppercase text-white sm:text-sm">
          Account Settings
        </h2>

        <div className="grid grid-cols-1 gap-5 py-5 sm:grid-cols-2 sm:gap-10">
          <div className="flex min-w-0 flex-col gap-1">
            <p className="text-2xs font-medium text-white">
              Email
            </p>

            <p className="wrap-break-word sm:whitespace-nowrap text-xs font-bold text-white">
              {email}
            </p>
          </div>

          <div className="flex min-w-0 flex-col gap-1">
            <p className="text-2xs font-medium text-white">
              Password:
            </p>

            <button
              onClick={onChangePassword}
              className="w-fit sm:whitespace-nowrap text-left text-xs font-bold text-white underline"
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
