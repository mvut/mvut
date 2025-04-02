'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
    FaSchool,
    FaUserGraduate,
    FaChartLine,
    FaAward,
    FaChalkboardTeacher,
    FaFileAlt,
    FaCheckCircle,
    FaQuoteRight,
    FaQuoteLeft,
    FaClipboardCheck,
    FaPoll,
    FaSearchPlus,
    FaRegIdCard,
    FaCalendarAlt,
    FaUserTie,
    FaBookOpen
} from 'react-icons/fa';
import Image from 'next/image';
import Logo from '@/public/mvutflame.png';

export default function QualityAssuranceCell() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white font-sans">
            {/* Main Content */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Centered Logo */}
                <div className="flex justify-center mb-12">
                    <div className="w-48 h-auto p-6">
                        <Image
                            src={Logo}
                            alt="MVIT Logo"
                            width={200}
                            height={100}
                            className="object-contain"
                            priority
                        />
                    </div>
                </div>

                {/* Hero Section */}
                <header className="mb-16 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl sm:text-5xl font-bold text-white mb-6"
                    >
                        Elevating Educational Standards
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="text-xl text-gray-300 max-w-3xl mx-auto mb-12"
                    >
                        MVIT's Quality Assurance Commission ensures excellence through rigorous assessment and continuous improvement.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
                    >
                        <StatCard icon={<FaSchool />} number="250+" label="Partner Institutions" />
                        <StatCard icon={<FaUserGraduate />} number="50K+" label="Students Assessed" />
                        <StatCard icon={<FaAward />} number="98%" label="Satisfaction Rate" />
                        <StatCard icon={<FaChartLine />} number="40%" label="Average Improvement" />
                    </motion.div>
                </header>

                {/* Primary Actions */}
                <SectionHeader
                    title="Get Started"
                    description="Access our comprehensive quality assurance tools"
                />
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-24"
                >
                    <ActionCard
                        icon={<FaUserGraduate />}
                        title="Student Portal"
                        description="Register for assessments and track your progress"
                        link="/mvit-exam/enrollment"
                    />
                    <ActionCard
                        icon={<FaClipboardCheck />}
                        title="Assessment Center"
                        description="Complete your assigned evaluations"
                        link="/mvit-exam/take-test"
                    />
                    <ActionCard
                        icon={<FaPoll />}
                        title="Performance Dashboard"
                        description="View detailed analytics and insights"
                        link="/qac/results"
                    />
                    <ActionCard
                        icon={<FaSchool />}
                        title="Institution Hub"
                        description="Manage your school's quality assurance profile"
                        link="/qac/IR"
                    />
                </motion.div>

                {/* Assessment Framework */}
                <SectionHeader
                    title="Our Three-Pillar Approach"
                    description="A comprehensive framework for educational excellence"
                />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-8 mb-24">
                    <FeatureCard
                        icon={<FaSearchPlus />}
                        title="Diagnostic Evaluation"
                        items={[
                            'Baseline competency assessment',
                            'Individual learning profiles',
                            'Institutional benchmarking'
                        ]}
                    />
                    <FeatureCard
                        icon={<FaBookOpen />}
                        title="Formative Tracking"
                        items={[
                            'Continuous progress monitoring',
                            'Personalized learning pathways',
                            'Real-time educator feedback'
                        ]}
                    />
                    <FeatureCard
                        icon={<FaAward />}
                        title="Summative Certification"
                        items={[
                            'Nationally standardized testing',
                            'Comprehensive skill certification',
                            'Quality accreditation'
                        ]}
                    />
                </div>

                {/* Quality Assurance Services */}
                <SectionHeader
                    title="Our Comprehensive Services"
                    description="Tailored solutions for every educational need"
                    className="mb-8"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mt-8 mb-24">
                    <ServiceCard
                        icon={<FaFileAlt />}
                        title="Standardized Assessments"
                        description="Validated evaluation tools for all educational levels"
                    />
                    <ServiceCard
                        icon={<FaChartLine />}
                        title="Advanced Analytics"
                        description="Data-driven insights with actionable recommendations"
                    />
                    <ServiceCard
                        icon={<FaBookOpen />}
                        title="Curriculum Development"
                        description="Alignment with national and global standards"
                    />
                    <ServiceCard
                        icon={<FaChalkboardTeacher />}
                        title="Educator Training"
                        description="Professional development programs and workshops"
                    />
                    <ServiceCard
                        icon={<FaSearchPlus />}
                        title="Institutional Audits"
                        description="Comprehensive quality reviews with detailed reporting"
                    />
                    <ServiceCard
                        icon={<FaRegIdCard />}
                        title="Accreditation"
                        description="Official recognition of educational excellence"
                    />
                </div>

                {/* Benefits Section */}
                <SectionHeader
                    title="Transformative Impact"
                    description="How our program elevates educational outcomes"
                    className="mb-8"
                />
                <div className="bg-gray-800/80 rounded-xl shadow-sm p-8 border border-gray-700 max-w-6xl mx-auto mt-8 mb-24 backdrop-blur-sm">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xl font-bold mb-4 flex items-center">
                                <FaUserTie className="text-blue-400 mr-2" />
                                For Educational Leaders
                            </h3>
                            <ul className="space-y-3">
                                {[
                                    'Data-informed policy decisions',
                                    'National and international benchmarking',
                                    'Streamlined accreditation processes',
                                    'Enhanced institutional reputation'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start">
                                        <FaCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-4 flex items-center">
                                <FaChalkboardTeacher className="text-blue-400 mr-2" />
                                For Teaching Professionals
                            </h3>
                            <ul className="space-y-3">
                                {[
                                    'Detailed student performance insights',
                                    'Evidence-based teaching strategies',
                                    'Professional growth opportunities',
                                    'Recognition of teaching excellence'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start">
                                        <FaCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Testimonials */}
                <SectionHeader
                    title="Proven Results"
                    description="Success stories from our partner institutions"
                    className="mb-8"
                />
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mt-8 mb-24">
                    <TestimonialCard
                        quote="After implementing MVIT's quality framework, our students showed a 40% improvement in core competencies within one academic year."
                        name="Dr. Sarah Khan"
                        position="Principal, Elite Grammar School"
                    />
                    <TestimonialCard
                        quote="The professional development programs transformed our teaching staff's approach, resulting in significantly higher student engagement."
                        name="Michael Rodriguez"
                        position="Academic Director, Global Academy"
                    />
                </div>

                {/* Events */}
                <SectionHeader
                    title="Key Dates"
                    description="Important events in our assessment cycle"
                    className="mb-8"
                />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-8 mb-24">
                    <EventCard
                        icon={<FaCalendarAlt />}
                        title="Spring Assessment Window"
                        date="March 15 - April 30, 2024"
                    />
                    <EventCard
                        icon={<FaChalkboardTeacher />}
                        title="Educator Symposium"
                        date="May 10-12, 2024"
                    />
                    <EventCard
                        icon={<FaPoll />}
                        title="Annual Results Release"
                        date="June 5, 2024"
                    />
                </div>

                {/* FAQ */}
                <SectionHeader
                    title="Common Questions"
                    description="Everything you need to know about our program"
                    className="mb-8"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto mt-8">
                    <FAQCard
                        question="What makes MVIT's assessments different?"
                        answer="Our assessments combine rigorous academic standards with 21st century skill evaluation, providing a holistic view of student capabilities."
                    />
                    <FAQCard
                        question="How often should institutions participate?"
                        answer="We recommend annual participation to track progress, with optional mid-year formative assessments."
                    />
                    <FAQCard
                        question="What support is available for first-time participants?"
                        answer="We provide onboarding workshops, detailed guides, and dedicated support staff to ensure smooth implementation."
                    />
                    <FAQCard
                        question="How are assessment results used?"
                        answer="Results inform teaching strategies, curriculum development, and institutional planning while maintaining student privacy."
                    />
                </div>
            </div>
        </div>
    );
}

// Component Library (same as before with updated content)
function StatCard({ icon, number, label }: { icon: JSX.Element; number: string; label: string }) {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="bg-gray-800/80 rounded-xl shadow-sm p-4 border border-gray-700 text-center hover:shadow-md transition-all backdrop-blur-sm"
        >
            <div className="text-blue-400 text-3xl mb-2">{icon}</div>
            <p className="text-2xl font-bold text-white">{number}</p>
            <p className="text-sm text-gray-300">{label}</p>
        </motion.div>
    );
}

