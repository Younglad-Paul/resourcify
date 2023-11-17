import type { Metadata } from "next";
import ContainerDashboard from "../components/ui/ContainerDashboard";
import DashboardSidebar from "../components/sidebar/DashboardSidebar";
import DashboardHeader from "../components/headers/DashboardHeader";
import SidebarMobile from "../components/sidebar/sidebarMobile";

export const metadata: Metadata = {
  title: "Resourcify | Employee Dashboard",
  description: "Empowering Financial Efficiency and Employee Satisfaction",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ContainerDashboard>
      <div className="grid  sm:grid-cols-[auto_1fr] grid-cols-1">
        <SidebarMobile />
        <DashboardSidebar />
        <div>
          <DashboardHeader />
          {children}
        </div>
      </div>
    </ContainerDashboard>
  );
}
