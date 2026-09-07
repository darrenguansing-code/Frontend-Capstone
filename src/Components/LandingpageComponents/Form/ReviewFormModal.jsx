const ReviewField = ({ label, value }) => (
  <div className="min-w-0">
    <p className="mb-1 text-[9px] font-medium text-neutral-600">{label}</p>
    <div className="truncate rounded-md border border-[#d4d5d9] bg-white px-2.5 py-1.5 text-2xs text-neutral-700">
      {value || "N/A"}
    </div>
  </div>
);

const ReviewSection = ({ title, children, layered = false }) => (
  <section>
    <h2 className="mb-3 text-[9px] font-bold uppercase text-[#88a06f]">{title}</h2>
    {layered ? (
      <div className="flex flex-col gap-y-3">{children}</div>
    ) : (
      <div className="grid grid-cols-1 gap-x-4 gap-y-3 sm:grid-cols-3">{children}</div>
    )}
  </section>
);

const ReviewRow = ({ children }) => (
  <div className="grid grid-cols-1 gap-x-4 gap-y-3 sm:grid-cols-3">{children}</div>
);

const ReviewFormModal = ({ isOpen, onClose, onSubmit, data }) => {
  if (!isOpen) return null;

  const {
    firstname, lastname, midname, stdage, stdgender, stdnationality,
    stdreligion, stdplacebirth, stddatebirth, stdaddress, stdbarangay,
    stdcity, stdprovince, stdzipcode, fatfirstname, fatlastname, fatmidname,
    fatcontact, fatoccupation, fatemail, motfirstname, motlastname, motmidname,
    motcontact, motoccupation, motemail, guafirstname, gualastname, guamidname,
    guacontact, guaemail, guarelation, paymentOption, gradeLevel, isDisabled, studentDisability,
  } = data;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/25 px-4 py-5 backdrop-blur-sm" role="dialog" aria-modal="true" aria-labelledby="review-form-title">
      <div className="flex max-h-[calc(100vh-40px)] w-full max-w-200 flex-col rounded-xl bg-[#f2f4fd] p-4 shadow-xl sm:p-6">
        <div className="mb-4 flex items-center justify-between">
          <h1 id="review-form-title" className="text-sm font-bold uppercase tracking-wide text-[#88a06f]">Review Application</h1>
          <button type="button" onClick={onClose} aria-label="Close review" className="text-lg leading-none text-neutral-500 hover:text-neutral-800">&times;</button>
        </div>

        <div className="overflow-y-auto pr-1">
          <ReviewSection title="Student Information" layered>
            <ReviewRow>
              <ReviewField label="School Year" value="2026-2027" />
              <ReviewField label="Grade Level" value={gradeLevel} />
            </ReviewRow>
            <ReviewRow>
              <ReviewField label="Last Name" value={lastname} />
              <ReviewField label="First Name" value={firstname} />
              <ReviewField label="Middle Name" value={midname} />
            </ReviewRow>
            <ReviewRow>
              <ReviewField label="Age" value={stdage} />
              <ReviewField label="Gender" value={stdgender} />
              <ReviewField label="Date of Birth" value={stddatebirth} />
            </ReviewRow>
            <ReviewRow>
              <ReviewField label="Place of Birth" value={stdplacebirth} />
              <ReviewField label="Religion" value={stdreligion} />
              <ReviewField label="Nationality" value={stdnationality} />
            </ReviewRow>
            <ReviewRow>
              <ReviewField label="Is the student disabled?" value={isDisabled ? (isDisabled === "yes" ? "Yes" : "No") : "N/A"} />
              <ReviewField label="Student disability" value={studentDisability} />
            </ReviewRow>
          </ReviewSection>

          <div className="my-5 border-t border-[#d6d9e2]" />
          <ReviewSection title="Student Address">
            <ReviewField label="Province" value={stdprovince} />
            <ReviewField label="Zip Code" value={stdzipcode} />
            <ReviewField label="City / Municipality" value={stdcity} />
            <ReviewField label="House No. / Street" value={stdaddress} />
            <ReviewField label="Barangay" value={stdbarangay} />
          </ReviewSection>

          <div className="my-5 border-t border-[#d6d9e2]" />
          <ReviewSection title="Father Information">
            <ReviewField label="Last Name" value={fatlastname} />
            <ReviewField label="First Name" value={fatfirstname} />
            <ReviewField label="Middle Name" value={fatmidname} />
            <ReviewField label="Occupation" value={fatoccupation} />
            <ReviewField label="Contact Number" value={fatcontact} />
            <ReviewField label="Email" value={fatemail} />
          </ReviewSection>

          <div className="my-5 border-t border-[#d6d9e2]" />
          <ReviewSection title="Mother Information">
            <ReviewField label="Last Name" value={motlastname} />
            <ReviewField label="First Name" value={motfirstname} />
            <ReviewField label="Middle Name" value={motmidname} />
            <ReviewField label="Occupation" value={motoccupation} />
            <ReviewField label="Contact Number" value={motcontact} />
            <ReviewField label="Email" value={motemail} />
          </ReviewSection>

          <div className="my-5 border-t border-[#d6d9e2]" />
          <ReviewSection title="Emergency Contact">
            <ReviewField label="Last Name" value={gualastname} />
            <ReviewField label="First Name" value={guafirstname} />
            <ReviewField label="Middle Name" value={guamidname} />
            <ReviewField label="Contact Number" value={guacontact} />
            <ReviewField label="Email" value={guaemail} />
            <ReviewField label="Relation w/ Student" value={guarelation} />
          </ReviewSection>

          <div className="my-5 border-t border-[#d6d9e2]" />
          <ReviewSection title="Payment Method">
            <ReviewField label="Payment Option" value={paymentOption} />
          </ReviewSection>
        </div>

        <div className="flex flex-col gap-2 pt-5 sm:flex-row sm:justify-between">
          <button type="button" onClick={onClose} className="w-full rounded-md bg-white px-5 py-2.5 text-xs font-bold uppercase text-neutral-600 shadow-sm sm:w-auto">Cancel</button>
          <button type="button" onClick={onSubmit} className="w-full rounded-md bg-[#9aae80] px-5 py-2.5 text-xs font-bold uppercase text-white shadow-sm sm:w-auto">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default ReviewFormModal;