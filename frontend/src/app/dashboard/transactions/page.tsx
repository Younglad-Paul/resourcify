import FundingForm from "@/app/components/adminForms/FundingForm";
import Link from "next/link";
import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Resourcify | Dashboard Transactions",
  description: "Empowering Financial Efficiency and Employee Satisfaction",
};

const page = () => {
  return (
    <section className="bg-primary-foreground py-4 px-6 min-h-[calc(100vh_-5rem)]">
      <nav>
        <ul className="flex items-center gap-x-7">
          <li className="text-[0.875rem]">
            <Link href={""} className="text-primary-darkBlue font-medium">
              History
            </Link>
          </li>
          <li className="text-[0.875rem]">
            <Link href={""} className="text-primary-darkBlue font-medium">
              Wallet funding
            </Link>
          </li>
          <li className="text-[0.875rem]">
            <Link href={""} className="text-primary-darkBlue font-medium">
              Wallet withdrawal
            </Link>
          </li>
          <li className="text-[0.875rem]">
            <Link href={""} className="text-primary-darkBlue font-medium">
              Reimbursement dispersal.
            </Link>
          </li>
        </ul>
      </nav>
      <div className="mt-8">
        <FundingForm />
      </div>
    </section>
  );
};

export default page;
