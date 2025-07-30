'use client';

import { motion } from 'framer-motion';
import {
    FaRobot,
    FaCloud,
    FaCertificate,
    FaGraduationCap,
    FaMoneyBillWave,
    FaChartLine,
    FaRegCheckCircle,
    FaRegLightbulb,
    FaLaptopCode,
    FaUserTie,
    FaAward,
    FaShieldAlt,
} from 'react-icons/fa';
import { IoIosRocket, IoMdSchool } from 'react-icons/io';
import { RiSecurePaymentLine } from 'react-icons/ri';
import { ReactNode } from 'react';
import Link from "next/link";

// ==============================
// Type Definitions
// ==============================
type HighlightItem = {
    icon: ReactNode;
    text: string;
    description?: string;
};

type FeeStructureItem = {
    type: string;
    amount: string;
    note: string;
};

type DiscountItem = {
    score: string;
    discount: string;
    monthly: string;
};

type ProgramData = {
    title: string;
    subtitle: string;
    description: string;
    highlights: HighlightItem[];
    courses: string[];
    outcomes: string[];
    eligibility: {
        title: string;
        items: string[];
    };
    fees: {
        title: string;
        structure: FeeStructureItem[];
        discounts: DiscountItem[];
        totalWithDiscount?: string;
    };
    certification: {
        issuer: string;
        duration: string;
        format: string;
        recognition: string[];
    };
};

// ==============================
// Animation Variants
// ==============================
const container = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.3,
        },
    },
};

const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: [0.25, 0.1, 0.25, 1],
        },
    },
};

const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.8, ease: 'easeOut' },
    },
};

const pulse = {
    initial: { scale: 1 },
    pulse: {
        scale: [1, 1.03, 1],
        transition: {
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
        },
    },
};

// ==============================
// Program Data
// ==============================
const programData: ProgramData = {
    title: 'Mansha Certified Autonomous Systems and Cloud Engineer (MCASCE)',
    subtitle: 'Level 5 Advanced Certification',
    description:
        'Master the integration of cloud computing, robotics, and AI with our industry-recognized certification program designed by global tech experts. Prepare for high-impact roles in autonomous systems, cloud robotics, and intelligent automation.',
    highlights: [
        {
            icon: <IoIosRocket size={28} />,
            text: '24-Month Intensive Program',
            description: 'Comprehensive learning with real-world projects and mentorship.',
        },
        {
            icon: <FaLaptopCode size={28} />,
            text: 'Cutting-Edge Tech Stack',
            description: 'Learn ROS, AWS, TensorFlow, Kubernetes, and more.',
        },
        {
            icon: <FaUserTie size={28} />,
            text: 'Industry Internship & Capstone',
            description: '1-month internship + 2-month capstone project with documentation.',
        },
        {
            icon: <FaRegLightbulb size={28} />,
            text: 'Specialized Tracks',
            description: 'Choose focus: Autonomous Vehicles or Smart Manufacturing.',
        },
        {
            icon: <FaCloud size={28} />,
            text: 'Cloud Robotics Integration',
            description: 'Deploy AI agents on cloud infrastructure with real-time control.',
        },
        {
            icon: <FaShieldAlt size={28} />,
            text: 'Certification Validated',
            description: 'Globally verifiable digital badge and blockchain-backed certificate.',
        },
    ],
    courses: [
        'Basics of Autonomous Systems & Robotics (BASR)',
        'Cloud Robotics Fundamentals (MCCRF)',
        'Cloud AI and Robotics Professional (MCARP)',
        'Cloud Robotics Automation Specialist (MCCRAS)',
        'ROS & AWS Integration Lab',
        'AI-Driven Decision Systems',
        'Security in Autonomous Systems',
    ],
    outcomes: [
        'Design and deploy cloud-connected robotic systems',
        'Build AI models for autonomous navigation and control',
        'Integrate sensors, actuators, and cloud APIs',
        'Lead robotics projects in manufacturing or logistics',
        'Pass industry-standard certification exams',
    ],
    eligibility: {
        title: 'Who Should Apply?',
        items: [
            'CS/IT/Engineering graduates or final-year students',
            'Professionals with programming experience (Python, C++)',
            'Math/Stats/Economics graduates with coding skills',
            'Self-taught developers with portfolio projects in AI or robotics',
            'Tech enthusiasts aiming for a career in automation or AI',
        ],
    },
    fees: {
        title: 'Investment in Your Future',
        structure: [
            {
                type: 'Registration Fee',
                amount: '$70',
                note: 'One-time, non-refundable',
            },
            {
                type: 'Monthly Tuition',
                amount: '$35',
                note: 'Billed monthly over 24 months',
            },
            {
                type: 'Total Program Cost',
                amount: '$910',
                note: 'Before discounts',
            },
        ],
        discounts: [
            { score: '90–100%', discount: '100%', monthly: '$0' },
            { score: '80–89%', discount: '75%', monthly: '$8.75' },
            { score: '70–79%', discount: '50%', monthly: '$17.50' },
        ],
        totalWithDiscount: 'As low as $140 total (with full discount)',
    },
    certification: {
        issuer: 'MVIT',
        duration: '24 Months',
        format: 'Online + Hands-on Projects',
        recognition: [
            'Recognized by AI & Robotics Industry Consortium',
            'Accepted by partner companies for hiring',
        ],
    },
};

