'use client';

import { MdOutlineSchool } from "react-icons/md";
import { FaAward } from "react-icons/fa6";
import { PiStudentBold, PiCertificateDuotone } from "react-icons/pi";
import { GiDiploma } from "react-icons/gi";
import { Montserrat } from "next/font/google";
import { motion } from "framer-motion";

const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
});

export default function StatisticsComponent() {
    const stats = [
        {
            value: "10+",
            label: "Professional Certifications",
            icon: <MdOutlineSchool className="text-3xl" />,
            color: "from-indigo-500 to-indigo-600"
        },
        {
            value: "7+",
            label: "Specialization Programs",
            icon: <GiDiploma className="text-3xl" />,
            color: "from-blue-500 to-blue-600"
        },
        {
            value: "200+",
            label: "Skills Courses",
            icon: <PiCertificateDuotone className="text-3xl" />,
            color: "from-green-500 to-green-600"
        },
        {
            value: "10+",
            label: "Active Students",
            icon: <PiStudentBold className="text-3xl" />,
            color: "from-amber-500 to-amber-600"
        },
        {
            value: "150+",
            label: "Total Certified",
            icon: <FaAward className="text-3xl" />,
            color: "from-rose-500 to-rose-600"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 12
            },
        },
    };

    return (
        <div className={`w-full bg-gray-50 py-16 sm:py-24 lg:py-32 ${montserrat.className}`}>
            <div className="max-w-7xl mx-auto px-4">
                {/* Title */}
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12"
                >
                    Key <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-600">Statistics</span>
                </motion.h2>

                {/* Stats Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -5 }}
                            className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 overflow-hidden"
                        >
                            <div className={`h-2 bg-gradient-to-r ${stat.color}`}></div>
                            <div className="p-6 flex flex-col items-center text-center">
                                <div className={`p-3 rounded-lg bg-gradient-to-br ${stat.color} text-white mb-4`}>
                                    {stat.icon}
                                </div>
                                <p className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</p>
                                <p className="text-lg font-medium text-gray-700">{stat.label}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}