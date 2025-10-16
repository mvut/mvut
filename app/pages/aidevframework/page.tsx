'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBrain, FaRobot, FaCog, FaChartLine, FaCode, FaDatabase, FaRocket, FaSync, FaShieldAlt, FaUsers, FaLightbulb, FaClock } from 'react-icons/fa';
import Link from "next/link";

const FrameworkPage = () => {
    const [activePhase, setActivePhase] = useState(0);

    const frameworkPhases = [
        {
            id: 1,
            title: "Discovery & Strategy",
            icon: FaLightbulb,
            description: "Comprehensive business analysis and AI opportunity assessment to define clear objectives and success metrics.",
            duration: "1-2 weeks",
            deliverables: [
                "Business Requirements Document",
                "AI Opportunity Assessment",
                "Project Roadmap",
                "Success Metrics Framework",
                "Stakeholder Alignment"
            ],
            activities: [
                "Stakeholder interviews & workshops",
                "Business process analysis",
                "Data landscape assessment",
                "ROI analysis & business case",
                "Technical feasibility study"
            ],
            tools: ["Figma", "Miro", "Jira", "Confluence", "Google Analytics"]
        },
        {
            id: 2,
            title: "Data Engineering",
            icon: FaDatabase,
            description: "Robust data pipeline development and quality assurance to ensure reliable, clean data for model training.",
            duration: "2-4 weeks",
            deliverables: [
                "Data Pipeline Architecture",
                "Data Quality Reports",
                "ETL/ELT Processes",
                "Data Governance Framework",
                "Feature Store Setup"
            ],
            activities: [
                "Data collection & ingestion",
                "Data cleaning & preprocessing",
                "Feature engineering",
                "Data validation & testing",
                "Pipeline monitoring setup"
            ],
            tools: ["Apache Spark", "Airflow", "dbt", "Snowflake", "AWS Glue"]
        },
        {
            id: 3,
            title: "Model Development",
            icon: FaBrain,
            description: "Iterative prototyping, training, and validation cycles to develop high-performing AI models.",
            duration: "3-6 weeks",
            deliverables: [
                "Trained Model Artifacts",
                "Model Performance Reports",
                "Validation Results",
                "Model Documentation",
                "Hyperparameter Configurations"
            ],
            activities: [
                "Model architecture design",
                "Training & experimentation",
                "Hyperparameter tuning",
                "Cross-validation",
                "Model interpretability analysis"
            ],
            tools: ["TensorFlow", "PyTorch", "Scikit-learn", "MLflow", "Weights & Biases"]
        },
        {
            id: 4,
            title: "Deployment & Integration",
            icon: FaRocket,
            description: "Production deployment with CI/CD pipelines and seamless integration with existing systems.",
            duration: "2-3 weeks",
            deliverables: [
                "Production-Ready API",
                "CI/CD Pipeline",
                "Integration Documentation",
                "Monitoring Dashboard",
                "Deployment Playbook"
            ],
            activities: [
                "Containerization & orchestration",
                "API development",
                "System integration",
                "Load testing",
                "Security hardening"
            ],
            tools: ["Docker", "Kubernetes", "FastAPI", "GitHub Actions", "AWS/GCP/Azure"]
        },
        {
            id: 5,
            title: "Optimization & Scaling",
            icon: FaSync,
            description: "Continuous performance monitoring, optimization, and scaling to ensure long-term success.",
            duration: "Ongoing",
            deliverables: [
                "Performance Optimization Report",
                "Scaling Strategy",
                "Model Retraining Pipeline",
                "Cost Optimization Plan",
                "Growth Roadmap"
            ],
            activities: [
                "Performance monitoring",
                "Model retraining & updating",
                "Infrastructure optimization",
                "Cost analysis",
                "Capacity planning"
            ],
            tools: ["Prometheus", "Grafana", "AWS Auto Scaling", "Datadog", "Custom MLops"]
        }
    ];

    const principles = [
        {
            icon: FaShieldAlt,
            title: "Security First",
            description: "Enterprise-grade security protocols integrated at every layer of the AI stack."
        },
        {
            icon: FaUsers,
            title: "Human-Centered",
            description: "AI solutions designed to augment human capabilities and enhance user experiences."
        },
        {
            icon: FaChartLine,
            title: "Measurable Impact",
            description: "Clear KPIs and ROI tracking to demonstrate tangible business value."
        },
        {
            icon: FaCog,
            title: "Continuous Improvement",
            description: "Iterative refinement and learning systems that evolve with your business needs."
        }
    ];

    const caseStudies = [
        {
            company: "Global E-Commerce Platform",
            challenge: "30% cart abandonment rate due to poor recommendations",
            solution: "Custom AI recommendation engine",
            results: "45% increase in conversion rate, 60% reduction in abandonment"
        },
        {
            company: "Healthcare Provider Network",
            challenge: "Manual patient triage causing 48-hour response delays",
            solution: "AI-powered triage and routing system",
            results: "90% faster triage, 75% reduction in manual workload"
        },
        {
            company: "Financial Services Firm",
            challenge: "Fraud detection missing 25% of sophisticated attacks",
            solution: "Multi-layered AI fraud detection system",
            results: "94% detection accuracy, $2.3M annual savings"
        }
    ];

    const currentPhase = frameworkPhases[activePhase];
    const CurrentPhaseIcon = currentPhase.icon;

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
                            Our AI Development <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Framework</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-xl text-gray-300 mb-8 leading-relaxed"
                        >
                            A proven, systematic approach to AI implementation that ensures scalability,
                            reliability, and measurable business impact at every stage.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Framework Overview */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            The 5-Phase AI Development Lifecycle
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Each phase builds upon the previous, ensuring a solid foundation for AI success
                            while maintaining flexibility for iterative improvement.
                        </p>
                    </div>

                    {/* Phase Navigation */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {frameworkPhases.map((phase, index) => (
                            <button
                                key={phase.id}
                                onClick={() => setActivePhase(index)}
                                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                                    activePhase === index
                                        ? 'bg-blue-600 text-white shadow-lg'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                            >
                                Phase {phase.id}
                            </button>
                        ))}
                    </div>

                    {/* Active Phase Details */}
                    <motion.div
                        key={activePhase}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 lg:p-12 border border-blue-100"
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                            <div>
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white">
                                        <CurrentPhaseIcon className="text-2xl" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
                                            {currentPhase.title}
                                        </h3>
                                        <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                                            <FaClock className="text-blue-500" />
                                            <span>{currentPhase.duration}</span>
                                        </div>
                                    </div>
                                </div>

                                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                                    {currentPhase.description}
                                </p>

                                <div className="mb-6">
                                    <h4 className="font-semibold text-gray-900 mb-3">Key Activities</h4>
                                    <div className="space-y-2">
                                        {currentPhase.activities.map((activity, index) => (
                                            <div key={index} className="flex items-center gap-3">
                                                <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0" />
                                                <span className="text-gray-700">{activity}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-3">Tools & Technologies</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {currentPhase.tools.map((tool, index) => (
                                            <span
                                                key={index}
                                                className="px-3 py-1 bg-white text-gray-700 rounded-full text-sm border border-gray-200"
                                            >
                                                {tool}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h4 className="font-semibold text-gray-900 mb-4 text-lg">Deliverables</h4>
                                <div className="space-y-4">
                                    {currentPhase.deliverables.map((deliverable, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                                        >
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center text-green-600 flex-shrink-0">
                                                    <FaCode className="text-sm" />
                                                </div>
                                                <span className="text-gray-800 font-medium">{deliverable}</span>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Guiding Principles */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Our Guiding Principles
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            These core principles shape every AI solution we deliver, ensuring
                            ethical, effective, and sustainable outcomes.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {principles.map((principle, index) => {
                            const PrincipleIcon = principle.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center"
                                >
                                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white mx-auto mb-4">
                                        <PrincipleIcon className="text-2xl" />
                                    </div>
                                    <h3 className="font-semibold text-gray-900 mb-3">{principle.title}</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {principle.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Case Studies */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Proven Results Across Industries
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            See how our framework delivers tangible business impact for organizations worldwide.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {caseStudies.map((study, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-6 border border-gray-200"
                            >
                                <h3 className="font-bold text-gray-900 text-lg mb-3">{study.company}</h3>

                                <div className="mb-4">
                                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Challenge</h4>
                                    <p className="text-gray-600 text-sm">{study.challenge}</p>
                                </div>

                                <div className="mb-4">
                                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Solution</h4>
                                    <p className="text-gray-600 text-sm">{study.solution}</p>
                                </div>

                                <div>
                                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Results</h4>
                                    <p className="text-green-600 text-sm font-semibold">{study.results}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Visualization */}
            <section className="py-16 bg-gray-900 text-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            End-to-End AI Implementation
                        </h2>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                            From initial concept to scaled production, our framework ensures success at every step.
                        </p>
                    </div>

                    <div className="relative">
                        {/* Timeline */}
                        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-8">
                            {frameworkPhases.map((phase, index) => {
                                const PhaseIcon = phase.icon;
                                return (
                                    <motion.div
                                        key={phase.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex flex-col items-center text-center max-w-xs"
                                    >
                                        <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white mb-4 shadow-lg">
                                            <PhaseIcon className="text-2xl" />
                                        </div>
                                        <h3 className="font-bold text-lg mb-2">{phase.title}</h3>
                                        <p className="text-gray-300 text-sm mb-2">{phase.duration}</p>
                                        <p className="text-gray-400 text-xs">{phase.description}</p>
                                    </motion.div>
                                );
                            })}
                        </div>

                        {/* Connecting Line */}
                        <div className="hidden lg:block absolute top-10 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 -z-10" />
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Ready to Implement AI with Confidence?
                    </h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                        Let&apos;s discuss how our proven framework can accelerate your AI initiatives
                        and deliver measurable business results.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href={'/pages/bookfreeconsultation'} className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors">
                            Book Free Consultation
                        </Link>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default FrameworkPage;