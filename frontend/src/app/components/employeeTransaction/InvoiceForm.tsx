"use client";

import { CalendarIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Calendar } from "../ui/calendar";
import React from "react";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
// import { FormControl } from "../ui/form";

const InvoiceForm = () => {
  const [date, setDate] = React.useState<Date>();

  return (
    <form action="" className="mt-20 bg-white p-6">
      <div className="flex justify-between items-center">
        <h4 className="font-bold text-primary-darkBlue">Invoice</h4>
        <Button>Add Invoice</Button>
      </div>

      <div className="mt-11 sm:w-[85%] w-full grid grid-cols-2 max-[425px]:grid-cols-1 gap-x-10 gap-y-5">
        <div className="flex w-full flex-col gap-y-2">
          <label
            htmlFor="title"
            className="text-primary-darkBlue font-medium sm:text-base text-sm"
          >
            Title
          </label>
          <Input id="title" className="py-5" placeholder="ex. business trip" />
        </div>
        <div className="flex w-full flex-col gap-y-2">
          <label
            htmlFor="paymentMethod"
            className="text-primary-darkBlue font-medium sm:text-base text-sm"
          >
            Payment Method
          </label>
          <Select>
            <SelectTrigger className="w-full py-5">
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">card</SelectItem>
              <SelectItem value="dark">transfar</SelectItem>
              <SelectItem value="system">bitcon</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex w-full flex-col gap-y-2">
          <label
            htmlFor="date"
            className="text-primary-darkBlue font-medium sm:text-base text-sm"
          >
            Date
          </label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-full py-5 justify-start text-left font-normal",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>

        <div className="flex w-full flex-col gap-y-2">
          <label
            htmlFor="addRecepit"
            className="text-primary-darkBlue font-medium sm:text-base text-sm"
          >
            Add Recepit
          </label>
          <Input placeholder="Select receipt" className="py-5" />
        </div>
        <div className="flex w-full flex-col gap-y-2">
          <label
            htmlFor="paymentMethod"
            className="text-primary-darkBlue font-medium sm:text-base text-sm"
          >
            Catergory
          </label>
          <Select>
            <SelectTrigger className="w-full py-5">
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Food">Food</SelectItem>
              <SelectItem value="Electicity Bill">Electicity Bill</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="mt-11 flex max-sm:flex-wrap-reverse flex-nowrap gap-y-3 items-center gap-x-7">
        <Button
          size={"lg"}
          className="hover:bg-[#D2D2D2] text-gray-900 bg-[#D2D2D2] hover:scale-105"
        >
          Cancel
        </Button>
        <Button
          size={"lg"}
          className="hover:bg-[#0e7158a8] bg-[#0E7159] hover:scale-105 "
        >
          Save and Submit
        </Button>
      </div>
    </form>
  );
};
export default InvoiceForm;
