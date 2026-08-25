import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import ScheduleCell from "../Components/TSchedule.jsx/ScheduleCell";
import ScheduleTime from "../Components/TSchedule.jsx/ScheduleTime";

const TEMP_SCHEDULE = [
  {
    time: "7:30 AM - 8:30 AM",
    monday: { section: "Kinder - Sunflower", subject: "Reading" },
    tuesday: null,
    wednesday: { section: "Kinder - Sunflower", subject: "Reading" },
    thursday: null,
    friday: { section: "Kinder - Sunflower", subject: "Reading" },
  },
  {
    time: "8:30 AM - 9:30 AM",
    monday: null,
    tuesday: { section: "Kinder - Rose", subject: "Numbers" },
    wednesday: null,
    thursday: { section: "Kinder - Rose", subject: "Numbers" },
    friday: { section: "Kinder - Rose", subject: "Numbers" },
  },
  {
    time: "9:30 AM - 10:30 AM",
    monday: {
      section: "Kinder - Sunflower",
      subject: "Arts and Crafts",
    },
    tuesday: {
      section: "Kinder - Sunflower",
      subject: "Arts and Crafts",
    },
    wednesday: null,
    thursday: null,
    friday: null,
  },
  {
    time: "10:30 AM - 11:30 AM",
    monday: null,
    tuesday: {
      section: "Kinder - Rose",
      subject: "Shapes and Colors",
    },
    wednesday: {
      section: "Kinder - Rose",
      subject: "Shapes and Colors",
    },
    thursday: {
      section: "Kinder - Rose",
      subject: "Shapes and Colors",
    },
    friday: {
      section: "Kinder - Sunflower",
      subject: "Story Time",
    },
  },
  {
    time: "11:30 AM - 1:00 PM",
    monday: {
      section: "Lunch Time",
      subject: "",
    },
    tuesday: {
      section: "Lunch Time",
      subject: "",
    },
    wednesday: {
      section: "Lunch Time",
      subject: "",
    },
    thursday: {
      section: "Lunch Time",
      subject: "",
    },
    friday: {
      section: "Lunch Time",
      subject: "",
    },
  },
  {
    time: "1:00 PM - 2:00 PM",
    monday: {
      section: "Kinder - Sunflower",
      subject: "Story Time",
    },
    tuesday: null,
    wednesday: {
      section: "Kinder - Sunflower",
      subject: "Story Time",
    },
    thursday: null,
    friday: null,
  },
  {
    time: "2:00 PM - 3:00 PM",
    monday: null,
    tuesday: {
      section: "Kinder - Rose",
      subject: "Music and Movement",
    },
    wednesday: null,
    thursday: {
      section: "Kinder - Rose",
      subject: "Music and Movement",
    },
    friday: {
      section: "Kinder - Rose",
      subject: "Music and Movement",
    },
  },
  {
    time: "3:00 PM - 4:00 PM",
    monday: {
      section: "Play Time",
      subject: "",
    },
    tuesday: {
      section: "Play Time",
      subject: "",
    },
    wednesday: {
      section: "Play Time",
      subject: "",
    },
    thursday: {
      section: "Play Time",
      subject: "",
    },
    friday: {
      section: "Play Time",
      subject: "",
    },
  },
];

const WeeklySchedule = () => {
  const [schedule] = useState(TEMP_SCHEDULE);
  const [loading] = useState(false);
  const [error] = useState("");

  // LOADING
  if (loading) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-3 bg-black font-[Poppins]">
        <Loader2 size={32} className="animate-spin text-swamp-green" />
        <p className="text-sm text-gray-400">
          Loading Weekly Schedule
          <span className="loading-dots">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </p>
      </div>
    );
  }
  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#ebe9e4] font-[Poppins]">
        <p className="text-sm text-red-500">
          {error}
        </p>
      </div>
    );
  }

  return (
    <div className="cursor-default bg-[#ebe9e4] px-3 py-4 font-[Poppins] sm:px-5 sm:py-6">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 sm:gap-4">

        {/* HEADER */}
        <div className="flex items-center justify-between py-3 sm:py-5">
          <span className="font-[PoppinsBold] text-xs tracking-wide text-swamp-green sm:text-sm md:text-base">
            WEEKLY SCHEDULE
          </span>

          <button
            type="button"
            onClick={() => window.history.back()}
            className="rounded-full border border-gray-300 bg-bone px-3 py-1.5 text-[10px] font-[PoppinsBold] text-gray-600 transition-colors hover:bg-white hover:text-swamp-green sm:px-5 sm:py-2.5 sm:text-2xs"
          >
            BACK
          </button>
        </div>

        {/* TABLE */}
        <div className="no-scrollbar overflow-x-auto rounded-md border border-gray-200 bg-[#f7f8fc] shadow-md">
          <div className="min-w-150">
            <div className="grid grid-cols-[90px_repeat(5,1fr)] bg-swamp-green text-[9px] font-[PoppinsBold] text-white sm:grid-cols-[148px_repeat(5,1fr)] sm:text-[11px]">
              <div className="flex items-center justify-center border-r border-white/20 py-2 sm:py-3">
                TIME
              </div>

              {[
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
              ].map((day) => (
                <div
                  key={day}
                  className="flex items-center justify-center border-r border-white/20 py-2 last:border-r-0 sm:py-3"
                >
                  {day.toUpperCase()}
                </div>
              ))}
            </div>

            {/* SCHEDULE */}
            {!loading &&
              !error &&
              schedule.map((row) => (
                <div
                  key={row.time}
                  className="grid h-14 grid-cols-[90px_repeat(5,1fr)] border-b border-gray-200 last:border-b-0 sm:h-16.5 sm:grid-cols-[148px_repeat(5,1fr)]"
                >
                  {/* TIME */}
                  <ScheduleTime time={row.time} />

                  {/* MONDAY */}
                  <div className="border-r border-gray-200">
                    <ScheduleCell
                      section={row.monday?.section}
                      subject={row.monday?.subject}
                    />
                  </div>

                  {/* TUESDAY */}
                  <div className="border-r border-gray-200">
                    <ScheduleCell
                      section={row.tuesday?.section}
                      subject={row.tuesday?.subject}
                    />
                  </div>

                  {/* WEDNESDAY */}
                  <div className="border-r border-gray-200">
                    <ScheduleCell
                      section={row.wednesday?.section}
                      subject={row.wednesday?.subject}
                    />
                  </div>

                  {/* THURSDAY */}
                  <div className="border-r border-gray-200">
                    <ScheduleCell
                      section={row.thursday?.section}
                      subject={row.thursday?.subject}
                    />
                  </div>

                  {/* FRIDAY */}
                  <div>
                    <ScheduleCell
                      section={row.friday?.section}
                      subject={row.friday?.subject}
                    />
                  </div>
                </div>
              ))}

            {/* NO DATA */}
            {!loading &&
              !error &&
              schedule.length === 0 && (
                <div className="flex h-64 items-center justify-center">
                  <p className="text-sm text-gray-400">
                    No schedule available.
                  </p>
                </div>
              )}

          </div>
        </div>
      </div>
    </div>
  );
};

export default WeeklySchedule;
