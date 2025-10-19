'use client';
import {
    FaRobot, FaBrain, FaServer, FaUniversity, FaMoneyBillWave,
    FaChartLine, FaShieldAlt, FaHandshake, FaCode, FaPython,
    FaAward, FaBookOpen, FaChartBar, FaQuoteLeft, FaGraduationCap,
    FaBriefcase, FaClock, FaStar, FaCloud, FaLaptop, FaChild,
    FaMicroscope, FaLightbulb, FaBookReader
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Montserrat } from 'next/font/google';
import { useState } from 'react';
import Link from 'next/link';
import Image from "next/image";

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400', '600', '700'],
});

const stats = [
    { value: '96%', label: 'Job Placement Rate' },
    { value: '70%', label: 'Cost Savings vs Competitors' },
    { value: '200+', label: 'Industry Partners' },
    { value: '24/7', label: 'Student Support' }
];


const careerPaths = [
    {
        title: "Full-Stack Software Engineer",
        salary: "$80K – $120K",
        freelance: "$50 – $80/hr",
        description: "Build scalable applications integrating front-end and back-end with cloud services.",
        icon: <FaCode className="text-blue-500 text-2xl" />
    },
    {
        title: "Data Science Analyst",
        salary: "$90K – $130K",
        freelance: "$40 – $70/hr",
        description: "Analyze data with statistical modeling and AI-driven insights for impactful decisions.",
        icon: <FaChartBar className="text-green-500 text-2xl" />
    },
    {
        title: "Machine Learning Systems Engineer",
        salary: "$100K – $150K",
        freelance: "$60 – $100/hr",
        description: "Deploy and optimize ML models for high-performance production environments.",
        icon: <FaBrain className="text-purple-500 text-2xl" />
    },
    {
        title: "Deep Learning Research Engineer",
        salary: "$120K – $180K",
        freelance: "$80 – $120/hr",
        description: "Pioneer advanced neural networks and cutting-edge AI research.",
        icon: <FaGraduationCap className="text-red-500 text-2xl" />
    },
    {
        title: "AI Solutions Architect",
        salary: "$130K – $200K",
        freelance: "$100 – $150/hr",
        description: "Design end-to-end AI solutions tailored to business objectives.",
        icon: <FaShieldAlt className="text-orange-500 text-2xl" />
    },
    {
        title: "Cloud AI Infrastructure Engineer",
        salary: "$100K – $160K",
        freelance: "$70 – $120/hr",
        description: "Manage scalable cloud platforms for AI workloads with high efficiency.",
        icon: <FaCloud className="text-indigo-500 text-2xl" />
    }
];

const admissionSyllabus = [
    "Lesson 1 Introduction to Autonomous Systems and Robotics",
    "Lesson 2 Fundamentals of Systems Engineering",
    "Lesson 3 Sensors and Data Acquisition",
    "Lesson 4 Perception and Computer Vision",
    "Lesson 5 Machine Learning for Autonomous Systems",
    "Lesson 6 Control Systems and Dynamics",
    "Lesson 7 Software Development for Robotics",
    "Lesson 8 Next.js and Tailwind CSS for UX/UI",
    "Lesson 9 Cloud Computing and IoT Integration",
    "Lesson 10 Internet and Information Technology",
    "Lesson 11 Database Management Systems (DBMS)",
    "Lesson 12 Autonomous Navigation and Path Planning",
    "Lesson 13 Ethical and Social Considerations",
    "Lesson 14 Practical Applications and Case Studies",
    "Lesson 15 Mathematics and Probability Foundations",
    "Lesson 16 Research Methods and Problem Solving",
    "Lesson 17 Test Preparation Tips"
];

