"use client";

import AppProvider from "@/context/AppContext";
import { store } from "@/redux/store";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <Provider store={store}>
        <AppProvider>{children}</AppProvider>
      </Provider>
    </SessionProvider>
  );
}
