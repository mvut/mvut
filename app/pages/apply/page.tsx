'use client';
import Link from "next/link";
import React, {FormEvent, useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import { Montserrat } from "next/font/google";
import { motion } from "framer-motion";
import Image from "next/image";
import Logo from '@/public/mvutflame.png'
// Load Google Font
const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
});

export default function ApplicationForm(){
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        const formData = new FormData(e.currentTarget);

        try {
            const response = await fetch('/api/auth/apply', {
                method: 'POST',
                body: JSON.stringify({
                    full_name: formData.get("full_name"),
                    father_name: formData.get("father_name"),
                    qualification: formData.get("qualification"),
                    institute: formData.get("institute"),
                    total_marks: formData.get("total_marks"),
                    obtained_marks: formData.get("obtained_marks"),
                    gmail: formData.get("gmail"),
                    dob: formData.get("dob"),
                    whatsapp: formData.get("whatsapp"),
                    program: formData.get("program"),
                    campus: formData.get("campus"),
                    semester: formData.get("semester"),
                    classes: formData.get("classes"),
                    country: formData.get("country"),
                })
            });

            if(response.ok){
                alert('Application submitted successfully!');
                router.push('/');
                router.refresh();
            } else {
                throw new Error('Server Error');
            }
        } catch (error) {
            alert("Submission failed. Please try again.");
            console.error(error);
        } finally {
            setIsSubmitting(false);
        }
    };

    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 80, damping: 12 },
        },
    };

    return (
        <div className={`min-h-screen bg-gradient-to-br from-red-900 via-black to-red-900 py-12 ${montserrat.className}`}>
            {/* Header with Logo */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="container mx-auto text-center mb-8"
            >
                <div className="flex justify-center mb-4">
                    <Image
                        src={Logo}
                        alt="MVIT Logo"
                        width={120}
                        height={120}
                        className="shadow-lg"
                    />
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">MVIT Admission Form</h1>
                <p className="text-red-200">Fill out the form below to begin your application</p>
            </motion.div>

            {/* Form Container */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="container mx-auto max-w-4xl bg-white rounded-xl shadow-2xl overflow-hidden"
            >
                {/* Form Header */}
                <div className="bg-gradient-to-r from-red-800 to-black p-6 text-white">
                    <h2 className="text-2xl font-bold">Application Details</h2>
                    <p className="text-red-200">Please provide accurate information</p>
                </div>

                {/* Form */}
                <motion.form
                    onSubmit={handleSubmit}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8"
                >
                    {/* Personal Information Section */}
                    <motion.div
                        variants={itemVariants}
                        className="md:col-span-2"
                    >
                        <h3 className="text-xl font-semibold text-red-900 border-b-2 border-red-200 pb-2 mb-4">
                            Personal Information
                        </h3>
                    </motion.div>

                    {/* Full Name */}
                    <motion.div variants={itemVariants} className="flex flex-col">
                        <label className="text-gray-700 font-medium mb-1">Full Name <span className="text-red-600">*</span></label>
                        <input
                            type="text"
                            placeholder="Your full name"
                            className="h-12 w-full bg-gray-50 p-3 border border-gray-300 rounded-lg focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all duration-300"
                            required
                            name="full_name"
                        />
                    </motion.div>

                    {/* Father/Mother Name */}
                    <motion.div variants={itemVariants} className="flex flex-col">
                        <label className="text-gray-700 font-medium mb-1">Father/Mother Name <span className="text-red-600">*</span></label>
                        <input
                            type="text"
                            placeholder="Father or mother name"
                            className="h-12 w-full bg-gray-50 p-3 border border-gray-300 rounded-lg focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all duration-300"
                            required
                            name="father_name"
                        />
                    </motion.div>

                    {/* Date of Birth */}
                    <motion.div variants={itemVariants} className="flex flex-col">
                        <label className="text-gray-700 font-medium mb-1">Date of Birth <span className="text-red-600">*</span></label>
                        <input
                            type="date"
                            className="h-12 w-full bg-gray-50 p-3 border border-gray-300 rounded-lg focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all duration-300"
                            required
                            name="dob"
                        />
                    </motion.div>

                    {/* WhatsApp */}
                    <motion.div variants={itemVariants} className="flex flex-col">
                        <label className="text-gray-700 font-medium mb-1">WhatsApp Number <span className="text-red-600">*</span></label>
                        <input
                            type="text"
                            placeholder="With country code (e.g. +92...)"
                            className="h-12 w-full bg-gray-50 p-3 border border-gray-300 rounded-lg focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all duration-300"
                            required
                            name="whatsapp"
                        />
                    </motion.div>

                    {/* Email */}
                    <motion.div variants={itemVariants} className="flex flex-col">
                        <label className="text-gray-700 font-medium mb-1">Email <span className="text-red-600">*</span></label>
                        <input
                            type="email"
                            placeholder="Your active email"
                            className="h-12 w-full bg-gray-50 p-3 border border-gray-300 rounded-lg focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all duration-300"
                            required
                            name="gmail"
                        />
                    </motion.div>

                    {/* Country */}
                    <motion.div variants={itemVariants} className="flex flex-col">
                        <label className="text-gray-700 font-medium mb-1">Country <span className="text-red-600">*</span></label>
                        <select
                            className="h-12 w-full bg-gray-50 p-3 border border-gray-300 rounded-lg focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all duration-300"
                            name="country"
                            required
                        >
                            <option value="Pakistan">Pakistan</option>
                            <option value="Other">Other</option>
                        </select>
                    </motion.div>

                    {/* Educational Background Section */}
                    <motion.div
                        variants={itemVariants}
                        className="md:col-span-2 mt-6"
                    >
                        <h3 className="text-xl font-semibold text-red-900 border-b-2 border-red-200 pb-2 mb-4">
                            Educational Background
                        </h3>
                    </motion.div>

                    {/* Latest Qualification */}
                    <motion.div variants={itemVariants} className="flex flex-col">
                        <label className="text-gray-700 font-medium mb-1">Latest Qualification <span className="text-red-600">*</span></label>
                        <select
                            className="h-12 w-full bg-gray-50 p-3 border border-gray-300 rounded-lg focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all duration-300"
                            name="qualification"
                            required
                        >
                            <option value="">Select qualification</option>
                            <option value="Fresher">Fresher</option>
                            <option value="Secondary School Certificate (SSC)">Secondary School Certificate (SSC)</option>
                            <option value="Higher Secondary School Certificate (HSSC)">Higher Secondary School Certificate (HSSC)</option>
                            <option value="Bachelor's Degree">Bachelor&apos;s Degree</option>
                            <option value="Master's Degree">Master&apos;s Degree</option>
                            <option value="Doctorate">Doctorate</option>
                        </select>
                    </motion.div>

                    {/* Name of Institute */}
                    <motion.div variants={itemVariants} className="flex flex-col">
                        <label className="text-gray-700 font-medium mb-1">Name of Institute <span className="text-red-600">*</span></label>
                        <input
                            type="text"
                            placeholder="Institution name"
                            className="h-12 w-full bg-gray-50 p-3 border border-gray-300 rounded-lg focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all duration-300"
                            required
                            name="institute"
                        />
                    </motion.div>

                    {/* Total Marks/CGPA */}
                    <motion.div variants={itemVariants} className="flex flex-col">
                        <label className="text-gray-700 font-medium mb-1">Total Marks/CGPA <span className="text-red-600">*</span></label>
                        <input
                            type="text"
                            placeholder="Total marks or CGPA"
                            className="h-12 w-full bg-gray-50 p-3 border border-gray-300 rounded-lg focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all duration-300"
                            required
                            name="total_marks"
                        />
                    </motion.div>

                    {/* Obtained Marks/CGPA */}
                    <motion.div variants={itemVariants} className="flex flex-col">
                        <label className="text-gray-700 font-medium mb-1">Obtained Marks/CGPA <span className="text-red-600">*</span></label>
                        <input
                            type="text"
                            placeholder="Obtained marks or CGPA"
                            className="h-12 w-full bg-gray-50 p-3 border border-gray-300 rounded-lg focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all duration-300"
                            required
                            name="obtained_marks"
                        />
                    </motion.div>

                    {/* Program Information Section */}
                    <motion.div
                        variants={itemVariants}
                        className="md:col-span-2 mt-6"
                    >
                        <h3 className="text-xl font-semibold text-red-900 border-b-2 border-red-200 pb-2 mb-4">
                            Program Information
                        </h3>
                    </motion.div>

                    {/* Program Applying For */}
                    <motion.div variants={itemVariants} className="flex flex-col md:col-span-2">
                        <label className="text-gray-700 font-medium mb-1">Program Applying For <span className="text-red-600">*</span></label>
                        <select
                            className="h-12 w-full bg-gray-50 p-3 border border-gray-300 rounded-lg focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all duration-300"
                            name="program"
                            required
                        >
                            <option value="AI Agents Developer">AI Agents Developer (for Kids)</option>
                            <option value="Kindergarten (K.G.) STEM Entrepreneurs">Kindergarten (K.G.) STEM Entrepreneurs (for Kids)</option>
                            <option value="Full-Stack AI Engineer">Full-Stack AI Engineer (for Kids)</option>
                            <option value="Mansha Certified Autonomous Systems and Cloud Engineer">Mansha Certified Autonomous Systems and Cloud Engineer - MCASCE (for Graduates) </option>
                            <option value="Office Management, AI and Prompt Engineering">Office Management, AI and Prompt Engineering (for All)</option>
                        </select>
                    </motion.div>

                    {/* Campus */}
                    <motion.div variants={itemVariants} className="flex flex-col">
                        <label className="text-gray-700 font-medium mb-1">Campus <span className="text-red-600">*</span></label>
                        <select
                            className="h-12 w-full bg-gray-50 p-3 border border-gray-300 rounded-lg focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all duration-300"
                            name="campus"
                            required
                        >
                            <option value="MVIT, Pakistan">MVIT, Pakistan</option>
                        </select>
                    </motion.div>

                    {/* Semester */}
                    <motion.div variants={itemVariants} className="flex flex-col">
                        <label className="text-gray-700 font-medium mb-1">Semester <span className="text-red-600">*</span></label>
                        <select
                            className="h-12 w-full bg-gray-50 p-3 border border-gray-300 rounded-lg focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all duration-300"
                            name="semester"
                            required
                        >
                            <option value="Fall 2025">Fall 2025</option>
                            <option value="Spring 2026">Spring 2026</option>
                        </select>
                    </motion.div>

                    {/* Classes */}
                    <motion.div variants={itemVariants} className="flex flex-col">
                        <label className="text-gray-700 font-medium mb-1">Class Mode <span className="text-red-600">*</span></label>
                        <select
                            className="h-12 w-full bg-gray-50 p-3 border border-gray-300 rounded-lg focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all duration-300"
                            name="classes"
                            required
                        >
                            <option value="Onsite">Onsite (Only in Pakpattan)</option>
                            <option value="Online">Online (For all cities / countries)</option>
                        </select>
                    </motion.div>

                    {/* Fee Information */}
                    <motion.div
                        variants={itemVariants}
                        className="md:col-span-2 mt-6 p-4 bg-red-50 rounded-lg border border-red-200"
                    >
                        <h4 className="text-lg font-semibold text-red-900 mb-2">Fee Structure</h4>
                        <ul className="space-y-2 text-gray-700">
                            <li className="flex justify-between">
                                <span>Admission Fee:</span>
                                <span className="font-semibold">$70 (one-time)</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Monthly Fee:</span>
                                <span className="font-semibold">$35 per month</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Eligibility Test (BASR) Fee:</span>
                                <span className="font-semibold">$5 (one-time)</span>
                            </li>
                            <li className="flex justify-between pt-2 border-t border-red-200">
                                <span className="font-medium">Total Estimated Cost (2 years):</span>
                                <span className="font-bold text-red-900">$915</span>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Form Submission */}
                    <motion.div
                        variants={itemVariants}
                        className="md:col-span-2 flex flex-col sm:flex-row justify-end gap-4 mt-8"
                    >
                        <Link
                            href="/"
                            className="px-6 py-3 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300 transition-all duration-300 text-center"
                        >
                            Cancel
                        </Link>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`px-6 py-3 bg-red-700 text-white font-semibold rounded-lg hover:bg-red-800 transition-all duration-300 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                        >
                            {isSubmitting ? 'Submitting...' : 'Submit Application'}
                        </button>
                    </motion.div>
                </motion.form>
            </motion.div>
        </div>
    )
}