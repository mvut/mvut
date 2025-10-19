'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCheck, FaInfoCircle, FaShieldAlt, FaCertificate, FaGraduationCap, FaSearch, FaExclamationTriangle, FaTimes } from 'react-icons/fa';

// Define the interface for student data
interface StudentData {
    registration_number: string;
    candidate_name: string;
    father_mother_name: string;
    degree_certificate_title: string;
    date_issue: string;
    country: string;
}

// Confirmation Modal Component
const ConfirmationModal: React.FC<{
    isOpen: boolean;
    onConfirm: () => void;
    onCancel: () => void;
    cvn: string;
    loading: boolean;
}> = ({ isOpen, onConfirm, onCancel, cvn, loading }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-2xl shadow-xl max-w-md w-full"
            >
                <div className="p-6">
                    <div className="text-center mb-6">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <FaShieldAlt className="text-2xl text-blue-600" />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">
                            Confirm Verification
                        </h2>
                        <p className="text-gray-600">
                            Please confirm the Certificate Verification Number
                        </p>
                    </div>

                    {/* CVN Display */}
                    <div className="bg-gray-50 rounded-xl p-4 mb-6">
                        <div className="text-center">
                            <p className="text-sm text-gray-600 mb-2">Certificate Verification Number</p>
                            <p className="text-xl font-mono font-bold text-blue-600 bg-white py-2 px-4 rounded-lg border-2 border-blue-200">
                                {cvn}
                            </p>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                        <button
                            onClick={onCancel}
                            disabled={loading}
                            className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                        >
                            <FaTimes />
                            Cancel
                        </button>
                        <button
                            onClick={onConfirm}
                            disabled={loading}
                            className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                            {loading ? (
                                <>
                                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                    Verifying...
                                </>
                            ) : (
                                <>
                                    <FaCheck />
                                    Confirm & Verify
                                </>
                            )}
                        </button>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default function DegreeVerify() {
    const [cvn, setCvn] = useState('');
    const [studentData, setStudentData] = useState<StudentData[]>([]);
    const [loading, setLoading] = useState(false);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [noResults, setNoResults] = useState(false);

    const handleSubmit = async (e: { preventDefault: () => void }) => {
        e.preventDefault();

        if (!cvn.trim()) {
            setError('Please enter a Certificate Verification Number');
            return;
        }

        setShowConfirmation(true);
    };

    const handleConfirmVerification = async () => {
        setLoading(true);
        setError(null);
        setNoResults(false);
        setStudentData([]);

        try {
            const response = await fetch(`/api/auth/verify?cvn=${encodeURIComponent(cvn)}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ cvn }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Verification failed');
            }

            if (data.length === 0) {
                setNoResults(true);
                setStudentData([]);
            } else {
                setStudentData(data);
                setNoResults(false);
            }
        } catch (error) {
            console.error('Error fetching verification data:', error);
            setError(error instanceof Error ? error.message : 'Failed to verify certificate. Please try again.');
            setNoResults(false);
            setStudentData([]);
        } finally {
            setLoading(false);
            setShowConfirmation(false);
        }
    };

    const handleCancelConfirmation = () => {
        setShowConfirmation(false);
    };

    const handleCvnChange = (value: string) => {
        setCvn(value);
        // Clear errors when user starts typing
        if (error) setError(null);
        if (noResults) setNoResults(false);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 py-16 text-white font-sans relative overflow-hidden">

            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Floating Certificates */}
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 0.1, y: 0 }}
                    transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                    className="absolute top-20 left-10"
                >
                    <FaCertificate className="text-blue-400 text-6xl rotate-12" />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 0.1, y: 0 }}
                    transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", delay: 1 }}
                    className="absolute top-40 right-20"
                >
                    <FaGraduationCap className="text-indigo-400 text-5xl -rotate-12" />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 0.08, x: 0 }}
                    transition={{ duration: 5, repeat: Infinity, repeatType: "reverse", delay: 2 }}
                    className="absolute bottom-32 left-20"
                >
                    <FaShieldAlt className="text-cyan-400 text-7xl rotate-45" />
                </motion.div>

                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

                {/* Animated Orbs */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full blur-3xl opacity-30"
                />
                <motion.div
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.4, 0.2, 0.4],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                    }}
                    className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-indigo-600 rounded-full blur-3xl opacity-20"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2
                    }}
                    className="absolute top-1/2 left-1/2 w-80 h-80 bg-cyan-500 rounded-full blur-3xl opacity-25"
                />
            </div>

            {/* Security Shield Background */}
            <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.05 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    className="w-96 h-96"
                >
                    <FaShieldAlt className="w-full h-full text-white" />
                </motion.div>
            </div>

            {/* Main Content */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
            >
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    {/* Security Badge */}
                    <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 0.8, type: "spring" }}
                        className="flex justify-center mb-6"
                    >
                        <div className="relative">
                            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center shadow-2xl shadow-blue-500/30">
                                <FaShieldAlt className="text-3xl text-white" />
                            </div>
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="absolute -inset-2 border-2 border-blue-400/30 rounded-2xl"
                            />
                        </div>
                    </motion.div>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-cyan-200 to-indigo-200 text-center mb-6 leading-tight">
                        Secure Degree Verification
                    </h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto text-center leading-relaxed mb-8"
                    >
                        Verify the authenticity of academic credentials with our blockchain-inspired secure verification system
                    </motion.p>

                    {/* Trust Indicators */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="flex flex-wrap justify-center gap-6 mt-8"
                    >
                        {[
                            { icon: FaShieldAlt, text: 'Military-Grade Security' },
                            { icon: FaCertificate, text: 'Instant Verification' },
                            { icon: FaCheck, text: '100% Accurate' }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.05 }}
                                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20"
                            >
                                <item.icon className="text-cyan-400 text-sm" />
                                <span className="text-sm text-gray-300 font-medium">{item.text}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Verification Form */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="flex justify-center"
                >
                    <div className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8 max-w-md w-full relative overflow-hidden">

                        {/* Form Glow Effect */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>

                        <div className="relative z-10">
                            <div className="text-center mb-8">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    transition={{ delay: 0.2, type: "spring" }}
                                    className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg"
                                >
                                    <FaSearch className="text-2xl text-white" />
                                </motion.div>
                                <h2 className="text-2xl font-bold text-white mb-2">Verify Certificate</h2>
                                <p className="text-gray-300 text-sm">Enter your Certificate Verification Number (CVN)</p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="cvn" className="block text-sm font-semibold text-cyan-300 mb-3">
                                        CERTIFICATE VERIFICATION NUMBER
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            id="cvn"
                                            placeholder="e.g., MVIT-2024-12345"
                                            value={cvn}
                                            onChange={(e) => handleCvnChange(e.target.value)}
                                            required
                                            className="w-full h-14 bg-black/30 backdrop-blur-sm border-2 border-cyan-500/30 rounded-xl focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none transition-all duration-300 px-4 pr-12 text-white placeholder-gray-400 text-lg font-medium"
                                            disabled={loading}
                                        />
                                        <FaCertificate className="absolute right-4 top-1/2 transform -translate-y-1/2 text-cyan-400/60 text-lg" />
                                    </div>
                                </div>

                                {/* Error Message */}
                                {error && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="bg-red-500/20 border border-red-500/30 rounded-lg p-4"
                                    >
                                        <div className="flex items-center gap-3">
                                            <FaExclamationTriangle className="text-red-400 flex-shrink-0" />
                                            <p className="text-red-200 text-sm">{error}</p>
                                        </div>
                                    </motion.div>
                                )}

                                <motion.button
                                    type="submit"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    disabled={loading || !cvn.trim()}
                                    className="w-full h-14 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold rounded-xl uppercase transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 flex items-center justify-center gap-3 group disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {loading ? (
                                        <>
                                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                            Verifying...
                                        </>
                                    ) : (
                                        <>
                                            <span>Verify Certificate</span>
                                            <motion.div
                                                animate={{ x: [0, 5, 0] }}
                                                transition={{ duration: 2, repeat: Infinity }}
                                            >
                                                <FaSearch className="text-sm" />
                                            </motion.div>
                                        </>
                                    )}
                                </motion.button>
                            </form>

                            {/* Security Note */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.8 }}
                                className="mt-6 p-4 bg-black/20 rounded-lg border border-cyan-500/20"
                            >
                                <div className="flex items-start gap-3">
                                    <FaInfoCircle className="text-cyan-400 mt-0.5 flex-shrink-0" />
                                    <p className="text-xs text-gray-400">
                                        Your verification request is encrypted and secure. We do not store any personal data during the verification process.
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>

                {/* No Results Message */}
                {noResults && (
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-8 bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-yellow-500/20 max-w-2xl mx-auto"
                    >
                        <div className="text-center">
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-400 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg"
                            >
                                <FaExclamationTriangle className="text-3xl text-white" />
                            </motion.div>
                            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300 mb-4">
                                No Certificate Found
                            </h3>
                            <p className="text-gray-300 mb-4">
                                No certificate was found matching the verification number: <span className="font-mono text-yellow-300">{cvn}</span>
                            </p>
                            <div className="bg-black/20 rounded-lg p-4 border border-yellow-500/30">
                                <p className="text-sm text-yellow-200">
                                    Please check the CVN and try again. If the problem persists, contact the institution directly.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                )}

                {/* Verification Results */}
                {studentData.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-8 bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/20 max-w-4xl mx-auto relative overflow-hidden"
                    >
                        {/* Success Glow */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl blur opacity-20"></div>

                        <div className="relative z-10">
                            <div className="text-center mb-8">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-400 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg"
                                >
                                    <FaCheck className="text-3xl text-white" />
                                </motion.div>
                                <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-300">
                                    Verification Successful
                                </h2>
                                <p className="text-gray-300 mt-2">Certificate details verified and authenticated</p>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                {studentData.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="space-y-4 p-6 bg-black/20 rounded-2xl border border-white/10"
                                    >
                                        {Object.entries(item).map(([key, value]) => (
                                            <div key={key} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                                                <label className="font-semibold text-gray-400 capitalize">
                                                    {key.replace(/_/g, ' ')}:
                                                </label>
                                                <p className="text-cyan-300 font-medium text-right">
                                                    {key === 'date_issue'
                                                        ? new Date(value).toISOString().split('T')[0]
                                                        : value
                                                    }
                                                </p>
                                            </div>
                                        ))}
                                        <div className="flex items-center justify-between pt-4 border-t border-white/10">
                                            <span className="font-semibold text-gray-400">Status:</span>
                                            <span className="flex items-center gap-2 text-green-400 font-bold">
                                                Verified <FaCheck className="text-green-400" />
                                            </span>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </motion.div>

            {/* Confirmation Modal */}
            <ConfirmationModal
                isOpen={showConfirmation}
                onConfirm={handleConfirmVerification}
                onCancel={handleCancelConfirmation}
                cvn={cvn}
                loading={loading}
            />
        </div>
    );
}