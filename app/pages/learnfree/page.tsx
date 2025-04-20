'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaLaptopCode, FaChalkboardTeacher, FaCertificate, FaUserGraduate, FaRegClock, FaCode, FaMobile, FaDatabase, FaRobot, FaShieldAlt } from 'react-icons/fa';
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

// Interfaces
interface CourseFeature {
    title: string;
    icon: JSX.Element;
    description: string;
}

interface FreeCourse {
    title: string;
    icon: JSX.Element;
    description: string;
    duration: string;
    students: string;
}

// Data
const courseFeatures: CourseFeature[] = [
    {
        title: "Expert Instruction",
        icon: <FaChalkboardTeacher className="text-amber-300 text-4xl" />,
        description: "Learn from industry professionals with real-world experience"
    },
    {
        title: "Hands-on Projects",
        icon: <FaLaptopCode className="text-amber-300 text-4xl" />,
        description: "Build practical skills through coding exercises"
    },
    {
        title: "Flexible Learning",
        icon: <FaRegClock className="text-amber-300 text-4xl" />,
        description: "Study at your own pace with 24/7 access"
    },
    {
        title: "Certification",
        icon: <FaCertificate className="text-amber-300 text-4xl" />,
        description: "Earn a certificate upon completion"
    }
];

const curriculum: string[] = [
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
        icon: <FaCode className="text-amber-300 text-3xl" />,
        description: "Master HTML, CSS, and JavaScript to build modern websites",
        duration: "12 Weeks",
        students: "2,500+ Enrolled"
    },
    {
        title: "Python Programming",
        icon: <FaRobot className="text-amber-300 text-3xl" />,
        description: "Learn Python from scratch with hands-on projects",
        duration: "8 Weeks",
        students: "3,200+ Enrolled"
    },
    {
        title: "PHP Web Programming",
        icon: <FaMobile className="text-amber-300 text-3xl" />,
        description: "Build cross-platform apps with PHP Frameworks",
        duration: "8 Weeks",
        students: "1,800+ Enrolled"
    },
    {
        title: "Database Essentials",
        icon: <FaDatabase className="text-amber-300 text-3xl" />,
        description: "SQL, NoSQL and database design principles",
        duration: "6 Weeks",
        students: "1,200+ Enrolled"
    },
    {
        title: "Prompt Engineering",
        icon: <FaShieldAlt className="text-amber-300 text-3xl" />,
        description: "Efficient Prompt practices for developers",
        duration: "4 Weeks",
        students: "900+ Enrolled"
    }
];

