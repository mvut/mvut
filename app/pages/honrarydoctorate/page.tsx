'use client';
import Link from "next/link";
import React, { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { FaArrowRight, FaInfoCircle, FaAward } from "react-icons/fa";
import Logo from '@/public/mvutflame.png'

interface Country {
    name: string;
    isoCode: string;
    flag: string;
    phonecode: string;
    currency: string;
}

export default function ApplicationForm() {
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

    // Sample countries (truncated - include all in actual implementation)
    const Countries: Country[] = [
        { name: "Pakistan", isoCode: "PK", flag: "🇵🇰", phonecode: "92", currency: "PKR" },
        { name: "United States", isoCode: "US", flag: "🇺🇸", phonecode: "1", currency: "USD" },
        { name: "United Kingdom", isoCode: "GB", flag: "🇬🇧", phonecode: "44", currency: "GBP" },
        // Add all other countries...
    ];

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.currentTarget);
        try {
            const response = await fetch('/api/auth/applyhonrarydoctorate', {
                method: 'POST',
                body: JSON.stringify(Object.fromEntries(formData))
            });

            if(response.ok) {
                alert('Application submitted successfully!');
                router.push('/');
                router.refresh();
            } else {
                throw new Error('Server error');
            }
        } catch (error) {
            alert("Error submitting application. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-red-900 via-black to-red-900 py-8 text-white font-sans">
            {/* MVIT Header with Logo and Slogan */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center mb-8">
                    <div className="flex items-center space-x-4 mb-4">
                        <div className="relative w-16 h-16">
                            <Image
                                src={Logo}
                                alt="MVIT Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold text-red-400">Mansha Virtual Institute of Technologies</h1>
                            <p className="text-sm text-gray-300">Empowering People with AI</p>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="max-w-6xl mx-auto space-y-8">
                    {/* Honorary PhD Criteria */}
                    <div className="bg-black bg-opacity-50 backdrop-blur-sm rounded-xl shadow-lg border border-red-900 p-6">
                        <h2 className="text-2xl font-bold text-red-400 mb-4 flex items-center">
                            <FaAward className="mr-2" /> Honorary PhD Criteria
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-4">
                                <h3 className="text-lg font-semibold text-red-300">Eligibility Requirements</h3>
                                <ul className="space-y-2 text-sm text-gray-300">
                                    <li className="flex items-start">
                                        <span className="text-red-400 mr-2">•</span>
                                        Distinguished achievement in professional field
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-red-400 mr-2">•</span>
                                        Significant contributions to society or academia
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-red-400 mr-2">•</span>
                                        Minimum 15 years of exemplary service
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-red-400 mr-2">•</span>
                                        Recognized leadership in your discipline
                                    </li>
                                </ul>
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-lg font-semibold text-red-300">Selection Process</h3>
                                <ul className="space-y-2 text-sm text-gray-300">
                                    <li className="flex items-start">
                                        <span className="text-red-400 mr-2">•</span>
                                        Initial application screening
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-red-400 mr-2">•</span>
                                        Review by academic committee
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-red-400 mr-2">•</span>
                                        Verification of achievements
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-red-400 mr-2">•</span>
                                        Final approval by university senate
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Application Form */}
                    <div className="bg-black bg-opacity-50 backdrop-blur-sm rounded-xl shadow-lg border border-red-900 p-6 md:p-8">
                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-bold text-red-400 mb-2">Honorary Doctorate Application</h2>
                            <p className="text-gray-300">Please complete all sections of this form to be considered for an honorary degree</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-8">
                            {/* Personal Information Section */}
                            <div className="bg-black bg-opacity-30 p-6 rounded-lg border border-red-900">
                                <h3 className="text-xl font-semibold text-red-400 mb-4 flex items-center">
                                    <FaInfoCircle className="mr-2" /> Personal Information
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-1">
                                        <label className="block text-sm font-medium text-gray-300">Full Name *</label>
                                        <input
                                            type="text"
                                            name="full_name"
                                            placeholder="Your full legal name"
                                            className="w-full bg-black bg-opacity-50 border border-red-900 rounded-md py-2 px-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500"
                                            required
                                        />
                                    </div>

                                    <div className="space-y-1">
                                        <label className="block text-sm font-medium text-gray-300">Father/Mother Name *</label>
                                        <input
                                            type="text"
                                            name="father_name"
                                            placeholder="Parent's name"
                                            className="w-full bg-black bg-opacity-50 border border-red-900 rounded-md py-2 px-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500"
                                            required
                                        />
                                    </div>

                                    <div className="space-y-1">
                                        <label className="block text-sm font-medium text-gray-300">Date of Birth *</label>
                                        <input
                                            type="date"
                                            name="dob"
                                            className="w-full bg-black bg-opacity-50 border border-red-900 rounded-md py-2 px-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500"
                                            required
                                        />
                                    </div>

                                    <div className="space-y-1">
                                        <label className="block text-sm font-medium text-gray-300">Country *</label>
                                        <select
                                            name="country"
                                            className="w-full bg-black bg-opacity-50 border border-red-900 rounded-md py-2 px-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500"
                                            required
                                        >
                                            {Countries.map(country => (
                                                <option key={country.isoCode} value={country.name}>
                                                    {country.flag} {country.name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className="space-y-1 md:col-span-2">
                                        <label className="block text-sm font-medium text-gray-300">Address *</label>
                                        <input
                                            type="text"
                                            name="address"
                                            placeholder="Your complete address"
                                            className="w-full bg-black bg-opacity-50 border border-red-900 rounded-md py-2 px-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500"
                                            required
                                        />
                                    </div>

                                    <div className="space-y-1">
                                        <label className="block text-sm font-medium text-gray-300">Email *</label>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Your primary email"
                                            className="w-full bg-black bg-opacity-50 border border-red-900 rounded-md py-2 px-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500"
                                            required
                                        />
                                    </div>

                                    <div className="space-y-1">
                                        <label className="block text-sm font-medium text-gray-300">Mobile/WhatsApp *</label>
                                        <input
                                            type="tel"
                                            name="mobile_no"
                                            placeholder="With country code"
                                            className="w-full bg-black bg-opacity-50 border border-red-900 rounded-md py-2 px-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500"
                                            required
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Professional Information Section */}
                            <div className="bg-black bg-opacity-30 p-6 rounded-lg border border-red-900">
                                <h3 className="text-xl font-semibold text-red-400 mb-4 flex items-center">
                                    <FaInfoCircle className="mr-2" /> Professional Information
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-1">
                                        <label className="block text-sm font-medium text-gray-300">Current Occupation *</label>
                                        <select
                                            name="current_occupation"
                                            className="w-full bg-black bg-opacity-50 border border-red-900 rounded-md py-2 px-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500"
                                            required
                                        >
                                            <option value="">Select your occupation</option>
                                            <option value="Academia and Education">Academia and Education</option>
                                            <option value="Science and Research">Science and Research</option>
                                            <option value="Arts and Humanities">Arts and Humanities</option>
                                            <option value="Business and Entrepreneurship">Business and Entrepreneurship</option>
                                            <option value="Politics and Public Service">Politics and Public Service</option>
                                            <option value="Healthcare and Medicine">Healthcare and Medicine</option>
                                            <option value="Social Services and Nonprofit">Social Services and Nonprofit</option>
                                            <option value="Law and Legal Services">Law and Legal Services</option>
                                            <option value="Environmental and Conservation">Environmental and Conservation</option>
                                            <option value="Media and Communication">Media and Communication</option>
                                            <option value="Religious and Spiritual Leadership">Religious and Spiritual Leadership</option>
                                            <option value="Technology and Innovation">Technology and Innovation</option>
                                            <option value="Sports and Recreation">Sports and Recreation</option>
                                            <option value="Philanthropy and Humanitarianism">Philanthropy and Humanitarianism</option>
                                            <option value="Literature and Journalism">Literature and Journalism</option>
                                        </select>
                                    </div>

                                    <div className="space-y-1">
                                        <label className="block text-sm font-medium text-gray-300">Organization/Institution *</label>
                                        <input
                                            type="text"
                                            name="organization_institution"
                                            placeholder="Current organization"
                                            className="w-full bg-black bg-opacity-50 border border-red-900 rounded-md py-2 px-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500"
                                            required
                                        />
                                    </div>

                                    <div className="space-y-1">
                                        <label className="block text-sm font-medium text-gray-300">Position/Title *</label>
                                        <input
                                            type="text"
                                            name="position_title"
                                            placeholder="Your current position"
                                            className="w-full bg-black bg-opacity-50 border border-red-900 rounded-md py-2 px-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500"
                                            required
                                        />
                                    </div>

                                    <div className="space-y-1">
                                        <label className="block text-sm font-medium text-gray-300">Years of Service *</label>
                                        <input
                                            type="number"
                                            name="service_length"
                                            placeholder="Years in your field"
                                            min="1"
                                            className="w-full bg-black bg-opacity-50 border border-red-900 rounded-md py-2 px-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500"
                                            required
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Academic Information Section */}
                            <div className="bg-black bg-opacity-30 p-6 rounded-lg border border-red-900">
                                <h3 className="text-xl font-semibold text-red-400 mb-4 flex items-center">
                                    <FaInfoCircle className="mr-2" /> Academic Information
                                </h3>
                                <div className="grid grid-cols-1 gap-6">
                                    <div className="space-y-1">
                                        <label className="block text-sm font-medium text-gray-300">Field/Discipline *</label>
                                        <select
                                            name="discipline"
                                            className="w-full bg-black bg-opacity-50 border border-red-900 rounded-md py-2 px-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500"
                                            required
                                        >
                                            <option value="">Select desired honorary degree</option>
                                            <option value="Doctor of Fine Arts (DFA)">Doctor of Fine Arts (DFA)</option>
                                            <option value="Doctor of Arts (DA)">Doctor of Arts (DA)</option>
                                            <option value="Doctor of Philosophy (PhD)">Doctor of Philosophy (PhD)</option>
                                            <option value="Doctor of Science (DSc)">Doctor of Science (DSc)</option>
                                            <option value="Doctor of Engineering (DEng)">Doctor of Engineering (DEng)</option>
                                            <option value="Doctor of Business Administration (DBA)">Doctor of Business Administration (DBA)</option>
                                            <option value="Doctor of Commerce (DCom)">Doctor of Commerce (DCom)</option>
                                            <option value="Doctor of Economics (DEcon)">Doctor of Economics (DEcon)</option>
                                            <option value="Doctor of Laws (LLD)">Doctor of Laws (LLD)</option>
                                            <option value="Doctor of Education (EdD)">Doctor of Education (EdD)</option>
                                            <option value="Doctor of Computer Science (DCS)">Doctor of Computer Science (DCS)</option>
                                            <option value="Doctor of Information Technology (DIT)">Doctor of Information Technology (DIT)</option>
                                            <option value="Doctor of Theology (DTh)">Doctor of Theology (DTh)</option>
                                            <option value="Doctor of Journalism (DJour)">Doctor of Journalism (DJour)</option>
                                            <option value="Doctor of Sports Science (DSS)">Doctor of Sports Science (DSS)</option>
                                        </select>
                                    </div>

                                    <div className="space-y-1">
                                        <label className="block text-sm font-medium text-gray-300">Contributions/Achievements *</label>
                                        <p className="text-xs text-gray-400 mb-2">
                                            Describe your significant contributions that merit this honorary degree (500 words max)
                                        </p>
                                        <textarea
                                            name="contributions"
                                            rows={5}
                                            className="w-full bg-black bg-opacity-50 border border-red-900 rounded-md py-2 px-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500"
                                            required
                                        ></textarea>
                                    </div>

                                    <div className="space-y-1">
                                        <label className="block text-sm font-medium text-gray-300">Statement of Purpose *</label>
                                        <p className="text-xs text-gray-400 mb-2">
                                            Explain why you should be considered and how this aligns with MVIT`&apos;s mission (500 words max)
                                        </p>
                                        <textarea
                                            name="statement_of_purpose"
                                            rows={5}
                                            className="w-full bg-black bg-opacity-50 border border-red-900 rounded-md py-2 px-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500"
                                            required
                                        ></textarea>
                                    </div>

                                    <div className="space-y-1">
                                        <label className="block text-sm font-medium text-gray-300">Social Profile Link</label>
                                        <p className="text-xs text-gray-400 mb-2">
                                            LinkedIn, personal website, or other professional profile
                                        </p>
                                        <input
                                            type="url"
                                            name="social_profile_link"
                                            placeholder="https://"
                                            className="w-full bg-black bg-opacity-50 border border-red-900 rounded-md py-2 px-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Form Actions */}
                            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-4">
                                <p className="text-sm text-gray-400">
                                    By submitting, you agree to MVIT`&apos;s terms and acknowledge the accuracy of your information.
                                </p>
                                <div className="flex gap-4">
                                    <Link
                                        href="/pages/honoraryphd"
                                        className="px-6 py-2 border border-red-600 text-red-400 rounded-md hover:bg-red-900 hover:bg-opacity-30 transition-colors"
                                    >
                                        Cancel
                                    </Link>
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors flex items-center gap-2 disabled:opacity-50"
                                    >
                                        {isSubmitting ? 'Submitting...' : 'Submit Application'}
                                        {!isSubmitting && <FaArrowRight />}
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
}