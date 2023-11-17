import Link from "next/link";
import FormHeader from "../components/headers/FormHeader";
// import SignUpForm from "../components/organizationForms/SignUpForm";
import Container from "../components/ui/FormWrapper";
import { Metadata } from "next";
import { InputForm } from "../components/organizationForms/SignUpForm";

export const metadata: Metadata = {
  title: "Resourcify | Organization Sign Up",
  description: "Empowering Financial Efficiency and Employee Satisfaction",
};

const GroupSignUp = () => {
  return (
    <main
      style={{ backgroundImage: "url(./images/watermark.png)" }}
      className="sm:bg-[#2E68FB17] bg-white pb-7  min-h-screen"
    >
      <Container>
        <FormHeader label={"Organization"} />
        <section className="px-8 ">
          <InputForm />
          <h4 className="sm:text-lg text-base text-center sm:py-8 py-3">
            <span className="text-black/95"> have an account? </span>
            <Link href={"/groupLogin"} className="text-primary">
              Login
            </Link>
          </h4>
        </section>
      </Container>
    </main>
  );
};
export default GroupSignUp;
