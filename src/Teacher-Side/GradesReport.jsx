import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {Loader2} from "lucide-react";
import GradesHeader from "../Components/Parents-Side Components/GradesReport/GradesHeader";
import QuarterSelector from "../Components/Parents-Side Components/GradesReport/QuarterSelector";
import TeacherRemarks from "../Components/Parents-Side Components/GradesReport/TeacherRemarks";
import DevelopmentCards from "../Components/Parents-Side Components/GradesReport/DevelopmentCards";

const QUARTERS = [
  {
    value: 1,
    label: "Quarter 1",
  },
  {
    value: 2,
    label: "Quarter 2",
  },
  {
    value: 3,
    label: "Quarter 3",
  },
];

const DEVELOPMENTS = [
  {
    id: 1,
    name: "Physical Development",
    grades: [
      {
        skill: "Gross Motor Skills",
        description:
          "Hopping, Skipping, Catching, Jumping, Balance",
        grade: "A",
      },
      {
        skill: "Fine Motor Skills",
        description:
          "Tying Shoes, Pegs, Beads, Crayons, Scissors",
        grade: "A",
      },
      {
        skill: "Drawing Recognize Pictures",
        grade: "B",
      },
      {
        skill: "Coloring with Lines",
        grade: "A",
      },
      {
        skill: "Printing Own Name",
        grade: "B",
      },
    ],
  },
  {
    id: 2,
    name: "Socio-Emotional Development",
    grades: [
      {
        skill: "Social Interaction",
        grade: "A",
      },
      {
        skill: "Emotional Expression",
        grade: "B",
      },
    ],
  },
  {
    id: 3,
    name: "Cognitive Development",
    grades: [
      {
        skill: "Problem Solving",
        grade: "A",
      },
      {
        skill: "Memory Skills",
        grade: "B",
      },
    ],
  },
  {
    id: 4,
    name: "Spiritual",
    grades: [
      {
        skill: "Prayer",
        grade: "A",
      },
      {
        skill: "Bible Knowledge",
        grade: "A",
      },
    ],
  },
];

const ALL_STUDENTS = [
  {
    schoolId: "GCA-2026-001",
    lrn: "1204567891011",
    name: "Rosaline Romasanta",
    gender: "Female",
    gradeLevel: "Nursery",
  },
  {
    schoolId: "GCA-2026-002",
    lrn: "1204567891012",
    name: "Angela Cruz",
    gender: "Female",
    gradeLevel: "Nursery",
  },
  {
    schoolId: "GCA-2026-003",
    lrn: "1204567891013",
    name: "Miguel Santos",
    gender: "Male",
    gradeLevel: "Nursery",
  },
  {
    schoolId: "GCA-2026-004",
    lrn: "1345698721234",
    name: "Jake Macasinag",
    gender: "Male",
    gradeLevel: "Nursery",
  },
  {
    schoolId: "GCA-2026-005",
    lrn: "1345698721235",
    name: "Bella Reyes",
    gender: "Female",
    gradeLevel: "Nursery",
  },
];

const TEACHER_REMARK = "";

const GradesReport = () => {
  const navigate = useNavigate();
  const { schoolId } = useParams();
  const [student] = useState(
    ALL_STUDENTS.find((s) => s.schoolId === schoolId) ||
      ALL_STUDENTS[0]
  );

  const [selectedQuarter, setSelectedQuarter] = useState(1);
  const [remark, setRemark] = useState(TEACHER_REMARK);
  const [developments, setDevelopments] = useState(DEVELOPMENTS);

  // Backend-ready state
  const [loading] = useState(false);
  const [error, setError] = useState("");

  // Ready for backend
  useEffect(() => {
    const loadGrades = async () => {
      try {
        // Temporary data is still being used.
        // Replace this with your actual API later.

        /*
        const response = await axios.get(
          `http://localhost:5000/teacher/grades/${schoolId}`
        );

        setStudent(response.data.student);
        setSelectedQuarter(response.data.selectedQuarter);
        setRemark(response.data.remark);
        setDevelopments(response.data.developments);
        */

        console.log("Grades page ready for backend:", schoolId);
      } catch (error) {
        console.error("Failed to load grades:", error);
        setError("Unable to load grades.");
      }
    };

    loadGrades();
  }, [schoolId]);

  const handleBack = () => {
    navigate(-1);
  };

  const handleQuarterChange = (quarter) => {
    setSelectedQuarter(quarter);
  };

  const handleSaveQuarter = async () => {
    try {
      /*
      await axios.put(
        `http://localhost:5000/teacher/grades/${schoolId}/quarter`,
        {
          quarter: selectedQuarter,
        }
      );
      */

      console.log("Saved quarter:", selectedQuarter);
    } catch (error) {
      console.error("Failed to save quarter:", error);
    }
  };

  const handleSaveRemark = async (updatedRemark) => {
    try {
      setRemark(updatedRemark);

      /*
      await axios.put(
        `http://localhost:5000/teacher/grades/${schoolId}/remark`,
        {
          quarter: selectedQuarter,
          remark: updatedRemark,
        }
      );
      */

      console.log("Updated remark:", updatedRemark);
    } catch (error) {
      console.error("Failed to save remark:", error);
    }
  };

  const handleGradeChange = async (
    devId,
    skillIndex,
    newGrade
  ) => {
    // Update temporary data/UI
    setDevelopments((prev) =>
      prev.map((dev) =>
        dev.id === devId
          ? {
              ...dev,
              grades: dev.grades.map((skill, i) =>
                i === skillIndex
                  ? {
                      ...skill,
                      grade: newGrade,
                    }
                  : skill
              ),
            }
          : dev
      )
    );

    try {
      /*
      await axios.put(
        `http://localhost:5000/teacher/grades/${schoolId}`,
        {
          quarter: selectedQuarter,
          developmentId: devId,
          skillIndex,
          grade: newGrade,
        }
      );
      */

      console.log("Updated grade:", newGrade);
    } catch (error) {
      console.error("Failed to save grade:", error);
    }
  };

  // LOADING
  if (loading) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-3 bg-black font-[Poppins]">
        <Loader2 size={32} className="animate-spin text-swamp-green" />
        <p className="text-sm text-gray-400">
          Loading Grades Report
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
    <div className="min-h-screen cursor-default bg-[#ebe9e4] px-3 py-4 font-[Poppins] sm:px-5 sm:py-6">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 sm:gap-6">

        <GradesHeader
          student={student}
          onBack={handleBack}
        />

        <QuarterSelector
          quarters={QUARTERS}
          selectedQuarter={selectedQuarter}
          onQuarterChange={handleQuarterChange}
          onSave={handleSaveQuarter}
        />

        <TeacherRemarks
          remark={remark}
          onSave={handleSaveRemark}
        />

        <DevelopmentCards
          developments={developments}
          onGradeChange={handleGradeChange}
        />

      </div>
    </div>
  );
};

export default GradesReport;