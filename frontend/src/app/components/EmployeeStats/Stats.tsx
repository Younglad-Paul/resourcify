import {
  ArrowDownToLine,
  CircleDollarSign,
  Eye,
  MoreVertical,
  Plus
} from "lucide-react";

const Stats = () => {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,_minmax(12rem,_1fr))] gap-x-32 gap-y-3">
      <div className='w-[20rem] px-4 py-3 rounded-lg border bg-[#00205B] '>
        <div className="flex items-start justify-between">
          <div className="">
            <CircleDollarSign className="w-9 h-9 text-gray-100" />
            <h3 className="mt-4 capitalize text-gray-100 font-medium">
              Balance
            </h3>
          </div>

          <button>
            <MoreVertical className=" w-5 h-5 text-gray-100" />
          </button>
        </div>

        <div className="mt-5 flex items-center gap-x-6">
          <h4 className="text-gray-100 text-[1rem] font-semibold">N1,234</h4>
          <span className="text-gray-100 text-[1rem] cursor-pointer font-semibold">
            <Eye />
          </span>
        </div>
      </div>
      <div className='w-[20rem] px-4 py-3 rounded-lg border bg-[#EAF9E8]'>
        <div className="flex items-start justify-between">
          <div className="">
            <div className="w-10 h-10 rounded-full grid place-items-center bg-[#24BB0D]">
              <ArrowDownToLine className="text-white w-4 h-4" />
            </div>

            <h3 className="mt-4 capitalize text-gray-900 font-medium">
              Total Credited
            </h3>
          </div>

          <button>
            <MoreVertical className=" w-5 h-5 text-gray-900" />
          </button>
        </div>

        <div className="mt-5">
          <h4 className="text-gray-900 text-[1rem] font-semibold">1,234</h4>
        </div>
      </div>

      <div className='w-[10rem] h-[3rem] px-4 py-3 rounded-lg border bg-[#00205B] cursor-pointer '>
        <div className="flex items-start justify-between">
          <div className="flex justify-center content-center">
            <Plus className="w-6 h-6 text-gray-100" />
            <h3 className="capitalize text-gray-100 font-medium">
              Add Card
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Stats;
