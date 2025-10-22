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

interface ApplicationData {
    full_name: string;
    father_name: string;
    qualification: string;
    institute: string;
    total_marks: string;
    obtained_marks: string;
    gmail: string;
    dob: string;
    whatsapp: string;
    program: string;
    campus: string;
    semester: string;
    classes: string;
    country: string;
}

// Extend CanvasRenderingContext2D interface to include wrapText
declare global {
    interface CanvasRenderingContext2D {
        wrapText(text: string, x: number, y: number, maxWidth: number, lineHeight: number): number;
    }
}

// Add wrapText method to CanvasRenderingContext2D prototype
if (typeof window !== 'undefined') {
    CanvasRenderingContext2D.prototype.wrapText = function(text: string, x: number, y: number, maxWidth: number, lineHeight: number): number {
        const words = text.split(' ');
        let line = '';
        let testLine = '';
        let lineArray: [string, number, number][] = [];

        for (let n = 0; n < words.length; n++) {
            testLine += `${words[n]} `;
            const metrics = this.measureText(testLine);
            const testWidth = metrics.width;
            if (testWidth > maxWidth && n > 0) {
                lineArray.push([line, x, y]);
                y += lineHeight;
                line = `${words[n]} `;
                testLine = `${words[n]} `;
            } else {
                line += `${words[n]} `;
            }
            if (n === words.length - 1) {
                lineArray.push([line, x, y]);
            }
        }

        for (let i = 0; i < lineArray.length; i++) {
            this.fillText(lineArray[i][0], lineArray[i][1], lineArray[i][2]);
        }
        return y;
    };
}

