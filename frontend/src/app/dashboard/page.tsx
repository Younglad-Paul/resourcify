import { Metadata } from "next/types";
import Stats from "../components/stats/Stats";
import BarChart from "../components/charts/BarChart";
import Table from "../components/employeeTable/Table";
import Categories from "../components/categories/Categories";

export const metadata: Metadata = {
  title: "Resourcify | Admin Dashboard",
  description: "Empowering Financial Efficiency and Employee Satisfaction",
};

const page = () => {
  return (
    <section className="bg-primary-foreground py-4 px-6 min-h-[calc(100vh_-5rem)]">
      <Stats />
      <div className="mt-14">
        <BarChart />
      </div>
      <div className="mt-11 grid xl:grid-cols-[1fr,auto] grid-cols-1 gap-x-8 gap-y-4 justify-between items-start">
        <div>
          <Table />
        </div>
        <div className="bg-white rounded-lg">
          <Categories />
        </div>
      </div>
    </section>
  );
};
export default page;
