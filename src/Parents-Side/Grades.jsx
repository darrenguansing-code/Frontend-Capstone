import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Loader2 } from 'lucide-react'
import StudentCard from '../Components/Parents-Side Components/Grades/StudentCard'
import Remarks from '../Components/Parents-Side Components/Grades/Remarks'
import QuarterTabs from '../Components/Parents-Side Components/Grades/QuarterTabs'
import DevelopmentCard from '../Components/Parents-Side Components/Grades/DevelopmentCard'
import GradeModal from '../Components/Parents-Teacher Modal/GradeModal'

const QUARTERS = ["QUARTER 1", "QUARTER 2", "QUARTER 3"];

const ALL_STUDENTS = {
  "GCA-S01": {
    student: {
      lastName: "Santiago",
      firstName: "Maria Margarett",
      learnerReferenceNumber: "4023-1234-5678",
      studentId: "GCA-S01",
    },
    attendance: {
      totalDays: 120,
      absences: 3,
    },
    developments: {
      1: [
        {
          title: "Language Development",
          grades: [
            { skill: "Listening", description: "Comprehends simple instructions", grade: "A" },
            { skill: "Speaking", description: "Expresses ideas clearly", grade: "A" },
            { skill: "Reading", description: "Reads with understanding", grade: "A" },
            { skill: "Writing", description: "Writes legibly", grade: "B" },
          ],
        },
        {
          title: "Physical Development",
          grades: [
            { skill: "Gross Motor Skills", description: "Coordination and balance", grade: "A" },
            { skill: "Fine Motor Skills", description: "Hand-eye coordination", grade: "A" },
          ],
        },
        {
          title: "Socio-Emotional Development",
          grades: [
            { skill: "Self-Regulation", description: "Manages emotions", grade: "A" },
            { skill: "Social Skills", description: "Cooperates with peers", grade: "A" },
          ],
        },
        {
          title: "Cognitive Development",
          grades: [
            { skill: "Problem Solving", description: "Solves age-appropriate tasks", grade: "A" },
            { skill: "Mathematical Thinking", description: "Counts and recognizes numbers", grade: "B" },
          ],
        },
      ],
      2: [
        {
          title: "Language Development",
          grades: [
            { skill: "Listening", description: "Follows multi-step directions", grade: "A" },
            { skill: "Speaking", description: "Narrates experiences clearly", grade: "A" },
            { skill: "Reading", description: "Reads simple sentences", grade: "A" },
            { skill: "Writing", description: "Writes simple words", grade: "A" },
          ],
        },
        {
          title: "Physical Development",
          grades: [
            { skill: "Gross Motor Skills", description: "Runs and jumps with confidence", grade: "A" },
            { skill: "Fine Motor Skills", description: "Writes and cuts with precision", grade: "A" },
          ],
        },
        {
          title: "Socio-Emotional Development",
          grades: [
            { skill: "Self-Regulation", description: "Controls impulses well", grade: "A" },
            { skill: "Social Skills", description: "Resolves conflicts peacefully", grade: "A" },
          ],
        },
        {
          title: "Cognitive Development",
          grades: [
            { skill: "Problem Solving", description: "Applies logic to new situations", grade: "A" },
            { skill: "Mathematical Thinking", description: "Performs simple addition", grade: "A" },
          ],
        },
      ],
      3: [
        {
          title: "Language Development",
          grades: [
            { skill: "Listening", description: "Understands complex instructions", grade: "A" },
            { skill: "Speaking", description: "Communicates fluently", grade: "A" },
            { skill: "Reading", description: "Reads with fluency and comprehension", grade: "A" },
            { skill: "Writing", description: "Writes sentences independently", grade: "A" },
          ],
        },
        {
          title: "Physical Development",
          grades: [
            { skill: "Gross Motor Skills", description: "Demonstrates excellent coordination", grade: "A" },
            { skill: "Fine Motor Skills", description: "Writes neatly and accurately", grade: "A" },
          ],
        },
        {
          title: "Socio-Emotional Development",
          grades: [
            { skill: "Self-Regulation", description: "Exhibits strong emotional control", grade: "A" },
            { skill: "Social Skills", description: "Leads group activities positively", grade: "A" },
          ],
        },
        {
          title: "Cognitive Development",
          grades: [
            { skill: "Problem Solving", description: "Solves problems independently", grade: "A" },
            { skill: "Mathematical Thinking", description: "Understands basic operations", grade: "A" },
          ],
        },
      ],
    },
    remarks: {
      1: "Maria Margarett is a bright and attentive student. She consistently performs well across all areas.",
      2: "Excellent progress this quarter. Maria Margarett shows strong skills in language and social development.",
      3: "Outstanding performance throughout the year. Maria Margarett is well-prepared for the next level.",
    },
  },
  "GCA-S02": {
    student: {
      lastName: "Dela Cruz",
      firstName: "Juan Carlos",
      learnerReferenceNumber: "4023-5678-9012",
      studentId: "GCA-S02",
    },
    attendance: {
      totalDays: 120,
      absences: 5,
    },
    developments: {
      1: [
        {
          title: "Language Development",
          grades: [
            { skill: "Listening", description: "Comprehends simple instructions", grade: "A" },
            { skill: "Speaking", description: "Expresses ideas clearly", grade: "B" },
            { skill: "Reading", description: "Reads with understanding", grade: "A" },
            { skill: "Writing", description: "Writes legibly", grade: "B" },
          ],
        },
        {
          title: "Physical Development",
          grades: [
            { skill: "Gross Motor Skills", description: "Coordination and balance", grade: "A" },
            { skill: "Fine Motor Skills", description: "Hand-eye coordination", grade: "C" },
          ],
        },
        {
          title: "Socio-Emotional Development",
          grades: [
            { skill: "Self-Regulation", description: "Manages emotions", grade: "A" },
            { skill: "Social Skills", description: "Cooperates with peers", grade: "B" },
          ],
        },
        {
          title: "Cognitive Development",
          grades: [
            { skill: "Problem Solving", description: "Solves age-appropriate tasks", grade: "B" },
            { skill: "Mathematical Thinking", description: "Counts and recognizes numbers", grade: "C" },
          ],
        },
      ],
      2: [
        {
          title: "Language Development",
          grades: [
            { skill: "Listening", description: "Follows multi-step directions", grade: "A" },
            { skill: "Speaking", description: "Narrates experiences clearly", grade: "A" },
            { skill: "Reading", description: "Reads simple sentences", grade: "B" },
            { skill: "Writing", description: "Writes simple words", grade: "B" },
          ],
        },
        {
          title: "Physical Development",
          grades: [
            { skill: "Gross Motor Skills", description: "Runs and jumps with confidence", grade: "A" },
            { skill: "Fine Motor Skills", description: "Writes and cuts with precision", grade: "A" },
          ],
        },
        {
          title: "Socio-Emotional Development",
          grades: [
            { skill: "Self-Regulation", description: "Controls impulses well", grade: "B" },
            { skill: "Social Skills", description: "Resolves conflicts peacefully", grade: "A" },
          ],
        },
        {
          title: "Cognitive Development",
          grades: [
            { skill: "Problem Solving", description: "Applies logic to new situations", grade: "A" },
            { skill: "Mathematical Thinking", description: "Performs simple addition", grade: "B" },
          ],
        },
      ],
      3: [
        {
          title: "Language Development",
          grades: [
            { skill: "Listening", description: "Understands complex instructions", grade: "A" },
            { skill: "Speaking", description: "Communicates fluently", grade: "A" },
            { skill: "Reading", description: "Reads with fluency and comprehension", grade: "A" },
            { skill: "Writing", description: "Writes sentences independently", grade: "B" },
          ],
        },
        {
          title: "Physical Development",
          grades: [
            { skill: "Gross Motor Skills", description: "Demonstrates excellent coordination", grade: "A" },
            { skill: "Fine Motor Skills", description: "Writes neatly and accurately", grade: "A" },
          ],
        },
        {
          title: "Socio-Emotional Development",
          grades: [
            { skill: "Self-Regulation", description: "Exhibits strong emotional control", grade: "A" },
            { skill: "Social Skills", description: "Leads group activities positively", grade: "B" },
          ],
        },
        {
          title: "Cognitive Development",
          grades: [
            { skill: "Problem Solving", description: "Solves problems independently", grade: "A" },
            { skill: "Mathematical Thinking", description: "Understands basic operations", grade: "A" },
          ],
        },
      ],
    },
    remarks: {
      1: "Juan Carlos has shown great improvement this quarter. Keep up the good work!",
      2: "Juan Carlos continues to excel and demonstrates a positive attitude toward learning.",
      3: "Excellent performance throughout the year. Juan Carlos is well-prepared for the next level.",
    },
  },
};

const Grades = () => {
  const { studentId } = useParams();
  const [selectedQuarter, setSelectedQuarter] = useState(1);
  const [selectedDevelopment, setSelectedDevelopment] = useState(null);
  const [loading] = useState(false);
  const [error] = useState("");

  const data = ALL_STUDENTS[studentId] || ALL_STUDENTS["GCA-S01"];
  const student = data.student;
  const attendance = data.attendance;
  const gradesData = data.developments[selectedQuarter] || [];
  const remarks = data.remarks[selectedQuarter] || "";

  const handleGradesClick = (development) => {
    setSelectedDevelopment(development);
  };

  const handleCloseModal = () => {
    setSelectedDevelopment(null);
  };

  if (loading) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-3 bg-black font-[Poppins]">
        <Loader2 size={32} className="animate-spin text-swamp-green" />
        <p className="text-sm text-gray-400">
          Loading Grades
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
        <p className="text-sm text-red-400">
          {error}
        </p>
      </div>
    );
  }

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