const kgPrograms = [
    {
        term: "Term-0",
        title: "Tiny Stars",
        icon: <FaChild className="text-pink-500 text-3xl" />,
        description: "Spark curiosity with play-based learning and foundational concepts."
    },
    {
        term: "Term-I",
        title: "Little Coders",
        icon: <FaCode className="text-blue-500 text-3xl" />,
        description: "Learn coding basics through fun, visual programming tools and games."
    },
    {
        term: "Term-II",
        title: "STEM Explorers",
        icon: <FaMicroscope className="text-green-500 text-3xl" />,
        description: "Dive into hands-on science, tech, engineering, and math adventures."
    },
    {
        term: "Term-III",
        title: "Entrepreneurs",
        icon: <FaLightbulb className="text-yellow-500 text-3xl" />,
        description: "Develop creative problem-solving and basic business skills."
    },
    {
        term: "Term-IV",
        title: "Phonics Wizards",
        icon: <FaBookReader className="text-purple-500 text-3xl" />,
        description: "Master reading fundamentals through phonics and literacy activities."
    }
];

// Fee Structure Component for MCASCE
const MCASCEFeeStructure = () => {
    const discountTiers = [
        { score: "90% and above", discount: "100% waiver", monthlyFee: "$0/month", note: "Only $70 registration fee" },
        { score: "80% – 89%", discount: "75% waiver", monthlyFee: "$8.75/month", note: "" },
        { score: "70% – 79%", discount: "50% waiver", monthlyFee: "$17.50/month", note: "" },
        { score: "65% – 69%", discount: "35% waiver", monthlyFee: "$22.75/month", note: "" },
        { score: "60% – 64%", discount: "No waiver", monthlyFee: "$35/month", note: "" }
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-indigo-50 to-blue-50 p-8 rounded-xl shadow-lg"
        >
            <h3 className="text-3xl font-bold mb-6 text-indigo-900">MCASCE Program Fee Structure</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg text-center shadow-sm">
                    <div className="text-4xl font-bold text-indigo-600 mb-2">$70</div>
                    <div className="text-gray-700 font-medium">Registration Fee</div>
                    <div className="text-sm text-gray-500 mt-2">One-time, non-refundable</div>
                </div>
                <div className="bg-white p-6 rounded-lg text-center shadow-sm">
                    <div className="text-4xl font-bold text-indigo-600 mb-2">$35</div>
                    <div className="text-gray-700 font-medium">Standard Monthly Fee</div>
                    <div className="text-sm text-gray-500 mt-2">Before discounts</div>
                </div>
                <div className="bg-white p-6 rounded-lg text-center shadow-sm">
                    <div className="text-4xl font-bold text-indigo-600 mb-2">24</div>
                    <div className="text-gray-700 font-medium">Program Duration</div>
                    <div className="text-sm text-gray-500 mt-2">Months (includes training)</div>
                </div>
            </div>
            <div className="bg-white p-6 rounded-lg mb-6">
                <h4 className="text-xl font-semibold mb-4 text-gray-800">Merit-Based Tuition Discounts</h4>
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                        <tr>
                            <th className="px-4 py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">Exam Score</th>
                            <th className="px-4 py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">Discount</th>
                            <th className="px-4 py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">Monthly Fee</th>
                            <th className="px-4 py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">Notes</th>
                        </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                        {discountTiers.map((tier, index) => (
                            <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{tier.score}</td>
                                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-600">{tier.discount}</td>
                                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-600">{tier.monthlyFee}</td>
                                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-600">{tier.note}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
                <div className="mt-4 text-sm text-gray-600">
                    <p className="font-semibold">Additional Notes:</p>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                        <li>Discounts apply only to monthly fees; $70 registration fee is mandatory.</li>
                        <li>Maintain 75%+ in monthly assessments to retain discounts.</li>
                        <li>Fees include cloud/AI lab access, mentorship, and certification.</li>
                        <li>Score 90%+ in semester exams for a full next-semester fee waiver.</li>
                    </ul>
                </div>
                <div className="mt-6 text-center">
                    <Link href="/pages/apply" legacyBehavior>
                        <a className="bg-indigo-600 text-white hover:bg-indigo-700 px-6 py-3 rounded-full font-bold text-lg">
                            Apply Online for MCASCE
                        </a>
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};

// Fee Structure Component for Kindergarten
const KindergartenFeeStructure = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-xl shadow-lg"
        >
            <h3 className="text-3xl font-bold mb-6 text-purple-900">Kindergarten STEM Entrepreneurs Fees</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg text-center shadow-sm">
                    <div className="text-4xl font-bold text-purple-600 mb-2">$70</div>
                    <div className="text-gray-700 font-medium">Registration Fee</div>
                    <div className="text-sm text-gray-500 mt-2">One-time, non-refundable</div>
                </div>
                <div className="bg-white p-6 rounded-lg text-center shadow-sm">
                    <div className="text-4xl font-bold text-purple-600 mb-2">$35</div>
                    <div className="text-gray-700 font-medium">Monthly Fee</div>
                    <div className="text-sm text-gray-500 mt-2">Per student</div>
                </div>
                <div className="bg-white p-6 rounded-lg text-center shadow-sm">
                    <div className="text-4xl font-bold text-purple-600 mb-2">48</div>
                    <div className="text-gray-700 font-medium">Classes Per Year</div>
                    <div className="text-sm text-gray-500 mt-2">12 weeks per term</div>
                </div>
            </div>
            <div className="bg-white p-6 rounded-lg">
                <h4 className="text-xl font-semibold mb-4 text-gray-800">Program Details</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <h5 className="font-medium text-gray-800 mb-2">Program Structure</h5>
                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                            <li>4 terms per year</li>
                            <li>12 weeks per term</li>
                            <li>36 classes per term</li>
                            <li>3 sessions per week</li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="font-medium text-gray-800 mb-2">What’s Included</h5>
                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                            <li>All learning materials</li>
                            <li>STEM activity kits</li>
                            <li>Progress reports</li>
                            <li>Certificate of completion</li>
                        </ul>
                    </div>
                </div>
                <div className="mt-6 p-4 bg-purple-100 rounded-lg">
                    <p className="text-purple-800 font-semibold">
                        Special Offer: 15% discount on monthly fees for siblings
                    </p>
                </div>
                <div className="mt-6 text-center">
                    <Link href="/pages/apply" legacyBehavior>
                        <a className="bg-purple-600 text-white hover:bg-purple-700 px-6 py-3 rounded-full font-bold text-lg">
                            Apply Online for Kindergarten
                        </a>
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};

// Admission Eligibility Component
const AdmissionEligibility = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-xl shadow-lg"
        >
            <h3 className="text-3xl font-bold mb-6 text-indigo-900">Admission Test Eligibility</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h4 className="text-xl font-semibold mb-4 text-gray-800">Program Details</h4>
                    <ul className="space-y-3">
                        <li className="flex items-start">
                            <FaStar className="text-indigo-500 mr-2 mt-1" />
                            <span className="text-gray-600"><strong>Program:</strong> Mansha Certified Autonomous Systems and Cloud Engineer (MCASCE)</span>
                        </li>
                        <li className="flex items-start">
                            <FaStar className="text-indigo-500 mr-2 mt-1" />
                            <span className="text-gray-600"><strong>Duration:</strong> 24 months (1-month on-job training + 2-month final project)</span>
                        </li>
                        <li className="flex items-start">
                            <FaStar className="text-indigo-500 mr-2 mt-1" />
                            <span className="text-gray-600"><strong>Test Fee:</strong> $5</span>
                        </li>
                        <li className="flex items-start">
                            <FaStar className="text-indigo-500 mr-2 mt-1" />
                            <span className="text-gray-600"><strong>Language:</strong> Academic English proficiency</span>
                        </li>
                        <li className="flex items-start">
                            <FaStar className="text-indigo-500 mr-2 mt-1" />
                            <span className="text-gray-600"><strong>Requirements:</strong> Laptop/PC + Internet</span>
                        </li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-xl font-semibold mb-4 text-gray-800">Eligibility Requirements</h4>
                    <ul className="space-y-3">
                        <li className="flex items-start">
                            <FaStar className="text-indigo-500 mr-2 mt-1" />
                            <span className="text-gray-600">Priority for Bachelor’s in CS, IT, Math, Stats, or Economics</span>
                        </li>
                        <li className="flex items-start">
                            <FaStar className="text-indigo-500 mr-2 mt-1" />
                            <span className="text-gray-600">Others: Strong programming/math foundation (self-taught or certified)</span>
                        </li>
                    </ul>
                    <h4 className="text-xl font-semibold mt-6 mb-4 text-gray-800">Admission Test Syllabus</h4>
                    <p className="text-gray-600 mb-2">Basics of Autonomous Systems & Robotics (BASR):</p>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                        {admissionSyllabus.slice(0, 3).map((topic, index) => (
                            <li key={index}>{topic}</li>
                        ))}
                        <li className="mt-1">And 6 more topics...</li>
                    </ul>
                </div>
            </div>
            <div className="mt-6 text-center">
                <Link href="/pages/apply" legacyBehavior>
                    <a className="bg-indigo-600 text-white hover:bg-indigo-700 px-6 py-3 rounded-full font-bold text-lg">
                        Apply Online for MCASCE
                    </a>
                </Link>
            </div>
        </motion.div>
    );
};

// Career Paths Component
const CareerPaths = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-xl shadow-lg"
        >
            <h3 className="text-3xl font-bold mb-6 text-indigo-900">Career Pathways</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {careerPaths.map((career, index) => (
                    <div key={index} className="border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-shadow">
                        <div className="flex items-start mb-4">
                            <div className="mr-4">{career.icon}</div>
                            <div>
                                <h4 className="text-lg font-semibold text-gray-800">{career.title}</h4>
                                <p className="text-indigo-600 font-medium">{career.salary}</p>
                                <p className="text-blue-500 text-sm">{career.freelance} freelance</p>
                            </div>
                        </div>
                        <p className="text-gray-600">{career.description}</p>
                    </div>
                ))}
            </div>
        </motion.div>
    );
};

