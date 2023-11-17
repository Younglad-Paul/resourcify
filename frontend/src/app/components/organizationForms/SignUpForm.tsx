"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { toast } from "../ui/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";

import { Input } from "../ui/input";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import FormSubmitButton from "../FormSubmitButton";
import { customFetch } from "@/lib/utils";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";

const FormSchema = z.object({
  name: z.string().min(8, {
    message: "Organization must be at least 8 characters.",
  }),
  email: z.string().min(2, "Email is required").email("Invalid email "),
  password: z
    .string()
    .min(2, "Password is required")
    .min(8, "Password must have 8 characters"),
});

export function InputForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
    },
  });

  const [showWorkPassword, setShowWorkPassword] = useState(false);
  const toggleWorkIDVisibility = () => {
    setShowWorkPassword(!showWorkPassword);
  };
  const [pending, setPending] = useState(false);
  const router = useRouter();

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
    setPending(true);
    try {
      const response = await customFetch.post("/organization/register", data);
      toast({ title: "Account created successfully" });
      router.push("/groupLogin");
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
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="max-w-[529px] w-full mx-auto rounded bg-white py-5 sm:px-14 px-3 mt-8"
      >
        <div className="text-center ">
          <h1 className=" text-2xl font-semibold">Sign up</h1>{" "}
          <h3 className="text-gray-600 text-[0.9375rem] mt-1.5">
            Get started today{" "}
          </h3>{" "}
        </div>
        <div className="mt-8 space-y-5">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#052126] sm:text-lg text-base">
                  {" "}
                  Organization name
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="enter your organization name"
                    {...field}
                    className="form-input py-5"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#052126] sm:text-lg text-base">
                  Email
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="enter your organization email"
                    {...field}
                    className="form-input py-5"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="relative">
                <FormLabel className="text-[#052126] sm:text-lg text-base">
                  {" "}
                  Unique identification code
                </FormLabel>
                <div className="relative">
                  <FormControl>
                    <Input
                      type={`${showWorkPassword ? "text" : "password"}`}
                      placeholder="password"
                      {...field}
                      className="form-input py-5 pr-5"
                    />
                  </FormControl>
                  <span
                    onClick={toggleWorkIDVisibility}
                    className="absolute right-3 -translate-y-1/2   top-1/2 cursor-pointer"
                  >
                    {showWorkPassword ? (
                      <Eye className="w-4 h-4" />
                    ) : (
                      <EyeOff className="w-4 h-4" />
                    )}
                  </span>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormSubmitButton pending={pending} text="Sign up" />

        <div className="py-6 flex items-center  gap-x-4 w-full">
          <span className="w-full h-[.1rem] inline-block bg-slate-100"></span>
          <span>or</span>
          <span className="w-full h-[.1rem] inline-block bg-slate-100"></span>
        </div>

        {/* <SignInButton /> */}
      </form>
    </Form>
  );
}
