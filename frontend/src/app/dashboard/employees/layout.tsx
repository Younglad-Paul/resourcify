import type { Metadata } from "next";
import ContainerDashboard from "../../components/ui/ContainerDashboard";
import Employees from "./Nav1/page"

export const metadata: Metadata = {
  title: "Resourcify | Admin Dashboard",
  description: "Empowering Financial Efficiency and Employee Satisfaction",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ContainerDashboard>
        <Employees />
          {children}
    </ContainerDashboard>
  );
}
