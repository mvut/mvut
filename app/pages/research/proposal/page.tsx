'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    FaFlask,
    FaUser,
    FaEnvelope,
    FaPhone,
    FaUniversity,
    FaUsers,
    FaCalendar,
    FaMoneyBillWave,
    FaFileAlt,
    FaArrowRight,
    FaArrowLeft,
    FaCheck,
    FaPlus,
    FaTrash,
    FaTimes,
    FaExclamationTriangle
} from 'react-icons/fa';
import { useRouter } from 'next/navigation';

interface ResearchProposalForm {
    proposalTitle: string;
    principalInvestigator: string;
    piEmail: string;
    piPhone: string;
    piPosition: string;
    institution: string;
    department: string;
    coInvestigators: string[];
    researchField: string;
    subfield: string;
    durationMonths: string;
    budgetAmount: string;
    budgetCurrency: string;
    abstract: string;
    background: string;
    objectives: string[];
    methodology: string;
    expectedOutcomes: string[];
    timeline: { phase: string; duration: string; tasks: string }[];
    ethicalConsiderations: string;
    references: string;
}

// Confirmation Modal Component
const ConfirmationModal: React.FC<{
    isOpen: boolean;
    onConfirm: () => void;
    onCancel: () => void;
    title: string;
    message: string;
    confirmText?: string;
    cancelText?: string;
    type?: 'warning' | 'danger' | 'info';
}> = ({ isOpen, onConfirm, onCancel, title, message, confirmText = "Confirm", cancelText = "Cancel", type = 'warning' }) => {
    if (!isOpen) return null;

    const getIconColor = () => {
        switch (type) {
            case 'danger': return 'text-red-600';
            case 'info': return 'text-blue-600';
            default: return 'text-yellow-600';
        }
    };

    const getConfirmButtonColor = () => {
        switch (type) {
            case 'danger': return 'bg-red-600 hover:bg-red-700';
            case 'info': return 'bg-blue-600 hover:bg-blue-700';
            default: return 'bg-green-600 hover:bg-green-700';
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-2xl shadow-xl max-w-md w-full p-6"
            >
                <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-full bg-${type === 'warning' ? 'yellow' : type === 'danger' ? 'red' : 'blue'}-100 flex items-center justify-center`}>
                        <FaExclamationTriangle className={`text-xl ${getIconColor()}`} />
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
                        <p className="text-gray-600 text-sm mt-1">{message}</p>
                    </div>
                </div>

                <div className="flex gap-3 justify-end mt-6">
                    <button
                        onClick={onCancel}
                        className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                    >
                        {cancelText}
                    </button>
                    <button
                        onClick={onConfirm}
                        className={`px-6 py-2 text-white rounded-lg font-medium transition-colors ${getConfirmButtonColor()}`}
                    >
                        {confirmText}
                    </button>
                </div>
            </motion.div>
        </div>
    );
};

const ResearchProposalPage = () => {
    const router = useRouter();
    const [formData, setFormData] = useState<ResearchProposalForm>({
        proposalTitle: '',
        principalInvestigator: '',
        piEmail: '',
        piPhone: '',
        piPosition: '',
        institution: '',
        department: '',
        coInvestigators: [''],
        researchField: '',
        subfield: '',
        durationMonths: '',
        budgetAmount: '',
        budgetCurrency: 'USD',
        abstract: '',
        background: '',
        objectives: [''],
        methodology: '',
        expectedOutcomes: [''],
        timeline: [{ phase: '', duration: '', tasks: '' }],
        ethicalConsiderations: '',
        references: ''
    });

    const [currentStep, setCurrentStep] = useState(1);
    const [loading, setLoading] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{ success: boolean; message: string } | null>(null);
    const [showSubmitConfirmation, setShowSubmitConfirmation] = useState(false);
    const [showCancelConfirmation, setShowCancelConfirmation] = useState(false);

    const researchFields = [
        'Artificial Intelligence',
        'Machine Learning',
        'Deep Learning',
        'Natural Language Processing',
        'Computer Vision',
        'Robotics',
        'Data Science',
        'Neural Networks',
        'Reinforcement Learning',
        'Generative AI',
        'AI Ethics',
        'Other'
    ];

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleArrayChange = (index: number, value: string, field: 'coInvestigators' | 'objectives' | 'expectedOutcomes') => {
        const updatedArray = [...formData[field]];
        updatedArray[index] = value;
        setFormData(prev => ({
            ...prev,
            [field]: updatedArray
        }));
    };

    const addArrayItem = (field: 'coInvestigators' | 'objectives' | 'expectedOutcomes') => {
        setFormData(prev => ({
            ...prev,
            [field]: [...prev[field], '']
        }));
    };

    const removeArrayItem = (index: number, field: 'coInvestigators' | 'objectives' | 'expectedOutcomes') => {
        if (formData[field].length > 1) {
            const updatedArray = formData[field].filter((_, i) => i !== index);
            setFormData(prev => ({
                ...prev,
                [field]: updatedArray
            }));
        }
    };

    const handleTimelineChange = (index: number, field: string, value: string) => {
        const updatedTimeline = [...formData.timeline];
        updatedTimeline[index] = { ...updatedTimeline[index], [field]: value };
        setFormData(prev => ({
            ...prev,
            timeline: updatedTimeline
        }));
    };

    const addTimelinePhase = () => {
        setFormData(prev => ({
            ...prev,
            timeline: [...prev.timeline, { phase: '', duration: '', tasks: '' }]
        }));
    };

    const removeTimelinePhase = (index: number) => {
        if (formData.timeline.length > 1) {
            const updatedTimeline = formData.timeline.filter((_, i) => i !== index);
            setFormData(prev => ({
                ...prev,
                timeline: updatedTimeline
            }));
        }
    };

    const handleSubmitClick = (e: React.FormEvent) => {
        e.preventDefault();
        setShowSubmitConfirmation(true);
    };

    const handleSubmitConfirm = async () => {
        setShowSubmitConfirmation(false);
        setLoading(true);
        setSubmitStatus(null);

        try {
            // Filter out empty array items
            const submissionData = {
                ...formData,
                coInvestigators: formData.coInvestigators.filter(ci => ci.trim() !== ''),
                objectives: formData.objectives.filter(obj => obj.trim() !== ''),
                expectedOutcomes: formData.expectedOutcomes.filter(out => out.trim() !== ''),
                timeline: formData.timeline.filter(phase =>
                    phase.phase.trim() !== '' || phase.duration.trim() !== '' || phase.tasks.trim() !== ''
                )
            };

            const response = await fetch('/api/auth/research-proposals', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(submissionData),
            });

            const result = await response.json();

            if (result.success) {
                setSubmitStatus({ success: true, message: result.message });

                // Navigate to home page after 2 seconds
                setTimeout(() => {
                    router.push('/pages/research');
                }, 2000);
            } else {
                setSubmitStatus({ success: false, message: result.message });
            }
        } catch (error) {
            setSubmitStatus({
                success: false,
                message: 'Network error. Please try again.'
            });
        } finally {
            setLoading(false);
        }
    };

    const handleSubmitCancel = () => {
        setShowSubmitConfirmation(false);
    };

    const handleCancelClick = () => {
        setShowCancelConfirmation(true);
    };

    const handleCancelConfirm = () => {
        setShowCancelConfirmation(false);
        router.push('/pages/research');
    };

    const handleCancelCancel = () => {
        setShowCancelConfirmation(false);
    };

    const steps = [
        { number: 1, title: 'Basic Information', icon: FaUser },
        { number: 2, title: 'Research Details', icon: FaFlask },
        { number: 3, title: 'Methodology', icon: FaFileAlt },
        { number: 4, title: 'Budget & Timeline', icon: FaMoneyBillWave }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12">
            <div className="max-w-6xl mx-auto px-4">
                {/* Submit Confirmation Modal */}
                <ConfirmationModal
                    isOpen={showSubmitConfirmation}
                    onConfirm={handleSubmitConfirm}
                    onCancel={handleSubmitCancel}
                    title="Submit Research Proposal"
                    message="Are you sure you want to submit this research proposal? Once submitted, it will be sent for review and cannot be edited."
                    confirmText="Yes, Submit Proposal"
                    cancelText="No, Continue Editing"
                    type="info"
                />

                {/* Cancel Confirmation Modal */}
                <ConfirmationModal
                    isOpen={showCancelConfirmation}
                    onConfirm={handleCancelConfirm}
                    onCancel={handleCancelCancel}
                    title="Cancel Research Proposal"
                    message="Are you sure you want to cancel? All entered data will be lost and you will be redirected to the home page."
                    confirmText="Yes, Cancel"
                    cancelText="No, Continue"
                    type="warning"
                />

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                        <FaFlask className="text-3xl text-white" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Research Proposal Submission
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Submit your innovative research proposal for funding consideration and academic collaboration
                    </p>
                </motion.div>

                {/* Progress Steps */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-8"
                >
                    <div className="flex justify-center">
                        <div className="flex items-center space-x-8">
                            {steps.map((step, index) => {
                                const StepIcon = step.icon;
                                return (
                                    <div key={step.number} className="flex items-center">
                                        <div className={`flex flex-col items-center ${
                                            currentStep >= step.number ? 'text-blue-600' : 'text-gray-400'
                                        }`}>
                                            <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 ${
                                                currentStep >= step.number
                                                    ? 'bg-blue-600 border-blue-600 text-white'
                                                    : 'border-gray-300 bg-white'
                                            }`}>
                                                {currentStep > step.number ? (
                                                    <FaCheck className="text-sm" />
                                                ) : (
                                                    <StepIcon className="text-sm" />
                                                )}
                                            </div>
                                            <span className="text-sm font-medium mt-2">{step.title}</span>
                                        </div>
                                        {index < steps.length - 1 && (
                                            <div className={`w-16 h-1 mx-4 ${
                                                currentStep > step.number ? 'bg-blue-600' : 'bg-gray-300'
                                            }`} />
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </motion.div>

                {/* Success/Error Message */}
                {submitStatus && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`mb-6 p-4 rounded-lg ${
                            submitStatus.success
                                ? 'bg-green-50 border border-green-200 text-green-800'
                                : 'bg-red-50 border border-red-200 text-red-800'
                        }`}
                    >
                        {submitStatus.message}
                        {submitStatus.success && (
                            <p className="text-sm mt-2 text-green-700">
                                Redirecting to home page...
                            </p>
                        )}
                    </motion.div>
                )}

                {/* Form */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden"
                >
                    <form onSubmit={handleSubmitClick} className="p-8">
                        {/* Step 1: Basic Information */}
                        {currentStep === 1 && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="space-y-6"
                            >
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">Research & Investigator Information</h2>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Proposal Title *
                                    </label>
                                    <input
                                        type="text"
                                        name="proposalTitle"
                                        value={formData.proposalTitle}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="Enter your research proposal title"
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Principal Investigator *
                                        </label>
                                        <input
                                            type="text"
                                            name="principalInvestigator"
                                            value={formData.principalInvestigator}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            placeholder="Full name"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Position/Role *
                                        </label>
                                        <input
                                            type="text"
                                            name="piPosition"
                                            value={formData.piPosition}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            placeholder="Professor, Researcher, etc."
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
                                            name="piEmail"
                                            value={formData.piEmail}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            placeholder="investigator@institution.edu"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            name="piPhone"
                                            value={formData.piPhone}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            placeholder="+1 (555) 000-0000"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Institution *
                                        </label>
                                        <input
                                            type="text"
                                            name="institution"
                                            value={formData.institution}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            placeholder="University/Organization name"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Department
                                        </label>
                                        <input
                                            type="text"
                                            name="department"
                                            value={formData.department}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            placeholder="Department/Faculty"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Co-Investigators
                                    </label>
                                    {formData.coInvestigators.map((investigator, index) => (
                                        <div key={index} className="flex gap-2 mb-2">
                                            <input
                                                type="text"
                                                value={investigator}
                                                onChange={(e) => handleArrayChange(index, e.target.value, 'coInvestigators')}
                                                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                                placeholder="Co-investigator name"
                                            />
                                            {formData.coInvestigators.length > 1 && (
                                                <button
                                                    type="button"
                                                    onClick={() => removeArrayItem(index, 'coInvestigators')}
                                                    className="px-4 py-3 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors"
                                                >
                                                    <FaTrash />
                                                </button>
                                            )}
                                        </div>
                                    ))}
                                    <button
                                        type="button"
                                        onClick={() => addArrayItem('coInvestigators')}
                                        className="flex items-center gap-2 px-4 py-2 text-blue-600 hover:text-blue-700 transition-colors"
                                    >
                                        <FaPlus className="text-sm" />
                                        Add Co-Investigator
                                    </button>
                                </div>

                                <div className="flex justify-between">
                                    <button
                                        type="button"
                                        onClick={handleCancelClick}
                                        className="px-6 py-3 border border-red-300 text-red-700 rounded-lg font-semibold hover:bg-red-50 transition-colors flex items-center gap-2"
                                    >
                                        <FaTimes className="text-sm" />
                                        Cancel
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setCurrentStep(2)}
                                        className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center gap-2"
                                    >
                                        Continue
                                        <FaArrowRight className="text-sm" />
                                    </button>
                                </div>
                            </motion.div>
                        )}

                        {/* Step 2: Research Details */}
                        {currentStep === 2 && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="space-y-6"
                            >
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">Research Details</h2>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Research Field *
                                        </label>
                                        <select
                                            name="researchField"
                                            value={formData.researchField}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        >
                                            <option value="">Select field</option>
                                            {researchFields.map(field => (
                                                <option key={field} value={field}>{field}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Subfield/Specialization
                                        </label>
                                        <input
                                            type="text"
                                            name="subfield"
                                            value={formData.subfield}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            placeholder="Specific area of focus"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Abstract/Summary *
                                    </label>
                                    <textarea
                                        name="abstract"
                                        value={formData.abstract}
                                        onChange={handleInputChange}
                                        required
                                        rows={4}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="Provide a concise summary of your research proposal (250-500 words)"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Background & Literature Review
                                    </label>
                                    <textarea
                                        name="background"
                                        value={formData.background}
                                        onChange={handleInputChange}
                                        rows={5}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="Describe the background, context, and relevant literature for your research"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Research Objectives *
                                    </label>
                                    {formData.objectives.map((objective, index) => (
                                        <div key={index} className="flex gap-2 mb-2">
                                            <input
                                                type="text"
                                                value={objective}
                                                onChange={(e) => handleArrayChange(index, e.target.value, 'objectives')}
                                                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                                placeholder={`Objective ${index + 1}`}
                                            />
                                            {formData.objectives.length > 1 && (
                                                <button
                                                    type="button"
                                                    onClick={() => removeArrayItem(index, 'objectives')}
                                                    className="px-4 py-3 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors"
                                                >
                                                    <FaTrash />
                                                </button>
                                            )}
                                        </div>
                                    ))}
                                    <button
                                        type="button"
                                        onClick={() => addArrayItem('objectives')}
                                        className="flex items-center gap-2 px-4 py-2 text-blue-600 hover:text-blue-700 transition-colors"
                                    >
                                        <FaPlus className="text-sm" />
                                        Add Objective
                                    </button>
                                </div>

                                <div className="flex justify-between">
                                    <div className="flex gap-2">
                                        <button
                                            type="button"
                                            onClick={() => setCurrentStep(1)}
                                            className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors flex items-center gap-2"
                                        >
                                            <FaArrowLeft className="text-sm" />
                                            Back
                                        </button>
                                        <button
                                            type="button"
                                            onClick={handleCancelClick}
                                            className="px-6 py-3 border border-red-300 text-red-700 rounded-lg font-semibold hover:bg-red-50 transition-colors flex items-center gap-2"
                                        >
                                            <FaTimes className="text-sm" />
                                            Cancel
                                        </button>
                                    </div>
                                    <button
                                        type="button"
                                        onClick={() => setCurrentStep(3)}
                                        className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center gap-2"
                                    >
                                        Continue
                                        <FaArrowRight className="text-sm" />
                                    </button>
                                </div>
                            </motion.div>
                        )}

                        {/* Step 3: Methodology & Outcomes */}
                        {currentStep === 3 && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="space-y-6"
                            >
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">Methodology & Expected Outcomes</h2>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Research Methodology *
                                    </label>
                                    <textarea
                                        name="methodology"
                                        value={formData.methodology}
                                        onChange={handleInputChange}
                                        required
                                        rows={6}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="Describe your research methods, experimental design, data collection, and analysis techniques"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Expected Outcomes *
                                    </label>
                                    {formData.expectedOutcomes.map((outcome, index) => (
                                        <div key={index} className="flex gap-2 mb-2">
                                            <input
                                                type="text"
                                                value={outcome}
                                                onChange={(e) => handleArrayChange(index, e.target.value, 'expectedOutcomes')}
                                                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                                placeholder={`Expected outcome ${index + 1}`}
                                            />
                                            {formData.expectedOutcomes.length > 1 && (
                                                <button
                                                    type="button"
                                                    onClick={() => removeArrayItem(index, 'expectedOutcomes')}
                                                    className="px-4 py-3 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors"
                                                >
                                                    <FaTrash />
                                                </button>
                                            )}
                                        </div>
                                    ))}
                                    <button
                                        type="button"
                                        onClick={() => addArrayItem('expectedOutcomes')}
                                        className="flex items-center gap-2 px-4 py-2 text-blue-600 hover:text-blue-700 transition-colors"
                                    >
                                        <FaPlus className="text-sm" />
                                        Add Expected Outcome
                                    </button>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Ethical Considerations
                                    </label>
                                    <textarea
                                        name="ethicalConsiderations"
                                        value={formData.ethicalConsiderations}
                                        onChange={handleInputChange}
                                        rows={4}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="Describe any ethical considerations, IRB approval, or ethical guidelines followed"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        References
                                    </label>
                                    <textarea
                                        name="references"
                                        value={formData.references}
                                        onChange={handleInputChange}
                                        rows={4}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="List key references and literature cited"
                                    />
                                </div>

                                <div className="flex justify-between">
                                    <div className="flex gap-2">
                                        <button
                                            type="button"
                                            onClick={() => setCurrentStep(2)}
                                            className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors flex items-center gap-2"
                                        >
                                            <FaArrowLeft className="text-sm" />
                                            Back
                                        </button>
                                        <button
                                            type="button"
                                            onClick={handleCancelClick}
                                            className="px-6 py-3 border border-red-300 text-red-700 rounded-lg font-semibold hover:bg-red-50 transition-colors flex items-center gap-2"
                                        >
                                            <FaTimes className="text-sm" />
                                            Cancel
                                        </button>
                                    </div>
                                    <button
                                        type="button"
                                        onClick={() => setCurrentStep(4)}
                                        className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center gap-2"
                                    >
                                        Continue
                                        <FaArrowRight className="text-sm" />
                                    </button>
                                </div>
                            </motion.div>
                        )}

                        {/* Step 4: Budget & Timeline */}
                        {currentStep === 4 && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="space-y-6"
                            >
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">Budget & Timeline</h2>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Project Duration (Months) *
                                        </label>
                                        <input
                                            type="number"
                                            name="durationMonths"
                                            value={formData.durationMonths}
                                            onChange={handleInputChange}
                                            required
                                            min="1"
                                            max="60"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            placeholder="e.g., 12, 24, 36"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Budget Amount
                                        </label>
                                        <div className="flex gap-2">
                                            <select
                                                name="budgetCurrency"
                                                value={formData.budgetCurrency}
                                                onChange={handleInputChange}
                                                className="w-24 px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            >
                                                <option value="USD">USD</option>
                                                <option value="EUR">EUR</option>
                                                <option value="GBP">GBP</option>
                                                <option value="PKR">PKR</option>
                                            </select>
                                            <input
                                                type="number"
                                                name="budgetAmount"
                                                value={formData.budgetAmount}
                                                onChange={handleInputChange}
                                                min="0"
                                                step="0.01"
                                                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                                placeholder="Total budget amount"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-4">
                                        Project Timeline
                                    </label>
                                    <div className="space-y-4">
                                        {formData.timeline.map((phase, index) => (
                                            <div key={index} className="border border-gray-200 rounded-lg p-4">
                                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3">
                                                    <div>
                                                        <label className="block text-xs font-medium text-gray-600 mb-1">
                                                            Phase {index + 1}
                                                        </label>
                                                        <input
                                                            type="text"
                                                            value={phase.phase}
                                                            onChange={(e) => handleTimelineChange(index, 'phase', e.target.value)}
                                                            className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                                            placeholder="Phase name"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="block text-xs font-medium text-gray-600 mb-1">
                                                            Duration
                                                        </label>
                                                        <input
                                                            type="text"
                                                            value={phase.duration}
                                                            onChange={(e) => handleTimelineChange(index, 'duration', e.target.value)}
                                                            className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                                            placeholder="e.g., 3 months"
                                                        />
                                                    </div>
                                                    <div className="flex items-end gap-2">
                                                        {formData.timeline.length > 1 && (
                                                            <button
                                                                type="button"
                                                                onClick={() => removeTimelinePhase(index)}
                                                                className="px-3 py-2 bg-red-100 text-red-600 rounded hover:bg-red-200 transition-colors"
                                                            >
                                                                <FaTrash className="text-sm" />
                                                            </button>
                                                        )}
                                                    </div>
                                                </div>
                                                <div>
                                                    <label className="block text-xs font-medium text-gray-600 mb-1">
                                                        Key Tasks/Milestones
                                                    </label>
                                                    <textarea
                                                        value={phase.tasks}
                                                        onChange={(e) => handleTimelineChange(index, 'tasks', e.target.value)}
                                                        rows={2}
                                                        className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                                        placeholder="Describe key tasks and milestones for this phase"
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                        <button
                                            type="button"
                                            onClick={addTimelinePhase}
                                            className="flex items-center gap-2 px-4 py-2 text-blue-600 hover:text-blue-700 transition-colors"
                                        >
                                            <FaPlus className="text-sm" />
                                            Add Timeline Phase
                                        </button>
                                    </div>
                                </div>

                                <div className="flex justify-between pt-6">
                                    <div className="flex gap-2">
                                        <button
                                            type="button"
                                            onClick={() => setCurrentStep(3)}
                                            className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors flex items-center gap-2"
                                        >
                                            <FaArrowLeft className="text-sm" />
                                            Back
                                        </button>
                                        <button
                                            type="button"
                                            onClick={handleCancelClick}
                                            className="px-6 py-3 border border-red-300 text-red-700 rounded-lg font-semibold hover:bg-red-50 transition-colors flex items-center gap-2"
                                        >
                                            <FaTimes className="text-sm" />
                                            Cancel
                                        </button>
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {loading ? (
                                            <>
                                                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                                Submitting...
                                            </>
                                        ) : (
                                            <>
                                                Submit Proposal
                                                <FaCheck className="text-sm" />
                                            </>
                                        )}
                                    </button>
                                </div>
                            </motion.div>
                        )}
                    </form>
                </motion.div>
            </div>
        </div>
    );
};

export default ResearchProposalPage;