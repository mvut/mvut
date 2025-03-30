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
    FaMicroscope,
    FaBookOpen,
    FaGlobeAmericas,
    FaLaptopCode
} from 'react-icons/fa';

interface ColorScheme {
    gradient: string;
    glow: string;
    textColor: string;
}

const colors: Record<string, ColorScheme> = {
    primary: {
        gradient: 'from-red-600 to-red-800',
        glow: 'shadow-red-500/50',
        textColor: 'text-white',
    },
    secondary: {
        gradient: 'from-red-800 to-red-900',
        glow: 'shadow-red-700/50',
        textColor: 'text-white',
    },
    accent: {
        gradient: 'from-red-900 to-black',
        glow: 'shadow-black/50',
        textColor: 'text-white',
    },
    highlight: {
        gradient: 'from-black to-red-900',
        glow: 'shadow-red-900/50',
        textColor: 'text-white',
    },
};

export default function QualityAssuranceCell() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-black via-red-900 to-black py-16 text-white font-sans relative overflow-hidden">
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-black opacity-30"></div>

            {/* Main Content */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
            >
                {/* Hero Section with Enhanced Content */}
                <header className="mb-16 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600 mb-6"
                    >
                        Quality Assurance Commission
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg sm:text-xl text-gray-200 leading-relaxed max-w-4xl mx-auto mb-8"
                    >
                        Driving educational excellence through comprehensive assessment systems, data-driven insights, and continuous quality improvement initiatives for institutions nationwide.
                    </motion.p>

                    {/* Key Stats */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-5xl mx-auto"
                    >
                        <StatCard icon={<FaSchool />} number="250+" label="Partner Institutions" />
                        <StatCard icon={<FaUserGraduate />} number="50,000+" label="Students Assessed" />
                        <StatCard icon={<FaAward />} number="120+" label="Certified Educators" />
                        <StatCard icon={<FaChartLine />} number="98%" label="Satisfaction Rate" />
                    </motion.div>
                </header>

                {/* Primary Action Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
                >
                    <Link href="/mvit-exam/enrollment">
                        <FancyButton
                            icon={<FaUserGraduate size={24} />}
                            text="Student Enrollment"
                            description="Register for upcoming assessments"
                            color="primary"
                        />
                    </Link>
                    <Link href="/mvit-exam/take-test">
                        <FancyButton
                            icon={<FaClipboardCheck size={24} />}
                            text="Assessment Portal"
                            description="Access your scheduled exams"
                            color="secondary"
                        />
                    </Link>
                    <Link href="/qac/results">
                        <FancyButton
                            icon={<FaPoll size={24} />}
                            text="Performance Analytics"
                            description="View detailed results and insights"
                            color="accent"
                        />
                    </Link>
                    <Link href="/qac/IR">
                        <FancyButton
                            icon={<FaSchool size={24} />}
                            text="Institution Portal"
                            description="Register your school or college"
                            color="highlight"
                        />
                    </Link>
                </motion.div>

                {/* Assessment Framework Section */}
                <AssessmentFrameworkSection />

                {/* Quality Assurance Features */}
                <QualityAssuranceFeatures />

                {/* Benefits Section */}
                <BenefitsSection />

                {/* Testimonials Section */}
                <TestimonialsSection />

                {/* Upcoming Events Section */}
                <EventsSection />

                {/* FAQ Section */}
                <FAQSection />
            </motion.div>
        </div>
    );
}

function StatCard({ icon, number, label }: { icon: JSX.Element; number: string; label: string }) {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="bg-black/50 backdrop-blur-sm rounded-xl p-4 border border-red-900/50 text-center"
        >
            <div className="text-red-400 text-3xl mb-2">{icon}</div>
            <p className="text-2xl font-bold">{number}</p>
            <p className="text-sm text-gray-300">{label}</p>
        </motion.div>
    );
}

