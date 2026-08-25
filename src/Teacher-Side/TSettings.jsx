import { useEffect, useState } from "react";
import axios from "axios";

import TeacherInformation from "../Components/TSettings/TeacherInformation";
import ContactInformation from "../Components/TSettings/ContactInformation";
import AccountSettings from "../Components/TSettings/AccountSettings";
import EditContactModal from "../Components/Modal/EditContactModal";
import ChangePasswordModal from "../Components/Modal/ChangePasswordModal";

const TEACHER_DATA = {
  fullName: "DELA CRUZ, JUAN P.",
  teacherId: "GCA-T4545",
  gender: "Male",
  birthdate: "January 1, 1990",
  civilStatus: "Married",
};

const CONTACT_DATA = {
  address: "Blk 48 Lot 100 Brgy.Cabuco,\nTrece Martires City, Cavite",
  email: "juancruz@gmail.com",
  contactNumber: "09123456789",
};

const ACCOUNT_DATA = {
  email: "juancruz@gmail.com",
};

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

const TSettings = () => {
  const [showContactModal, setShowContactModal] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);

  // Temporary data
  const [teacherData, setTeacherData] = useState(TEACHER_DATA);
  const [contactData, setContactData] = useState(CONTACT_DATA);
  const [accountData, setAccountData] = useState(ACCOUNT_DATA);
  const [formData, setFormData] = useState(CONTACT_DATA);

  // useEffect(() => {
  //   const fetchTeacherData = async () => {
  //     try {
  //       const response = await axios.get(
  //         "http://localhost:5000/teacher/account"
  //       );

  //       setTeacherData(response.data.teacher);
  //       setContactData(response.data.contact);
  //       setAccountData(response.data.account);
  //       setFormData(response.data.contact);
  //     } catch (error) {
  //       console.error(
  //         "Failed to fetch teacher data:",
  //         error
  //       );
  //     }
  //   };

  //   fetchTeacherData();
  // }, []);

  // Open Contact Modal
  const handleManageContact = () => {
    setFormData(contactData);
    setShowContactModal(true);
  };

  // Close Contact Modal
  const handleCancelContact = () => {
    setShowContactModal(false);
  };

  // Handle Contact Input
  const handleContactChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // Save Contact Information
  const handleSaveContact = () => {
    setContactData(formData);
    setShowContactModal(false);

    /*
      Later, when backend is ready:

      await axios.put(
        "http://localhost:5000/teacher/contact",
        formData
      );
    */
  };

  // Open Password Modal
  const handleChangePassword = () => {
    setShowPasswordModal(true);
  };

  // Close / Save Password
  const handlePasswordSubmit = (passwords) => {
    console.log("Password submitted:", passwords);

    /*
      Later, when backend is ready:

      await axios.put(
        "http://localhost:5000/teacher/change-password",
        passwords
      );
    */

    setShowPasswordModal(false);
  };

  return (
    <div className="cursor-default bg-egg px-3 py-4 font-[Poppins] sm:px-5 sm:py-6">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-4">
        <div className="flex items-center px-1 py-1 sm:px-2 sm:py-2">
          <h2 className="text-xs font-[PoppinsBold] uppercase text-swamp-green sm:text-sm md:text-base">
            Account Settings
          </h2>
        </div>

        {/* TEACHER INFORMATION */}
        <TeacherInformation
          teacher={teacherData}
        />

        {/* CONTACT + ACCOUNT */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-[2fr_1fr]">
          <ContactInformation
            contact={contactData}
            onManage={handleManageContact}
          />
          <AccountSettings
            account={accountData}
            onChangePassword={handleChangePassword}
          />
        </div>
      </div>

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
          onCancel={handleCancelContact}
          onSave={handleSaveContact}
        />
      )}

      {/* CHANGE PASSWORD MODAL */}
      {showPasswordModal && (
        <ChangePasswordModal
          fields={PASSWORD_FIELDS}
          initialPasswords={INITIAL_PASSWORDS}
          onCancel={() =>
            setShowPasswordModal(false)
          }
          onSave={handlePasswordSubmit}
        />
      )}
    </div>
  );
};

export default TSettings;