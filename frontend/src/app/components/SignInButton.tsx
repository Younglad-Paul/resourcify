"use client";

import { useSession, signOut, signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { redirect } from "next/navigation";
import { useToast } from "./ui/use-toast";

const SiginButton = () => {
  const { data: session } = useSession();
  const { toast } = useToast();

  if (session && session.user) {
    redirect("/dashboards");
  }

  return (
    <div
      onClick={() => signIn()}
      className="bg-[#2E68FB17] hover:shadow-xl transition-shadow duration-300 text-center grid place-items-center mx-auto py-3 px-5 text-black/90 rounded-md"
    >
      <button className="flex gap-x-6 items-center sm:text-lg text-sm">
        <FcGoogle /> <span>Sign up with Google</span>
      </button>
    </div>
  );
};
export default SiginButton;
