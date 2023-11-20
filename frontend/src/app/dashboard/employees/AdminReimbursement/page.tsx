'use client'
import { useState, useEffect } from 'react';
import { Request4, AdminReimbursement } from "@/app/components/employeeTable/columns";
import { AdminDataTable } from "@/app/components/employeeTable/AdminDataTable";
import { X } from "lucide-react";

const Page = () => {
  const [data, setData] = useState<Request4[]>([]);

  const fetchData = async () => {
    const rawData = [
        
        {
          name: "Sunday Paul",
          title: "Funding",
          description: "School Funding",
          amount: "N23,000",
          add: "Approved" as const,
        },
        // {
        //   name: "Sunday Paul",
        //   title: "Funding",
        //   description: "School Funding",
        //   amount: "N23,000",
        //   add: "Approved",
        // },
        // {
        //   name: "Sunday Paul",
        //   title: "Funding",
        //   description: "School Funding",
        //   amount: "N23,000",
        //   add: "Approved",
        // },
        // {
        //   name: "Sunday Paul",
        //   title: "Funding",
        //   description: "School Funding",
        //   amount: "N23,000",
        //   add: "Approved",
        // },
        // {
        //   name: "Sunday Paul",
        //   title: "Funding",
        //   description: "School Funding",
        //   amount: "N23,000",
        //   add: "Approved",
        // },
      ];
    
    const dataWithNumber = rawData.map((item, index) => ({
      ...item,
      number: index + 1,
    }));
    setData(dataWithNumber);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className=''>
      <AdminDataTable
        columns={[
          ...AdminReimbursement,
          {
            header: 'Action',
            cell: ({ row }) => (
                <div className="cursor-pointer bg-blue-950 rounded-md w-24 p-3 text-center text-white hover:bg-blue-600 hover:font-bold">
                {
                  <div>
                    Add Item
                  </div>
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
