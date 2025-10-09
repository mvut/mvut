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
    FaBookOpen,
    FaRocket,
    FaShieldAlt,
    FaUsers,
    FaLightbulb,
    FaGraduationCap,
    FaNetworkWired
} from 'react-icons/fa';
import Image from 'next/image';
import Logo from '@/public/mvutflame.png';

export default function QualityAssuranceCell() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-blue-900 text-white font-sans">
            {/* Main Content */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* QAC Hero Section */}
                <section id="qac" className="mb-24">
                    <div className="text-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-sm font-medium mb-6"
                        >
                            <FaShieldAlt className="mr-2" />
                            Quality Assurance Commission
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-5xl sm:text-6xl font-bold text-white mb-6 leading-tight"
                        >
                            Elevating
                            <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                                Educational Excellence
                            </span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="text-xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed"
                        >
                            MVIT&apos;s Quality Assurance Commission ensures institutional excellence through
                            rigorous assessment, continuous improvement, and data-driven insights that transform
                            educational outcomes.
                        </motion.p>

                        {/* Key Metrics */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-16"
                        >
                            <StatCard
                                icon={<FaSchool />}
                                number="250+"
                                label="Partner Institutions"
                                gradient="from-blue-400 to-cyan-400"
                            />
                            <StatCard
                                icon={<FaUserGraduate />}
                                number="50K+"
                                label="Students Assessed"
                                gradient="from-green-400 to-emerald-400"
                            />
                            <StatCard
                                icon={<FaAward />}
                                number="98%"
                                label="Satisfaction Rate"
                                gradient="from-purple-400 to-pink-400"
                            />
                            <StatCard
                                icon={<FaChartLine />}
                                number="40%"
                                label="Average Improvement"
                                gradient="from-orange-400 to-red-400"
                            />
                        </motion.div>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                        >
                            <Link
                                href="/mvit-exam/enrollment"
                                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                            >
                                Get Started Today
                            </Link>
                            <Link
                                href="/qac/overview"
                                className="px-8 py-4 border border-gray-600 text-gray-300 font-semibold rounded-xl hover:border-gray-400 hover:text-white transition-all duration-300"
                            >
                                Learn More
                            </Link>
                        </motion.div>
                    </div>
                </section>

                {/* Professional Development Hero Section */}
                <section id="professional-development" className="mb-24">
                    <div className="bg-gradient-to-br from-gray-800/50 to-blue-900/30 rounded-3xl border border-gray-700/50 p-12 backdrop-blur-sm">
                        <div className="text-center mb-12">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/20 border border-purple-400/30 text-purple-300 text-sm font-medium mb-6"
                            >
                                <FaGraduationCap className="mr-2" />
                                Professional Development
                            </motion.div>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                className="text-4xl sm:text-5xl font-bold text-white mb-6"
                            >
                                Empower Your
                                <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                    Teaching Excellence
                                </span>
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.2, duration: 0.6 }}
                                className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
                            >
                                Transform your educational practice with cutting-edge professional development
                                programs designed to elevate teaching methodologies and student outcomes.
                            </motion.p>
                        </div>

                        {/* PD Metrics */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12"
                        >
                            <PDStatCard
                                icon={<FaUsers />}
                                number="5,000+"
                                label="Educators Trained"
                                description="Comprehensive professional development programs"
                            />
                            <PDStatCard
                                icon={<FaLightbulb />}
                                number="200+"
                                label="Workshop Modules"
                                description="Innovative teaching strategies and methodologies"
                            />
                            <PDStatCard
                                icon={<FaNetworkWired />}
                                number="95%"
                                label="Implementation Rate"
                                description="Successful adoption of new teaching practices"
                            />
                        </motion.div>

                        {/* PD Features */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
                        >
                            <PDFeatureCard
                                icon={<FaChalkboardTeacher />}
                                title="Teaching Excellence"
                                description="Master innovative pedagogical approaches and classroom management techniques"
                            />
                            <PDFeatureCard
                                icon={<FaBookOpen />}
                                title="Curriculum Design"
                                description="Develop cutting-edge curricula aligned with global standards"
                            />
                            <PDFeatureCard
                                icon={<FaChartLine />}
                                title="Data Analytics"
                                description="Leverage data-driven insights for personalized instruction"
                            />
                            <PDFeatureCard
                                icon={<FaRocket />}
                                title="Technology Integration"
                                description="Incorporate EdTech tools for enhanced learning experiences"
                            />
                        </motion.div>

                        {/* PD CTA */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 }}
                            className="text-center mt-12"
                        >
                            <Link
                                href="/professional-development/courses"
                                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center"
                            >
                                <FaGraduationCap className="mr-2" />
                                Explore PD Programs
                            </Link>
                        </motion.div>
                    </div>
                </section>

                {/* Rest of your existing sections remain the same */}
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

// Enhanced StatCard with gradient support
function StatCard({ icon, number, label, gradient }: {
    icon: JSX.Element;
    number: string;
    label: string;
    gradient: string;
}) {
    return (
        <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className="bg-gray-800/60 rounded-2xl shadow-lg p-6 border border-gray-700/50 text-center hover:shadow-xl transition-all backdrop-blur-sm group"
        >
            <div className={`text-4xl mb-4 bg-gradient-to-r ${gradient} bg-clip-text text-transparent group-hover:scale-110 transition-transform`}>
                {icon}
            </div>
            <p className={`text-3xl font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent mb-2`}>{number}</p>
            <p className="text-gray-300 font-medium">{label}</p>
        </motion.div>
    );
}

// Professional Development Stat Card
function PDStatCard({ icon, number, label, description }: {
    icon: JSX.Element;
    number: string;
    label: string;
    description: string;
}) {
    return (
        <motion.div
            whileHover={{ y: -3 }}
            className="bg-gray-800/40 rounded-xl p-6 border border-gray-700/30 text-center backdrop-blur-sm"
        >
            <div className="text-purple-400 text-3xl mb-3">{icon}</div>
            <p className="text-2xl font-bold text-white mb-1">{number}</p>
            <p className="text-purple-300 font-semibold mb-2">{label}</p>
            <p className="text-gray-400 text-sm">{description}</p>
        </motion.div>
    );
}

// Professional Development Feature Card
function PDFeatureCard({ icon, title, description }: {
    icon: JSX.Element;
    title: string;
    description: string;
}) {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="bg-gray-800/30 rounded-xl p-6 border border-gray-700/20 hover:border-purple-500/30 transition-all group backdrop-blur-sm"
        >
            <div className="text-purple-400 text-2xl mb-4 group-hover:scale-110 transition-transform">
                {icon}
            </div>
            <h3 className="text-lg font-bold text-white mb-3">{title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
        </motion.div>
    );
}

// Rest of your existing components remain the same...
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
            <p className="text-gray-300 italic mb-6">&quot;{quote}&quot;</p>
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