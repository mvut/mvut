'use client'
import Link from "next/link";
import React, {FormEvent, useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import Image from "next/image";
import Logo from '@/public/usai-logo-3.png'
export default function ApplicationForm(){
    const router = useRouter();
    const programs =[
        {id:1, program:"Kindergarten (K.G.) STEM Entrepreneurs", open:true},
    ];
    const Countries = [
        {
            "name": "Afghanistan",
            "isoCode": "AF",
            "flag": "🇦🇫",
            "phonecode": "93",
            "currency": "AFN"
        },
        // ... (rest of the countries array remains the same)
    ];

    const handleSubmit = async (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const response = await fetch('/api/auth/apply-kg', {
            method: 'POST',
            body: JSON.stringify({
                student_name:formData.get("student_name"),
                father_name:formData.get("father_name"),
                national_identity:formData.get("national_identity"),
                dob:formData.get("dob"),
                mobile:formData.get("mobile"),
                program:formData.get("program"),
                school:formData.get("school"),
                classes:formData.get("classes"),
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

    return (
        <div className="min-h-screen bg-gradient-to-br from-red-900 via-black to-red-900">
            <div className="container mx-auto px-4 py-8">
                <div className="flex justify-center mb-8">
                    <div className="">
                        <Image
                            src={Logo}
                            alt="MVIT Logo"
                            width={120}
                            height={120}
                            className="object-contain"
                        />
                    </div>
                </div>

                <div className="max-w-4xl mx-auto bg-black bg-opacity-70 rounded-xl shadow-2xl overflow-hidden">
                    <div className="p-6 md:p-8">
                        <h1 className="text-3xl font-bold text-center text-white mb-2">Application Form</h1>
                        <p className="text-center text-red-300 mb-8">United School of Artificial Intelligence</p>

                        <form onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="flex flex-col">
                                    <label className="text-white mb-2">Full Name</label>
                                    <input
                                        type="text"
                                        placeholder="Enter your full name"
                                        className="h-12 px-4 bg-gray-800 text-white border border-red-700 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none"
                                        required
                                        name="student_name"
                                    />
                                </div>

                                <div className="flex flex-col">
                                    <label className="text-white mb-2">Father/Mother Name</label>
                                    <input
                                        type="text"
                                        placeholder="Enter your father or mother name"
                                        className="h-12 px-4 bg-gray-800 text-white border border-red-700 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none"
                                        required
                                        name="father_name"
                                    />
                                </div>

                                <div className="flex flex-col">
                                    <label className="text-white mb-2">National Identity No.</label>
                                    <input
                                        type="text"
                                        placeholder="Enter your national identity number"
                                        className="h-12 px-4 bg-gray-800 text-white border border-red-700 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none"
                                        required
                                        name="national_identity"
                                    />
                                </div>

                                <div className="flex flex-col">
                                    <label className="text-white mb-2">Date of Birth</label>
                                    <input
                                        type="date"
                                        className="h-12 px-4 bg-gray-800 text-white border border-red-700 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none"
                                        required
                                        name="dob"
                                    />
                                </div>

                                <div className="flex flex-col">
                                    <label className="text-white mb-2">Contact: Mobile/WhatsApp</label>
                                    <input
                                        type="text"
                                        placeholder="Enter WhatsApp number with country code"
                                        className="h-12 px-4 bg-gray-800 text-white border border-red-700 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none"
                                        required
                                        name="mobile"
                                    />
                                </div>

                                <div className="flex flex-col">
                                    <label className="text-white mb-2">
                                        Program Applying for (
                                        <Link href="/pages/study" className="text-red-400 hover:text-red-300 text-sm">Studies</Link>,
                                        <Link href="/pages/study/fee" className="text-red-400 hover:text-red-300 text-sm"> Fee</Link>)
                                    </label>
                                    <select
                                        className="h-12 px-4 bg-gray-800 text-white border border-red-700 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none"
                                        name="program"
                                    >
                                        {programs.map((program) => (
                                            program["open"] &&
                                            <option key={program["id"]} value={program["program"]}>
                                                {program["program"]}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div className="flex flex-col">
                                    <label className="text-white mb-2">School</label>
                                    <select
                                        className="h-12 px-4 bg-gray-800 text-white border border-red-700 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none"
                                        name="school"
                                    >
                                        <option value="United School of Artificial Intelligence">
                                            United School of Artificial Intelligence
                                        </option>
                                    </select>
                                </div>

                                <div className="flex flex-col">
                                    <label className="text-white mb-2">Classes</label>
                                    <select
                                        className="h-12 px-4 bg-gray-800 text-white border border-red-700 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none"
                                        name="classes"
                                    >
                                        <option value="Online">Online</option>
                                        <option value="MVIT, Pakistan" selected={true}>MVIT, Pakistan</option>
                                    </select>
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row justify-center gap-4 mt-8">
                                <button
                                    type="submit"
                                    className="bg-red-700 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105"
                                >
                                    Submit Application
                                </button>
                                <Link
                                    href="/usai"
                                    className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg text-center transition duration-300 transform hover:scale-105"
                                >
                                    Back to Home
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}