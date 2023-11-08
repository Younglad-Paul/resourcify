import { Bell, HelpCircle, Search, Store } from "lucide-react";
import Time from "../Time";
import ProfileButton from "../profileBtn/ProfileBtn";

const DashboardHeader = () => {
  return (
    <header className="flex z-10 justify-between items-center sticky top-0 py-4 px-6 bg-white">
      <div className="">
        <h2 className="text-primary-darkBlue text-lg font-semibold">
          Dashboard
        </h2>
        <Time />
      </div>

      <div className="flex items-center gap-x-10">
        <div className="relative xl:block hidden">
          <input
            type="text"
            placeholder="Search"
            className="py-2 pl-3 pr-9 border outline-none focus-visible:ring-1 focus-visible:ring-ring rounded-lg"
          />
          <Search className="absolute right-5 top-1/2 w-5 text-gray-500 h-5 -translate-y-1/2" />
        </div>

        <div className="bg-primary rounded-lg text-white py-2.5 px-3 text-[0.725rem]">
          $ 2345.00
        </div>
        <div className="bg-primary-darkBlue flex items-center gap-x-2 rounded-lg text-white py-2.5 px-3">
          <span>
            <Store className="w-4 h-4" />
          </span>
          <span className="text-[0.725rem]">$ 2345.00</span>
        </div>

        <div className=" flex items-center gap-x-3">
          <button className="w-8 h-8 bg-primary text-white grid place-items-center rounded-full">
            <Bell className="w-5 h-5" />
          </button>
          <button className="w-8 h-8 bg-primary text-white grid place-items-center rounded-full">
            <HelpCircle className="w-5 h-5" />
          </button>
        </div>
        <ProfileButton />
      </div>
    </header>
  );
};
export default DashboardHeader;
