'use client'
import { useState, useEffect } from 'react';
import { Request1, AdminColumns } from "@/app/components/employeeTable/columns";
import { AdminDataTable } from "@/app/components/employeeTable/AdminDataTable";
import { X } from "lucide-react";

const Page = () => {
  const [data, setData] = useState<Request1[]>([]);

  const fetchData = async () => {
    const rawData = [
        {
          title: "School Funding",
          date: "12/11/2023",
          amount: 30000,
          status: "Approved" as const,
        },
        // {
        //     title: "School Funding",
        //   date: "12/12/2023",
        //   amount: 30000,
        //   status: "Approved",
        // },
        // {
        //     title: "School Funding",
        //   date: "12/12/2023",
        //   amount: 30000,
        //   status: "Approved",
        // },
        // {
        //     title: "School Funding",
        //   date: "12/12/2023",
        //   amount: 30000,
        //   status: "Approved",
        // },
        // {
        //     title: "School Funding",
        //   date: "12/12/2023",
        //   amount: 30000,
        //   status: "Approved",
        // },
        // {
        //     title: "School Funding",
        //   date: "12/12/2023",
        //   amount: 30000,
        //   status: "Approved",
        // },
        // {
        //     title: "School Funding",
        //   date: "12/12/2023",
        //   amount: 30000,
        //   status: "Approved",
        // },
        // {
        //     title: "School Funding",
        //   date: "12/12/2023",
        //   amount: 30000,
        //   status: "Approved",
        // },
        // {
        //     title: "School Funding",
        //   date: "12/12/2023",
        //   amount: 30000,
        //   status: "Approved",
        // },
        // {
        //     title: "School Funding",
        //   date: "12/12/2023",
        //   amount: 30000,
        //   status: "Approved",
        // },
        // {
        //     title: "School Funding",
        //   date: "12/12/2023",
        //   amount: 30000,
        //   status: "Approved",
        // },
        // {
        //     title: "School Funding",
        //   date: "12/12/2023",
        //   amount: 30000,
        //   status: "Approved",
        // },
        // {
        //     title: "School Funding",
        //   date: "12/12/2023",
        //   amount: 30000,
        //   status: "Approved",
        // },
        // {
        //     title: "School Funding",
        //   date: "12/12/2023",
        //   amount: 30000,
        //   status: "Approved",
        // },
        // {
        //     title: "School Funding",
        //   date: "12/12/2023",
        //   amount: 30000,
        //   status: "Approved",
        // },
        // {
        //     title: "School Funding",
        //   date: "12/12/2023",
        //   amount: 30000,
        //   status: "Pending",
        // },
        // {
        //     title: "School Funding",
        //   date: "12/12/2023",
        //   amount: 30000,
        //   status: "Declined",
        // },
      ];
    
    const dataWithNumber = rawData.map((item, index) => ({
      ...item,
      number: index + 1,
    }));
    setData(dataWithNumber);
  };

  const handleDelete = (index: number) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className=''>
      <AdminDataTable
        columns={[
          ...AdminColumns,
          {
            header: 'Action',
            cell: ({ row }) => (
                <div className="cursor-pointer bg-red-500 rounded-full w-6 text-white">
                {
                  <X onClick={() => handleDelete(row.index)} />
                }
              </div>
            ),
          },
        ]}
        data={data}
      />
    </div>
  );
};

export default Page;
