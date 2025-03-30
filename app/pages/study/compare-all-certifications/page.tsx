'use client';

import { FaRobot, FaCode, FaGraduationCap, FaBriefcase, FaChartLine } from 'react-icons/fa';
import { SiHiveBlockchain, SiNextdotjs, SiPython, SiPhp, SiLaravel } from 'react-icons/si';
import { motion } from 'framer-motion';
import { TbBrandGolang } from "react-icons/tb";
import Link from "next/link";

interface Certification {
    id: string;
    name: string;
    provider: string;
    category: string;
    duration: string;
    cost: string;
    difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
    exam: string;
    recognition: string;
    salaryBoost: string;
    icon: React.ReactNode;
}

export default function CertificationComparison() {
    // Standardized pricing and duration
    const STANDARD_DURATION = '2 years';
    const ADMISSION_FEE = '$50';
    const MONTHLY_FEE = '$20/month';
    const TOTAL_COST = `${ADMISSION_FEE} + ${MONTHLY_FEE} (Total: $530)`;

    // Certification data
    const certifications: Certification[] = [
        {
            id: 'mrse',
            name: 'Mansha Robotics and Software Engineer',
            provider: 'Mansha Robotics',
            category: 'Software Engineering',
            duration: STANDARD_DURATION,
            cost: TOTAL_COST,
            difficulty: 'Advanced',
            exam: 'Practical project + written test',
            recognition: 'Industry-recognized',
            salaryBoost: '30-50%',
            icon: <FaRobot className="text-red-500 text-2xl" />
        },
        {
            id: 'mcaad',
            name: 'Mansha Certified AI Agents Developer',
            provider: 'Mansha Robotics',
            category: 'Artificial Intelligence',
            duration: STANDARD_DURATION,
            cost: TOTAL_COST,
            difficulty: 'Advanced',
            exam: 'AI agent development project',
            recognition: 'Emerging standard',
            salaryBoost: '40-60%',
            icon: <FaRobot className="text-blue-500 text-2xl" />
        },
        {
            id: 'omaip',
            name: 'Office Management, AI and Prompt Engineering',
            provider: 'Mansha Robotics',
            category: 'Business Technology',
            duration: STANDARD_DURATION,
            cost: TOTAL_COST,
            difficulty: 'Intermediate',
            exam: 'Case studies + practical exam',
            recognition: 'Niche specialization',
            salaryBoost: '25-40%',
            icon: <FaBriefcase className="text-green-500 text-2xl" />
        },
        {
            id: 'mcbt',
            name: 'Mansha Certified Blockchain Technician',
            provider: 'Mansha Robotics',
            category: 'Blockchain',
            duration: STANDARD_DURATION,
            cost: TOTAL_COST,
            difficulty: 'Advanced',
            exam: 'Smart contract development',
            recognition: 'Industry-recognized',
            salaryBoost: '35-55%',
            icon: <SiHiveBlockchain className="text-purple-500 text-2xl" />
        },
        {
            id: 'fsnext',
            name: 'Full Stack Development with Next.js',
            provider: 'Mansha Robotics',
            category: 'Web Development',
            duration: STANDARD_DURATION,
            cost: TOTAL_COST,
            difficulty: 'Intermediate',
            exam: 'Full-stack project',
            recognition: 'High demand',
            salaryBoost: '30-45%',
            icon: <SiNextdotjs className="text-gray-800 text-2xl" />
        },
        {
            id: 'ngpy',
            name: 'Next-Generation Web Development with Python',
            provider: 'Mansha Robotics',
            category: 'Web Development',
            duration: STANDARD_DURATION,
            cost: TOTAL_COST,
            difficulty: 'Advanced',
            exam: 'Python web application',
            recognition: 'High demand',
            salaryBoost: '35-50%',
            icon: <SiPython className="text-yellow-500 text-2xl" />
        },
        {
            id: 'fsp',
            name: 'Full Stack PHP Development',
            provider: 'Mansha Robotics',
            category: 'Web Development',
            duration: STANDARD_DURATION,
            cost: TOTAL_COST,
            difficulty: 'Intermediate',
            exam: 'PHP application',
            recognition: 'Established standard',
            salaryBoost: '20-35%',
            icon: <SiPhp className="text-indigo-500 text-2xl" />
        },
        {
            id: 'kgse',
            name: 'Kindergarten (K.G.) STEM Entrepreneurs',
            provider: 'Mansha Robotics',
            category: 'Education',
            duration: STANDARD_DURATION,
            cost: TOTAL_COST,
            difficulty: 'Beginner',
            exam: 'Teaching demonstration',
            recognition: 'Niche',
            salaryBoost: '15-25%',
            icon: <FaGraduationCap className="text-pink-500 text-2xl" />
        },
        {
            id: 'ccit',
            name: 'Corporate Communication for IT Professionals',
            provider: 'Mansha Robotics',
            category: 'Professional Skills',
            duration: STANDARD_DURATION,
            cost: TOTAL_COST,
            difficulty: 'Beginner',
            exam: 'Presentations + reports',
            recognition: 'Soft skills',
            salaryBoost: '15-30%',
            icon: <FaChartLine className="text-teal-500 text-2xl" />
        },
        {
            id: 'omwe',
            name: 'Office Management and Work Ethics',
            provider: 'Mansha Robotics',
            category: 'Professional Skills',
            duration: STANDARD_DURATION,
            cost: TOTAL_COST,
            difficulty: 'Beginner',
            exam: 'Case studies',
            recognition: 'Fundamental',
            salaryBoost: '10-20%',
            icon: <FaBriefcase className="text-orange-500 text-2xl" />
        },
        {
            id: 'rtd',
            name: 'Research and Thesis Development',
            provider: 'Mansha Robotics',
            category: 'Academic',
            duration: STANDARD_DURATION,
            cost: TOTAL_COST,
            difficulty: 'Advanced',
            exam: 'Research paper',
            recognition: 'Academic',
            salaryBoost: '20-35%',
            icon: <FaGraduationCap className="text-blue-600 text-2xl" />
        },
        {
            id: 'gae',
            name: 'Golang API Engineer',
            provider: 'Mansha Robotics',
            category: 'Backend Development',
            duration: STANDARD_DURATION,
            cost: TOTAL_COST,
            difficulty: 'Advanced',
            exam: 'API development project',
            recognition: 'High demand',
            salaryBoost: '35-50%',
            icon: <TbBrandGolang className="text-blue-400 text-2xl" />
        },
        {
            id: 'lfe',
            name: 'Laravel Fullstack Engineer',
            provider: 'Mansha Robotics',
            category: 'Web Development',
            duration: STANDARD_DURATION,
            cost: TOTAL_COST,
            difficulty: 'Intermediate',
            exam: 'Laravel application',
            recognition: 'PHP standard',
            salaryBoost: '30-45%',
            icon: <SiLaravel className="text-red-600 text-2xl" />
        }
    ];

    // Animation variants
    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                duration: 0.5
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 py-12 px-6 relative overflow-hidden">
            {/* Floating gradient elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-20 w-80 h-80 rounded-full bg-purple-600/10 blur-3xl"></div>
                <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-blue-600/10 blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full bg-red-600/10 blur-3xl"></div>
            </div>

            {/* Header */}
            <div className="max-w-6xl mx-auto text-center mb-16 relative z-10 backdrop-blur-sm bg-white/5 rounded-2xl p-8 border border-white/10 shadow-lg">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-blue-400">
            Mansha Robotics Certifications
          </span>
                </h1>
                <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 p-4 rounded-lg inline-block">
                    <p className="text-lg text-white">
                        <span className="font-bold">Standard Pricing:</span> {ADMISSION_FEE} admission + {MONTHLY_FEE} (Total $530 for 2 years)
                    </p>
                </div>
            </div>

            {/* Comparison Table */}
            <div className="max-w-6xl mx-auto relative z-10 backdrop-blur-sm bg-white/5 rounded-2xl shadow-2xl overflow-hidden border border-white/10 mb-16">
                {/* Table Header */}
                <div className="grid grid-cols-12 bg-gradient-to-r from-purple-900/50 to-blue-900/50 p-4 border-b border-white/10 sticky top-0 z-10">
                    <div className="col-span-4 font-semibold text-white">Certification</div>
                    <div className="col-span-2 font-semibold text-white">Category</div>
                    <div className="col-span-1 font-semibold text-white">Duration</div>
                    <div className="col-span-2 font-semibold text-white">Cost</div>
                    <div className="col-span-1 font-semibold text-white">Difficulty</div>
                    <div className="col-span-2 font-semibold text-white">Salary Boost</div>
                </div>

                {/* Table Body */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="divide-y divide-white/10"
                >
                    {certifications.map((cert) => (
                        <motion.div
                            key={cert.id}
                            variants={item}
                            whileHover={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
                            className="grid grid-cols-12 p-4 items-center hover:bg-white/5 transition-colors"
                        >
                            <div className="col-span-4 flex items-center">
                                <div className="mr-4">{cert.icon}</div>
                                <div>
                                    <h3 className="font-medium text-white">{cert.name}</h3>
                                    <p className="text-sm text-gray-400">{cert.exam}</p>
                                </div>
                            </div>
                            <div className="col-span-2 text-gray-300">{cert.category}</div>
                            <div className="col-span-1 text-gray-300">{cert.duration}</div>
                            <div className="col-span-2 text-gray-300">{cert.cost}</div>
                            <div className="col-span-1">
                <span className={`px-2 py-1 text-xs rounded-full ${
                    cert.difficulty === 'Beginner' ? 'bg-green-900/50 text-green-300' :
                        cert.difficulty === 'Intermediate' ? 'bg-blue-900/50 text-blue-300' :
                            'bg-purple-900/50 text-purple-300'
                }`}>
                  {cert.difficulty}
                </span>
                            </div>
                            <div className="col-span-2">
                                <div className="flex items-center">
                                    <div className="w-full bg-gray-800 rounded-full h-2 mr-2">
                                        <div
                                            className={`h-2 rounded-full ${
                                                cert.salaryBoost === '40-60%' ? 'bg-gradient-to-r from-green-400 to-green-600 w-full' :
                                                    cert.salaryBoost === '35-55%' ? 'bg-gradient-to-r from-blue-400 to-blue-600 w-5/6' :
                                                        cert.salaryBoost === '30-50%' ? 'bg-gradient-to-r from-purple-400 to-purple-600 w-3/4' :
                                                            'bg-gradient-to-r from-gray-400 to-gray-600 w-1/2'
                                            }`}
                                        ></div>
                                    </div>
                                    <span className="text-sm font-medium text-white">{cert.salaryBoost}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Value Proposition */}
            <div className="max-w-6xl mx-auto relative z-10 backdrop-blur-sm bg-gradient-to-r from-purple-900/50 to-blue-900/50 rounded-2xl p-8 border border-white/10 mb-16">
                <h2 className="text-2xl font-bold text-white mb-4 text-center">Why Choose Mansha Robotics Certifications?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                        <h3 className="text-lg font-semibold text-white mb-2 flex items-center">
                            <FaChartLine className="text-green-400 mr-2" />
                            Affordable Excellence
                        </h3>
                        <p className="text-gray-300">
                            Only {ADMISSION_FEE} admission and {MONTHLY_FEE} for industry-leading certification programs.
                        </p>
                    </div>
                    <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                        <h3 className="text-lg font-semibold text-white mb-2 flex items-center">
                            <FaBriefcase className="text-blue-400 mr-2" />
                            Career-Focused
                        </h3>
                        <p className="text-gray-300">
                            All programs include practical projects that build your professional portfolio.
                        </p>
                    </div>
                    <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                        <h3 className="text-lg font-semibold text-white mb-2 flex items-center">
                            <FaRobot className="text-purple-400 mr-2" />
                            Future-Ready Skills
                        </h3>
                        <p className="text-gray-300">
                            Curriculum updated quarterly to reflect the latest industry trends.
                        </p>
                    </div>
                </div>
            </div>

            {/* CTA */}
            <div className="max-w-6xl mx-auto text-center relative z-10">
                <Link href={'/pages/apply'} className="bg-gradient-to-r from-red-600 to-blue-600 text-white font-medium py-3 px-8 rounded-full hover:shadow-lg hover:from-red-500 hover:to-blue-500 transition-all shadow-lg text-lg">
                    Enroll Now - Limited Seats Available
                </Link>
                <p className="text-gray-400 mt-4">
                    Next intake starts on {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                </p>
            </div>
        </div>
    );
}