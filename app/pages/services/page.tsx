'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown, FaChevronUp, FaBrain, FaRobot, FaCog, FaChartLine } from 'react-icons/fa';
import type { IconType } from 'react-icons';
import Link from "next/link";

// Types
interface Service {
    id: string;
    title: string;
    category: string;
    description: string;
    features: string[];
    deliverables: string[];
}

interface Solution {
    icon: IconType;
    title: string;
    description: string;
    benefits: string[];
}

interface Testimonial {
    name: string;
    role: string;
    quote: string;
    company: string;
}

interface FAQ {
    question: string;
    answer: string;
}

// Data
const SERVICES: Service[] = [
    {
        id: 'custom-ai',
        title: 'Custom AI Solutions Development',
        category: 'Enterprise AI',
        description: 'Tailored AI systems designed to solve your specific business challenges. We build intelligent solutions that integrate seamlessly with your existing workflows.',
        features: [
            'Custom machine learning models',
            'Real-time data processing',
            'Scalable AI architecture',
            'Continuous model optimization'
        ],
        deliverables: ['AI Strategy Document', 'Custom Model Deployment', 'Integration API', 'Performance Dashboard']
    },
    {
        id: 'agentic-ai',
        title: 'Agentic AI Systems',
        category: 'Advanced AI',
        description: 'Autonomous AI agents that can reason, plan, and execute complex tasks. Transform your operations with intelligent automation.',
        features: [
            'Multi-agent orchestration',
            'Tool-calling capabilities',
            'Memory and context management',
            'Safety guardrails'
        ],
        deliverables: ['Agent Framework', 'Workflow Automation', 'Monitoring System', 'Training Documentation']
    },
    {
        id: 'ai-integration',
        title: 'AI Integration & Consulting',
        category: 'Professional Services',
        description: 'Seamlessly integrate cutting-edge AI capabilities into your existing systems with our expert consulting services.',
        features: [
            'System architecture design',
            'API integration',
            'Legacy system modernization',
            'Team training & support'
        ],
        deliverables: ['Integration Plan', 'Custom API Suite', 'Training Program', 'Support Package']
    }
];

const SOLUTIONS: Solution[] = [
    {
        icon: FaRobot,
        title: 'Intelligent Automation',
        description: 'Streamline operations with AI-powered automation that learns and adapts to your business needs.',
        benefits: ['Reduce operational costs', 'Increase efficiency', 'Minimize human error', 'Scale effortlessly']
    },
    {
        icon: FaBrain,
        title: 'Predictive Analytics',
        description: 'Turn your data into actionable insights with advanced machine learning and forecasting models.',
        benefits: ['Data-driven decisions', 'Market trend analysis', 'Risk assessment', 'Opportunity identification']
    },
    {
        icon: FaCog,
        title: 'Process Optimization',
        description: 'Optimize your business processes with AI that continuously learns and improves over time.',
        benefits: ['Continuous improvement', 'Quality enhancement', 'Resource optimization', 'Performance tracking']
    },
    {
        icon: FaChartLine,
        title: 'AI Strategy',
        description: 'Develop a comprehensive AI roadmap aligned with your business objectives and growth targets.',
        benefits: ['Competitive advantage', 'Future-proof planning', 'ROI optimization', 'Strategic alignment']
    }
];

const FAQS: FAQ[] = [
    {
        question: 'How long does it take to implement a custom AI solution?',
        answer: 'Implementation timelines vary based on complexity, ranging from 4 weeks for standard solutions to 6+ months for enterprise-scale deployments. We provide detailed project timelines during our initial consultation.'
    },
    {
        question: 'Do you provide ongoing support and maintenance?',
        answer: 'Yes, we offer comprehensive support packages including model monitoring, performance optimization, and regular updates to ensure your AI systems continue to deliver value.'
    },
    {
        question: 'Can you work with our existing technology stack?',
        answer: 'Absolutely. We specialize in integrating AI solutions with diverse technology stacks and can work with your current systems to ensure seamless implementation.'
    }
];

