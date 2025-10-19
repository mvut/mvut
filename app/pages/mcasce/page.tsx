'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
    FaCode,
    FaBrain,
    FaCloud,
    FaCheckCircle,
    FaClock,
    FaRobot,
    FaStar,
} from 'react-icons/fa';
import { MdAnalytics, MdOutlineSmartToy } from 'react-icons/md';
import { TbMathSymbols } from 'react-icons/tb';

type Module = {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    duration: string;
    level: string;
    icon: React.ReactNode;
    skills: string[];
    projects: string[];
};

type Testimonial = {
    id: string;
    name: string;
    role: string;
    company: string;
    content: string;
    outcome: string;
};

const MODULES: Module[] = [
    {
        id: 'fullstack',
        title: 'Full-Stack Software Engineer',
        subtitle: 'End-to-end apps with modern stacks',
        description:
            'Frontend to backend: building scalable web apps using TypeScript, React, and Node.js.',
        duration: '16 weeks',
        level: 'Level-0',
        icon: <FaCode className="text-2xl text-red-400" />,
        skills: ['React', 'TypeScript', 'Node.js', 'REST APIs', 'Testing'],
        projects: ['E-commerce', 'Task Manager'],
    },
    {
        id: 'datascience',
        title: 'Data Science Analyst',
        subtitle: 'Data → insight → action',
        description:
            'Ingest, clean, analyze and visualize data to inform product and business decisions.',
        duration: '16 weeks',
        level: 'Level-1',
        icon: <MdAnalytics className="text-2xl text-green-400" />,
        skills: ['Python', 'Pandas', 'SQL', 'Viz', 'Stats'],
        projects: ['Sales Forecasting', 'Segmentation'],
    },
    {
        id: 'mlengineer',
        title: 'Machine Learning Systems Engineer',
        subtitle: 'Production ML systems',
        description:
            'Train, evaluate, and deploy models with reliability and observability in mind.',
        duration: '16 weeks',
        level: 'Level-2',
        icon: <FaBrain className="text-2xl text-indigo-400" />,
        skills: ['TensorFlow/PyTorch', 'Pipelines', 'CI/CD', 'Feature Eng.'],
        projects: ['Recommender', 'Fraud Detection'],
    },
    {
        id: 'dlresearch',
        title: 'Deep Learning Research Engineer',
        subtitle: 'New architectures & experiments',
        description:
            'Implement research ideas, reproduce papers and prototype novel models.',
        duration: '16 weeks',
        level: 'Level-3',
        icon: <TbMathSymbols className="text-2xl text-pink-400" />,
        skills: ['PyTorch', 'Transformers', 'Research Methods'],
        projects: ['Image Gen', 'NLP Tasks'],
    },
    {
        id: 'aiarchitect',
        title: 'AI Solutions Architect',
        subtitle: 'Design enterprise AI systems',
        description:
            'Architect multi-service AI systems for scale, security and maintainability.',
        duration: '16 weeks',
        level: 'Level-4',
        icon: <FaCheckCircle className="text-2xl text-yellow-400" />,
        skills: ['System Design', 'Microservices', 'Security'],
        projects: ['AI CRM', 'Analytics Platform'],
    },
    {
        id: 'cloudai',
        title: 'Cloud AI Infrastructure',
        subtitle: 'Infra for ML at scale',
        description:
            'Cloud platforms, IaC, orchestration and cost-aware deployments for ML workloads.',
        duration: '16 weeks',
        level: 'Level-5',
        icon: <FaCloud className="text-2xl text-cyan-400" />,
        skills: ['Kubernetes', 'Docker', 'AWS/GCP', 'Monitoring'],
        projects: ['Auto-scaling ML infra'],
    },
];

