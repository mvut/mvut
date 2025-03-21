'use client';
import { FaGlobe, FaChartBar, FaLaptopCode, FaLeaf, FaHeartbeat } from "react-icons/fa";
import { GiVintageRobot, GiBookshelf } from "react-icons/gi";
import { IoBusiness } from "react-icons/io5";
import { LuLanguages } from "react-icons/lu";
import { MdOutlineSupervisedUserCircle, MdScience } from "react-icons/md";
import { FcReading } from "react-icons/fc";
import { motion } from "framer-motion";
import { Montserrat } from "next/font/google";
import {FaComputer} from "react-icons/fa6";

// Load Google Font
const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
});

export default function StudyAreaComponent() {
    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2, // Stagger child animations
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 100, damping: 15 },
        },
    };

    return (
        <div className={`flex flex-col items-center justify-center py-24 bg-gradient-to-br from-indigo-900 via-purple-800 to-indigo-900 ${montserrat.className}`}>
            {/* Title */}
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex items-center justify-center text-4xl font-bold pb-16 text-white"
            >
                <FcReading size={45} className="mr-4" />
                Areas of Study
            </motion.h2>

            {/* Study Areas Grid */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 w-full max-w-7xl px-4"
            >
                {/* Computer Science */}
                <motion.div
                    variants={itemVariants}
                    className="relative flex flex-col items-start justify-start gap-4 bg-gradient-to-br from-indigo-600 to-purple-500 rounded-lg text-white p-6 shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
                >
                    <FaComputer size={40} className="text-yellow-300" />
                    <p className="text-xl font-semibold">Computer Science</p>
                    <p className="text-gray-200">Explore programming, algorithms, and software development.</p>
                    <ul className="text-sm text-gray-300 list-disc list-inside">
                        <li>Key Skills: Coding, Problem Solving, Data Structures</li>
                        <li>Career Opportunities: Software Engineer, Data Scientist</li>
                    </ul>
                    {/* Shine Effect */}
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0"
                        animate={{
                            opacity: [0, 1, 0],
                            x: ["-100%", "100%"],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    />
                </motion.div>

                {/* Information Technology */}
                <motion.div
                    variants={itemVariants}
                    className="relative flex flex-col items-start justify-start gap-4 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg text-white p-6 shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
                >
                    <FaGlobe size={40} className="text-yellow-300" />
                    <p className="text-xl font-semibold">Information Technology</p>
                    <p className="text-gray-200">Learn about networks, cybersecurity, and IT infrastructure.</p>
                    <ul className="text-sm text-gray-300 list-disc list-inside">
                        <li>Key Skills: Networking, Cybersecurity, Cloud Computing</li>
                        <li>Career Opportunities: IT Manager, Cybersecurity Analyst</li>
                    </ul>
                    {/* Shine Effect */}
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0"
                        animate={{
                            opacity: [0, 1, 0],
                            x: ["-100%", "100%"],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    />
                </motion.div>

                {/* Artificial Intelligence */}
                <motion.div
                    variants={itemVariants}
                    className="relative flex flex-col items-start justify-start gap-4 bg-gradient-to-br from-pink-600 to-red-500 rounded-lg text-white p-6 shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
                >
                    <GiVintageRobot size={40} className="text-yellow-300" />
                    <p className="text-xl font-semibold">Artificial Intelligence</p>
                    <p className="text-gray-200">Dive into machine learning, neural networks, and AI ethics.</p>
                    <ul className="text-sm text-gray-300 list-disc list-inside">
                        <li>Key Skills: Machine Learning, Deep Learning, NLP</li>
                        <li>Career Opportunities: AI Engineer, Data Scientist</li>
                    </ul>
                    {/* Shine Effect */}
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0"
                        animate={{
                            opacity: [0, 1, 0],
                            x: ["-100%", "100%"],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    />
                </motion.div>

                {/* Data Science */}
                <motion.div
                    variants={itemVariants}
                    className="relative flex flex-col items-start justify-start gap-4 bg-gradient-to-br from-green-600 to-teal-500 rounded-lg text-white p-6 shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
                >
                    <FaChartBar size={40} className="text-yellow-300" />
                    <p className="text-xl font-semibold">Data Science</p>
                    <p className="text-gray-200">Master data analysis, visualization, and predictive modeling.</p>
                    <ul className="text-sm text-gray-300 list-disc list-inside">
                        <li>Key Skills: Data Analysis, Python, SQL</li>
                        <li>Career Opportunities: Data Analyst, Business Intelligence</li>
                    </ul>
                    {/* Shine Effect */}
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0"
                        animate={{
                            opacity: [0, 1, 0],
                            x: ["-100%", "100%"],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    />
                </motion.div>

                {/* Business & Management Studies */}
                <motion.div
                    variants={itemVariants}
                    className="relative flex flex-col items-start justify-start gap-4 bg-gradient-to-br from-orange-600 to-yellow-500 rounded-lg text-white p-6 shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
                >
                    <IoBusiness size={40} className="text-yellow-300" />
                    <p className="text-xl font-semibold">Business & Management Studies</p>
                    <p className="text-gray-200">Develop leadership, strategy, and entrepreneurial skills.</p>
                    <ul className="text-sm text-gray-300 list-disc list-inside">
                        <li>Key Skills: Leadership, Marketing, Finance</li>
                        <li>Career Opportunities: Business Analyst, Entrepreneur</li>
                    </ul>
                    {/* Shine Effect */}
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0"
                        animate={{
                            opacity: [0, 1, 0],
                            x: ["-100%", "100%"],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    />
                </motion.div>

                {/* E-Commerce & Finance */}
                <motion.div
                    variants={itemVariants}
                    className="relative flex flex-col items-start justify-start gap-4 bg-gradient-to-br from-purple-600 to-indigo-500 rounded-lg text-white p-6 shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
                >
                    <IoBusiness size={40} className="text-yellow-300" />
                    <p className="text-xl font-semibold">E-Commerce & Finance</p>
                    <p className="text-gray-200">Learn about online business models and financial systems.</p>
                    <ul className="text-sm text-gray-300 list-disc list-inside">
                        <li>Key Skills: Digital Marketing, Financial Analysis</li>
                        <li>Career Opportunities: E-Commerce Manager, Financial Analyst</li>
                    </ul>
                    {/* Shine Effect */}
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0"
                        animate={{
                            opacity: [0, 1, 0],
                            x: ["-100%", "100%"],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    />
                </motion.div>

                {/* English Linguistic Studies */}
                <motion.div
                    variants={itemVariants}
                    className="relative flex flex-col items-start justify-start gap-4 bg-gradient-to-br from-teal-600 to-green-500 rounded-lg text-white p-6 shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
                >
                    <LuLanguages size={40} className="text-yellow-300" />
                    <p className="text-xl font-semibold">English Linguistic Studies</p>
                    <p className="text-gray-200">Study language structure, literature, and communication.</p>
                    <ul className="text-sm text-gray-300 list-disc list-inside">
                        <li>Key Skills: Writing, Critical Thinking, Communication</li>
                        <li>Career Opportunities: Content Writer, Linguist</li>
                    </ul>
                    {/* Shine Effect */}
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0"
                        animate={{
                            opacity: [0, 1, 0],
                            x: ["-100%", "100%"],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    />
                </motion.div>

               {/* Environmental Science */}
                <motion.div
                    variants={itemVariants}
                    className="relative flex flex-col items-start justify-start gap-4 bg-gradient-to-br from-green-600 to-teal-500 rounded-lg text-white p-6 shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
                >
                    <FaLeaf size={40} className="text-yellow-300" />
                    <p className="text-xl font-semibold">Environmental Science</p>
                    <p className="text-gray-200">Study ecosystems, sustainability, and climate change solutions.</p>
                    <ul className="text-sm text-gray-300 list-disc list-inside">
                        <li>Key Skills: Environmental Analysis, Sustainability, Research</li>
                        <li>Career Opportunities: Environmental Scientist, Conservationist</li>
                    </ul>
                    {/* Shine Effect */}
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0"
                        animate={{
                            opacity: [0, 1, 0],
                            x: ["-100%", "100%"],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    />
                </motion.div>

                {/* Health & Wellness */}
                <motion.div
                    variants={itemVariants}
                    className="relative flex flex-col items-start justify-start gap-4 bg-gradient-to-br from-pink-600 to-red-500 rounded-lg text-white p-6 shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
                >
                    <FaHeartbeat size={40} className="text-yellow-300" />
                    <p className="text-xl font-semibold">Health & Wellness</p>
                    <p className="text-gray-200">Promote physical and mental well-being through holistic practices.</p>
                    <ul className="text-sm text-gray-300 list-disc list-inside">
                        <li>Key Skills: Nutrition, Fitness, Mental Health</li>
                        <li>Career Opportunities: Wellness Coach, Nutritionist</li>
                    </ul>
                    {/* Shine Effect */}
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0"
                        animate={{
                            opacity: [0, 1, 0],
                            x: ["-100%", "100%"],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    />
                </motion.div>
            </motion.div>
        </div>
    );
}