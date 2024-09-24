import React from "react";
import Link from "next/link";

export default function FacultiesLayout({children,}: { children: React.ReactNode;}) {
    return (
        <div className={'flex flex-col sm:flex-row scroll-auto'}>
            {/*Nav*/}
            <div className={'flex bg-teal-500 w-full text-indigo-900 sm:w-64 flex-col pl-4 py-4'}>
                <h2 className={'text-xl font-bold'}>Faculties</h2>
                <Link href={'/pages/faculty'} className={'hover:text-red-500'}>Research</Link>
                <Link href={'/pages/faculty/departments/appdev'} className={'hover:text-red-500'}>App Development</Link>
                <Link href={'/pages/faculty/departments/ds'} className={'hover:text-red-500'}>Data Science</Link>
                <Link href={'/pages/faculty/departments/CS'} className={'hover:text-red-500'}>Computer Science</Link>
                <Link href={'/pages/faculty/departments/se'} className={'hover:text-red-500'}>Software Engineering</Link>
                <Link href={'/pages/faculty/departments/biotech'} className={'hover:text-red-500'}>Biotechnology</Link>
                <Link href={'/pages/faculty/departments/math'} className={'hover:text-red-500'}>Mathematics</Link>
                <Link href={'/pages/faculty/departments/phy'} className={'hover:text-red-500'}>Physics</Link>
                <Link href={'/pages/faculty/departments/eng'} className={'hover:text-red-500'}>English</Link>
                <Link href={'/pages/faculty/departments/management'} className={'hover:text-red-500'}>Management</Link>
                <Link href={'/pages/faculty/departments/leadership'} className={'hover:text-red-500'}>Leadership</Link>
                <Link href={'/pages/faculty/departments/sociology'} className={'hover:text-red-500'}>Sociology</Link>
                <Link href={'/pages/faculty/departments/interdisp'} className={'hover:text-red-500'}>Interdisciplinary</Link>
            </div>
            {/*Main*/}
            <div>
                {children}
            </div>
        </div>
    );
}