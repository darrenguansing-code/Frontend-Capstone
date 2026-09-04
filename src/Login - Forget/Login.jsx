import { useState } from "react";
// import axios from "axios";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";
import LoginHeader from "../Components/LoginHeader.jsx";
import HomeSidebar from "../Components/LandingpageComponents/HomeSidebar.jsx";
import Copyright from "../Components/Copyright.jsx";
import logImg from "../assets/log.jpg";
import logoImg from "../assets/logowbg.png";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [exiting, setExiting] = useState(false);
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // try {
    //   setLoading(true);
    //   setError("");

    //   const response = await axios.post(
    //     "",
    //     {
    //       email,
    //       password,
    //     }
    //   );

    //   console.log("Login successful:", response.data);

    //   navigate("/teacher");
    // } catch (error) {
    //   console.error("Login error:", error);

    //   setError(
    //     error.response?.data?.message ||
    //       "Invalid email or password."
    //   );
    // } finally {
    //   setLoading(false);
    // }

    navigate("/teacher");
  };

  const handleForgotPassword = () => {
    setExiting(true);
    setTimeout(() => {
      navigate("/forgot-password");
    }, 600);
  };

  return (
    <>
      <LoginHeader onMenuToggle={() => setSidebarOpen(true)} />
      <HomeSidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} hideLogin />

      <div className="flex min-h-dvh items-center justify-center bg-[#ebe9e4] px-3 py-6 sm:px-4 sm:py-8">
        <div className="flex w-full max-w-4xl overflow-hidden rounded-2xl bg-bone shadow-lg transition-all duration-700 ease-in-out sm:rounded-3xl md:h-130">
          <div className={`relative hidden w-1/2 overflow-hidden md:block ${
              exiting
                ? "animate-slide-out-left"
                : "animate-slide-in-left"
            }`}
          >
            <img
              src={logImg}
              alt="Grace Christian Academy"
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-linear-to-t from-[#063c31]/95 via-[#063c31]/30 to-transparent" />
            <div className="absolute bottom-8 left-0 right-0 flex items-center justify-center gap-3">
              <img
                src={logoImg}
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

          <div className="flex w-full flex-col justify-center px-4 py-4 sm:px-8 sm:py-6 md:w-1/2 md:px-14">
            <div className="text-center">
              <div className="py-3 flex items-center justify-center gap-2 md:hidden">
                <img
                  src={logoImg}
                  alt="GCA Logo"
                  className="h-8 w-8 rounded-full object-contain sm:h-10 sm:w-10"
                />
                <p className="font-[PoppinsBold] text-xs text-swamp-green sm:text-sm">
                  Grace Christian Academy
                </p>
              </div>
              <h1 className="font-Handpicked-seashells text-2xl font-bold text-swamp-green sm:text-3xl">
                WELCOME
              </h1>
              <p className="py-2 text-2xs text-gray-600 sm:text-xs">
                Log in using your Grace Christian Academy Account
              </p>
            </div>

            <form onSubmit={handleSubmit} className="py-2 sm:py-5">
              <div>
                <label
                  htmlFor="email"
                  className="font-Handmade text-base font-bold text-gray-700 sm:text-lg"
                >
                  Email
                </label>

                <input
                  id="email"
                  type="email"
                  className="w-full rounded-lg border border-swamp-green bg-transparent px-3 py-2.5 text-xs outline-none transition-all duration-500 ease-in-out focus:ring-2 focus:ring-swamp-green focus:shadow-[0_0_0_4px_rgba(7,59,50,0.1)] sm:px-4 sm:py-3 sm:text-sm"
                />
              </div>

              <div className="py-2 sm:py-4">
                <label
                  htmlFor="password"
                  className="font-Handmade text-base font-bold text-gray-700 sm:text-lg"
                >
                  Password
                </label>

                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    className="w-full rounded-lg border border-swamp-green bg-transparent px-3 py-2.5 pr-10 text-xs outline-none transition-all duration-500 ease-in-out focus:ring-2 focus:ring-swamp-green focus:shadow-[0_0_0_4px_rgba(7,59,50,0.1)] sm:px-4 sm:py-3 sm:pr-12 sm:text-sm"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 transition-all duration-300 ease-in-out hover:text-swamp-green sm:right-4"
                  >
                    {showPassword ? (
                      <EyeOff size={16} />
                    ) : (
                      <Eye size={16} />
                    )}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="font-Handpicked-seashells w-full rounded-full border border-[#a5b78d] py-2.5 text-base font-bold text-swamp-green transition-all duration-500 ease-in-out hover:bg-[#91a77a] hover:text-white hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] sm:py-3 sm:text-lg"
              >
                LOGIN
              </button>

              <div className="py-2 text-center">
                <button
                  type="button"
                  onClick={handleForgotPassword}
                  className="text-2xs text-gray-600 underline transition-all duration-300 ease-in-out hover:text-swamp-green sm:text-xs"
                >
                  Forgot Password?
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Copyright />
    </>
  );
};

export default Login;
