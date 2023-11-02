import {
  AccordionContent,
  AccordionTrigger,
  AccordionItem,
} from "../ui/accordion";

type Props = {
  question: Questions;
  i: number;
};

const SIngleAccordion = ({ question, i }: Props) => {
  return (
    <AccordionItem value={`item ${i}`} className="md:py-4 py-2">
      <AccordionTrigger className="lg:text-2xl sm:text-xl text-[1rem] text-left">
        {question.head}?
      </AccordionTrigger>
      <AccordionContent className="sm:text-xl text-[1rem] ">
        {question.answer}
      </AccordionContent>
    </AccordionItem>
  );
};
export default SIngleAccordion;
