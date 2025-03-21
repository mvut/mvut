'use client';
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

export default function FeeStructure() {
    // Conversion rate: 1 USD = 300 PKR
    const usdToPkr = (amount: number) => amount * 300;

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
                {/* Navigation Links */}
                <div className="flex justify-between items-center mb-10 text-gray-200">
                    <Link href="/pages/study" className="flex items-center gap-2 hover:text-teal-400 transition-all">
                        <FaArrowAltCircleLeft size={20} />
                        Studies
                    </Link>
                    <Link href="/pages/apply" className="flex items-center gap-2 hover:text-teal-400 transition-all">
                        Apply
                        <FaArrowAltCircleRight size={20} />
                    </Link>
                </div>

                {/* Title Section */}
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400 text-center mb-16"
                >
                    Fee Structure
                </motion.h1>

                {/* Fee Tables */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="space-y-16"
                >
                    {/* Web Technology Specialist Training (WTST) */}
                    <FeeTable
                        title="Web Technology Specialist Training (WTST)"
                        data={[
                            {
                                sr: 1,
                                program: "Next-Generation Web Development with Python (NXGDP)",
                                classes: "Online",
                                semesters: 4,
                                registration: 50,
                                monthly: 20,
                                total: 530,
                                link: "/pages/study/programs/nxgd",
                            },
                            {
                                sr: 2,
                                program: "Full Stack Development with Next.js (FSDN)",
                                classes: "Online",
                                semesters: 4,
                                registration: 50,
                                monthly: 20,
                                total: 530,
                                link: "/pages/study/programs/fsdn",
                            },
                            {
                                sr: 3,
                                program: "Full Stack PHP Development (FSP)",
                                classes: "Online",
                                semesters: 4,
                                registration: 50,
                                monthly: 20,
                                total: 530,
                                link: "/pages/study/programs/php",
                            },
                            {
                                sr: 4,
                                program: "Office Management and Work Ethics (OM&WE)",
                                classes: "Online",
                                semesters: 2,
                                registration: 50,
                                monthly: 20,
                                total: 290,
                                link: "/pages/study/programs/omc",
                            },
                            {
                                sr: 5,
                                program: "Kindergarten (K.G.) STEM Entrepreneurs",
                                classes: "Onsite",
                                semesters: 3,
                                registration: 50,
                                monthly: 20,
                                total: 410,
                                link: "/pages/study/programs/omc",
                            },
                            {
                                sr: 6,
                                program: "Mansha Certified AI Agents Developer (MCAAD)",
                                classes: "Onsite",
                                semesters: 4,
                                registration: 50,
                                monthly: 20,
                                total: 530,
                                link: "/pages/study/programs/omc",
                            },
                            {
                                sr: 7,
                                program: "Mansha Robotics and Software Engineer (MRSE)",
                                classes: "Onsite",
                                semesters: 4,
                                registration: 50,
                                monthly: 20,
                                total: 530,
                                link: "/pages/study/programs/omc",
                            },
                        ]}
                        usdToPkr={usdToPkr}
                    />

                    {/* Corporate Language Certification for Business (CLCB) */}
                    <FeeTable
                        title="Corporate Language Certification for Business (CLCB)"
                        data={[
                            {
                                sr: 1,
                                program: "Corporate Communication for IT Professionals (CCIP)",
                                classes: "Online",
                                semesters: 1,
                                registration: 50,
                                monthly: 20,
                                total: 170,
                                link: "/pages/study/programs/ccipc",
                            },
                        ]}
                        usdToPkr={usdToPkr}
                    />

                    {/* Computer Science Professional Studies (CSPS) */}
                    <FeeTable
                        title="Computer Science Professional Studies (CSPS)"
                        data={[
                            {
                                sr: 1,
                                program: "Junior Computer Science Certificate (JCSC)",
                                classes: "Online",
                                semesters: 4,
                                registration: 50,
                                monthly: 10,
                                total: 290,
                                link: "/pages/study/programs/psc",
                            },
                            {
                                sr: 2,
                                program: "Senior Computer Science Certificate (SCSC)",
                                classes: "Online",
                                semesters: 6,
                                registration: 50,
                                monthly: 13,
                                total: 518,
                                link: "/pages/study/programs/esc",
                            },
                            {
                                sr: 3,
                                program: "Advance Computer Science Certificate (ACSC)",
                                classes: "Online",
                                semesters: 4,
                                registration: 50,
                                monthly: 15,
                                total: 410,
                                link: "/pages/study/programs/ssc",
                            },
                            {
                                sr: 4,
                                program: "Professional Computer Science Certificate (PCSC)",
                                classes: "Online",
                                semesters: 4,
                                registration: 50,
                                monthly: 16,
                                total: 434,
                                link: "/pages/study/programs/hssc",
                            },
                            {
                                sr: 5,
                                program: "Premier Certificate in Computer Science (PCCS)",
                                classes: "Online",
                                semesters: 8,
                                registration: 50,
                                monthly: 25,
                                total: 1250,
                                link: "/pages/study/programs/bscs",
                            },
                            {
                                sr: 6,
                                program: "Certified Web Professional in Full Stack Next.js (CWP FSN)",
                                classes: "Online",
                                semesters: 2,
                                registration: 50,
                                monthly: 30,
                                total: 410,
                                link: "/pages/study/programs/pgdfsn",
                            },
                            {
                                sr: 7,
                                program: "Certified Web Professional in Full Stack PHP (CWP FSP)",
                                classes: "Online",
                                semesters: 2,
                                registration: 50,
                                monthly: 30,
                                total: 410,
                                link: "",
                            },
                            {
                                sr: 8,
                                program: "Advance Professional Certificate in Web Development (APCWD)",
                                classes: "Online",
                                semesters: 4,
                                registration: 75,
                                monthly: 50,
                                total: 1275,
                                link: "",
                            },
                            {
                                sr: 9,
                                program: "Certificate of Philosophy in Web Development (CPWD)",
                                classes: "Online",
                                semesters: 6,
                                registration: 100,
                                monthly: 60,
                                total: 2260,
                                link: "",
                            },
                        ]}
                        usdToPkr={usdToPkr}
                    />
                </motion.div>
            </motion.div>
        </div>
    );
}

