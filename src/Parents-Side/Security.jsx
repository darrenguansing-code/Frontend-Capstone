import { useEffect, useState } from "react";
import axios from "axios";
import { Loader2 } from "lucide-react";
import PersonalInformation from "../Components/Parents-Side Components/Security/PersonalInformation";
import EmergencyContact from "../Components/Parents-Side Components/Security/EmergencyContact";
import AccountSettings from "../Components/Parents-Side Components/Security/AccountSettings";
import EditContactModal from "../Components/Parents-Teacher Modal/EditContactModal";
import ChangePasswordModal from "../Components/Parents-Teacher Modal/ChangePasswordModal";

const PASSWORD_FIELDS = [
  {
    key: "current",
    label: "Current Password",
    placeholder: "Enter your current password",
  },
  {
    key: "new",
    label: "New Password",
    placeholder: "Enter a new password",
  },
  {
    key: "confirm",
    label: "Confirm Password",
    placeholder: "Re-enter your new password",
  },
];

const INITIAL_PASSWORDS = {
  current: "",
  new: "",
  confirm: "",
};

const INITIAL_VISIBILITY = {
  current: false,
  new: false,
  confirm: false,
};

const Security = () => {
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // TEMPORARY DATA
  const [contactData, setContactData] = useState({
    contactNumber: "0912345678910",
    email: "romasanta@gmail.com",
    address: "",
  });

  const [formData, setFormData] = useState({
    contactNumber: "0912345678910",
    email: "romasanta@gmail.com",
    address: "",
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setLoading(true);
        setError("");
        const response = await axios.get(
          "http://localhost:5000/parent/account"
        );

        setContactData({
          contactNumber: response.data.contactNumber,
          email: response.data.email,
          address: response.data.address,
        });

        setFormData({
          contactNumber: response.data.contactNumber,
          email: response.data.email,
          address: response.data.address,
        });
      } catch (error) {
        console.error("Failed to fetch account data:", error);
        setError("Unable to load account data.");
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const handlePasswordUpdate = (passwords) => {
    console.log("Password update submitted:", passwords);

    setShowPasswordModal(false);

    /*
      Later, this can become:

      await axios.put(
        "http://localhost:5000/parent/change-password",
        passwords
      );
    */
  };

  const handleManageContact = () => {
    setFormData(contactData);
    setShowContactModal(true);
  };

  const handleContactChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSaveContact = () => {
    setContactData(formData);
    setShowContactModal(false);

    /*
      Later, this can become:

      await axios.put(
        "http://localhost:5000/parent/contact",
        formData
      );
    */
  };

  if (loading) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-3 bg-black font-[Poppins]">
        <Loader2 size={32} className="animate-spin text-swamp-green" />
        <p className="text-sm text-gray-400">
          Loading Account Settings
          <span className="loading-dots">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#ebe9e4] font-[Poppins]">
        <p className="text-sm text-red-400">
          {error}
        </p>
      </div>
    );
  }

  return (
    <div className="cursor-default bg-[#ebe9e4] px-3 py-4 font-[Poppins] sm:px-5 sm:py-6">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-4">
        <div className="flex items-center px-1 py-1 sm:px-2 sm:py-2">
          <h2 className="text-xs font-[PoppinsBold] uppercase text-swamp-green sm:text-sm md:text-base">
            Account Settings
          </h2>
        </div>

        {/* PERSONAL INFORMATION */}
        <PersonalInformation
          fullName="ROMASANTA, ROSALINE M."
          contactNo={contactData.contactNumber}
          email={contactData.email}
        />

        {/* CONTACT + ACCOUNT SETTINGS */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-[2fr_1fr]">

          <EmergencyContact
            fullName="ROMASANTA, ROSALINE"
            contactNo={contactData.contactNumber}
            relationship="MOTHER"
            onManage={handleManageContact}
          />

          <AccountSettings
            email={contactData.email}
            password="Change Password"
            onChangePassword={() =>
              setShowPasswordModal(true)
            }
          />

        </div>

        {/* CHANGE PASSWORD MODAL */}
        {showPasswordModal && (
          <ChangePasswordModal
            passwordFields={PASSWORD_FIELDS}
            initialPasswords={INITIAL_PASSWORDS}
            initialVisibility={INITIAL_VISIBILITY}
            onClose={() =>
              setShowPasswordModal(false)
            }
            onSubmit={handlePasswordUpdate}
          />
        )}

        {/* EDIT CONTACT MODAL */}
        {showContactModal && (
          <EditContactModal
            contactNo={formData.contactNumber}
            email={formData.email}
            address={formData.address}
            onContactNoChange={(value) =>
              handleContactChange(
                "contactNumber",
                value
              )
            }
            onEmailChange={(value) =>
              handleContactChange(
                "email",
                value
              )
            }
            onAddressChange={(value) =>
              handleContactChange(
                "address",
                value
              )
            }
            onCancel={() =>
              setShowContactModal(false)
            }
            onSave={handleSaveContact}
          />
        )}

      </div>
    </div>
  );
};

export default Security;