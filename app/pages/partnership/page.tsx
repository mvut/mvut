'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { FaBuilding, FaHandshake, FaUsers, FaChartLine, FaLightbulb, FaNetworkWired } from 'react-icons/fa';
import { FiCheck, FiArrowRight } from 'react-icons/fi';
import Image from 'next/image';
import MVITLogo from '@/public/mvut_flame.png';
import ABSInternationalLogo from '@/public/resources/partners/absi.png';

type BenefitCardProps = {
    icon: React.ReactNode;
    title: string;
    description: string;
    features: string[];
};

type PartnershipModelProps = {
    title: string;
    level: string;
    description: string;
    benefits: string[];
    cta: string;
};

const CorporatePartnershipPage: React.FC = () => {
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: [0.25, 0.1, 0.25, 1]
            }
        }
    };

    const businessBenefits: BenefitCardProps[] = [
        {
            icon: <FaUsers className="text-3xl" />,
            title: "Talent Pipeline",
            description: "Direct access to pre-qualified, job-ready candidates",
            features: [
                "Early access to top graduates",
                "Customized recruitment events",
                "Pre-placement internship programs"
            ]
        },
        {
            icon: <FaLightbulb className="text-3xl" />,
            title: "Curriculum Influence",
            description: "Shape the skills of future employees",
            features: [
                "Advisory role in course development",
                "Specialized electives for your needs",
                "Technology stack alignment"
            ]
        },
        {
            icon: <FaNetworkWired className="text-3xl" />,
            title: "Research Collaboration",
            description: "Leverage academic expertise for innovation",
            features: [
                "Joint R&D projects",
                "Access to faculty expertise",
                "Student-led solution development"
            ]
        }
    ];

    const partnershipModels: PartnershipModelProps[] = [
        {
            title: "Strategic Partner",
            level: "Enterprise",
            description: "Deep integration with talent development programs",
            benefits: [
                "Dedicated recruitment pipeline",
                "Executive education programs",
                "Co-branded certifications",
                "Research priority access"
            ],
            cta: "Become a Strategic Partner"
        },
        {
            title: "Industry Affiliate",
            level: "Mid-Size",
            description: "Targeted engagement with emerging talent",
            benefits: [
                "Priority internship access",
                "Curriculum advisory role",
                "Campus recruitment events",
                "Technology workshops"
            ],
            cta: "Join as Affiliate"
        },
        {
            title: "Recruitment Partner",
            level: "All Sizes",
            description: "Access to skilled graduates",
            benefits: [
                "Campus placement drives",
                "Student project engagement",
                "Industry guest lectures",
                "Job postings portal"
            ],
            cta: "Register as Partner"
        }
    ];

    return (
        <div className="bg-gray-50">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-blue-900 to-gray-900 overflow-hidden">
                <div className="absolute inset-0 bg-[url('/pattern-dark.svg')] opacity-20" />
                <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            <span className="text-blue-400">Corporate</span> Partnership Program
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                            Build your future workforce through strategic collaboration with MVIT and ABS International
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Partnership Badge */}
            <section className="relative -mt-12 z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="bg-white rounded-xl shadow-xl p-8 flex flex-col md:flex-row items-center justify-between gap-8"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-6">
                            <div className="flex items-center gap-4">
                                <div className="w-16 h-16 relative">
                                    <Image src={MVITLogo} alt="MVIT Logo" fill className="object-contain" />
                                </div>
                                <span className="text-2xl text-gray-400">+</span>
                                <div className="w-16 h-16 relative">
                                    <Image src={ABSInternationalLogo} alt="ABS International Logo" fill className="object-contain" />
                                </div>
                            </div>
                            <div className="text-center md:text-left">
                                <h3 className="text-xl font-bold text-gray-900">Industry-Academia Alliance</h3>
                                <p className="text-gray-600">Bridging talent development with corporate needs since 2018</p>
                            </div>
                        </div>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition whitespace-nowrap">
                            Partner With Us
                        </button>
                    </motion.div>
                </div>
            </section>

            {/* Value Proposition */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Why <span className="text-blue-600">Partner</span> With Us?
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Our unique corporate-academic model delivers measurable workforce solutions
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {businessBenefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                className="bg-gray-50 rounded-xl p-8 border border-gray-200 hover:border-blue-300 transition"
                                variants={itemVariants}
                                whileHover={{
                                    y: -5,
                                    boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.1)"
                                }}
                            >
                                <div className="text-blue-600 mb-4">{benefit.icon}</div>
                                <h3 className="text-xl font-bold mb-3 text-gray-900">{benefit.title}</h3>
                                <p className="text-gray-600 mb-4">{benefit.description}</p>
                                <ul className="space-y-2">
                                    {benefit.features.map((feature, i) => (
                                        <li key={i} className="flex items-start">
                                            <FiCheck className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
                                            <span className="text-gray-700">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Partnership Models */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Partnership <span className="text-blue-600">Tiers</span>
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Flexible engagement models tailored to your organization&apos;s needs
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {partnershipModels.map((model, index) => (
                            <motion.div
                                key={index}
                                className={`rounded-xl shadow-md overflow-hidden ${index === 0 ? 'border-2 border-blue-500' : 'border border-gray-200'}`}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -5 }}
                            >
                                <div className={`p-6 ${index === 0 ? 'bg-blue-600 text-white' : 'bg-white'}`}>
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="text-2xl font-bold">{model.title}</h3>
                                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${index === 0 ? 'bg-blue-700 text-blue-100' : 'bg-gray-100 text-gray-800'}`}>
                      {model.level}
                    </span>
                                    </div>
                                    <p className={`${index === 0 ? 'text-blue-100' : 'text-gray-600'}`}>{model.description}</p>
                                </div>
                                <div className="p-6 bg-white">
                                    <ul className="space-y-3 mb-8">
                                        {model.benefits.map((benefit, i) => (
                                            <li key={i} className="flex items-start">
                                                <FiCheck className={`mt-1 mr-2 flex-shrink-0 ${index === 0 ? 'text-blue-600' : 'text-gray-500'}`} />
                                                <span className="text-gray-700">{benefit}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <button className={`w-full py-3 px-6 rounded-lg font-medium transition ${index === 0 ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-800'}`}>
                                        {model.cta}
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Success Metrics */}
            <section className="py-16 bg-gradient-to-r from-blue-700 to-blue-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Partnership <span className="text-blue-200">Impact</span>
                        </h2>
                        <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                            Measurable results from our corporate collaborations
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-2 md:grid-cols-4 gap-6"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {[
                            { value: "200+", label: "Corporate Partners" },
                            { value: "85%", label: "Retention Rate" },
                            { value: "40%", label: "Faster Ramp-Up Time" },
                            { value: "4.8/5", label: "Partner Satisfaction" }
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center"
                                variants={itemVariants}
                            >
                                <p className="text-4xl font-bold mb-2 text-blue-200">{stat.value}</p>
                                <p className="text-blue-100">{stat.label}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Partner Testimonials */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Trusted by <span className="text-blue-600">Industry</span> Leaders
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            What our corporate partners say about the collaboration
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                quote: "Our partnership cut recruitment costs by 30% while improving hire quality.",
                                name: "TechNova Solutions",
                                role: "Global IT Services",
                                icon: <FaNetworkWired className="text-blue-500" />
                            },
                            {
                                quote: "The customized training programs solved our specific skill gaps.",
                                name: "FinEdge Capital",
                                role: "Financial Services",
                                icon: <FaChartLine className="text-blue-500" />
                            },
                            {
                                quote: "We've hired 50+ MVIT graduates through this program - all top performers.",
                                name: "ManufactCorp",
                                role: "Industrial Manufacturing",
                                icon: <FaBuilding className="text-blue-500" />
                            }
                        ].map((testimonial, index) => (
                            <motion.div
                                key={index}
                                className="bg-gray-50 rounded-xl p-8"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="text-blue-500 text-3xl mb-4">{testimonial.icon}</div>
                                <blockquote className="text-gray-700 italic mb-6">
                                    &quot;{testimonial.quote}&quot;
                                </blockquote>
                                <div className="font-medium">
                                    <p className="text-gray-900">{testimonial.name}</p>
                                    <p className="text-gray-600">{testimonial.role}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gray-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12">
                        <motion.div
                            className="flex flex-col md:flex-row items-center justify-between gap-8"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                    Ready to <span className="text-blue-300">Transform</span> Your Workforce Strategy?
                                </h2>
                                <p className="text-xl text-blue-100 max-w-2xl">
                                    Connect with our corporate partnership team to explore collaboration opportunities
                                </p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <motion.button
                                    className="bg-white hover:bg-gray-100 text-blue-800 font-medium py-3 px-8 rounded-lg transition flex items-center gap-2"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Schedule Consultation <FiArrowRight />
                                </motion.button>
                                <motion.button
                                    className="bg-transparent hover:bg-white/10 text-white font-medium py-3 px-8 rounded-lg border border-white transition"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Download Brochure
                                </motion.button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CorporatePartnershipPage;