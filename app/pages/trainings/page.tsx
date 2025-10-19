'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    FaSchool,
    FaUniversity,
    FaBuilding,
    FaLaptopCode,
    FaUserGraduate,
    FaChalkboardTeacher,
    FaLightbulb,
    FaCalendarAlt,
    FaClock,
    FaUsers,
    FaLevelUpAlt,
    FaCertificate,
    FaArrowRight,
    FaStar,
    FaCheck,
    FaTimes,
    FaUser,
    FaEnvelope,
    FaPhone,
    FaBuilding as FaOrg,
    FaUsers as FaParticipants,
    FaFileAlt,
    FaRegSmile,
    FaRegCheckCircle
} from 'react-icons/fa';

interface TrainingCategory {
    id: string;
    title: string;
    description: string;
    icon: React.ReactNode;
    duration: string;
    level: string;
    price: string;
    features: string[];
}

interface BookingForm {
    name: string;
    email: string;
    phone: string;
    organization: string;
    trainingCategory: string;
    preferredDate: string;
    participants: number;
    message: string;
}

// Confirmation Modal Component
const ConfirmationModal: React.FC<{
    isOpen: boolean;
    onConfirm: () => void;
    onCancel: () => void;
    onEdit: () => void;
    bookingData: BookingForm;
    trainingCategory: TrainingCategory | undefined;
    loading: boolean;
}> = ({ isOpen, onConfirm, onCancel, onEdit, bookingData, trainingCategory, loading }) => {
    if (!isOpen) return null;

    const formatDate = (dateString: string) => {
        if (!dateString) return 'Not specified';
        return new Date(dateString).toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-2xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
                <div className="p-6">
                    {/* Header */}
                    <div className="text-center mb-6">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <FaCheck className="text-2xl text-green-600" />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">
                            Confirm Your Training Booking
                        </h2>
                        <p className="text-gray-600">
                            Please review your information before submitting
                        </p>
                    </div>

                    {/* Booking Summary */}
                    <div className="bg-gray-50 rounded-xl p-6 mb-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                            <FaFileAlt className="text-blue-600" />
                            Booking Summary
                        </h3>

                        <div className="space-y-4">
                            {/* Personal Information */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                        <FaUser className="text-blue-600 text-sm" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-600">Full Name</p>
                                        <p className="font-semibold text-gray-900">{bookingData.name}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                                        <FaEnvelope className="text-green-600 text-sm" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-600">Email</p>
                                        <p className="font-semibold text-gray-900">{bookingData.email}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                                        <FaPhone className="text-purple-600 text-sm" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-600">Phone</p>
                                        <p className="font-semibold text-gray-900">{bookingData.phone}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                                        <FaOrg className="text-orange-600 text-sm" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-600">Organization</p>
                                        <p className="font-semibold text-gray-900">
                                            {bookingData.organization || 'Not specified'}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Training Details */}
                            <div className="border-t pt-4">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                                        <FaCalendarAlt className="text-red-600 text-sm" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-600">Training Category</p>
                                        <p className="font-semibold text-gray-900">
                                            {trainingCategory?.title || bookingData.trainingCategory}
                                        </p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                                            <FaCalendarAlt className="text-indigo-600 text-sm" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-600">Preferred Start Date</p>
                                            <p className="font-semibold text-gray-900">
                                                {formatDate(bookingData.preferredDate)}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center">
                                            <FaParticipants className="text-teal-600 text-sm" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-600">Participants</p>
                                            <p className="font-semibold text-gray-900">
                                                {bookingData.participants} {bookingData.participants === 1 ? 'person' : 'people'}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Additional Requirements */}
                            {bookingData.message && (
                                <div className="border-t pt-4">
                                    <div className="flex items-start gap-3">
                                        <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                                            <FaFileAlt className="text-yellow-600 text-sm" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-600 mb-1">Additional Requirements</p>
                                            <p className="text-gray-700 text-sm leading-relaxed">
                                                {bookingData.message}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Next Steps Info */}
                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
                        <h4 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                            <FaCheck className="text-blue-600" />
                            What happens next?
                        </h4>
                        <ul className="text-sm text-blue-800 space-y-1">
                            <li>• We&apos;ll contact you within 24 hours to confirm details</li>
                            <li>• You&apos;ll receive a customized training proposal</li>
                            <li>• Schedule finalization and payment processing</li>
                            <li>• Get access to training materials and resources</li>
                        </ul>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3">
                        <button
                            onClick={onEdit}
                            disabled={loading}
                            className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                        >
                            <FaTimes />
                            Edit Details
                        </button>
                        <button
                            onClick={onCancel}
                            disabled={loading}
                            className="flex-1 px-6 py-3 border border-red-300 text-red-700 rounded-lg font-semibold hover:bg-red-50 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                        >
                            <FaTimes />
                            Cancel
                        </button>
                        <button
                            onClick={onConfirm}
                            disabled={loading}
                            className="flex-1 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                            {loading ? (
                                <>
                                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                    Processing...
                                </>
                            ) : (
                                <>
                                    <FaCheck />
                                    Confirm & Submit
                                </>
                            )}
                        </button>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

