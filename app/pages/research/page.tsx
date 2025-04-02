'use client';
import React from 'react';
import { motion } from 'framer-motion';
import {
    FaRobot, FaDatabase, FaLock, FaMicrochip, FaRegLightbulb,
    FaBrain, FaCube, FaAward, FaTrophy, FaGlobe, FaUniversity,
    FaHandshake, FaChartLine, FaFlask, FaNetworkWired, FaUserGraduate,
    FaMicroscope, FaCode, FaProjectDiagram
} from 'react-icons/fa';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '600', '700'],
});

const ResearchPage = () => {
    const researchDomains = [
        {
            name: 'Artificial Intelligence',
            icon: <FaRobot className="text-red-500" size={20} />,
            description: 'Developing advanced AI systems for automation and decision-making',
            details: [
                'Natural Language Processing for regional languages',
                'Computer vision for agricultural applications',
                'Reinforcement learning for robotics',
                'Ethical AI frameworks'
            ],
            projects: '12 ongoing projects',
            lead: 'Dr. Abid Hussain'
        },
        {
            name: 'Cybersecurity',
            icon: <FaLock className="text-red-500" size={20} />,
            description: 'Next-gen encryption and threat detection systems',
            details: [
                'Blockchain-based security protocols',
                'IoT device protection',
                'Quantum-resistant cryptography',
                'Cyber threat intelligence'
            ],
            projects: '5 industry partnerships',
            lead: 'Dr. Babar Hussain'
        },
        {
            name: 'Quantum Computing',
            icon: <FaCube className="text-red-500" size={20} />,
            description: 'Pioneering quantum algorithms and hardware',
            details: [
                'Quantum machine learning',
                'Error correction techniques',
                'Quantum simulation for materials science',
                'Hybrid quantum-classical systems'
            ],
            projects: '3 patents pending',
            lead: 'Dr. Muhammad Arshad'
        },
        {
            name: 'Biotechnology',
            icon: <FaFlask className="text-red-500" size={20} />,
            description: 'Engineering biological systems for healthcare',
            details: [
                'CRISPR-based diagnostics',
                'Bioinformatics for personalized medicine',
                'Synthetic biology applications',
                'Nanomedicine delivery systems'
            ],
            projects: '8 clinical trials',
            lead: 'Dr. Aneela Abubakar'
        },
        {
            name: 'Data Science',
            icon: <FaChartLine className="text-red-500" size={20} />,
            description: 'Extracting insights from complex datasets',
            details: [
                'Predictive analytics for business',
                'Geospatial data analysis',
                'Time series forecasting',
                'Explainable AI models'
            ],
            projects: '20+ publications',
            lead: 'Dr. Muhammad Younas Alam'
        },
        {
            name: 'IoT Systems',
            icon: <FaNetworkWired className="text-red-500" size={20} />,
            description: 'Connecting smart devices for intelligent environments',
            details: [
                'Smart city infrastructure',
                'Industrial IoT monitoring',
                'Edge computing solutions',
                'LPWAN implementations'
            ],
            projects: '5 pilot deployments',
            lead: 'Eng. Muhammad Shaaban'
        }
    ];

    const researchFacilities = [
        {
            name: 'AI Research Lab',
            equipment: '20 high-performance workstations with GPU clusters',
            capabilities: 'Deep learning model training, computer vision prototyping'
        },
        {
            name: 'Quantum Computing Center',
            equipment: '5-qubit quantum processor, cryogenic systems',
            capabilities: 'Quantum algorithm development, materials simulation'
        },
        {
            name: 'Bioengineering Facility',
            equipment: 'CRISPR-Cas9 systems, DNA sequencers, bioreactors',
            capabilities: 'Genetic engineering, drug discovery research'
        },
        {
            name: 'Cybersecurity Range',
            equipment: 'Isolated network environment, penetration testing tools',
            capabilities: 'Vulnerability assessment, digital forensics'
        }
    ];

    const achievements = [
        {
            value: "150+",
            label: "Peer-reviewed publications",
            details: "Including 25 papers in top-tier journals (Nature, Science, IEEE)"
        },
        {
            value: "$100k+",
            label: "Research funding secured",
            details: "From NSF, DARPA, and industry partners in 2023 alone"
        },
        {
            value: "25",
            label: "Patents filed",
            details: "With 8 already granted in multiple jurisdictions"
        },
        {
            value: "50+",
            label: "Industry collaborations",
            details: "Including partnerships with Google, IBM, and local startups"
        }
    ];

    const awards = [
        {
            name: "2024 Global Innovation Award",
            description: "For revolutionary work in quantum computing applications to healthcare",
            organization: "International Technology Foundation"
        },
        {
            name: "Best Research Institution 2023",
            description: "Recognized for interdisciplinary research impact",
            organization: "Science & Technology Council"
        },
        {
            name: "5 IEEE Fellows",
            description: "Faculty honored for exceptional contributions to engineering",
            organization: "Institute of Electrical and Electronics Engineers"
        }
    ];

    const initiatives = [
        {
            title: "Quantum Research Center",
            description: "State-of-the-art facilities for quantum computing development and education",
            details: [
                "1000 sqm dedicated lab space",
                "Partnership with national quantum initiative",
                "Graduate fellowship program"
            ],
            status: "Phase 1 construction underway",
            timeline: "Completion Q2 2025"
        },
        {
            title: "AI for Social Good",
            description: "Applying AI to solve pressing societal challenges",
            details: [
                "Focus areas: healthcare, education, agriculture",
                "Community partnership program",
                "Annual hackathon and ideathon"
            ],
            status: "Accepting research proposals",
            timeline: "Ongoing"
        },
        {
            title: "Industry Alliance Program",
            description: "Strategic partnerships with technology leaders",
            details: [
                "Joint research projects",
                "Technology transfer office",
                "Executive education programs"
            ],
            status: "15 corporate partners joined",
            timeline: "Expanding in 2024"
        }
    ];

    return (
        <div className={`min-h-screen bg-gray-900 text-gray-100 ${poppins.className}`}>
            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-to-b from-red-900 to-gray-900">
                <div className="container mx-auto px-6 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold mb-6"
                    >
                        Research & Innovation
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-red-200 max-w-3xl mx-auto"
                    >
                        Pioneering discoveries that shape the future of technology through interdisciplinary collaboration
                    </motion.p>
                </div>
            </section>

            {/* Research Overview */}
            <section className="py-16 container mx-auto px-6">
                <div className="max-w-6xl mx-auto bg-gray-800 rounded-xl p-8 shadow-lg">
                    <h2 className="text-3xl font-bold mb-6">Research Excellence</h2>
                    <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                        At our institute, we're redefining boundaries through interdisciplinary research that addresses global challenges.
                        Our approach combines academic rigor with real-world impact, fostering innovation across multiple domains with
                        state-of-the-art facilities and strategic partnerships.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        {achievements.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-gray-700 p-6 rounded-lg"
                            >
                                <div className="text-3xl font-bold text-red-400 mb-2">{item.value}</div>
                                <h3 className="text-xl font-semibold mb-2">{item.label}</h3>
                                <p className="text-gray-300 text-sm">{item.details}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Research Domains */}
            <section className="py-16 bg-gray-800">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-12">Research Domains</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {researchDomains.map((domain, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -5 }}
                                className="bg-gray-700 rounded-lg p-6 border border-gray-600 shadow-md"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    {domain.icon}
                                    <h3 className="text-xl font-bold">{domain.name}</h3>
                                </div>
                                <p className="text-gray-300 mb-4">{domain.description}</p>

                                <div className="mb-4">
                                    <h4 className="font-semibold text-gray-200 mb-2">Research Focus:</h4>
                                    <ul className="space-y-2 text-sm text-gray-300">
                                        {domain.details.map((detail, i) => (
                                            <li key={i} className="flex items-start">
                                                <span className="text-red-400 mr-2">•</span>
                                                <span>{detail}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="text-sm space-y-2">
                                    <div className="text-red-400 font-medium">{domain.projects}</div>
                                    <div className="text-gray-400">Lead: {domain.lead}</div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Research Facilities */}
            <section className="py-16 container mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12">Research Facilities</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {researchFacilities.map((facility, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                                className="bg-gray-800 rounded-xl p-6 border border-gray-700"
                            >
                                <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                                    <FaMicroscope className="text-red-500" />
                                    {facility.name}
                                </h3>
                                <div className="mb-4">
                                    <h4 className="font-medium text-gray-300 mb-2">Equipment:</h4>
                                    <p className="text-gray-400">{facility.equipment}</p>
                                </div>
                                <div>
                                    <h4 className="font-medium text-gray-300 mb-2">Capabilities:</h4>
                                    <p className="text-gray-400">{facility.capabilities}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Awards & Recognition */}
            <section className="py-16 bg-gray-800">
                <div className="container mx-auto px-6">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl font-bold text-center mb-12">Awards & Recognition</h2>

                        <div className="bg-gray-700 rounded-xl p-8">
                            <div className="flex items-center gap-3 mb-8">
                                <FaTrophy className="text-red-500" size={24} />
                                <h3 className="text-2xl font-bold">Our Achievements</h3>
                            </div>

                            <div className="space-y-8">
                                {awards.map((award, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        className="border-b border-gray-600 pb-6 last:border-0"
                                    >
                                        <div className="flex items-start gap-4">
                                            <FaAward className="text-red-500 mt-1 flex-shrink-0" />
                                            <div>
                                                <h4 className="text-xl font-bold mb-1">{award.name}</h4>
                                                <p className="text-gray-300 mb-2">{award.description}</p>
                                                <div className="text-sm text-gray-400">
                                                    Awarded by: {award.organization}
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Future Initiatives */}
            <section className="py-16 container mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12">Future Initiatives</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {initiatives.map((initiative, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-gray-800 rounded-xl p-6 border border-gray-700 shadow-lg"
                            >
                                <h3 className="text-xl font-bold mb-4">{initiative.title}</h3>
                                <p className="text-gray-300 mb-4">{initiative.description}</p>

                                <div className="mb-4">
                                    <h4 className="font-medium text-gray-300 mb-2">Key Features:</h4>
                                    <ul className="space-y-2 text-sm text-gray-400">
                                        {initiative.details.map((detail, i) => (
                                            <li key={i} className="flex items-start">
                                                <span className="text-red-400 mr-2">•</span>
                                                <span>{detail}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="text-sm space-y-2">
                                    <div className="text-red-400 font-medium">Status: {initiative.status}</div>
                                    <div className="text-gray-400">Timeline: {initiative.timeline}</div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-red-900">
                <div className="container mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="max-w-3xl mx-auto"
                    >
                        <h2 className="text-3xl font-bold mb-6">Join Our Research Community</h2>
                        <p className="text-xl text-red-200 mb-8">
                            Collaborate with leading researchers and access cutting-edge facilities
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-white text-red-900 font-semibold py-3 px-8 rounded-lg shadow-lg"
                            >
                                Explore Research Opportunities
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-lg"
                            >
                                Partner With Us
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default ResearchPage;