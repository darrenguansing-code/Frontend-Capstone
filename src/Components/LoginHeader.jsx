import { Home, GraduationCap } from "lucide-react";
import { NavLink, Link } from "react-router-dom";
import logoImg from "../assets/logowbg.png";

const SCHOOL = {
  name: "Grace Christian Academy",
  fullName: "Grace Christian Academy Cavite Inc.",
};

const LoginHeader = () => {
  return (
    <header className="font-[Poppins]">
      <nav className="flex h-16 w-full items-center justify-between bg-[#0c2423] px-4 text-xs inset-shadow-med sm:h-20 sm:px-10">
        <Link
          to="/"
          className="flex min-w-0 items-center gap-x-2"
        >
          <img
            src={logoImg}
            alt={SCHOOL.name}
            className="h-7 rounded-full sm:h-8 lg:h-10"
          />

          <div className="min-w-0">
            <p className="whitespace-nowrap text-[7px] tracking-widest text-gray-200 sm:text-[9px] sm:tracking-[0.15em] lg:text-2xs lg:tracking-[0.18em]">
              {SCHOOL.fullName}
            </p>

            <p className="whitespace-nowrap font-[PoppinsBold] text-[9px] text-bone sm:text-[11px] lg:text-xs">
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
            <span className="hidden sm:inline">
              HOME
            </span>
          </NavLink>

          <NavLink
            to="/admin/admission"
            className={({ isActive }) =>
              `flex items-center gap-x-2 font-[PoppinsBold] tracking-wide transition-colors duration-300 ${
                isActive
                  ? "text-bone hover:text-swamp-green"
                  : "text-bone hover:text-swamp-green"
              }`
            }
          >
            <GraduationCap size={20} />
            <span className="hidden sm:inline">
              ADMISSION
            </span>
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default LoginHeader;
