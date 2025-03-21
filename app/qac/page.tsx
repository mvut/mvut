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
} from 'react-icons/fa';

// Define the type for the colors object
interface ColorScheme {
    gradient: string;
    glow: string;
    textColor: string;
}

const colors: Record<string, ColorScheme> = {
    teal: {
        gradient: 'from-teal-500 via-green-500 to-blue-500',
        glow: 'shadow-teal-500/50',
        textColor: 'text-white',
    },
    purple: {
        gradient: 'from-purple-500 via-indigo-500 to-pink-500',
        glow: 'shadow-purple-500/50',
        textColor: 'text-white',
    },
    pink: {
        gradient: 'from-pink-500 via-red-500 to-orange-500',
        glow: 'shadow-pink-500/50',
        textColor: 'text-white',
    },
    indigo: {
        gradient: 'from-indigo-500 via-blue-500 to-violet-500',
        glow: 'shadow-indigo-500/50',
        textColor: 'text-white',
    },
};

export default function QualityAssuranceCell() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700 py-16 text-white font-sans">
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
                {/* Header Section */}
                <header className="mb-16 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400 mb-4"
                    >
                        MVIT Examination & Quality Assurance Commission
                    </motion.h1>
                    <p className="text-lg sm:text-xl text-gray-200 leading-relaxed max-w-4xl mx-auto">
                        Empowering educational excellence through standardized testing, actionable insights, and quality assurance programs for institutions and students.
                    </p>
                </header>
                {/* Primary Action Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12"
                >
                    {/* Enroll Now Button */}
                    <Link href="/mvit-exam/enrollment">
                        <FancyButton icon={<FaUserGraduate size={24} />} text="Enroll Now" color="teal" />
                    </Link>
                    {/* Take Test Button */}
                    <Link href="/mvit-exam/take-test">
                        <FancyButton icon={<FaClipboardCheck size={24} />} text="Take Test" color="purple" />
                    </Link>
                    {/* View Results Button */}
                    <Link href="/qac/results">
                        <FancyButton icon={<FaPoll size={24} />} text="View Results" color="pink" />
                    </Link>
                    {/* Institution Registration Button */}
                    <Link href="/qac/IR">
                        <FancyButton icon={<FaSchool size={24} />} text="Institution Registration" color="indigo" />
                    </Link>
                </motion.div>
                {/* Quality Assurance Features */}
                <QualityAssuranceFeatures />
                {/* Benefits Section */}
                <BenefitsSection />
                {/* Testimonials Section */}
                <TestimonialsSection />
            </motion.div>
        </div>
    );
}

// Fancy Button Component
function FancyButton({
                         icon,
                         text,
                         color,
                     }: {
    icon: JSX.Element;
    text: string;
    color: keyof typeof colors; // Ensure `color` is one of the keys in `colors`
}) {
    return (
        <motion.button
            whileHover={{
                scale: 1.05,
                boxShadow: '0 0 15px rgba(255, 255, 255, 0.5)',
            }}
            whileTap={{ scale: 0.95 }}
            className={`relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium transition-all duration-300 rounded-lg shadow-lg group hover:${colors[color].glow}`}
        >
            {/* Gradient Overlay */}
            <span
                className={`absolute top-0 left-0 w-full h-full transition-all duration-300 ease-out bg-gradient-to-br ${colors[color].gradient} opacity-0 group-hover:opacity-80`}
            ></span>
            {/* Rotating Accent */}
            <span
                className="absolute bottom-0 right-0 w-16 h-16 mb-4 mr-4 transition-all duration-300 ease-out transform rotate-45 translate-x-20 bg-opacity-70 group-hover:translate-x-0"
                style={{
                    backgroundColor: `hsl(var(--${color}-500))`,
                }}
            ></span>
            {/* Icon and Text */}
            <div className="relative z-10 flex items-center">
                {icon}
                <span className={`ml-2 font-semibold ${colors[color].textColor}`}>{text}</span>
            </div>
        </motion.button>
    );
}

