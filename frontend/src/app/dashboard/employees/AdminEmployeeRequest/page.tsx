'use client'
import { useState, useEffect } from 'react';
import { Request3, AdminEmployeeRequestData } from "@/app/components/employeeTable/columns";
import { AdminDataTable } from "@/app/components/employeeTable/AdminDataTable";
import { X } from "lucide-react";

const Page = () => {
  const [data, setData] = useState<Request3[]>([]);

  const fetchData = async () => {
    const rawData = [
        {
          title: "School Funding",
          description: "Funding",
          date: "19/11/2023",
          amount: "N23,000",
          approve: "Approved" as const,
        },
        // {
        //     title: "School Funding",
        //     description: "Funding",
        //     date: "19/11/2023",
        //     amount: "N23,000",
        //     approve: "Approved",
        //   },
        //   {
        //   title: "School Funding",
        //   description: "Funding",
        //   date: "19/11/2023",
        //   amount: "N23,000",
        //   approve: "Declined",
        // },
        // {
        //   title: "School Funding",
        //   description: "Funding",
        //   date: "19/11/2023",
        //   amount: "N23,000",
        //   approve: "Approved",
        // },
        // {
        //     title: "School Funding",
        //     description: "Funding",
        //     date: "19/11/2023",
        //     amount: "N23,000",
        //     approve: "Approved",
        //   },
        //   {
        //     title: "School Funding",
        //     description: "Funding",
        //     date: "19/11/2023",
        //     amount: "N23,000",
        //     approve: "Pending",
        //   },
        //   {
        //     title: "School Funding",
        //     description: "Funding",
        //     date: "19/11/2023",
        //     amount: "N23,000",
        //     approve: "Approved",
        //   },
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
          ...AdminEmployeeRequestData,
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
