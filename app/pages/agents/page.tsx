'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaRobot, FaBrain, FaCode, FaServer, FaCloud, FaShieldAlt, FaChartLine, FaCogs, FaMicrochip } from 'react-icons/fa';
import { Oswald, Raleway } from 'next/font/google';

// Fonts
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

const solutions = [
    {
        title: "Autonomous Robotics",
        icon: <FaRobot className="text-yellow-500 text-3xl" />,
        description: "Transform your operations with robots that learn and adapt in real-time, reducing errors by up to 99% while increasing throughput.",
        features: [
            "Self-optimizing navigation that improves with each cycle",
            "Real-time object recognition with sub-millisecond latency",
            "Collision prevention that reduces downtime by 40%"
        ]
    },
    {
        title: "Cognitive AI Agents",
        icon: <FaBrain className="text-yellow-500 text-3xl" />,
        description: "AI systems that understand context, make human-like decisions, and continuously improve through experience.",
        features: [
            "Conversational interfaces that understand nuance and intent",
            "Collaborative AI teams that solve complex problems",
            "Predictive analytics with 95% forecast accuracy"
        ]
    },
    {
        title: "Edge AI Robotics",
        icon: <FaMicrochip className="text-yellow-500 text-3xl" />,
        description: "Lightning-fast processing at the source eliminates latency, enabling real-time responses in critical applications.",
        features: [
            "Optimized models that deliver 10x faster inference",
            "Secure local learning without cloud dependence",
            "Hardware acceleration for energy-efficient operation"
        ]
    },
    {
        title: "Cloud Robotics",
        icon: <FaCloud className="text-yellow-500 text-3xl" />,
        description: "Seamlessly coordinate fleets of robots with centralized intelligence that scales on demand.",
        features: [
            "Instant deployment of updates across all devices",
            "Digital twins that mirror physical operations",
            "Global management dashboard with real-time analytics"
        ]
    }
];

const useCases = [
    {
        industry: "Smart Manufacturing",
        applications: [
            "Defect detection with 0.01mm precision",
            "Self-calibrating assembly lines",
            "Predictive maintenance that reduces breakdowns by 70%"
        ],
        icon: <FaCogs className="text-yellow-500 text-4xl mb-4" />
    },
    {
        industry: "Healthcare Innovation",
        applications: [
            "AI-assisted surgical procedures with sub-millimeter accuracy",
            "24/7 patient monitoring with instant alerts",
            "Automated lab processing that triples throughput"
        ],
        icon: <FaShieldAlt className="text-yellow-500 text-4xl mb-4" />
    },
    {
        industry: "Precision Agriculture",
        applications: [
            "Selective harvesting that increases yield by 25%",
            "Real-time crop health analysis",
            "Targeted treatment that reduces chemical use by 60%"
        ],
        icon: <FaChartLine className="text-yellow-500 text-4xl mb-4" />
    },
    {
        industry: "Next-Gen Logistics",
        applications: [
            "Warehouse robots that adapt to layout changes",
            "Autonomous delivery with dynamic routing",
            "Inventory tracking with 99.9% accuracy"
        ],
        icon: <FaServer className="text-yellow-500 text-4xl mb-4" />
    }
];

const stats = [
    { value: "0.5s", label: "Average decision speed" },
    { value: "99.9%", label: "System reliability" },
    { value: "60%", label: "Cost reduction in operations" },
    { value: "3X", label: "Faster deployment cycles" }
];

export default function AISoftwareSolutions() {
    return (
        <div className={`min-h-screen bg-gray-950 text-white ${raleway.className}`}>
            {/* Hero Section */}
            <section className="relative py-32 bg-gradient-to-br from-gray-950 via-yellow-900/30 to-gray-950 overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat opacity-10"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold mb-6 ${oswald.className}`}>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                                Intelligent Robotics Platform
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl text-yellow-200 mb-10 max-w-3xl mx-auto">
                            The most advanced AI-driven robotics system that learns, adapts, and evolves to meet your most complex challenges.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link
                                    href={''}
                                    className="px-8 py-3 bg-yellow-600 hover:bg-yellow-700 text-white font-medium rounded-full transition-all block"
                                >
                                    See Our Solutions
                                </Link>
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link
                                    href={''}
                                    className="px-8 py-3 border-2 border-yellow-600 text-yellow-400 hover:bg-yellow-900/30 font-medium rounded-full transition-all block"
                                >
                                    Schedule Consultation
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Solutions Section */}
            <section id="solutions" className="py-20 bg-gray-950">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${oswald.className}`}>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                                AI-Powered Robotic Solutions
                            </span>
                        </h2>
                        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                            Our modular platform delivers measurable results across every dimension of robotic automation
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {solutions.map((solution, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -10 }}
                                className="bg-gray-900/80 backdrop-blur-sm border border-yellow-900/50 rounded-xl p-6 hover:border-yellow-500 transition-all"
                            >
                                <div className="mb-4">
                                    {solution.icon}
                                </div>
                                <h3 className={`text-xl font-bold mb-3 ${oswald.className}`}>{solution.title}</h3>
                                <p className="text-gray-300 mb-4">{solution.description}</p>
                                <ul className="space-y-2">
                                    {solution.features.map((feature, i) => (
                                        <li key={i} className="flex items-start text-sm text-gray-400">
                                            <span className="text-yellow-500 mr-2">•</span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Use Cases */}
            <section className="py-20 bg-gray-950">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${oswald.className}`}>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                                Industry-Specific Implementations
                            </span>
                        </h2>
                        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                            Proven solutions delivering tangible results across multiple sectors
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {useCases.map((useCase, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-gray-900/80 backdrop-blur-sm rounded-xl overflow-hidden border border-yellow-900/50 hover:border-yellow-500 transition-all p-6"
                            >
                                <div className="flex flex-col items-center text-center mb-6">
                                    {useCase.icon}
                                    <h3 className={`text-2xl font-bold ${oswald.className}`}>
                                        {useCase.industry}
                                    </h3>
                                </div>
                                <ul className="space-y-3">
                                    {useCase.applications.map((app, i) => (
                                        <li key={i} className="flex items-start">
                                            <span className="text-yellow-500 mr-2 mt-1">•</span>
                                            <span className="text-gray-300">{app}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-20 bg-gradient-to-br from-yellow-900/20 to-gray-950">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${oswald.className}`}>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                                Measurable Impact
                            </span>
                        </h2>
                        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                            Consistent results across all deployments
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="text-center"
                            >
                                <div className="text-4xl md:text-5xl font-bold text-yellow-500 mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-gray-300">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section id="contact" className="py-20 bg-gray-950">
                <div className="container mx-auto px-6">
                    <div className="bg-gradient-to-r from-yellow-900/40 to-gray-900 rounded-2xl p-8 md:p-12 lg:p-16 border border-yellow-900/50">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${oswald.className}`}>
                                Transform Your Operations Today
                            </h2>
                            <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
                                Our experts will design a custom automation solution that delivers measurable ROI within your first operational quarter.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Link
                                        href={''}
                                        className="px-8 py-3 bg-yellow-600 hover:bg-yellow-700 text-white font-medium rounded-full transition-all block"
                                    >
                                        Get Custom Proposal
                                    </Link>
                                </motion.div>
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Link
                                        href={''}
                                        className="px-8 py-3 border-2 border-yellow-600 text-yellow-400 hover:bg-yellow-900/30 font-medium rounded-full transition-all block"
                                    >
                                        Live Platform Demo
                                    </Link>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}