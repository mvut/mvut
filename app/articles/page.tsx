'use client';
import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaStar, FaQuoteLeft, FaQuoteRight, FaAward, FaCalendarAlt, FaChalkboardTeacher, FaBook } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Montserrat } from 'next/font/google';

// Load Google Font
const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400', '600', '700'],
});

// Animation Variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.3, delayChildren: 0.3 },
    },
};

const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8 } },
};

// Articles Data
const articles = [
    {
        title: 'AI for Humanity',
        author: 'Dr. Arshad Iqbal',
        email: 'arshad.iqbal@example.com',
        rating: 4.8,
        date: '2023-09-15',
        category: 'Most Popular',
        links: {
            linkedin: 'https://linkedin.com/in/arshad-iqbal',
            github: 'https://github.com/arshad-iqbal',
            twitter: 'https://twitter.com/arshad_iqbal',
        },
    },
    {
        title: 'Implementing AI in Education',
        author: 'Dr. Abbas Muhammad',
        email: 'abbas.muhammad@example.com',
        rating: 4.7,
        date: '2023-09-20',
        category: 'New',
        links: {
            linkedin: 'https://linkedin.com/in/abbas-muhammad',
            github: 'https://github.com/abbas-muhammad',
            twitter: 'https://twitter.com/abbas_muhammad',
        },
    },
    {
        title: 'AI for Peace and Conflict Resolution',
        author: 'Dr. Abid Hussain',
        email: 'abid.hussain@example.com',
        rating: 4.9,
        date: '2023-08-10',
        category: 'Trending',
        links: {
            linkedin: 'https://linkedin.com/in/abid-hussain',
            github: 'https://github.com/abid-hussain',
            twitter: 'https://twitter.com/abid_hussain',
        },
    },
];

// Testimonials Data
const testimonials = [
    {
        quote: "The research initiatives at MVIT are groundbreaking. Their focus on AI for humanity is truly commendable.",
        name: "Dr. John Doe",
        position: "Research Scientist",
    },
    {
        quote: "MVIT's commitment to advancing education through AI is inspiring. Their work has global implications.",
        name: "Dr. Jane Smith",
        position: "AI Ethics Expert",
    },
    {
        quote: "I am proud to collaborate with MVIT. Their dedication to peace and conflict resolution is unmatched.",
        name: "Dr. Alice Johnson",
        position: "Data Scientist",
    },
];

// Events Data
const events = [
    {
        title: "AI Workshop 2023",
        date: "2023-11-10",
        description: "Join us for a hands-on workshop on AI and machine learning.",
        icon: <FaChalkboardTeacher size={30} className="text-teal-500" />,
    },
    {
        title: "Data Science Webinar",
        date: "2023-12-05",
        description: "Learn about the latest trends in data science and analytics.",
        icon: <FaBook size={30} className="text-teal-500" />,
    },
    {
        title: "AI for Peace Conference",
        date: "2024-01-20",
        description: "A global conference on AI applications in peacebuilding.",
        icon: <FaCalendarAlt size={30} className="text-teal-500" />,
    },
];

