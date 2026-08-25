import React from "react";

const TeacherInformation = ({ teacher }) => {
  const teacherDetails = [
    {
      label: "Full Name",
      value: teacher.fullName,
    },
    {
      label: "Teacher ID",
      value: teacher.teacherId,
    },
    {
      label: "Gender",
      value: teacher.gender,
    },
    {
      label: "Birthdate",
      value: teacher.birthdate,
    },
    {
      label: "Civil Status",
      value: teacher.civilStatus,
    },
  ];

  return (
    <div className="w-full rounded-2xl bg-linear-to-r from-[#0c2423] to-[#279257] px-4 py-4 text-white shadow-md font-[Poppins] sm:px-6 sm:py-5">
      <div className="flex flex-col gap-5">
        <h2 className="text-xs font-bold uppercase text-white sm:text-sm">
          TEACHER INFORMATION
        </h2>

        <div className="grid grid-cols-1 gap-4 py-5 sm:grid-cols-[1.4fr_1fr_1fr_1fr_1fr] sm:gap-x-6">
          {teacherDetails.map((detail) => (
            <div
              key={detail.label}
              className="flex min-w-0 flex-col gap-1"
            >
              <span className="text-2xs font-medium">
                {detail.label}
              </span>

              <span className="wrap-break-word sm:whitespace-nowrap text-xs font-bold sm:text-sm">
                {detail.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeacherInformation;