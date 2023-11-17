import { Input } from "../ui/input";

const FundingForm = () => {
  return (
    <form className="px-7 py-8 bg-white sm:w-[35rem] w-full rounded-lg">
      <h3 className="capitalize text-primary-darkBlue">fund your account</h3>

      <div className="mt-5 space-y-4">
        <div className="">
          <label
            htmlFor="amount"
            className="text-[0.875rem] text-primary-darkBlue font-medium capitalize"
          >
            Initial funding amount
          </label>
          <Input placeholder="Amount" className="py-5 mt-2" />
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
      </div>
    </form>
  );
};
export default FundingForm;
