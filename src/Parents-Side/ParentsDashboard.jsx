import { useRef, useState, useEffect } from 'react'
import axios from 'axios'
import { CalendarDays, School, DoorOpen, Clock3, UserRound } from "lucide-react";
import StudentInfo from '../Components/ParentsComponents/StudentInfo'
import Announcement from '../Components/ParentsComponents/Announcement'

const INFO_FIELDS = [
  { key: "classSchedule", label: "Class Schedule", icon: CalendarDays },
  { key: "gradeLevel", label: "Grade Level", icon: School },
  { key: "room", label: "Room", icon: DoorOpen },
  { key: "classTime", label: "Class Time", icon: Clock3 },
  { key: "adviser", label: "Adviser", icon: UserRound },
];

const ID_FIELDS = [
  { key: "lrn", label: "Learner Reference Number" },
  { key: "studentId", label: "Student ID Number" },
];

const SCHOOL_YEAR_FIELD = { key: "sy", label: "School Year" };

const API_URL = "http://localhost:5000/students";

const announcements = [
  {
    title: "AWARDING CEREMONY",
    posted: "June 1, 2026",
    message:
      "Dear [Team/Colleagues/Community], We are thrilled to announce that our Annual Awarding Ceremony is just around the corner! Join us as we celebrate excellence, hard work, and outstanding achievements within our organization, We will Incourage and Expecting all of you is Join this Oppurtunity.",
    date: "[Day of week], [Month, Date, Year]",
    time: "[Start Time] to [End Time]",
    venue: "[Location Name, Address] / [Virtual Platform Link]",
  },
  {
    title: "FIELD TRIP",
    posted: "June 1, 2026",
    message:
      "Dear Parents and Guardians, We are excited to announce an upcoming educational field trip for [Grade Level/Class] students to [Destination] on [Date]. This trip is designed to complement our current curriculum in [Subject] by providing students with hands-on, real-world experiences outside the classroom.",
    date: "[Day of week], [Month, Date, Year]",
    time: "[Start Time] to [End Time]",
    venue: "[Location Name, Address] / [Virtual Platform Link]",
  },
]

const FALLBACK_STUDENTS = [
  {
    lastName: "SANTIAGO",
    firstName: "Maria Margarett",
    lrn: "4023-1234-5678",
    studentId: "GCA-S01",
    sy: "2025 - 2026",
    classSchedule: "Monday - Friday",
    gradeLevel: "Nursery",
    room: "Mahogany - 3",
    classTime: "7:00 AM - 11:00 AM",
    adviser: "Ms. Rosary Mendez",
  },
  {
    lastName: "DELACRUZ",
    firstName: "Juan Carlos",
    lrn: "4023-5678-9012",
    studentId: "GCA-S02",
    sy: "2025 - 2026",
    classSchedule: "Monday - Friday",
    gradeLevel: "Kindergarten",
    room: "Narra - 1",
    classTime: "7:00 AM - 11:00 AM",
    adviser: "Ms. Angela Torres",
  },
];

const ParentsDashboard = () => {
  const scrollRef = useRef(null);
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get(API_URL);
        setStudents(Array.isArray(response.data) ? response.data : []);
      } 
      catch (error) {
        console.error("Failed to fetch students:", error);
      } 
      finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  const displayStudents = students.length > 0 ? students : FALLBACK_STUDENTS;

  useEffect(() => {
    const element = scrollRef.current;
    if (!element) return;
    const handleScroll = () => {
      const index = Math.round(
        element.scrollLeft / element.clientWidth
      );
      setActiveIndex(Math.min(index, announcements.length - 1));
    };

    element.addEventListener("scroll", handleScroll);
    return () => {
      element.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#ebe9e4] px-5 py-6 font-[Poppins] cursor-default">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6">

        {/* Students */}
        <div className="flex flex-col gap-4 rounded-3xl">
          {loading ? (
            <div className="flex h-64 items-center justify-center rounded-3xl bg-white text-sm text-gray-500">
              Pls wait...
            </div>
          ) : (
            displayStudents.map((s, i) => (
              <StudentInfo
                key={s.studentId || i}
                student={s}
                infoFields={INFO_FIELDS}
                idFields={ID_FIELDS}
                schoolYearField={SCHOOL_YEAR_FIELD}
              />
            ))
          )}
        </div>

        <span className="mx-auto max-w-7xl w-full text-sm font-[PoppinsBold] text-swamp-green sm:text-lg md:text-md uppercase">
          Recent Announcements
        </span>
        <div ref={scrollRef} className="mx-auto max-w-7xl w-full overflow-x-auto lg:overflow-visible no-scrollbar snap-mandatory transition-smooth">
          <div className="flex gap-4 lg:grid lg:grid-cols-2 lg:gap-5">
            {announcements.map((a, i) => (
              <Announcement key={i} {...a} />
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-2 pb-4 lg:hidden">
          {announcements.map((_, i) => (
            <div
              key={i}
              className={`h-2 w-2 rounded-full transition-all ${
                i === activeIndex ? "w-4 bg-black" : "bg-black/30"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ParentsDashboard;
