'use client'
import type { Metadata } from "next";
import "./globals.css";
import FooterComponent from "@/app/components/footer";
import Template from "@/app/template";
import MyHeaderComponent from "@/app/components/myheader";
import React from "react";
import {usePathname} from "next/navigation";

const inter = PT_Sans({ subsets: ["latin"], weight:['400'] });
import {Mada, Milonga, Open_Sans, PT_Sans, Saira} from "next/font/google";
// export const metadata: Metadata = {
//   title: "MVIT",
//   description: "Mansha Institute of Technologies (MVIT) is a beacon of excellence in technology education, empowering individuals to unlock their full potential. " +
//       "By offering comprehensive programs in Computer Science from primary to PhD levels, MVIT fosters a culture of logical inquiry, human compassion, and intelligent innovation. " +
//       "With a focus on academic excellence, integrity, and empathy, MVIT produces well-rounded professionals equipped to drive technological progress and positively impact society." +
//       " Through its certifications and non-academic degrees, MVIT bridges the gap between theory and practice, preparing students for successful careers and lifelong learning. " +
//       "By joining MVIT, individuals become part of a vibrant community that values diversity, creativity, and entrepreneurship, shaping the next generation of technology leaders.",
// };


export default function RootLayout({children,}: { children: React.ReactNode;}) {
    const pathName = usePathname();
    return (
    <html lang="en" className={'scroll-smooth'}>
    <head>
        <title>MVIT</title>
    </head>
      <body className={inter.className}>
      <Template>
          {!pathName.startsWith('/mvit') && <MyHeaderComponent />}
          {children}
          {!pathName.startsWith('/mvit') && <FooterComponent />}

          {/*{pathName !=='/mvit'?<FooterComponent />:null}*/}
      </Template>
      </body>
    </html>
  );
}