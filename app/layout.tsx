import type { Metadata } from "next";
import { Saira } from "next/font/google";
import "./globals.css";
import NavbarComponent from "@/app/components/navbar";
import FooterComponent from "@/app/components/footer";
import Template from "@/app/template";
// Saira, Ubuntu
const inter = Saira({ subsets: ["latin"], weight:['400'] });

export const metadata: Metadata = {
  title: "MVIT",
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
      <Template>
      <NavbarComponent/>
      {children}
      <FooterComponent/>
    </Template>
      </body>

    </html>
  );
}
