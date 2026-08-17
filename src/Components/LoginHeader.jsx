import { Home, GraduationCap } from "lucide-react";
import { NavLink, Link } from "react-router-dom";

const SCHOOL = {
  logoUrl: "/logowbg.png",
  name: "Grace Christian Academy",
  fullName: "Grace Christian Academy Cavite Inc.",
};

const LoginHeader = () => {
  return (
    <header className="font-[Poppins]">
      <nav className="flex h-20 w-full items-center justify-between bg-[#0c2423] px-4 text-xs inset-shadow-med sm:px-10">
        <Link
          to="/"
          className="flex min-w-0 items-center gap-x-2"
        >
          <img
            src={SCHOOL.logoUrl}
            alt={SCHOOL.name}
            className="h-8 rounded-full lg:h-12"
          />

          <div className="min-w-0">
            <p className="whitespace-nowrap text-[9px] tracking-widest text-gray-200 sm:text-xs sm:tracking-[0.15em] md:text-sm md:tracking-[0.30em]">
              {SCHOOL.fullName}
            </p>

            <p className="whitespace-nowrap font-[PoppinsBold] text-xs text-bone sm:text-sm md:text-base">
              {SCHOOL.name}
            </p>
          </div>
        </Link>

        <div className="flex items-center gap-x-5 sm:gap-x-8 md:gap-x-10">
          <NavLink
            to="/login"
            end
            className={({ isActive }) =>
              `flex items-center gap-x-2 font-[PoppinsBold] tracking-wide transition-colors duration-300 ${
                isActive
                  ? "text-bone hover:text-swamp-green"
                  : "text-bone hover:text-swamp-green"
              }`
            }
          >
            <Home size={20} />
            <span 
                className="hidden sm:inline">
                    HOME
                </span>
          </NavLink>

          <NavLink
            to="/login"
            className={({ isActive }) =>
              `flex items-center gap-x-2 font-[PoppinsBold] tracking-wide transition-colors duration-300 ${
                isActive
                  ? "text-bone hover:text-swamp-green"
                  : "text-bone hover:text-swamp-green"
              }`
            }
          >
            <GraduationCap size={20} />
            <span 
                className="hidden sm:inline">
                    ADMISSION
                </span>
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default LoginHeader;
