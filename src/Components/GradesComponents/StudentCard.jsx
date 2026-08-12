import DaysCard from "./DaysCard";
import AttendanceCard from "./AbsentCard";

const StudentCard = ({ lastName, firstName, learnerReferenceNumber, studentId, totalDays, absences }) => {
  return (
    <div className="flex w-full flex-col gap-3 font-[Poppins] rounded-3xl md:flex-row">
      
      {/* Student Information */}
      <div className="flex flex-1 items-center rounded-2xl bg-linear-to-r from-[#0d3029] to-[#419654] px-4 py-5 text-white shadow-md sm:px-6 sm:py-6">
        <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">

          {/* Student Name */}
          <div className="flex flex-col justify-center gap-1">
            <p className="text-2xs font-medium text-white/60">
              Enrolled Student/s
            </p>

            <h2 className="text-lg font-bold leading-tight md:text-xl">
              {lastName},
              <br />
              {firstName}
            </h2>
          </div>

          {/* Student Details */}
          <div className="grid grid-cols-2 items-center justify-center gap-4 md:grid-cols-1">
            <div className="flex flex-col gap-1">
              <p className="text-[9px] font-medium text-white/60">
                LEARNER REFERENCE NUMBER
              </p>

              <p className="text-xs font-bold">
                {learnerReferenceNumber}
              </p>
            </div>

            <div className="flex flex-col gap-1">
              <p className="text-[9px] font-medium text-white/60">
                STUDENT ID NUMBER
              </p>

              <p className="text-xs font-bold">
                {studentId}
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Attendance Information */}
      <div className="grid grid-cols-2 gap-3 md:flex">
        <DaysCard 
          totalDays={totalDays} 
        />

        <AttendanceCard 
          absences={absences} 
        />
      </div>

    </div>
  );
};

export default StudentCard;
