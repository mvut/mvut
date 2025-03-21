'use client';
import { GiArchiveResearch, GiBookshelf, GiGlobe, GiGraduateCap, GiTeacher, GiFamilyHouse } from "react-icons/gi";
import { FaLaptopCode, FaHandsHelping, FaUserFriends, FaChild } from "react-icons/fa";
import { MdWork, MdOutlineSecurity } from "react-icons/md";
import { motion } from "framer-motion";
import { Montserrat } from "next/font/google";

// Load Google Font
const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
});

export default function WhyUsComponent() {
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
        <div className={`flex flex-col gap-10 h-auto items-center justify-center py-16 px-4 bg-gradient-to-br from-gray-50 to-gray-100 ${montserrat.className}`}>
            {/* Title */}
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl sm:text-5xl font-bold text-gray-800 text-center"
            >
                Why MVIT?
            </motion.h1>

            {/* Features Grid */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full max-w-7xl px-4"
            >
                {/* Feature 1: Online Affordable Education */}
                <motion.div
                    variants={itemVariants}
                    className="flex flex-col items-center justify-center text-center gap-4 text-gray-800 hover:text-amber-500 transition-all ease-in-out duration-300 rounded-lg p-6 bg-white shadow-md hover:shadow-xl hover:scale-105"
                >
                    <GiBookshelf size={80} className="text-amber-500" />
                    <p className="text-xl font-semibold">Online Affordable Education</p>
                    <p className="text-gray-600">Accessible and affordable education for everyone, anywhere.</p>
                </motion.div>

                {/* Feature 2: Code Literacy for All */}
                <motion.div
                    variants={itemVariants}
                    className="flex flex-col items-center justify-center text-center gap-4 text-gray-800 hover:text-amber-500 transition-all ease-in-out duration-300 rounded-lg p-6 bg-white shadow-md hover:shadow-xl hover:scale-105"
                >
                    <FaLaptopCode size={80} className="text-amber-500" />
                    <p className="text-xl font-semibold">Code Literacy for All</p>
                    <p className="text-gray-600">Empowering individuals with coding skills for the digital age.</p>
                </motion.div>

                {/* Feature 3: United Minds, Global Learning */}
                <motion.div
                    variants={itemVariants}
                    className="flex flex-col items-center justify-center text-center gap-4 text-gray-800 hover:text-amber-500 transition-all ease-in-out duration-300 rounded-lg p-6 bg-white shadow-md hover:shadow-xl hover:scale-105"
                >
                    <GiGlobe size={80} className="text-amber-500" />
                    <p className="text-xl font-semibold">United Minds, Global Learning</p>
                    <p className="text-gray-600">Connecting learners worldwide for a collaborative educational experience.</p>
                </motion.div>

                {/* Feature 4: Hands-on Research Experience */}
                <motion.div
                    variants={itemVariants}
                    className="flex flex-col items-center justify-center text-center gap-4 text-gray-800 hover:text-amber-500 transition-all ease-in-out duration-300 rounded-lg p-6 bg-white shadow-md hover:shadow-xl hover:scale-105"
                >
                    <GiArchiveResearch size={80} className="text-amber-500" />
                    <p className="text-xl font-semibold">Hands-on Research Experience</p>
                    <p className="text-gray-600">Practical research opportunities to solve real-world problems.</p>
                </motion.div>

                {/* Feature 5: Expert Faculty */}
                <motion.div
                    variants={itemVariants}
                    className="flex flex-col items-center justify-center text-center gap-4 text-gray-800 hover:text-amber-500 transition-all ease-in-out duration-300 rounded-lg p-6 bg-white shadow-md hover:shadow-xl hover:scale-105"
                >
                    <GiTeacher size={80} className="text-amber-500" />
                    <p className="text-xl font-semibold">Expert Faculty</p>
                    <p className="text-gray-600">Learn from industry experts and experienced educators.</p>
                </motion.div>

                {/* Feature 6: Career Support and Placement */}
                <motion.div
                    variants={itemVariants}
                    className="flex flex-col items-center justify-center text-center gap-4 text-gray-800 hover:text-amber-500 transition-all ease-in-out duration-300 rounded-lg p-6 bg-white shadow-md hover:shadow-xl hover:scale-105"
                >
                    <MdWork size={80} className="text-amber-500" />
                    <p className="text-xl font-semibold">Career Support and Placement</p>
                    <p className="text-gray-600">Comprehensive career services to help you land your dream job.</p>
                </motion.div>

                {/* Feature 7: Collaborative Learning Environment */}
                <motion.div
                    variants={itemVariants}
                    className="flex flex-col items-center justify-center text-center gap-4 text-gray-800 hover:text-amber-500 transition-all ease-in-out duration-300 rounded-lg p-6 bg-white shadow-md hover:shadow-xl hover:scale-105"
                >
                    <FaUserFriends size={80} className="text-amber-500" />
                    <p className="text-xl font-semibold">Collaborative Learning Environment</p>
                    <p className="text-gray-600">Work with peers on projects and build a strong professional network.</p>
                </motion.div>

                {/* Feature 8: Industry-Relevant Curriculum */}
                <motion.div
                    variants={itemVariants}
                    className="flex flex-col items-center justify-center text-center gap-4 text-gray-800 hover:text-amber-500 transition-all ease-in-out duration-300 rounded-lg p-6 bg-white shadow-md hover:shadow-xl hover:scale-105"
                >
                    <GiGraduateCap size={80} className="text-amber-500" />
                    <p className="text-xl font-semibold">Industry-Relevant Curriculum</p>
                    <p className="text-gray-600">Stay ahead with courses designed to meet industry demands.</p>
                </motion.div>

                {/* Feature 9: Personalized Learning Paths */}
                <motion.div
                    variants={itemVariants}
                    className="flex flex-col items-center justify-center text-center gap-4 text-gray-800 hover:text-amber-500 transition-all ease-in-out duration-300 rounded-lg p-6 bg-white shadow-md hover:shadow-xl hover:scale-105"
                >
                    <FaHandsHelping size={80} className="text-amber-500" />
                    <p className="text-xl font-semibold">Personalized Learning Paths</p>
                    <p className="text-gray-600">Tailored courses to match your career goals and learning pace.</p>
                </motion.div>

                {/* Feature 10: Cutting-Edge Technology */}
                <motion.div
                    variants={itemVariants}
                    className="flex flex-col items-center justify-center text-center gap-4 text-gray-800 hover:text-amber-500 transition-all ease-in-out duration-300 rounded-lg p-6 bg-white shadow-md hover:shadow-xl hover:scale-105"
                >
                    <MdOutlineSecurity size={80} className="text-amber-500" />
                    <p className="text-xl font-semibold">Cutting-Edge Technology</p>
                    <p className="text-gray-600">Access to the latest tools and technologies in your field of study.</p>
                </motion.div>

                {/* Feature 11: Kindergarten Courses */}
                <motion.div
                    variants={itemVariants}
                    className="flex flex-col items-center justify-center text-center gap-4 text-gray-800 hover:text-amber-500 transition-all ease-in-out duration-300 rounded-lg p-6 bg-white shadow-md hover:shadow-xl hover:scale-105"
                >
                    <FaChild size={80} className="text-amber-500" />
                    <p className="text-xl font-semibold">Kindergarten Intelligence (KI)</p>
                    <p className="text-gray-600">Nurture young minds with engaging and age-appropriate learning programs.</p>
                </motion.div>

                {/* Feature 12: Parenting Empowerment */}
                <motion.div
                    variants={itemVariants}
                    className="flex flex-col items-center justify-center text-center gap-4 text-gray-800 hover:text-amber-500 transition-all ease-in-out duration-300 rounded-lg p-6 bg-white shadow-md hover:shadow-xl hover:scale-105"
                >
                    <GiFamilyHouse size={80} className="text-amber-500" />
                    <p className="text-xl font-semibold">Parenting Empowerment</p>
                    <p className="text-gray-600">Supporting parents with resources and guidance for effective child development.</p>
                </motion.div>
            </motion.div>
        </div>
    );
}