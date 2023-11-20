import { Metadata } from "next/types";
import AdminEmployeeFetch  from "./AdminEmployeeFetch/page"
export const metadata: Metadata = {
  title: "Resourcify | dashbaord Employees",
  description: "Empowering Financial Efficiency and Employee Satisfaction",
};

const page = () => {
  return (
  <div>
    <AdminEmployeeFetch />
  </div>
  )};
export default page;
