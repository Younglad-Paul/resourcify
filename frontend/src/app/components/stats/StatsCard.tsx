import {
  ArrowDownToLine,
  ArrowUpToLine,
  ArrowUpFromLine,
  CircleDollarSign,
  MoreVertical,
  MoveDown,
} from "lucide-react";

const Stats = [
  {
    title: "Spend",
    amount: "11,432.00",
    icon: <ArrowDownToLine />,
    statusPercent: "12.7",
  },
  {
    title: "income",
    amount: "11,432.00",
    icon: <ArrowUpToLine />,
    statusPercent: "12.7",
  },
  {
    title: "Spend",
    amount: "11,432.00",
    icon: <ArrowUpToLine />,
    statusPercent: "12.7",
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

type Props = {
  stats: StatsInfo;
};

const StatsCard = ({ stats }: Props) => {
  const bgColor =
    stats.title === "spend"
      ? "rgba(223, 28, 28, 0.19)"
      : stats.title === "income"
      ? "#EAF9E8"
      : "rgba(223, 28, 28, 0.19)";
  const iconColor =
    stats.title === "spend"
      ? "  #DF1C1C"
      : stats.title === "income"
      ? " #24BB0D"
      : "#DF1C1C";
  const border =
    stats.title === "spend"
      ? "  #DF1C1C30"
      : stats.title === "income"
      ? " #24BB0D30"
      : "#DF1C1C30";

  return (
    <div
      style={{ background: bgColor, borderColor: border }}
      className={`px-4 py-3 rounded-lg border`}
    >
      <div className="flex items-start justify-between">
        <div className="">
          <span
            style={{ background: iconColor }}
            className="text-white grid place-items-center w-9 h-9  rounded-full"
          >
            {stats.icon}
          </span>
          <h3 className="mt-4 capitalize text-gray-800 font-medium">
            {stats.title}
          </h3>
        </div>

        <button>
          <MoreVertical className=" w-5 h-5" />
        </button>
      </div>

      <div className="flex justify-between place-items-center mt-5">
        <h4 className="text-gray-800 text-[1rem] font-semibold">
          N{stats.amount}
        </h4>

        <div className="flex items-center gap-x-2">
          <span className="grid place-items-center w-5 h-5 bg-[#DF1C1C6E] rounded-full">
            <MoveDown className="w-3 h-3 text-[#DF1C1C]" />
          </span>
          <span className="text-sm">{stats.statusPercent}%</span>
        </div>
      </div>
    </div>
  );
};
export default StatsCard;
