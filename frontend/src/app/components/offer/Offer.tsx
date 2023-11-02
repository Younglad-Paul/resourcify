"use client";

import Image from "next/image";
import Container from "../ui/Container";
import OfferCard from "./OfferCard";
import img1 from "../../../../public/images/off1.png";
import img2 from "../../../../public/images/off2.png";
import img3 from "../../../../public/images/off3.png";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/activeSection";
import { useSectionInView } from "@/lib/hooks";

const Offer = () => {
  const { ref } = useSectionInView("Features");

  return (
    <section
      ref={ref}
      id="features"
      style={{ backgroundImage: "url(./images/tan1.png)" }}
      className="bg-[#2E68FB17] pt-16 pb-[13rem] scroll-mt-24 bg-bottom lg:bg-[length:1000px_150px] mobile-l:bg-[length:470px_130px] bg-[length:250px_100px] bg-no-repeat sm:px-14 px-10"
    >
      <Container>
        <h1 className="text-center primary-heading">
          what we offer at resourcify
        </h1>

        <div className="mt-[9rem] grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-x-6 lg:gap-y-32 gap-y-20  items-center">
          <OfferCard>
            <h4 className="leading-[150%] mobile-l:text-lg text-sm mobile-l:w-[14rem] sm:w-[10rem] w-[7rem]">
              Automated Reimbursement Process
            </h4>
            <div className="absolute sm:-top-[3rem] -top-[1.5rem] sm:-right-[5.8rem] -right-[3rem] sm:w-[11.5rem] w-[8.2rem]">
              <Image
                src={img1}
                alt={"img1"}
                className="w-full h-full object-cover"
              />
            </div>
          </OfferCard>
          <OfferCard>
            <h4 className="leading-[150%] mobile-l:text-lg text-sm  sm:w-[10rem] w-[7rem]">
              Robust Security Measures
            </h4>
            <div className="absolute sm:-top-[3rem] -top-[1.5rem] sm:-right-[3.5rem] -right-[3rem] sm:w-[11.5rem] w-[8.2rem]">
              <Image
                src={img2}
                alt={"img1"}
                className="w-full h-full object-cover"
              />
            </div>
          </OfferCard>
          <OfferCard>
            <h4 className="leading-[150%] mobile-l:text-lg text-sm sm:w-[10rem] w-[7rem]">
              Comprehensive Analytics
            </h4>
            <div className="absolute sm:-top-[4rem] -top-[1.5rem] sm:-right-[3.5rem] -right-[3rem] sm:w-[11.5rem] w-[8.2rem]">
              <Image
                src={img3}
                alt={"img1"}
                className="w-full h-full object-cover"
              />
            </div>
          </OfferCard>
        </div>
      </Container>
    </section>
  );
};
export default Offer;
