import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mail } from "lucide-react";
import LoginHeader from "../Components/LoginHeader.jsx";
import Copyright from "../Components/Copyright.jsx";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [exiting, setExiting] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Reset password for:", email);
  };

  const handleBackToLogin = () => {
    setExiting(true);
    setTimeout(() => navigate("/login"), 400);
  };

  return (
    <>
      <LoginHeader />

      <div className="flex min-h-screen items-center justify-center bg-[#ebe9e4] px-4 py-8">
          <div className="flex w-full max-w-4xl overflow-hidden rounded-3xl bg-bone shadow-lg md:h-130">
          <div className="flex w-full flex-col justify-center px-6 py-10 sm:px-10 md:w-1/2 md:px-14">
            <div className="text-center">
              <div className="mb-4 flex items-center justify-center gap-3 md:hidden">
                <img
                  src="/public/logowbg.png"
                  alt="GCA Logo"
                  className="h-10 w-10 rounded-full object-contain"
                />
                <p className="font-[PoppinsBold] text-sm text-swamp-green">
                  Grace Christian Academy
                </p>
              </div>

              <h1 className="font-Handpicked-seashells font-bold text-3xl text-swamp-green">
                FORGOT PASSWORD?
              </h1>

              <p className="py-3 text-xs leading-relaxed text-gray-600">
                Enter your email address and we'll send you a link
                to reset your password.
              </p>
            </div>

            <form onSubmit={handleSubmit} 
            className="py-5">
              <div className="py-4">
                <label
                  htmlFor="email"
                  className="font-Handmade text-lg font-bold text-gray-700"
                >
                  Email
                </label>

                <div className="relative py-1">
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full rounded-lg border border-swamp-green bg-transparent px-4 py-3 pr-12 text-sm outline-none transition placeholder:text-gray-400 focus:ring-2 focus:ring-swamp-green"
                  />

                  <Mail
                    size={18}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="font-Handpicked-seashells w-full rounded-full border border-swamp-green py-3 text-lg font-bold text-swamp-green transition hover:bg-[#91a77a] hover:text-white"
              >
                Send Reset Link
              </button>

              <div className="py-2 text-center">
                <button
                  type="button"
                  onClick={handleBackToLogin}
                  className="text-xs text-gray-600 underline hover:text-swamp-green"
                >
                  Back to Login
                </button>
              </div>
            </form>
          </div>

          <div className={`relative hidden w-1/2 overflow-hidden md:block ${exiting ? "animate-slide-out-left" : "animate-slide-in-left"}`}>
            <img
              src="/public/log.jpg"
              alt="Grace Christian Academy"
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-linear-to-t from-[#063c31]/95 via-[#063c31]/30 to-transparent" />
            <div className="absolute bottom-8 left-0 right-0 flex items-center justify-center gap-3">
              <img
                src="/public/logowbg.png"
                alt="GCA Logo"
                className="h-12 w-12 rounded-full object-contain"
              />

              <div className="text-white">
                <h2 className="text-sm font-[PoppinsBold] leading-tight">
                  GRACE CHRISTIAN
                </h2>

                <h2 className="text-sm font-[PoppinsBold] leading-tight">
                  ACADEMY OF CAVITE INC.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Copyright />
    </>
  );
};

export default ForgotPassword;
