'use client';
import {
    FaRobot, FaBrain, FaServer, FaUniversity, FaMoneyBillWave,
    FaChartLine, FaShieldAlt, FaHandshake, FaCode, FaPython,
    FaPhp, FaLaptopCode, FaChalkboardTeacher, FaClipboardList,
    FaUsers, FaSearch, FaConnectdevelop, FaGraduationCap,
    FaAward, FaBookOpen, FaChartBar, FaQuoteLeft, FaQuoteRight,
    FaBriefcase, FaClock, FaStar, FaInfinity, FaFlask,
    FaCloud, FaShoppingCart
} from 'react-icons/fa';
import { SiUdacity, SiCoursera, SiEdx, SiHiveBlockchain, SiIbm, SiLaravel, SiUdemy } from "react-icons/si";
import { motion } from 'framer-motion';
import { Montserrat } from 'next/font/google';
import { FaGolang } from "react-icons/fa6";
import { useState } from 'react';
import Link from 'next/link';

import Image from "next/image";

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400', '600', '700'],
});

type Certification = {
    id: number;
    name: string;
    icon: JSX.Element;
    duration: string;
    level: 'Beginner' | 'Intermediate' | 'Advanced';
    category: 'Advanced' | 'Beginner' | 'Business' | 'Technology';
    jobPlacementRate: number;
    mvitCost: {
        total: number;
        monthly: number;
        admission: number;
    };
    competitors: {
        name: string;
        icon: JSX.Element;
        cost: number;
        duration: string;
        advantages: string[];
    }[];
    mvitAdvantages: {
        title: string;
        description: string;
        icon: JSX.Element;
    }[];
    savings: Record<string, number>;
    careerPaths: string[];
};

