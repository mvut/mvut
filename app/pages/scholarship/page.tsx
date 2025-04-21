'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaAward, FaFileAlt, FaCalendarAlt, FaPercentage, FaMoneyBillWave, FaUniversity, FaUserTie } from 'react-icons/fa';
import { Poppins, Montserrat } from 'next/font/google';

// Fonts
const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '600', '700'],
    variable: '--font-poppins'
});

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400', '500', '700'],
    variable: '--font-montserrat'
});

const scholarshipTypes = [
    {
        title: "Merit Scholarship",
        icon: <FaAward className="text-amber-400 text-4xl" />,
        description: "Awarded to students with outstanding academic achievements",
        coverage: "Up to 50% tuition fee",
        requirements: ["Minimum 3.8 GPA", "Top 5% of class", "Exceptional test scores"]
    },
    {
        title: "Need-Based Scholarship",
        icon: <FaMoneyBillWave className="text-amber-400 text-4xl" />,
        description: "For students demonstrating significant financial need",
        coverage: "Up to 70% tuition fee",
        requirements: ["Financial documentation", "Household income verification", "Personal statement"]
    },
    {
        title: "Leadership Scholarship",
        icon: <FaUserTie className="text-amber-400 text-4xl" />,
        description: "Recognizing exceptional leadership and community service",
        coverage: "Up to 30% tuition fee",
        requirements: ["Leadership experience", "Community service records", "Recommendation letters"]
    },
    {
        title: "Research Scholarship",
        icon: <FaUniversity className="text-amber-400 text-4xl" />,
        description: "For students engaged in innovative research projects",
        coverage: "Up to 40% tuition fee + research stipend",
        requirements: ["Research proposal", "Faculty endorsement", "Academic excellence"]
    }
];

const policySections = [
    {
        title: "Eligibility Criteria",
        icon: <FaFileAlt className="text-amber-400" />,
        content: [
            "Only admitted students are eligible to apply",
            "Must maintain full-time enrollment status",
            "Minimum cumulative GPA of 3.0 required for renewal"
        ]
    },
    {
        title: "Application Process",
        icon: <FaFileAlt className="text-amber-400" />,
        content: [
            "Complete online scholarship application",
            "Submit all required documents by deadline",
            "Interview may be required for certain awards"
        ]
    },
    {
        title: "Award Disbursement",
        icon: <FaMoneyBillWave className="text-amber-400" />,
        content: [
            "Applied directly to student tuition account",
            "Disbursed at beginning of each semester",
            "Non-transferable to other institutions"
        ]
    },
    {
        title: "Renewal Requirements",
        icon: <FaCalendarAlt className="text-amber-400" />,
        content: [
            "Annual renewal application required",
            "Maintain satisfactory academic progress",
            "Complete 30 hours of community service per year"
        ]
    }
];

