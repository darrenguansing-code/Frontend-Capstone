import React from "react";
import InfoField from "./InfoField";
import InfoSection from "./InfoSection";

const StudentInfo = ({
  firstname,
  lastname,
  midname,
  stdage,
  stdgender,
  stdnationality,
  stdreligion,
  stdplacebirth,
  stddatebirth,
  gradeLevel,
  isDisabled,
  studentDisability,
  stdaddress,
  stdbarangay,
  stdcity,
  stdprovince,
  stdzipcode,

  motfirstname,
  motlastname,
  motmidname,
  motcontact,
  motemail,
  motoccupation,

  fatfirstname,
  fatlastname,
  fatmidname,
  fatcontact,
  fatemail,
  fatoccupation,

  guafirstname,
  gualastname,
  guamidname,
  guacontact,
  guaemail,
  guarelation,

  paymentOption,
  step = 1,
  agreed = false,
  onAgreeChange,
  onChange,
}) => {
  const field = (key) => (e) => onChange?.(key, e.target.value);

  return (
    <div className="flex flex-col gap-6 font-[Poppins]">
      {step === 1 ? <>
        <InfoSection title="Student Information">
          <div className="flex flex-col gap-y-4 sm:col-span-2 md:col-span-3 lg:col-span-4">
            <div className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-3">
              <InfoField 
                label="School Year" 
                value="2026-2027" 
                readOnly 
                />

              <InfoField 
              label="Grade Level" 
              value={gradeLevel} 
              options={["Pre-School", "Pre-Kinder", "Kinder"]} 
              onChange={field("gradeLevel")} 
              />
            </div>

            <div className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-3">
              <InfoField 
              label="Last Name" 
              value={lastname} 
              onChange={field("lastname")} 
              />

              <InfoField 
              label="First Name" 
              value={firstname} 
              onChange={field("firstname")} />
              <InfoField 
              label="Middle Name" 
              value={midname} 
              optional 
              onChange={field("midname")} />
            </div>
            <div className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-3">
              <InfoField 
              label="Age" 
              value={stdage} 
              onChange={field("stdage")} />
              <InfoField 
              label="Gender" 
              value={stdgender} 
              options={["Male", "Female", "Prefer not to say"]} 
              onChange={field("stdgender")} />
              <InfoField 
              label="Date of Birth" 
              value={stddatebirth} 
              onChange={field("stddatebirth")} />
            </div>
            <div className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-3">
              <InfoField 
              label="Place of Birth" 
              value={stdplacebirth} 
              onChange={field("stdplacebirth")} />
              <InfoField 
              label="Religion" 
              value={stdreligion} 
              options={["Christian", "Catholic", "Muslim", "Born Again", "Iglesia ni Cristo", "Other"]} 
              onChange={field("stdreligion")} />
              <InfoField 
              label="Nationality" 
              value={stdnationality} 
              options={["Filipino", "Other"]} 
              onChange={field("stdnationality")} />
            </div>

            <div className="flex flex-col gap-3 rounded-lg border border-[#d4d5d9] bg-white px-4 py-3 sm:flex-row sm:flex-wrap sm:items-end sm:gap-x-6 sm:gap-y-3">
              <div className="flex w-full flex-col gap-2 sm:w-auto">
                <span className="text-sm font-medium text-neutral-600">Is this Student disabled?</span>
                <div className="flex items-center gap-6 text-sm text-neutral-700">
                  <label className="flex items-center gap-2">
                    <input type="radio" name="disabled" value="yes" checked={isDisabled === "yes"} onChange={() => onChange?.("isDisabled", "yes")} 
                    className="h-4 w-4 text-swamp-green" /> Yes
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="disabled" value="no" checked={isDisabled === "no"} onChange={() => onChange?.("isDisabled", "no")} 
                    className="h-4 w-4 text-swamp-green" /> No
                  </label>
                </div>
              </div>
              <div className="flex w-full min-w-0 flex-col gap-1.5 sm:w-auto sm:flex-1 sm:flex-row sm:items-center sm:gap-2">
                <span className="text-xs font-medium text-neutral-600">
                  If yes, what is his/her disability? <b className="text-red-400"> *</b>
                </span>
                <input type="text" value={studentDisability || ""} disabled={isDisabled !== "yes"} onChange={field("studentDisability")} 
                className="h-10 w-full rounded-md border border-[#d4d5d9] bg-white px-3 text-sm text-neutral-700 outline-none disabled:cursor-not-allowed disabled:bg-neutral-100 disabled:text-neutral-400 focus:border-swamp-green focus:ring-1 focus:ring-lime-dark sm:min-w-0 sm:flex-1" />
              </div>
            </div>
          </div>
        </InfoSection>
        <InfoSection title="Student Address">
          <div className="flex flex-col gap-y-4 sm:col-span-2 md:col-span-3 lg:col-span-4">
            <div className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-3">
              <InfoField 
              label="Province" 
              value={stdprovince} 
              onChange={field("stdprovince")} 
              />

              <InfoField 
              label="Zip Code" 
              value={stdzipcode} 
              onChange={field("stdzipcode")} />
              <InfoField 
              label="City / Municipality" 
              value={stdcity} 
              onChange={field("stdcity")} />
            </div>
            <div className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
              <InfoField 
              label="House No. / Street" 
              value={stdaddress} 
              onChange={field("stdaddress")} />
              <InfoField 
              label="Barangay" 
              value={stdbarangay} 
              onChange={field("stdbarangay")} />
            </div>
          </div>
        </InfoSection>
      </> : <>
        <InfoSection title="Father Information">
          <div className="flex flex-col gap-y-4 sm:col-span-2 md:col-span-3 lg:col-span-4">
            <div className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-3">
              <InfoField 
              label="Last Name" 
              value={fatlastname} 
              onChange={field("fatlastname")} />
              <InfoField 
              label="First Name" 
              value={fatfirstname} 
              onChange={field("fatfirstname")} />
              <InfoField 
              label="Middle Name" 
              value={fatmidname} 
              optional 
              onChange={field("fatmidname")} />
            </div>
            <div className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-3">
              <InfoField 
              label="Occupation" 
              value={fatoccupation} 
              onChange={field("fatoccupation")} />
              <InfoField 
              label="Contact Number" 
              value={fatcontact} 
              onChange={field("fatcontact")} />
              <InfoField 
              label="Email" 
              value={fatemail} 
              optional 
              onChange={field("fatemail")} />
            </div>
          </div>
        </InfoSection>
        <InfoSection title="Mother Information">
          <div className="flex flex-col gap-y-4 sm:col-span-2 md:col-span-3 lg:col-span-4">
            <div className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-3">
              <InfoField 
              label="Last Name" 
              value={motlastname} 
              onChange={field("motlastname")} />
              <InfoField 
              label="First Name" 
              value={motfirstname} 
              onChange={field("motfirstname")} />
              <InfoField 
              label="Middle Name" 
              value={motmidname} 
              optional 
              onChange={field("motmidname")} />
            </div>
            <div className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-3">
              <InfoField 
              label="Occupation" 
              value={motoccupation} 
              onChange={field("motoccupation")} />
              <InfoField 
              label="Contact Number" 
              value={motcontact} 
              onChange={field("motcontact")} />
              <InfoField 
              label="Email" 
              value={motemail} 
              optional 
              onChange={field("motemail")} />
            </div>
          </div>
        </InfoSection>
        <InfoSection title="Guardian Information">
          <div className="flex flex-col gap-y-4 sm:col-span-2 md:col-span-3 lg:col-span-4">
            <div className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-3">
              <InfoField 
              label="Last Name" 
              value={gualastname} 
              onChange={field("gualastname")} />
              <InfoField 
              label="First Name" 
              value={guafirstname} 
              onChange={field("guafirstname")} />
              <InfoField 
              label="Middle Name" 
              value={guamidname} 
              optional 
              onChange={field("guamidname")} />
            </div>
            <div className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-3">
              <InfoField 
              label="Relation to Student" 
              value={guarelation} 
              options={["Father", "Mother", "Grandparent", "Aunt", "Uncle", "Sibling", "Other"]} 
              onChange={field("guarelation")} />
              <InfoField 
              label="Contact Number" 
              value={guacontact} 
              onChange={field("guacontact")} />
              <InfoField 
              label="Email" 
              value={guaemail} 
              optional 
              onChange={field("guaemail")} />
            </div>
          </div>
        </InfoSection>
        <InfoSection title="Emergency Contact">
          <div className="flex flex-col gap-y-4 sm:col-span-2 md:col-span-3 lg:col-span-4">
            <div className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-3">
              <InfoField 
              label="Last Name" 
              value={gualastname} 
              onChange={field("gualastname")} />
              <InfoField 
              label="First Name" 
              value={guafirstname} 
              onChange={field("guafirstname")} />
              <InfoField 
              label="Contact Number" 
              value={guacontact} 
              onChange={field("guacontact")} />
            </div>
            <div className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-3">
              <InfoField 
              label="Relation to Student" 
              value={guarelation} 
              options={["Father", "Mother", "Grandparent", "Aunt", "Uncle", "Sibling", "Other"]} 
              onChange={field("guarelation")} />
            </div>
          </div>
        </InfoSection>
        
        <InfoSection title="Select Payment Option">
          <div className="flex flex-col gap-y-4 sm:col-span-2 md:col-span-3 lg:col-span-4">
            <InfoField 
            label="Payment Option" 
            value={paymentOption} 
            options={["Paylite", "Full Cash", "All In"]} 
            className="max-w-md" 
            onChange={field("paymentOption")} />
            <label className="flex items-start gap-3 rounded-lg border border-[#d4d5d9] bg-white p-4 text-sm text-neutral-600"><input type="checkbox" checked={agreed} onChange={(e) => onAgreeChange?.(e.target.checked)} className="mt-0.5 h-4 w-4 rounded border-[#bfc4ca] text-[#9aae80]" />I agree to the processing and use of my personal data in accordance with the school&apos;s privacy policy and data protection guidelines.</label>
          </div>
        </InfoSection>
      </>}
    </div>
  );
};

export default StudentInfo;