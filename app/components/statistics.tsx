'use client'
import { MdOutlineSchool } from "react-icons/md";
import { FaAward } from "react-icons/fa6";
import { PiStudentBold } from "react-icons/pi";
import { PiCertificateDuotone } from "react-icons/pi";
import { GiDiploma } from "react-icons/gi";
import { Montserrat } from "next/font/google";
import { motion } from "framer-motion";

// Load Google Font
const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
});

export default function StatisticsComponent(){
    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3, // Stagger child animations
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 80, damping: 12 }, // Smooth spring effect
        },
    };
    return(
        <div
            className={`flex flex-col w-full items-center justify-center text-center gap-16 bg-gradient-to-br from-indigo-900 via-purple-800 to-indigo-900 py-16 sm:py-24 lg:py-32 ${montserrat.className}`}
        >
            {/* Title */}
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl font-bold text-white"
            >
                Important Facts & Statistics
            </motion.h2>

            {/* Facts Grid */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 px-4 w-full max-w-7xl"
            >
                {/* Professional Certifications */}
                <motion.div
                    variants={itemVariants}
                    className="relative flex flex-col items-center justify-center text-center bg-gradient-to-br from-indigo-600 to-purple-500 rounded-lg text-white p-6 shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
                >
                    <p className="text-5xl font-bold">10+</p>
                    <div className="flex flex-row items-center mt-4 text-xl">
                        <MdOutlineSchool size={55} className="mr-2 text-yellow-300" />
                        <p className="font-semibold">
                            Professional <br /> Certifications
                        </p>
                    </div>
                    {/* Shine Effect */}
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0"
                        animate={{
                            opacity: [0, 1, 0], // Fade in and out
                            x: ["-100%", "100%"], // Move shine effect horizontally
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    />
                </motion.div>

                {/* Specialization Programs */}
                <motion.div
                    variants={itemVariants}
                    className="relative flex flex-col items-center justify-center text-center bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg text-white p-6 shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
                >
                    <p className="text-5xl font-bold">7+</p>
                    <div className="flex flex-row items-center mt-4 text-xl">
                        <GiDiploma size={65} className="mr-2 text-yellow-300" />
                        <p className="font-semibold">
                            Specialization <br /> Programs
                        </p>
                    </div>
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

                {/* Skills Courses */}
                <motion.div
                    variants={itemVariants}
                    className="relative flex flex-col items-center justify-center text-center bg-gradient-to-br from-green-600 to-teal-500 rounded-lg text-white p-6 shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
                >
                    <p className="text-5xl font-bold">200+</p>
                    <div className="flex flex-row items-center mt-4 text-xl">
                        <PiCertificateDuotone size={65} className="mr-2 text-yellow-300" />
                        <p className="font-semibold">
                            Skills <br /> Courses
                        </p>
                    </div>
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

                {/* Active Students */}
                <motion.div
                    variants={itemVariants}
                    className="relative flex flex-col items-center justify-center text-center bg-gradient-to-br from-orange-600 to-yellow-500 rounded-lg text-white p-6 shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
                >
                    <p className="text-5xl font-bold">10+</p>
                    <div className="flex flex-row items-center mt-4 text-xl">
                        <PiStudentBold size={65} className="mr-2 text-yellow-300" />
                        <p className="font-semibold">
                            Active <br /> Students
                        </p>
                    </div>
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

                {/* Total Certified */}
                <motion.div
                    variants={itemVariants}
                    className="relative flex flex-col items-center justify-center text-center bg-gradient-to-br from-red-600 to-pink-500 rounded-lg text-white p-6 shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
                >
                    <p className="text-5xl font-bold">150+</p>
                    <div className="flex flex-row items-center mt-4 text-xl">
                        <FaAward size={65} className="mr-2 text-yellow-300" />
                        <p className="font-semibold">
                            Total <br /> Certified
                        </p>
                    </div>
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
    )
}