'use client'
import Image from "next/image";
import ArshadIqbal from "@/public/faculty/arshadiqbal.jpg";
import Mabbas from "@/public/faculty/mabbas.jpg";
import Abid from "@/public/faculty/abid.jpg";
import Sohail from "@/public/faculty/sohail2.jpg";
import Link from "next/link";
import {FaArrowAltCircleLeft} from "react-icons/fa";
import { motion } from 'framer-motion';

export default function DataScienceDepartment(){
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.3, delayChildren: 0.3 },
        },
    };

    const itemVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.8 } },
    };
    return(
        <div className="container flex flex-col py-16 bg-gradient-to-b from-gray-50 to-blue-50">
            {/* Back Link */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-start"
            >
                <motion.a
                    variants={itemVariants}
                    href="/pages/faculty"
                    className="flex text-lg hover:text-red-500 items-center gap-2 transition-all duration-300"
                >
                    <FaArrowAltCircleLeft size={24} /> Faculties
                </motion.a>
            </motion.div>

            {/* Faculty Title */}
            <motion.h1
                variants={itemVariants}
                className="text-xl md:text-2xl lg:text-3xl font-bold text-blue-900 text-start py-4"
            >
                Faculty of Data Science & Machine Learning
            </motion.h1>

            {/* Faculty Description */}
            <motion.p
                variants={itemVariants}
                className="text-xs sm:text-sm text-gray-700 leading-relaxed"
            >
                The Faculty of Data Science & Machine Learning at MVIT empowers students to unlock insights from complex data, driving informed decision-making and innovation. Our interdisciplinary program combines computer science, statistics, and domain expertise to foster proficiency in data analytics, machine learning, deep learning, and artificial intelligence. With a focus on data visualization, natural language processing, cognitive computing, and data engineering, students gain hands-on experience with cutting-edge tools like Python, R, TensorFlow, and PyTorch. Renowned researchers and industry partners deliver a forward-thinking curriculum, preparing graduates for careers in data science, AI engineering, and research, enabling them to transform industries and address real-world challenges.
            </motion.p>

            {/* Faculty Members Grid */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-12"
            >
                {/* Faculty Member 1 */}
                <motion.div
                    variants={itemVariants}
                    className="flex flex-col items-center justify-center gap-4 p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                    <div className="border-4 border-blue-500 rounded-full overflow-hidden">
                        <Image
                            src={ArshadIqbal} // Replace with actual image path
                            alt="Arshad Iqbal"
                            width={150}
                            height={150}
                            className="rounded-full"
                        />
                    </div>
                    <div className="text-center">
                        <h2 className="text-lg font-bold text-blue-900">Arshad Iqbal</h2>
                        <p className="text-sm text-gray-600">M.Phil. Statistics, M. Ed.</p>
                        <p className="text-sm text-gray-600">Instructor Data Science</p>
                        <p className="text-sm text-gray-600">Pakistan</p>
                    </div>
                </motion.div>

                {/* Faculty Member 2 */}
                <motion.div
                    variants={itemVariants}
                    className="flex flex-col items-center justify-center gap-4 p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                    <div className="border-4 border-blue-500 rounded-full overflow-hidden">
                        <Image
                            src={Mabbas} // Replace with actual image path
                            alt="Abbas Muhammad"
                            width={150}
                            height={150}
                            className="rounded-full"
                        />
                    </div>
                    <div className="text-center">
                        <h2 className="text-lg font-bold text-blue-900">Abbas Muhammad</h2>
                        <p className="text-sm text-gray-600">MS (CS), B. Ed.</p>
                        <p className="text-sm text-gray-600">Instructor SE & Databases</p>
                        <p className="text-sm text-gray-600">Pakistan</p>
                    </div>
                </motion.div>

                {/* Faculty Member 3 */}
                <motion.div
                    variants={itemVariants}
                    className="flex flex-col items-center justify-center gap-4 p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                    <div className="border-4 border-blue-500 rounded-full overflow-hidden">
                        <Image
                            src={Abid} // Replace with actual image path
                            alt="Abid Hussain"
                            width={150}
                            height={150}
                            className="rounded-full"
                        />
                    </div>
                    <div className="text-center">
                        <h2 className="text-lg font-bold text-blue-900">Abid Hussain</h2>
                        <p className="text-sm text-gray-600">MS (CS), M. Ed.</p>
                        <p className="text-sm text-gray-600">Instructor CS & Simulations</p>
                        <p className="text-sm text-gray-600">Pakistan</p>
                    </div>
                </motion.div>

                {/* Faculty Member 4 */}
                <motion.div
                    variants={itemVariants}
                    className="flex flex-col items-center justify-center gap-4 p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                    <div className="border-4 border-blue-500 rounded-full overflow-hidden">
                        <Image
                            src={Sohail} // Replace with actual image path
                            alt="Sohail Ahmed"
                            width={150}
                            height={150}
                            className="rounded-full"
                        />
                    </div>
                    <div className="text-center">
                        <h2 className="text-lg font-bold text-blue-900">Sohail Ahmed</h2>
                        <p className="text-sm text-gray-600">MS (CS), M. Ed.</p>
                        <p className="text-sm text-gray-600">Instructor R&D, Simulation</p>
                        <p className="text-sm text-gray-600">Pakistan</p>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    )
}