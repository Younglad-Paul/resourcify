"use client";

import {
  Dispatch,
  MouseEventHandler,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

type AppTypes = {
  isSidebarOpen: boolean;
  toggleSidebar: MouseEventHandler<
    HTMLButtonElement | HTMLDivElement | HTMLAnchorElement
  >;
};

const AppContext = createContext<AppTypes | null>(null);

const AppProvider = ({ children }: { children: ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <AppContext.Provider value={{ isSidebarOpen, toggleSidebar }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === null) {
    throw new Error("useActive must be used within an AppProvider");
  }
  return context;
};

export default AppProvider;
