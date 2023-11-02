"use client";

import Container from "./ui/Container";
import logo from "../../../public/images/logo.png";
import Image from "next/image";
import { navLinks } from "@/lib/Links";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useActiveSectionContext } from "@/context/activeSection";
import { Menu, X } from "lucide-react";
import SlideDownMenu from "./menu/SlideDownMenu";
import { useClickOutside } from "@/lib/hooks";

const Header = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  const { ref } = useClickOutside(closeMenu);

  const handleActiveSection = (label: string) => {
    setActiveSection(label);
    setTimeOfLastClick(Date.now());
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      ref={ref}
      className={`md:px-14 px-5 border-b   bg-white/40 sticky z-20 backdrop-blur-sm top-0 left-0 ${
        isScrolling ? "shadow-xl" : null
      }`}
    >
      <Container>
        <div className="flex transition-all relative items-center justify-between">
          <Link href={"home"} className="">
            <Image
              src={logo}
              alt={"logo"}
              priority
              className={`transition-all h-full object-cover ${
                isScrolling ? "w-[5rem]" : "w-[9rem]"
              }`}
            />
          </Link>

          <nav className="lg:block  hidden">
            <ul className="flex items-center gap-x-16">
              {navLinks.map((link, i) => {
                const isActive = activeSection === link.label;
                return (
                  <motion.li key={i} className="relative">
                    <Link
                      onClick={() => handleActiveSection(link.label)}
                      href={link.path}
                      className={`hover:text-primary w-full py-3  transition-all ${
                        isActive ? "text-primary" : "null"
                      }`}
                    >
                      {link.label}
                    </Link>
                    {isActive && (
                      <motion.span
                        layoutId="activeSection"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                        className="bg-primary inline-block left-0 top-full h-[.13rem] w-full  absolute "
                      ></motion.span>
                    )}
                  </motion.li>
                );
              })}
            </ul>
          </nav>

          <div className="lg:flex hidden items-center gap-x-10">
            <Link
              href={"#signUpToday"}
              className="bg-primary hover:shadow-2xl hover:-translate-y-1 transition-all text-white px-5 py-3 rounded-[5px]"
            >
              Sign up
            </Link>

            <Link
              href={"#signUpToday"}
              className=" px-5 transition-colors text-primary py-3 rounded-[5px] hover:bg-[#2e68fb15]"
            >
              Sign in
            </Link>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden block"
          >
            {isMenuOpen ? (
              <X className="w-7 h-7" />
            ) : (
              <Menu className="w-7 h-7" />
            )}
          </button>
        </div>

        <SlideDownMenu closeMenu={closeMenu} isMenuOpen={isMenuOpen} />
      </Container>
    </header>
  );
};

export default Header;
