'use client';
import "./globals.css";
import FooterComponent from "@/app/components/footer";
import Template from "@/app/template";
import MyHeaderComponent from "@/app/components/myheader";
import React from "react";
import { usePathname } from "next/navigation";
import { DM_Sans } from "next/font/google";
import {
    ClerkProvider,
    SignInButton,
    SignUpButton,
    SignedIn,
    SignedOut,
    UserButton,
} from '@clerk/nextjs'

const poppins = DM_Sans({ subsets: ["latin"], weight: ['400'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
    const pathName = usePathname();

    return (
        <html lang="en" className={'!scroll-smooth'}>
        <head>
            <title>MVIT</title>
        </head>
        <body className={`${poppins.className}`}>
        <ClerkProvider>
            <Template>
                {!pathName?.startsWith('/mvut') && !pathName?.startsWith('/mvit-dashboard') && (
                    <MyHeaderComponent />
                )}
                {children}
                {!pathName?.startsWith('/mvut') && !pathName?.startsWith('/mvit-dashboard') && (
                    <FooterComponent />
                )}
            </Template>
            </ClerkProvider>
        </body>
        </html>
    );
}