function FancyButton({
                         icon,
                         text,
                         description,
                         color,
                     }: {
    icon: JSX.Element;
    text: string;
    description: string;
    color: keyof typeof colors;
}) {
    return (
        <motion.button
            whileHover={{
                scale: 1.03,
                boxShadow: '0 0 20px rgba(220, 38, 38, 0.5)',
            }}
            whileTap={{ scale: 0.97 }}
            className={`relative h-full w-full flex flex-col items-center justify-center p-6 overflow-hidden font-medium transition-all duration-300 rounded-xl shadow-lg group hover:${colors[color].glow} bg-black/50 border border-red-900/50`}
        >
            <div className="relative z-10 flex flex-col items-center text-center">
                <div className="text-3xl mb-3 text-red-400">{icon}</div>
                <h3 className={`text-lg font-bold ${colors[color].textColor} mb-2`}>{text}</h3>
                <p className="text-xs text-gray-300">{description}</p>
            </div>
        </motion.button>
    );
}

function AssessmentFrameworkSection() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-24"
        >
            <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-red-400 mb-4">
                    Our Comprehensive Assessment Framework
                </h2>
                <p className="text-lg text-gray-300 max-w-4xl mx-auto">
                    A multi-dimensional approach to evaluating and enhancing educational quality
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <FrameworkPhase
                    title="Diagnostic Assessment"
                    icon={<FaSearchPlus />}
                    description="Baseline evaluation to identify learning gaps and strengths"
                    features={[
                        'Pre-assessment screening',
                        'Skill gap analysis',
                        'Individual learning profiles'
                    ]}
                />
                <FrameworkPhase
                    title="Formative Evaluation"
                    icon={<FaBookOpen />}
                    description="Ongoing monitoring of student progress"
                    features={[
                        'Monthly progress checks',
                        'Adaptive learning paths',
                        'Teacher feedback integration'
                    ]}
                />
                <FrameworkPhase
                    title="Summative Certification"
                    icon={<FaAward />}
                    description="Final evaluation and recognition of achievement"
                    features={[
                        'Standardized testing',
                        'National benchmarking',
                        'Official certification'
                    ]}
                />
            </div>
        </motion.section>
    );
}

function FrameworkPhase({ title, icon, description, features }: {
    title: string;
    icon: JSX.Element;
    description: string;
    features: string[];
}) {
    return (
        <motion.div
            whileHover={{ y: -10 }}
            className="bg-black/50 backdrop-blur-lg rounded-2xl p-6 border border-red-900/50 h-full"
        >
            <div className="text-red-400 text-4xl mb-4">{icon}</div>
            <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
            <p className="text-gray-300 mb-4">{description}</p>
            <ul className="space-y-2">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                        <FaCheckCircle className="text-red-400 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                    </li>
                ))}
            </ul>
        </motion.div>
    );
}