// Reusable Fee Table Component
function FeeTable({ title, data, usdToPkr }: { title: string; data: any[]; usdToPkr: (amount: number) => number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl shadow-lg p-6"
        >
            <h2 className="text-2xl sm:text-3xl font-bold text-teal-400 mb-6">{title}</h2>
            <table className="w-full table-auto text-sm sm:text-base">
                <thead>
                <tr className="bg-stone-700 text-gray-50">
                    <th className="p-2">Sr.</th>
                    <th className="text-start">Program</th>
                    <th>Classes</th>
                    <th>Semesters</th>
                    <th>Registration (USD)</th>
                    <th>Monthly (USD)</th>
                    <th>Total (USD)</th>
                    {/*<th>Total (PKR)</th>*/}
                </tr>
                </thead>
                <tbody>
                {data.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-200 bg-opacity-20" : "bg-teal-100 bg-opacity-20"}>
                        <td className="p-2 text-center">{row.sr}</td>
                        <td className="p-2 text-start">
                            <Link href={row.link} className="hover:text-teal-400 transition-all">
                                {row.program}
                            </Link>
                        </td>
                        <td className="p-2 text-center">{row.classes}</td>
                        <td className="p-2 text-center">{row.semesters}</td>
                        <td className="p-2 text-center">${row.registration}</td>
                        <td className="p-2 text-center">${row.monthly}</td>
                        <td className="p-2 text-center">${row.total}</td>
                        {/*<td className="p-2 text-center">₨{usdToPkr(row.total)}</td>*/}
                    </tr>
                ))}
                </tbody>
            </table>
        </motion.div>
    );
}