import Hero from "./components/hero/Hero";
import Offer from "./components/offer/Offer";
import SectionSignUp from "./components/sectionSignUp/SectionSignUp";
import AccordionContainer from "./components/accordion/Accordion";
import Header from "./components/Header";
import React from "react";
import Footer from "./components/footer/Footer";

export default function Home() {
   <React.Fragment>
      <Header />
      <main>
        <Hero />
        <Offer />
        <SectionSignUp />
        <AccordionContainer />
      </main>
      <Footer />
    </React.Fragment>
  );
}