export default function AIAgencyLanding() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    return (
        <div className="min-h-screen bg-white text-gray-900">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
                        >
                            Transform Your Business with <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">AI Solutions</span>
                        </motion.h1>
                        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                            We build custom AI systems that drive innovation, automate complex processes, and deliver measurable business results.
                        </p>
                    </div>
                </div>
            </section>

            {/* Results Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Delivering Measurable Business Impact
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Our AI solutions are designed to drive tangible results and create competitive advantages for your business.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                        {[
                            { number: '40%', label: 'COST REDUCTION', icon: FaChartLine },
                            { number: '3x', label: 'PROCESS SPEED', icon: FaCog },
                            { number: '89%', label: 'ACCURACY RATE', icon: FaBrain },
                            { number: '24/7', label: 'AUTOMATION', icon: FaRobot }
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100"
                            >
                                <stat.icon className="text-3xl text-blue-600 mx-auto mb-4" />
                                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Approach */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                        {/* Process Column */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="sticky top-8">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">Our AI Development Framework</h3>
                                </div>

                                <p className="text-gray-600 leading-relaxed text-lg mb-8">
                                    A systematic approach to AI implementation that ensures scalability, reliability, and measurable business impact at every stage.
                                </p>

                                {/* Process Steps */}
                                <div className="space-y-6">
                                    {[
                                        { step: "01", title: "Discovery & Strategy", desc: "Comprehensive business analysis and AI opportunity assessment" },
                                        { step: "02", title: "Data Engineering", desc: "Data pipeline development and quality assurance" },
                                        { step: "03", title: "Model Development", desc: "Iterative prototyping and validation cycles" },
                                        { step: "04", title: "Deployment & Integration", desc: "Production deployment with CI/CD pipelines" },
                                        { step: "05", title: "Optimization & Scaling", desc: "Performance monitoring and continuous improvement" }
                                    ].map((item, index) => (
                                        <div key={item.step} className="flex gap-4 group cursor-pointer">
                                            <div className="flex flex-col items-center">
                                                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                                    <span className="text-white font-semibold text-sm">{item.step}</span>
                                                </div>
                                                {index < 4 && (
                                                    <div className="w-0.5 h-8 bg-gradient-to-b from-blue-200 to-purple-200 mt-2" />
                                                )}
                                            </div>
                                            <div className="flex-1 pb-6">
                                                <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                                                    {item.title}
                                                </h4>
                                                <p className="text-gray-600 text-sm leading-relaxed">
                                                    {item.desc}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* Value Proposition Column */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 rounded-2xl p-8 lg:p-10 text-white relative overflow-hidden">
                                <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
                                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full -translate-y-16 translate-x-16" />
                                <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-500/10 rounded-full -translate-x-12 translate-y-12" />

                                <div className="relative z-10">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-12 h-12 bg-white/10 rounded-xl backdrop-blur-sm flex items-center justify-center">
                                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                            </svg>
                                        </div>
                                        <h3 className="text-2xl lg:text-3xl font-bold">Enterprise AI Excellence</h3>
                                    </div>

                                    <div className="mb-6">
                                        <h4 className="text-xl font-semibold mb-4 bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
                                            Strategic AI Partnership
                                        </h4>
                                        <p className="text-gray-200 leading-relaxed text-lg mb-4">
                                            We bridge the gap between cutting-edge AI technology and tangible business outcomes, delivering solutions that drive competitive advantage and sustainable growth.
                                        </p>
                                    </div>

                                    {/* Value Points */}
                                    <div className="space-y-4 mb-8">
                                        {[
                                            "Proven track record with Fortune 500 companies",
                                            "End-to-end AI implementation expertise",
                                            "Scalable, production-ready solutions",
                                            "Measurable ROI and business impact",
                                            "Ongoing optimization and support"
                                        ].map((point, index) => (
                                            <div key={index} className="flex items-center gap-3">
                                                <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0" />
                                                <span className="text-gray-200 text-sm">{point}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Stats */}
                                    <div className="grid grid-cols-2 gap-4 p-6 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10 mb-6">
                                        <div className="text-center">
                                            <div className="text-2xl font-bold text-white mb-1">40%</div>
                                            <div className="text-xs text-gray-300">Avg. Efficiency Gain</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-2xl font-bold text-white mb-1">12-16</div>
                                            <div className="text-xs text-gray-300">Weeks to MVP</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-2xl font-bold text-white mb-1">98%</div>
                                            <div className="text-xs text-gray-300">Project Success Rate</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-2xl font-bold text-white mb-1">3.2x</div>
                                            <div className="text-xs text-gray-300">Avg. ROI</div>
                                        </div>
                                    </div>

                                    <Link href={'/pages/aidevframework'} className="group inline-flex items-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 hover:shadow-lg w-full justify-center">
                                        Explore Our AI Methodology
                                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Solutions Grid */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {SOLUTIONS.map((solution, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100"
                            >
                                <solution.icon className="text-3xl text-blue-600 mb-4" />
                                <h3 className="font-semibold text-gray-900 mb-2">{solution.title}</h3>
                                <p className="text-gray-600 text-sm mb-4">{solution.description}</p>
                                <ul className="space-y-2">
                                    {solution.benefits.map((benefit, idx) => (
                                        <li key={idx} className="text-sm text-gray-600 flex items-center">
                                            <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                                            {benefit}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Comprehensive AI Services
                        </h2>
                    </div>

                    <div className="space-y-8">
                        {SERVICES.map((service, index) => (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow"
                            >
                                <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                                    <div className="flex-shrink-0">
                                        <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white">
                                            <FaBrain className="text-2xl" />
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                                            <div>
                                                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-2">
                                                    {service.category}
                                                </span>
                                                <h3 className="text-2xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                                                <p className="text-gray-600 leading-relaxed text-lg mb-4">{service.description}</p>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <h4 className="font-semibold text-gray-900 mb-3">Key Features</h4>
                                                <ul className="space-y-2">
                                                    {service.features.map((feature, featureIndex) => (
                                                        <li key={featureIndex} className="text-gray-600 flex items-center">
                                                            <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                                                            {feature}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-900 mb-3">Deliverables</h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {service.deliverables.map((deliverable, delIndex) => (
                                                        <span key={delIndex} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                                                            {deliverable}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Frequently Asked Questions
                        </h2>
                    </div>

                    <div className="max-w-3xl mx-auto space-y-4">
                        {FAQS.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="border border-gray-200 rounded-2xl overflow-hidden"
                            >
                                <button
                                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                                >
                                    <span className="font-semibold text-gray-900">{faq.question}</span>
                                    {openFaq === index ? <FaChevronUp className="text-gray-400" /> : <FaChevronDown className="text-gray-400" />}
                                </button>
                                {openFaq === index && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        className="px-6 py-4 bg-gray-50 border-t border-gray-200"
                                    >
                                        <p className="text-gray-600">{faq.answer}</p>
                                    </motion.div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Ready to Transform Your Business with AI?
                    </h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                        Schedule a free consultation with our AI experts to discover how our solutions can drive growth and innovation for your organization.
                    </p>
                    <Link href={'/pages/bookfreeconsultation'} className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
                        Book Free Consultation
                    </Link>
                </div>
            </section>
        </div>
    );
}