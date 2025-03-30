'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import {
    FaRobot,
    FaDatabase,
    FaNetworkWired,
    FaDna,
    FaBrain,
    FaLock,
    FaCloud,
    FaCodeBranch,
    FaMicrochip,
    FaChartLine,
    FaLaptopCode,
    FaProjectDiagram,
    FaRegLightbulb,
    FaCube,
    FaUserGraduate,
    FaUsers,
    FaSyncAlt,
    FaServer,
    FaFilm,
    FaBookOpen,
    FaChartBar,
    FaFileAlt,
    FaAward,
    FaTrophy,
    FaLightbulb,
    FaGlobe,
    FaUniversity,
    FaHandshake
} from 'react-icons/fa';
import { Oswald, Raleway, Playfair_Display } from 'next/font/google';

// Load Google Fonts
const oswald = Oswald({
    subsets: ['latin'],
    weight: ['400', '600', '700'],
    variable: '--font-oswald'
});

const raleway = Raleway({
    subsets: ['latin'],
    weight: ['400', '500', '700'],
    variable: '--font-raleway'
});

const playfair = Playfair_Display({
    subsets: ['latin'],
    weight: ['400', '600', '700'],
    variable: '--font-playfair'
});

export default function ResearchPage() {
    return (
        <div className={`flex flex-col min-h-screen bg-gradient-to-br from-black via-red-900 to-red-800 ${raleway.className}`}>
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent opacity-80 z-0"></div>

            {/* Main Content */}
            <div className="relative z-10">
                {/* Research Overview Section */}
                <div className="py-20 px-4 sm:px-8 lg:px-16">
                    {/* Header Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h1 className={`text-4xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600 mb-6 ${playfair.className}`}>
                            Research & Innovation
                        </h1>
                        <p className="text-lg sm:text-xl text-red-200 max-w-4xl mx-auto">
                            Pioneering discoveries and technological breakthroughs that shape the future
                        </p>
                    </motion.div>

                    {/* MVIT Research Overview */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24"
                    >
                        {/* Research Description */}
                        <div className="bg-black/50 backdrop-blur-md rounded-xl border-l-4 border-red-600 p-8 shadow-2xl hover:shadow-red-900/50 transition-all duration-500">
                            <h2 className={`text-3xl font-bold text-white mb-6 ${oswald.className}`}>Research Excellence</h2>
                            <p className="text-red-100 mb-6 leading-relaxed">
                                At MVIT, we&apos;re redefining the boundaries of knowledge through interdisciplinary research that addresses global challenges. Our research ecosystem combines academic rigor with real-world impact, fostering innovation across multiple domains.
                            </p>

                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-xl font-semibold text-red-300 mb-3">Strategic Focus Areas</h3>
                                    <ul className="space-y-3 text-red-100">
                                        <li className="flex items-start">
                                            <span className="text-red-400 mr-2">▹</span>
                                            <span><strong>Industry 4.0:</strong> Integrating AI, IoT and robotics to revolutionize manufacturing with 15+ industry partners</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-red-400 mr-2">▹</span>
                                            <span><strong>Healthcare Innovation:</strong> Developing next-gen medical devices and AI diagnostics with 8 clinical trials underway</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-red-400 mr-2">▹</span>
                                            <span><strong>Sustainable Cities:</strong> Implementing smart infrastructure solutions in 5 pilot cities worldwide</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-red-400 mr-2">▹</span>
                                            <span><strong>Climate Resilience:</strong> Leading 12 projects on renewable energy and carbon capture technologies</span>
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold text-red-300 mb-3">Research Impact</h3>
                                    <div className="grid grid-cols-2 gap-4 text-red-100">
                                        <div className="bg-red-900/30 p-3 rounded-lg">
                                            <div className="text-2xl font-bold text-white">150+</div>
                                            <div className="text-sm">Peer-reviewed publications</div>
                                        </div>
                                        <div className="bg-red-900/30 p-3 rounded-lg">
                                            <div className="text-2xl font-bold text-white">$100k+</div>
                                            <div className="text-sm">Research funding secured</div>
                                        </div>
                                        <div className="bg-red-900/30 p-3 rounded-lg">
                                            <div className="text-2xl font-bold text-white">25</div>
                                            <div className="text-sm">Patents filed</div>
                                        </div>
                                        <div className="bg-red-900/30 p-3 rounded-lg">
                                            <div className="text-2xl font-bold text-white">50+</div>
                                            <div className="text-sm">Industry collaborations</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Research Highlights */}
                        <div className="space-y-8">
                            {/* Featured Projects */}
                            <div className="bg-gradient-to-br from-red-900/50 to-black/50 backdrop-blur-md rounded-xl p-8 border border-red-800/50 shadow-lg hover:shadow-red-900/30 transition-all duration-500">
                                <h3 className={`text-2xl font-bold text-white mb-6 flex items-center gap-3 ${oswald.className}`}>
                                    <FaProjectDiagram className="text-red-400" /> Featured Research Projects
                                </h3>
                                <div className="space-y-4">
                                    <div className="p-4 bg-black/30 rounded-lg border-l-2 border-red-600 hover:bg-red-900/20 transition-colors">
                                        <h4 className="font-semibold text-white">AI-Powered Precision Medicine</h4>
                                        <p className="text-sm text-red-200 mt-1">Developing machine learning models for personalized cancer treatment</p>
                                    </div>
                                    <div className="p-4 bg-black/30 rounded-lg border-l-2 border-red-600 hover:bg-red-900/20 transition-colors">
                                        <h4 className="font-semibold text-white">Quantum Computing Algorithms</h4>
                                        <p className="text-sm text-red-200 mt-1">Pioneering new approaches to optimization problems</p>
                                    </div>
                                    <div className="p-4 bg-black/30 rounded-lg border-l-2 border-red-600 hover:bg-red-900/20 transition-colors">
                                        <h4 className="font-semibold text-white">Smart Urban Mobility</h4>
                                        <p className="text-sm text-red-200 mt-1">Implementing AI-driven traffic management systems</p>
                                    </div>
                                </div>
                            </div>

                            {/* Recent Publications */}
                            <div className="bg-gradient-to-br from-red-900/50 to-black/50 backdrop-blur-md rounded-xl p-8 border border-red-800/50 shadow-lg hover:shadow-red-900/30 transition-all duration-500">
                                <h3 className={`text-2xl font-bold text-white mb-6 flex items-center gap-3 ${oswald.className}`}>
                                    <FaBookOpen className="text-red-400" /> Recent Publications
                                </h3>
                                <div className="space-y-3">
                                    <a href="#" className="group block">
                                        <div className="p-3 hover:bg-red-900/20 rounded-lg transition-colors">
                                            <h4 className="font-medium text-white group-hover:text-red-300">&quot;Neural Architecture Search for Edge Devices&quot; - Nature AI</h4>
                                            <p className="text-xs text-red-300 mt-1">Dr. Smith et al. | January 2024</p>
                                        </div>
                                    </a>
                                    <a href="#" className="group block">
                                        <div className="p-3 hover:bg-red-900/20 rounded-lg transition-colors">
                                            <h4 className="font-medium text-white group-hover:text-red-300">&quot;Blockchain for Secure Medical Records&quot; - IEEE Transactions</h4>
                                            <p className="text-xs text-red-300 mt-1">Dr. Johnson et al. | December 2023</p>
                                        </div>
                                    </a>
                                    <a href="#" className="group block">
                                        <div className="p-3 hover:bg-red-900/20 rounded-lg transition-colors">
                                            <h4 className="font-medium text-white group-hover:text-red-300">&quot;Climate Modeling with Quantum ML&quot; - Science Advances</h4>
                                            <p className="text-xs text-red-300 mt-1">Dr. Lee et al. | November 2023</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Emerging Technologies Section */}
                <div className="py-20 bg-gradient-to-b from-black to-red-900/30">
                    <div className="px-4 sm:px-8 lg:px-16">
                        {/* Section Title */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-center mb-16"
                        >
                            <h2 className={`text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600 mb-4 ${playfair.className}`}>
                                Cutting-Edge Research Domains
                            </h2>
                            <p className="text-lg text-red-200 max-w-3xl mx-auto">
                                Exploring the frontiers of technology and science to solve tomorrow&apos;s challenges
                            </p>
                        </motion.div>

                        {/* Technologies Grid */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                        >
                            {[
                                {
                                    name: 'Artificial Intelligence',
                                    icon: <FaRobot className="w-8 h-8" />,
                                    description: 'Developing advanced AI systems for automation, decision-making, and human-machine collaboration',
                                    stats: '12 ongoing projects'
                                },
                                {
                                    name: 'Quantum Computing',
                                    icon: <FaCube className="w-8 h-8" />,
                                    description: 'Pioneering quantum algorithms and hardware for next-generation computation',
                                    stats: '3 patents pending'
                                },
                                {
                                    name: 'Biotechnology',
                                    icon: <FaDna className="w-8 h-8" />,
                                    description: 'Engineering biological systems for healthcare and environmental applications',
                                    stats: '8 clinical trials'
                                },
                                {
                                    name: 'Cybersecurity',
                                    icon: <FaLock className="w-8 h-8" />,
                                    description: 'Developing next-gen encryption and threat detection systems',
                                    stats: '5 industry partners'
                                },
                                {
                                    name: 'Data Science',
                                    icon: <FaDatabase className="w-8 h-8" />,
                                    description: 'Extracting insights from complex datasets to drive innovation',
                                    stats: '20+ publications'
                                },
                                {
                                    name: 'Robotics',
                                    icon: <FaMicrochip className="w-8 h-8" />,
                                    description: 'Building intelligent autonomous systems for diverse applications',
                                    stats: '4 prototypes'
                                },
                                {
                                    name: 'Clean Energy',
                                    icon: <FaRegLightbulb className="w-8 h-8" />,
                                    description: 'Developing sustainable energy solutions for a greener future',
                                    stats: '3 field tests'
                                },
                                {
                                    name: 'Neuroscience',
                                    icon: <FaBrain className="w-8 h-8" />,
                                    description: 'Mapping the brain and developing neuro-technologies',
                                    stats: '2 grants awarded'
                                },
                                {
                                    name: 'Blockchain',
                                    icon: <FaCodeBranch className="w-8 h-8" />,
                                    description: 'Creating decentralized solutions for secure transactions',
                                    stats: '6 implementations'
                                },
                                {
                                    name: 'IoT Systems',
                                    icon: <FaNetworkWired className="w-8 h-8" />,
                                    description: 'Connecting smart devices for intelligent environments',
                                    stats: '5 pilot cities'
                                },
                                {
                                    name: 'Nanotechnology',
                                    icon: <FaSyncAlt className="w-8 h-8" />,
                                    description: 'Engineering at the molecular scale for breakthrough materials',
                                    stats: '3 lab prototypes'
                                },
                                {
                                    name: 'Space Tech',
                                    icon: <FaGlobe className="w-8 h-8" />,
                                    description: 'Developing technologies for space exploration and satellite systems',
                                    stats: '2 NASA collaborations'
                                }
                            ].map((tech, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ y: -5 }}
                                    className="bg-black/50 backdrop-blur-sm rounded-xl border border-red-900/50 p-6 hover:bg-red-900/20 hover:border-red-700 transition-all duration-300 shadow-lg hover:shadow-red-900/30"
                                >
                                    <div className="text-red-400 mb-4">
                                        {tech.icon}
                                    </div>
                                    <h3 className={`text-xl font-bold text-white mb-2 ${oswald.className}`}>{tech.name}</h3>
                                    <p className="text-red-100 text-sm mb-3">{tech.description}</p>
                                    <p className="text-xs text-red-400 font-medium">{tech.stats}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>

                {/* Awards and Recognition Section */}
                <div className="py-20 px-4 sm:px-8 lg:px-16">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="bg-gradient-to-br from-red-900/40 to-black/70 backdrop-blur-lg rounded-2xl overflow-hidden shadow-2xl"
                    >
                        <div className="grid md:grid-cols-2">
                            <div className="p-10 md:p-12 lg:p-16 bg-red-900/10">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="p-3 bg-red-600 rounded-full">
                                        <FaTrophy className="text-2xl text-white" />
                                    </div>
                                    <h2 className={`text-3xl md:text-4xl font-bold text-white ${playfair.className}`}>
                                        Awards & Recognition
                                    </h2>
                                </div>
                                <p className="text-red-100 mb-8 leading-relaxed">
                                    Our groundbreaking research has been honored by prestigious institutions worldwide, recognizing our contributions to advancing science and technology.
                                </p>
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="mt-1 text-red-400">
                                            <FaAward />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-white">2024 Global Innovation Award</h3>
                                            <p className="text-sm text-red-200">For revolutionary work in quantum computing applications</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="mt-1 text-red-400">
                                            <FaAward />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-white">Best Research Institution 2023</h3>
                                            <p className="text-sm text-red-200">Recognized by the International Science Foundation</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="mt-1 text-red-400">
                                            <FaAward />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-white">5 IEEE Fellows</h3>
                                            <p className="text-sm text-red-200">Our faculty honored for exceptional contributions</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-10 md:p-12 lg:p-16 bg-black/40">
                                <div className="h-full flex flex-col justify-center">
                                    <h3 className={`text-2xl font-bold text-white mb-6 ${oswald.className}`}>Notable Achievements</h3>
                                    <div className="space-y-8">
                                        <div className="flex gap-4">
                                            <div className="flex-shrink-0">
                                                <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center">
                                                    <span className="text-white font-bold">1</span>
                                                </div>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-white">Top 1% Most Cited</h4>
                                                <p className="text-sm text-red-200 mt-1">5 researchers in global citation rankings</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-4">
                                            <div className="flex-shrink-0">
                                                <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center">
                                                    <span className="text-white font-bold">25</span>
                                                </div>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-white">Patents Awarded</h4>
                                                <p className="text-sm text-red-200 mt-1">In cutting-edge technologies since 2025</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-4">
                                            <div className="flex-shrink-0">
                                                <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center">
                                                    <span className="text-white font-bold">50+</span>
                                                </div>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-white">Industry Partnerships</h4>
                                                <p className="text-sm text-red-200 mt-1">Translating research into real-world solutions</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Future Initiatives Section */}
                <div className="pb-20 px-4 sm:px-8 lg:px-16">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="bg-gradient-to-br from-black/70 to-red-900/40 backdrop-blur-lg rounded-2xl overflow-hidden shadow-2xl border border-red-900/50"
                    >
                        <div className="p-10 md:p-12 lg:p-16">
                            <div className="text-center max-w-4xl mx-auto">
                                <div className="inline-flex items-center justify-center p-4 bg-red-600/20 rounded-full mb-6">
                                    <FaLightbulb className="text-3xl text-red-400" />
                                </div>
                                <h2 className={`text-3xl md:text-4xl font-bold text-white mb-6 ${playfair.className}`}>
                                    Shaping the Future
                                </h2>
                                <p className="text-lg text-red-200 mb-10">
                                    We&apos;re building the research infrastructure of tomorrow with ambitious initiatives that push boundaries and create new possibilities.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {[
                                    {
                                        title: "Global Research Network",
                                        description: "Establishing 5 international research hubs for collaborative innovation",
                                        icon: <FaGlobe className="text-2xl text-red-400" />,
                                        status: "Phase 1 underway"
                                    },
                                    {
                                        title: "Quantum Research Center",
                                        description: "Building state-of-the-art facilities for quantum computing development",
                                        icon: <FaCube className="text-2xl text-red-400" />,
                                        status: "Planning stage"
                                    },
                                    {
                                        title: "AI for Social Good",
                                        description: "Launching initiatives applying AI to global challenges like climate and healthcare",
                                        icon: <FaRobot className="text-2xl text-red-400" />,
                                        status: "Accepting proposals"
                                    },
                                    {
                                        title: "Interdisciplinary Labs",
                                        description: "Creating spaces where engineers, scientists and designers collaborate",
                                        icon: <FaUniversity className="text-2xl text-red-400" />,
                                        status: "2 labs operational"
                                    },
                                    {
                                        title: "Startup Incubator",
                                        description: "Supporting research commercialization with funding and mentorship",
                                        icon: <FaRegLightbulb className="text-2xl text-red-400" />,
                                        status: "Launching Q3 2024"
                                    },
                                    {
                                        title: "Industry Alliance Program",
                                        description: "Expanding partnerships with Fortune 500 technology leaders",
                                        icon: <FaHandshake className="text-2xl text-red-400" />,
                                        status: "15 partners joined"
                                    }
                                ].map((initiative, index) => (
                                    <motion.div
                                        key={index}
                                        whileHover={{ scale: 1.03 }}
                                        className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-red-900/50 hover:border-red-700 transition-all"
                                    >
                                        <div className="mb-4">
                                            {initiative.icon}
                                        </div>
                                        <h3 className={`text-xl font-bold text-white mb-2 ${oswald.className}`}>{initiative.title}</h3>
                                        <p className="text-red-100 text-sm mb-3">{initiative.description}</p>
                                        <div className="text-xs font-medium text-red-400 bg-red-900/30 px-3 py-1 rounded-full inline-block">
                                            {initiative.status}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}