"use client";
import React, { useState } from "react";
import Link from "next/link";
import FormHeader from "../components/headers/FormHeader";
import Container from "../components/ui/Container";
import SignInForm from "../components/individualForms/SignInForm";

const Signin = () => {
  return (
    <main
      style={{ backgroundImage: "url(./images/watermark.png)" }}
      className="sm:bg-[#2E68FB17] bg-white pb-7  min-h-screen"
    >
      <Container>
        <FormHeader label="individual" />

        <section className="px-8 ">
          <SignInForm />

          <h4 className="sm:text-lg text-base text-center sm:py-8 py-3">
            <span className="text-black/95"> Don’t have an account? </span>
            <Link href={"/Signup"} className="text-primary">
              Sign Up
            </Link>
          </h4>
        </section>
      </Container>
    </main>
  );
};

export default Signin;