function ActionCard({ icon, title, description, link }: {
    icon: JSX.Element;
    title: string;
    description: string;
    link: string;
}) {
    return (
        <Link href={link}>
            <motion.div
                whileHover={{ y: -5 }}
                className="bg-gray-800/80 rounded-xl shadow-sm p-6 border border-gray-700 hover:border-gray-600 hover:shadow-md transition-all h-full backdrop-blur-sm"
            >
                <div className="text-blue-400 text-3xl mb-4">{icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
                <p className="text-gray-300">{description}</p>
            </motion.div>
        </Link>
    );
}

function SectionHeader({ title, description, className = '' }: {
    title: string;
    description: string;
    className?: string;
}) {
    return (
        <div className={`text-center ${className}`}>
            <h2 className="text-3xl font-bold text-white mb-2">{title}</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">{description}</p>
        </div>
    );
}

function FeatureCard({ icon, title, items }: {
    icon: JSX.Element;
    title: string;
    items: string[];
}) {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="bg-gray-800/80 rounded-xl shadow-sm p-6 border border-gray-700 hover:shadow-md transition-all backdrop-blur-sm"
        >
            <div className="text-blue-400 text-4xl mb-4">{icon}</div>
            <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
            <ul className="space-y-2">
                {items.map((item, i) => (
                    <li key={i} className="flex items-start">
                        <FaCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-gray-300">{item}</span>
                    </li>
                ))}
            </ul>
        </motion.div>
    );
}

