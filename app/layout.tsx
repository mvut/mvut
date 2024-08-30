import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import NavbarComponent from "@/app/components/navbar";

const inter = Ubuntu({ subsets: ["latin"], weight:['400'] });

export const metadata: Metadata = {
  title: "MVUT",
  description: "Empowering People",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={'scroll-smooth'}>

      <body className={inter.className}>
      <NavbarComponent/>

      {children}
      </body>
    </html>
  );
}