export default function ResearchPage() {
    return (
        <div className={`flex flex-col py-20 bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700 min-h-screen ${montserrat.className}`}>
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-black opacity-30"></div>

            {/* Main Content */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative z-10 px-4 sm:px-8 lg:px-16"
            >
                {/* Mission Section */}
                <motion.div
                    variants={itemVariants}
                    className="text-center mb-16"
                >
                    <motion.h1
                        variants={itemVariants}
                        className="text-4xl sm:text-5xl font-bold text-white leading-tight"
                    >
                        Our Mission
                    </motion.h1>
                    <motion.p
                        variants={itemVariants}
                        className="text-lg sm:text-xl mt-4 text-gray-200 leading-relaxed max-w-3xl mx-auto"
                    >
                        To teach, implement AI for humanity, education, and peace, fostering innovation and excellence.
                    </motion.p>
                </motion.div>

                {/* Articles Section */}
                <motion.div
                    variants={containerVariants}
                    className="mt-16"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-8">
                        Research Articles
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {articles.map((article, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="flex flex-col items-center justify-center gap-4 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                            >
                                <h3 className="text-lg font-bold text-teal-900">{article.title}</h3>
                                <div className="text-center">
                                    <p className="text-sm text-gray-600">By: {article.author}</p>
                                    <p className="text-xs text-gray-500">Email: {article.email}</p>
                                    <p className="text-sm text-gray-700 mt-2">Category: {article.category}</p>
                                    <p className="text-sm text-gray-700 mt-2">Published: {article.date}</p>
                                    <div className="flex items-center gap-2 mt-2">
                                        <FaStar size={20} className="text-yellow-500" />
                                        <span className="text-sm text-gray-700">{article.rating}</span>
                                    </div>
                                    <div className="flex items-center justify-center gap-4 mt-4">
                                        <a
                                            href={article.links.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-teal-500 hover:text-teal-600 transition-all duration-300"
                                        >
                                            <FaLinkedin size={24} />
                                        </a>
                                        <a
                                            href={article.links.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-700 hover:text-gray-900 transition-all duration-300"
                                        >
                                            <FaGithub size={24} />
                                        </a>
                                        <a
                                            href={article.links.twitter}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-500 hover:text-blue-700 transition-all duration-300"
                                        >
                                            <FaTwitter size={24} />
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Tutorials Section */}
                <motion.div
                    variants={containerVariants}
                    className="mt-16"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-8">
                        Tutorials
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        <motion.div
                            variants={itemVariants}
                            className="flex flex-col items-center justify-center gap-4 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                        >
                            <h3 className="text-lg font-bold text-teal-900">Introduction to AI</h3>
                            <p className="text-sm text-gray-700">Learn the basics of artificial intelligence.</p>
                        </motion.div>
                        <motion.div
                            variants={itemVariants}
                            className="flex flex-col items-center justify-center gap-4 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                        >
                            <h3 className="text-lg font-bold text-teal-900">Machine Learning Basics</h3>
                            <p className="text-sm text-gray-700">Understand machine learning algorithms.</p>
                        </motion.div>
                        <motion.div
                            variants={itemVariants}
                            className="flex flex-col items-center justify-center gap-4 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                        >
                            <h3 className="text-lg font-bold text-teal-900">Deep Learning Fundamentals</h3>
                            <p className="text-sm text-gray-700">Master deep learning techniques.</p>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Courses Section */}
                <motion.div
                    variants={containerVariants}
                    className="mt-16"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-8">
                        Courses
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        <motion.div
                            variants={itemVariants}
                            className="flex flex-col items-center justify-center gap-4 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                        >
                            <h3 className="text-lg font-bold text-teal-900">AI for Beginners</h3>
                            <p className="text-sm text-gray-700">Start your journey into artificial intelligence.</p>
                        </motion.div>
                        <motion.div
                            variants={itemVariants}
                            className="flex flex-col items-center justify-center gap-4 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                        >
                            <h3 className="text-lg font-bold text-teal-900">Advanced Machine Learning</h3>
                            <p className="text-sm text-gray-700">Dive deeper into machine learning concepts.</p>
                        </motion.div>
                        <motion.div
                            variants={itemVariants}
                            className="flex flex-col items-center justify-center gap-4 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                        >
                            <h3 className="text-lg font-bold text-teal-900">Neural Networks & Deep Learning</h3>
                            <p className="text-sm text-gray-700">Explore neural networks and their applications.</p>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Testimonials Section */}
                <motion.div
                    variants={containerVariants}
                    className="mt-16"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-8">
                        What Experts Say
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300"
                            >
                                <FaQuoteLeft size={24} className="text-teal-500 mb-4" />
                                <p className="text-sm sm:text-base text-gray-700 italic">
                                    &quot;{testimonial.quote}&quot;
                                </p>
                                <FaQuoteRight size={24} className="text-teal-500 ml-auto mt-4" />
                                <p className="text-teal-500 font-bold mt-4">{testimonial.name}</p>
                                <p className="text-gray-600">{testimonial.position}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Upcoming Events Section */}
                <motion.div
                    variants={containerVariants}
                    className="mt-16 bg-white rounded-lg shadow-md p-8 text-center"
                >
                    <FaAward size={50} className="text-teal-500 mx-auto mb-6" />
                    <h2 className="text-2xl sm:text-3xl font-bold text-teal-500 mb-4">
                        Upcoming Events
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                        {events.map((event, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="flex flex-col items-center justify-center gap-4 p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                            >
                                {event.icon}
                                <h3 className="text-lg font-bold text-teal-900">{event.title}</h3>
                                <p className="text-sm text-gray-600">{event.date}</p>
                                <p className="text-sm text-gray-700 text-center">{event.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
}