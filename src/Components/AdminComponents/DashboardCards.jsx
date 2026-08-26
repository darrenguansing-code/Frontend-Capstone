import { Users, User, UserCheck, Accessibility, Banknote, CreditCard, Wallet } from "lucide-react";

const CARDS = [
  { title: "Total Students", value: 50, icon: Users },
  { title: "Male Students", value: 19, icon: User },
  { title: "Female Students", value: 18, icon: UserCheck },
  { title: "Disabled Students", value: 3, icon: Accessibility },
  { title: "Total Full Cash Payment", value: 19, icon: Banknote },
  { title: "Total Pay Lite Payment", value: 18, icon: CreditCard },
  { title: "Total All In Payment", value: 3, icon: Wallet },
];

const STUDENT_CARDS = CARDS.slice(0, 4);
const PAYMENT_CARDS = CARDS.slice(4);

const DashboardCards = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4">
        
        {STUDENT_CARDS.map((card) => {
          const Icon = card.icon;
          return (
            <div
              key={card.title}
              className="flex min-h-22.5 items-center justify-between rounded-2xl border border-gray-200 bg-[#f5f6ff] px-4 py-4 shadow-[0_2px_4px_rgba(0,0,0,0.18)]"
            >
              <div className="flex flex-col gap-3">
                <p className="text-[11px] font-medium text-[#9caf7b]">
                  {card.title}
                </p>
                <p className="text-xl font-bold text-[#9caf7b]">
                  {card.value}
                </p>
              </div>
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#9caf7b]">
                <Icon size={16} className="text-white" />
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
        {PAYMENT_CARDS.map((card) => {
          const Icon = card.icon;
          return (
            <div
              key={card.title}
              className="flex min-h-22.5 items-center justify-between rounded-2xl border border-gray-200 bg-[#f5f6ff] px-4 py-4 shadow-[0_2px_4px_rgba(0,0,0,0.18)]"
            >
              <div className="flex flex-col gap-3">
                <p className="text-[11px] font-medium text-[#9caf7b]">
                  {card.title}
                </p>
                <p className="text-xl font-bold text-[#9caf7b]">
                  {card.value}
                </p>
              </div>
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#9caf7b]">
                <Icon size={16} className="text-white" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DashboardCards;
