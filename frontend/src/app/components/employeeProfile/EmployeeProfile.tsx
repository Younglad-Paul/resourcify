"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import { Pencil } from "lucide-react";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { fetchUser, openPopUp } from "@/redux/features/userEmployee/UserSlice";
import Link from "next/link";

const EmployeeProfile = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.userState);

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  const userDetails = user?.user;

  return (
    <div className="flex lg:items-center  xl:gap-x-24 gap-x-10 lg:flex-row flex-col gap-y-7 ">
      <div className="flex max-sm-[450px]:flex-col flex-row gap-y-4  p-4 bg-white rounded-lg items-start gap-x-14  mt-6">
        <div className="">
          <Image
            src={"/images/hero1.png"}
            alt={""}
            width={100}
            height={100}
            className="rounded-full"
          />
        </div>

        <div className="space-y-2">
          <h1 className="font-medium md:text-[2rem] leading-relaxed text-xl capitalize">
            {`${userDetails?.firstName} ${userDetails?.lastName}`}
          </h1>

          <h4 className="md:text-base text-sm">Phone: +1234567890</h4>
          <h4 className="md:text-base text-sm">
            Employee ID: {userDetails?._id}
          </h4>

          <h4 className="md:text-base text-sm">
            Job Title: {userDetails?.role}
          </h4>
          <h4 className="md:text-base text-sm">Department: Marketing</h4>
          <h4 className="md:text-base text-sm">
            Email:{" "}
            <Link href={"mailto:johndoe@email.com"}>{userDetails?.email}</Link>{" "}
          </h4>
        </div>

        <Button
          onClick={() => dispatch(openPopUp())}
          variant={"secondary"}
          className="rounded-full sm:w-[3.5rem] max-sm-[450px]:ms-0 ms-auto sm:h-[3.5rem] w-[2.8rem] h-[2.8rem]"
        >
          <Pencil />
        </Button>
      </div>

      <div className="p-5 px-8 bg-white rounded-lg">
        <h1 className="md:text-[1rem] text-sm font-semibold">
          Skills and Certifications
        </h1>

        <ul className="list-disc mt-3">
          <h2 className="md:text-[1rem] text-sm font-semibold">Skills:</h2>
          <li className="mt-1 md:text-sm text-xs">Digital Marketing</li>
          <li className=" md:text-sm text-xs">Market Analysis</li>
          <li className=" md:text-sm text-xs"> Campaign Optimization</li>
        </ul>

        <ul className="list-disc mt-3">
          <h3 className="text-[1rem] font-semibold">Certifications:</h3>

          <li className="mt-1">Google Analytics Certification</li>
        </ul>
      </div>
    </div>
  );
};
export default EmployeeProfile;
