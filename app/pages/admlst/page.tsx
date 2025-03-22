'use client';
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaAward, FaBookOpen, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import Awais from '@/public/trainees/awais.jpg';
import Sami from '@/public/trainees/sami.jpg';
import Talha from '@/public/trainees/asad.jpg';
import Haroon from '@/public/trainees/haroonraza.jpg';
import Yassri from '@/public/trainees/yassri.jpeg';
import Babar from '@/public/trainees/babar.jpg';
import Samina from '@/public/faculty/dummy.png';
import Waseem from '@/public/trainees/waseem.jpg';
import Link from "next/link";

export default function ListOfAdmittedCandidates() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700 py-16 text-white font-sans">
            <div className="absolute inset-0 bg-black opacity-30"></div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
            >
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400 text-center mb-12"
                >
                    List of Admitted Candidates - Fall 2025
                </motion.h1>
                <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto text-center leading-relaxed mb-16">
                    We are thrilled to welcome our new cohort of talented individuals who have been admitted to MVIT&apos;s prestigious programs. Explore their profiles and celebrate their achievements.
                </p>

                {/* Candidate Cards */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6"
                >
                    {candidates.map((candidate, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className="flex items-center bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl shadow-lg p-4 hover:shadow-xl transition-all"
                        >
                            <Image
                                src={candidate.image}
                                alt={candidate.name}
                                width={64}
                                height={64}
                                className="rounded-full mr-4 border-2 border-teal-400 object-cover"
                            />
                            <div className="flex flex-col">
                                <h3 className="text-base sm:text-lg font-bold text-teal-400">{candidate.name}</h3>
                                <Link href={candidate.programLink} className="text-sm sm:text-base text-teal-400 hover:text-teal-500 transition-all mt-1">
                                    {candidate.programName}
                                </Link>
                                <p className="text-xs sm:text-sm text-gray-300 mt-1">{candidate.location}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Why Choose MVIT */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="mt-16 bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl shadow-lg p-8 text-center"
                >
                    <FaAward size={50} className="text-teal-400 mx-auto mb-6" />
                    <h2 className="text-2xl sm:text-3xl font-bold text-teal-400 mb-4">Why Choose MVIT?</h2>
                    <p className="text-sm sm:text-base leading-relaxed text-gray-200">
                        At MVIT, we provide cutting-edge education and training programs designed to empower students with the skills and knowledge needed to excel in their careers. Our programs are led by industry experts and supported by state-of-the-art resources.
                    </p>
                </motion.div>

                {/* Upcoming Programs */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="mt-16 bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl shadow-lg p-8 text-center"
                >
                    <FaBookOpen size={50} className="text-teal-400 mx-auto mb-6" />
                    <h2 className="text-2xl sm:text-3xl font-bold text-teal-400 mb-4">Upcoming Programs</h2>
                    <p className="text-sm sm:text-base leading-relaxed text-gray-200">
                        Stay tuned for exciting new programs launching in Spring 2025. These include advanced certifications in AI, blockchain, and cloud computing, as well as specialized workshops and bootcamps.
                    </p>
                </motion.div>

                {/* Testimonials */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="mt-16"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-teal-400 text-center mb-8">
                        What Our Students Say
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all"
                            >
                                <FaQuoteLeft size={20} className="text-teal-400 mb-4" />
                                <p className="text-sm sm:text-base text-gray-200 italic">
                                    &quot;{testimonial.quote}&quot;
                                </p>
                                <FaQuoteRight size={20} className="text-teal-400 ml-auto mt-4" />
                                <p className="text-teal-400 font-bold mt-4">{testimonial.name}</p>
                                <p className="text-gray-300">{testimonial.position}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
}

// Candidate Data
const candidates = [
    {
        name: "Muhammad Awais",
        programName: "Next-Generation Web Development with Python",
        programLink: "/pages/study/programs/nxgd",
        location: "MVIT, Pakistan",
        image: Awais,
    },
    {
        name: "Haroon Raza",
        programName: "Mansha Certified AI Agents Developer (MCAAD)",
        programLink: "/pages/study/programs/fsdn",
        location: "MVIT, Pakistan",
        image: Haroon,
    },
    {
        name: "Sami Muneer",
        programName: "Full Stack Development with Next.js (FSDN)",
        programLink: "/pages/study/programs/data-science",
        location: "MVIT, Pakistan",
        image: Sami,
    },
    {
        name: "Talha Zaheer",
        programName: "Full Stack Development with Next.js (FSDN)",
        programLink: "/pages/study/programs/blockchain",
        location: "MVIT, Pakistan",
        image: Talha,
    },
    {
        name: "Muhammad Yasir",
        programName: "Cloud Computing",
        programLink: "/pages/study/programs/cloud-computing",
        location: "MVIT, Pakistan",
        image: Yassri,
    },
    {
        name: "Babar Hussain",
        programName: "Cybersecurity Fundamentals",
        programLink: "/pages/study/programs/cybersecurity",
        location: "MVIT, Pakistan",
        image: Babar,
    },
    {
        name: "Samina Hassan",
        programName: "Mansha Certified AI Agents Developer (MCAAD)",
        programLink: "/pages/study/programs/ai",
        location: "MVIT, Pakistan",
        image: Samina,
    },
    {
        name: "Muhammad Waseem Ilyas",
        programName: "Mansha Certified AI Agents Developer (MCAAD)",
        programLink: "/pages/study/programs/ai",
        location: "MVIT, Pakistan",
        image: Waseem,
    },
];

// Testimonials Data
const testimonials = [
    {
        quote:
            "MVIT has provided me with the skills and confidence to pursue my dream career in web development.",
        name: "John Doe",
        position: "Alumnus, Class of 2023",
    },
    {
        quote:
            "The faculty and resources at MVIT are exceptional. I couldn't have asked for a better learning experience.",
        name: "Jane Smith",
        position: "Current Student",
    },
    {
        quote:
            "MVIT's programs are designed to meet the demands of modern industries. Highly recommend!",
        name: "Alice Johnson",
        position: "AI Enthusiast",
    },
];