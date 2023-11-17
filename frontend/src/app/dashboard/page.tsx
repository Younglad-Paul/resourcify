import { Metadata } from "next/types";
import Stats from "../components/stats/Stats";

export const metadata: Metadata = {
  title: "Resourcify | Admin Dashboard",
  description: "Empowering Financial Efficiency and Employee Satisfaction",
};

const page = () => {
  return (
    <section className="bg-primary-foreground py-4 px-6 min-h-[calc(100vh_-5rem)]">
      <Stats />
    </section>
  );
};
export default page;
