"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";
import img1 from "../../../../public/images/hero1.png";
import img2 from "../../../../public/images/hero2.png";
import img3 from "../../../../public/images/hero3.png";
import Container from "../ui/Container";
import { useSectionInView } from "@/lib/hooks";

const Hero = () => {
  const { ref } = useSectionInView("Home");

  return (
    <Container>
      <section
        ref={ref}
        id="home"
        className="flex  relative  lg:flex-row flex-col gap-y-16 justify-between gap-x-9 pt-7 lg:pb-0 pb-9  px-8 scroll-mt-[200rem]"
      >
        <div className="absolute lg:w-[45rem] sm:w-[35rem] w-[25rem] -left-[13rem]   sm:-top-[23rem] -top-[16rem]">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#2E68FB17"
              d="M39.5,-12.7C45.3,4.8,39.8,26.1,23.1,40.2C6.3,54.4,-21.7,61.5,-42,48.9C-62.3,36.3,-74.8,3.9,-66.5,-17.1C-58.2,-38.2,-29.1,-48,-6.1,-46C16.9,-44.1,33.8,-30.3,39.5,-12.7Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>

        <div className="space-y-9 md:w-[43rem]">
          <h1 className="primary-heading">
            Simplify Your Reimbursement Process with our Streamlined Solution
          </h1>
          <p className="leading-[170.5%]">
            Our Expense Reimbursement Platform is here to streamline your
            reimbursement process, providing a user-friendly interface and
            comprehensive analytics.
          </p>

          <Button
            asChild
            className="hover:-translate-y-1 px-16 py-[1.7rem] transition-all shadow-black/70 hover:shadow-2xl"
          >
            <Link href={"/"} className="capitalize  text-[1.2rem] ">
              join us today
            </Link>
          </Button>
        </div>

        <div className="flex relative z-10  md:w-[40rem] lg:h-[43rem]   ">
          <figure className="lg:absolute left-0 z-10 shadow-2xl shadow-black/50 xl:w-auto lg:w-[18rem]  w-full lg:h-auto mobile-l:h-[20rem] ">
            <Image
              src={img1}
              alt={"hero people"}
              className="lg:w-auto lg:h-auto w-full mobile-l:h-full  object-cover"
            />
          </figure>

          <figure className="absolute lg:block hidden  z-10 xl:right-0 right-[8rem] top-[12rem] xl:w-auto w-[15rem]">
            <Image src={img2} alt={"hero people"} />
          </figure>
          <figure className="absolute lg:block hidden -z-10 xl:-right-[2rem] right-[3rem] top-[9rem] xl:w-auto w-[13rem]">
            <Image src={img3} alt={"hero people"} />
          </figure>
        </div>
      </section>
    </Container>
  );
};
export default Hero;
