import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ActiveSectionProvider from "@/context/activeSection";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Resourcify',
  description: 'Empowering Financial Efficiency and Employee Satisfaction',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={inter.className}>
        <ActiveSectionProvider>{children}</ActiveSectionProvider>
      </body>
    </html>
  );
}
