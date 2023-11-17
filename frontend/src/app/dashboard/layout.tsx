import type { Metadata } from "next";
import ContainerDashboard from "../components/ui/ContainerDashboard";
import DashboardHeader from "../components/headers/DashboardHeader";
import AdminSidebar from "../components/sidebar/AdminSidebar";
import SidebarAdminMobile from "../components/sidebar/SidebarMobileAdmin";

export const metadata: Metadata = {
  title: "Resourcify | Admin Dashboard",
  description: "Empowering Financial Efficiency and Employee Satisfaction",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ContainerDashboard>
      <div className="grid  sm:grid-cols-[auto_1fr] grid-cols-1">
        <SidebarAdminMobile />
        <AdminSidebar />
        <div>
          <DashboardHeader />
          {children}
        </div>
      </div>
    </ContainerDashboard>
  );
}
