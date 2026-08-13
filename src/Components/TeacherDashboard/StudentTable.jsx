
const StudentTable = ({ students }) => {
  return (
    <div className="rounded-3xl border border-swamp-green/10 bg-white p-4 shadow-sm md:p-6">
      <div className="flex flex-col gap-2">
        <div className="grid grid-cols-[0.5fr_1.5fr_2fr_1.2fr_1.2fr_0.5fr] gap-6 rounded-xl bg-[#e4e6f0] px-6 py-3 text-left text-xs font-[PoppinsBold] uppercase tracking-wide text-swamp-green">
          <span>No.</span>
          <span>LRN</span>
          <span>Full Name</span>
          <span>Gender</span>
          <span>Birthdate</span>
          <span className="text-center">Age</span>
        </div>

        <div className="flex flex-col gap-2">
          {students.map((student, index) => (
            <div
              key={student.id}
              className="grid grid-cols-[0.5fr_1.5fr_2fr_1.2fr_1.2fr_0.5fr] gap-6 rounded-xl bg-bone px-6 py-4 text-left text-sm text-slate-600"
            >
              <span>{index + 1}</span>
              <span>{student.lrn}</span>
              <span>{student.fullName}</span>
              <span>{student.gender}</span>
              <span>{student.birthdate}</span>
              <span className="text-center">{student.age}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default StudentTable;
