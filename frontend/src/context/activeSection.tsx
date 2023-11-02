"use client";

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

type ActiveSectionType = {
  activeSection: string;
  setActiveSection: Dispatch<SetStateAction<string>>;
  timeOfLastClick: number;
  setTimeOfLastClick: Dispatch<SetStateAction<number>>;
};

const ActiveContext = createContext<ActiveSectionType | null>(null);

const ActiveSectionProvider = ({ children }: { children: ReactNode }) => {
  const [activeSection, setActiveSection] = useState<string>("Home");
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);

  return (
    <ActiveContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveContext.Provider>
  );
};

export const useActiveSectionContext = () => {
  const context = useContext(ActiveContext);
  if (context === null) {
    throw new Error("useActive must be used within an ActiveSectionProvider");
  }
  return context;
};

export default ActiveSectionProvider;