const TESTIMONIALS: Testimonial[] = [
    {
        id: 't1',
        name: 'Daha Qalbi',
        role: 'MERN Developer',
        company: 'CodingVerse',
        content:
            'MCASCE’s project-first labs and mentorship helped me lead real AI initiatives with confidence.',
        outcome: 'Promoted to Lead AI Engineer in 3 months',
    },
    {
        id: 't2',
        name: 'Samina Hassan',
        role: 'Full-Stack Developer',
        company: 'MVITech',
        content:
            'From Python basics to production ML — the program’s depth accelerated my career.',
        outcome: 'Deployed 3 production ML systems',
    },
    {
        id: 't3',
        name: 'Shahpara Safdar',
        role: 'Researcher',
        company: 'MVITech',
        content:
            'The blend of research and engineering enabled me to publish and ship products.',
        outcome: 'Published research with an industry partner',
    },
];

const levelBadge = (level: string) => {
    const map: Record<string, string> = {
        'Level-0': 'bg-sky-900/40 text-sky-200',
        'Level-1': 'bg-emerald-900/40 text-emerald-200',
        'Level-2': 'bg-violet-900/40 text-violet-200',
        'Level-3': 'bg-pink-900/40 text-pink-200',
        'Level-4': 'bg-yellow-900/40 text-yellow-200',
        'Level-5': 'bg-rose-900/40 text-rose-200',
    };
    return map[level] ?? 'bg-gray-800 text-gray-200';
};