const certificationComparison: Certification[] = [
    // Advanced Certifications
    {
        id: 1,
        name: 'Mansha Robotics and Software Engineer',
        icon: <FaRobot className="text-red-500" />,
        duration: '2 Years',
        level: 'Advanced',
        category: 'Advanced',
        jobPlacementRate: 94,
        mvitCost: {
            total: 530,
            monthly: 20,
            admission: 50
        },
        competitors: [
            {
                name: 'Udacity Robotics',
                icon: <SiUdacity className="text-blue-400" />,
                cost: 3990,
                duration: '10-12 Months',
                advantages: [
                    'Project reviews',
                    'Career services',
                    'Flexible schedule'
                ]
            },
            {
                name: 'Coursera (UPenn)',
                icon: <SiCoursera className="text-blue-500" />,
                cost: 2400,
                duration: '2 Years',
                advantages: [
                    'University credential',
                    'Academic curriculum',
                    'Peer networking'
                ]
            }
        ],
        mvitAdvantages: [
            {
                title: 'Hardware Kit Included',
                description: '$200 robotics hardware kit provided',
                icon: <FaFlask className="text-green-500" />
            },
            {
                title: 'Guaranteed Internship',
                description: '6-month industry internship',
                icon: <FaBriefcase className="text-blue-500" />
            },
            {
                title: '1-on-1 Mentorship',
                description: 'Weekly sessions with industry experts',
                icon: <FaGraduationCap className="text-purple-500" />
            }
        ],
        savings: {
            udacity: 87,
            coursera: 80
        },
        careerPaths: [
            'Robotics Engineer ($85k-$140k)',
            'Automation Specialist ($75k-$120k)',
            'AI System Integrator ($90k-$150k)'
        ]
    },
    {
        id: 2,
        name: 'Mansha Certified AI Agents Developer',
        icon: <FaBrain className="text-red-500" />,
        duration: '2 Years',
        level: 'Advanced',
        category: 'Advanced',
        jobPlacementRate: 92,
        mvitCost: {
            total: 530,
            monthly: 20,
            admission: 50
        },
        competitors: [
            {
                name: 'DeepLearning.AI',
                icon: <FaServer className="text-orange-500" />,
                cost: 1197,
                duration: '9 Months',
                advantages: [
                    'Andrew Ng curriculum',
                    'Technical depth',
                    'Specialized tracks'
                ]
            },
            {
                name: 'IBM AI Engineering',
                icon: <SiIbm className="text-blue-300" />,
                cost: 1000,
                duration: '6 Months',
                advantages: [
                    'IBM certification',
                    'Watson platform access',
                    'Enterprise focus'
                ]
            }
        ],
        mvitAdvantages: [
            {
                title: 'Real-world Projects',
                description: 'Build and deploy AI agents in production environments',
                icon: <FaServer className="text-green-500" />
            },
            {
                title: 'LLM Integration',
                description: 'Hands-on experience with large language models',
                icon: <FaBrain className="text-blue-500" />
            },
            {
                title: 'Portfolio Development',
                description: 'Create professional portfolio of AI projects',
                icon: <FaBookOpen className="text-purple-500" />
            }
        ],
        savings: {
            deeplearning: 60,
            ibm: 52
        },
        careerPaths: [
            'AI Developer ($100k-$180k)',
            'ML Engineer ($110k-$200k)',
            'Conversational AI Specialist ($95k-$160k)'
        ]
    },
    {
        id: 3,
        name: 'Mansha Certified Blockchain Technician',
        icon: <SiHiveBlockchain className="text-red-500" />,
        duration: '2 Years',
        level: 'Advanced',
        category: 'Advanced',
        jobPlacementRate: 89,
        mvitCost: {
            total: 530,
            monthly: 20,
            admission: 50
        },
        competitors: [
            {
                name: 'ConsenSys Academy',
                icon: <FaShieldAlt className="text-purple-400" />,
                cost: 995,
                duration: '8 Months',
                advantages: [
                    'Ethereum focus',
                    'Smart contract training',
                    'Developer community'
                ]
            },
            {
                name: 'Coursera Blockchain',
                icon: <SiCoursera className="text-blue-500" />,
                cost: 895,
                duration: '6 Months',
                advantages: [
                    'Academic approach',
                    'Broad overview',
                    'University recognition'
                ]
            }
        ],
        mvitAdvantages: [
            {
                title: 'Ethereum & Solana',
                description: 'Specialization in both major blockchain platforms',
                icon: <SiHiveBlockchain className="text-green-500" />
            },
            {
                title: 'NFT Marketplace',
                description: 'Build a complete NFT marketplace project',
                icon: <FaChartBar className="text-blue-500" />
            },
            {
                title: 'Smart Contract Auditing',
                description: 'Learn professional security auditing techniques',
                icon: <FaShieldAlt className="text-purple-500" />
            }
        ],
        savings: {
            consensys: 52,
            coursera: 46
        },
        careerPaths: [
            'Blockchain Developer ($90k-$160k)',
            'Smart Contract Engineer ($95k-$170k)',
            'Web3 Developer ($85k-$150k)'
        ]
    },
    {
        id: 4,
        name: 'Mansha Certified API Developer',
        icon: <FaServer className="text-red-500" />,
        duration: '18 Months',
        level: 'Advanced',
        category: 'Advanced',
        jobPlacementRate: 91,
        mvitCost: {
            total: 410,
            monthly: 20,
            admission: 50
        },
        competitors: [
            {
                name: 'Postman Academy',
                icon: <FaShieldAlt className="text-orange-400" />,
                cost: 495,
                duration: '5 Months',
                advantages: [
                    'API tooling focus',
                    'Industry recognition',
                    'Specialized content'
                ]
            },
            {
                name: 'Udemy API Mastery',
                icon: <SiUdemy className="text-blue-400" />,
                cost: 179,
                duration: '3 Months',
                advantages: [
                    'Affordable',
                    'Practical examples',
                    'Self-paced'
                ]
            }
        ],
        mvitAdvantages: [
            {
                title: 'REST & GraphQL',
                description: 'Master both API architectures',
                icon: <FaConnectdevelop className="text-green-500" />
            },
            {
                title: 'Authentication',
                description: 'Implement advanced security strategies',
                icon: <FaShieldAlt className="text-blue-500" />
            },
            {
                title: 'Rate Limiting',
                description: 'Design scalable API patterns',
                icon: <FaChartLine className="text-purple-500" />
            }
        ],
        savings: {
            postman: 27,
            udemy: -101
        },
        careerPaths: [
            'API Architect ($95k-$160k)',
            'Integration Engineer ($90k-$150k)',
            'Cloud Services Developer ($100k-$170k)'
        ]
    },

    // Beginner Certifications
    {
        id: 5,
        name: 'Full Stack Development with Next.js',
        icon: <FaCode className="text-red-500" />,
        duration: '12 Months',
        level: 'Beginner',
        category: 'Beginner',
        jobPlacementRate: 85,
        mvitCost: {
            total: 290,
            monthly: 20,
            admission: 50
        },
        competitors: [
            {
                name: 'Udemy Next.js Course',
                icon: <SiUdemy className="text-blue-400" />,
                cost: 129,
                duration: '3 Months',
                advantages: [
                    'Affordable',
                    'Project-based',
                    'Beginner friendly'
                ]
            },
            {
                name: 'Frontend Masters',
                icon: <FaUniversity className="text-gray-400" />,
                cost: 390,
                duration: '6 Months',
                advantages: [
                    'In-depth training',
                    'Live workshops',
                    'Professional instructors'
                ]
            }
        ],
        mvitAdvantages: [
            {
                title: 'Modern React',
                description: 'Learn latest React patterns and best practices',
                icon: <FaCode className="text-green-500" />
            },
            {
                title: 'Server-side Rendering',
                description: 'Master SSR for better SEO and performance',
                icon: <FaServer className="text-blue-500" />
            },
            {
                title: 'API Integration',
                description: 'Connect with backend services effectively',
                icon: <FaConnectdevelop className="text-purple-500" />
            }
        ],
        savings: {
            udemy: -86,
            frontendmasters: 38
        },
        careerPaths: [
            'Full Stack Developer ($75k-$130k)',
            'Frontend Engineer ($70k-$125k)',
            'UI/UX Developer ($65k-$115k)'
        ]
    },
    {
        id: 6,
        name: 'Full Stack PHP Development',
        icon: <FaPhp className="text-red-500" />,
        duration: '12 Months',
        level: 'Beginner',
        category: 'Beginner',
        jobPlacementRate: 82,
        mvitCost: {
            total: 290,
            monthly: 20,
            admission: 50
        },
        competitors: [
            {
                name: 'Laravel Official Training',
                icon: <SiLaravel className="text-red-300" />,
                cost: 249,
                duration: '3 Months',
                advantages: [
                    'Official curriculum',
                    'Community support',
                    'Focused content'
                ]
            },
            {
                name: 'Udemy PHP Course',
                icon: <SiUdemy className="text-blue-400" />,
                cost: 129,
                duration: '2 Months',
                advantages: [
                    'Low cost',
                    'Project-based',
                    'Beginner friendly'
                ]
            }
        ],
        mvitAdvantages: [
            {
                title: 'Modern PHP',
                description: 'Learn PHP 8+ features and best practices',
                icon: <FaPhp className="text-green-500" />
            },
            {
                title: 'Object-Oriented',
                description: 'Master OOP principles and patterns',
                icon: <FaCode className="text-blue-500" />
            },
            {
                title: 'MVC Architecture',
                description: 'Build applications with proper structure',
                icon: <FaServer className="text-purple-500" />
            }
        ],
        savings: {
            laravel: 4,
            udemy: -86
        },
        careerPaths: [
            'PHP Developer ($65k-$110k)',
            'WordPress Engineer ($60k-$105k)',
            'E-commerce Developer ($70k-$120k)'
        ]
    },
    {
        id: 7,
        name: 'Next-Generation Web Development with Python',
        icon: <FaPython className="text-red-500" />,
        duration: '12 Months',
        level: 'Beginner',
        category: 'Beginner',
        jobPlacementRate: 87,
        mvitCost: {
            total: 290,
            monthly: 20,
            admission: 50
        },
        competitors: [
            {
                name: 'Udemy Python Bootcamp',
                icon: <SiUdemy className="text-blue-400" />,
                cost: 189,
                duration: '4 Months',
                advantages: [
                    'Comprehensive',
                    'Beginner friendly',
                    'Self-paced'
                ]
            },
            {
                name: 'Real Python',
                icon: <FaUniversity className="text-gray-400" />,
                cost: 240,
                duration: '6 Months',
                advantages: [
                    'Quality content',
                    'Practical examples',
                    'Regular updates'
                ]
            }
        ],
        mvitAdvantages: [
            {
                title: 'Django & Flask',
                description: 'Master both popular Python frameworks',
                icon: <FaPython className="text-green-500" />
            },
            {
                title: 'Database Integration',
                description: 'Connect with SQL and NoSQL databases',
                icon: <FaServer className="text-blue-500" />
            },
            {
                title: 'Web Security',
                description: 'Implement security best practices',
                icon: <FaShieldAlt className="text-purple-500" />
            }
        ],
        savings: {
            udemy: -27,
            realpython: 0
        },
        careerPaths: [
            'Python Developer ($80k-$140k)',
            'Backend Engineer ($85k-$145k)',
            'Data Visualization Specialist ($75k-$130k)'
        ]
    },

    // Business Certifications
    {
        id: 8,
        name: 'Corporate Communication for IT Professionals',
        icon: <FaUsers className="text-red-500" />,
        duration: '9 Months',
        level: 'Intermediate',
        category: 'Business',
        jobPlacementRate: 83,
        mvitCost: {
            total: 230,
            monthly: 20,
            admission: 50
        },
        competitors: [
            {
                name: 'Toastmasters',
                icon: <FaUniversity className="text-gray-400" />,
                cost: 120,
                duration: 'Ongoing',
                advantages: [
                    'Peer feedback',
                    'Practice opportunities',
                    'Global network'
                ]
            },
            {
                name: 'Udemy Business Communication',
                icon: <SiUdemy className="text-blue-400" />,
                cost: 129,
                duration: '3 Months',
                advantages: [
                    'Self-paced',
                    'Comprehensive',
                    'Affordable'
                ]
            }
        ],
        mvitAdvantages: [
            {
                title: 'Tech Scenarios',
                description: 'Communication tailored for IT professionals',
                icon: <FaUsers className="text-green-500" />
            },
            {
                title: 'Executive Communication',
                description: 'Learn to communicate with leadership',
                icon: <FaBriefcase className="text-blue-500" />
            },
            {
                title: 'Presentation Mastery',
                description: 'Deliver compelling technical presentations',
                icon: <FaChartBar className="text-purple-500" />
            }
        ],
        savings: {
            toastmasters: -50,
            udemy: -40
        },
        careerPaths: [
            'IT Communications Manager ($70k-$125k)',
            'Technical Writer ($60k-$110k)',
            'Developer Advocate ($90k-$150k)'
        ]
    },
    {
        id: 9,
        name: 'Office Management, AI and Prompt Engineering',
        icon: <FaChalkboardTeacher className="text-red-500" />,
        duration: '12 Months',
        level: 'Intermediate',
        category: 'Business',
        jobPlacementRate: 84,
        mvitCost: {
            total: 290,
            monthly: 20,
            admission: 50
        },
        competitors: [
            {
                name: 'Udemy AI for Business',
                icon: <SiUdemy className="text-blue-400" />,
                cost: 299,
                duration: '6 Months',
                advantages: [
                    'Self-paced learning',
                    'Practical examples',
                    'Affordable'
                ]
            },
            {
                name: 'edX Business AI',
                icon: <SiEdx className="text-blue-500" />,
                cost: 1200,
                duration: '12 Months',
                advantages: [
                    'University-backed',
                    'Comprehensive curriculum',
                    'Professional certificate'
                ]
            }
        ],
        mvitAdvantages: [
            {
                title: 'AI Automation',
                description: 'Automate office tasks with AI',
                icon: <FaRobot className="text-green-500" />
            },
            {
                title: 'Prompt Engineering',
                description: 'Master effective AI prompting',
                icon: <FaBrain className="text-blue-500" />
            },
            {
                title: 'Case Studies',
                description: 'Real-world business applications',
                icon: <FaBookOpen className="text-purple-500" />
            }
        ],
        savings: {
            udemy: 20,
            edx: 80
        },
        careerPaths: [
            'AI Operations Manager ($65k-$110k)',
            'Executive Assistant ($60k-$95k)',
            'Prompt Engineer ($80k-$130k)'
        ]
    },
    {
        id: 10,
        name: 'Office Management and Work Ethics',
        icon: <FaClipboardList className="text-red-500" />,
        duration: '9 Months',
        level: 'Beginner',
        category: 'Business',
        jobPlacementRate: 81,
        mvitCost: {
            total: 230,
            monthly: 20,
            admission: 50
        },
        competitors: [
            {
                name: 'LinkedIn Learning',
                icon: <FaUniversity className="text-gray-400" />,
                cost: 240,
                duration: '6 Months',
                advantages: [
                    'Professional network',
                    'Variety of courses',
                    'Certification'
                ]
            },
            {
                name: 'Udemy Office Admin',
                icon: <SiUdemy className="text-blue-400" />,
                cost: 129,
                duration: '3 Months',
                advantages: [
                    'Affordable',
                    'Practical skills',
                    'Self-paced'
                ]
            }
        ],
        mvitAdvantages: [
            {
                title: 'Modern Office Tech',
                description: 'Learn latest office technologies',
                icon: <FaLaptopCode className="text-green-500" />
            },
            {
                title: 'Workplace Ethics',
                description: 'Professional conduct and standards',
                icon: <FaHandshake className="text-blue-500" />
            },
            {
                title: 'Time Management',
                description: 'Maximize productivity and efficiency',
                icon: <FaClock className="text-purple-500" />
            }
        ],
        savings: {
            linkedin: 25,
            udemy: -40
        },
        careerPaths: [
            'Office Administrator ($45k-$75k)',
            'Operations Manager ($60k-$100k)',
            'Executive Assistant ($50k-$90k)'
        ]
    },

    // Technology Certifications
    {
        id: 11,
        name: 'Golang API Engineer',
        icon: <FaGolang className="text-red-500" />,
        duration: '18 Months',
        level: 'Intermediate',
        category: 'Technology',
        jobPlacementRate: 88,
        mvitCost: {
            total: 410,
            monthly: 20,
            admission: 50
        },
        competitors: [
            {
                name: 'Udemy Go Masterclass',
                icon: <SiUdemy className="text-blue-400" />,
                cost: 189,
                duration: '3 Months',
                advantages: [
                    'Affordable',
                    'Self-paced',
                    'Beginner friendly'
                ]
            },
            {
                name: 'Pluralsight Path',
                icon: <FaUniversity className="text-gray-400" />,
                cost: 299,
                duration: '4 Months',
                advantages: [
                    'Skill assessments',
                    'Learning paths',
                    'Enterprise focus'
                ]
            }
        ],
        mvitAdvantages: [
            {
                title: 'Microservices',
                description: 'Build scalable microservices architecture',
                icon: <FaServer className="text-green-500" />
            },
            {
                title: 'High-Performance APIs',
                description: 'Design efficient API endpoints',
                icon: <FaConnectdevelop className="text-blue-500" />
            },
            {
                title: 'Cloud Deployment',
                description: 'Deploy to major cloud platforms',
                icon: <FaCloud className="text-purple-500" />
            }
        ],
        savings: {
            udemy: -90,
            pluralsight: -20
        },
        careerPaths: [
            'Backend Developer ($90k-$150k)',
            'Cloud Engineer ($100k-$170k)',
            'Microservices Architect ($120k-$200k)'
        ]
    },
    {
        id: 12,
        name: 'Laravel Fullstack Engineer',
        icon: <SiLaravel className="text-red-500" />,
        duration: '18 Months',
        level: 'Intermediate',
        category: 'Technology',
        jobPlacementRate: 86,
        mvitCost: {
            total: 410,
            monthly: 20,
            admission: 50
        },
        competitors: [
            {
                name: 'Laravel Official Training',
                icon: <SiLaravel className="text-red-300" />,
                cost: 249,
                duration: '3 Months',
                advantages: [
                    'Official curriculum',
                    'Community support',
                    'Focused content'
                ]
            },
            {
                name: 'Udemy Laravel Course',
                icon: <SiUdemy className="text-blue-400" />,
                cost: 129,
                duration: '2 Months',
                advantages: [
                    'Low cost',
                    'Project-based',
                    'Beginner friendly'
                ]
            }
        ],
        mvitAdvantages: [
            {
                title: 'Modern PHP',
                description: 'Latest PHP techniques and features',
                icon: <FaPhp className="text-green-500" />
            },
            {
                title: 'Livewire/Inertia',
                description: 'Build reactive frontends with Laravel',
                icon: <FaCode className="text-blue-500" />
            },
            {
                title: 'E-commerce',
                description: 'Implement complete e-commerce solutions',
                icon: <FaShoppingCart className="text-purple-500" />
            }
        ],
        savings: {
            laravel: -45,
            udemy: -179
        },
        careerPaths: [
            'PHP Fullstack Developer ($75k-$130k)',
            'Web Application Architect ($90k-$150k)',
            'E-commerce Engineer ($80k-$140k)'
        ]
    },
    {
        id: 13,
        name: 'Research and Thesis Development',
        icon: <FaSearch className="text-red-500" />,
        duration: '18 Months',
        level: 'Advanced',
        category: 'Technology',
        jobPlacementRate: 85,
        mvitCost: {
            total: 410,
            monthly: 20,
            admission: 50
        },
        competitors: [
            {
                name: 'Coursera Research Methods',
                icon: <SiCoursera className="text-blue-500" />,
                cost: 399,
                duration: '6 Months',
                advantages: [
                    'Academic approach',
                    'University-backed',
                    'Structured curriculum'
                ]
            },
            {
                name: 'Udemy Academic Writing',
                icon: <SiUdemy className="text-blue-400" />,
                cost: 129,
                duration: '3 Months',
                advantages: [
                    'Affordable',
                    'Focused content',
                    'Self-paced'
                ]
            }
        ],
        mvitAdvantages: [
            {
                title: '1-on-1 Advisor',
                description: 'Personalized research guidance',
                icon: <FaGraduationCap className="text-green-500" />
            },
            {
                title: 'Writing Workshops',
                description: 'Master academic writing techniques',
                icon: <FaBookOpen className="text-blue-500" />
            },
            {
                title: 'Publication Guidance',
                description: 'Get help publishing your research',
                icon: <FaAward className="text-purple-500" />
            }
        ],
        savings: {
            coursera: 10,
            udemy: -179
        },
        careerPaths: [
            'Research Scientist ($75k-$130k)',
            'Academic Researcher ($65k-$110k)',
            'Technical Analyst ($70k-$125k)'
        ]
    }
];

