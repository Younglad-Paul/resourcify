"use client";

import React, { FormEvent, useState } from "react";
import Link from "next/link";
import Container from "../components/ui/Container";
import FormHeader from "../components/headers/FormHeader";
import { EyeOff, Mail, Eye } from "lucide-react";
import { Button } from "../components/ui/button";

const GroupSignUp = () => {
  const [showWorkID, setShowWorkID] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    workID: "",
  });

  const toggleWorkIDVisibility = () => {
    setShowWorkID(!showWorkID);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <main
      style={{ backgroundImage: "url(./images/watermark.png)" }}
      className="sm:bg-[#2E68FB17] bg-white pb-7  min-h-screen"
    >
      <Container>
        <FormHeader label={"Organization"} />
        <section className="px-8 ">
          <form
            action=""
            className="max-w-[529px] w-full mx-auto rounded bg-white py-5 sm:px-14 px-3 mt-8"
          >
            <div className="text-center">
              <h1 className=" text-2xl font-semibold">Sign up</h1>
              <h3 className="text-gray-600 text-[0.9375rem] mt-1.5">
                Get started today
              </h3>
            </div>

            <div className="mt-8 space-y-5">
              <div className="form-group">
                <label htmlFor="OrganizationName" className="form-label">
                  Organization name
                </label>
                <input
                  type="name"
                  id="OrganizationName"
                  placeholder="enter your organization name"
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label htmlFor="OrganizationType" className="form-label">
                  Organization type
                </label>
                <input
                  type="text"
                  id="OrganizationType"
                  placeholder=" enteryour organization type"
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="name"
                  id="email"
                  placeholder="enter your organization email"
                  className="form-input"
                />
              </div>
              <div className="form-group relative">
                <label htmlFor="OrganizationPassword" className="form-label">
                  Unique identification code
                </label>
                <input
                  type="password"
                  id="OrganizationPassword"
                  className="form-input pr-9"
                />
                <span
                  onClick={toggleWorkIDVisibility}
                  className="absolute right-3 translate-y-[88%]  top-1/2 cursor-pointer"
                >
                  {showWorkID ? (
                    <Eye className="w-4 h-4" />
                  ) : (
                    <EyeOff className="w-4 h-4" />
                  )}
                </span>
              </div>
            </div>

            <Button
              type="submit"
              className="sm:text-lg text-base  mx-auto  mobile-l:py-7 py-6 mt-6 w-full text-white"
            >
              Sign up
            </Button>
            <div className="py-6 flex items-center  gap-x-4 w-full">
              <span className="w-full h-[.1rem] inline-block bg-slate-100"></span>
              <span>or</span>
              <span className="w-full h-[.1rem] inline-block bg-slate-100"></span>
            </div>

            <button
              type="button"
              className="bg-[#2E68FB17] hover:shadow-xl transition-shadow duration-300 text-center grid place-items-center mx-auto py-3 px-5 text-black/90 rounded-md"
            >
              <Link
                href={"#"}
                className="flex gap-x-6 items-center sm:text-lg text-sm"
              >
                <Mail /> <span>Sign up with Mail</span>
              </Link>
            </button>
          </form>

          <h4 className="sm:text-lg text-base text-center sm:py-8 py-3">
            <span className="text-black/95"> have an account? </span>
            <Link href={"/groupLogin"} className="text-primary">
              Login
            </Link>
          </h4>
        </section>
      </Container>
    </main>
  );
};
export default GroupSignUp;
