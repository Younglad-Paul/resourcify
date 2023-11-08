"use client";

import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { motion } from "framer-motion";

import { dashboardLinks } from "@/lib/Links";
import {
  ChevronRight,
  HelpCircle,
  LogOut,
  Moon,
  Settings,
  Store,
  Sun,
  Upload,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import { useState } from "react";
import SignoutSideBar from "./SignoutSideBar";

const DashboardSidebar = () => {
  const pathname = usePathname();
  const [IsOpen, setIsOpen] = useState<boolean>(true);

  return (
    <aside
      className={`asidebar    transition-all duration-300  z-20 sticky overflow-y-scroll  overflow-x-hidden   h-screen   left-0 top-0 ${
        IsOpen ? " lg:w-[18rem] w-[8rem]" : "w-[8rem]"
      }`}
    >
      <span
        onClick={() => setIsOpen(!IsOpen)}
        className="absolute lg:grid hidden  cursor-pointer bg-primary w-7 h-7 shadow-xl shadow-black/50  place-items-center rounded-full right-2  bottom-16  z-20"
      >
        <ChevronRight
          className={`text-white transition duration-150 ${
            IsOpen ? "rotate-180" : " rotate-0"
          }`}
        />
      </span>

      <div className="border-b px-6 py-3 ">
        <h1
          className={`text-primary-darkBlue  font-bold text-[1.4rem] origin-left`}
        >
          Resourcify
        </h1>
      </div>

      <ul className="mt-[2rem] space-y-3 px-6 ">
        <li className="w-full flex  overflow-hidden  items-center  gap-x-4 bg-lightBlue py-3  cursor-pointer px-5 rounded-2xl border border-blue-400/50">
          <span className="min-w-[2.5rem] h-10 grid place-items-center bg-primary rounded-full ">
            <Store className="w-5 h-5 text-white" />
          </span>
          <div
            className={`text-center  min-w-[10rem] overflow-x-clip  ${
              !IsOpen && "hidden "
            }`}
          >
            <h3 className="text-primary-darkBlue text-clip">Account number</h3>
            <h5 className="text-[0.6875rem] text-clip text-[#0000ff89]">
              0013 7788 3214 091
            </h5>
          </div>
        </li>

        <li className="w-full flex overflow-hidden  items-center gap-x-4 bg-[#fb9c0012] py-3 cursor-pointer px-5 rounded-2xl border border-[#b1771a54]">
          <span className="min-w-[2.5rem] h-10 grid place-items-center bg-[#FB9F07] rounded-full ">
            <Upload className="w-5 h-5 text-white" />
          </span>
          <div className="text-center  min-w-[10rem]">
            <h3 className="text-primary-darkBlue">Upload</h3>
            <h5 className="text-[0.6875rem] text-[#fb9f07a3]">
              Upload CSV, PDF, excel
            </h5>
          </div>
        </li>
      </ul>

      <nav>
        <ul className="mt-20 ">
          {dashboardLinks.map((link, i) => {
            const active = pathname === link.path;

            return (
              <motion.li key={i} className="relative overflow-hidden ">
                <Link
                  href={link.path}
                  className={`flex hover:text-primary gap-x-8 items-center px-11  font-medium  py-3 ${
                    active
                      ? "text-primary bg-primary-foreground"
                      : "text-primary-darkBlue "
                  }`}
                >
                  <span>{link.icon}</span>
                  <span
                    className={`capitalize min-w-[10rem] max-lg:hidden    ${
                      !IsOpen && "  hidden "
                    }`}
                  >
                    {link.label}{" "}
                  </span>
                </Link>

                {active && (
                  <motion.span
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                    className="bg-primary inline-block  top-0 h-full w-[.14rem] right-0  absolute "
                  ></motion.span>
                )}
              </motion.li>
            );
          })}

          <Popover>
            <PopoverTrigger asChild>
              <li className="flex hover:text-primary overflow-hidden   gap-x-8 items-center px-11 text-primary-darkBlue font-medium  cursor-pointer py-3">
                <span>
                  <Settings className="w-5 h-5" />
                </span>
                <span
                  className={`capitalize min-w-[10rem] max-lg:hidden  ${
                    !IsOpen && "hidden"
                  }`}
                >
                  settings{" "}
                </span>
              </li>
            </PopoverTrigger>
            <PopoverContent>
              {" "}
              <Button
                variant="ghost"
                size="icon"
                aria-label="Toggle Theme"
                className="mr-6"
                // onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                <Sun className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle Theme</span>
              </Button>
            </PopoverContent>
          </Popover>
        </ul>
      </nav>

      <ul className="mt-7 ">
        <SignoutSideBar isOpen={IsOpen} />
        <li className="flex  hover:text-primary gap-x-8 px-11 items-center text-primary-darkBlue font-medium  cursor-pointer py-3">
          <span>
            <HelpCircle className="w-5 h-5" />
          </span>
          <span
            className={`min-w-[10rem] max-lg:hidden  ${!IsOpen && "hidden"}`}
          >
            Help
          </span>
        </li>
      </ul>
    </aside>
  );
};
export default DashboardSidebar;
