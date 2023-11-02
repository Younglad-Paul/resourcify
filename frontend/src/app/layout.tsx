import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from "./Header/page";
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Resourcify',
  description: 'Empowering Financial Efficiency and Employee Satisfaction',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        </body>
    </html>
  )
}
