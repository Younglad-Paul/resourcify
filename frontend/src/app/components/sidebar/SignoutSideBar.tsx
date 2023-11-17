import { LogOut } from "lucide-react";
import { useSession, signOut, signIn } from "next-auth/react";
import { redirect } from "next/navigation";
import { useToast } from "../ui/use-toast";

type Prop = {
  isOpen: boolean;
};

const SignoutSideBar = ({ isOpen }: Prop) => {
  const { data: session } = useSession();
  const { toast } = useToast();

  // if (!session?.user) {
  //   toast({
  //     description: "Logged Out",
  //   });
  //   redirect("/");
  // }

  return (
    <li
      onClick={() => signOut()}
      className="flex gap-x-8  overflow-hidden  hover:text-primary px-11 items-center text-primary-darkBlue font-medium  cursor-pointer py-3"
    >
      <span>
        <LogOut className="w-5 h-5" />
      </span>
      <span className={`max-lg:hidden  min-w-[10rem] ${!isOpen && "hidden"}`}>
        Sign Out
      </span>
    </li>
  );
};
export default SignoutSideBar;
