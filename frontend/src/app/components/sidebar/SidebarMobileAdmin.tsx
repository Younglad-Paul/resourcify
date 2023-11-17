"use client";

import { adminLinks } from "@/lib/Links";
import { HelpCircle, LogOut, Store, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../../public/images/logo.png";
import { Button } from "../ui/button";
import { useAppContext } from "@/context/AppContext";
import { usePathname } from "next/navigation";

const SidebarAdminMobile = () => {
  const { isSidebarOpen, toggleSidebar } = useAppContext();
  const pathname = usePathname();

  return (
    <>
      <div
        onClick={toggleSidebar}
        className={`w-screen h-screen sm:hidden block z-20  bg-white/80 transition duration-150 fixed top-0 left-0 ${
          isSidebarOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      ></div>
      <aside
        className={`transition-all duration-300 sm:hidden block fixed overflow-y-scroll 
       overflow-x-hidden    h-screen left-0 top-0 bg-white z-20
       ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
      `}
      >
        <div className="border-b px-3 py-3  flex items-center">
          <Link href={"/"}>
            <Image src={Logo} priority alt={"logo"} className="w-20 h-20" />
          </Link>

          <h1 className={`text-primary-darkBlue   font-bold text-[1.1rem] `}>
            Resourcify
          </h1>

          <Button onClick={toggleSidebar} variant={"ghost"} className="ms-auto">
            <X />
          </Button>
        </div>

        <ul className="mt-[2rem] space-y-3 px-5 ">
          <li className="w-full flex  overflow-hidden  items-center  gap-x-4 bg-lightBlue py-3  cursor-pointer px-5 rounded-2xl border border-blue-400/50">
            <span className="min-w-[2.5rem] h-10 grid place-items-center bg-primary rounded-full ">
              <Store className="w-5 h-5 text-white" />
            </span>

            <div className={`text-center  min-w-[10rem] overflow-x-clip  `}>
              <h3 className="text-primary-darkBlue text-clip">
                Account number
              </h3>
              <h5 className="text-[0.6875rem] text-clip text-[#0000ff89]">
                0013 7788 3214 091
              </h5>
            </div>
          </li>
        </ul>

        <nav className="">
          <ul className="mt-20 ">
            {adminLinks.map((link, i) => {
              const active = pathname === link.path;

              return (
                <li key={i} className="relative overflow-hidden ">
                  <Link
                    onClick={toggleSidebar}
                    href={link.path}
                    className={`flex hover:text-primary gap-x-8 items-center px-8  font-medium  py-3 ${
                      active && "text-primary"
                    } `}
                  >
                    <span>{link.icon}</span>
                    <span className={`capitalize min-w-[10rem] `}>
                      {link.label}{" "}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
          <ul className="mt-[8rem]">
            <li className="flex gap-x-8  overflow-hidden  hover:text-primary px-8 items-center text-primary-darkBlue font-medium  cursor-pointer py-3">
              <span>
                <LogOut className="w-5 h-5" />
              </span>
              <span className={` min-w-[10rem]`}>Sign Out</span>
            </li>
            <li className="flex  hover:text-primary gap-x-8 px-8 items-center text-primary-darkBlue font-medium  cursor-pointer py-3">
              <span>
                <HelpCircle className="w-5 h-5" />
              </span>
              <span className={`min-w-[10rem] `}>Help</span>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
};
export default SidebarAdminMobile;