// Kindergarten Program Component
const KindergartenProgram = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-xl shadow-lg"
        >
            <h3 className="text-3xl font-bold mb-6 text-purple-900">Kindergarten STEM Entrepreneurs</h3>
            <div className="prose max-w-none mb-8">
                <p className="text-lg text-gray-700 mb-6">
                    Ignite young minds with USAI Kindergarten’s innovative program! Spanning four 12-week terms, with 36 classes per term and three sessions weekly, our curriculum fosters creativity and critical thinking through coding, STEM, entrepreneurship, and phonics.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                    From Tiny Stars to Phonics Wizards, students build essential skills for a tech-driven future, preparing them to thrive as future innovators and leaders.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
                {kgPrograms.map((program, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow-sm text-center">
                        <div className="flex justify-center mb-3">{program.icon}</div>
                        <h4 className="font-semibold text-gray-800">{program.term}</h4>
                        <h5 className="text-lg font-bold text-purple-600 mb-2">{program.title}</h5>
                        <p className="text-sm text-gray-600">{program.description}</p>
                    </div>
                ))}
            </div>
            <div className="bg-white p-6 rounded-lg">
                <h4 className="text-xl font-semibold mb-4 text-gray-800">Program Structure</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li><strong>4 Terms:</strong> 12 weeks each</li>
                    <li><strong>36 Classes:</strong> 3 sessions per week</li>
                    <li><strong>Curriculum:</strong> Coding, STEM, entrepreneurship, phonics</li>
                    <li><strong>Outcomes:</strong> Creativity, critical thinking, lifelong skills</li>
                </ul>
                <div className="mt-6 text-center">
                    <Link href="/usai/apply" legacyBehavior>
                        <a className="bg-purple-600 text-white hover:bg-purple-700 px-6 py-3 rounded-full font-bold text-lg">
                            Apply Online for Kindergarten
                        </a>
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};

