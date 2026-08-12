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

// BACKEND VALUES — edit these only
const SCHOOL = {
  logoUrl: "/assets/logowbg.png",
  name: "Grace Christian Academy",
  fullName: "Grace Christian Academy Cavite Inc.",
};

const USER = {
  name: "Ms. Rosary Mendez",
  role: "Teacher Account",
  dashboardUrl: "/teacher",
  logoutUrl: "/",
};

const NAV_ITEMS = [
  { to: "/teacher", label: "Dashboard", Icon: Home },
  { to: "/teacher/attendance", label: "Attendance", Icon: CalendarCheck },
  { to: "/teacher/grades", label: "Grades", Icon: ClipboardList },
];

const MENU_ITEMS = [
  { to: "/teacher/schedule", label: "Schedule", Icon: CalendarDays },
  { to: "/teacher/security", label: "Account Settings", Icon: Settings },
];

const TeacherHeader = () => {
  const [userMenu, setUserMenu] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="font-[Poppins]">
      {userMenu && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setUserMenu(false)}
        />
      )}

      <div className="relative z-50 flex h-20 w-full items-center justify-between px-4 text-xs inset-shadow-med sm:px-10 bg-[#0c2423]">
        {/* Logo + name */}
        <span className="flex items-center gap-x-2">
          <img
            src={SCHOOL.logoUrl}
            alt=""
            className="h-8 rounded-full lg:h-12"
          />
          <Link to="/" className="min-w-0">
            <h1 className="whitespace-nowrap text-[9px] tracking-widest text-bone sm:text-xs sm:tracking-[0.15em] md:text-sm md:tracking-[0.30em]">
              {SCHOOL.fullName}
            </h1>
            <span className="whitespace-nowrap font-[PoppinsBold] text-xs text-bone sm:text-sm md:text-base">
              {SCHOOL.name}
            </span>
          </Link>
        </span>

        {/* Right side */}
        <span className="flex items-center gap-x-10 px-5 md:gap-x-8 ">
          {NAV_ITEMS.map(({ to, label, Icon }) => (
            <NavLink
              key={to}
              to={to}
              end={to === USER.dashboardUrl}
              className={({ isActive }) =>
                `${isActive ? "text-swamp-green font-[PoppinsBold]" : "text-bone hover:text-swamp-green"} flex items-center gap-x-2 font-[PoppinsBold] tracking-wide transition-colors duration-300`
              }
            >
              <Icon size={20} />
              <span className="hidden sm:inline">{label.toUpperCase()}</span>
            </NavLink>
          ))}

          {/* User dropdown */}
          <div className="relative">
            <button
              onClick={() => setUserMenu(!userMenu)}
              className="flex items-center gap-x-2 text-bone hover:text-swamp-green transition-colors duration-300"
            >
              <User size={20} />
              <span className="hidden font-[PoppinsBold] sm:inline">
                {USER.name}
              </span>
              <ChevronDown
                size={20}
                className={`hidden transition-transform sm:block ${
                  userMenu ? "rotate-180" : ""
                }`}
              />
            </button>

            {userMenu && (
              <div className="absolute right-0 top-full py-2 w-52 overflow-hidden rounded-xl border border-gray-100 bg-white shadow-lg">
                <div className="border-b border-gray-100 px-4 py-3">
                  <p className="font-[PoppinsBold] text-gray-800">{USER.name}</p>
                  <p className="text-[11px] text-gray-400">{USER.role}</p>
                </div>

                {MENU_ITEMS.map(({ to, label, Icon }) => (
                  <NavLink
                    key={to}
                    to={to}
                    onClick={() => setUserMenu(false)}
                    className={({ isActive }) =>
                      `${isActive ? "text-swamp-green font-[PoppinsBold]" : "text-gray-600 hover:text-swamp-green"} flex items-center gap-x-2 px-4 py-3 hover:bg-bone`
                    }
                  >
                    <Icon size={16} />
                    {label}
                  </NavLink>
                ))}

                <button
                  onClick={() => navigate(USER.logoutUrl)}
                  className="flex w-full items-center gap-x-2 border-t border-gray-100 px-4 py-3 text-red-500 hover:bg-bone"
                >
                  <LogOut size={16} />
                  Log out
                </button>
              </div>
            )}
          </div>
        </span>
      </div>
    </div>
  );
};

export default TeacherHeader;
