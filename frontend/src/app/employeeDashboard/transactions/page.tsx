import InvoiceForm from "@/app/components/employeeTransaction/InvoiceForm";
import ReportForm from "@/app/components/employeeTransaction/ReportForm";

const page = () => {
  return (
    <section className="bg-primary-foreground py-4 px-6 min-h-[calc(100vh_-5rem)]">
      <ReportForm />
      <InvoiceForm />
    </section>
  );
};
export default page;