// ==============================
// Main Component
// ==============================
export default function MCASCEProgram() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-red-900/90 text-gray-100">
            {/* Hero Section */}
            <motion.section
                initial="hidden"
                animate="visible"
                variants={container}
                className="pt-28 pb-20 px-6 max-w-7xl mx-auto text-center"
            >
                <motion.div variants={item} className="mb-6">
                    <motion.span
                        variants={pulse}
                        initial="initial"
                        animate="pulse"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-red-700 text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg"
                    >
                        <FaCertificate /> Elite Certification
                    </motion.span>
                </motion.div>

                <motion.h1
                    variants={item}
                    className="text-4xl md:text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-red-400 via-red-300 to-red-200 bg-clip-text text-transparent"
                >
                    {programData.title}
                </motion.h1>

                <motion.p
                    variants={item}
                    className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
                >
                    {programData.description}
                </motion.p>

                <motion.div
                    variants={item}
                    className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-gray-400"
                >
                    <div className="flex items-center gap-2">
                        <FaGraduationCap /> <span>{programData.certification.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaAward /> <span>{programData.subtitle}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaShieldAlt /> <span>Blockchain-Verified</span>
                    </div>
                </motion.div>
            </motion.section>

            {/* Highlights Grid */}
            <motion.section
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                className="px-6 max-w-7xl mx-auto mb-24"
            >
                <motion.h2
                    variants={item}
                    className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-red-400 to-red-200 bg-clip-text text-transparent"
                >
                    Why Choose MCASCE?
                </motion.h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {programData.highlights.map((highlight, index) => (
                        <motion.div
                            key={index}
                            variants={item}
                            whileHover={{ y: -10, boxShadow: '0 20px 40px -10px rgba(239, 68, 68, 0.2)' }}
                            className="bg-gray-900/60 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-red-500/50 transition-all duration-300 group"
                        >
                            <div className="text-red-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                                {highlight.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-100 mb-2">{highlight.text}</h3>
                            <p className="text-gray-300 text-sm leading-relaxed">{highlight.description}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* Curriculum & Details */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                variants={container}
                className="py-16 px-6 max-w-7xl mx-auto"
            >
                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Left Column: Curriculum & Outcomes */}
                    <div>
                        <motion.h2
                            variants={item}
                            className="text-3xl md:text-4xl font-bold mb-8 flex items-center"
                        >
                            <IoMdSchool className="mr-4 text-red-400" />
                            <span className="bg-gradient-to-r from-red-400 to-red-200 bg-clip-text text-transparent">
                Curriculum Overview
              </span>
                        </motion.h2>

                        <motion.div variants={container} className="space-y-4 mb-10">
                            {programData.courses.map((course, index) => (
                                <motion.div
                                    key={index}
                                    variants={item}
                                    whileHover={{ x: 6 }}
                                    className="flex items-start bg-gray-900/40 p-4 rounded-lg border-l-4 border-red-500 hover:bg-gray-900/60 transition-all"
                                >
                  <span className="flex-shrink-0 mt-1 mr-4 text-red-400">
                    <FaRegCheckCircle />
                  </span>
                                    <span className="text-gray-200">{course}</span>
                                </motion.div>
                            ))}
                        </motion.div>

                        <motion.h3
                            variants={item}
                            className="text-2xl font-semibold mb-6 text-gray-100"
                        >
                            Learning Outcomes
                        </motion.h3>
                        <motion.ul variants={container} className="space-y-3">
                            {programData.outcomes.map((outcome, index) => (
                                <motion.li
                                    key={index}
                                    variants={item}
                                    className="flex items-start text-gray-300"
                                >
                                    <FaRegCheckCircle className="text-green-400 mt-1 mr-3 flex-shrink-0" />
                                    <span>{outcome}</span>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </div>

                    {/* Right Column: Eligibility & Fees */}
                    <div className="space-y-12">
                        {/* Eligibility */}
                        <motion.div variants={item}>
                            <motion.h2
                                variants={item}
                                className="text-3xl font-bold mb-8"
                            >
                <span className="bg-gradient-to-r from-red-400 to-red-200 bg-clip-text text-transparent">
                  {programData.eligibility.title}
                </span>
                            </motion.h2>
                            <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-gray-800">
                                <ul className="space-y-4">
                                    {programData.eligibility.items.map((item, index) => (
                                        <motion.li
                                            key={index}

                                            className="flex items-start"
                                        >
                                            <FaRegCheckCircle className="text-red-400 mt-1 mr-4 flex-shrink-0" />
                                            <span className="text-gray-200">{item}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                                <div className="mt-6 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                                    <div className="flex items-center text-red-400 mb-1">
                                        <RiSecurePaymentLine className="mr-2" />
                                        <span className="font-medium">Admission Test Fee: $5</span>
                                    </div>
                                    <p className="text-sm text-gray-400">One-time, refundable upon enrollment</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Fee Structure */}
                        <motion.div variants={item}>
                            <motion.h2
                                variants={item}
                                className="text-3xl font-bold mb-8"
                            >
                <span className="bg-gradient-to-r from-red-400 to-red-200 bg-clip-text text-transparent">
                  {programData.fees.title}
                </span>
                            </motion.h2>
                            <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-gray-800">
                                <h3 className="text-xl font-semibold mb-6 text-gray-200 flex items-center">
                                    <FaMoneyBillWave className="mr-3 text-red-400" />
                                    Program Fee Breakdown
                                </h3>
                                <div className="space-y-4 mb-8">
                                    {programData.fees.structure.map((fee, index) => (
                                        <motion.div
                                            key={index}
                                            variants={item}
                                            className="flex justify-between items-center pb-3 border-b border-gray-800 last:border-b-0"
                                        >
                                            <div>
                                                <h4 className="font-medium text-gray-300">{fee.type}</h4>
                                                <p className="text-xs text-gray-500">{fee.note}</p>
                                            </div>
                                            <span className="font-bold text-red-400">{fee.amount}</span>
                                        </motion.div>
                                    ))}
                                </div>

                                <h3 className="text-xl font-semibold mb-4 text-gray-200 flex items-center">
                                    <FaChartLine className="mr-3 text-red-400" />
                                    Performance-Based Discounts
                                </h3>
                                <div className="text-sm text-green-400 mb-4 font-medium">
                                    {programData.fees.totalWithDiscount}
                                </div>
                                <div className="overflow-hidden rounded-lg border border-gray-800">
                                    <table className="min-w-full divide-y divide-gray-800">
                                        <thead>
                                        <tr className="bg-gray-900/50">
                                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                                                Test Score
                                            </th>
                                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                                                Discount
                                            </th>
                                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                                                Monthly Fee
                                            </th>
                                        </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-800">
                                        {programData.fees.discounts.map((discount, index) => (
                                            <motion.tr
                                                key={index}
                                                variants={item}
                                                whileHover={{ backgroundColor: 'rgba(239, 68, 68, 0.05)' }}
                                                className={index % 2 === 0 ? 'bg-gray-900/30' : 'bg-gray-900/10'}
                                            >
                                                <td className="px-4 py-3 text-sm font-medium text-gray-200">{discount.score}</td>
                                                <td className="px-4 py-3 text-sm text-gray-300">{discount.discount}</td>
                                                <td className="px-4 py-3 text-sm font-bold text-red-400">{discount.monthly}</td>
                                            </motion.tr>
                                        ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* Certification Info */}
            <motion.section
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="py-16 px-6 max-w-5xl mx-auto text-center"
            >
                {/* Icon & Title */}
                <motion.div
                    variants={item}
                    className="flex flex-col items-center mb-10"
                >
                    <FaCertificate className="text-5xl md:text-6xl text-red-500 mb-5 drop-shadow-lg" />
                    <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-red-400 to-red-200 bg-clip-text text-transparent">
                        Earn a Certificate
                    </h2>
                    <p className="text-gray-300 mt-4 max-w-2xl leading-relaxed">
                        The MCASCE certification is industry-recognized, academically rigorous, and designed to validate your expertise in autonomous systems and cloud robotics.
                    </p>
                </motion.div>

                {/* Key Info Cards */}
                <motion.div
                    variants={container}
                    className="grid md:grid-cols-2 gap-8 mb-12"
                >
                    <motion.div
                        variants={item}
                        className="bg-gradient-to-br from-gray-900 to-gray-950 p-8 rounded-2xl border border-gray-800 shadow-xl text-left"
                    >
                        <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                            <FaGraduationCap /> Issued By
                        </h3>
                        <p className="text-red-400 font-bold text-lg">{programData.certification.issuer}</p>
                        <p className="text-gray-400 text-sm mt-2">
                            A globally accredited institution at the forefront of AI and robotics education.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={item}
                        className="bg-gradient-to-br from-gray-900 to-gray-950 p-8 rounded-2xl border border-gray-800 shadow-xl text-left"
                    >
                        <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                            <FaLaptopCode /> Delivery Format
                        </h3>
                        <p className="text-gray-200">{programData.certification.format}</p>
                        <p className="text-gray-400 text-sm mt-2">
                            100% online with hands-on labs, mentorship, and real-world projects.
                        </p>
                    </motion.div>
                </motion.div>

                {/* Recognition Badges */}
                <motion.div variants={item}>
                    <h3 className="text-lg font-semibold text-gray-200 mb-6">
                        Recognized & Trusted By Industry Leaders
                    </h3>
                    <div className="flex flex-wrap justify-center items-center gap-6 opacity-90">
                        {programData.certification.recognition.map((rec, idx) => (
                            <span
                                key={idx}
                                className="bg-gray-800/70 text-gray-200 px-5 py-3 rounded-xl text-sm font-medium shadow-sm border border-gray-700 hover:bg-gray-800 transition-all"
                            >
          {rec}
        </span>
                        ))}
                    </div>
                </motion.div>
            </motion.section>

            {/* CTA Section */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={container}
                className="py-24 px-6 text-center"
            >
                <motion.div variants={item} className="max-w-4xl mx-auto">
                    <motion.h2
                        variants={item}
                        className="text-3xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-red-400 to-red-200 bg-clip-text text-transparent"
                    >
                        Ready to Transform Your Career?
                    </motion.h2>
                    <motion.p
                        variants={item}
                        className="text-xl text-gray-300 mb-12 leading-relaxed"
                    >
                        Join the next generation of autonomous systems engineers. Limited seats available for the upcoming cohort.
                    </motion.p>
                    <motion.div variants={item} className="flex flex-col sm:flex-row justify-center gap-6">

                        <motion.button
                            whileHover={{
                                scale: 1.05,
                                boxShadow: '0 10px 25px -5px rgba(239, 68, 68, 0.4)',
                            }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-gradient-to-r from-red-600 to-red-800 text-white px-10 py-5 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transition-all"
                        >
                            <Link href={'/pages/apply'}> Apply Now – Limited Seats</Link>

                        </motion.button>

                    </motion.div>
                </motion.div>
            </motion.section>
        </div>
    );
}