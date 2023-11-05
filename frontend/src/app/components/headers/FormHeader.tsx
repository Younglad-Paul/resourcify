import Link from "next/link";
import Image from "next/image";
import logo from "../../../../public/images/logo.png";

type Label = {
  label: String;
};

const FormHeader = ({ label }: Label) => {
  return (
    <header className="flex items-center md:px-0 px-5 justify-between">
      <Link href="/">
        <Image
          src={logo}
          alt={"logo"}
          priority
          className="md:w-[9.1rem] w-[7rem]"
        />
      </Link>
      <h1 className="md:text-[2.5rem] sm:text-[1.7rem] capitalize text-[1.1rem] text-primary ">
        {label}
      </h1>
      <div className="w-[10rem] md:block hidden">&nbsp;</div>
    </header>
  );
};
export default FormHeader;
