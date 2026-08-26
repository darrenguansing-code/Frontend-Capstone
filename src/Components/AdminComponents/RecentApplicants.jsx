import { ClipboardList } from "lucide-react";

const TABLE_HEADERS = [
  "APPLICATE ID",
  "LAST NAME",
  "FIRST NAME",
  "GENDER",
  "GRADE LEVEL",
  "DATE APPLIED",
];

const RecentApplicants = ({ applicants = [] }) => {
  return (
    <div className="flex flex-1 flex-col">
      <h2 className="flex items-center gap-2 py-3 text-sm font-[Poppins] text-swamp-green lg:text-lg">
        <ClipboardList size={18} />
        Recent Applicants
      </h2>

      <div className="flex flex-1 flex-col overflow-hidden rounded-2xl border border-gray-200 bg-bone shadow-[0_2px_4px_rgba(0,0,0,0.18)]">
        <div className="flex flex-1 flex-col overflow-y-auto">
          <table className="w-full">

            <thead>
              <tr className="border-b border-gray-200 text-left">
                {TABLE_HEADERS.map((header) => (
                  <th
                    key={header}
                    className="px-7 py-5 text-2xs font-bold text-swamp-green lg:text-xs"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {applicants.map((applicant) => (
                <tr
                  key={applicant.id}
                  className="border-t border-gray-200 text-[9px] text-gray-600 lg:text-xs"
                >
                  <td className="px-7 py-3 lg:py-4">
                    {applicant.id}
                  </td>

                  <td className="px-7 py-3 lg:py-4">
                    {applicant.lastName}
                  </td>

                  <td className="px-7 py-3 lg:py-4">
                    {applicant.firstName}
                  </td>

                  <td className="px-7 py-3 lg:py-4">
                    {applicant.gender}
                  </td>

                  <td className="px-7 py-3 lg:py-4">
                    {applicant.gradeLevel}
                  </td>

                  <td className="px-7 py-3 lg:py-4">
                    {applicant.dateApplied}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RecentApplicants;
