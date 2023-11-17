"use client";

import { motion } from "framer-motion";

import { adminLinks } from "@/lib/Links";
import { ChevronRight, HelpCircle, Store } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import SignoutSideBar from "./SignoutSideBar";
import Logo from "../../../../public/images/logo.png";
import Image from "next/image";

const AdminSidebar = () => {
  const pathname = usePathname();
  const [IsOpen, setIsOpen] = useState<boolean>(true);

  return (
    <aside
      className={`asidebar  sm:block hidden   transition-all duration-300  z-20 sticky overflow-y-scroll  overflow-x-hidden   h-screen   left-0 top-0 ${
        IsOpen ? " lg:w-[18rem] w-[8rem]" : "w-[8rem]"
      }`}
    >
      <span
        onClick={() => setIsOpen(!IsOpen)}
        className="absolute lg:grid hidden  cursor-pointer bg-primary w-9 h-9 shadow-xl shadow-black/50  place-items-center rounded-full right-2  bottom-16  z-20"
      >
        <ChevronRight
          className={`text-white transition duration-150 ${
            IsOpen ? "rotate-180" : " rotate-0"
          }`}
        />
      </span>

      <div className="border-b px-6 py-3  flex items-center">
        <Link href={"/"}>
          <Image src={Logo} priority alt={"logo"} className="w-20 h-20" />
        </Link>
        {IsOpen && (
          <h1
            className={`text-primary-darkBlue max-lg:hidden  font-bold text-[1.4rem] origin-left`}
          >
            Resourcify
          </h1>
        )}
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
      </ul>

      <nav className="">
        <ul className="mt-20 ">
          {adminLinks.map((link, i) => {
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
        </ul>
        <ul className="mt-[8rem]">
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
      </nav>
    </aside>
  );
};
export default AdminSidebar;
