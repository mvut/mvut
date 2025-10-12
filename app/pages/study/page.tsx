'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Montserrat } from 'next/font/google';
import { GrCertificate } from 'react-icons/gr';
import { FaChalkboardTeacher, FaSearch, FaCode, FaUsers, FaRocket } from 'react-icons/fa';
import { SiHiveBlockchain } from 'react-icons/si';

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400', '600', '700'],
});

type Program = {
    title: string;
    subtitle: string;
    link: string;
    icon: React.ReactNode;
    gradient: string;
};

type Skill = {
    name: string;
    desc: string;
    icon: React.ReactNode;
};

const PROGRAMS: Program[] = [
    {
        title: 'MCASCE — Autonomous Systems & Cloud',
        subtitle: 'AI + Cloud + Robotics: hands-on integration & deployment.',
        link: '/pages/mcasce',
        icon: <GrCertificate className="text-6xl md:text-7xl" />,
        gradient: 'from-indigo-700 to-black',
    },
    {
        title: 'K.G. STEM Entrepreneurs',
        subtitle: 'Playful STEM & early entrepreneurship for young learners.',
        link: '/pages/kg-ai',
        icon: <FaChalkboardTeacher className="text-6xl md:text-7xl" />,
        gradient: 'from-blue-600 to-cyan-800',
    },
    {
        title: 'Research',
        subtitle: 'Methodology → experiments → publishable output.',
        link: '/pages/research',
        icon: <FaSearch className="text-6xl md:text-7xl" />,
        gradient: 'from-gray-700 to-slate-900',
    },
];

const SKILLS: Skill[] = [
    { name: 'Problem Solving', desc: 'Practical problem breakdown & coding solutions.', icon: <FaCode className="text-3xl" /> },
    { name: 'Collaboration', desc: 'Team projects with peer code reviews.', icon: <FaUsers className="text-3xl" /> },
    { name: 'Innovation', desc: 'Prototype fast, test often, iterate.', icon: <FaRocket className="text-3xl" /> },
    { name: 'Emerging Tech', desc: 'Cloud, edge, and decentralized systems.', icon: <SiHiveBlockchain className="text-3xl" /> },
];

const METRICS = [
    { value: '5,000+', label: 'Students Trained' },
    { value: '1,200+', label: 'Projects Shipped' },
    { value: '92%', label: 'Employment Rate' },
    { value: '10,000+', label: 'Community Members' },
];

const cardMotion = {
    hidden: { opacity: 0, y: 18 },
    visible: (i = 1) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, type: 'spring', stiffness: 110 } }),
    hover: { scale: 1.025, y: -6, transition: { duration: 0.25 } },
};

export default function StudyPrograms(): JSX.Element {
    return (
        <main className={`min-h-screen bg-gradient-to-b from-gray-950 to-black text-white ${montserrat.className}`}>
            {/* Hero */}
            <section className="py-20 px-6 text-center">
                <motion.h1 initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-4xl mx-auto text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                    Programs Engineered for Tomorrow&apos;s Trailblazers
                </motion.h1>
                <p className="mt-4 text-sm text-gray-300 max-w-2xl mx-auto">
                    A project-first pathways that combine practical skills, mentorship, and deployment experience.
                </p>
            </section>

            {/* Programs */}
            {/* === Redesigned Program Cards Section === */}
            <section className="px-6 pb-20 max-w-7xl mx-auto">
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                    {PROGRAMS.map((p, idx) => (
                        <motion.article
                            key={p.title}
                            custom={idx}
                            initial="hidden"
                            whileInView="visible"
                            whileHover="hover"
                            variants={cardMotion}
                            className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br ${p.gradient} p-[1px] shadow-xl hover:shadow-2xl transition`}
                        >
                            <div className="relative h-full flex flex-col justify-between bg-black/70 rounded-3xl backdrop-blur-md p-6">
                                {/* Header Badge */}
                                <div className="absolute top-4 right-4">
            <span className="text-[10px] uppercase tracking-wide bg-white/20 px-3 py-1 rounded-full text-gray-100">
              {idx === 1 ? 'Popular' : 'Certified'}
            </span>
                                </div>

                                {/* Icon + Title */}
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-white/10 rounded-2xl text-5xl text-white">
                                        {p.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white">{p.title}</h3>
                                        <p className="text-sm text-gray-300 mt-1">{p.subtitle}</p>
                                    </div>
                                </div>

                                {/* Divider */}
                                <div className="my-6 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                                {/* Highlights */}
                                <ul className="space-y-2 text-sm text-gray-200">
                                    <li className="flex items-center gap-2">
                                        <span className="text-green-400">•</span> Hands-on Projects
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-blue-400">•</span> Live Mentorship
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-purple-400">•</span> Certification Included
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-yellow-400">•</span> Portfolio-Based Learning
                                    </li>
                                </ul>

                                {/* Footer CTA */}
                                <div className="mt-8 flex items-center justify-between">
                                    <Link
                                        href={p.link}
                                        className="relative inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-semibold text-white bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-500 hover:to-orange-400 transition-all duration-300 shadow-lg"
                                    >
                                        Explore Program
                                    </Link>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </section>


            {/* Skills */}
            <section className="px-6 pb-12 border-t border-white/6">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 items-stretch px-4 py-10">
                    {SKILLS.map((s, i) => (
                        <motion.div
                            key={s.name}
                            initial={{ opacity: 0, y: 14 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.08 }}
                            className="rounded-2xl bg-white/3 p-5 text-center"
                            role="article"
                        >
                            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-md bg-gradient-to-tr from-red-600 to-black text-white mb-3">
                                {s.icon}
                            </div>
                            <h4 className="font-semibold">{s.name}</h4>
                            <p className="mt-1 text-xs text-gray-200">{s.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Metrics */}
            <section className="px-6 py-12">
                <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                    {METRICS.map((m, i) => (
                        <motion.div key={m.label} initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.08 }} className="p-6 rounded-xl bg-white/4">
                            <div className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">{m.value}</div>
                            <div className="mt-2 text-xs text-gray-300">{m.label}</div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </main>
    );
}
