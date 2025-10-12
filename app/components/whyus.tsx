// components/WhyMVIT.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
    GiArchiveResearch,
    GiBookshelf,
    GiGlobe,
    GiGraduateCap,
    GiTeacher,
    GiFamilyHouse,
} from 'react-icons/gi';
import { FaLaptopCode, FaHandsHelping, FaUserFriends, FaChild } from 'react-icons/fa';
import { MdWork, MdOutlineSecurity } from 'react-icons/md';
import { Montserrat } from 'next/font/google';
import Link from 'next/link';

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400', '600', '700'],
});

type Feature = {
    id: string;
    icon: React.ReactNode;
    title: string;
    short: string;
};

const FEATURES: Feature[] = [
    { id: 'afford', icon: <GiBookshelf size={28} />, title: 'Affordable', short: 'High-value learning with low fees.' },
    { id: 'code', icon: <FaLaptopCode size={28} />, title: 'Code-first', short: 'Practical coding from day one.' },
    { id: 'global', icon: <GiGlobe size={28} />, title: 'Global Peers', short: 'Collaborate with international learners.' },
    { id: 'research', icon: <GiArchiveResearch size={28} />, title: 'Applied Research', short: 'Solve real problems, publishable outputs.' },
    { id: 'faculty', icon: <GiTeacher size={28} />, title: 'Expert Mentors', short: 'Industry mentors + teacher coaching.' },
    { id: 'career', icon: <MdWork size={28} />, title: 'Job-Ready', short: 'Interview prep + placement support.' },
    { id: 'collab', icon: <FaUserFriends size={28} />, title: 'Team Projects', short: 'Cross-discipline project teams.' },
    { id: 'curriculum', icon: <GiGraduateCap size={28} />, title: 'Relevant Syllabus', short: 'Updated to match hiring needs.' },
    { id: 'support', icon: <FaHandsHelping size={28} />, title: 'Mentor Support', short: 'Regular code reviews & 1:1 help.' },
    { id: 'secure', icon: <MdOutlineSecurity size={28} />, title: 'Ethical & Safe', short: 'Privacy-aware, secure learning.' },
    { id: 'kids', icon: <FaChild size={28} />, title: 'Early STEM', short: 'Playful AI basics for young kids.' },
    { id: 'parents', icon: <GiFamilyHouse size={28} />, title: 'Parent Resources', short: 'Guides to support learning at home.' },
];

const container = {
    hidden: { opacity: 0, y: 8 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.08 } },
};

const item = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 110, damping: 16 } },
};

export default function WhyMVIT(): JSX.Element {
    return (
        <section
            aria-labelledby="why-mvit-title"
            className={`py-14 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-black via-gray-900 to-black text-white ${montserrat.className}`}
        >
            <div className="mx-auto max-w-7xl">
                <motion.h2
                    id="why-mvit-title"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center text-3xl sm:text-4xl font-bold tracking-tight"
                >
                    MVIT — at a glance
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.15 }}
                    className="mx-auto mt-3 max-w-2xl text-center text-sm text-gray-300"
                >
                    Concise strengths designed to produce job-ready, ethical, and creative AI & tech practitioners.
                </motion.p>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"
                >
                    {FEATURES.map((f) => (
                        <motion.article
                            key={f.id}
                            variants={item}
                            className="flex items-start gap-4 rounded-lg bg-white/5 p-4 backdrop-blur-sm ring-1 ring-white/6 hover:scale-[1.03] transition-transform"
                            role="group"
                            aria-labelledby={`feature-${f.id}-title`}
                        >
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-tr from-red-600 to-black text-white flex-none">
                                {f.icon}
                            </div>

                            <div className="min-w-0">
                                <h3 id={`feature-${f.id}-title`} className="text-sm font-semibold text-white">
                                    {f.title}
                                </h3>
                                <p className="mt-1 text-xs text-gray-300">{f.short}</p>
                            </div>
                        </motion.article>
                    ))}
                </motion.div>

                <div className="mt-8 flex justify-center">
                    <Link
                        href="/pages/study"
                        className="inline-flex items-center gap-2 rounded-full bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-lg hover:bg-red-500 transition"
                        aria-label="Explore MVIT Programs"
                    >
                        Explore Programs
                    </Link>
                </div>
            </div>
        </section>
    );
}
