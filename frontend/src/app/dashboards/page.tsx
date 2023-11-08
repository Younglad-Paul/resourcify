import LineChart from "../components/charts/LineChart";
import Stats from "../components/stats/Stats";
import DataTable from "../components/table/dataTable";
import { columns } from "../components/table/columns";
import { payments } from "@/lib/data";
import Categories from "../components/categories/Categories";

const fakeUrl = "https://6549c069e182221f8d51d557.mockapi.io/transactions";

const page = () => {
  return (
    <section className="bg-primary-foreground py-4 px-7 min-h-[calc(100vh_-5rem)]">
      <Stats />
      {/* <div className="mt-10">
        <LineChart />
      </div> */}

      <div className="mt-11 grid xl:grid-cols-[1fr,auto] grid-cols-1 gap-x-8 gap-y-4 justify-between items-start">
        <DataTable data={payments} columns={columns} />
        <Categories />
      </div>
    </section>
  );
};
export default page;