export default function ApplicationForm(){
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submittedData, setSubmittedData] = useState<ApplicationData | null>(null);
    const [voucherUrl, setVoucherUrl] = useState<string | null>(null);

    // Get IBAN from environment variable with fallback
    const IBAN_NUMBER = process.env.HBL_ACCOUNT_IBAN || 'PK03HABB0002047992165199';

    const generateFeeVoucher = (data: ApplicationData) => {
        // Create a canvas to generate the voucher
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        if (!ctx) return null;

        // Set canvas dimensions
        canvas.width = 600;
        canvas.height = 400;

        // Background
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Border
        ctx.strokeStyle = '#991b1b';
        ctx.lineWidth = 3;
        ctx.strokeRect(10, 10, canvas.width - 20, canvas.height - 20);

        // Header
        ctx.fillStyle = '#991b1b';
        ctx.font = 'bold 24px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('MVIT FEE VOUCHER', canvas.width / 2, 50);

        // Institution Info
        ctx.fillStyle = '#000000';
        ctx.font = '14px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('Mansha Virtual Institute of Technologies', canvas.width / 2, 80);
        ctx.fillText('Admission Fee Voucher', canvas.width / 2, 100);

        // Student Information
        ctx.textAlign = 'left';
        ctx.font = 'bold 16px Arial';
        ctx.fillText('Student Information:', 30, 140);

        ctx.font = '14px Arial';
        ctx.fillText(`Name: ${data.full_name}`, 30, 165);
        ctx.fillText(`Program: ${data.program}`, 30, 185);
        ctx.fillText(`Email: ${data.gmail}`, 30, 205);
        ctx.fillText(`Campus: ${data.campus}`, 30, 225);

        // Fee Details
        ctx.font = 'bold 16px Arial';
        ctx.fillText('Fee Details:', 30, 260);

        ctx.font = '14px Arial';
        ctx.fillText('Admission Fee: $70', 30, 285);

        // Payment Instructions
        ctx.font = 'bold 16px Arial';
        ctx.fillText('Payment Instructions:', 300, 140);

        ctx.font = '14px Arial';
        const paymentText = "Please deposit $70 admission fee to the following IBAN account. After payment, email the transaction receipt to admissions@mvit.edu";

        // Use the wrapText method
        ctx.wrapText(paymentText, 300, 165, 250, 20);

        // IBAN Number
        ctx.font = 'bold 14px Arial';
        ctx.fillText('IBAN Number:', 300, 240);
        ctx.font = '14px Arial';
        ctx.fillText(IBAN_NUMBER, 300, 260);

        // Footer
        ctx.textAlign = 'center';
        ctx.font = '12px Arial';
        ctx.fillStyle = '#666666';
        ctx.fillText('Generated on: ' + new Date().toLocaleDateString(), canvas.width / 2, 350);
        ctx.fillText('This is a computer generated voucher', canvas.width / 2, 370);

        return canvas.toDataURL('image/png');
    };

    const handleSubmit = async (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        const formData = new FormData(e.currentTarget);

        const applicationData = {
            full_name: formData.get("full_name") as string,
            father_name: formData.get("father_name") as string,
            qualification: formData.get("qualification") as string,
            institute: formData.get("institute") as string,
            total_marks: formData.get("total_marks") as string,
            obtained_marks: formData.get("obtained_marks") as string,
            gmail: formData.get("gmail") as string,
            dob: formData.get("dob") as string,
            whatsapp: formData.get("whatsapp") as string,
            program: formData.get("program") as string,
            campus: formData.get("campus") as string,
            semester: formData.get("semester") as string,
            classes: formData.get("classes") as string,
            country: formData.get("country") as string,
        };

        try {
            const response = await fetch('/api/auth/apply', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(applicationData)
            });

            if(response.ok){
                setSubmittedData(applicationData);
                const voucherDataUrl = generateFeeVoucher(applicationData);
                setVoucherUrl(voucherDataUrl);
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

    const downloadVoucher = () => {
        if (voucherUrl) {
            const link = document.createElement('a');
            link.download = `MVIT-Fee-Voucher-${submittedData?.full_name.replace(/\s+/g, '-')}.png`;
            link.href = voucherUrl;
            link.click();
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

    // Show success message and voucher download if submitted
    if (submittedData && voucherUrl) {
        return (
            <div className={`min-h-screen bg-gradient-to-br from-red-900 via-black to-red-900 py-12 ${montserrat.className}`}>
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
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Application Submitted Successfully!</h1>
                    <p className="text-red-200">Your admission form has been received</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="container mx-auto max-w-2xl bg-white rounded-xl shadow-2xl overflow-hidden"
                >
                    <div className="bg-gradient-to-r from-green-600 to-green-800 p-6 text-white">
                        <h2 className="text-2xl font-bold">✓ Submission Complete</h2>
                        <p className="text-green-200">Thank you for your application</p>
                    </div>

                    <div className="p-8">
                        <div className="text-center mb-6">
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">
                                Download Your Fee Voucher
                            </h3>
                            <p className="text-gray-600 mb-2">
                                <strong>Name:</strong> {submittedData.full_name}
                            </p>
                            <p className="text-gray-600 mb-2">
                                <strong>Program:</strong> {submittedData.program}
                            </p>
                            <p className="text-gray-600 mb-4">
                                <strong>Email:</strong> {submittedData.gmail}
                            </p>
                        </div>

                        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                            <h4 className="font-semibold text-yellow-800 mb-2">Payment Instructions:</h4>
                            <p className="text-yellow-700 text-sm mb-2">
                                • Admission Fee: <strong>$70</strong>
                            </p>
                            <p className="text-yellow-700 text-sm mb-2">
                                • Please deposit the amount to the following IBAN:
                            </p>
                            <p className="text-yellow-800 font-mono text-sm bg-yellow-100 p-2 rounded">
                                {IBAN_NUMBER}
                            </p>
                            <p className="text-yellow-700 text-sm mt-2">
                                • After payment, email the transaction receipt to: admissions@mvit.edu
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <button
                                onClick={downloadVoucher}
                                className="px-6 py-3 bg-red-700 text-white font-semibold rounded-lg hover:bg-red-800 transition-all duration-300 flex items-center justify-center gap-2"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                Download Fee Voucher
                            </button>

                            <Link
                                href="/"
                                className="px-6 py-3 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300 transition-all duration-300 text-center"
                            >
                                Return to Home
                            </Link>
                        </div>

                        <div className="mt-6 text-center">
                            <p className="text-gray-500 text-sm">
                                Can&apos;t download? <button
                                onClick={downloadVoucher}
                                className="text-red-600 hover:text-red-800 underline"
                            >
                                Click here to try again
                            </button>
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        );
    }

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
                            <option value="Certified Synthetic Mind Engineer">Certified Synthetic Mind Engineer - CSME (for All)</option>
                            <option value="Diploma in Applied Programming Languages">Diploma in Applied Programming Languages - DAPL (for All)</option>
                            <option value="Certified Micro-Courses">Certified Micro-Courses (for All)</option>
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