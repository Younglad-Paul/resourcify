import { Button } from "../ui/button";
import { Input } from "../ui/input";

const ReportForm = () => {
  return (
    <form className="bg-white rounded-lg p-6">
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-primary-darkBlue">New report:</h3>
        <Button className="">Add Report</Button>
      </div>

      <div className="mt-8 flex max-sm:flex-wrap flex-nowrap gap-y-4 items-center justify-between gap-x-5">
        <div className="w-full flex flex-col gap-y-2">
          <label
            htmlFor="reportName"
            className="text-primary-darkBlue  font-medium sm:text-base text-sm"
          >
            Report name
          </label>
          <Input
            id="reportName"
            placeholder="ex. business trip"
            className="text-lg py-5"
          />
        </div>
        <div className="w-full flex flex-col gap-y-2">
          <label
            htmlFor="description"
            className="text-primary-darkBlue font-medium sm:text-base text-sm"
          >
            Description
          </label>
          <Input
            id="description"
            placeholder="ex. About trip"
            className="text-lg py-5 "
          />
        </div>
        <div className="flex items-center place-self-end gap-x-5">
          <Button className="bg-primary-darkBlue">Save</Button>
          <Button className=" bg-[#D2D2D2] text-gray-900 hover:bg-[#D2D2D2] hover:scale-105 ">
            Cancel
          </Button>
        </div>
      </div>
    </form>
  );
};
export default ReportForm;
