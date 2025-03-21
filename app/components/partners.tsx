'use client';
import ABSI from '@/public/resources/partners/absi.png';
import MIKES from '@/public/resources/partners/mikesint.png';
import Image from "next/image";
import Link from "next/link";
import { SiMicrostrategy } from "react-icons/si";
import { TfiSharethis } from "react-icons/tfi";
import { motion } from "framer-motion";
import { Montserrat } from "next/font/google";

// Load Google Font
const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
});

export default function StrategicPartners() {
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

    return (
        <div
            className={`w-full py-20 bg-gradient-to-br from-teal-600 via-purple-500 to-indigo-600 ${montserrat.className}`}
        >
            {/* Title */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex flex-col items-center justify-center text-white text-center px-4"
            >
                <TfiSharethis size={50} className="text-yellow-300" />
                <h1 className="text-4xl font-bold mt-4">Our Strategic Partners</h1>
                <p className="text-lg text-gray-200 max-w-2xl mt-4">
                    We collaborate with leading organizations to drive innovation, foster growth, and deliver exceptional value to our community.
                </p>
            </motion.div>

            {/* Partner Logos and Descriptions */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-8 lg:px-16 mt-12"
            >
                {/* MIKES International */}
                <motion.div variants={itemVariants}>
                    <Link href="https://www.mikeversity.com/" target="_blank">
                        <motion.div
                            className="relative h-full bg-white/10 rounded-lg shadow-lg overflow-hidden flex flex-col items-center justify-center p-6 transition-all ease-in-out duration-300 hover:scale-105"
                            whileHover={{ scale: 1.05 }}
                        >
                            <Image
                                src={MIKES}
                                alt="MIKES International"
                                width={150}
                                height={100}
                                className="h-24 w-auto sm:h-32 object-contain"
                            />
                            <h2 className="text-xl font-semibold text-white mt-6">MIKES International</h2>
                            <p className="text-sm text-gray-200 mt-2 text-center">
                                A global leader in education and innovation, empowering learners worldwide.
                            </p>
                            <ul className="mt-4 space-y-2 text-left text-gray-200">
                                <li className="flex items-center">
                                    <span className="mr-2">•</span> Global education programs
                                </li>
                                <li className="flex items-center">
                                    <span className="mr-2">•</span> Cutting-edge research initiatives
                                </li>
                                <li className="flex items-center">
                                    <span className="mr-2">•</span> Industry-aligned certifications
                                </li>
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
                    </Link>
                </motion.div>

                {/* ASB International */}
                <motion.div variants={itemVariants}>
                    <Link href="https://absi.com.pk/" target="_blank">
                        <motion.div
                            className="relative h-full bg-white/10 rounded-lg shadow-lg overflow-hidden flex flex-col items-center justify-center p-6 transition-all ease-in-out duration-300 hover:scale-105"
                            whileHover={{ scale: 1.05 }}
                        >
                            <Image
                                src={ABSI}
                                alt="ASB International"
                                width={150}
                                height={100}
                                className="h-24 w-auto sm:h-32 object-contain"
                            />
                            <h2 className="text-xl font-semibold text-white mt-6">ASB International</h2>
                            <p className="text-sm text-gray-200 mt-2 text-center">
                                A pioneer in business solutions and strategic partnerships across industries.
                            </p>
                            <ul className="mt-4 space-y-2 text-left text-gray-200">
                                <li className="flex items-center">
                                    <span className="mr-2">•</span> Business consulting services
                                </li>
                                <li className="flex items-center">
                                    <span className="mr-2">•</span> Strategic market analysis
                                </li>
                                <li className="flex items-center">
                                    <span className="mr-2">•</span> Global partnership networks
                                </li>
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
                    </Link>
                </motion.div>

                {/* New Partner: Tech Innovators */}
                <motion.div variants={itemVariants}>
                    <Link href="" target="_blank">
                        <motion.div
                            className="relative h-full bg-white/10 rounded-lg shadow-lg overflow-hidden flex flex-col items-center justify-center p-6 transition-all ease-in-out duration-300 hover:scale-105"
                            whileHover={{ scale: 1.05 }}
                        >
                            <SiMicrostrategy size={60} className="text-yellow-300" />
                            <h2 className="text-xl font-semibold text-white mt-6">Tech Innovators</h2>
                            <p className="text-sm text-gray-200 mt-2 text-center">
                                Driving technological advancements and digital transformation globally.
                            </p>
                            <ul className="mt-4 space-y-2 text-left text-gray-200">
                                <li className="flex items-center">
                                    <span className="mr-2">•</span> AI and machine learning solutions
                                </li>
                                <li className="flex items-center">
                                    <span className="mr-2">•</span> Cloud computing platforms
                                </li>
                                <li className="flex items-center">
                                    <span className="mr-2">•</span> Cybersecurity innovations
                                </li>
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
                    </Link>
                </motion.div>
            </motion.div>

            {/* Call to Action */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-12 text-white text-lg text-center px-4"
            >
                <p>
                    Interested in becoming a strategic partner?{" "}
                    <Link href={""} className="text-yellow-300 hover:underline">
                        Contact us
                    </Link>{" "}
                    to explore collaboration opportunities.
                </p>
            </motion.div>
        </div>
    );
}