'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    FaHandshake,
    FaUniversity,
    FaUser,
    FaEnvelope,
    FaPhone,
    FaGlobe,
    FaUsers,
    FaCheck,
    FaArrowRight,
    FaLightbulb,
    FaRocket,
    FaGraduationCap,
    FaChartLine,
    FaGlobeAmericas
} from 'react-icons/fa';

interface PartnershipFormData {
    institutionName: string;
    contactName: string;
    contactEmail: string;
    contactPhone: string;
    institutionType: string;
    country: string;
    city: string;
    studentCount: string;
    partnershipType: string;
    currentChallenges: string;
    desiredSupport: string;
    budgetRange: string;
    timeline: string;
    additionalNotes: string;
}

interface SubmissionState {
    loading: boolean;
    success: boolean;
    error: string | null;
    data: { referenceId: string } | null;
}

const PartnershipPage = () => {
    const [formData, setFormData] = useState<PartnershipFormData>({
        institutionName: '',
        contactName: '',
        contactEmail: '',
        contactPhone: '',
        institutionType: '',
        country: '',
        city: '',
        studentCount: '',
        partnershipType: '',
        currentChallenges: '',
        desiredSupport: '',
        budgetRange: '',
        timeline: '',
        additionalNotes: ''
    });

    const [state, setState] = useState<SubmissionState>({
        loading: false,
        success: false,
        error: null,
        data: null
    });

    // Auto-focus first field on mount
    useEffect(() => {
        const firstInput = document.querySelector('input') as HTMLInputElement;
        if (firstInput) firstInput.focus();
    }, []);

    const institutionTypes = [
        'University',
        'College',
        'School (K-12)',
        'Training Center',
        'Vocational Institute',
        'Online Education Platform',
        'Corporate Training',
        'Other'
    ];

    const partnershipTypes = [
        'Curriculum Development',
        'Faculty Training & Development',
        'Student Exchange Programs',
        'Joint Research Projects',
        'Infrastructure Setup',
        'Online Learning Platform',
        'Certification Programs',
        'Workshops & Seminars',
        'Full Institutional Partnership',
        'Other'
    ];

    const budgetRanges = [
        'Under $10,000',
        '$10,000 - $50,000',
        '$50,000 - $100,000',
        '$100,000 - $500,000',
        'Over $500,000',
        'To be discussed'
    ];

    const timelines = [
        'Immediately',
        'Within 3 months',
        'Within 6 months',
        'Within 1 year',
        'Flexible'
    ];

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        // Clear error when user starts typing
        if (state.error) {
            setState(prev => ({ ...prev, error: null }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setState({ loading: true, success: false, error: null, data: null });

        try {
            const response = await fetch('/api/auth/partnerships', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (response.ok && result.success) {
                setState({
                    loading: false,
                    success: true,
                    error: null,
                    data: result.data
                });
                // Reset form on success
                setFormData({
                    institutionName: '',
                    contactName: '',
                    contactEmail: '',
                    contactPhone: '',
                    institutionType: '',
                    country: '',
                    city: '',
                    studentCount: '',
                    partnershipType: '',
                    currentChallenges: '',
                    desiredSupport: '',
                    budgetRange: '',
                    timeline: '',
                    additionalNotes: ''
                });
            } else {
                setState({
                    loading: false,
                    success: false,
                    error: result.message || 'Submission failed. Please try again.',
                    data: null
                });
            }
        } catch (error) {
            setState({
                loading: false,
                success: false,
                error: 'Network error. Please check your connection and try again.',
                data: null
            });
        }
    };

    // Enhanced benefits with icons
    const benefits = [
        {
            icon: <FaLightbulb className="text-2xl text-amber-500" />,
            title: 'AI-Powered Curriculum',
            desc: 'Cutting-edge AI and tech curriculum'
        },
        {
            icon: <FaGraduationCap className="text-2xl text-blue-500" />,
            title: 'Faculty Development',
            desc: 'Modern educator training methodologies'
        },
        {
            icon: <FaRocket className="text-2xl text-emerald-500" />,
            title: 'Tech Infrastructure',
            desc: 'Advanced learning platforms implementation'
        },
        {
            icon: <FaGlobeAmericas className="text-2xl text-indigo-500" />,
            title: 'Global Network',
            desc: 'Connect with innovative institutions worldwide'
        },
        {
            icon: <FaChartLine className="text-2xl text-rose-500" />,
            title: 'Proven Results',
            desc: 'Leverage MVIT\'s successful educational model'
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-8 sm:py-12">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-10 sm:mb-16"
                >
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 mb-6">
                        <FaHandshake className="text-3xl text-white" />
                    </div>
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
                        Transform Education Together
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Partner with MVIT to bring AI-powered innovation to your institution
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
                    {/* Benefits Sidebar */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="lg:col-span-1"
                    >
                        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 sticky top-6 border border-white/50">
                            <h2 className="text-xl font-bold text-gray-900 mb-5 flex items-center gap-2">
                                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                                Why Partner With Us?
                            </h2>
                            <div className="space-y-5">
                                {benefits.map((benefit, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 + index * 0.1 }}
                                        className="flex gap-4 p-3 rounded-xl bg-gray-50 hover:bg-blue-50 transition-colors"
                                    >
                                        <div className="flex-shrink-0 mt-0.5">
                                            {benefit.icon}
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900">{benefit.title}</h3>
                                            <p className="text-sm text-gray-600 mt-1">{benefit.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Main Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="lg:col-span-2"
                    >
                        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 sm:p-8 border border-white/50">
                            <AnimatePresence mode="wait">
                                {state.success ? (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        className="text-center py-8"
                                    >
                                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6 mx-auto">
                                            <FaCheck className="text-3xl text-green-600" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                            Partnership Request Received!
                                        </h3>
                                        <p className="text-gray-600 mb-2 max-w-md mx-auto">
                                            Thank you for your interest in partnering with MVIT.
                                            Our team will review your request and contact you within 2-3 business days.
                                        </p>
                                        {state.data?.referenceId && (
                                            <p className="text-gray-700 font-medium mt-4">
                                                Your reference ID: <span className="text-blue-600 font-mono">{state.data.referenceId}</span>
                                            </p>
                                        )}
                                        <motion.button
                                            onClick={() => setState({ loading: false, success: false, error: null, data: null })}
                                            className="mt-6 px-6 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
                                        >
                                            Submit Another Request
                                        </motion.button>
                                    </motion.div>
                                ) : (
                                    <motion.form
                                        key="form"
                                        onSubmit={handleSubmit}
                                        className="space-y-6"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                    >
                                        {/* Institution Information */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Institution Name *
                                                </label>
                                                <div className="relative">
                                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
                                                        <FaUniversity />
                                                    </div>
                                                    <input
                                                        type="text"
                                                        name="institutionName"
                                                        required
                                                        value={formData.institutionName}
                                                        onChange={handleInputChange}
                                                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                                                        placeholder="e.g. Stanford University"
                                                    />
                                                </div>
                                            </div>

                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Institution Type *
                                                </label>
                                                <select
                                                    name="institutionType"
                                                    required
                                                    value={formData.institutionType}
                                                    onChange={handleInputChange}
                                                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition appearance-none bg-white"
                                                >
                                                    <option value="">Select type</option>
                                                    {institutionTypes.map(type => (
                                                        <option key={type} value={type}>{type}</option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>

                                        {/* Contact Information */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Contact Name *
                                                </label>
                                                <div className="relative">
                                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
                                                        <FaUser />
                                                    </div>
                                                    <input
                                                        type="text"
                                                        name="contactName"
                                                        required
                                                        value={formData.contactName}
                                                        onChange={handleInputChange}
                                                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                                                        placeholder="Full name"
                                                    />
                                                </div>
                                            </div>

                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Contact Email *
                                                </label>
                                                <div className="relative">
                                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
                                                        <FaEnvelope />
                                                    </div>
                                                    <input
                                                        type="email"
                                                        name="contactEmail"
                                                        required
                                                        value={formData.contactEmail}
                                                        onChange={handleInputChange}
                                                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                                                        placeholder="email@institution.com"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Phone Number
                                                </label>
                                                <div className="relative">
                                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
                                                        <FaPhone />
                                                    </div>
                                                    <input
                                                        type="tel"
                                                        name="contactPhone"
                                                        value={formData.contactPhone}
                                                        onChange={handleInputChange}
                                                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                                                        placeholder="+1 (555) 000-0000"
                                                    />
                                                </div>
                                            </div>

                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Student Count
                                                </label>
                                                <div className="relative">
                                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
                                                        <FaUsers />
                                                    </div>
                                                    <input
                                                        type="text"
                                                        name="studentCount"
                                                        value={formData.studentCount}
                                                        onChange={handleInputChange}
                                                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                                                        placeholder="Approximate number"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Location */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Country *
                                                </label>
                                                <div className="relative">
                                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
                                                        <FaGlobe />
                                                    </div>
                                                    <input
                                                        type="text"
                                                        name="country"
                                                        required
                                                        value={formData.country}
                                                        onChange={handleInputChange}
                                                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                                                        placeholder="Country"
                                                    />
                                                </div>
                                            </div>

                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    City
                                                </label>
                                                <input
                                                    type="text"
                                                    name="city"
                                                    value={formData.city}
                                                    onChange={handleInputChange}
                                                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                                                    placeholder="City"
                                                />
                                            </div>
                                        </div>

                                        {/* Partnership Details */}
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Partnership Type *
                                            </label>
                                            <select
                                                name="partnershipType"
                                                required
                                                value={formData.partnershipType}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition appearance-none bg-white"
                                            >
                                                <option value="">Select partnership type</option>
                                                {partnershipTypes.map(type => (
                                                    <option key={type} value={type}>{type}</option>
                                                ))}
                                            </select>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Budget Range
                                                </label>
                                                <select
                                                    name="budgetRange"
                                                    value={formData.budgetRange}
                                                    onChange={handleInputChange}
                                                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition appearance-none bg-white"
                                                >
                                                    <option value="">Select range</option>
                                                    {budgetRanges.map(range => (
                                                        <option key={range} value={range}>{range}</option>
                                                    ))}
                                                </select>
                                            </div>

                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Timeline
                                                </label>
                                                <select
                                                    name="timeline"
                                                    value={formData.timeline}
                                                    onChange={handleInputChange}
                                                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition appearance-none bg-white"
                                                >
                                                    <option value="">Select timeline</option>
                                                    {timelines.map(timeline => (
                                                        <option key={timeline} value={timeline}>{timeline}</option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>

                                        {/* Text Areas */}
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Current Challenges
                                            </label>
                                            <textarea
                                                name="currentChallenges"
                                                value={formData.currentChallenges}
                                                onChange={handleInputChange}
                                                rows={3}
                                                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                                                placeholder="Describe your institution's main challenges..."
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Desired Support from MVIT
                                            </label>
                                            <textarea
                                                name="desiredSupport"
                                                value={formData.desiredSupport}
                                                onChange={handleInputChange}
                                                rows={3}
                                                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                                                placeholder="What specific support are you looking for?"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Additional Notes
                                            </label>
                                            <textarea
                                                name="additionalNotes"
                                                value={formData.additionalNotes}
                                                onChange={handleInputChange}
                                                rows={3}
                                                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                                                placeholder="Any other information you'd like to share..."
                                            />
                                        </div>

                                        {state.error && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                className="bg-red-50 border border-red-200 rounded-xl p-4"
                                            >
                                                <p className="text-red-700 font-medium">{state.error}</p>
                                            </motion.div>
                                        )}

                                        <motion.button
                                            type="submit"
                                            disabled={state.loading}
                                            whileHover={{ scale: state.loading ? 1 : 1.015 }}
                                            whileTap={{ scale: state.loading ? 1 : 0.985 }}
                                            className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-4 px-6 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-800 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3 shadow-lg"
                                        >
                                            {state.loading ? (
                                                <>
                                                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                                    Processing Request...
                                                </>
                                            ) : (
                                                <>
                                                    Submit Partnership Request
                                                    <FaArrowRight className="ml-2" />
                                                </>
                                            )}
                                        </motion.button>

                                        <p className="text-xs text-gray-500 text-center mt-2">
                                            By submitting, you agree to our Privacy Policy and consent to contact from our partnership team.
                                        </p>
                                    </motion.form>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default PartnershipPage;