const stats = [
    { value: '94%', label: 'Job Placement Rate' },
    { value: '87%', label: 'Cost Savings vs Competitors' },
    { value: '200+', label: 'Industry Partners' },
    { value: '24/7', label: 'Student Support' }
];

const testimonials = [
    {
        quote: "The MVIT certification gave me the practical skills I needed to land my dream job at Tesla Robotics.",
        name: "Muhammad Awais",
        position: "Full Stack Development with Next.js",
        avatar: "/faculty/awais.jpg"
    },
    {
        quote: "As a career switcher, the structured learning path and mentorship made all the difference in my transition to tech.",
        name: "Daha Qalbi",
        position: "MERN Stack Developer",
        avatar: "/faculty/daha.jpg"
    },
    {
        quote: "The AI certification's real-world projects were exactly what employers were looking for - I had multiple offers.",
        name: "Ali Ijaz",
        position: "Full Stack PHP Development",
        avatar: "/faculty/ali.png"
    }
];

export default function CertificationComparison() {
    const [activeTab, setActiveTab] = useState('All');

    const filteredCertifications = activeTab === 'All'
        ? certificationComparison
        : certificationComparison.filter(cert => cert.category === activeTab);

    return (
        <div className={`min-h-screen bg-gray-50 ${montserrat.className}`}>
            {/* Hero Section with Red-Black Gradient */}
            <div className="relative bg-gradient-to-br from-red-900 via-black to-red-900 text-white py-24 px-4 overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: "url('/pattern.svg')",
                    backgroundSize: '400px'
                }}></div>
                <div className="container mx-auto relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-6xl font-bold mb-6"
                    >
                        Industry-Recognized Tech Certifications
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="text-xl md:text-2xl max-w-3xl mx-auto mb-8"
                    >
                        Get certified for 87% less than competitors with better career outcomes
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="flex flex-col sm:flex-row justify-center gap-4"
                    >
                        <Link href="/pages/apply" legacyBehavior>
                            <a className="bg-white text-red-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg text-center">
                                Enroll Now
                            </a>
                        </Link>
                        <Link href={'/pages/study/compare-all-certifications'} className="bg-transparent border-2 border-white hover:bg-white hover:text-red-900 px-8 py-4 rounded-lg font-bold text-lg">
                            Compare All Certifications
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* MVIT Fee Structure Banner */}
            <div className="bg-white shadow-lg -mt-10 mx-4 rounded-xl z-20 relative">
                <div className="container mx-auto p-6">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="mb-4 md:mb-0">
                            <h3 className="text-xl font-bold text-gray-900">MVIT Standard Fee Structure</h3>
                            <p className="text-gray-600">All programs follow the same affordable pricing</p>
                        </div>
                        <div className="flex flex-wrap gap-6">
                            <div className="text-center">
                                <p className="text-3xl font-bold text-red-600">$50</p>
                                <p className="text-gray-600">Admission Fee</p>
                            </div>
                            <div className="text-center">
                                <p className="text-3xl font-bold text-red-600">$20</p>
                                <p className="text-gray-600">Monthly Fee</p>
                            </div>
                            <div className="text-center">
                                <p className="text-3xl font-bold text-red-600">Flexible</p>
                                <p className="text-gray-600">Payment Options</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Certification Comparison */}
            <div className="container mx-auto py-20 px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        How MVIT Certifications Compare
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        We provide superior education at a fraction of the cost with better career outcomes
                    </p>
                </div>

                {/* Comparison Tabs */}
                <div className="mb-12">
                    <div className="flex flex-wrap justify-center gap-2 mb-8">
                        <button
                            onClick={() => setActiveTab('All')}
                            className={`px-6 py-3 rounded-lg font-semibold ${
                                activeTab === 'All'
                                    ? 'bg-red-900 text-white'
                                    : 'bg-gray-200 hover:bg-gray-300'
                            }`}
                        >
                            All Certifications
                        </button>
                        <button
                            onClick={() => setActiveTab('Advanced')}
                            className={`px-6 py-3 rounded-lg font-semibold ${
                                activeTab === 'Advanced'
                                    ? 'bg-red-900 text-white'
                                    : 'bg-gray-200 hover:bg-gray-300'
                            }`}
                        >
                            Advanced
                        </button>
                        <button
                            onClick={() => setActiveTab('Beginner')}
                            className={`px-6 py-3 rounded-lg font-semibold ${
                                activeTab === 'Beginner'
                                    ? 'bg-red-900 text-white'
                                    : 'bg-gray-200 hover:bg-gray-300'
                            }`}
                        >
                            Beginner
                        </button>
                        <button
                            onClick={() => setActiveTab('Business')}
                            className={`px-6 py-3 rounded-lg font-semibold ${
                                activeTab === 'Business'
                                    ? 'bg-red-900 text-white'
                                    : 'bg-gray-200 hover:bg-gray-300'
                            }`}
                        >
                            Business
                        </button>
                        <button
                            onClick={() => setActiveTab('Technology')}
                            className={`px-6 py-3 rounded-lg font-semibold ${
                                activeTab === 'Technology'
                                    ? 'bg-red-900 text-white'
                                    : 'bg-gray-200 hover:bg-gray-300'
                            }`}
                        >
                            Technology
                        </button>
                    </div>

                    {/* Certification Cards - 2 Column Layout */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {filteredCertifications.map((certification) => (
                            <motion.div
                                key={certification.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow"
                            >
                                {/* Certification Header */}
                                <div className="bg-gradient-to-r from-red-900 to-black p-6 text-white">
                                    <div className="flex items-start justify-between">
                                        <div className="flex items-center">
                                            <div className="mr-4 text-4xl">
                                                {certification.icon}
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-bold">{certification.name}</h3>
                                                <div className="flex items-center mt-2">
                          <span className="bg-white/20 px-3 py-1 rounded-full text-sm mr-3">
                            {certification.duration}
                          </span>
                                                    <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                            {certification.level}
                          </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-yellow-400 text-red-900 px-3 py-1 rounded-full text-sm font-bold">
                                            {certification.jobPlacementRate}% Placement
                                        </div>
                                    </div>
                                </div>

                                {/* Comparison Content */}
                                <div className="p-6">
                                    {/* Cost Comparison */}
                                    <div className="mb-8">
                                        <h4 className="text-lg font-bold text-gray-800 mb-4">Cost Comparison</h4>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                            {/* MVIT Cost */}
                                            <div className="bg-red-50 p-4 rounded-lg border border-red-100">
                                                <p className="text-sm text-red-800 font-semibold mb-1">MVIT</p>
                                                <p className="text-2xl font-bold text-red-900">${certification.mvitCost.total}</p>
                                                <p className="text-sm text-gray-600">
                                                    ${certification.mvitCost.monthly}/mo + ${certification.mvitCost.admission} fee
                                                </p>
                                            </div>

                                            {/* Competitor Costs */}
                                            {certification.competitors.map((competitor, idx) => (
                                                <div key={idx} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                                                    <div className="flex items-center mb-1">
                                                        {competitor.icon}
                                                        <p className="text-sm font-semibold text-gray-800 ml-2">{competitor.name}</p>
                                                    </div>
                                                    <p className="text-2xl font-bold text-gray-900">${competitor.cost}</p>
                                                    <p className="text-sm text-gray-600">{competitor.duration}</p>
                                                    <div className="mt-2">
                            <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded">
                              Save {certification.savings[Object.keys(certification.savings)[idx]]}%
                            </span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Advantages */}
                                    <div className="mb-8">
                                        <h4 className="text-lg font-bold text-gray-800 mb-4">Why Choose MVIT</h4>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                            {certification.mvitAdvantages.map((advantage, idx) => (
                                                <div key={idx} className="bg-white p-4 rounded-lg border border-gray-200">
                                                    <div className="text-2xl mb-2">
                                                        {advantage.icon}
                                                    </div>
                                                    <h5 className="font-semibold text-gray-800">{advantage.title}</h5>
                                                    <p className="text-sm text-gray-600">{advantage.description}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Career Paths */}
                                    <div>
                                        <h4 className="text-lg font-bold text-gray-800 mb-3">Career Outcomes</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {certification.careerPaths.map((path, idx) => (
                                                <span key={idx} className="bg-green-50 text-green-800 px-3 py-1 rounded-full text-sm">
                          {path}
                        </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Footer */}
                                <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
                                    <Link href="/pages/apply" legacyBehavior>
                                        <a className="block w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold text-center">
                                            Enroll Now
                                        </a>
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Testimonials */}
                <div className="bg-gray-100 rounded-2xl p-12 my-16">
                    <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
                        Success Stories From Our Graduates
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="bg-white p-8 rounded-xl shadow-md"
                            >
                                <FaQuoteLeft className="text-gray-300 text-2xl mb-4" />
                                <p className="text-gray-700 italic mb-6">
                                    &quot;{testimonial.quote}&quot;
                                </p>
                                <div className="flex items-center">
                                    <Image
                                        src={testimonial.avatar}
                                        alt={testimonial.name}
                                        className="w-12 h-12 rounded-full mr-4 object-cover"
                                        height={48}
                                        width={48}
                                    />
                                    <div>
                                        <p className="font-bold text-gray-900">{testimonial.name}</p>
                                        <p className="text-sm text-gray-600">{testimonial.position}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Final CTA */}
                <div className="bg-gradient-to-br from-red-900 via-black to-red-900 rounded-2xl p-12 text-center text-white">
                    <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Career?</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        Join thousands of students who`&apos;ve launched successful tech careers with MVIT certifications
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link href="/pages/apply" legacyBehavior>
                            <a className="bg-white text-red-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg">
                                Enroll Now
                            </a>
                        </Link>
                        <button className="bg-transparent border-2 border-white hover:bg-white hover:text-red-900 px-8 py-4 rounded-lg font-bold text-lg">
                            Speak to an Advisor
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}