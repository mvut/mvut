'use client'
import "./globals.css";
import FooterComponent from "@/app/components/footer";
import Template from "@/app/template";
import MyHeaderComponent from "@/app/components/myheader";
import React from "react";
import {usePathname} from "next/navigation";

const poppins = DM_Sans({ subsets: ["latin"], weight:['400'] });
import {DM_Sans} from "next/font/google";
import {GrAnnounce} from "react-icons/gr";

export default function RootLayout({children,}: { children: React.ReactNode;}) {
    const pathName = usePathname();
    return (
    <html lang="en" className={'!scroll-smooth'}>
    <head>
        <title>MVIT</title>
    </head>
    <body className={`${poppins.className}`}>
    <Template>
        {!pathName.startsWith('/mvut') && <MyHeaderComponent/>}
        {children}
        {!pathName.startsWith('/mvut') && <FooterComponent/>}
    </Template>
    </body>
    </html>
    );
}