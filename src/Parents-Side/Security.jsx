import { useState } from "react";
import ChangePasswordModal from "../Components/SecurityComponents/ChangePasswordModal";
import PersonalInformation from "../Components/SecurityComponents/PersonalInformation";
import EmergencyContact from "../Components/SecurityComponents/EmergencyContact";
import AccountSettings from "../Components/SecurityComponents/AccountSettings";

const PASSWORD_FIELDS = [
  { key: "current", label: "Current Password", placeholder: "Enter your current password" },
  { key: "new", label: "New Password", placeholder: "Enter a new password" },
  { key: "confirm", label: "Confirm Password", placeholder: "Re-enter your new password" },
];

const INITIAL_PASSWORDS = { current: "", new: "", confirm: "" };

const INITIAL_VISIBILITY = { current: false, new: false, confirm: false };

const Security = () => {
  const [showPasswordModal, setShowPasswordModal] = useState(false);

  const handlePasswordUpdate = (passwords) => {
    console.log("Password update submitted:", passwords);
    setShowPasswordModal(false);
  };

  return (
    <div className="min-h-screen bg-[#ebe9e4] px-5 py-6 font-[Poppins] cursor-default">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-4">

        <PersonalInformation
          fullName="ROMASANTA, ROSALINE M."
          contactNo="0912345678910"
          email="romasanta@gmail.com"
        />

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-[2fr_1fr]">
        <EmergencyContact
          fullName="ROMASANTA, ROSALINE"
          contactNo="0912345678910"
          relationship="MOTHER"
          onManage={() => console.log("Manage contact")}
        />

        <AccountSettings
          email="romasanta@gmail.com"
          password="Change Password"
          onChangePassword={() => console.log("Change password")}
        />
      </div>

      {showPasswordModal && (
        <ChangePasswordModal
          passwordFields={PASSWORD_FIELDS}
          initialPasswords={INITIAL_PASSWORDS}
          initialVisibility={INITIAL_VISIBILITY}
          onClose={() => setShowPasswordModal(false)}
          onSubmit={handlePasswordUpdate}
        />
      )}
    </div>
    </div>
  );
};

export default Security;
