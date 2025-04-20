'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap, FaLaptopCode, FaUserTie, FaChartLine, FaHandshake } from 'react-icons/fa';
import { FiAward, FiTarget } from 'react-icons/fi';
import Image from 'next/image';
import MVITLogo from '@/public/mvut_flame.png';
import ABSInternationalLogo from '@/public/resources/partners/absi.png';
import Link from "next/link";

type OpportunityCardProps = {
    icon: React.ReactNode;
    title: string;
    description: string;
    benefits: string[];
};

type ProgramCardProps = {
    title: string;
    description: string;
    features: string[];
    cta: string;
};

const StudentOpportunitiesPage: React.FC = () => {
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: [0.25, 0.1, 0.25, 1]
            }
        }
    };

    const opportunities: OpportunityCardProps[] = [
        {
            icon: <FaBriefcase className="text-3xl" />,
            title: "Industry Placements",
            description: "Gain real-world experience with top corporate partners",
            benefits: [
                "6-month paid internships",
                "Mentorship from industry leaders",
                "Potential pre-placement offers"
            ]
        },
        {
            icon: <FaLaptopCode className="text-3xl" />,
            title: "Technical Certifications",
            description: "Earn credentials valued by employers",
            benefits: [
                "AWS/Google Cloud certifications",
                "Full-stack development programs",
                "Data science specializations"
            ]
        },
        {
            icon: <FaUserTie className="text-3xl" />,
            title: "Career Development",
            description: "Comprehensive professional growth support",
            benefits: [
                "Resume and interview workshops",
                "Career counseling sessions",
                "Networking events"
            ]
        }
    ];

    const programs: ProgramCardProps[] = [
        {
            title: "Corporate-Linked Degree Programs",
            description: "Curriculum co-designed with industry partners",
            features: [
                "Industry-sponsored projects",
                "Guest lectures from executives",
                "Specialized electives",
                "Dedicated placement support"
            ],
            cta: "View Degree Programs"
        },
        {
            title: "Professional Certification Tracks",
            description: "Short-term intensive programs with job placement",
            features: [
                "12-16 week durations",
                "Hands-on labs and simulations",
                "Portfolio development",
                "Interview guarantee"
            ],
            cta: "Explore Certifications"
        }
    ];

    return (
        <div className="bg-gray-50">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-blue-900 to-gray-900 overflow-hidden">
                <div className="absolute inset-0 bg-[url('/pattern-dark.svg')] opacity-20" />
                <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            <span className="text-blue-400">Student</span> Career Accelerator
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                            MVIT and ABS International partnership delivers unmatched industry opportunities
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Partnership Badge */}
            <section className="relative -mt-12 z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="bg-white rounded-xl shadow-xl p-6 flex flex-col md:flex-row items-center justify-center gap-6"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-4">
                            <div className="w-16 h-16 relative">
                                <Image src={MVITLogo} alt="MVIT Logo" fill className="object-contain" />
                            </div>
                            <span className="text-2xl text-gray-400">+</span>
                            <div className="w-16 h-16 relative">
                                <Image src={ABSInternationalLogo} alt="ABS International Logo" fill className="object-contain" />
                            </div>
                        </div>
                        <div className="text-center md:text-left">
                            <h3 className="text-xl font-bold text-gray-900">Industry-Aligned Education Partnership</h3>
                            <p className="text-gray-600">Connecting classroom learning with real-world careers</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Value Proposition */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Your <span className="text-blue-600">Competitive Edge</span>
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            How our corporate-academic partnership benefits your career journey
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {opportunities.map((opportunity, index) => (
                            <motion.div
                                key={index}
                                className="bg-gray-50 rounded-xl p-8 border border-gray-200 hover:border-blue-300 transition"
                                variants={itemVariants}
                                whileHover={{
                                    y: -5,
                                    boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.1)"
                                }}
                            >
                                <div className="text-blue-600 mb-4">{opportunity.icon}</div>
                                <h3 className="text-xl font-bold mb-3 text-gray-900">{opportunity.title}</h3>
                                <p className="text-gray-600 mb-4">{opportunity.description}</p>
                                <ul className="space-y-2">
                                    {opportunity.benefits.map((benefit, i) => (
                                        <li key={i} className="flex items-start">
                                            <FiAward className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
                                            <span className="text-gray-700">{benefit}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Program Showcase */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Career-Focused <span className="text-blue-600">Programs</span>
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Choose your pathway to professional success
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {programs.map((program, index) => (
                            <motion.div
                                key={index}
                                className="bg-white rounded-xl shadow-md overflow-hidden"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -5 }}
                            >
                                <div className="p-8">
                                    <h3 className="text-2xl font-bold mb-3 text-gray-900">{program.title}</h3>
                                    <p className="text-gray-600 mb-6">{program.description}</p>
                                    <ul className="space-y-3 mb-8">
                                        {program.features.map((feature, i) => (
                                            <li key={i} className="flex items-start">
                                                <FiTarget className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
                                                <span className="text-gray-700">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <button className="w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition">
                                        {program.cta}
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Success Metrics */}
            <section className="py-16 bg-gradient-to-r from-blue-700 to-blue-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Proven <span className="text-blue-200">Career</span> Outcomes
                        </h2>
                        <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                            Our students achieve remarkable professional success
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-2 md:grid-cols-4 gap-6"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {[
                            { value: "92%", label: "Placement Rate" },
                            { value: "4.5x", label: "Higher Starting Salaries" },
                            { value: "150+", label: "Hiring Partners" },
                            { value: "85%", label: "Internship Conversion" }
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center"
                                variants={itemVariants}
                            >
                                <p className="text-4xl font-bold mb-2 text-blue-200">{stat.value}</p>
                                <p className="text-blue-100">{stat.label}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Student Testimonials */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Student <span className="text-blue-600">Success</span> Stories
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Hear from those who&apos;ve launched remarkable careers through our programs
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                quote: "The corporate projects gave me real experience that impressed my future employer.",
                                name: "Priya Sharma",
                                role: "Data Analyst at TechSolutions Inc.",
                                icon: <FaChartLine className="text-blue-500" />
                            },
                            {
                                quote: "My certification directly led to a 40% higher starting salary offer.",
                                name: "Rahul Patel",
                                role: "Cloud Engineer at Global Systems",
                                icon: <FaLaptopCode className="text-blue-500" />
                            },
                            {
                                quote: "The career workshops helped me negotiate my ideal compensation package.",
                                name: "Ananya Gupta",
                                role: "Product Manager at InnovateX",
                                icon: <FaHandshake className="text-blue-500" />
                            }
                        ].map((testimonial, index) => (
                            <motion.div
                                key={index}
                                className="bg-gray-50 rounded-xl p-8"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="text-blue-500 text-3xl mb-4">{testimonial.icon}</div>
                                <blockquote className="text-gray-700 italic mb-6">
                                    &quot;{testimonial.quote}&quot;
                                </blockquote>
                                <div className="font-medium">
                                    <p className="text-gray-900">{testimonial.name}</p>
                                    <p className="text-gray-600">{testimonial.role}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gray-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Ready to <span className="text-blue-400">Launch</span> Your Career?
                        </h2>
                        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                            Join the next generation of industry-ready professionals
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <motion.button
                                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link href={'/pages/apply'}>Apply Now</Link>
                            </motion.button>
                            <motion.button
                                className="bg-white hover:bg-gray-100 text-gray-800 font-medium py-3 px-8 rounded-lg transition"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link href={'/pages/trainings'}>Trainings</Link>
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default StudentOpportunitiesPage;