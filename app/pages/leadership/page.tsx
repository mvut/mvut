'use client';
import React from "react";
import { motion } from "framer-motion";
import {
    FaUserTie,
    FaUsers,
    FaUniversity,
    FaChalkboardTeacher,
    FaChartLine,
    FaQuoteLeft,
    FaQuoteRight,
} from "react-icons/fa";

export default function LeadershipPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700 py-16 text-white font-sans">
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-black opacity-30"></div>

            {/* Main Content */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
            >
                {/* Hero Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center justify-center text-center mb-12"
                >
                    <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400 mb-4">
                        Leadership at MVIT
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                        At Mansha Virtual Institute of Technologies (MVIT), our leadership team is dedicated to fostering innovation, excellence, and inclusivity. Together, we are shaping the future of education and technology.
                    </p>
                </motion.div>

                {/* Mission Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="flex flex-col items-center justify-center mt-10"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-teal-400 mb-4">Our Mission</h2>
                    <p className="sm:text-xl w-[80%] mx-auto text-center leading-relaxed text-gray-200">
                        Empowering a brighter future through innovative education and cutting-edge technology, transforming individuals, communities, and societies on a global scale.
                    </p>
                </motion.div>

                {/* Vision and Values Cards */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-10"
                >
                    {/* Vision Card */}
                    <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl shadow-lg p-6 text-center">
                        <FaChartLine className="text-5xl text-teal-400 mx-auto mb-4" />
                        <h3 className="text-2xl font-bold text-white mb-2">Vision</h3>
                        <p className="text-gray-200">
                            To be a global leader in education and technology, fostering innovation, inclusivity, and excellence.
                        </p>
                    </div>

                    {/* Values Card */}
                    <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl shadow-lg p-6 text-center">
                        <FaUsers className="text-5xl text-teal-400 mx-auto mb-4" />
                        <h3 className="text-2xl font-bold text-white mb-2">Values</h3>
                        <p className="text-gray-200">
                            Integrity, Innovation, Collaboration, Excellence, and Inclusivity drive everything we do.
                        </p>
                    </div>

                    {/* Message from the President */}
                    <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl shadow-lg p-6 text-center">
                        <FaUserTie className="text-5xl text-teal-400 mx-auto mb-4" />
                        <h3 className="text-2xl font-bold text-white mb-2">Message from the President</h3>
                        <p className="text-gray-200">
                            "Our commitment to excellence and innovation is unwavering. Together, we will shape the future."
                        </p>
                    </div>
                </motion.div>

                {/* Board of Governors Table */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="container flex flex-col py-10"
                >
                    <h1 className="text-3xl sm:text-4xl font-bold text-teal-400 pb-8 text-center">
                        Board of Governors
                    </h1>
                    <p className="text-gray-200 text-center mb-6">
                        The Board of Governors is the highest authority at MVIT, entrusted with guiding its administrative, academic, and financial matters.
                    </p>
                    <table className="w-full table-auto text-center text-xs sm:text-lg bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl shadow-lg overflow-hidden">
                        <thead>
                        <tr className="bg-teal-400 bg-opacity-50 text-white">
                            <th className="px-4 py-2">Sr. No.</th>
                            <th className="px-4 py-2">Role</th>
                            <th className="px-4 py-2">Position</th>
                        </tr>
                        </thead>
                        <tbody>
                        {boardMembers.map((member, index) => (
                            <tr
                                key={index}
                                className={
                                    index % 2 === 0
                                        ? "bg-teal-100 bg-opacity-10"
                                        : "bg-teal-200 bg-opacity-10"
                                }
                            >
                                <td className="px-4 py-2">{member.sr}</td>
                                <td className="text-start px-4 py-2">{member.role}</td>
                                <td className="px-4 py-2">{member.position}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </motion.div>

                {/* Organizational Structure */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="container flex flex-col py-10"
                >
                    <h1 className="text-3xl sm:text-4xl font-bold text-teal-400 pb-8 text-center">
                        Organizational Structure
                    </h1>
                    <p className="text-gray-200 text-center mb-6">
                        Our organizational structure ensures efficient governance and operational excellence across all departments.
                    </p>
                    <ul className="list-disc pl-16 text-sm sm:text-lg text-gray-200 space-y-2">
                        {organizationalStructure.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </motion.div>

                {/* Testimonials Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="container flex flex-col py-10"
                >
                    <h1 className="text-3xl sm:text-4xl font-bold text-teal-400 pb-8 text-center">
                        Testimonials
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl shadow-lg p-6 text-center"
                            >
                                <FaQuoteLeft className="text-2xl text-teal-400 mx-auto mb-4" />
                                <p className="text-gray-200 italic">{testimonial.quote}</p>
                                <FaQuoteRight className="text-2xl text-teal-400 mx-auto mt-4" />
                                <p className="text-teal-400 font-bold mt-4">{testimonial.name}</p>
                                <p className="text-gray-300">{testimonial.position}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Additional Section: Leadership Principles */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="container flex flex-col py-10"
                >
                    <h1 className="text-3xl sm:text-4xl font-bold text-teal-400 pb-8 text-center">
                        Leadership Principles
                    </h1>
                    <p className="text-gray-200 text-center mb-6">
                        Our leadership principles guide our decisions and actions, ensuring we remain committed to excellence and innovation.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl shadow-lg p-6 text-center">
                            <FaUniversity className="text-5xl text-teal-400 mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-white mb-2">Empowerment</h3>
                            <p className="text-gray-200">
                                We empower individuals to reach their full potential through education and mentorship.
                            </p>
                        </div>
                        <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl shadow-lg p-6 text-center">
                            <FaChalkboardTeacher className="text-5xl text-teal-400 mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-white mb-2">Innovation</h3>
                            <p className="text-gray-200">
                                We foster a culture of innovation, encouraging creativity and forward-thinking solutions.
                            </p>
                        </div>
                        <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl shadow-lg p-6 text-center">
                            <FaUsers className="text-5xl text-teal-400 mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-white mb-2">Collaboration</h3>
                            <p className="text-gray-200">
                                We believe in the power of collaboration to achieve shared goals and drive impact.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
}

// Board Members Data
const boardMembers = [
    { sr: 1, role: "President (Founder and Owner)", position: "Chairman" },
    { sr: 2, role: "Vice-President", position: "Co-Chairman" },
    { sr: 3, role: "Rector, Mansha Virtual Institute of Technologies", position: "Member" },
    { sr: 4, role: "Deans from Departments of Mansha Virtual Institute Technologies", position: "Member" },
    { sr: 5, role: "Registrar, Mansha Virtual Institute of Technologies", position: "Secretary" },
    { sr: 6, role: "Academic Representative", position: "Member" },
    { sr: 7, role: "Finance Expert/Treasurer", position: "Member" },
    { sr: 8, role: "Legal Advisor", position: "Member" },
    { sr: 9, role: "Industry and Community Representatives", position: "Member" },
    { sr: 10, role: "Alumni and Student Representatives", position: "Member" },
];

// Organizational Structure Data
const organizationalStructure = [
    "The President (Founder and Owner) serves as the Chancellor of the Mansha Virtual Institute of Technologies.",
    "The Rector serves as the Chief Executive Officer and Chief Academic Officer of the Mansha Virtual Institute of Technologies.",
    "Other Officers of the institute include Registrar, Deans, Directors, Chairpersons or Heads of the Teaching Departments, Director Finance, Controller of Examinations.",
    "The Board of Governors serves as the highest authority of the Mansha Virtual Institute of Technologies, entrusted with overseeing and guiding its administrative, academic, and financial matters, as well as establishing policies and regulations.",
    "Other key authorities of the Institute include Executive Council, Academic Council, Board of Studies, Advanced Studies and Research Board, Selection Board, Finance and Planning Council, Affiliation Committee.",
];

// Testimonials Data
const testimonials = [
    {
        quote:
            "The leadership at MVIT is truly inspiring. Their vision and dedication have transformed the institute into a beacon of excellence.",
        name: "John Doe",
        position: "Alumnus, Class of 2020",
    },
    {
        quote:
            "I am proud to be part of an institution that values innovation and collaboration. The leadership team is exceptional.",
        name: "Jane Smith",
        position: "Faculty Member",
    },
    {
        quote:
            "MVIT's leadership has created an environment that fosters growth and learning. I am grateful for their guidance.",
        name: "Alice Johnson",
        position: "Student Representative",
    },
];