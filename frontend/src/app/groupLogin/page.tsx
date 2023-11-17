import Link from "next/link";
import Container from "../components/ui/Container";
import FormHeader from "../components/headers/FormHeader";
import SignInForm from "../components/organizationForms/SignInForm";
import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Resourcify | Organization Sign In",
  description: "Empowering Financial Efficiency and Employee Satisfaction",
};

const GroupSignIn = () => {
  return (
    <main
      style={{ backgroundImage: "url(./images/watermark.png)" }}
      className="sm:bg-[#2E68FB17] bg-white pb-7  min-h-screen"
    >
      <Container>
        <FormHeader label={"Organization"} />

        <section className="px-8 ">
          <SignInForm />
          <h4 className="sm:text-lg text-base text-center sm:py-8 py-3">
            <span className="text-black/95"> Don’t have an account? </span>
            <Link href={"/groupSignUp"} className="text-primary">
              Sign Up
            </Link>
          </h4>
        </section>
      </Container>
    </main>
  );
};
export default GroupSignIn;
