import {
  ArrowDownToLine,
  ArrowUpToLine,
  ArrowUpFromLine,
  CircleDollarSign,
  ArrowDownFromLine,
  MoreVertical,
  Eye,
} from "lucide-react";
import StatsCard from "./StatsCard";

const StatsInfo: StatsInfo[] = [
  {
    title: "spend",
    amount: "11,432.00",
    icon: <ArrowDownFromLine className="w-4 h-4" />,
    statusPercent: 12.7,
  },
  {
    title: "income",
    amount: "8,000",
    icon: <ArrowUpFromLine className="w-4 h-4" />,
    statusPercent: 12.7,
  },
  {
    title: "Total Debited",
    amount: "66.5",
    icon: <ArrowUpFromLine className="w-4 h-4" />,
    statusPercent: 12.7,
  },
];

const totalStats = [
  {
    title: "total debited",
    amount: "677",
    icon: <ArrowDownToLine />,
  },
  {
    title: "total credited",
    amount: "1,234",
    icon: <ArrowUpToLine />,
    statusPercent: "12.7",
  },
  {
    title: "transactions",
    amount: "1,434",
    icon: <CircleDollarSign />,
  },
];

const Stats = () => {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,_minmax(12rem,_1fr))] gap-x-4 gap-y-3">
      {StatsInfo.map((stats, i) => {
        return <StatsCard key={i} stats={stats} />;
      })}
      <div className={`px-4 py-3 rounded-lg border bg-[#EAF9E8]`}>
        <div className="flex items-start justify-between">
          <div className="">
            <span className="text-white grid bg-[#24BB0D] place-items-center w-9 h-9  rounded-full">
              <ArrowUpFromLine className="w-4 h-4" />
            </span>
            <h3 className="mt-4 capitalize text-gray-800 font-medium">
              Total Credited
            </h3>
          </div>

          <button>
            <MoreVertical className=" w-5 h-5" />
          </button>
        </div>

        <div className=" mt-5">
          <h4 className="text-gray-800 text-[1rem] font-semibold">1,234</h4>
        </div>
      </div>

      <div className={`px-4 py-3 rounded-lg border bg-[#00205B]`}>
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
          <h4 className="text-gray-100 text-[1rem] font-semibold">1,234</h4>
          <span className="text-gray-100 text-[1rem] cursor-pointer font-semibold">
            <Eye />
          </span>
        </div>
      </div>
    </div>
  );
};
export default Stats;
