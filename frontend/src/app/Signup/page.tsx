import React from "react";
import Link from "next/link";
import Container from "../components/ui/Container";
import FormHeader from "../components/headers/FormHeader";

import SignUpForm from "../components/individualForms/SignUpForm";

const Signup = () => {
  return (
    <main
      style={{ backgroundImage: "url(./images/watermark.png)" }}
      className="sm:bg-[#2E68FB17] bg-white pb-7  min-h-screen"
    >
      <Container>
        <FormHeader label="individual" />

        <section className="px-8 ">
          <SignUpForm />
          <h4 className="sm:text-lg text-base text-center sm:py-8 py-3">
            <span className="text-black/95"> Have an account? </span>
            <Link href={"/Signin"} className="text-primary">
              Login
            </Link>
          </h4>
        </section>
      </Container>
    </main>
  );
};

export default Signup;