const ScholarshipPage = () => {
    return (
        <div className={`min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 text-gray-800 ${montserrat.className} relative overflow-hidden`}>
            {/* Silver Effect Background Elements */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE5LjUgMEgxOC41TDAgMTguNVYwIEgxOS41WiIgZmlsbD0iI0ZGRkZGRiIvPgo8cGF0aCBkPSJNMTkuNSAwSDIwLjVMNDAgMTkuNVY0MEgxOS41WiIgZmlsbD0iI0ZGRkZGRiIvPgo8cGF0aCBkPSJNMCAxOC41SDE4LjVMMTkuNSAxOS41SDBNMCAyMC41SDE4LjVMMTkuNSAyMS41SDBWMjAuNVoiIGZpbGw9IiNGRkZGRkYiLz4KPHBhdGggZD0iTTQwIDE4LjVIMjEuNUwxOS41IDE5LjVIMzkuOTk5OTlNMCAyMC41SDIxLjVMMjAuNSAyMS41SDBWMjAuNVoiIGZpbGw9IiNGRkZGRkYiLz4KPC9zdmc+Cg==')] opacity-10"></div>
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gray-300 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-gray-200 rounded-full filter blur-3xl opacity-15 animate-pulse delay-1000"></div>
            </div>

            {/* Hero Section */}
            <section className="relative py-32">
                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <motion.div
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="inline-block mb-6"
                        >
                            <div className={`px-4 py-2 bg-amber-500/20 border border-amber-400 rounded-full text-amber-600 text-sm font-medium ${poppins.className}`}>
                                MVIT Scholarship Program
                            </div>
                        </motion.div>

                        <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold mb-6 ${poppins.className}`}>
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-400"
                            >
                                Investing in Your Future
                            </motion.span>
                        </h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-xl md:text-2xl text-gray-700 mb-10 max-w-3xl mx-auto"
                        >
                            Exclusive financial support for our admitted students to help achieve academic excellence
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="flex flex-wrap justify-center gap-4"
                        >
                            <motion.div
                                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(217, 119, 6, 0.3)" }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link
                                    href="#scholarships"
                                    className={`px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold rounded-full transition-all ${poppins.className} block`}
                                >
                                    View Scholarships
                                </Link>
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(75, 85, 99, 0.2)" }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link
                                    href="#policy"
                                    className={`px-8 py-4 border-2 border-amber-500 text-amber-600 hover:bg-amber-50 font-bold rounded-full transition-all ${poppins.className} block`}
                                >
                                    Policy Details
                                </Link>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Scholarship Types */}
            <section id="scholarships" className="py-20 relative">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${poppins.className}`}>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-400">
                Scholarship Opportunities
              </span>
                        </h2>
                        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                            Various financial aid options available exclusively for MVIT admitted students
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {scholarshipTypes.map((scholarship, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -10 }}
                                className="bg-white/80 backdrop-blur-sm border border-gray-300 rounded-xl p-8 hover:border-amber-400 transition-all hover:shadow-lg hover:shadow-amber-400/20"
                            >
                                <div className="mb-6 flex justify-center">
                                    <div className="p-4 bg-amber-500/10 rounded-full border border-amber-400/50">
                                        {scholarship.icon}
                                    </div>
                                </div>
                                <h3 className={`text-xl font-bold mb-3 ${poppins.className}`}>{scholarship.title}</h3>
                                <p className="text-gray-700 mb-4">{scholarship.description}</p>
                                <div className="mb-4 flex items-center text-amber-600 font-medium">
                                    <FaPercentage className="mr-2" />
                                    <span>{scholarship.coverage}</span>
                                </div>
                                <h4 className={`text-sm font-bold mb-2 text-gray-600 ${poppins.className}`}>Requirements:</h4>
                                <ul className="space-y-2">
                                    {scholarship.requirements.map((req, i) => (
                                        <li key={i} className="flex items-start text-sm text-gray-600">
                                            <span className="text-amber-500 mr-2">•</span>
                                            {req}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Scholarship Policy */}
            <section id="policy" className="py-20 bg-gradient-to-br from-gray-200 to-gray-300 relative">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${poppins.className}`}>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-400">
                Scholarship Policy
              </span>
                        </h2>
                        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                            Policies and procedures for MVIT&apos;s scholarship program (Admitted Students Only)
                        </p>
                    </motion.div>

                    <div className="max-w-5xl mx-auto">
                        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden border border-gray-300">
                            {policySections.map((section, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className={`p-8 ${index !== policySections.length - 1 ? 'border-b border-gray-200' : ''}`}
                                >
                                    <div className="flex items-start mb-4">
                                        <div className="mr-4 mt-1">
                                            {section.icon}
                                        </div>
                                        <h3 className={`text-2xl font-bold text-gray-800 ${poppins.className}`}>{section.title}</h3>
                                    </div>
                                    <ul className="space-y-3 pl-12">
                                        {section.content.map((item, i) => (
                                            <motion.li
                                                key={i}
                                                initial={{ opacity: 0 }}
                                                whileInView={{ opacity: 1 }}
                                                transition={{ delay: 0.1 * i }}
                                                viewport={{ once: true }}
                                                className="flex items-start text-gray-700"
                                            >
                                                <span className="text-amber-500 mr-2 mt-1">•</span>
                                                <span>{item}</span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="mt-12 bg-white/80 backdrop-blur-sm rounded-xl p-8 border border-gray-300"
                        >
                            <h3 className={`text-2xl font-bold mb-4 text-gray-800 ${poppins.className}`}>Important Notes:</h3>
                            <div className="space-y-4">
                                <p className="text-gray-700">
                                    <span className="font-bold">Eligibility:</span> All scholarships are available only to students who have been officially admitted to MVIT. Prospective students must complete their admission before applying for any scholarship.
                                </p>
                                <p className="text-gray-700">
                                    <span className="font-bold">Application Deadline:</span> Scholarship applications must be submitted at least 30 days before the start of the academic term. Late applications will not be considered.
                                </p>
                                <p className="text-gray-700">
                                    <span className="font-bold">Award Limits:</span> Students may only receive one institutional scholarship per academic year. External scholarships may be combined with MVIT awards up to full tuition coverage.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* How to Apply */}
            <section className="py-20 relative">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${poppins.className}`}>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-400">
                Application Process
              </span>
                        </h2>
                        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                            Step-by-step guide to apply for MVIT scholarships
                        </p>
                    </motion.div>

                    <div className="max-w-4xl mx-auto">
                        <div className="relative">
                            <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-400/20 via-amber-500/50 to-amber-400/20"></div>

                            {[
                                "Complete your MVIT admission application",
                                "Receive official admission letter",
                                "Access scholarship portal using your student credentials",
                                "Select scholarship programs you qualify for",
                                "Upload required supporting documents",
                                "Submit application before deadline",
                                "Await decision notification via email"
                            ].map((step, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="relative pl-16 pb-10 group"
                                >
                                    <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-white border-2 border-amber-400 flex items-center justify-center z-10 group-hover:bg-amber-500 group-hover:border-amber-500 group-hover:shadow-lg group-hover:shadow-amber-500/20 transition-all">
                                        <div className="w-3 h-3 rounded-full bg-amber-400 group-hover:bg-white transition-all"></div>
                                    </div>

                                    <div className="bg-white/80 backdrop-blur-sm border border-gray-300 rounded-xl p-6 hover:border-amber-400 transition-all hover:shadow-lg hover:shadow-amber-400/20 overflow-hidden">
                                        <div className="flex items-start">
                                            <div className="mr-4">
                                                <div className="w-12 h-12 rounded-lg bg-amber-500/10 border border-amber-400/30 flex items-center justify-center text-amber-500 text-xl font-bold">
                                                    {index + 1}
                                                </div>
                                            </div>
                                            <div className="flex-1">
                                                <h3 className={`text-xl font-bold mb-2 ${poppins.className}`}>{step}</h3>
                                                {index === 2 && (
                                                    <p className="text-sm text-gray-600">(Available 48 hours after admission confirmation)</p>
                                                )}
                                                {index === 4 && (
                                                    <p className="text-sm text-gray-600">(Transcripts, recommendation letters, essays, etc.)</p>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    {index < 6 && (
                                        <div className="absolute left-5 top-10 bottom-0 w-0.5 bg-amber-400/30 group-hover:bg-amber-500/40 transition-colors"></div>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-32 bg-gradient-to-r from-amber-500/10 to-amber-600/10 relative">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${poppins.className}`}>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-400">
                  Ready to Apply?
                </span>
                            </h2>
                            <p className="text-xl text-gray-700 mb-10 max-w-2xl mx-auto">
                                Begin your scholarship application process today
                            </p>
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="inline-block"
                            >
                                <Link
                                    href={''}
                                    className={`px-12 py-5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-white font-bold rounded-full transition-all text-lg shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 ${poppins.className}`}
                                >
                                    Start Application
                                </Link>
                            </motion.div>
                            <div className="mt-8 text-gray-600">
                                <FaGraduationCap className="inline-block mr-2" />
                                For admitted students only
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ScholarshipPage;