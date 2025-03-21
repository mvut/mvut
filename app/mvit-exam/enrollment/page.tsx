'use client'
import {useEffect, useRef, useState} from 'react';
import { FaUser, FaIdCard, FaBook, FaArrowLeft, FaCheck } from 'react-icons/fa';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useForm, SubmitHandler } from 'react-hook-form';

interface FormData {
    studentName: string;
    registrationId: string;
    course: string;
}

const EnrollNow = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState('');
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
    const controls = useAnimation();
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    const availableCourses = [
        'Web Development',
        'Data Science',
        'Machine Learning',
        'Mobile App Development',
        'Cloud Computing',
    ];

    const onSubmit: SubmitHandler<FormData> = async (data) => {
        setIsSubmitting(true);
        setSubmitMessage('');

        try {
            const response = await fetch('/api/enroll', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setSubmitMessage('Enrollment successful!');
            } else {
                setSubmitMessage('Enrollment failed. Please try again.');
            }
        } catch (error) {
            setSubmitMessage('An error occurred. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div
            className="min-h-screen flex items-center justify-center p-6"
            style={{
                background: 'linear-gradient(135deg, #f3f4f6, #e5e7eb)',
            }}
        >
            <motion.div
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={containerVariants}
                className="bg-white rounded-lg shadow-xl p-8 max-w-4xl w-full mx-auto relative overflow-hidden"
            >
                {/* Shining Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-30 animate-shine"></div>

                {/* Back Button */}
                <button
                    onClick={() => window.history.back()}
                    className="absolute top-4 left-4 flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition duration-300"
                >
                    <FaArrowLeft className="text-xl" />
                    <span>Back</span>
                </button>

                {/* Form Content */}
                <div className="relative z-10">
                    <h1 className="text-3xl font-bold text-center mb-8 text-gray-800 font-sans">
                        Enrollment for Quality Assurance Test (QAT)
                    </h1>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        {/* Student Name */}
                        <div className="flex flex-col space-y-2">
                            <label className="text-gray-700 font-medium flex items-center space-x-2">
                                <FaUser className="text-xl text-blue-500" />
                                <span>Student Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                {...register('studentName', { required: 'Student name is required' })}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            {errors.studentName && (
                                <p className="text-red-500 text-sm">{errors.studentName.message}</p>
                            )}
                        </div>

                        {/* Registration ID */}
                        <div className="flex flex-col space-y-2">
                            <label className="text-gray-700 font-medium flex items-center space-x-2">
                                <FaIdCard className="text-xl text-green-500" />
                                <span>Registration ID</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter your registration ID"
                                {...register('registrationId', { required: 'Registration ID is required' })}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                            {errors.registrationId && (
                                <p className="text-red-500 text-sm">{errors.registrationId.message}</p>
                            )}
                        </div>

                        {/* Courses Enrolled */}
                        <div className="flex flex-col space-y-2">
                            <label className="text-gray-700 font-medium flex items-center space-x-2">
                                <FaBook className="text-xl text-red-500" />
                                <span>Select a Course</span>
                            </label>
                            <select
                                {...register('course', { required: 'Course selection is required' })}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                            >
                                <option value="" disabled>
                                    Choose a course
                                </option>
                                {availableCourses.map((course, index) => (
                                    <option key={index} value={course}>
                                        {course}
                                    </option>
                                ))}
                            </select>
                            {errors.course && (
                                <p className="text-red-500 text-sm">{errors.course.message}</p>
                            )}
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300 disabled:bg-blue-400 flex items-center justify-center space-x-2"
                        >
                            <FaCheck className="text-xl" />
                            <span>{isSubmitting ? 'Submitting...' : 'Enroll Now'}</span>
                        </button>

                        {/* Submission Message */}
                        {submitMessage && (
                            <p className="text-center text-sm mt-4 text-gray-700">{submitMessage}</p>
                        )}
                    </form>
                </div>

                {/* Additional Information */}
                <div className="mt-8 text-center text-gray-600">
                    <p className="text-sm">
                        Need help? Contact us at{' '}
                        <a href="mvut.usa@gmail.com" className="text-blue-500 hover:underline">
                            mvut.usa@gmail.com
                        </a>
                    </p>
                    <p className="text-sm mt-2">
                        Explore our{' '}
                        <a href="/courses" className="text-blue-500 hover:underline">
                            course catalog
                        </a>{' '}
                        for more options.
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

export default EnrollNow;