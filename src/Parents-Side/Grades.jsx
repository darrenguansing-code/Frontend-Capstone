import { useState, useEffect } from 'react'
import axios from 'axios'
import StudentCard from '../Components/GradesComponents/StudentCard'
import Remarks from '../Components/GradesComponents/Remarks'
import QuarterTabs from '../Components/GradesComponents/QuarterTabs'
import DevelopmentCard from '../Components/GradesComponents/DevelopmentCard'
import GradeModal from '../Components/GradesComponents/GradeModal'

const API_URL = "http://localhost:5000/grades";

const QUARTERS = ["QUARTER 1", "QUARTER 2", "QUARTER 3"];

const Grades = () => {
  const [selectedQuarter, setSelectedQuarter] = useState(1);
  const [selectedDevelopment, setSelectedDevelopment] = useState(null);
  const [student, setStudent] = useState({});
  const [attendance, setAttendance] = useState({});
  const [serverGrades, setServerGrades] = useState(null);
  const [remarks, setRemarks] = useState("");

  const gradesData = serverGrades || [];

  useEffect(() => {
    const fetchGrades = async () => {
      try {
        const response = await axios.get(API_URL, {
          params: { quarter: selectedQuarter },
        });

        if (response.data.student) setStudent(response.data.student);
        if (response.data.attendance) setAttendance(response.data.attendance);
        if (response.data.developments) setServerGrades(response.data.developments);
        if (response.data.remarks) setRemarks(response.data.remarks);
      } catch {
        setServerGrades(null);
      }
    };

    fetchGrades();
  }, [selectedQuarter]);

  const handleGradesClick = (development) => {
    setSelectedDevelopment(development);
  };

  const handleCloseModal = () => {
    setSelectedDevelopment(null);
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#ebe9e4] px-4 py-5 font-[Poppins] cursor-default sm:px-5 sm:py-6">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6">

        <StudentCard
          {...student}
          {...attendance}
        />

        <QuarterTabs
          quarters={QUARTERS}
          selectedQuarter={selectedQuarter}
          onQuarterChange={setSelectedQuarter}
        />

        {/* Development Cards */}
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          {gradesData.map((development) => (
            <DevelopmentCard
              key={development.title}
              title={development.title}
              onGradesClick={() => handleGradesClick(development)}
            />
          ))}
        </div>

        <Remarks
          remarks={remarks}
        />
      </div>

      {/* Grade Modal */}
      {selectedDevelopment && (
        <GradeModal
          title={selectedDevelopment.title}
          items={selectedDevelopment.grades}
          onClose={handleCloseModal}
        />
      )}
    </div>
  )
}

export default Grades;

