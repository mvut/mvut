'use client';
import { motion } from "framer-motion";
import { BsLightbulbFill, BsCodeSlash, BsGraphUp, BsRocketTakeoff, BsCheckCircle } from "react-icons/bs";
import { Montserrat } from "next/font/google";
import Link from "next/link";

const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
});

export default function ResearchComponent() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 100 }
        },
    };

    const programs = [
        {
            title: "AI & Emerging Tech",
            icon: <BsCodeSlash className="text-2xl text-indigo-600" />,
            features: [
                "AI Agents Development",
                "Prompt Engineering",
                "Machine Learning"
            ]
        },
        {
            title: "Computer Science",
            icon: <BsGraphUp className="text-2xl text-green-600" />,
            features: [
                "Software Engineering",
                "Cybersecurity",
                "Cloud Computing"
            ]
        },
        {
            title: "Research & Development",
            icon: <BsRocketTakeoff className="text-2xl text-red-600" />,
            features: [
                "Data Science",
                "Blockchain",
                "Quantum Computing"
            ]
        }
    ];

    const courses = [
        {
            name: "K.G. STEM Entrepreneurs",
            price: "$35/month",
            duration: "60 Weeks"
        },
        {
            name: "Certified AI Developer",
            price: "$35/month",
            duration: "72 Weeks"
        },
        {
            name: "Robotics Engineer",
            price: "$35/month",
            duration: "96 Weeks"
        }
    ];

    return (
        <div className={`w-full py-16 bg-white ${montserrat.className}`}>
            <div className="max-w-6xl mx-auto px-4">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <div className="flex justify-center mb-4">
                        <BsLightbulbFill className="text-4xl text-yellow-500" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Career-Focused Programs
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Practical education in high-demand tech fields with industry-aligned curriculum
                    </p>
                </motion.div>

                {/* Program Areas */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
                >
                    {programs.map((program, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -5 }}
                            className="bg-gray-50 rounded-lg p-6 border border-gray-200"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                {program.icon}
                                <h3 className="text-xl font-bold text-gray-900">{program.title}</h3>
                            </div>
                            <ul className="space-y-2">
                                {program.features.map((feature, i) => (
                                    <li key={i} className="flex items-start">
                                        <BsCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                                        <span className="text-gray-700">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Pricing */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="bg-indigo-50 rounded-xl p-8"
                >
                    <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold text-indigo-900 mb-2">Affordable Programs</h3>
                        <p className="text-gray-700">$70 admission fee for all programs</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        {courses.map((course, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white p-6 rounded-lg shadow-sm"
                            >
                                <h4 className="font-bold text-lg text-gray-900 mb-2">{course.name}</h4>
                                <p className="text-gray-700 mb-3">{course.price}</p>
                                <div className="flex items-center text-sm text-gray-600">
                                    <BsCheckCircle className="text-green-500 mr-2" />
                                    <span>{course.duration} program</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="text-center">
                        <Link
                            href="/pages/apply"
                            className="inline-block bg-indigo-700 hover:bg-indigo-800 text-white font-medium py-3 px-8 rounded-lg transition-colors"
                        >
                            Start Your Application
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}