const FreeCoursePage: React.FC = () => {
    return (
        <div className={`min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white ${montserrat.className} relative overflow-hidden`}>
            {/* Gold and White Gold Background Effects */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-200/20 via-yellow-300/10 to-transparent opacity-40"></div>
                <div className="absolute top-1/4 left-1/5 w-80 h-80 bg-amber-200 rounded-full filter blur-3xl opacity-25 animate-pulse"></div>
                <div className="absolute bottom-1/5 right-1/4 w-96 h-96 bg-yellow-100 rounded-full filter blur-3xl opacity-20 animate-pulse delay-700"></div>
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE5LjUgMEgxOC41TDAgMTguNVYwIEgxOS41WiIgZmlsbD0iI0ZGRkZGRiIvPgo8cGF0aCBkPSJNMTkuNSAwSDIwLjVMNDAgMTkuNVY0MEgxOS41WiIgZmlsbD0iI0ZGRkZGRiIvPgo8cGF0aCBkPSJNMCAxOC41SDE4LjVMMTkuNSAxOS41SDBNMCAyMC41SDE4LjVMMTkuNSAyMS41SDBWMjAuNVoiIGZpbGw9IiNGRkZGRkYiLz4KPHBhdGggZD0iTTQwIDE4LjVIMjEuNUwxOS41IDE5LjVIMzkuOTk5OTlNMCAyMC41SDIxLjVMMjAuNSAyMS41SDBWMjAuNVoiIGZpbGw9IiNGRkZGRkYiLz4KPC9zdmc+Cg==')] opacity-5"></div>
            </div>

            {/* Hero Section */}
            <section className="relative py-32">
                <div className="container mx-auto px-6">
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
                            <div className={`px-4 py-2 bg-amber-500/30 border border-amber-200 rounded-full text-amber-100 text-sm font-medium ${poppins.className}`}>
                                MVIT Presents
                            </div>
                        </motion.div>

                        <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold mb-6 ${poppins.className}`}>
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-400"
                            >
                                Code Literacy for All
                            </motion.span>
                        </h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-xl md:text-2xl text-gray-100 mb-10 max-w-3xl mx-auto"
                        >
                            Unlock the power of programming with our free, comprehensive courses
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="flex flex-wrap justify-center gap-4"
                        >
                            <motion.div
                                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(245, 158, 11, 0.5)" }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link
                                    href={'/pages/apply'}
                                    className={`px-8 py-4 bg-gradient-to-r from-amber-400 to-yellow-500 text-gray-900 font-bold rounded-full transition-all ${poppins.className}`}
                                >
                                    Enroll Now - Free
                                </Link>
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(245, 245, 245, 0.3)" }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link
                                    href={'/pages/study'}
                                    className={`px-8 py-4 border-2 border-amber-200 text-amber-100 hover:bg-amber-200/20 font-bold rounded-full transition-all ${poppins.className}`}
                                >
                                    Course Details
                                </Link>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.8 }}
                            className="mt-16"
                        >
                            <div className={`inline-flex items-center gap-3 bg-gray-800/50 backdrop-blur-sm border border-amber-200/50 rounded-full px-6 py-3 ${poppins.className}`}>
                                <FaUserGraduate className="text-amber-200" />
                                <span>1,200+ Students Enrolled</span>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Course Highlights */}
            <section id="course-details" className="py-20 relative">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${poppins.className}`}>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-yellow-300">
                                Why Choose Our Courses?
                            </span>
                        </h2>
                        <p className="text-lg text-gray-100 max-w-3xl mx-auto">
                            Tailored for beginners and aspiring developers to master coding with ease
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {courseFeatures.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -10 }}
                                className="bg-gray-800/50 backdrop-blur-sm border border-amber-200/30 rounded-xl p-8 hover:border-amber-300 transition-all hover:shadow-lg hover:shadow-amber-300/20"
                            >
                                <div className="mb-6 flex justify-center">
                                    <div className="p-4 bg-amber-500/20 rounded-full border border-amber-200/50">
                                        {feature.icon}
                                    </div>
                                </div>
                                <h3 className={`text-xl font-bold mb-3 ${poppins.className}`}>{feature.title}</h3>
                                <p className="text-gray-100">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Curriculum */}
            <section className="py-20 bg-gradient-to-br from-gray-900/80 to-gray-800/80 relative">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${poppins.className}`}>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-yellow-300">
                                Your Learning Path
                            </span>
                        </h2>
                        <p className="text-lg text-gray-100 max-w-3xl mx-auto">
                            Progress from novice to proficient coder with our structured curriculum
                        </p>
                    </motion.div>

                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={{
                                hidden: { opacity: 0 },
                                visible: {
                                    opacity: 1,
                                    transition: {
                                        staggerChildren: 0.1
                                    }
                                }
                            }}
                            className="relative"
                        >
                            <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-200/20 via-amber-300/50 to-amber-200/20"></div>

                            {curriculum.map((item, index) => (
                                <motion.div
                                    key={index}
                                    variants={{
                                        hidden: { opacity: 0, y: 20 },
                                        visible: { opacity: 1, y: 0 }
                                    }}
                                    className="relative pl-16 pb-10 group"
                                >
                                    <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-gray-800 border-2 border-amber-200 flex items-center justify-center z-10 group-hover:bg-amber-300 group-hover:border-amber-300 group-hover:shadow-lg group-hover:shadow-amber-300/30 transition-all">
                                        <div className="w-3 h-3 rounded-full bg-amber-200 group-hover:bg-gray-900 transition-all"></div>
                                    </div>

                                    <div className="bg-gray-800/50 backdrop-blur-sm border border-amber-200/30 rounded-xl p-6 hover:border-amber-300 transition-all hover:shadow-lg hover:shadow-amber-300/20 overflow-hidden">
                                        <div className="flex items-start">
                                            <div className="mr-4">
                                                <div className="w-12 h-12 rounded-lg bg-amber-300/10 border border-amber-200/30 flex items-center justify-center text-amber-200 text-xl font-bold">
                                                    {index + 1}
                                                </div>
                                            </div>
                                            <div className="flex-1">
                                                <h3 className={`text-xl font-bold mb-2 ${poppins.className}`}>{item}</h3>
                                                <p className="text-gray-200 text-sm">
                                                    {index % 3 === 0 ? "Core Foundation" :
                                                        index % 3 === 1 ? "Practical Application" : "Advanced Concept"}
                                                </p>
                                            </div>
                                            <div className="ml-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <div className="w-8 h-8 rounded-full bg-amber-300/20 border border-amber-200/50 flex items-center justify-center text-amber-200">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-4">
                                            <div className="h-1 w-full bg-gray-700/50 rounded-full overflow-hidden">
                                                <div
                                                    className="h-full bg-gradient-to-r from-amber-200 to-amber-300 rounded-full"
                                                    style={{ width: `${(index / (curriculum.length - 1)) * 100}%` }}
                                                ></div>
                                            </div>
                                            <div className="flex justify-between text-xs text-gray-400 mt-1">
                                                <span>Module {index + 1}</span>
                                                <span>{Math.round((index / (curriculum.length - 1)) * 100)}% complete</span>
                                            </div>
                                        </div>
                                    </div>

                                    {index < curriculum.length - 1 && (
                                        <div className="absolute left-5 top-10 bottom-0 w-0.5 bg-amber-200/30 group-hover:bg-amber-300/50 transition-colors"></div>
                                    )}
                                </motion.div>
                            ))}
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="mt-12 text-center"
                        >
                            <div className={`inline-flex items-center bg-gray-800/50 backdrop-blur-sm border border-amber-200/30 rounded-full px-6 py-3 ${poppins.className}`}>
                                <FaCertificate className="text-amber-200 mr-2" />
                                <span className="font-medium">Certificate of Completion</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Free Courses */}
            <section className="py-20 bg-gradient-to-br from-gray-900/50 to-gray-800/80 relative">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${poppins.className}`}>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-yellow-300">
                                Explore Our Free Courses
                            </span>
                        </h2>
                        <p className="text-lg text-gray-100 max-w-3xl mx-auto">
                            All courses include certification upon completion
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                        {freeCourses.map((course, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -10 }}
                                className="bg-gray-800/50 backdrop-blur-sm border border-amber-200/30 rounded-xl p-6 hover:border-amber-300 transition-all hover:shadow-lg hover:shadow-amber-300/20 flex flex-col"
                            >
                                <div className="mb-4 flex justify-center">
                                    <div className="p-3 bg-amber-300/10 rounded-lg border border-amber-200/50">
                                        {course.icon}
                                    </div>
                                </div>
                                <h3 className={`text-xl font-bold mb-2 ${poppins.className}`}>{course.title}</h3>
                                <p className="text-gray-200 text-sm mb-4 flex-grow">{course.description}</p>

                                <div className="mt-auto pt-4 border-t border-amber-200/30">
                                    <div className="flex justify-between text-xs text-gray-400">
                                        <span className="flex items-center">
                                            <FaRegClock className="mr-1" /> {course.duration}
                                        </span>
                                        <span className="flex items-center">
                                            <FaUserGraduate className="mr-1" /> {course.students}
                                        </span>
                                    </div>

                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Link
                                            href="#enroll"
                                            className={`mt-4 w-full py-2 bg-amber-300/20 hover:bg-amber-300/30 text-amber-200 text-sm font-medium rounded-md transition-all flex items-center justify-center ${poppins.className}`}
                                        >
                                            Enroll Free
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </Link>
                                    </motion.div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="mt-16 text-center"
                    >
                        <Link
                            href="#enroll"
                            className={`inline-flex items-center px-6 py-3 border border-amber-200 text-amber-200 hover:bg-amber-300/20 rounded-full transition-all ${poppins.className}`}
                        >
                            <FaGraduationCap className="mr-2" />
                            View All Course Details
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* CTA */}
            <section id="enroll" className="py-32 relative">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${poppins.className}`}>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-yellow-300">
                                    Begin Your Coding Adventure
                                </span>
                            </h2>
                            <p className="text-xl text-gray-100 mb-10 max-w-2xl mx-auto">
                                Completely free. No hidden fees. No credit card needed.
                            </p>
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="inline-block"
                            >
                                <Link
                                    href={'/pages/apply'}
                                    className={`px-12 py-5 bg-gradient-to-r from-amber-400 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 text-gray-900 font-bold rounded-full transition-all text-lg shadow-lg shadow-amber-400/30 hover:shadow-amber-400/50 ${poppins.className}`}
                                >
                                    Enroll Now
                                </Link>
                            </motion.div>
                            <div className="mt-8 text-gray-200">
                                <FaGraduationCap className="inline-block mr-2" />
                                Limited seats available
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FreeCoursePage;