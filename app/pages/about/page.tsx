'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaGraduationCap, FaRocket, FaUsers, FaAward, FaLightbulb, FaGlobe, FaChartLine, FaShieldAlt, FaHandshake } from 'react-icons/fa';
import Link from "next/link";

const AboutPage = () => {
    const stats = [
        { number: '2+', label: 'Enterprise Projects', icon: FaCode },
        { number: '1K+', label: 'Students Trained', icon: FaGraduationCap },
        { number: '15+', label: 'Industry Certifications', icon: FaAward },
        { number: '5+', label: 'Years of Excellence', icon: FaChartLine }
    ];

    const certifications = [
        {
            title: 'Mansha Certified Autonomous Systems and Cloud Engineer (MCASCE)',
            level: 'Professional',
            duration: '12 Months',
            focus: 'Full-stack development, Cloud Architecture, AI Systems',
            outcomes: ['Enterprise-ready developers', 'Cloud infrastructure expertise', 'AI integration skills']
        },
        {
            title: 'Certified K.G. STEM Entrepreneurs',
            level: 'Foundation',
            duration: '2 Years',
            focus: 'Early childhood STEM education, Creative thinking',
            outcomes: ['Foundation in computational thinking', 'Problem-solving skills', 'Early technology exposure']
        },
        {
            title: 'AI Professional Certification',
            level: 'Advanced',
            duration: '6 Months',
            focus: 'Machine Learning, Deep Learning, NLP',
            outcomes: ['AI model development', 'Data science proficiency', 'Real-world AI applications']
        }
    ];

    const services = [
        {
            icon: FaCode,
            title: 'Custom Software Development',
            description: 'Enterprise-grade applications built with cutting-edge technologies and scalable architectures.',
            features: ['Web & Mobile Applications', 'Cloud-native Solutions', 'API Development', 'System Integration']
        },
        {
            icon: FaRocket,
            title: 'AI & Machine Learning',
            description: 'Intelligent solutions that transform businesses through automation and data-driven insights.',
            features: ['Predictive Analytics', 'Computer Vision', 'Natural Language Processing', 'Automation Systems']
        },
        {
            icon: FaGraduationCap,
            title: 'Professional Certifications',
            description: 'Industry-recognized programs that bridge the gap between academia and real-world requirements.',
            features: ['Hands-on Projects', 'Industry Mentorship', 'Career Placement', 'Continuous Learning']
        }
    ];

    const values = [
        {
            icon: FaLightbulb,
            title: 'Innovation First',
            description: 'We constantly push boundaries in both software development and educational methodologies.'
        },
        {
            icon: FaUsers,
            title: 'Student-Centric',
            description: 'Our programs are designed around real career outcomes and industry requirements.'
        },
        {
            icon: FaShieldAlt,
            title: 'Quality Excellence',
            description: 'Enterprise-grade standards in both our software solutions and educational content.'
        },
        {
            icon: FaHandshake,
            title: 'Industry Partnership',
            description: 'Strong collaborations with tech companies ensure curriculum relevance and job placement.'
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 text-white overflow-hidden">
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
                            About <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">MVIT</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-xl text-gray-300 mb-8 leading-relaxed"
                        >
                            Bridging the gap between software development excellence and transformative education.
                            We empower the next generation of technology leaders through industry-aligned programs
                            and cutting-edge software solutions.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                                Where Industry Meets <span className="text-blue-600">Education</span>
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                MVIT represents a unique fusion of software development expertise and educational innovation.
                                We operate at the intersection of industry demands and academic excellence, creating a powerful
                                ecosystem for technology advancement and career development.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <FaCode className="text-blue-600 text-xl" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-2">Industry-Driven Development</h3>
                                        <p className="text-gray-600">
                                            Our software division delivers enterprise solutions while informing our curriculum
                                            with real-world challenges and emerging technologies.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <FaGraduationCap className="text-purple-600 text-xl" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-2">Career-Focused Education</h3>
                                        <p className="text-gray-600">
                                            Certification programs designed by industry experts to ensure graduates are
                                            job-ready with the most in-demand skills.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                                        <p className="text-blue-100 leading-relaxed">
                                            To democratize access to cutting-edge technology education while delivering
                                            innovative software solutions that solve real-world business challenges.
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                                        <p className="text-blue-100 leading-relaxed">
                                            Create a world where every aspiring technologist has the skills and opportunities
                                            to thrive in the digital economy, supported by practical industry experience.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {stats.map((stat, index) => {
                            const IconComponent = stat.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="text-center"
                                >
                                    <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-4">
                                        <IconComponent className="text-blue-600 text-2xl" />
                                    </div>
                                    <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                                    <div className="text-gray-600 font-medium">{stat.label}</div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Services & Programs */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Dual Focus: <span className="text-blue-600">Development & Education</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Our unique model combines software development services with industry-aligned education programs.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {services.map((service, index) => {
                            const IconComponent = service.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
                                >
                                    <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                                        <IconComponent className="text-blue-600 text-2xl" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                                    <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                                    <ul className="space-y-2">
                                        {service.features.map((feature, featureIndex) => (
                                            <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                                                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Certification Programs */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Industry-Recognized <span className="text-purple-600">Certifications</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Comprehensive programs designed to create job-ready technology professionals.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {certifications.map((cert, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                                        <FaAward className="text-purple-600 text-xl" />
                                    </div>
                                    <div>
                                        <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                                            {cert.level}
                                        </span>
                                        <div className="text-sm text-gray-500 mt-1">{cert.duration}</div>
                                    </div>
                                </div>

                                <h3 className="text-lg font-bold text-gray-900 mb-3">{cert.title}</h3>
                                <p className="text-gray-600 text-sm mb-4">{cert.focus}</p>

                                <h4 className="font-semibold text-gray-900 mb-2">Learning Outcomes:</h4>
                                <ul className="space-y-2">
                                    {cert.outcomes.map((outcome, outcomeIndex) => (
                                        <li key={outcomeIndex} className="flex items-center text-sm text-gray-600">
                                            <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                                            {outcome}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Our Core <span className="text-green-600">Values</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value, index) => {
                            const IconComponent = value.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="text-center p-6 bg-gradient-to-br from-white to-gray-50 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300"
                                >
                                    <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                        <IconComponent className="text-green-600 text-2xl" />
                                    </div>
                                    <h3 className="font-bold text-gray-900 mb-3">{value.title}</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Join the MVIT Ecosystem
                    </h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                        Whether you&apos;re looking for enterprise software solutions or seeking to advance your career
                        through our certification programs, we&apos;re here to support your journey.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href={'/pages/study'} className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors">
                            Programs
                        </Link>
                        <Link href={'/pages/services'} className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:bg-opacity-10 transition-colors">
                            Services
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;