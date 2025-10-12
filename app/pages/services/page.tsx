'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import MVITLogo from '@/public/mvutflame.png';

// icons (keep only those used to reduce bundle)
import { FaReact, FaRobot, FaSchool, FaUniversity, FaCloud, FaServer, FaQuoteLeft, FaUserTie, FaMobile, FaDesktop, FaLaptopCode } from 'react-icons/fa';
import { RiNextjsFill } from 'react-icons/ri';
import { SiTypescript, SiTailwindcss, SiTensorflow, SiPytorch, SiMongodb, SiPostgresql, SiDocker, SiKubernetes } from 'react-icons/si';

// ---------- Types ----------
type Category = 'development' | 'ai' | 'education' | 'enterprise';

type Service = {
    id: string;
    title: string;
    description: string;
    features: string[];
    icon: React.ComponentType<any>;
    category: Category;
};

type Technology = { name: string; icon: React.ComponentType<any>; category: string };

type Testimonial = { quote: string; name: string; position: string; company: string };

// ---------- Data (kept local for single-file demo) ----------
const SERVICES: Service[] = [
    { id: 'web', title: 'Custom Web Development', description: 'Fast, accessible, scalable web apps using modern tools.', features: ['Next.js + React', 'TypeScript', 'PWA', 'SEO'], icon: FaReact, category: 'development' },
    { id: 'mobile', title: 'Mobile Apps', description: 'Cross-platform mobile apps that feel native.', features: ['React Native', 'Performance focused', 'Push notifications'], icon: FaMobile, category: 'development' },
    { id: 'desktop', title: 'Desktop Apps', description: 'Electron and native desktop solutions.', features: ['Auto-updates', 'Native integrations'], icon: FaDesktop, category: 'development' },

    { id: 'agents', title: 'AI Agents', description: 'Conversational and autonomous agents for automation.', features: ['NLP', 'Conversational flows', 'Deployable agents'], icon: FaRobot, category: 'ai' },
    { id: 'ml', title: 'Machine Learning', description: 'Custom ML models from research to production.', features: ['TensorFlow / PyTorch', 'Model serving', 'Monitoring'], icon: FaLaptopCode, category: 'ai' },

    { id: 'school', title: 'School Programs', description: 'Fun and practical STEM for K-12.', features: ['Scratch', 'Robotics basics', 'Game dev'], icon: FaSchool, category: 'education' },
    { id: 'uni', title: 'University Curriculum', description: 'Industry-aligned university courses and capstones.', features: ['Capstones', 'Industry mentors'], icon: FaUniversity, category: 'education' },

    { id: 'enterprise', title: 'Enterprise Software', description: 'Scalable solutions with strong security and SLA.', features: ['Microservices', 'High-availability', 'Observability'], icon: FaServer, category: 'enterprise' },
    { id: 'devops', title: 'DevOps & Cloud', description: 'CI/CD, infra as code and cloud migrations.', features: ['K8s', 'IaC', 'Monitoring'], icon: FaCloud, category: 'enterprise' }
];

const TECHNOLOGIES: Technology[] = [
    { name: 'TypeScript', icon: SiTypescript, category: 'languages' },
    { name: 'React', icon: FaReact, category: 'frontend' },
    { name: 'Next.js', icon: RiNextjsFill, category: 'frontend' },
    { name: 'Tailwind', icon: SiTailwindcss, category: 'frontend' },
    { name: 'TensorFlow', icon: SiTensorflow, category: 'ai-ml' },
    { name: 'PyTorch', icon: SiPytorch, category: 'ai-ml' },
    { name: 'MongoDB', icon: SiMongodb, category: 'database' },
    { name: 'Postgres', icon: SiPostgresql, category: 'database' },
    { name: 'Docker', icon: SiDocker, category: 'devops' },
    { name: 'Kubernetes', icon: SiKubernetes, category: 'devops' }
];

const TESTIMONIALS: Testimonial[] = [
    { quote: 'The AI agent we got handled 80% of queries and improved satisfaction significantly.', name: 'Sarah J.', position: 'Ops Director', company: 'Retail Co.' },
    { quote: 'Students transitioned to jobs quickly after the MVIT program.', name: 'Dr. M. Chen', position: 'Dean', company: 'State University' }
];

