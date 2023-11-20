import {
  ArrowRightLeft,
  Goal,
  LayoutPanelLeft,
  Store,
  Users2,
} from "lucide-react";

export const navLinks = [
  {
    path: "#home",
    label: "Home",
  },
  {
    path: "#features",
    label: "Features",
  },
  {
    path: "#faq",
    label: "Faq",
  },
] as const;

export const employeeLinks = [
  {
    icon: <LayoutPanelLeft className="w-5 h-5" />,
    path: "/employeeDashboard",
    label: "dashboard",
  },
  {
    icon: <Store className="w-5 h-5" />,
    path: "/dashboards/bankAccounts",
    label: "bank accounts",
  },
  {
    icon: <ArrowRightLeft className="w-5 h-5" />,
    path: "/employeeDashboard/transactions",
    label: "transactions",
  },
];
export const adminLinks = [
  {
    icon: <LayoutPanelLeft className="w-5 h-5" />,
    path: "/dashboard",
    label: "dashboard",
  },
  {
    icon: <Store className="w-5 h-5" />,
    path: "/dashboard/bankAccounts",
    label: "bank accounts",
  },
  {
    icon: <ArrowRightLeft className="w-5 h-5" />,
    path: "/dashboard/transactions",
    label: "transactions",
  },

  {
    icon: <Users2 className="w-5 h-5" />,
    path: "/dashboard/Employees",
    label: "employees",
  },
];

export const transHisNavLinks = [
  {
    path: "/dashboard/transactions",
    label: "History",
  },
  {
    path: "/dashboard/transactions/adminForms",
    label: "Wallet Funding",
  },
  {
    path: "",
    label: "Wallet Withdrawal",
  },

  {
    path: "",
    label: "Reimbursement Dispersal",
  },
];

export const employeeNavLinks = [
  {
    path: "/dashboard/Employees",
    label: "Employees",
  },
  {
    path: "/dashboard/Employees/AdminEmployeeRequest",
    label: "Requests",
  },
  {
    path: "/dashboard/Employees/AdminReimbursement",
    label: "Reimbursement",
  },
];