// Success Modal Component
const SuccessModal: React.FC<{
    isOpen: boolean;
    onClose: () => void;
    bookingData: BookingForm;
    trainingCategory: TrainingCategory | undefined;
}> = ({ isOpen, onClose, bookingData, trainingCategory }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-2xl shadow-xl max-w-md w-full"
            >
                <div className="p-8 text-center">
                    {/* Success Icon */}
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring" }}
                        className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
                    >
                        <FaRegCheckCircle className="text-4xl text-green-600" />
                    </motion.div>

                    {/* Success Message */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-2xl font-bold text-gray-900 mb-4"
                    >
                        Booking Confirmed!
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="space-y-3 mb-6"
                    >
                        <p className="text-gray-600">
                            Thank you <span className="font-semibold text-gray-900">{bookingData.name}</span>!
                        </p>
                        <p className="text-gray-600">
                            Your training session for <span className="font-semibold text-gray-900">{trainingCategory?.title}</span> has been successfully booked.
                        </p>
                    </motion.div>

                    {/* Next Steps */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="bg-blue-50 rounded-lg p-4 mb-6"
                    >
                        <h4 className="font-semibold text-blue-900 mb-2 flex items-center justify-center gap-2">
                            <FaRegSmile className="text-blue-600" />
                            What&apos;s Next?
                        </h4>
                        <ul className="text-sm text-blue-800 space-y-1 text-left">
                            <li className="flex items-center gap-2">
                                <FaCheck className="text-green-500 text-xs" />
                                Confirmation email sent to {bookingData.email}
                            </li>
                            <li className="flex items-center gap-2">
                                <FaCheck className="text-green-500 text-xs" />
                                Our team will contact you within 24 hours
                            </li>
                            <li className="flex items-center gap-2">
                                <FaCheck className="text-green-500 text-xs" />
                                Check your inbox for further instructions
                            </li>
                        </ul>
                    </motion.div>

                    {/* Booking Reference */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="bg-gray-100 rounded-lg p-3 mb-6"
                    >
                        <p className="text-sm text-gray-600">
                            Booking Reference: <span className="font-mono font-semibold text-gray-900">
                                TRN-{Date.now().toString().slice(-6)}
                            </span>
                        </p>
                    </motion.div>

                    {/* Close Button */}
                    <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                        onClick={onClose}
                        className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                    >
                        <FaCheck />
                        Got it, thank you!
                    </motion.button>
                </div>
            </motion.div>
        </div>
    );
};

const TrainingPage = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>('');
    const [showBookingForm, setShowBookingForm] = useState(false);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [bookingForm, setBookingForm] = useState<BookingForm>({
        name: '',
        email: '',
        phone: '',
        organization: '',
        trainingCategory: '',
        preferredDate: '',
        participants: 1,
        message: ''
    });
    const [loading, setLoading] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{ success: boolean; message: string } | null>(null);

    const trainingCategories: TrainingCategory[] = [
        {
            id: 'school',
            title: 'School Programs',
            description: 'Interactive STEM and technology education for school students to build foundational skills.',
            icon: <FaSchool className="text-2xl text-blue-600" />,
            duration: '4-8 weeks',
            level: 'Beginner',
            price: 'Custom',
            features: ['Programming Fundamentals', 'Robotics & AI Basics', 'Project-Based Learning']
        },
        {
            id: 'college',
            title: 'College Preparation',
            description: 'Advanced technical training and career development programs for college students.',
            icon: <FaUniversity className="text-2xl text-green-600" />,
            duration: '8-12 weeks',
            level: 'Intermediate',
            price: 'From $299',
            features: ['Full-Stack Development', 'Data Science', 'Interview Preparation']
        },
        {
            id: 'university',
            title: 'Research & Innovation',
            description: 'Research methodology, academic writing, and innovation programs for university communities.',
            icon: <FaUserGraduate className="text-2xl text-purple-600" />,
            duration: '12-16 weeks',
            level: 'Advanced',
            price: 'Custom',
            features: ['Research Methodology', 'Academic Writing', 'Grant Proposal Writing']
        },
        {
            id: 'corporate',
            title: 'Corporate Training',
            description: 'Customized training programs for organizations to upskill their workforce in emerging technologies.',
            icon: <FaBuilding className="text-2xl text-orange-600" />,
            duration: 'Flexible',
            level: 'All Levels',
            price: 'Enterprise',
            features: ['Digital Transformation', 'Team Skill Development', 'Custom Curriculum']
        },
        {
            id: 'software',
            title: 'Software Industry',
            description: 'Advanced technical training for software professionals and technology companies.',
            icon: <FaLaptopCode className="text-2xl text-red-600" />,
            duration: '2-6 weeks',
            level: 'Expert',
            price: 'From $499',
            features: ['AI/ML Engineering', 'DevOps & Cloud Native', 'Software Architecture']
        },
        {
            id: 'personal',
            title: 'Career Development',
            description: 'Individual coaching and training for career advancement in technology fields.',
            icon: <FaChalkboardTeacher className="text-2xl text-teal-600" />,
            duration: 'Flexible',
            level: 'All Levels',
            price: 'From $99',
            features: ['1-on-1 Mentoring', 'Career Counseling', 'Portfolio Development']
        },
        {
            id: 'leadership',
            title: 'Tech Leadership',
            description: 'Executive education for technology leaders and managers in digital organizations.',
            icon: <FaLevelUpAlt className="text-2xl text-indigo-600" />,
            duration: '6-10 weeks',
            level: 'Senior',
            price: 'From $1,999',
            features: ['Strategic Planning', 'Team Leadership', 'Innovation Culture']
        },
        {
            id: 'research',
            title: 'R&D Training',
            description: 'Specialized training in research methods, experimental design, and scientific innovation.',
            icon: <FaLightbulb className="text-2xl text-yellow-600" />,
            duration: '8-12 weeks',
            level: 'Advanced',
            price: 'Academic',
            features: ['Experimental Design', 'Data Analysis', 'Research Ethics']
        }
    ];

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setBookingForm(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleBookTraining = (categoryId: string) => {
        setSelectedCategory(categoryId);
        setBookingForm(prev => ({
            ...prev,
            trainingCategory: categoryId
        }));
        setShowBookingForm(true);
    };

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Validate required fields
        if (!bookingForm.name || !bookingForm.email || !bookingForm.phone || !bookingForm.trainingCategory || !bookingForm.preferredDate) {
            setSubmitStatus({
                success: false,
                message: 'Please fill in all required fields.'
            });
            return;
        }
        setShowConfirmation(true);
    };

    const handleConfirmBooking = async () => {
        setLoading(true);
        setSubmitStatus(null);

        try {
            const response = await fetch('/api/auth/book-training', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(bookingForm),
            });

            const result = await response.json();

            if (result.success) {
                // Show success modal instead of just closing
                setShowConfirmation(false);
                setShowSuccess(true);

                // Reset form
                setBookingForm({
                    name: '',
                    email: '',
                    phone: '',
                    organization: '',
                    trainingCategory: '',
                    preferredDate: '',
                    participants: 1,
                    message: ''
                });

                // Auto-close success modal after 5 seconds
                setTimeout(() => {
                    setShowSuccess(false);
                }, 5000);
            } else {
                setSubmitStatus({ success: false, message: result.message });
                setShowConfirmation(false);
            }
        } catch (error) {
            setSubmitStatus({
                success: false,
                message: 'Network error. Please try again.'
            });
            setShowConfirmation(false);
        } finally {
            setLoading(false);
        }
    };

    const handleEditDetails = () => {
        setShowConfirmation(false);
    };

    const handleCancelConfirmation = () => {
        setShowConfirmation(false);
    };

    const handleCloseSuccess = () => {
        setShowSuccess(false);
        setShowBookingForm(false);
    };

    const selectedTraining = trainingCategories.find(cat => cat.id === bookingForm.trainingCategory);

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
            {/* Header Section with Single Booking Button */}
            <section className="relative bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                        {/* Left Content */}
                        <div className="flex-1 text-center lg:text-left">
                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                            >
                                Professional Training Programs
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-lg md:text-xl text-blue-200 mb-8 max-w-2xl"
                            >
                                Transform your career or organization with comprehensive training solutions across education, corporate, and technology sectors.
                            </motion.p>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8"
                            >
                                <div className="flex items-center gap-2 bg-blue-800 bg-opacity-50 px-4 py-2 rounded-full">
                                    <FaUsers className="text-blue-300" />
                                    <span>10,000+ Trained</span>
                                </div>
                                <div className="flex items-center gap-2 bg-blue-800 bg-opacity-50 px-4 py-2 rounded-full">
                                    <FaCertificate className="text-green-300" />
                                    <span>Industry Certified</span>
                                </div>
                                <div className="flex items-center gap-2 bg-blue-800 bg-opacity-50 px-4 py-2 rounded-full">
                                    <FaStar className="text-yellow-300" />
                                    <span>4.9/5 Rating</span>
                                </div>
                            </motion.div>
                        </div>

                        {/* Right Content - Single Booking CTA */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3 }}
                            className="flex-1 max-w-md w-full"
                        >
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                                <div className="text-center mb-6">
                                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                                        <FaCalendarAlt className="text-2xl text-blue-600" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-2">Ready to Get Started?</h3>
                                    <p className="text-blue-200">
                                        Book your training session today and take the first step towards success
                                    </p>
                                </div>

                                {/* Single Booking Button */}
                                <button
                                    onClick={() => setShowBookingForm(true)}
                                    className="w-full bg-white text-blue-900 py-4 px-6 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 shadow-lg"
                                >
                                    <FaCalendarAlt />
                                    Book Training Session
                                    <FaArrowRight className="text-sm" />
                                </button>

                                <div className="mt-4 text-center">
                                    <p className="text-sm text-blue-200">
                                        Customized programs available for all needs
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Training Categories Grid */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Our Training Programs
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Discover our specialized training programs designed for different sectors and expertise levels
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {trainingCategories.map((category, index) => (
                            <motion.div
                                key={category.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 group"
                            >
                                <div className="p-6">
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="p-3 bg-gray-100 rounded-lg group-hover:bg-blue-50 transition-colors">
                                            {category.icon}
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-lg font-bold text-gray-900 mb-1">
                                                {category.title}
                                            </h3>
                                            <div className="flex items-center gap-2 mb-2">
                                                <span className="text-xs text-blue-600 font-medium bg-blue-50 px-2 py-1 rounded">
                                                    {category.level}
                                                </span>
                                                <span className="text-xs text-gray-500">{category.duration}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                                        {category.description}
                                    </p>

                                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                        <span className="font-semibold text-gray-900">
                                            {category.price}
                                        </span>
                                        <span className="text-xs text-gray-500">
                                            Starting from
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Why Choose Our Training?
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            We deliver exceptional training experiences with proven results
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                icon: <FaUserGraduate className="text-2xl text-blue-600" />,
                                title: 'Expert Instructors',
                                description: 'Learn from industry professionals with real-world experience and teaching expertise.'
                            },
                            {
                                icon: <FaLaptopCode className="text-2xl text-green-600" />,
                                title: 'Hands-on Learning',
                                description: 'Gain practical experience through real-world projects and case studies.'
                            },
                            {
                                icon: <FaCertificate className="text-2xl text-purple-600" />,
                                title: 'Industry Recognition',
                                description: 'Receive certificates recognized by leading companies and institutions.'
                            },
                            {
                                icon: <FaClock className="text-2xl text-orange-600" />,
                                title: 'Flexible Scheduling',
                                description: 'Choose from various schedules including weekend and evening batches.'
                            }
                        ].map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300"
                            >
                                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                                    {feature.icon}
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-3">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bottom CTA Section */}
            <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-3xl md:text-4xl font-bold mb-6"
                    >
                        Start Your Training Journey Today
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto"
                    >
                        Join thousands of professionals and organizations who have transformed their skills and careers with our training programs.
                    </motion.p>
                    <motion.button
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        onClick={() => setShowBookingForm(true)}
                        className="bg-white text-blue-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 flex items-center gap-3 mx-auto shadow-lg"
                    >
                        <FaCalendarAlt />
                        Book Your Training Now
                        <FaArrowRight className="text-sm" />
                    </motion.button>
                </div>
            </section>

            {/* Booking Modal */}
            {showBookingForm && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-white rounded-2xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                    >
                        <div className="p-6">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-2xl font-bold text-gray-900">
                                    Book Training Session
                                </h2>
                                <button
                                    onClick={() => setShowBookingForm(false)}
                                    className="text-gray-400 hover:text-gray-600 transition-colors"
                                    disabled={loading}
                                >
                                    <FaTimes className="text-xl" />
                                </button>
                            </div>

                            {submitStatus && (
                                <div className={`mb-6 p-4 rounded-lg ${
                                    submitStatus.success
                                        ? 'bg-green-50 border border-green-200 text-green-800'
                                        : 'bg-red-50 border border-red-200 text-red-800'
                                }`}>
                                    {submitStatus.message}
                                </div>
                            )}

                            <form onSubmit={handleFormSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={bookingForm.name}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                            placeholder="Enter your full name"
                                            disabled={loading}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={bookingForm.email}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                            placeholder="your.email@example.com"
                                            disabled={loading}
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Phone Number *
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={bookingForm.phone}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                            placeholder="+1 (555) 000-0000"
                                            disabled={loading}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Organization
                                        </label>
                                        <input
                                            type="text"
                                            name="organization"
                                            value={bookingForm.organization}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                            placeholder="Your company or institution"
                                            disabled={loading}
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Training Category *
                                        </label>
                                        <select
                                            name="trainingCategory"
                                            value={bookingForm.trainingCategory}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                            disabled={loading}
                                        >
                                            <option value="">Select category</option>
                                            {trainingCategories.map(category => (
                                                <option key={category.id} value={category.id}>
                                                    {category.title}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Number of Participants
                                        </label>
                                        <input
                                            type="number"
                                            name="participants"
                                            value={bookingForm.participants}
                                            onChange={handleInputChange}
                                            min="1"
                                            max="50"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                            disabled={loading}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Preferred Start Date *
                                    </label>
                                    <input
                                        type="date"
                                        name="preferredDate"
                                        value={bookingForm.preferredDate}
                                        onChange={handleInputChange}
                                        required
                                        min={new Date().toISOString().split('T')[0]}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                        disabled={loading}
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Additional Requirements
                                    </label>
                                    <textarea
                                        name="message"
                                        value={bookingForm.message}
                                        onChange={handleInputChange}
                                        rows={3}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                        placeholder="Tell us about your specific training needs, preferred schedule, or any special requirements..."
                                        disabled={loading}
                                    />
                                </div>

                                <div className="flex gap-4 pt-4">
                                    <button
                                        type="button"
                                        onClick={() => setShowBookingForm(false)}
                                        disabled={loading}
                                        className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors disabled:opacity-50"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                    >
                                        {loading ? (
                                            <>
                                                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                                Processing...
                                            </>
                                        ) : (
                                            <>
                                                <FaCheck />
                                                Review & Continue
                                            </>
                                        )}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </motion.div>
                </div>
            )}

            {/* Confirmation Modal */}
            <ConfirmationModal
                isOpen={showConfirmation}
                onConfirm={handleConfirmBooking}
                onCancel={handleCancelConfirmation}
                onEdit={handleEditDetails}
                bookingData={bookingForm}
                trainingCategory={selectedTraining}
                loading={loading}
            />

            {/* Success Modal */}
            <SuccessModal
                isOpen={showSuccess}
                onClose={handleCloseSuccess}
                bookingData={bookingForm}
                trainingCategory={selectedTraining}
            />
        </div>
    );
};

export default TrainingPage;