// ---------- Motion variants ----------
const fadeUp = { hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } };

// ---------- Small UI components ----------
const Tag: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <span className="px-2 py-0.5 text-xs rounded-full bg-white/6 border border-white/8 text-blue-100">{children}</span>
);

function IconWrap({ Icon, size = 28 }: { Icon: React.ComponentType<any>; size?: number }) {
    return <Icon className="flex-shrink-0" style={{ width: size, height: size }} />;
}

// Service Card
const ServiceCard: React.FC<{ service: Service }> = ({ service }) => (
    <motion.article
        initial="hidden"
        whileInView="show"
        variants={fadeUp}
        viewport={{ once: true }}
        className="group bg-gradient-to-br from-black/20 to-black/10 border border-blue-800 backdrop-blur-sm rounded-2xl p-5 hover:scale-[1.01] transition-transform"
    >
        <div className="flex items-start gap-4">
            <div className="text-cyan-300 text-3xl">
                <service.icon />
            </div>
            <div>
                <h3 className="text-lg font-semibold text-white">{service.title}</h3>
                <p className="text-sm text-blue-200 mt-1">{service.description}</p>
            </div>
        </div>

        <ul className="mt-4 text-sm text-blue-100 space-y-2">
            {service.features.map((f, i) => (
                <li key={i} className="flex items-start gap-2">
                    <span className="text-cyan-300">•</span>
                    <span>{f}</span>
                </li>
            ))}
        </ul>

        <div className="mt-4 flex justify-end">
            <button className="text-sm px-3 py-1 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500">Learn More</button>
        </div>
    </motion.article>
);

