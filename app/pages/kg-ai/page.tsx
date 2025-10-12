'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

type Feature = {
    title: string;
    desc: string;
    icon: string;
};

const features: Feature[] = [
    {
        title: 'Playful STEM Exploration',
        desc: 'Hands-on activities that teach science, technology, engineering, and math concepts through interactive play and discovery.',
        icon: '🔬'
    },
    {
        title: 'Creative Problem Solving',
        desc: 'Develop critical thinking skills by tackling age-appropriate challenges that encourage innovation and curiosity.',
        icon: '🎨'
    },
    {
        title: 'Early Entrepreneurial Skills',
        desc: 'Introduce business basics through simple projects: brainstorm ideas, create prototypes, and practice presentation skills.',
        icon: '💡'
    },
    {
        title: 'Balanced Learning Approach',
        desc: 'Carefully designed mix of digital activities and hands-on crafts to develop both technical and creative abilities.',
        icon: '⚖️'
    },
];

const programs = [
    {
        title: 'AI Agents Developer',
        duration: '1 year',
        price: '$490',
        description:
            'Develop, train, and deploy intelligent AI agents using real-world applications of neural networks, automation, and reinforcement learning.',
        features: [
            'Hands-on AI model building',
            'Agent training & testing projects',
            'Neural networks fundamentals',
            'Reinforcement learning basics',
        ],
        popular: false,
        icon: '🤖',
    },
    {
        title: 'K.G. STEM Entrepreneurs',
        duration: '2 years',
        price: '$910',
        description:
            'A creative and executive entrepreneurship program for kids combining AI, STEM, art, and innovation through projects and teamwork.',
        features: [
            'Design thinking for kids',
            'STEM-based creativity projects',
            'Mini startup and product showcase',
            'Collaboration & presentation skills',
        ],
        popular: true,
        icon: '🧩',
    },
    {
        title: 'Full-Stack AI Engineer',
        duration: '4 years',
        price: '$1750',
        description:
            'Learn production-ready workflows, APIs, and MLOps practices to ship reliable AI products.',
        features: [
            'End-to-end AI app development',
            'API design & model integration',
            'Data pipelines, feature engineering & preprocessing',
            'Deployment, monitoring, and MLOps workflows',
        ],
        popular: false,
        icon: '🧑‍💻',
    },
];

const benefits = [
    { stat: '30–45m', label: 'Optimal session length', icon: '⏱️' },
    { stat: '4–6 yrs', label: 'Age-appropriate', icon: '👧👦' },
    { stat: '1:6 Ratio', label: 'Small groups', icon: '👥' },
    { stat: 'Play-based', label: 'Guided play', icon: '🎯' }
];

const stats = [
    { number: '95%', text: 'Parent Satisfaction Rate' },
    { number: '500+', text: 'Young Learners Inspired' },
    { number: '12', text: 'Certified Instructors' },
    { number: '98%', text: 'Student Retention' }
];