export default function MVITTariffPage() {
    const [expandedSyllabus, setExpandedSyllabus] = useState(false);

    return (
        <div className={`min-h-screen bg-gray-50 ${montserrat.className}`}>
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-indigo-900 to-blue-600 text-white py-32 px-4 overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('/pattern-tech.jpg')] bg-cover bg-center"></div>
                <div className="container mx-auto relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-6xl font-bold mb-6"
                    >
                        MVIT Tariff & MCASCE Certification
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="text-2xl md:text-3xl mb-8"
                    >
                        Admission Fee: $70 | Monthly Fee: $35 for All Programs
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="max-w-3xl mx-auto"
                    >
                        <h2 className="text-3xl md:text-4xl font-semibold mb-6">Master MCASCE: Lead the Future</h2>
                        <p className="text-lg md:text-xl mb-8">
                            The Mansha Certified Autonomous Systems and Cloud Engineer (MCASCE) is the industry’s top-trending certification, empowering you with skills in robotics, AI, and cloud computing to shape tomorrow’s innovations.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link href="/pages/apply" legacyBehavior>
                                <a className="bg-yellow-400 text-indigo-900 hover:bg-yellow-300 px-8 py-4 rounded-full font-bold text-lg">
                                    Apply for MCASCE
                                </a>
                            </Link>
                            <Link href="/usai/apply" legacyBehavior>
                                <a className="bg-purple-600 text-white hover:bg-purple-700 px-8 py-4 rounded-full font-bold text-lg">
                                    Apply for Kindergarten
                                </a>
                            </Link>
                            <a href="#admission" className="bg-transparent border-2 border-white hover:bg-white hover:text-indigo-900 px-8 py-4 rounded-full font-bold text-lg">
                                Explore Details
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="container mx-auto py-16 px-4">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6"
                >
                    {stats.map((stat, index) => (
                        <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center">
                            <div className="text-3xl font-bold text-indigo-600 mb-2">{stat.value}</div>
                            <div className="text-gray-7
System: 00">{stat.label}</div>
                        </div>
                    ))}
                </motion.div>
            </section>

            {/* Program Overview */}
            <section className="container mx-auto py-16 px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-4">Why Choose MCASCE?</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Unlock cutting-edge skills in autonomous systems and cloud engineering with a certification designed for industry leaders.
                    </p>
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white p-8 rounded-xl shadow-lg"
                >
                    <div className="prose max-w-none">
                        <p className="text-lg text-gray-700 mb-6">
                            The <strong>MCASCE certification</strong> is your gateway to mastering robotics, AI, and cloud computing. Learn to design intelligent, scalable systems for industries like autonomous vehicles, smart manufacturing, and IoT.
                        </p>
                        <p className="text-lg text-gray-700 mb-6">
                            With hands-on labs, real-world projects, and expert mentorship, you’ll gain proficiency in ROS, AWS, TensorFlow, and more, positioning you at the forefront of technological innovation.
                        </p>
                        <p className="text-lg text-gray-700">
                            Join a global community of innovators and accelerate your career with a credential that employers trust.
                        </p>
                        <div className="mt-6 text-center">
                            <Link href="/pages/apply" legacyBehavior>
                                <a className="bg-indigo-600 text-white hover:bg-indigo-700 px-6 py-3 rounded-full font-bold text-lg">
                                    Apply Online for MCASCE
                                </a>
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Kindergarten Program Section */}
            <section className="container mx-auto py-16 px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-4">
                        Kindergarten STEM Entrepreneurs Program
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Inspire the next generation with a program that blends coding, STEM, and creativity.
                    </p>
                </div>
                <KindergartenProgram />
            </section>

            {/* Admission Eligibility */}
            <section id="admission" className="container mx-auto py-16 px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-4">Admission Information</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Start your journey with MVIT’s accessible and merit-based admission process.
                    </p>
                </div>
                <AdmissionEligibility />
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mt-8 bg-white p-8 rounded-xl shadow-lg"
                >
                    <h4 className="text-xl font-semibold mb-4 text-gray-800">Full Admission Test Syllabus</h4>
                    <p className="text-gray-600 mb-4">
                        The <Link className={'text-blue-500 font-bold '} href={'https://github.com/drsagher/MCASCE/blob/main/00_BASR/Readme.md'} target={'_blank'}>BASR syllabus</Link> covers essential concepts in robotics, automation, and intelligent systems.
                    </p>
                    {!expandedSyllabus ? (
                        <button
                            onClick={() => setExpandedSyllabus(true)}
                            className="text-indigo-600 hover:text-indigo-800 font-medium"
                        >
                            Show Full Syllabus →
                        </button>
                    ) : (
                        <div>
                            <ul className="list-disc list-inside text-gray-600 space-y-2">
                                {admissionSyllabus.map((topic, index) => (
                                    <li key={index}>{topic}</li>
                                ))}
                            </ul>
                            <p className="mt-4 text-sm text-gray-500">
                                BASR ensures a strong foundation for AI-driven robotics and cloud-enabled autonomy.
                            </p>
                            <button
                                onClick={() => setExpandedSyllabus(false)}
                                className="mt-4 text-indigo-600 hover:text-indigo-800 font-medium"
                            >
                                Show Less
                            </button>
                        </div>
                    )}
                </motion.div>
            </section>

            {/* Fee Structures */}
            <section className="container mx-auto py-16 px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-4">Tuition & Fees</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Affordable, merit-based pricing for MCASCE and Kindergarten programs.
                    </p>
                </div>
                <MCASCEFeeStructure />
                <div className="mt-12">
                    <KindergartenFeeStructure />
                </div>
            </section>

            {/* Career Paths Section */}
            <section className="container mx-auto py-16 px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-4">Career Opportunities</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        MCASCE opens doors to lucrative roles in autonomous systems and cloud engineering.
                    </p>
                </div>
                <CareerPaths />
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mt-8 bg-indigo-50 p-6 rounded-xl"
                >
                    <h4 className="text-xl font-semibold mb-3 text-gray-800">Key Takeaways</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li><strong>Freelance Rates:</strong> $40–$150/hour for AI and cloud projects</li>
                        <li><strong>Leadership Roles:</strong> Progress to CTO or VP positions</li>
                        <li><strong>Startup Demand:</strong> High need for deep learning expertise</li>
                        <li><strong>Global Reach:</strong> Skills transferable across US, EU, and APAC markets</li>
                    </ul>
                </motion.div>
            </section>


            {/* Final CTA */}
            <section className="bg-gradient-to-br from-indigo-900 to-blue-600 rounded-2xl p-12 text-center text-white mx-4 my-16">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl font-bold mb-6"
                >
                    Shape the Future with MVIT
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="text-xl mb-8 max-w-2xl mx-auto"
                >
                    Join our MCASCE or Kindergarten programs and unlock your potential with affordable, merit-based education.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className="flex flex-col sm:flex-row justify-center gap-4"
                >
                    <Link href="/pages/apply" legacyBehavior>
                        <a className="bg-yellow-400 text-indigo-900 hover:bg-yellow-300 px-8 py-4 rounded-full font-bold text-lg">
                            Apply for MCASCE
                        </a>
                    </Link>
                    <Link href="/pages/apply" legacyBehavior>
                        <a className="bg-purple-600 text-white hover:bg-purple-700 px-8 py-4 rounded-full font-bold text-lg">
                            Apply for Kindergarten
                        </a>
                    </Link>
                </motion.div>
            </section>
        </div>
    );
}