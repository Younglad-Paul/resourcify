"use client";

import { useAppDispatch, useAppSelector } from "@/redux/store";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  closePopUp,
  updateUser,
} from "@/redux/features/userEmployee/UserSlice";
import { useAppContext } from "@/context/AppContext";

const UpdateProfileForm = () => {
  const dispatch = useAppDispatch();
  const { isPopUp } = useAppSelector((state) => state.userState);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(updateUser());
  };

  return (
    <div
      className={`fixed grid place-items-center transition duration-300 top-0 left-0 w-full h-screen bg-black/30 z-30 ${
        isPopUp ? "scale-100 visible" : "scale-0 invisible"
      }`}
    >
      <form
        onSubmit={handleSubmit}
        className="bg-white  w-[33.0625rem] rounded-lg shadow-xl py-7 px-8"
      >
        <h1 className="text-primary-darkBlue font-semibold text-xl">
          Edit Profile
        </h1>

        <div className="space-y-8 mt-5">
          <div className="">
            <label
              htmlFor="firstName"
              className="text-primary-darkBlue font-medium"
            >
              fisrt Name
            </label>

            <Input type="text" id="firstName" className="py-5 mt-1" />
          </div>
          <div className="">
            <label
              htmlFor="lastName"
              className="text-primary-darkBlue font-medium"
            >
              Last Name
            </label>
            <Input type="text" id="lastName" className="py-5 mt-1" />
          </div>
          <div className="">
            <label htmlFor="role" className="text-primary-darkBlue font-medium">
              Role
            </label>
            <Input type="text" id="role" className="py-5 mt-1" />
          </div>

          <div className="">
            <label
              htmlFor="email"
              className="text-primary-darkBlue font-medium"
            >
              Email
            </label>
            <Input type="email" id="email" className="py-5 mt-1" />
          </div>
        </div>
        <div className="flex gap-x-8 mt-7">
          <Button
            size={"lg"}
            type="submit"
            className="bg-primary-darkBlue hover:bg-primary-darkBlue/90 "
          >
            Save
          </Button>
          <Button
            onClick={() => dispatch(closePopUp())}
            size={"lg"}
            type="button"
            className="bg-[#D2D2D2] text-black hover:bg-[#D2D2D2] hover:scale-105"
          >
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProfileForm;
