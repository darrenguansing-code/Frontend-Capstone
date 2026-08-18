import { useState } from "react";
import {
  User,
  ChevronDown,
  Home,
  ClipboardList,
  CalendarCheck,
  CalendarDays,
  Settings,
  LogOut,
} from "lucide-react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import logoImg from "../assets/logowbg.png";

const SCHOOL = {
  name: "Grace Christian Academy",
  fullName: "Grace Christian Academy Cavite Inc.",
};

const USER = {
  name: "Ms. Rosary Mendez",
  role: "Teacher Account",
};

const TeacherHeader = () => {
  const [userMenu, setUserMenu] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    setUserMenu(false);
    navigate("/login");
  };

  return (
    <header className="font-[Poppins]">
      {userMenu && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setUserMenu(false)}
        />
      )}

      <nav className="relative z-50 flex h-20 w-full items-center justify-between bg-[#0c2423] px-4 text-xs inset-shadow-med sm:px-10">
        <Link
          to="/"
          className="flex min-w-0 items-center gap-x-2"
        >
          <img
            src={logoImg}
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
            to="/teacher"
            end
            className={({ isActive }) =>
              `flex items-center gap-x-2 font-[PoppinsBold] tracking-wide transition-colors duration-300 ${
                isActive
                  ? "text-swamp-green"
                  : "text-bone hover:text-swamp-green"
              }`
            }
          >
            <Home size={20} />
            <span className="hidden sm:inline">
              DASHBOARD
            </span>
          </NavLink>

          <NavLink
            to="/teacher/attendance"
            className={({ isActive }) =>
              `flex items-center gap-x-2 font-[PoppinsBold] tracking-wide transition-colors duration-300 ${
                isActive
                  ? "text-swamp-green"
                  : "text-bone hover:text-swamp-green"
              }`
            }
          >
            <CalendarCheck size={20} />
            <span className="hidden sm:inline">
              ATTENDANCE
            </span>
          </NavLink>

          <NavLink
            to="/teacher/grades"
            className={({ isActive }) =>
              `flex items-center gap-x-2 font-[PoppinsBold] tracking-wide transition-colors duration-300 ${
                isActive
                  ? "text-swamp-green"
                  : "text-bone hover:text-swamp-green"
              }`
            }
          >
            <ClipboardList size={20} />
            <span className="hidden sm:inline">
              GRADES
            </span>
          </NavLink>

          <div className="relative">
            <button
              type="button"
              onClick={() => setUserMenu((prev) => !prev)}
              className="flex items-center gap-x-2 text-bone transition-colors duration-300 hover:text-swamp-green"
            >
              <User size={20} />
              <span className="hidden font-[PoppinsBold] sm:inline">
                {USER.name}
              </span>

              <ChevronDown
                size={18}
                className={`hidden transition-transform duration-200 sm:block ${
                  userMenu ? "rotate-180" : ""
                }`}
              />
            </button>

            {userMenu && (
              <div className="absolute right-0 top-full py-3 w-56 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-xl">
                <div className="border-b border-gray-100 px-4 py-4">
                  <p className="font-[PoppinsBold] text-gray-800">
                    {USER.name}
                  </p>

                  <p className="py-1 text-[11px] text-gray-400">
                    {USER.role}
                  </p>
                </div>

                <NavLink
                  to="/teacher/weekly-schedule"
                  onClick={() => setUserMenu(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-x-3 px-4 py-3 text-sm transition-colors ${
                      isActive
                        ? "bg-green-50 font-[PoppinsBold] text-swamp-green"
                        : "text-gray-600 hover:bg-bone hover:text-swamp-green"
                    }`
                  }
                >
                  <CalendarDays size={17} />
                  <span>Schedule</span>
                </NavLink>

                <NavLink
                  to="/teacher/security"
                  onClick={() => setUserMenu(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-x-3 px-4 py-3 text-sm transition-colors ${
                      isActive
                        ? "bg-green-50 font-[PoppinsBold] text-swamp-green"
                        : "text-gray-600 hover:bg-bone hover:text-swamp-green"
                    }`
                  }
                >
                  <Settings size={17} />
                  <span>Account Settings</span>
                </NavLink>

                <div className="border-t border-gray-100">
                  <button
                    type="button"
                    onClick={handleLogout}
                    className="flex w-full items-center gap-x-3 px-4 py-3 text-sm text-red-500 transition-colors hover:bg-red-50"
                  >
                    <LogOut size={17} />
                    <span>Log out</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default TeacherHeader;