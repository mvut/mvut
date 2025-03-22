'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCheck, FaInfoCircle, FaShieldAlt } from 'react-icons/fa';

// Define the interface for student data
interface StudentData {
    registration_number: string;
    candidate_name: string;
    father_mother_name: string;
    degree_certificate_title: string;
    date_issue: string; // Assuming this is a string in ISO format (e.g., "2023-10-01")
    country: string;
}

export default function DegreeVerify() {
    const [cvn, setCvn] = useState('');
    const [studentData, setStudentData] = useState<StudentData[]>([]);

    const handleSubmit = async (e: { preventDefault: () => void }) => {
        e.preventDefault();
        try {
            const response = await fetch(`/api/auth/verify?cvn=${cvn}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ cvn }),
            });
            const data = await response.json();
            setStudentData(data); // Assuming `data` is an array of `StudentData`
        } catch (error) {
            console.error('Error fetching verification data:', error);
        }
    };

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
                {/* Title Section */}
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400 text-center mb-12"
                >
                    Online Degree Verification System
                </motion.h1>
                <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto text-center leading-relaxed mb-16">
                    Our secure verification system ensures authenticity and transparency. Enter the Certificate Verification Number (CVN) to validate the details of any degree or certificate issued by MVIT.
                </p>

                {/* Verification Form */}
                <motion.form
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl shadow-lg p-8 max-w-md mx-auto"
                >
                    <div className="flex flex-col gap-4">
                        <label htmlFor="cvn" className="text-lg sm:text-xl font-semibold text-teal-400">
                            Enter CVN
                        </label>
                        <input
                            type="text"
                            id="cvn"
                            placeholder="Enter Certificate Verification Number (CVN)"
                            value={cvn}
                            onChange={(e) => setCvn(e.target.value)}
                            required
                            className="h-12 w-full bg-white bg-opacity-20 border-2 border-teal-400 rounded-lg focus:outline-none focus:border-teal-500 px-4 py-2 text-sm sm:text-base text-white placeholder-gray-300"
                        />
                        <button
                            type="submit"
                            className="text-lg sm:text-xl bg-teal-400 hover:bg-teal-500 text-white font-bold rounded-full uppercase transition-all px-6 py-3"
                        >
                            Verify Now
                        </button>
                    </div>
                </motion.form>

                {/* Verification Details */}
                {studentData.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="mt-16 bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl shadow-lg p-8"
                    >
                        <p className="text-2xl sm:text-3xl font-bold text-teal-400 pb-6 text-center">
                            Verification Details:
                        </p>
                        <div className="space-y-6">
                            {studentData.map((item, index) => (
                                <div key={index} className="space-y-4">
                                    <div className="flex items-center justify-start gap-4">
                                        <label className="font-bold text-gray-300">Registration Number:</label>
                                        <p className="text-teal-400 font-bold">{item.registration_number}</p>
                                    </div>
                                    <div className="flex items-center justify-start gap-4">
                                        <label className="font-bold text-gray-300">Candidate Name:</label>
                                        <p className="text-teal-400 font-bold">{item.candidate_name}</p>
                                    </div>
                                    <div className="flex items-center justify-start gap-4">
                                        <label className="font-bold text-gray-300">Father/Mother Name:</label>
                                        <p className="text-teal-400 font-bold">{item.father_mother_name}</p>
                                    </div>
                                    <div className="flex items-center justify-start gap-4">
                                        <label className="font-bold text-gray-300">Degree/Certificate Title:</label>
                                        <p className="text-teal-400 font-bold">{item.degree_certificate_title}</p>
                                    </div>
                                    <div className="flex items-center justify-start gap-4">
                                        <label className="font-bold text-gray-300">Date of Issue:</label>
                                        <p className="text-teal-400 font-bold">
                                            {new Date(item.date_issue).toISOString().split('T')[0]}
                                        </p>
                                    </div>
                                    <div className="flex items-center justify-start gap-4">
                                        <label className="font-bold text-gray-300">Country:</label>
                                        <p className="text-teal-400 font-bold">{item.country}</p>
                                    </div>
                                    <div className="flex items-center justify-start gap-4">
                                        <label className="font-bold text-gray-300">Status:</label>
                                        <p className="text-teal-400 font-bold flex items-center gap-2">
                                            Verified <FaCheck size={20} />
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </motion.div>
        </div>
    );
}