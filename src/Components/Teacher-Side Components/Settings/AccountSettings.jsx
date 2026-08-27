import React from "react";

const AccountSettings = ({ account, onChangePassword }) => {
  const accountDetails = [
    {
      label: "Email",
      value: account.email,
    },
    {
      label: "Password",
      value: "Change Password",
      action: onChangePassword,
    },
  ];

  return (
    <div className="h-full w-full rounded-2xl bg-egg-dark px-4 py-4 text-white shadow-md font-[Poppins] sm:px-6 sm:py-5">
      <div className="flex h-full flex-col justify-center gap-5">
        <h2 className="text-xs font-bold uppercase sm:text-sm">
          ACCOUNT SETTINGS
        </h2>

        <div className="grid grid-cols-1 gap-5 py-5 sm:grid-cols-2 sm:gap-10">
          {accountDetails.map((detail) => (
            <div
              key={detail.label}
              className="flex min-w-0 flex-col gap-1"
            >
              <span className="text-2xs font-medium">
                {detail.label}
              </span>

              {detail.action ? (
                <button
                  type="button"
                  onClick={detail.action}
                  className="w-fit sm:whitespace-nowrap text-left text-xs font-bold underline transition hover:text-gray-300"
                >
                  {detail.value}
                </button>
              ) : (
                <span className="wrap-break-word sm:whitespace-nowrap text-xs font-bold">
                  {detail.value}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;