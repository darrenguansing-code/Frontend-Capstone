import { LayoutDashboard, UserPlus, GraduationCap, Users, Bell, Globe, Settings, LogOut } from "lucide-react";
import logo from "../assets/logowbg.png";

const MENU_ITEMS = [
  { label: "Dashboard", icon: LayoutDashboard },
  { label: "Admission", icon: UserPlus },
  { label: "Academic Management", icon: GraduationCap },
  { label: "User Accounts", icon: Users },
  { label: "Notifications", icon: Bell },
  { label: "Website Management", icon: Globe },
  { label: "Settings", icon: Settings },
];

const uAdminSidebar = () => {
  return (
    <aside className="flex h-full w-60 shrink-0 flex-col gap-5">
      <div className="flex items-center gap-2 rounded-2xl border border-gray-200 bg-bone px-3 py-4 shadow-[0_2px_4px_rgba(0,0,0,0.18)]">
        <img src={logo} alt="Logo" className="h-8 w-8 shrink-0 rounded-full object-cover" />
        <h1 className="text-2xs font-medium text-gray-700">
          Grace Christian Academy
        </h1>
      </div>

      {/* Sidebar Navigation */}
      <div className="flex flex-1 flex-col rounded-2xl border border-gray-200 bg-bone px-3 py-4 shadow-[0_2px_4px_rgba(0,0,0,0.18)]">
        <nav className="flex flex-col gap-4">
          {MENU_ITEMS.map((item, index) => {
            const Icon = item.icon;
            return (
              <button
                key={item.label}
                type="button"
                className={`flex items-center gap-2 whitespace-nowrap rounded-full px-7 py-3 text-left text-[9px] font-[Poppins] transition ${
                  index === 0
                    ? "bg-[#9caf7b] text-white"
                    : "text-gray-600 hover:bg-[#e9eddc]"
                }`}
              >
                <Icon size={14} />
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Logout */}
        <button
          type="button"
          className="mt-auto flex items-center gap-2 rounded-full bg-red-50 px-7 py-3 text-left text-xs font-medium text-red-400 transition hover:bg-red-100 hover:text-red-500"
        >
          <LogOut size={14} />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default uAdminSidebar;
