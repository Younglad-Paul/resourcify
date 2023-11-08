import type { Metadata } from "next";
import DashboardSidebar from "../components/sidebar/DashboardSidebar";
import DashboardHeader from "../components/headers/DashboardHeader";
import ContainerDashboard from "../components/ui/ContainerDashboard";

export const metadata: Metadata = {
  title: "Resourcify | Dashboard",
  description: "Empowering Financial Efficiency and Employee Satisfaction",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body>
        <ContainerDashboard>
          <div className="grid  grid-cols-[auto_1fr]">
            <DashboardSidebar />

            <main>
              <DashboardHeader />
              {children}
            </main>
          </div>
        </ContainerDashboard>
      </body>
    </html>
  );
}
