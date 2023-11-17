"use client";

import { Eye, EyeOff, Mail } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { customFetch } from "@/lib/utils";
import { useToast } from "../ui/use-toast";
import { useRouter } from "next/navigation";
import { AxiosError } from "axios";
import FormSubmitButton from "../FormSubmitButton";
// import { useSession, signOut, signIn } from "next-auth/react";

const SignInForm = () => {
  const [showWorkID, setShowWorkID] = useState(false);
  const toggleWorkIDVisibility = () => {
    setShowWorkID(!showWorkID);
  };

  const [pending, setPending] = useState(false);
  const router = useRouter();

  const { toast } = useToast();

  const FormSignInSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPending(true);
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    try {
      const response = await customFetch.post("/organization/signin", data);
      toast({
        title: "Logged in successfully",
      });
      router.push("/dashboard");
      console.log(response.data);

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
        <h1 className=" text-2xl font-semibold">Sign in</h1>
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
            name="email"
            id="email"
            autoComplete="off"
            placeholder="enter your organization email"
            className="form-input py-5"
            required
          />
        </div>
        <div className="form-group relative">
          <label htmlFor="OrganizationPassword" className="form-label">
            Unique identification code
          </label>
          <Input
            type={`${showWorkID ? "text" : "password"}`}
            id="OrganizationPassword"
            name="password"
            className="form-input pr-9 py-5"
            required
            autoComplete="off"
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
      <FormSubmitButton pending={pending} text="Sign in" />

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
