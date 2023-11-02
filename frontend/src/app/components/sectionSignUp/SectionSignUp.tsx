import Container from "../ui/Container";
import { Button } from "../ui/button";
import img1 from "../../../../public/images/sign1.png";
import img2 from "../../../../public/images/frame.png";
import Image from "next/image";
import Link from "next/link";

const SectionSignUp = () => {
  return (
    <section className="py-12 xl:px-28 px-8" id="signUpToday">
      <Container>
        <h1 className="primary-heading text-center">sign up today</h1>
        <div className="xl:mt-20 mt-10  flex xl:items-start xl:flex-row flex-col gap-y-20  xl:justify-between items-center">
          <div className="md:w-[33rem]">
            <p className="leading-[2.25rem]">
              Join us in simplifying your reimbursement process and elevating
              your HR experience. Sign up now and experience the ease and
              efficiency of our Expense Reimbursement Platform.
            </p>

            <h2 className="md:text-[2rem] text-[1.2rem] font-bold   xl:mt-[6rem] mt-[2rem]">
              Sign up today as
            </h2>

            <div className="mt-9  flex  mobile-l:flex-row flex-col items-center  gap-x-[3rem] gap-y-4 ">
              <Button asChild className="bg-primary w-full py-6 px-12 ">
                <Link href={"/OSignin"}>An Organization</Link>
              </Button>
              <Button
                asChild
                className="bg-[#00205B] w-full py-6 px-12 hover:bg-[#00205bd4]"
              >
                <Link href={"/Signin"}>An Individual</Link>
              </Button>
            </div>
          </div>

          <div className="relative z-10 sm:block hidden">
            <Image src={img1} alt={"img1"} />
            <Image
              src={img2}
              alt={"img1"}
              className="absolute -top-7 -left-9 -z-10"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};
export default SectionSignUp;
