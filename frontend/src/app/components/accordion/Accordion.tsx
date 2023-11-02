"use client";

import { accordionQuestions } from "@/lib/data";
import { Accordion } from "../ui/accordion";
import Container from "../ui/Container";
import SIngleAccordion from "./SIngleAccordion";
import { useSectionInView } from "@/lib/hooks";

const AccordionContainer = () => {
  const { ref } = useSectionInView("Faq");

  return (
    <Container>
      <section ref={ref} id="faq" className="py-16 px-6 scroll-mt-20">
        <div className="bg-[#2E68FB17] rounded-xl md:px-14 px-4 py-8">
          <h1 className="primary-heading text-center">
            frequently asked questions
          </h1>
          <Accordion type="single" collapsible className="w-full mt-16">
            {accordionQuestions.map((question, i: number) => {
              return <SIngleAccordion key={i} question={question} i={i} />;
            })}
          </Accordion>
        </div>
      </section>
    </Container>
  );
};
export default AccordionContainer;
