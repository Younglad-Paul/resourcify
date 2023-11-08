"use client";
import React, { useState } from "react";
import Link from "next/link";
import Container from "../components/ui/Container";
import FormHeader from "../components/headers/FormHeader";
import { Eye, EyeOff, Mail } from "lucide-react";
import { Button } from "../components/ui/button";
import { FcGoogle } from "react-icons/fc";

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    workID: "",
    password: "",
  });

  const [showWorkID, setShowWorkID] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const toggleWorkIDVisibility = () => {
    setShowWorkID(!showWorkID);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <main
      style={{ backgroundImage: "url(./images/watermark.png)" }}
      className="sm:bg-[#2E68FB17] bg-white pb-7  min-h-screen"
    >
      <Container>
        <FormHeader label="individual" />

        <section className="px-8 ">
          <form
            action=""
            className="max-w-[529px] w-full mx-auto rounded bg-white py-5 sm:px-14 px-3 mt-8"
          >
            <div className="text-center">
              <h1 className="text-2xl font-semibold">Sign up</h1>
              <h3 className="text-gray-600 text-[0.9375rem] mt-1.5">
                Get started today
              </h3>
            </div>

            <div className="mt-8 space-y-5">
              <div className="form-group">
                <label htmlFor="firstName" className="form-label">
                  First Name
                </label>
                <input
                  type="name"
                  id="firstName"
                  placeholder=" First Name"
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName" className="form-label">
                  Last Name
                </label>
                <input
                  type="name"
                  id="lastName"
                  placeholder=" Last Name"
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
                  placeholder="enter your email"
                  className="form-input"
                />
              </div>
              <div className="form-group relative">
                <label htmlFor="workID" className="form-label">
                  Work ID
                </label>
                <input
                  type={showWorkID ? "text" : "password"}
                  id="workID"
                  placeholder="enter work ID"
                  className="form-input"
                />
                <span
                  onClick={toggleWorkIDVisibility}
                  className="absolute right-3 translate-y-[88%]  top-1/2 cursor-pointer"
                >
                  {showWorkID ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </span>
              </div>
              <div className="form-group relative">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  autoComplete="true"
                  className="form-input pr-9"
                />
                <span
                  onClick={togglePasswordVisibility}
                  className="absolute right-3 translate-y-[88%]  top-1/2 cursor-pointer"
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </span>
              </div>
            </div>

            <Button
              type="submit"
              className="sm:text-lg text-base  mx-auto  mobile-l:py-7 py-6 mt-6 w-full text-white"
            >
              Sign Up
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
                <FcGoogle /> <span>Sign up with Google</span>
              </Link>
            </button>
          </form>

          <h4 className="sm:text-lg text-base text-center sm:py-8 py-3">
            <span className="text-black/95"> Have an account? </span>
            <Link href={"/Signin"} className="text-primary">
              Login
            </Link>
          </h4>
        </section>
      </Container>
    </main>
  );
};

export default Signup;
