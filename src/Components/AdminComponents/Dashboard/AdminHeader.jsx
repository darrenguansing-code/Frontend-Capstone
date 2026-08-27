
const AdminHeader = ({ schoolYear }) => {

  return (
    <header className="flex items-center justify-between rounded-2xl border border-gray-200 bg-[#f5f6ff] px-5 py-5 shadow-[0_2px_4px_rgba(0,0,0,0.18)]">
      <h1 className="text-sm font-[Poppins] text-gray-700 lg:text-base xl:text-lg">
        Dashboard
      </h1>

      <p className="text-xs font-[PoppinsBold] px-4 text-gray-600 lg:text-sm xl:text-base">
        S.Y {schoolYear}
      </p>
    </header>
  );
};

export default AdminHeader;