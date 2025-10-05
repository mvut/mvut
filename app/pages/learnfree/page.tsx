'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
    FaChalkboardTeacher,
    FaLaptopCode,
    FaRegClock,
    FaCertificate,
    FaCode,
    FaRobot,
    FaMobile,
    FaDatabase,
    FaShieldAlt,
    FaGraduationCap,
    FaUserGraduate
} from 'react-icons/fa';
import { Poppins } from 'next/font/google';

// Font
const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
});

// Interfaces
interface CourseFeature {
    title: string;
    icon: React.ReactNode;
    description: string;
}

interface FreeCourse {
    title: string;
    icon: React.ReactNode;
    description: string;
    duration: string;
    students: string;
}

// Data
const courseFeatures: CourseFeature[] = [
    {
        title: "Expert Instruction",
        icon: <FaChalkboardTeacher className="text-amber-500" />,
        description: "Learn from industry professionals with real-world experience"
    },
    {
        title: "Hands-on Projects",
        icon: <FaLaptopCode className="text-amber-500" />,
        description: "Build practical skills through coding exercises"
    },
    {
        title: "Flexible Learning",
        icon: <FaRegClock className="text-amber-500" />,
        description: "Study at your own pace with 24/7 access"
    },
    {
        title: "Certification",
        icon: <FaCertificate className="text-amber-500" />,
        description: "Earn a verified certificate upon completion"
    }
];

const curriculum = [
    "Introduction to Programming Concepts",
    "Web Development Fundamentals",
    "Python for Beginners",
    "Data Structures & Algorithms",
    "Building Your First Application",
    "Final Project & Certification"
];

const freeCourses: FreeCourse[] = [
    {
        title: "Core Web Technologies",
        icon: <FaCode />,
        description: "Master HTML, CSS, and JavaScript to build modern websites",
        duration: "12 Weeks",
        students: "2,500+ Enrolled"
    },
    {
        title: "Python Programming",
        icon: <FaRobot />,
        description: "Learn Python from scratch with hands-on projects",
        duration: "8 Weeks",
        students: "3,200+ Enrolled"
    },
    {
        title: "PHP Web Programming",
        icon: <FaMobile />,
        description: "Build dynamic web apps with PHP and modern frameworks",
        duration: "8 Weeks",
        students: "1,800+ Enrolled"
    },
    {
        title: "Database Essentials",
        icon: <FaDatabase />,
        description: "SQL, NoSQL and database design principles",
        duration: "6 Weeks",
        students: "1,200+ Enrolled"
    },
    {
        title: "Prompt Engineering",
        icon: <FaShieldAlt />,
        description: "Efficient prompt practices for developers and AI users",
        duration: "4 Weeks",
        students: "900+ Enrolled"
    }
];

const FreeCoursePage: React.FC = () => {
    return (
        <div className={`min-h-screen bg-gray-950 text-gray-100 ${poppins.className}`}>
            {/* Hero */}
            <section className="pt-24 pb-16 px-4 sm:px-6">
                <div className="max-w-5xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-block mb-4"
                    >
            <span className="px-4 py-1.5 bg-amber-500/10 text-amber-400 rounded-full text-sm font-medium border border-amber-500/20">
              MVIT Initiative
            </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                    >
            <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              Free Tech Education for All
            </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg md:text-xl text-gray-400 mb-10 max-w-3xl mx-auto"
                    >
                        High-quality, industry-relevant courses — completely free. No credit card required.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-col sm:flex-row justify-center gap-4"
                    >
                        <Link
                            href="/pages/apply"
                            className="bg-gradient-to-r from-amber-500 to-amber-600 text-gray-900 px-8 py-4 rounded-xl font-bold hover:opacity-90 transition"
                        >
                            Enroll Now — Free
                        </Link>
                        <Link
                            href="/pages/study"
                            className="border border-gray-700 text-white px-8 py-4 rounded-xl font-medium hover:bg-gray-800 transition"
                        >
                            View Curriculum
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="mt-8 flex justify-center items-center gap-2 text-gray-400"
                    >
                        <FaUserGraduate className="text-amber-500" />
                        <span>12,000+ learners enrolled</span>
                    </motion.div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-20 bg-gray-900/50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Why Learn With MVIT?
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Designed for beginners, built by experts, trusted by thousands.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {courseFeatures.map((feature, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ y: -8 }}
                                className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-amber-500/30 transition"
                            >
                                <div className="text-3xl mb-4">{feature.icon}</div>
                                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                                <p className="text-gray-400 text-sm">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Curriculum */}
            <section className="py-20">
                <div className="max-w-5xl mx-auto px-4 sm:px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Your Learning Journey
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            A structured path from beginner to job-ready developer.
                        </p>
                    </div>

                    <div className="space-y-6">
                        {curriculum.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="flex items-start gap-4"
                            >
                                <div className="mt-1.5 flex-shrink-0 w-8 h-8 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center">
                                    <span className="text-amber-500 font-bold">{i + 1}</span>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg">{item}</h3>
                                    <p className="text-gray-500 text-sm mt-1">
                                        {i % 3 === 0 ? "Core Foundation" :
                                            i % 3 === 1 ? "Practical Application" : "Advanced Concept"}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="mt-12 text-center"
                    >
                        <div className="inline-flex items-center gap-2 bg-gray-900 px-5 py-2.5 rounded-full border border-amber-500/30">
                            <FaCertificate className="text-amber-500" />
                            <span className="text-amber-400 font-medium">Certificate of Completion</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Free Courses */}
            <section className="py-20 bg-gray-900/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Available Free Courses
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            All include hands-on projects and a shareable certificate.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                        {freeCourses.map((course, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ y: -8 }}
                                className="bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-amber-500/30 transition flex flex-col"
                            >
                                <div className="text-3xl mb-4 text-amber-500">{course.icon}</div>
                                <h3 className="font-bold text-lg mb-2">{course.title}</h3>
                                <p className="text-gray-400 text-sm mb-4 flex-grow">{course.description}</p>

                                <div className="mt-auto pt-4 border-t border-gray-800">
                                    <div className="flex justify-between text-xs text-gray-500 mb-3">
                    <span className="flex items-center gap-1">
                      <FaRegClock /> {course.duration}
                    </span>
                                        <span className="flex items-center gap-1">
                      <FaUserGraduate /> {course.students}
                    </span>
                                    </div>
                                    <Link
                                        href="/pages/apply"
                                        className="w-full block text-center py-2 bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 rounded-lg font-medium transition"
                                    >
                                        Enroll Free
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 bg-gradient-to-r from-gray-900 to-amber-900/10">
                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold mb-6"
                    >
                        Start Learning Today — At No Cost
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-300 mb-10 max-w-2xl mx-auto"
                    >
                        Join thousands of students building in-demand tech skills with MVIT.
                    </motion.p>
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <Link
                            href="/pages/apply"
                            className="inline-block bg-gradient-to-r from-amber-500 to-amber-600 text-gray-900 px-10 py-4 rounded-xl font-bold"
                        >
                            Enroll in a Free Course
                        </Link>
                    </motion.div>
                    <p className="text-gray-500 text-sm mt-4">
                        <FaGraduationCap className="inline mr-1" />
                        No payment required. Certificate included.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default FreeCoursePage;