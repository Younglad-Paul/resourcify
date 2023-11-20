'use client'
import Link from "next/link";
import { motion } from "framer-motion";
import { employeeNavLinks } from "@/lib/Links";
import { usePathname } from "next/navigation";

const Nav = () => {
  const pathname = usePathname();

  return (
    <div className='fixed bg-white w-full pl-6 h-8 z-[999]'>
      <nav>
        <ul className="flex">
          {employeeNavLinks.map((link, i) => {
            const active = pathname === link.path;

            return (
              <motion.li key={i}>
                <Link href={link.path}>
                  <div
                    className={`flex hover:text-primary font-medium pr-4 ${
                      active
                        ? "text-primary"
                        : "text-primary-darkBlue"
                    }`}
                  >
                    {link.label}
                  </div>
                </Link>

                {active && (
                  <motion.span
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                    
                  ></motion.span>
                )}
              </motion.li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
