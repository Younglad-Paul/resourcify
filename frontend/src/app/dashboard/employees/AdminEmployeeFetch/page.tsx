'use client'
import { useState, useEffect } from 'react';
import { Request, AdminEmployeeDataColumns } from "@/app/components/employeeTable/columns";
import { AdminDataTable } from "@/app/components/employeeTable/AdminDataTable";
import { X } from "lucide-react";

const Page = () => {
  const [data, setData] = useState<Request[]>([]);

  const fetchData = async () => {
    const rawData = [
        {
          id: "1234",
          role: "Employee",
          lastLog: "Today",
          status: "Approved",
        },
        {
            id: "1234",
            role: "Employee",
            lastLog: "Today",
            status: "Approved",
          },
          {
            id: "1234",
            role: "Employee",
            lastLog: "Today",
            status: "Approved",
          },
          {
            id: "1234",
            role: "Employee",
            lastLog: "Today",
            status: "Approved",
          },
          {
            id: "1234",
            role: "Employee",
            lastLog: "Today",
            status: "Approved",
          },
          {
            id: "1234",
            role: "Employee",
            lastLog: "Today",
            status: "Approved",
          },
          {
            id: "1234",
            role: "Employee",
            lastLog: "Today",
            status: "Approved",
          },
          {
            id: "1234",
            role: "Employee",
            lastLog: "Today",
            status: "Approved",
          },
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
          ...AdminEmployeeDataColumns,
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
