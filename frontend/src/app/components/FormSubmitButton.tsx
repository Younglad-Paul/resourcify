import { Button } from "./ui/button";

interface Prop {
  pending: boolean;
  text: string;
}

const FormSubmitButton = ({ pending }: Prop) => {
  return (
    <Button
      type="submit"
      disabled={pending}
      className="sm:text-lg text-base  mx-auto  py-6  mt-6 w-full text-white disabled:cursor-not-allowed"
    >
      {pending ? (
        <span className="border-b-2 border-r-2 border-white block rounded-full w-4 h-4 animate-spin mr-7"></span>
      ) : (
        "Sign up"
      )}
    </Button>
  );
};
export default FormSubmitButton;