// ---------- Main Page ----------
export default function ServicesPage() {
    const [mounted, setMounted] = useState(false);
    const [query, setQuery] = useState('');
    const [active, setActive] = useState<'all' | Category | 'search'>('all');

    useEffect(() => setMounted(true), []);

    const categories: ({ id: string; label: string })[] = [
        { id: 'all', label: 'All' },
        { id: 'development', label: 'Development' },
        { id: 'ai', label: 'AI' },
        { id: 'education', label: 'Education' },
        { id: 'enterprise', label: 'Enterprise' }
    ];

    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase();
        if (q) {
            return SERVICES.filter(s => s.title.toLowerCase().includes(q) || s.description.toLowerCase().includes(q) || s.features.join(' ').toLowerCase().includes(q));
        }
        if (active === 'all') return SERVICES;
        return SERVICES.filter(s => s.category === active);
    }, [query, active]);

    if (!mounted) return <div className="min-h-screen bg-gradient-to-br from-slate-900 via-black to-slate-900" />;

    return (
        <div className="min-h-screen py-12 bg-gradient-to-br from-slate-900 via-black to-slate-900 text-white">
            <div className="container mx-auto px-4 relative z-10">
                <header className="flex items-center justify-between gap-4 mb-10">
                    <div className="flex items-center gap-3">
                        <div className="w-14 h-14 relative rounded-full overflow-hidden bg-white/5 p-2">
                            <Image src={MVITLogo} alt="MVIT" fill className="object-contain" />
                        </div>
                        <div>
                            <h1 className="text-xl md:text-2xl font-bold">MVIT — Technology & Education</h1>
                            <p className="text-xs text-blue-200/80">Empowering communities through technology, AI & learning</p>
                        </div>
                    </div>

                    <div className="hidden md:flex items-center gap-3">
                        <nav className="flex gap-2">
                            {categories.map(c => (
                                <button key={c.id} onClick={() => { setActive(c.id as any); setQuery(''); }} className={`px-3 py-1 rounded-lg text-sm ${active === c.id ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white' : 'bg-black/30 text-blue-200 border border-blue-800'}`}>
                                    {c.label}
                                </button>
                            ))}
                        </nav>
                    </div>
                </header>

                {/* Hero */}
                <section className="text-center mb-8">
                    <motion.h2 initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-3xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-300">
                        Build, Learn, Automate — with MVIT
                    </motion.h2>
                    <p className="text-sm text-blue-200 mt-2 max-w-2xl mx-auto">Custom software, AI agents, and practical education programs built for real outcomes.</p>
                </section>

                {/* Controls */}
                <div className="flex flex-col md:flex-row items-center gap-3 mb-6 justify-between">
                    <div className="w-full md:w-1/2">
                        <input value={query} onChange={e => { setQuery(e.target.value); setActive('search'); }} placeholder="Search services, features or keywords..." className="w-full bg-black/20 border border-blue-800 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500" />
                    </div>

                    <div className="flex gap-3">
                        <button onClick={() => { setQuery(''); setActive('all'); }} className="px-3 py-2 rounded-lg bg-black/30 border border-blue-800 text-sm">Reset</button>
                        <a href="#contact" className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-sm">Contact</a>
                    </div>
                </div>

                {/* Grid */}
                <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    <AnimatePresence mode="popLayout">
                        {filtered.map(s => (
                            <motion.div key={s.id} layout initial={{ opacity: 0, scale: 0.99 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}>
                                <ServiceCard service={s} />
                            </motion.div>
                        ))}

                        {filtered.length === 0 && (
                            <motion.div className="col-span-full text-center text-blue-200/80 p-8 border border-blue-800 rounded-xl" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                                No services found for &quot;{query}&quot;. Try a different keyword or select a category.
                            </motion.div>
                        )}
                    </AnimatePresence>
                </main>

                {/* AI Highlight */}
                <section className="mb-10 bg-gradient-to-r from-black/30 to-black/10 border border-cyan-800 rounded-2xl p-6">
                    <div className="flex flex-col md:flex-row gap-6 items-center">
                        <div className="flex-shrink-0 text-6xl text-cyan-300"><FaRobot /></div>
                        <div>
                            <h3 className="text-xl font-semibold">AI Agents & ML — Production Ready</h3>
                            <p className="text-blue-200 mt-1">Conversational assistants, predictive models, and vision systems that integrate with your business workflows.</p>
                            <div className="mt-3 flex gap-2 flex-wrap">
                                <Tag>Conversational</Tag>
                                <Tag>CV & NLP</Tag>
                                <Tag>Model Monitoring</Tag>
                                <Tag>Deployment</Tag>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Technology Stack */}
                <section className="mb-10">
                    <h4 className="text-lg font-semibold mb-4">Technology highlights</h4>
                    <div className="flex flex-wrap gap-3">
                        {TECHNOLOGIES.map(t => (
                            <div key={t.name} className="flex items-center gap-2 px-3 py-1 rounded-md bg-black/20 border border-blue-800 text-sm">
                                <t.icon />
                                <span className="text-blue-100">{t.name}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Testimonials */}
                <section className="mb-12">
                    <h4 className="text-lg font-semibold mb-4">What people say</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {TESTIMONIALS.map((t, i) => (
                            <motion.blockquote key={i} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="bg-black/20 border border-blue-800 p-4 rounded-xl">
                                <div className="flex items-start gap-3">
                                    <div className="text-2xl text-blue-300"><FaQuoteLeft /></div>
                                    <div>
                                        <p className="text-blue-200 italic">&quot;{t.quote}&quot;</p>
                                        <div className="mt-3 flex items-center gap-3">
                                            <div className="w-9 h-9 rounded-full bg-white/3 flex items-center justify-center"><FaUserTie className="text-blue-300" /></div>
                                            <div>
                                                <div className="font-semibold">{t.name}</div>
                                                <div className="text-xs text-blue-300">{t.position} • {t.company}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.blockquote>
                        ))}
                    </div>
                </section>

                {/* CTA */}
                <section id="contact" className="mb-20 bg-gradient-to-r from-black/30 to-black/10 p-6 rounded-2xl border border-blue-800 text-center">
                    <h4 className="text-xl font-bold mb-2">Ready to start?</h4>
                    <p className="text-blue-200 mb-4">Contact us for a free consult or ask about our trainings and certifications.</p>
                    <div className="flex justify-center gap-3">
                        <a className="px-5 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500" href="mailto:info@mvitech.org">Email Us</a>
                        <a className="px-4 py-2 rounded-lg bg-transparent border border-blue-800" href="#">View Programs</a>
                    </div>
                </section>

            </div>
        </div>
    );
}
