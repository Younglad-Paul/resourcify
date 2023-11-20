"use client";
import React, { useState } from "react";
import Link from "next/link";

import { Eye, EyeOff } from "lucide-react";

import { FcGoogle } from "react-icons/fc";
import { Input } from "../ui/input";
import FormSubmitButton from "../FormSubmitButton";
import { customFetch } from "@/lib/utils";
import { useToast } from "../ui/use-toast";
import { useRouter } from "next/navigation";
import { AxiosError } from "axios";

const SignUpForm = () => {
  const [pending, setPending] = useState(false);
  const [organizationId, setOrganizationId] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const toggleWorkIDVisibility = () => {
    setOrganizationId(!organizationId);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const { toast } = useToast();
  const router = useRouter();

  const FormSignUpSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPending(true);
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    try {
      const response = await customFetch.post("/employee/register", data);
      toast({
        title: "Account created successfully",
      });
      router.push("/Signin");
      // console.log(response.data);
      return response.data;
    } catch (error) {
      const errorMessage = error as AxiosError<ApiErrorResponse>;
      const message =
        errorMessage.response?.data.msg ||
        "please double check your credentials";

      toast({
        variant: "destructive",
        title: message,
      });
    } finally {
      setPending(false);
    }
  };

  return (
    <form
      onSubmit={FormSignUpSubmit}
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
          <Input
            type="text"
            id="firstName"
            name="firstName"
            placeholder=" First Name"
            className="form-input py-5"
            autoComplete="off"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName" className="form-label">
            Last Name
          </label>
          <Input
            type="text"
            id="lastName"
            name="lastName"
            placeholder=" Last Name"
            className="form-input py-5"
            autoComplete="off"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="enter your email"
            className="form-input py-5"
            required
          />
        </div>
        <div className="form-group relative">
          <label htmlFor="organizationCode" className="form-label">
            Organization Code
          </label>
          <Input
            type={organizationId ? "text" : "password"}
            id="organizationCode"
            name="organizationCode"
            placeholder="enter organizationCode"
            className="form-input py-5"
            autoComplete="off"
            required
          />
          <span
            onClick={toggleWorkIDVisibility}
            className="absolute right-3 translate-y-[88%]  top-1/2 cursor-pointer"
          >
            {organizationId ? (
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
          <Input
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            autoComplete="off"
            className="form-input pr-9 py-5"
            required
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

      <FormSubmitButton pending={pending} text="Sign Up" />

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
  );
};

export default SignUpForm;
