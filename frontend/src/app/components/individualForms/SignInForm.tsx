"use client";

import React, { useState } from "react";
import Link from "next/link";
import { EyeOff, Eye, Mail } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import FormSubmitButton from "../FormSubmitButton";
import { AxiosError } from "axios";
import { customFetch } from "@/lib/utils";
import { useToast } from "../ui/use-toast";
import { useRouter } from "next/navigation";

const SignInForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [pending, setPending] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const { toast } = useToast();
  const router = useRouter();

  const FormSignInSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPending(true);
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    try {
      const response = await customFetch.post("/employee/signin", data);
      toast({
        title: "Logged in  successfully",
      });
      router.push("/employeeDashboard");
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
      onSubmit={FormSignInSubmit}
      className="max-w-[529px] w-full mx-auto rounded bg-white py-5 sm:px-14 px-3 mt-8"
    >
      <div className="text-center">
        <h1 className="text-2xl font-semibold">Sign in</h1>
        <h3 className="text-gray-600 text-[0.9375rem] mt-1.5">
          Welcome back and good to see you.
        </h3>
      </div>

      <div className="mt-8 space-y-5">
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <Input
            type="email"
            id="email"
            name="email"
            autoComplete="off"
            placeholder="enter your organization email"
            className="form-input py-5"
          />
        </div>
        <div className="form-group relative">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <Input
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            className="form-input pr-9 py-5"
            autoComplete="off"
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

      <FormSubmitButton pending={pending} text=" Sign In" />

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

export default SignInForm;
