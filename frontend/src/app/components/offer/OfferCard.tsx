import { ReactNode } from "react";

const OfferCard = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative bg-white shadow-2xl rounded-lg lg:w-[20rem]  w-[90%] py-7 sm:px-5 pl-3 ">
      {children}
    </div>
  );
};
export default OfferCard;
