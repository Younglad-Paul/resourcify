import { Input } from "../../../components/ui/input";

const page = () => {
  return (
    <form className="bg-primary-foreground w-full  rounded-lg">
      <div className="bg-white w-full p-2 sm:p-20">
      <h3 className="capitalize text-primary-darkBlue font-bold">fund your account</h3>

      <div className="mt-5 space-y-4">
        <div className="">
          <label
            htmlFor="amount"
            className="text-[0.875rem] text-primary-darkBlue font-medium capitalize"
          >
            Initial funding amount
          </label>
          <Input placeholder="Amount" className="py-5 mt-2 w-full " />
        </div>

        <div className="">
          <label
            htmlFor="card_number"
            className="text-[0.875rem] text-primary-darkBlue font-medium capitalize"
          >
            card number
          </label>
          <Input
            placeholder="345 5566 774 5553"
            id="card_number"
            className="py-5 mt-2"
          />
        </div>
        <div className="">
          <label
            htmlFor="name"
            className="text-[0.875rem] text-primary-darkBlue font-medium capitalize"
          >
            name
          </label>
          <Input placeholder="name" id="name" className="py-5 mt-2" />
        </div>

        <div className="flex items-center gap-x-6">
          <article>
            <label
              htmlFor="month"
              className="text-[0.8rem] text-primary-darkBlue font-medium capitalize"
            >
              Month
            </label>
            <Input type="month" id="month" className="py-5 mt-2" />
          </article>
          <article>
            <label
              htmlFor="year"
              className="text-[0.8rem] text-primary-darkBlue font-medium capitalize"
            >
              exp.year
            </label>
            <Input type="year" className="py-5 mt-2" />
          </article>
          <article>
            <label
              htmlFor="ynumberear"
              className="text-[0.8rem] text-primary-darkBlue font-medium capitalize"
            >
              CVV
            </label>
            <Input type="number" className="py-5 mt-2" />
          </article>
        </div>
        <button className="w-full bg-primary hover:bg-blue-500 mt-6 p-3 text-white font-bold rounded-md">Fund Account</button>
      </div>
      <p className="w-full mt-16 text-primary text-center justify-center content-center font-bold hover:text-blue-500 cursor-pointer">Save and come back later</p>
      </div>
    </form>
  );
};
export default page;