function ServiceCard({ icon, title, description }: {
    icon: JSX.Element;
    title: string;
    description: string;
}) {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="bg-gray-800/80 rounded-xl shadow-sm p-6 border border-gray-700 hover:shadow-md transition-all backdrop-blur-sm"
        >
            <div className="text-blue-400 text-3xl mb-4">{icon}</div>
            <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
            <p className="text-gray-300">{description}</p>
        </motion.div>
    );
}

function TestimonialCard({ quote, name, position }: {
    quote: string;
    name: string;
    position: string;
}) {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="bg-gray-800/80 rounded-xl shadow-sm p-8 border border-gray-700 hover:shadow-md transition-all backdrop-blur-sm"
        >
            <FaQuoteLeft className="text-blue-400 mb-4 opacity-30" />
            <p className="text-gray-300 italic mb-6">"{quote}"</p>
            <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center mr-4">
                    <FaUserTie className="text-blue-400" />
                </div>
                <div>
                    <p className="text-blue-400 font-bold">{name}</p>
                    <p className="text-gray-300 text-sm">{position}</p>
                </div>
            </div>
            <FaQuoteRight className="text-blue-400 ml-auto mt-4 opacity-30" />
        </motion.div>
    );
}

function EventCard({ icon, title, date }: {
    icon: JSX.Element;
    title: string;
    date: string;
}) {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="bg-gray-800/80 rounded-xl shadow-sm p-6 border border-gray-700 hover:shadow-md transition-all backdrop-blur-sm"
        >
            <div className="flex items-center mb-4">
                <div className="text-blue-400 text-2xl mr-4">{icon}</div>
                <h3 className="text-xl font-bold text-white">{title}</h3>
            </div>
            <p className="text-gray-300"><span className="font-semibold">Date:</span> {date}</p>
            <Link href="#" className="text-blue-400 hover:text-blue-300 text-sm mt-4 inline-block">
                Learn more →
            </Link>
        </motion.div>
    );
}

function FAQCard({ question, answer }: {
    question: string;
    answer: string;
}) {
    return (
        <motion.div
            whileHover={{ y: -3 }}
            className="bg-gray-800/80 rounded-xl shadow-sm p-6 border border-gray-700 hover:shadow-md transition-all backdrop-blur-sm"
        >
            <h3 className="text-lg font-bold text-white mb-3">{question}</h3>
            <p className="text-gray-300">{answer}</p>
        </motion.div>
    );
}