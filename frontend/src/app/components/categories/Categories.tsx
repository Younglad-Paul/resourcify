import { Briefcase, Landmark, Plus, Search, ShoppingBag } from "lucide-react";

const Categories = () => {
  return (
    <div className="p-5 bg-white rounded-lg">
      <div className="flex justify-between items-center">
        <h1 className="font-semibold ">Categories</h1>
        <button className="w-10 h-10 bg-primary text-white grid place-items-center rounded-full">
          <Plus />
        </button>
      </div>
      <div className="relative mt-5">
        <input
          type="text"
          placeholder="Search"
          className="py-2 pl-3 w-full pr-9 border  outline-none focus-visible:ring-1 focus-visible:ring-ring rounded-lg"
        />
        <Search className="absolute right-5 top-1/2 w-5 text-gray-500 h-5 -translate-y-1/2" />
      </div>

      <ul className="mt-3 space-y-3">
        <li className="flex  items-center gap-x-5">
          <span className="w-10 h-10 text-white bg-primary grid place-items-center rounded-full">
            <ShoppingBag className="w-5  h-5" />
          </span>
          <span className="font-semibold">Shopping</span>
        </li>
        <li className="flex  items-center gap-x-5">
          <span className="w-10 h-10 text-white bg-yellow-500 grid place-items-center rounded-full">
            <Briefcase className="w-5  h-5" />
          </span>
          <span className="font-semibold">Travelling</span>
        </li>
        <li className="flex  items-center gap-x-5">
          <span className="w-10 h-10 text-white bg-red-700 grid place-items-center rounded-full">
            <Landmark className="w-5  h-5" />
          </span>
          <span className="font-semibold">Accommodation</span>
        </li>
      </ul>
    </div>
  );
};
export default Categories;
