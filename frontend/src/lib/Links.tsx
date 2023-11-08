import { ArrowRightLeft, Goal, LayoutPanelLeft, Store } from "lucide-react";

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

export const dashboardLinks = [
  {
    icon: <LayoutPanelLeft className="w-5 h-5" />,
    path: "/dashboards",
    label: "dashboard",
  },
  {
    icon: <Store className="w-5 h-5" />,
    path: "/dashboards/bankAccounts",
    label: "bank accounts",
  },
  {
    icon: <ArrowRightLeft className="w-5 h-5" />,
    path: "/dashboards/transactions",
    label: "transactions",
  },
  {
    icon: <Goal className="w-5 h-5" />,
    path: "/dashboards/goals",
    label: "set goals",
  },
];
