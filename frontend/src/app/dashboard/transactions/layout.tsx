import type { Metadata } from "next";
import ContainerDashboard from "../../components/ui/ContainerDashboard"
import Nav from "./TransactionComponents/Nav";

export const metadata: Metadata = {
    title: "Resourcify | Dashboard Transactions",
    description: "Empowering Financial Efficiency and Employee Satisfaction",
  };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ContainerDashboard>
        <Nav />
          {children}
    </ContainerDashboard>
  );
}
