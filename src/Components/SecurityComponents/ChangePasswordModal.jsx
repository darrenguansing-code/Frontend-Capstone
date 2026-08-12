import { useState } from "react";
import {
  Eye,
  EyeOff,
  LockKeyhole,
  ShieldCheck,
  X,
} from "lucide-react";

const ChangePasswordModal = ({ passwordFields, initialPasswords, initialVisibility, onClose, onSubmit }) => {
  const [passwords, setPasswords] = useState(initialPasswords);
  const [visibility, setVisibility] = useState(initialVisibility);

  const updatePassword = (key, value) => {
    setPasswords((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const toggleVisibility = (key) => {
    setVisibility((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleSubmit = () => {
    onSubmit?.(passwords);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
      <div className="flex w-full max-w-lg flex-col gap-4 rounded-2xl bg-white p-5 shadow-2xl md:gap-6 md:rounded-3xl md:p-7">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3 md:gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-swamp-green text-white md:h-14 md:w-14 md:rounded-2xl">
              <ShieldCheck size={18} className="md:size-7" />
            </div>

            <div className="flex flex-col gap-0.5 md:gap-1">
              <h2 className="text-base font-[PoppinsBold] text-forest-green md:text-xl">
                Change Password
              </h2>

              <p className="text-[11px] text-gray-500 md:text-sm">
                Keep your account secure by using a strong password.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-xl p-1.5 text-gray-400 transition hover:bg-gray-100 hover:text-red-500 md:p-2"
          >
            <X size={16} className="md:size-5" />
          </button>
        </div>

        {/* Password Fields */}
        <div className="flex flex-col gap-3 md:gap-5">
          {passwordFields.map(({ key, label, placeholder }) => (
            <div key={key} className="flex flex-col gap-1.5 md:gap-2">
              <label className="text-xs font-medium text-forest-green md:text-sm">
                {label}
              </label>

              <div className="relative">
                <LockKeyhole
                  size={16}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 md:left-4 md:size-4.5"
                />
                <input
                  type={visibility[key] ? "text" : "password"}
                  value={passwords[key]}
                  placeholder={placeholder}
                  onChange={(e) => updatePassword(key, e.target.value)}
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 py-2.5 pl-9 pr-10 text-xs outline-none transition focus:border-swamp-green focus:bg-white focus:ring-4 focus:ring-swamp-green/10 md:py-3 md:pl-11 md:pr-12 md:text-sm"
                />

                <button
                  type="button"
                  onClick={() => toggleVisibility(key)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 transition hover:text-swamp-green md:right-4"
                >
                  {visibility[key] ? (
                    <Eye size={16} className="md:size-4.5" />
                  ) : (
                    <EyeOff size={16} className="md:size-4.5" />
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-2 md:gap-3">
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl border border-gray-200 px-4 py-2.5 text-xs font-[PoppinsBold] text-gray-600 transition hover:bg-gray-100 md:px-5 md:py-3 md:text-sm"
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={handleSubmit}
            className="rounded-xl bg-swamp-green px-5 py-2.5 text-xs font-[PoppinsBold] text-white transition hover:bg-lime-dark md:px-6 md:py-3 md:text-sm"
          >
            Update Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChangePasswordModal;
