'use client';
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaAward, FaBookOpen, FaQuoteLeft, FaQuoteRight, FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa";
import Awais from '@/public/trainees/awais.jpg';
import Sami from '@/public/trainees/sami.jpg';
import Talha from '@/public/trainees/asad.jpg';
import Haroon from '@/public/trainees/haroonraza.jpg';
import Yassri from '@/public/trainees/yassri.jpeg';
import Babar from '@/public/trainees/babar.jpg';
import Samina from '@/public/faculty/dummy.png';
import Waseem from '@/public/trainees/waseem.jpg';
import Link from "next/link";
import Shahmeer from '@/public/trainees/shameer.jpg'

export default function ListOfAdmittedCandidates() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-red-900 via-black to-red-900 py-16 text-white font-sans">
            <div className="absolute inset-0 bg-black opacity-40"></div>

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
                    className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600 text-center mb-8"
                >
                    Fall 2025 Admitted Candidates
                </motion.h1>
                <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto text-center leading-relaxed mb-12">
                    Meet the exceptional individuals selected for our Fall 2025 cohort. These talented candidates have demonstrated outstanding potential in their respective fields.
                </p>

                {/* Stats Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
                >
                    <div className="bg-black bg-opacity-50 rounded-xl p-4 text-center border border-red-800">
                        <div className="text-3xl font-bold text-red-400">9</div>
                        <div className="text-sm text-gray-300">Total Candidates</div>
                    </div>
                    <div className="bg-black bg-opacity-50 rounded-xl p-4 text-center border border-red-800">
                        <div className="text-3xl font-bold text-red-400">4</div>
                        <div className="text-sm text-gray-300">Programs</div>
                    </div>
                    <div className="bg-black bg-opacity-50 rounded-xl p-4 text-center border border-red-800">
                        <div className="text-3xl font-bold text-red-400">100%</div>
                        <div className="text-sm text-gray-300">Merit-Based</div>
                    </div>
                    <div className="bg-black bg-opacity-50 rounded-xl p-4 text-center border border-red-800">
                        <div className="text-3xl font-bold text-red-400">5:1</div>
                        <div className="text-sm text-gray-300">Applicant Ratio</div>
                    </div>
                </motion.div>

                {/* Candidate Cards */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {candidates.map((candidate, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="bg-black bg-opacity-50 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden border border-red-900 hover:border-red-600 transition-all"
                        >
                            <div className="p-6">
                                <div className="flex items-center mb-4">
                                    <Image
                                        src={candidate.image}
                                        alt={candidate.name}
                                        width={80}
                                        height={80}
                                        className="rounded-full border-2 border-red-500 object-cover"
                                    />
                                    <div className="ml-4">
                                        <h3 className="text-xl font-bold text-red-400">{candidate.name}</h3>
                                        <Link href={candidate.programLink} className="text-sm text-red-300 hover:text-red-200 transition-colors">
                                            {candidate.programName}
                                        </Link>
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <div className="flex items-center text-sm text-gray-300 mb-2">
                                        <span className="font-medium mr-2">Background:</span>
                                        {candidate.background}
                                    </div>
                                    <div className="flex items-center text-sm text-gray-300 mb-2">
                                        <span className="font-medium mr-2">Specialization:</span>
                                        {candidate.specialization}
                                    </div>
                                    <div className="flex items-center text-sm text-gray-300">
                                        <span className="font-medium mr-2">Admission Date:</span>
                                        {candidate.admissionDate}
                                    </div>
                                </div>

                                <div className="flex space-x-3 mt-4">
                                    {candidate.github && (
                                        <a href={candidate.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                            <FaGithub size={18} />
                                        </a>
                                    )}
                                    {candidate.linkedin && (
                                        <a href={candidate.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                                            <FaLinkedin size={18} />
                                        </a>
                                    )}
                                    {candidate.portfolio && (
                                        <a href={candidate.portfolio} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-400 transition-colors">
                                            <FaGlobe size={18} />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Admission Criteria */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="mt-20 bg-black bg-opacity-50 backdrop-blur-sm rounded-xl shadow-lg p-8 border border-red-900"
                >
                    <h2 className="text-2xl sm:text-3xl font-bold text-red-400 mb-6 text-center">Admission Criteria</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-black bg-opacity-30 p-4 rounded-lg border border-red-900">
                            <h3 className="text-lg font-semibold text-red-300 mb-2">Technical Skills</h3>
                            <p className="text-sm text-gray-300">Evaluation of programming proficiency, problem-solving abilities, and technical project experience.</p>
                        </div>
                        <div className="bg-black bg-opacity-30 p-4 rounded-lg border border-red-900">
                            <h3 className="text-lg font-semibold text-red-300 mb-2">Academic Record</h3>
                            <p className="text-sm text-gray-300">Assessment of previous academic performance and relevant coursework.</p>
                        </div>
                        <div className="bg-black bg-opacity-30 p-4 rounded-lg border border-red-900">
                            <h3 className="text-lg font-semibold text-red-300 mb-2">Interview Performance</h3>
                            <p className="text-sm text-gray-300">Evaluation of communication skills, motivation, and cultural fit during the interview process.</p>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
}

// Enhanced Candidate Data
const candidates = [
    {
        name: "Muhammad Awais",
        programName: "Next-Gen Web Development with Python",
        programLink: "/pages/study/programs/nxgd",
        background: "Computer Science, 3 years experience",
        specialization: "Frontend Development, React",
        admissionDate: "August 15, 2025",
        github: "https://github.com/awais",
        linkedin: "https://linkedin.com/in/awais",
        portfolio: "https://awais.dev",
        location: "Lahore, Pakistan",
        image: Awais,
    },
    {
        name: "Haroon Raza",
        programName: "Mansha Certified AI Agents Developer",
        programLink: "/pages/study/programs/fsdn",
        background: "Software Engineering, AI focus",
        specialization: "Machine Learning, NLP",
        admissionDate: "August 18, 2025",
        github: "https://github.com/haroon",
        linkedin: "https://linkedin.com/in/haroon",
        location: "Karachi, Pakistan",
        image: Haroon,
    },
    {
        name: "Sami Muneer",
        programName: "Full Stack Development with Next.js",
        programLink: "/pages/study/programs/data-science",
        background: "Web Development, 2 years experience",
        specialization: "JavaScript, Node.js",
        admissionDate: "August 12, 2025",
        github: "https://github.com/sami",
        portfolio: "https://sami.tech",
        location: "Islamabad, Pakistan",
        image: Sami,
    },
    {
        name: "Talha Zaheer",
        programName: "Full Stack Development with Next.js",
        programLink: "/pages/study/programs/blockchain",
        background: "Computer Engineering graduate",
        specialization: "Full Stack Development",
        admissionDate: "August 20, 2025",
        linkedin: "https://linkedin.com/in/talha",
        location: "Rawalpindi, Pakistan",
        image: Talha,
    },
    {
        name: "Muhammad Yasir",
        programName: "Cloud Computing",
        programLink: "/pages/study/programs/cloud-computing",
        background: "IT Professional, DevOps",
        specialization: "AWS, Azure",
        admissionDate: "August 17, 2025",
        github: "https://github.com/yasir",
        linkedin: "https://linkedin.com/in/yasir",
        location: "Peshawar, Pakistan",
        image: Yassri,
    },
    {
        name: "Babar Hussain",
        programName: "Cybersecurity Fundamentals",
        programLink: "/pages/study/programs/cybersecurity",
        background: "Network Security Specialist",
        specialization: "Ethical Hacking",
        admissionDate: "August 14, 2025",
        github: "https://github.com/babar",
        location: "Multan, Pakistan",
        image: Babar,
    },
    {
        name: "Samina Hassan",
        programName: "Mansha Certified AI Agents Developer",
        programLink: "/pages/study/programs/ai",
        background: "Data Science graduate",
        specialization: "Computer Vision",
        admissionDate: "August 19, 2025",
        linkedin: "https://linkedin.com/in/samina",
        portfolio: "https://samina.ai",
        location: "Faisalabad, Pakistan",
        image: Samina,
    },
    {
        name: "Muhammad Waseem Ilyas",
        programName: "Mansha Certified AI Agents Developer",
        programLink: "/pages/study/programs/ai",
        background: "AI Researcher",
        specialization: "Deep Learning",
        admissionDate: "August 16, 2025",
        github: "https://github.com/waseem",
        linkedin: "https://linkedin.com/in/waseem",
        location: "Gujranwala, Pakistan",
        image: Waseem,
    },
    {
        name: "Shahmeer Shahzad",
        programName: "Mansha Certified AI Agents Developer",
        programLink: "/pages/study/programs/ai",
        background: "Computer Science, AI focus",
        specialization: "Reinforcement Learning",
        admissionDate: "August 21, 2025",
        github: "https://github.com/shahmeer",
        portfolio: "https://shahmeer.ai",
        location: "Sialkot, Pakistan",
        image: Shahmeer,
    },
];