'use client'
import "./globals.css";
import FooterComponent from "@/app/components/footer";
import Template from "@/app/template";
import MyHeaderComponent from "@/app/components/myheader";
import React from "react";
import {usePathname} from "next/navigation";

const poppins = Poppins({ subsets: ["latin"], weight:['400'] });
import {Poppins} from "next/font/google";

export default function RootLayout({children,}: { children: React.ReactNode;}) {
    const pathName = usePathname();
    return (
    <html lang="en" className={'!scroll-smooth'}>
    <head>
        <title>Learn AI with MVIT</title>
    </head>
      <body className={`${poppins.className}`}>
      <Template>
          {!pathName.startsWith('/mvit') && <MyHeaderComponent />}
          {children}
          {!pathName.startsWith('/mvit') && <FooterComponent />}
      </Template>
      </body>
    </html>
  );
}