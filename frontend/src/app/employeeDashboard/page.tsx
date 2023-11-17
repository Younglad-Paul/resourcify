import Stats from "../components/EmployeeStats/Stats";
import Categories from "../components/categories/Categories";
import LineChart from "../components/charts/LineChart";
import Table from "../components/employeeTable/Table";

const page = () => {
  return (
    <section className="bg-primary-foreground py-4 px-6 min-h-[calc(100vh_-5rem)]">
      <Stats />

      <div className="mt-14">
        <LineChart />
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
