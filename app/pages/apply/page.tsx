'use client'
import Link from "next/link";
import React, {FormEvent, useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import { Montserrat } from "next/font/google";
import { motion } from "framer-motion";

// Load Google Font
const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
});

export default function ApplicationForm(){
    const router = useRouter();
    const handleSubmit = async (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const response = await fetch('/api/auth/apply', {
            method: 'POST',
            body: JSON.stringify({
                full_name:formData.get("full_name"),
                father_name:formData.get("father_name"),
                qualification:formData.get("qualification"),
                institute:formData.get("institute"),
                total_marks:formData.get("total_marks"),
                obtained_marks:formData.get("obtained_marks"),
                gmail:formData.get("gmail"),
                dob:formData.get("dob"),
                whatsapp:formData.get("whatsapp"),
                program:formData.get("program"),
                campus:formData.get("campus"),
                semester:formData.get("semester"),
                classes:formData.get("classes"),
                country:formData.get("country"),
            })
        })
        if(response.ok){
            alert('Entry Saved Successfully');
            console.log(response)
            router.push('/');
            router.refresh();
        }else{  alert("Server Error!");
        }
    };

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
            transition: { type: "spring", stiffness: 80, damping: 12 }, // Smooth spring effect
        },
    };

        return (
            <div className={`bg-gradient-to-br from-teal-50 via-purple-50 to-indigo-50 py-16 ${montserrat.className}`}>
                {/* Container */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="container mx-auto max-w-4xl bg-white rounded-lg shadow-lg p-8"
                >

                    {/* Title */}
                    <motion.h2
                        variants={itemVariants}
                        className="text-teal-900 text-2xl font-bold text-center mb-6"
                    >
                        Application Form
                    </motion.h2>

                    {/* Form */}
                    <motion.form
                        variants={itemVariants}
                        onSubmit={handleSubmit} // Replace with actual handleSubmit logic
                        className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    >
                        {/* Full Name */}
                        <motion.div variants={itemVariants} className="flex flex-col">
                            <label className="text-teal-900 font-semibold">Full Name</label>
                            <input
                                type="text"
                                placeholder="Enter your full name"
                                className="h-10 md:h-12 w-full bg-teal-50 p-2 border-2 border-teal-200 rounded-md focus:border-teal-600 transition-all duration-300"
                                required
                                name="full_name"
                            />
                        </motion.div>

                        {/* Father/Mother Name */}
                        <motion.div variants={itemVariants} className="flex flex-col">
                            <label className="text-teal-900 font-semibold">Father/Mother Name</label>
                            <input
                                type="text"
                                placeholder="Enter your father or mother name"
                                className="h-10 md:h-12 w-full bg-teal-50 p-2 border-2 border-teal-200 rounded-md focus:border-teal-600 transition-all duration-300"
                                required
                                name="father_name"
                            />
                        </motion.div>

                        {/* Latest Qualification */}
                        <motion.div variants={itemVariants} className="flex flex-col">
                            <label className="text-teal-900 font-semibold">Latest Qualification</label>
                            <select
                                className="h-10 md:h-12 w-full bg-teal-50 p-2 border-2 border-teal-200 rounded-md focus:border-teal-600 transition-all duration-300"
                                name="qualification"
                            >
                                <option value="Secondary School Certificate (SSC)">
                                    Secondary School Certificate (SSC)
                                </option>
                                <option value="Higher Secondary School Certificate (HSSC)">
                                    Higher Secondary School Certificate (HSSC)
                                </option>
                                <option value="Bachelor of Science (B.S.)">Bachelor of Science (B.S.)</option>
                                <option value="Bachelor of Arts (B.A.)">Bachelor of Arts (B.A.)</option>
                                <option value="Post Graduate Diploma">Post Graduate Diploma</option>
                                <option value="Master of Science">Master of Science</option>
                                <option value="Master of Arts">Master of Arts</option>
                                <option value="Doctor of Philosophy (Ph.D.)">
                                    Doctor of Philosophy (Ph.D.)
                                </option>
                            </select>
                        </motion.div>

                        {/* Name of Institute */}
                        <motion.div variants={itemVariants} className="flex flex-col">
                            <label className="text-teal-900 font-semibold">Name of Institute</label>
                            <input
                                type="text"
                                placeholder="Enter name of institution"
                                className="h-10 md:h-12 w-full bg-teal-50 p-2 border-2 border-teal-200 rounded-md focus:border-teal-600 transition-all duration-300"
                                required
                                name="institute"
                            />
                        </motion.div>

                        {/* Total Marks/CGPA */}
                        <motion.div variants={itemVariants} className="flex flex-col">
                            <label className="text-teal-900 font-semibold">Total Marks/CGPA</label>
                            <input
                                type="text"
                                placeholder="Enter Total Marks/CGPA"
                                className="h-10 md:h-12 w-full bg-teal-50 p-2 border-2 border-teal-200 rounded-md focus:border-teal-600 transition-all duration-300"
                                required
                                name="total_marks"
                            />
                        </motion.div>

                        {/* Obtained Marks/CGPA */}
                        <motion.div variants={itemVariants} className="flex flex-col">
                            <label className="text-teal-900 font-semibold">Obtained Marks/CGPA</label>
                            <input
                                type="text"
                                placeholder="Enter Obtained Marks/CGPA"
                                className="h-10 md:h-12 w-full bg-teal-50 p-2 border-2 border-teal-200 rounded-md focus:border-teal-600 transition-all duration-300"
                                required
                                name="obtained_marks"
                            />
                        </motion.div>

                        {/* Email */}
                        <motion.div variants={itemVariants} className="flex flex-col">
                            <label className="text-teal-900 font-semibold">Email</label>
                            <input
                                type="gmail"
                                placeholder="Enter your email"
                                className="h-10 md:h-12 w-full bg-teal-50 p-2 border-2 border-teal-200 rounded-md focus:border-teal-600 transition-all duration-300"
                                required
                                name="gmail"
                            />
                        </motion.div>

                        {/* Date of Birth */}
                        <motion.div variants={itemVariants} className="flex flex-col">
                            <label className="text-teal-900 font-semibold">Date of Birth</label>
                            <input
                                type="date"
                                className="h-10 md:h-12 w-full bg-teal-50 p-2 border-2 border-teal-200 rounded-md focus:border-teal-600 transition-all duration-300"
                                required
                                name="dob"
                            />
                        </motion.div>

                        {/* WhatsApp */}
                        <motion.div variants={itemVariants} className="flex flex-col">
                            <label className="text-teal-900 font-semibold">WhatsApp</label>
                            <input
                                type="text"
                                placeholder="Enter WhatsApp number with country code"
                                className="h-10 md:h-12 w-full bg-teal-50 p-2 border-2 border-teal-200 rounded-md focus:border-teal-600 transition-all duration-300"
                                required
                                name="whatsapp"
                            />
                        </motion.div>

                        {/* Program Applying For */}
                        <motion.div variants={itemVariants} className="flex flex-col">
                            <label className="text-teal-900 font-semibold">
                                Program Applying for
                            </label>
                            <select
                                className="h-10 md:h-12 w-full bg-teal-50 p-2 border-2 border-teal-200 rounded-md focus:border-teal-600 transition-all duration-300"
                                name="program"
                            >
                                <option value="Mansha Robotics and Software Engineer">1. Mansha Robotics and Software Engineer</option>
                                <option value="Mansha Certified AI Agents Developer">2. Mansha Certified AI Agents Developer</option>
                                <option value="Office Management, AI and Prompt Engineering">3. Office Management, AI and Prompt Engineering</option>
                                <option value="Mansha Certified Blockchain Technician">4. Mansha Certified Blockchain Technician</option>
                                <option value="Full Stack Development with Next.js">5. Full Stack Development with Next.js</option>
                                <option value="Next-Generation Web Development with Python">6. Next-Generation Web Development with Python</option>
                                <option value="Full Stack PHP Development">7. Full Stack PHP Development</option>
                                <option value="Kindergarten (K.G.) STEM Entrepreneurs">8. Kindergarten (K.G.) STEM Entrepreneurs</option>
                                <option value="Corporate Communication for IT Professionals">9. Corporate Communication for IT Professionals</option>
                                <option value="Office Management and Work Ethics">10. Office Management and Work Ethics</option>
                            </select>
                        </motion.div>

                        {/* Campus */}
                        <motion.div variants={itemVariants} className="flex flex-col">
                            <label className="text-teal-900 font-semibold">Campus</label>
                            <select
                                className="h-10 md:h-12 w-full bg-teal-50 p-2 border-2 border-teal-200 rounded-md focus:border-teal-600 transition-all duration-300"
                                name="campus"
                            >
                                <option value="MVIT, Pakistan">MVIT, Pakistan</option>
                            </select>
                        </motion.div>

                        {/* Semester */}
                        <motion.div variants={itemVariants} className="flex flex-col">
                            <label className="text-teal-900 font-semibold">Semester</label>
                            <select
                                className="h-10 md:h-12 w-full bg-teal-50 p-2 border-2 border-teal-200 rounded-md focus:border-teal-600 transition-all duration-300"
                                name="semester"
                            >
                                <option value="Spring 2025">Spring 2025</option>
                            </select>
                        </motion.div>

                        {/* Classes */}
                        <motion.div variants={itemVariants} className="flex flex-col">
                            <label className="text-teal-900 font-semibold">Classes</label>
                            <select
                                className="h-10 md:h-12 w-full bg-teal-50 p-2 border-2 border-teal-200 rounded-md focus:border-teal-600 transition-all duration-300"
                                name="classes"
                            >
                                <option value="Onsite">Onsite (Only in Pakpattan)</option>
                                <option value="Online">Online</option>
                            </select>
                        </motion.div>

                        {/* Country */}
                        <motion.div variants={itemVariants} className="flex flex-col">
                            <label className="text-teal-900 font-semibold">Country</label>
                            <select
                                className="h-10 md:h-12 w-full bg-teal-50 p-2 border-2 border-teal-200 rounded-md focus:border-teal-600 transition-all duration-300"
                                name="country"
                            >
                                <option value="Pakistan">Pakistan</option>

                            </select>
                        </motion.div>

                        {/* Buttons */}
                        <div className="col-span-1 md:col-span-2 flex justify-end gap-4 mt-6">
                            <button
                                type="submit"
                                className="text-md bg-teal-900 text-teal-300 rounded-lg uppercase hover:bg-teal-800 p-2 px-6 transition-all duration-300"
                            >
                                Apply
                            </button>
                            <Link
                                href="/"
                                className="text-md bg-teal-900 text-teal-300 rounded-lg uppercase hover:bg-teal-800 p-2 px-6 transition-all duration-300"
                            >
                                Back
                            </Link>
                        </div>
                    </motion.form>
                </motion.div>
            </div>
        )
}