import { MessageSquareText } from "lucide-react";

function Remarks ({ remarks }) {
  return (
    <div className="flex flex-col gap-4 rounded-3xl border border-swamp-green/10 bg-white p-4 shadow-sm font-[Poppins] md:p-6">
      <h2 className="flex items-center gap-2 text-lg font-[PoppinsBold] text-swamp-green md:text-2xl">
        <MessageSquareText className="size-5 md:size-6" />
        Teacher Remarks
      </h2>

      <div className="rounded-xl border border-gray-200 bg-gray-50 p-4 md:p-5">
        <p className="text-sm leading-7 text-gray-600">
          {remarks}
        </p>
        <p className="mt-4 border-t border-gray-200 pt-3 text-sm font-[PoppinsBold] text-swamp-green">
          Thank you and God bless!
        </p>
      </div>
    </div>
  );
}

export default Remarks;
