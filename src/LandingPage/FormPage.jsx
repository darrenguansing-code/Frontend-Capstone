import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import axios from "axios";
import LoginHeader from "../Components/LoginHeader";
import Footer from "../Components/Footer";
import StudentInfo from "../Components/LandingpageComponents/Form/StudentInfo";
import ReviewFormModal from "../Components/LandingpageComponents/Form/ReviewFormModal";

const STORAGE_KEY = "studentApplication";
// const API_URL = "http://localhost:5000/apply";

const INITIAL_DATA = {
  firstname: "",
  lastname: "",
  midname: "",
  stdage: "",
  stdgender: "",
  stdnationality: "",
  stdreligion: "",
  stdplacebirth: "",
  stddatebirth: "",
  gradeLevel: "",
  isDisabled: null,
  studentDisability: "",
  stdaddress: "",
  stdbarangay: "",
  stdcity: "",
  stdprovince: "",
  stdzipcode: "",
  motfirstname: "",
  motlastname: "",
  motmidname: "",
  motcontact: "",
  motemail: "",
  motoccupation: "",
  fatfirstname: "",
  fatlastname: "",
  fatmidname: "",
  fatcontact: "",
  fatemail: "",
  fatoccupation: "",
  guafirstname: "",
  gualastname: "",
  guamidname: "",
  guacontact: "",
  guaemail: "",
  guarelation: "",
  paymentOption: "",
};

function FormPage() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [isReviewOpen, setIsReviewOpen] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [formData, setFormData] = useState(() => {
    // TEMPORARY - load saved draft from localStorage (via backend later)
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? { ...INITIAL_DATA, ...JSON.parse(saved) } : INITIAL_DATA;
    } catch {
      return INITIAL_DATA;
    }
  });

  // TEMPORARY - fetch data from backend (uncomment when backend is ready)
  // useEffect(() => {
  //   axios
  //     .get(API_URL)
  //     .then((response) => {
  //       console.log("Application data:", response.data);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching application data:", error);
  //     });
  // }, []);

  // TEMPORARY - auto-save draft to localStorage so data persists on refresh
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    } catch (error) {
      console.error("Failed to save draft:", error);
    }
  }, [formData]);

  const handleChange = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = () => {
    // TEMPORARY - submit to backend (uncomment when backend is ready)
    // axios
    //   .post(API_URL, formData)
    //   .then((response) => {
    //     console.log("Application submitted:", response.data);
    //     localStorage.removeItem(STORAGE_KEY);
    //   })
    //   .catch((error) => {
    //     console.error("Error submitting application:", error);
    //   });
    navigate("/thanksforapply");
  };

  return (
    <div className="flex min-h-screen w-full flex-col">
      <LoginHeader />

      <div className="flex w-full flex-1 flex-col overflow-x-hidden">
      <div className="flex w-full flex-1 flex-col bg-[#eeece8] px-3 py-4 sm:px-8 sm:py-8">
      <div className="mx-auto w-full max-w-6xl">
        <div className="flex items-center gap-3">
          <div className={`h-0.5 flex-1 ${step === 1 ? "bg-swamp-green" : "bg-[#b7b7b4]"}`} />
          <div className={`h-0.5 flex-1 ${step === 2 ? "bg-swamp-green" : "bg-[#b7b7b4]"}`} />
        </div>

        <div className="rounded-xl bg-transparent pt-5 sm:pt-7">
          <StudentInfo 
            {...formData} 
            step={step} 
            agreed={agreed}
            onAgreeChange={setAgreed}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col gap-2.5 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <button type="button" 
          onClick={() => setStep(1)} 
          disabled={step === 1} 
          className="w-full rounded-md bg-[#f5f4f2] px-6 py-2.5 text-sm font-semibold uppercase text-neutral-500 shadow-sm transition hover:bg-neutral-200 disabled:opacity-50 sm:w-auto">
            Prev
          </button>

          <button type="button" 
          onClick={() => (step === 1 ? setStep(2) : setIsReviewOpen(true))} 
          disabled={step === 2 && !agreed}
          className="w-full rounded-md bg-swamp-green px-6 py-2.5 text-sm font-semibold uppercase text-white shadow-sm transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-45 sm:w-auto">
            {step === 1 ? "Next" : "Review"}
          </button>
        </div>
      </div>
      </div>
      </div>

      <Footer />

      <ReviewFormModal
        isOpen={isReviewOpen}
        onClose={() => setIsReviewOpen(false)}
        onSubmit={handleSubmit}
        data={formData}
      />
    </div>
  );
}

export default FormPage;