export default function KGSTEMEntrepreneursPage(): JSX.Element {
    return (
        <div className="min-h-screen bg-white text-gray-900">
            {/* Static Hero Section */}
            <section className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700">
                {/* Animated Background Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-10 left-10 w-20 h-20 bg-white bg-opacity-10 rounded-full blur-xl"></div>
                    <div className="absolute top-1/3 right-20 w-32 h-32 bg-white bg-opacity-5 rounded-full blur-2xl"></div>
                    <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-white bg-opacity-10 rounded-full blur-xl"></div>
                    <div className="absolute bottom-1/3 right-10 w-16 h-16 bg-white bg-opacity-15 rounded-full blur-lg"></div>
                </div>

                {/* Content */}
                <div className="relative h-full flex items-center justify-center">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="max-w-4xl mx-auto"
                        >
                            {/* Icon */}
                            <motion.div
                                className="text-8xl mb-8"
                                animate={{
                                    scale: [1, 1.1, 1],
                                    rotate: [0, 5, -5, 0]
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    repeatType: "reverse"
                                }}
                            >
                                🤖
                            </motion.div>

                            {/* Title */}
                            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                                Ignite Young Minds with
                                <br />
                                <span className="text-yellow-300">
                                    Artificial Intelligence
                                </span>
                            </h1>

                            {/* Description */}
                            <p className="text-xl sm:text-2xl lg:text-3xl text-white text-opacity-90 mb-8 leading-relaxed max-w-3xl mx-auto">
                                A carefully designed program that blends foundational STEM concepts with creative entrepreneurial thinking for kindergarteners.
                            </p>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                                <Link
                                    href="/pages/study"
                                    className="bg-white text-gray-900 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl min-w-[200px] text-center"
                                >
                                    Explore Programs
                                </Link>
                                <Link
                                    href="/pages/apply"
                                    className="border-2 border-white text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white hover:bg-opacity-10 transition-all transform hover:scale-105 min-w-[200px] text-center"
                                >
                                    Online Application
                                </Link>
                            </div>

                            {/* Benefits */}
                            <motion.div
                                initial={{ y: 30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                                className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto"
                            >
                                {benefits.map((benefit, index) => (
                                    <motion.div
                                        key={index}
                                        whileHover={{ scale: 1.05 }}
                                        className="bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl p-4 border border-white border-opacity-30"
                                    >
                                        <div className="text-2xl mb-2">{benefit.icon}</div>
                                        <div className="text-white font-bold text-sm mb-1">{benefit.stat}</div>
                                        <div className="text-white text-opacity-80 text-xs">{benefit.label}</div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ y: 30, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="text-center"
                            >
                                <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                                <div className="text-gray-600 font-medium">{stat.text}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Programs Section */}
            <section id="programs" className="py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold mb-4 text-gray-900">Our Learning Programs</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Choose from our engaging programs, each designed to develop specific skills
                            while maintaining the fun and excitement of discovery.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {programs.map((program, index) => (
                            <motion.div
                                key={index}
                                initial={{ y: 30, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`relative bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-xl border-2 transition-all hover:shadow-2xl hover:scale-105 ${
                                    program.popular ? 'border-blue-500 border-2' : 'border-gray-200'
                                }`}
                            >
                                {program.popular && (
                                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                        <span className="bg-blue-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                                            Most Popular
                                        </span>
                                    </div>
                                )}

                                <div className="text-center mb-6">
                                    <div className="text-4xl mb-4">{program.icon}</div>
                                    <h3 className="text-2xl font-bold mb-3 text-gray-900">{program.title}</h3>
                                    <div className="flex justify-center items-center gap-4 mb-4">
                                        <span className="text-gray-500">{program.duration}</span>
                                        <span className="text-3xl font-bold text-blue-600">{program.price}</span>
                                    </div>
                                    <p className="text-gray-600 text-lg">{program.description}</p>
                                </div>

                                <ul className="space-y-4 mb-8">
                                    {program.features.map((feature, featureIndex) => (
                                        <li key={featureIndex} className="flex items-center text-gray-700">
                                            <span className="w-2 h-2 bg-green-500 rounded-full mr-4"></span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <div className="text-center">
                                    <Link
                                        href="/pages/apply"
                                        className={`w-full block py-4 rounded-2xl font-bold text-lg transition-colors ${
                                            program.popular
                                                ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg'
                                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                        }`}
                                    >
                                        {program.popular ? 'Join Now' : 'Get Started'}
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="how" className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold mb-4 text-gray-900">Our Learning Approach</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            We&apos;ve designed every aspect of our program to nurture young minds while making
                            learning an exciting adventure.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ x: index % 2 === 0 ? -30 : 30, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all"
                            >
                                <div className="flex items-start gap-6">
                                    <div className="text-4xl">{feature.icon}</div>
                                    <div>
                                        <h3 className="text-2xl font-bold mb-4 text-gray-900">{feature.title}</h3>
                                        <p className="text-lg text-gray-600 leading-relaxed">{feature.desc}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section id="enroll" className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">Ready to Spark Creativity?</h2>
                        <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                            Join our next session and watch your child discover the joy of learning through
                            hands-on STEM activities and creative projects.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
                            <Link
                                href="/pages/apply"
                                className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl min-w-[200px] text-center"
                            >
                                Enroll Now
                            </Link>
                            <Link
                                href="/pages/study/fee"
                                className="border-2 border-white text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white hover:bg-opacity-10 transition-all transform hover:scale-105 min-w-[200px] text-center"
                            >
                                View Tariff
                            </Link>
                        </div>
                        <p className="text-blue-100 text-lg">
                            Limited spots available • Age-appropriate groups • Certified instructors
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="text-4xl font-bold mb-4">K.G. STEM Entrepreneurs</div>
                    <p className="text-xl text-gray-400 mb-6 max-w-2xl mx-auto">
                        Igniting curiosity in young minds through STEM, AI and Creativity
                    </p>
                </div>
            </footer>
        </div>
    );
}