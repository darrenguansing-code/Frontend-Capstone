import React from "react";

const ContactInformation = ({ contact, onManage }) => {
  const contactDetails = [
    {
      label: "Address",
      value: contact.address,
    },
    {
      label: "Email",
      value: contact.email,
    },
    {
      label: "Contact No.",
      value: contact.contactNumber,
    },
  ];

  return (
    <div className="h-full w-full rounded-2xl bg-bone px-4 py-4 shadow-md sm:px-6 sm:py-5">
      <div className="flex h-full flex-col justify-center gap-5">
        <div className="flex items-center justify-between">
          <h2 className="text-xs font-bold uppercase text-swamp-green sm:text-sm">
            CONTACT INFORMATION
          </h2>

          <button
            type="button"
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
              <span className="text-2xs text-swamp-green">
                {detail.label}
              </span>

              <span
                className={`wrap-break-word text-xs font-bold text-swamp-green ${
                  detail.label === "Address"
                    ? "whitespace-pre-line"
                    : "sm:whitespace-nowrap"
                }`}
              >
                {detail.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactInformation;