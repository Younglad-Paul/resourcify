import { Request, columns } from "./columns";
import { DataTable } from "./dataTables";

async function getData(): Promise<Request[]> {
  // Fetch data from your API here.
  return [
    {
      number: 1,
      title: "School Funding",
      date: "12/11/2023",
      amount: 23000,
      status: "Pending",
    },
    {
      number: 2,
      title: "School Funding",
      date: "12/11/2023",
      amount: 23000,
      status: "Approved",
    },
    {
      number: 3,
      title: "School Funding",
      date: "12/11/2023",
      amount: 23000,
      status: "Approved",
    },
    {
      number: 4,
      title: "School Funding",
      date: "12/11/2023",
      amount: 23000,
      status: "Pending",
    },
    {
      number: 5,
      title: "School Funding",
      date: "12/11/2023",
      amount: 23000,
      status: "Declined",
    },
  ];
}

const Table = async () => {
  const data = await getData();
  return (
    <div>
      <DataTable columns={columns} data={data} />
    </div>
  );
};
export default Table;
