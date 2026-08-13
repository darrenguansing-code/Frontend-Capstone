import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
    monday: { section: "Kinder - Sunflower", subject: "Arts and Crafts" },
    tuesday: { section: "Kinder - Sunflower", subject: "Arts and Crafts" },
    wednesday: null,
    thursday: null,
    friday: null,
  },
  {
    time: "10:30 AM - 11:30 AM",
    monday: null,
    tuesday: { section: "Kinder - Rose", subject: "Shapes and Colors" },
    wednesday: { section: "Kinder - Rose", subject: "Shapes and Colors" },
    thursday: { section: "Kinder - Rose", subject: "Shapes and Colors" },
    friday: { section: "Kinder - Sunflower", subject: "Story Time" },
  },
  {
    time: "11:30 AM - 1:00 PM",
    monday: { section: "Snack Time", subject: "" },
    tuesday: { section: "Snack Time", subject: "" },
    wednesday: { section: "Snack Time", subject: "" },
    thursday: { section: "Snack Time", subject: "" },
    friday: { section: "Snack Time", subject: "" },
  },
  {
    time: "1:00 PM - 2:00 PM",
    monday: { section: "Kinder - Sunflower", subject: "Story Time" },
    tuesday: null,
    wednesday: { section: "Kinder - Sunflower", subject: "Story Time" },
    thursday: null,
    friday: null,
  },
  {
    time: "2:00 PM - 3:00 PM",
    monday: null,
    tuesday: { section: "Kinder - Rose", subject: "Music and Movement" },
    wednesday: null,
    thursday: { section: "Kinder - Rose", subject: "Music and Movement" },
    friday: { section: "Kinder - Rose", subject: "Music and Movement" },
  },
  {
    time: "3:00 PM - 4:00 PM",
    monday: { section: "Play Time", subject: "" },
    tuesday: { section: "Play Time", subject: "" },
    wednesday: { section: "Play Time", subject: "" },
    thursday: { section: "Play Time", subject: "" },
    friday: { section: "Play Time", subject: "" },
  },
];

const WeeklySchedule = () => {
  const navigate = useNavigate();

  const [schedule] = useState(TEMP_SCHEDULE);
  const [loading] = useState(false);
  const [error] = useState("");

//   useEffect(() => {
//     const fetchSchedule = async () => {
//       try {
//         setLoading(true);
//         setError("");

//         const response = await axios.get(API_URL);

//         setSchedule(response.data);
//       } catch (error) {
//         console.error("Failed to fetch schedule:", error);
//         setError("Unable to load weekly schedule.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchSchedule();
//   }, []);

  return (
    <div className="min-h-screen bg-[#ebe9e4] px-5 py-6 font-[Poppins] cursor-default">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-4">

        {/* HEADER */}
        <div className="mb-5 flex items-center justify-between">
          <span className="font-[PoppinsBold] text-sm tracking-wide text-swamp-green sm:text-base">
            WEEKLY SCHEDULE
          </span>

          <button
            type="button"
            onClick={() => navigate(-1)}
            className="rounded-full border border-gray-300 bg-bone px-5 py-2.5 text-2xs font-[PoppinsBold] text-gray-600 transition-colors hover:bg-white hover:text-swamp-green"
          >
            BACK
          </button>
        </div>

        {/* TABLE */}
        <div className="overflow-hidden rounded-md border border-gray-200 bg-[#f7f8fc] shadow-md">
          <div className="min-w-200">

            {/* TABLE HEADER */}
                <div className="grid grid-cols-[148px_repeat(5,1fr)] bg-swamp-green text-[11px] font-[PoppinsBold] text-white">
                    <div className="flex items-center justify-center border-r border-white/20 py-3">
                        TIME
                    </div>

                    {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].map((day) => (
                    <div
                        key={day}
                        className="flex items-center justify-center border-r border-white/20 py-3 last:border-r-0"
                    >
                        {day.toUpperCase()}
                    </div>
                    ))}
                </div>

            {/* LOADING */}
            {loading && (
              <div className="flex h-64 items-center justify-center">
                <p className="text-sm text-gray-400">
                  Loading your Weekly Schedule pls wait ....
                </p>
              </div>
            )}

            {/* ERROR */}
            {!loading && error && (
              <div className="flex h-64 items-center justify-center">
                <p className="text-sm text-red-400">
                  {error}
                </p>
              </div>
            )}

            {/* SCHEDULE */}
            {!loading &&
              !error &&
              schedule.map((row) => (
                <div
                  key={row.time}
                  className="grid h-16.5 grid-cols-[148px_repeat(5,1fr)] border-b border-gray-200 last:border-b-0"
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
            {!loading && !error && schedule.length === 0 && (
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