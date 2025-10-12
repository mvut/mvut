'use client';
import React from 'react';
import { motion } from 'framer-motion';
import {
    FaRobot,
    FaGraduationCap,
    FaLaptopCode,
    FaBrain,
    FaUsers,
    FaLightbulb,
    FaChartLine,
    FaBook,
    FaHandshake,
    FaUniversity,
    FaAward,
    FaMicroscope,
    FaCode,
    FaProjectDiagram,
    FaSeedling
} from 'react-icons/fa';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '600', '700'],
});

const ResearchPage = () => {
    const researchFocusAreas = [
        {
            name: 'AI Education & Pedagogy',
            icon: <FaGraduationCap className="text-blue-500" size={24} />,
            description: 'Developing innovative teaching methods and curriculum for AI education',
            projects: [
                'Adaptive learning systems for STEM education',
                'AI-powered educational assistants',
                'Gamified learning platforms',
                'Curriculum development for K-12 AI literacy'
            ],
            outcomes: 'Enhanced learning outcomes through AI integration'
        },
        {
            name: 'AI Software Development',
            icon: <FaLaptopCode className="text-green-500" size={24} />,
            description: 'Building practical AI applications and development frameworks',
            projects: [
                'Low-code AI development platforms',
                'AI-powered code generation tools',
                'Intelligent debugging systems',
                'Automated software testing with AI'
            ],
            outcomes: 'Streamlined software development processes'
        },
        {
            name: 'STEM Education Technology',
            icon: <FaBrain className="text-purple-500" size={24} />,
            description: 'Creating interactive tools for science, technology, engineering, and math education',
            projects: [
                'Virtual science laboratories',
                'Interactive math learning apps',
                'Programming education platforms',
                'Robotics simulation environments'
            ],
            outcomes: 'Engaging STEM learning experiences'
        },
        {
            name: 'Educational Data Analytics',
            icon: <FaChartLine className="text-orange-500" size={24} />,
            description: 'Leveraging data to improve educational outcomes and personalize learning',
            projects: [
                'Learning analytics dashboards',
                'Predictive student performance models',
                'Personalized learning path recommendations',
                'Educational data visualization tools'
            ],
            outcomes: 'Data-driven educational insights'
        }
    ];

    const currentProjects = [
        {
            title: 'AI Teaching Assistant Platform',
            description: 'Developing an intelligent system to support educators in personalized teaching',
            status: 'Prototype Development',
            team: '3 researchers, 2 developers',
            timeline: '6 months',
            technologies: ['Python', 'React', 'TensorFlow', 'FastAPI']
        },
        {
            title: 'STEM Learning Game Suite',
            description: 'Creating interactive games to teach programming and computational thinking',
            status: 'Beta Testing',
            team: '4 researchers, 3 designers',
            timeline: '8 months',
            technologies: ['Unity', 'C#', 'Python', 'AWS']
        },
        {
            title: 'Code Learning Analytics',
            description: 'Analyzing student coding patterns to provide personalized feedback',
            status: 'Research Phase',
            team: '2 researchers, 1 data scientist',
            timeline: '12 months',
            technologies: ['Python', 'Pandas', 'Scikit-learn', 'D3.js']
        }
    ];

    const researchGoals = [
        {
            icon: <FaBook className="text-blue-500" size={20} />,
            title: 'Publish Research',
            description: 'Share findings in educational technology and AI conferences'
        },
        {
            icon: <FaHandshake className="text-green-500" size={20} />,
            title: 'Industry Collaboration',
            description: 'Partner with ed-tech companies for real-world impact'
        },
        {
            icon: <FaUniversity className="text-purple-500" size={20} />,
            title: 'Academic Contribution',
            description: 'Develop open-source educational tools and frameworks'
        },
        {
            icon: <FaSeedling className="text-orange-500" size={20} />,
            title: 'Student Development',
            description: 'Mentor next-generation AI and STEM educators'
        }
    ];

    const collaborationAreas = [
        {
            area: 'Educational Institutions',
            description: 'Partner with schools and universities for pilot programs',
            benefits: ['Real classroom testing', 'Teacher feedback', 'Curriculum integration']
        },
        {
            area: 'Technology Companies',
            description: 'Collaborate with ed-tech and AI software companies',
            benefits: ['Industry expertise', 'Technical resources', 'Market validation']
        },
        {
            area: 'Research Organizations',
            description: 'Work with academic research groups worldwide',
            benefits: ['Knowledge sharing', 'Joint publications', 'Grant opportunities']
        }
    ];

    const upcomingInitiatives = [
        {
            title: 'AI in Education Workshop Series',
            description: 'Monthly workshops for educators on integrating AI tools',
            timeline: 'Starting March 2024',
            participants: 'Teachers, educators, researchers'
        },
        {
            title: 'Open Source Education Tools',
            description: 'Developing free AI-powered educational software',
            timeline: 'Ongoing',
            participants: 'Developers, educators, students'
        },
        {
            title: 'Student Research Program',
            description: 'Undergraduate and graduate research opportunities',
            timeline: 'Fall 2024',
            participants: 'University students, faculty mentors'
        }
    ];

    return (
        <div className={`min-h-screen bg-gradient-to-b from-gray-50 to-blue-50 text-gray-900 ${poppins.className}`}>
            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="container mx-auto px-6 text-center relative">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold mb-6"
                    >
                        Research
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed"
                    >
                        Advancing the future of Education through Artificial Intelligence,
                        innovative Software development, STEM, and Research
                    </motion.p>
                </div>
            </section>

            {/* Research Focus Areas */}
            <section className="py-16 container mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                            Our Research Focus
                        </h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            We specialize in practical research that bridges AI technology with educational innovation
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {researchFocusAreas.map((area, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all"
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="p-3 rounded-xl bg-blue-50">
                                        {area.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900">{area.name}</h3>
                                </div>

                                <p className="text-gray-600 mb-4 leading-relaxed">
                                    {area.description}
                                </p>

                                <div className="mb-4">
                                    <h4 className="font-semibold text-gray-800 mb-2">Active Projects:</h4>
                                    <ul className="space-y-2 text-sm text-gray-600">
                                        {area.projects.map((project, i) => (
                                            <li key={i} className="flex items-start">
                                                <span className="text-blue-500 mr-2">•</span>
                                                <span>{project}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="text-sm text-blue-600 font-medium">
                                    Expected Impact: {area.outcomes}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Current Projects */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-6xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-center mb-12"
                        >
                            <h2 className="text-3xl font-bold mb-4 text-gray-900">
                                Active Research Projects
                            </h2>
                            <p className="text-gray-600">
                                Hands-on development of AI-powered educational solutions
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {currentProjects.map((project, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-200"
                                >
                                    <div className="mb-4">
                                        <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                                            {project.status}
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-bold mb-3 text-gray-900">
                                        {project.title}
                                    </h3>

                                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                                        {project.description}
                                    </p>

                                    <div className="space-y-3 text-sm">
                                        <div>
                                            <span className="font-medium text-gray-700">Team:</span>
                                            <span className="text-gray-600 ml-2">{project.team}</span>
                                        </div>
                                        <div>
                                            <span className="font-medium text-gray-700">Timeline:</span>
                                            <span className="text-gray-600 ml-2">{project.timeline}</span>
                                        </div>
                                        <div>
                                            <span className="font-medium text-gray-700">Technologies:</span>
                                            <div className="flex flex-wrap gap-1 mt-1">
                                                {project.technologies.map((tech, i) => (
                                                    <span key={i} className="px-2 py-1 bg-white text-gray-700 rounded text-xs border">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Research Goals */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-center mb-12"
                        >
                            <h2 className="text-3xl font-bold mb-4 text-gray-900">
                                Our Research Objectives
                            </h2>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {researchGoals.map((goal, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="text-center p-6"
                                >
                                    <div className="flex justify-center mb-4">
                                        <div className="p-3 rounded-full bg-white shadow-lg">
                                            {goal.icon}
                                        </div>
                                    </div>
                                    <h3 className="font-bold text-gray-900 mb-2">{goal.title}</h3>
                                    <p className="text-gray-600 text-sm">{goal.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Collaboration Opportunities */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-6xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-center mb-12"
                        >
                            <h2 className="text-3xl font-bold mb-4 text-gray-900">
                                Collaboration Opportunities
                            </h2>
                            <p className="text-gray-600">
                                We welcome partnerships to advance AI education research
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {collaborationAreas.map((collab, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="bg-gray-50 rounded-2xl p-6 border border-gray-200"
                                >
                                    <h3 className="text-xl font-bold mb-3 text-gray-900">
                                        {collab.area}
                                    </h3>
                                    <p className="text-gray-600 mb-4 text-sm">
                                        {collab.description}
                                    </p>
                                    <div>
                                        <h4 className="font-medium text-gray-800 mb-2">Benefits:</h4>
                                        <ul className="space-y-1 text-sm text-gray-600">
                                            {collab.benefits.map((benefit, i) => (
                                                <li key={i} className="flex items-start">
                                                    <span className="text-green-500 mr-2">✓</span>
                                                    <span>{benefit}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Upcoming Initiatives */}
            <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-center mb-12"
                        >
                            <h2 className="text-3xl font-bold mb-4">
                                Upcoming Initiatives
                            </h2>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {upcomingInitiatives.map((initiative, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
                                >
                                    <h3 className="font-bold text-lg mb-3">{initiative.title}</h3>
                                    <p className="text-blue-100 text-sm mb-4 leading-relaxed">
                                        {initiative.description}
                                    </p>
                                    <div className="space-y-2 text-sm">
                                        <div>
                                            <span className="font-medium">Timeline:</span>
                                            <span className="ml-2 text-blue-100">{initiative.timeline}</span>
                                        </div>
                                        <div>
                                            <span className="font-medium">Participants:</span>
                                            <span className="ml-2 text-blue-100">{initiative.participants}</span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-3xl mx-auto"
                    >
                        <h2 className="text-3xl font-bold mb-6 text-gray-900">
                            Interested in Collaborating?
                        </h2>
                        <p className="text-gray-600 mb-8 text-lg">
                            Join us in reshaping the future through Artificial Intelligence, Education and Research
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="border-2 border-blue-600 text-blue-600 font-semibold py-3 px-8 rounded-xl hover:bg-blue-50 transition-colors"
                            >
                                Submit Research Proposal
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default ResearchPage;