function QualityAssuranceFeatures() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-24"
        >
            <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-red-400 mb-4">
                    Quality Assurance Services
                </h2>
                <p className="text-lg text-gray-300 max-w-4xl mx-auto">
                    Comprehensive solutions designed to elevate educational standards and outcomes
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {qaFeatures.map((feature, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.03 }}
                        className="bg-black/50 backdrop-blur-lg rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all border border-red-900/50 h-full"
                    >
                        <div className="text-3xl text-red-400 mb-4">{feature.icon}</div>
                        <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                        <p className="text-sm sm:text-base text-gray-200 mb-4">{feature.description}</p>
                        {feature.details && (
                            <ul className="text-xs sm:text-sm text-gray-300 space-y-2">
                                {feature.details.map((detail, i) => (
                                    <li key={i} className="flex items-start">
                                        <span className="text-red-400 mr-2">•</span>
                                        <span>{detail}</span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
}

function BenefitsSection() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-24 bg-black/50 backdrop-blur-lg rounded-2xl shadow-lg p-8 border border-red-900/50"
        >
            <div className="text-center mb-8">
                <FaAward size={50} className="text-red-400 mx-auto mb-4" />
                <h2 className="text-2xl sm:text-3xl font-bold text-red-400 mb-2">
                    Strategic Benefits for Institutions
                </h2>
                <p className="text-gray-300 max-w-3xl mx-auto">
                    How participation in our quality assurance program transforms educational delivery
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <h3 className="text-xl font-bold text-white mb-4">For School Administrators</h3>
                    <ul className="space-y-3">
                        {benefits.admin.map((benefit, index) => (
                            <li key={`admin-${index}`} className="flex items-start gap-3">
                                <FaCheckCircle className="text-red-400 mt-1 flex-shrink-0" />
                                <span className="text-gray-300">{benefit}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-bold text-white mb-4">For Teaching Faculty</h3>
                    <ul className="space-y-3">
                        {benefits.teachers.map((benefit, index) => (
                            <li key={`teacher-${index}`} className="flex items-start gap-3">
                                <FaCheckCircle className="text-red-400 mt-1 flex-shrink-0" />
                                <span className="text-gray-300">{benefit}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </motion.section>
    );
}

function TestimonialsSection() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-24"
        >
            <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-red-400 mb-4">
                    Success Stories
                </h2>
                <p className="text-lg text-gray-300 max-w-4xl mx-auto">
                    Hear from institutions that have transformed their educational outcomes
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {testimonials.map((testimonial, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ y: -5 }}
                        className="bg-black/50 backdrop-blur-lg rounded-2xl shadow-lg p-8 border border-red-900/50"
                    >
                        <FaQuoteLeft size={24} className="text-red-400 mb-4" />
                        <p className="text-gray-200 italic text-lg mb-6">
                            &quot;{testimonial.quote}&quot;
                        </p>
                        <div className="flex items-center">
                            <div className="w-16 h-16 rounded-full bg-red-900/30 flex items-center justify-center mr-4">
                                {testimonial.avatar}
                            </div>
                            <div>
                                <p className="text-red-400 font-bold">{testimonial.name}</p>
                                <p className="text-gray-300">{testimonial.position}</p>
                                <p className="text-sm text-gray-400">{testimonial.institution}</p>
                            </div>
                        </div>
                        <FaQuoteRight size={24} className="text-red-400 ml-auto mt-4" />
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
}

function EventsSection() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-24"
        >
            <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-red-400 mb-4">
                    Upcoming Events & Deadlines
                </h2>
                <p className="text-lg text-gray-300 max-w-4xl mx-auto">
                    Important dates for the current assessment cycle
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {events.map((event, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.02 }}
                        className="bg-black/50 backdrop-blur-lg rounded-2xl p-6 border border-red-900/50"
                    >
                        <div className="flex items-center mb-4">
                            <div className="text-red-400 text-2xl mr-4">
                                {event.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white">{event.title}</h3>
                        </div>
                        <p className="text-gray-300 mb-2"><span className="font-semibold">Date:</span> {event.date}</p>
                        <p className="text-gray-300 mb-4"><span className="font-semibold">Location:</span> {event.location}</p>
                        <Link href={event.link} className="text-red-400 hover:text-red-300 text-sm font-medium">
                            Learn more →
                        </Link>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
}

function FAQSection() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-24 bg-black/50 backdrop-blur-lg rounded-2xl shadow-lg p-8 border border-red-900/50"
        >
            <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-red-400 mb-4">
                    Frequently Asked Questions
                </h2>
                <p className="text-lg text-gray-300 max-w-4xl mx-auto">
                    Answers to common questions about our quality assurance programs
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {faqs.map((faq, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ y: -3 }}
                        className="bg-black/30 rounded-xl p-6 border border-red-900/30"
                    >
                        <h3 className="text-lg font-bold text-white mb-3">{faq.question}</h3>
                        <p className="text-gray-300">{faq.answer}</p>
                    </motion.div>
                ))}
            </div>

            <div className="text-center mt-8">
                <Link href="/qac/faq" className="text-red-400 hover:text-red-300 font-medium">
                    View all FAQs →
                </Link>
            </div>
        </motion.section>
    );
}

// Enhanced Data Structures
interface Feature {
    title: string;
    description: string;
    icon: JSX.Element;
    details?: string[];
}

const qaFeatures: Feature[] = [
    {
        title: 'Comprehensive Assessments',
        description: 'Rigorous evaluation tools covering all academic levels and subjects',
        icon: <FaFileAlt />,
        details: [
            'Nursery to Grade 12 assessments',
            'Subject-specific evaluation rubrics',
            'Cognitive and skill-based testing'
        ]
    },
    {
        title: 'Data Analytics Dashboard',
        description: 'Real-time performance tracking and visualization tools',
        icon: <FaChartLine />,
        details: [
            'Institutional benchmarking',
            'Longitudinal progress tracking',
            'Custom report generation'
        ]
    },
    {
        title: 'Curriculum Alignment',
        description: 'Assessments designed to national education standards',
        icon: <FaBookOpen />,
        details: [
            'Alignment with national curricula',
            '21st century skill integration',
            'Cross-disciplinary evaluation'
        ]
    },
    {
        title: 'Professional Development',
        description: 'Training programs based on assessment insights',
        icon: <FaChalkboardTeacher />,
        details: [
            'Pedagogical skill enhancement',
            'Data-driven instruction workshops',
            'Certification programs'
        ]
    },
    {
        title: 'Diagnostic Reporting',
        description: 'Actionable insights for continuous improvement',
        icon: <FaSearchPlus />,
        details: [
            'Individual student profiles',
            'Classroom-level analytics',
            'Institutional recommendations'
        ]
    },
    {
        title: 'Quality Certification',
        description: 'Recognition of educational excellence',
        icon: <FaRegIdCard />,
        details: [
            'Student achievement certificates',
            'School quality accreditation',
            'Teacher certification programs'
        ]
    }
];

interface Testimonial {
    quote: string;
    name: string;
    position: string;
    institution: string;
    avatar: JSX.Element;
}

const testimonials: Testimonial[] = [
    {
        quote: 'Implementing MVIT QAC transformed our assessment culture. Within two years, our students performance improved by 40% across all subjects.',
        name: 'Dr. Sarah Khan',
        position: 'Principal',
        institution: 'Elite Grammar School, Lahore',
        avatar: <FaUserTie />
    },
    {
        quote: 'The professional development programs helped our teachers develop data-driven instructional strategies that significantly improved learning outcomes.',
        name: 'Michael Rodriguez',
        position: 'Academic Director',
        institution: 'Global Academy, Karachi',
        avatar: <FaChalkboardTeacher />
    }
];

interface Benefits {
    admin: string[];
    teachers: string[];
}

const benefits: Benefits = {
    admin: [
        'Evidence-based decision making',
        'National benchmarking data',
        'Institutional accreditation',
        'Strategic planning insights',
        'Resource allocation guidance',
        'Quality assurance certification'
    ],
    teachers: [
        'Personalized student insights',
        'Targeted instructional strategies',
        'Professional growth opportunities',
        'Classroom-level analytics',
        'Curriculum alignment tools',
        'Peer benchmarking data'
    ]
};

interface Event {
    title: string;
    date: string;
    location: string;
    link: string;
    icon: JSX.Element;
}

const events: Event[] = [
    {
        title: 'Assessment Window',
        date: 'March 15 - April 30, 2024',
        location: 'Online & Partner Centers',
        link: '/events/assessment-window',
        icon: <FaCalendarAlt />
    },
    {
        title: 'Educator Training',
        date: 'May 10-12, 2024',
        location: 'MVIT Regional Centers',
        link: '/events/educator-training',
        icon: <FaChalkboardTeacher />
    },
    {
        title: 'Results Publication',
        date: 'June 5, 2024',
        location: 'Online Portal',
        link: '/events/results-publication',
        icon: <FaPoll />
    }
];

interface FAQ {
    question: string;
    answer: string;
}

const faqs: FAQ[] = [
    {
        question: 'How often are assessments conducted?',
        answer: 'We conduct three assessment cycles annually - in March, July, and November.'
    },
    {
        question: 'What subjects are covered in the assessments?',
        answer: 'Our assessments cover core subjects (Math, Science, Languages) plus 21st century skills for all grade levels.'
    },
    {
        question: 'How do institutions register for the program?',
        answer: 'Schools can register through our online portal, with verification completed within 3 business days.'
    },
    {
        question: 'What support is provided for teachers?',
        answer: 'We offer training workshops, instructional resources, and personalized coaching based on assessment data.'
    }
];