type Questions = {
  head: string;
  answer: string;
};

type StatsInfo = {
  title: string;
  amount: string;
  icon: SVGProps<SVGSVGElement>;
  statusPercent: number;
};

type Transactions = {
  transactionID: string;
  amount: number;
  name: string;
  status: "approved" | "processing" | "declined";
  transactions: number;
  date: string;
};