// Quality Assurance Features Section
function QualityAssuranceFeatures() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-16"
        >
            <h2 className="text-3xl sm:text-4xl font-bold text-teal-400 text-center mb-8">
                Quality Assurance Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {qaFeatures.map((feature, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.03 }}
                        className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all"
                    >
                        <div className="text-3xl text-teal-400 mb-4">{feature.icon}</div>
                        <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                        <p className="text-sm sm:text-base text-gray-200">{feature.description}</p>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
}

// Benefits Section
function BenefitsSection() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-16 bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl shadow-lg p-8 text-center"
        >
            <FaAward size={50} className="text-teal-400 mx-auto mb-6" />
            <h2 className="text-2xl sm:text-3xl font-bold text-teal-400 mb-4">
                Benefits of QAT Participation
            </h2>
            <ul className="text-left text-sm sm:text-base text-gray-200 leading-relaxed space-y-3">
                {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-2">
                        <FaCheckCircle className="text-teal-400" /> {benefit}
                    </li>
                ))}
            </ul>
        </motion.section>
    );
}

// Testimonials Section
function TestimonialsSection() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-16"
        >
            <h2 className="text-3xl sm:text-4xl font-bold text-teal-400 text-center mb-8">
                What Our Partners Say
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                    <div
                        key={index}
                        className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all"
                    >
                        <FaQuoteLeft size={20} className="text-teal-400 mb-4" />
                        <p className="text-sm sm:text-base text-gray-200 italic">
                            &quot;{testimonial.quote}&quot;
                        </p>
                        <FaQuoteRight size={20} className="text-teal-400 ml-auto mt-4" />
                        <p className="text-teal-400 font-bold mt-4">{testimonial.name}</p>
                        <p className="text-gray-300">{testimonial.position}</p>
                    </div>
                ))}
            </div>
        </motion.section>
    );
}

// Quality Assurance Features Data
interface Feature {
    title: string;
    description: string;
    icon: JSX.Element;
}

const qaFeatures: Feature[] = [
    {
        title: 'Standardized Assessments',
        description: 'Monthly standardized tests for Nursery to Class 8 students across all subjects.',
        icon: <FaFileAlt />,
    },
    {
        title: 'Real-time Analytics',
        description: 'Instant performance tracking with visual dashboards for schools and parents.',
        icon: <FaChartLine />,
    },
    {
        title: 'Curriculum Alignment',
        description: 'Tests designed according to national education standards and curricula.',
        icon: <FaCheckCircle />,
    },
    {
        title: 'Teacher Training',
        description: 'Professional development programs based on assessment insights.',
        icon: <FaChalkboardTeacher />,
    },
    {
        title: 'Progress Reports',
        description: 'Comprehensive reports with actionable recommendations for improvement.',
        icon: <FaSearchPlus />,
    },
    {
        title: 'Certification',
        description: 'Official certificates for students meeting quality benchmarks.',
        icon: <FaRegIdCard />,
    },
];

// Testimonials Data
interface Testimonial {
    quote: string;
    name: string;
    position: string;
}

const testimonials: Testimonial[] = [
    {
        quote: 'QAT has revolutionized our assessment process. The analytics dashboard is a game-changer!',
        name: 'Sarah Ahmed',
        position: 'Principal, Bright Future School',
    },
    {
        quote: "Our teachers have improved their methods significantly using QAT's feedback system.",
        name: 'Michael Chen',
        position: 'Academic Coordinator',
    },
    {
        quote: 'The certification program has motivated our students to perform better.',
        name: 'Aisha Patel',
        position: 'Parent Representative',
    },
    {
        quote: 'The real-time analytics feature helps us track student progress effectively.',
        name: 'David Johnson',
        position: "Headmaster, St. Mary's School",
    },
    {
        quote: "QAT's curriculum alignment ensures that our students are learning relevant skills.",
        name: 'Fatima Khan',
        position: 'Vice Principal, Modern Education Institute',
    },
    {
        quote: 'The teacher training programs have empowered our educators to deliver better results.',
        name: 'James Wilson',
        position: 'Director of Academics, Global Learning Center',
    },
];

// Benefits Data
const benefits: string[] = [
    'Detailed performance analytics with actionable insights',
    'Customized improvement plans for schools and teachers',
    'National benchmarking for competitive performance tracking',
    'Certification for top-performing students and institutions',
    'Enhanced teaching methodologies based on real-time feedback',
    'Access to professional development programs for educators',
];