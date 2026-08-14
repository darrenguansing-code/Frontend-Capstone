const StudentTable = ({ students }) => {
  return (
    <div className="rounded-3xl border border-swamp-green/10 bg-white p-4 shadow-sm md:p-6">
      <div className="flex flex-col gap-2">
        <div className="no-scrollbar overflow-x-auto">
          <div className="min-w-175">
            <div className="grid grid-cols-[1.2fr_1.2fr_1.8fr_1fr_1.3fr_0.5fr] gap-6 rounded-xl bg-[#e4e6f0] px-6 py-3 text-left text-xs font-[PoppinsBold] uppercase tracking-wide text-swamp-green">
              <span>School ID</span>
              <span>LRN</span>
              <span>Full Name</span>
              <span>Gender</span>
              <span>Birthdate</span>
              <span className="text-center">Age</span>
            </div>

            <div className="flex flex-col gap-2">
              {students.map((student) => (
                <div
                  key={student.id}
                  className="grid grid-cols-[1.2fr_1.2fr_1.8fr_1fr_1.3fr_0.5fr] gap-6 rounded-xl bg-bone px-6 py-4 text-left text-xs text-slate-600"
                >
                  <span>{student.schoolId}</span>
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
      </div>
    </div>
  );
}

export default StudentTable;
