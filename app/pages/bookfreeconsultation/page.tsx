'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCalendar, FaClock, FaUser, FaBuilding, FaPhone, FaEnvelope, FaCheck, FaArrowRight, FaHeadset, FaLightbulb, FaRocket } from 'react-icons/fa';

const ConsultationPage = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        phone: '',
        companySize: '',
        challenge: '',
        preferredDate: '',
        preferredTime: '',
        budget: ''
    });

    const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
    const [currentStep, setCurrentStep] = useState(1);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
    };

    const timeSlots = [
        '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
        '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM'
    ];

    const benefits = [
        {
            icon: FaLightbulb,
            title: 'AI Opportunity Assessment',
            description: 'Identify high-impact AI use cases specific to your business'
        },
        {
            icon: FaRocket,
            title: 'Implementation Roadmap',
            description: 'Get a clear, step-by-step plan for AI integration'
        },
        {
            icon: FaHeadset,
            title: 'Expert Guidance',
            description: '30-minute session with our senior AI consultants'
        }
    ];

    const successStories = [
        {
            metric: '40%',
            description: 'Average efficiency improvement'
        },
        {
            metric: '3.2x',
            description: 'Average ROI on AI investments'
        },
        {
            metric: '12-16',
            description: 'Weeks to first AI MVP'
        },
        {
            metric: '98%',
            description: 'Client satisfaction rate'
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
            {/* Hero Section */}
            <section className="relative py-16 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 text-white overflow-hidden">
                <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full -translate-y-48 translate-x-48" />
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/10 rounded-full -translate-x-40 translate-y-40" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-6xl font-bold mb-6"
                        >
                            Book Your <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Free AI Consultation</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-xl text-gray-300 mb-8 leading-relaxed"
                        >
                            Get expert guidance on how AI can transform your business.
                            Our 30-minute consultation will help you identify opportunities and create a clear implementation plan.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                        {/* Consultation Form */}
                        <div className="lg:col-span-2">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden"
                            >
                                {/* Progress Steps */}
                                <div className="border-b border-gray-200">
                                    <div className="flex justify-between p-6">
                                        {[1, 2, 3].map((step) => (
                                            <div key={step} className="flex items-center">
                                                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                                                    currentStep >= step
                                                        ? 'bg-blue-600 text-white'
                                                        : 'bg-gray-200 text-gray-600'
                                                }`}>
                                                    {currentStep > step ? <FaCheck className="text-xs" /> : step}
                                                </div>
                                                {step < 3 && (
                                                    <div className={`w-16 h-1 mx-4 ${
                                                        currentStep > step ? 'bg-blue-600' : 'bg-gray-200'
                                                    }`} />
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <form onSubmit={handleSubmit} className="p-6 lg:p-8">
                                    {/* Step 1: Personal Information */}
                                    {currentStep === 1 && (
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            className="space-y-6"
                                        >
                                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Tell us about yourself</h3>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                                        First Name *
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="firstName"
                                                        value={formData.firstName}
                                                        onChange={handleInputChange}
                                                        required
                                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                                        placeholder="Enter your first name"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                                        Last Name *
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="lastName"
                                                        value={formData.lastName}
                                                        onChange={handleInputChange}
                                                        required
                                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                                        placeholder="Enter your last name"
                                                    />
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                                        Email Address *
                                                    </label>
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        value={formData.email}
                                                        onChange={handleInputChange}
                                                        required
                                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                                        placeholder="your.email@company.com"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                                        Phone Number
                                                    </label>
                                                    <input
                                                        type="tel"
                                                        name="phone"
                                                        value={formData.phone}
                                                        onChange={handleInputChange}
                                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                                        placeholder="+1 (555) 000-0000"
                                                    />
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                                        Company *
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="company"
                                                        value={formData.company}
                                                        onChange={handleInputChange}
                                                        required
                                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                                        placeholder="Your company name"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                                        Company Size *
                                                    </label>
                                                    <select
                                                        name="companySize"
                                                        value={formData.companySize}
                                                        onChange={handleInputChange}
                                                        required
                                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                                    >
                                                        <option value="">Select size</option>
                                                        <option value="1-10">1-10 employees</option>
                                                        <option value="11-50">11-50 employees</option>
                                                        <option value="51-200">51-200 employees</option>
                                                        <option value="201-500">201-500 employees</option>
                                                        <option value="501-1000">501-1000 employees</option>
                                                        <option value="1000+">1000+ employees</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="flex justify-end">
                                                <button
                                                    type="button"
                                                    onClick={() => setCurrentStep(2)}
                                                    className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors flex items-center gap-2"
                                                >
                                                    Continue
                                                    <FaArrowRight className="text-sm" />
                                                </button>
                                            </div>
                                        </motion.div>
                                    )}

                                    {/* Step 2: Business Needs */}
                                    {currentStep === 2 && (
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            className="space-y-6"
                                        >
                                            <h3 className="text-2xl font-bold text-gray-900 mb-6">What challenges are you facing?</h3>

                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Primary Business Challenge *
                                                </label>
                                                <textarea
                                                    name="challenge"
                                                    value={formData.challenge}
                                                    onChange={handleInputChange}
                                                    required
                                                    rows={4}
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                                    placeholder="Describe your current challenges and what you hope to achieve with AI..."
                                                />
                                            </div>

                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Expected Budget Range
                                                </label>
                                                <select
                                                    name="budget"
                                                    value={formData.budget}
                                                    onChange={handleInputChange}
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                                >
                                                    <option value="">Select budget range</option>
                                                    <option value="10k-50k">$10K - $50K</option>
                                                    <option value="50k-100k">$50K - $100K</option>
                                                    <option value="100k-250k">$100K - $250K</option>
                                                    <option value="250k-500k">$250K - $500K</option>
                                                    <option value="500k+">$500K+</option>
                                                </select>
                                            </div>

                                            <div className="flex justify-between">
                                                <button
                                                    type="button"
                                                    onClick={() => setCurrentStep(1)}
                                                    className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
                                                >
                                                    Back
                                                </button>
                                                <button
                                                    type="button"
                                                    onClick={() => setCurrentStep(3)}
                                                    className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors flex items-center gap-2"
                                                >
                                                    Continue
                                                    <FaArrowRight className="text-sm" />
                                                </button>
                                            </div>
                                        </motion.div>
                                    )}

                                    {/* Step 3: Schedule */}
                                    {currentStep === 3 && (
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            className="space-y-6"
                                        >
                                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Schedule your consultation</h3>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                                        Preferred Date *
                                                    </label>
                                                    <input
                                                        type="date"
                                                        name="preferredDate"
                                                        value={formData.preferredDate}
                                                        onChange={handleInputChange}
                                                        required
                                                        min={new Date().toISOString().split('T')[0]}
                                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                                        Preferred Time *
                                                    </label>
                                                    <select
                                                        name="preferredTime"
                                                        value={formData.preferredTime}
                                                        onChange={handleInputChange}
                                                        required
                                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                                    >
                                                        <option value="">Select time</option>
                                                        {timeSlots.map((slot) => (
                                                            <option key={slot} value={slot}>{slot}</option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="bg-gray-50 p-6 rounded-xl">
                                                <h4 className="font-semibold text-gray-900 mb-4">Available Time Slots (30 minutes)</h4>
                                                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                                    {timeSlots.map((slot) => (
                                                        <button
                                                            key={slot}
                                                            type="button"
                                                            onClick={() => {
                                                                setSelectedSlot(slot);
                                                                setFormData(prev => ({ ...prev, preferredTime: slot }));
                                                            }}
                                                            className={`p-3 text-sm font-medium rounded-lg border transition-colors ${
                                                                selectedSlot === slot
                                                                    ? 'bg-blue-600 text-white border-blue-600'
                                                                    : 'bg-white text-gray-700 border-gray-300 hover:border-blue-500'
                                                            }`}
                                                        >
                                                            {slot}
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="flex justify-between">
                                                <button
                                                    type="button"
                                                    onClick={() => setCurrentStep(2)}
                                                    className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
                                                >
                                                    Back
                                                </button>
                                                <button
                                                    type="submit"
                                                    className="bg-green-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-green-700 transition-colors flex items-center gap-2"
                                                >
                                                    Book Consultation
                                                    <FaCalendar className="text-sm" />
                                                </button>
                                            </div>
                                        </motion.div>
                                    )}
                                </form>
                            </motion.div>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-8">
                            {/* Benefits Card */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                                className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-6 text-white"
                            >
                                <h3 className="text-xl font-bold mb-6">What You&apos;ll Get</h3>
                                <div className="space-y-4">
                                    {benefits.map((benefit, index) => {
                                        const BenefitIcon = benefit.icon;
                                        return (
                                            <div key={index} className="flex items-start gap-3">
                                                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                                                    <BenefitIcon className="text-white text-sm" />
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold mb-1">{benefit.title}</h4>
                                                    <p className="text-blue-100 text-sm">{benefit.description}</p>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </motion.div>

                            {/* Contact Info */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4 }}
                                className="bg-gray-50 rounded-2xl border border-gray-200 p-6"
                            >
                                <h3 className="font-semibold text-gray-900 mb-4">Need immediate help?</h3>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3 text-gray-700">
                                        <FaHeadset className="text-blue-600" />
                                        <span>Call us: +923017362696</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-gray-700">
                                        <FaEnvelope className="text-blue-600" />
                                        <span>dr.sagher@gmail.com</span>
                                    </div>
                                    <div className="text-sm text-gray-600 mt-4">
                                        We value your time and satisfaction, and we&apos;re here to resolve this quickly—feel free to contact us.
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default ConsultationPage;