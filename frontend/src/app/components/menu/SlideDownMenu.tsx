import { navLinks } from "@/lib/Links";
import Link from "next/link";
import { motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";

type Props = {
  isMenuOpen: boolean;
  closeMenu: () => void;
};

const SlideDownMenu = ({ isMenuOpen, closeMenu }: Props) => {
  return (
    <motion.nav
      initial="closed"
      variants={navVariants}
      animate={isMenuOpen ? "open" : "closed"}
      className={`w-full transition-all duration-300 overflow-clip left-0 lg:hidden block absolute shadow-xl bg-white z-10 `}
    >
      <div className="p-6">
        <motion.ul variants={variants}>
          {navLinks.map((link, i) => (
            <motion.li
              variants={variantsChildren}
              key={i}
              className="p-2 text-sm text-gray-900"
            >
              <Link
                onClick={closeMenu}
                href={link.path}
                className="w-full inline-block"
              >
                {link.label}
              </Link>
            </motion.li>
          ))}
        </motion.ul>
        <motion.div variants={variantsChildren} className="flex gap-x-6  mt-4">
          <Link
            href={"/sign up"}
            className="bg-primary  text-sm hover:shadow-2xl hover:-translate-y-1 transition-all text-white px-5 py-2 rounded-[5px]"
          >
            Sign up
          </Link>

          <Link
            href={"/sign in"}
            className=" px-5 transition-colors text-sm text-primary py-2 rounded-[5px] hover:bg-[#2e68fb15]"
          >
            Sign in
          </Link>
        </motion.div>
      </div>
    </motion.nav>
  );
};
export default SlideDownMenu;
// framer Motion animation controls start
const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const navVariants = {
  open: {
    opacity: 1,
    height: "14rem",
    transition: {
      type: "spring",
      stiffness: 60,
      duration: 0.2,
      restDelta: 70,
    },
  },
  closed: {
    opacity: 0,
    height: 0,
    transition: { type: "spring", duration: 0.3, delay: 0.5 },
  },
};

const variantsChildren = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: -50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};
// framer Motion animation controls end
