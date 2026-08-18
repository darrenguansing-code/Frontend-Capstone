import { useState } from "react";
// import axios from "axios";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";
import LoginHeader from "../Components/LoginHeader.jsx";
import Copyright from "../Components/Copyright.jsx";
import logImg from "../assets/log.jpg";
import logoImg from "../assets/logowbg.png";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
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
      <LoginHeader />

      <div className="flex min-h-screen items-center justify-center bg-[#ebe9e4] px-4 py-8">
        <div className="flex w-full max-w-4xl overflow-hidden rounded-3xl bg-bone shadow-lg transition-all duration-700 ease-in-out md:h-130">
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

          <div className="flex w-full flex-col justify-center px-6 py-10 sm:px-10 md:w-1/2 md:px-14">
            <div className="text-center">
              <div className="mb-4 flex items-center justify-center gap-3 md:hidden">
                <img
                  src={logoImg}
                  alt="GCA Logo"
                  className="h-10 w-10 rounded-full object-contain"
                />
                <p className="font-[PoppinsBold] text-sm text-swamp-green">
                  Grace Christian Academy
                </p>
              </div>
              <h1 className="font-Handpicked-seashells text-3xl font-bold text-swamp-green">
                WELCOME
              </h1>
              <p className="py-3 text-xs text-gray-600">
                Log in using your Grace Christian Academy Account
              </p>
            </div>

            <form onSubmit={handleSubmit} className="py-5">
              <div>
                <label
                  htmlFor="email"
                  className="font-Handmade text-lg font-bold text-gray-700"
                >
                  Email
                </label>

                <input
                  id="email"
                  type="email"
                  // value={email}
                  // onChange={(e) => setEmail(e.target.value)}
                  // required
                  className="w-full rounded-lg border border-swamp-green bg-transparent px-4 py-3 text-sm outline-none transition-all duration-500 ease-in-out focus:ring-2 focus:ring-swamp-green focus:shadow-[0_0_0_4px_rgba(7,59,50,0.1)]"
                />
              </div>

              <div className="py-4">
                <label
                  htmlFor="password"
                  className="font-Handmade text-lg font-bold text-gray-700"
                >
                  Password
                </label>

                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    // value={password}
                    // onChange={(e) => setPassword(e.target.value)}
                    // required
                    className="w-full rounded-lg border border-swamp-green bg-transparent px-4 py-3 pr-12 text-sm outline-none transition-all duration-500 ease-in-out focus:ring-2 focus:ring-swamp-green focus:shadow-[0_0_0_4px_rgba(7,59,50,0.1)]"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 transition-all duration-300 ease-in-out hover:text-swamp-green"
                  >
                    {showPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>
                </div>
              </div>

              {/* {error && (
                <p className="py-2 text-center text-xs text-red-500">
                  {error}
                </p>
              )} */}

              <button
                type="submit"
                // disabled={loading}
                className="font-Handpicked-seashells w-full rounded-full border border-[#a5b78d] py-3 text-lg font-bold text-swamp-green transition-all duration-500 ease-in-out hover:bg-[#91a77a] hover:text-white hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
                // disabled:cursor-not-allowed disabled:opacity-50
              >
                {/* {loading ? "LOGGING IN..." : "LOGIN"} */}
                LOGIN
              </button>

              <div className="py-2 text-center">
                <button
                  type="button"
                  onClick={handleForgotPassword}
                  className="text-xs text-gray-600 underline transition-all duration-300 ease-in-out hover:text-swamp-green"
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
