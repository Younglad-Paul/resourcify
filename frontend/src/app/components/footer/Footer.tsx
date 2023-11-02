import Link from "next/link";
import logo from "../../../../public/images/logo2.png";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="relative py-16 px-11 grid place-items-center  bg-gradient-to-tr  bg-[#00205B]">
      <div className="custom-shape-divider-top-1698835758">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <div className="">
       <Link href={"/"}>
        <Image src={logo} 
        alt={"logo"} 
        className="md:w-auto mx-auto w-[9rem]" />
       </Link>
        <ul className="flex gap-x-10 items-center md:mt-2 mt-1">
          <li className="text-white/60 text-base">
            <Link href={"#"}>Services</Link>
          </li>
          <li className="text-white/60 text-base">
            <Link href={"#"}>About</Link>
          </li>
          <li className="text-white/60 text-base">
            <Link href={"#"}>Help</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};
export default Footer;
