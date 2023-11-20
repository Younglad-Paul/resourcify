import EmployeeProfile from "@/app/components/employeeProfile/EmployeeProfile";
import UpdateProfileForm from "@/app/components/individualForms/UpdateProfileForm";
import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Resourcify | Profile",
  description: "Empowering Financial Efficiency and Employee Satisfaction",
};

const page = () => {
  return (
    <section className="py-4 bg-primary-foreground px-6 min-h-[calc(100vh_-5rem)]">
      <EmployeeProfile />
      <UpdateProfileForm />
    </section>
  );
};

export default page;