export default function MCASCEPage(): JSX.Element {
    const [tab, setTab] = useState<'overview' | 'modules' | 'outcomes' | 'testimonials'>(
        'overview'
    );
    const [idx, setIdx] = useState(0);

    // auto-rotate testimonials
    useEffect(() => {
        const t = setInterval(() => setIdx((i) => (i + 1) % TESTIMONIALS.length), 5500);
        return () => clearInterval(t);
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-950 to-black text-gray-100 antialiased">
            {/* Header / Hero */}
            <header className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    <div>
            <span className="inline-block px-3 py-1 rounded-full bg-red-600/20 text-red-300 text-xs font-semibold">
              MVIT Certified
            </span>
                        <h1 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
                            MCASCE — Autonomous Systems & Cloud Engineer
                        </h1>
                        <p className="mt-4 text-gray-300 max-w-2xl">
                            A hands-on, integrated 24-month pathway that builds engineers who can research, ship,
                            and operate AI systems at scale.
                        </p>

                        <div className="mt-6 flex flex-wrap gap-3">
                            <Link
                                href="/pages/apply"
                                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-red-500 to-rose-500 px-5 py-2 text-sm font-semibold"
                            >
                                Enroll Now
                            </Link>
                            <Link
                                href="#modules"
                                className="inline-flex items-center gap-2 rounded-full border border-gray-700 px-5 py-2 text-sm text-gray-300 hover:bg-gray-900"
                            >
                                View Curriculum
                            </Link>
                        </div>

                        <div className="mt-8 grid grid-cols-3 gap-6 max-w-md">
                            <div>
                                <div className="text-2xl font-bold">6</div>
                                <div className="text-sm text-gray-400">Modules</div>
                            </div>
                            <div>
                                <div className="text-2xl font-bold">2100+</div>
                                <div className="text-sm text-gray-400">Learning Hours</div>
                            </div>
                            <div>
                                <div className="text-2xl font-bold">50+</div>
                                <div className="text-sm text-gray-400">Labs</div>
                            </div>
                        </div>
                    </div>

                    {/* Compact Modules summary */}
                    <aside className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6">
                        <h3 className="font-semibold text-lg mb-3">Integrated Pathway</h3>
                        <ul className="space-y-3">
                            {MODULES.slice(0, 4).map((m) => (
                                <li
                                    key={m.id}
                                    className="flex items-center justify-between gap-3 bg-gray-800/40 p-3 rounded-lg"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 flex items-center justify-center rounded-md bg-gradient-to-tr from-red-600 to-black">
                                            {m.icon}
                                        </div>
                                        <div>
                                            <div className="text-sm font-medium">{m.title}</div>
                                            <div className="text-xs text-gray-400">{m.duration}</div>
                                        </div>
                                    </div>
                                    <span className={`text-xs px-2 py-1 rounded ${levelBadge(m.level)}`}>
                    {m.level}
                  </span>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-6 text-center">
                            <Link href="#modules" className="text-sm font-semibold text-rose-400 hover:underline">
                                See full modules →
                            </Link>
                        </div>
                    </aside>
                </div>
            </header>

            {/* Tabs */}
            <nav className="max-w-7xl mx-auto px-6">
                <div className="flex gap-2 bg-gray-900/30 rounded-full p-1 w-fit">
                    {(['overview', 'modules', 'outcomes', 'testimonials'] as const).map((tKey) => (
                        <button
                            key={tKey}
                            onClick={() => setTab(tKey)}
                            className={`px-4 py-2 text-sm rounded-full transition ${
                                tab === tKey ? 'bg-rose-600 text-white' : 'text-gray-300 hover:bg-white/5'
                            }`}
                            aria-pressed={tab === tKey}
                        >
                            {tKey.charAt(0).toUpperCase() + tKey.slice(1)}
                        </button>
                    ))}
                </div>
            </nav>

            {/* Content */}
            <main className="max-w-7xl mx-auto px-6 py-12">
                {/* Overview */}
                {tab === 'overview' && (
                    <section aria-labelledby="overview-title" className="space-y-6">
                        <h2 id="overview-title" className="text-2xl font-bold">
                            Program Snapshot
                        </h2>
                        <p className="text-gray-300 max-w-3xl">
                            MCASCE combines software engineering, data science, ML systems, research, architecture,
                            and cloud infrastructure into one coherent pathway. Emphasis on deployed projects,
                            reproducible experiments, and engineering best practices.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                            <div className="bg-gray-900/40 rounded-xl p-5 text-center">
                                <div className="text-3xl font-bold">Hands-on</div>
                                <div className="text-sm text-gray-400 mt-1">Project-driven labs & team sprints</div>
                            </div>
                            <div className="bg-gray-900/40 rounded-xl p-5 text-center">
                                <div className="text-3xl font-bold">Mentored</div>
                                <div className="text-sm text-gray-400 mt-1">Weekly 1:1 reviews & code audits</div>
                            </div>
                            <div className="bg-gray-900/40 rounded-xl p-5 text-center">
                                <div className="text-3xl font-bold">Deployable</div>
                                <div className="text-sm text-gray-400 mt-1">Production-grade systems & observability</div>
                            </div>
                        </div>
                    </section>
                )}

                {/* Modules */}
                {tab === 'modules' && (
                    <section id="modules" aria-labelledby="modules-title" className="space-y-8">
                        <h2 id="modules-title" className="text-2xl font-bold">
                            Learning Modules — concise overview
                        </h2>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            {MODULES.map((m, i) => (
                                <motion.article
                                    key={m.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.07 }}
                                    className="bg-gray-900/40 border border-gray-800 rounded-2xl p-5"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="flex-none w-12 h-12 rounded-md bg-gradient-to-tr from-rose-600 to-black flex items-center justify-center">
                                            {m.icon}
                                        </div>
                                        <div className="min-w-0">
                                            <div className="flex items-center justify-between">
                                                <h3 className="text-lg font-semibold">{m.title}</h3>
                                                <span className={`text-xs px-2 py-1 rounded ${levelBadge(m.level)}`}>
                          {m.level}
                        </span>
                                            </div>
                                            <p className="text-sm text-gray-300 mt-2">{m.subtitle}</p>
                                            <p className="text-xs text-gray-400 mt-3">{m.description}</p>

                                            <div className="mt-4 flex flex-wrap gap-2">
                                                {m.skills.slice(0, 6).map((s) => (
                                                    <span key={s} className="text-xs bg-gray-800 px-2 py-1 rounded">
                            {s}
                          </span>
                                                ))}
                                            </div>

                                            <div className="mt-4 flex items-center justify-between">
                                                <div className="text-xs text-gray-400 flex items-center gap-2">
                                                    <FaClock className="text-rose-400" /> <span>{m.duration}</span>
                                                </div>
                                                <Link
                                                    href={`/modules/${m.id}`}
                                                    className="text-xs font-semibold text-rose-400 hover:underline"
                                                >
                                                    View details →
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </motion.article>
                            ))}
                        </div>
                    </section>
                )}

                {/* Outcomes */}
                {tab === 'outcomes' && (
                    <section aria-labelledby="outcomes-title" className="space-y-6">
                        <h2 id="outcomes-title" className="text-2xl font-bold">
                            Career Outcomes
                        </h2>

                        <p className="text-gray-300 max-w-3xl">
                            Graduates move into roles such as AI Engineer, Cloud Architect, ML Specialist and Data
                            Scientist — with practical experience in building, deploying, and operating real systems.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                            {[
                                { title: 'AI Engineer', salary: '95k–180k', growth: '+32% YoY' },
                                { title: 'Cloud Architect', salary: '120k–220k', growth: '+28% YoY' },
                                { title: 'ML Specialist', salary: '110k–200k', growth: '+35% YoY' },
                                { title: 'Data Scientist', salary: '90k–170k', growth: '+25% YoY' },
                            ].map((r) => (
                                <div
                                    key={r.title}
                                    className="bg-gradient-to-tr from-gray-900/60 to-black border border-gray-800 rounded-2xl p-6 text-center"
                                >
                                    <div className="text-lg font-bold">{r.title}</div>
                                    <div className="text-rose-400 font-medium mt-2">{r.salary}</div>
                                    <div className="text-sm text-gray-400 mt-1">{r.growth}</div>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Testimonials */}
                {tab === 'testimonials' && (
                    <section aria-labelledby="testimonials-title" className="space-y-6">
                        <h2 id="testimonials-title" className="text-2xl font-bold">
                            Graduate Success
                        </h2>

                        <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6">
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-tr from-rose-500 to-amber-400 flex items-center justify-center">
                                    <FaRobot className="text-white" />
                                </div>

                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="flex gap-1">
                                            {Array.from({ length: 5 }).map((_, i) => (
                                                <FaStar key={i} className="text-yellow-400" />
                                            ))}
                                        </div>
                                        <div className="text-xs text-gray-400">Real outcomes from grads</div>
                                    </div>

                                    <blockquote className="italic text-gray-200">
                                        “{TESTIMONIALS[idx].content}”
                                    </blockquote>

                                    <div className="mt-3 font-semibold">{TESTIMONIALS[idx].name}</div>
                                    <div className="text-sm text-gray-400">
                                        {TESTIMONIALS[idx].role} — {TESTIMONIALS[idx].company}
                                    </div>
                                    <div className="mt-2 text-rose-400 font-medium">→ {TESTIMONIALS[idx].outcome}</div>

                                    <div className="mt-4 flex items-center gap-2">
                                        {TESTIMONIALS.map((_, i) => (
                                            <button
                                                key={i}
                                                aria-label={`Show testimonial ${i + 1}`}
                                                onClick={() => setIdx(i)}
                                                className={`w-2 h-2 rounded-full transition ${
                                                    i === idx ? 'bg-rose-400' : 'bg-gray-600'
                                                }`}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {/* Universal CTA */}
                <section className="mt-12">
                    <div className="bg-gradient-to-tr from-gray-900 to-black border border-gray-800 rounded-2xl p-8 text-center">
                        <h3 className="text-xl font-bold">Ready to build production AI systems?</h3>
                        <p className="text-gray-300 mt-2">Apply to the next MCASCE cohort — seats are limited.</p>
                        <div className="mt-6 flex justify-center gap-4">
                            <Link
                                href="/pages/apply"
                                className="rounded-full bg-rose-500 px-6 py-2 font-semibold text-white hover:opacity-95"
                            >
                                Apply Now
                            </Link>
                        </div>
                        <div className="mt-4 text-xs text-gray-500">
                            24-month program • Part-time options • Career support included
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
