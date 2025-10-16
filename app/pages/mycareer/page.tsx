'use client'
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {
    FaCode, FaServer, FaMobile, FaDatabase, FaRobot, FaShieldAlt,
    FaCloud, FaChartLine, FaGamepad, FaLaptopCode, FaGraduationCap,
    FaBriefcase, FaRocket, FaUsers, FaAward, FaHandshake,
    FaPaintBrush, FaNetworkWired, FaCog, FaBrain, FaCodeBranch,
    FaDocker, FaPython, FaJava, FaJs, FaReact, FaVuejs, FaAngular,
    FaApple, FaAndroid, FaAws, FaGoogle, FaMicrosoft
} from 'react-icons/fa';
import { FiArrowRight, FiChevronDown, FiStar, FiTrendingUp, FiTarget } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

interface Career {
    id: string;
    title: string;
    icon: React.ReactNode;
    description: string;
    skills: string[];
    salary: string;
    demand: string;
    path: string;
    growth: string;
    experience: string;
    companies: string[];
    color: string;
    personality: string[];
}

const CareersPage = () => {
    const [expandedCareer, setExpandedCareer] = useState<string | null>(null);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    // Career data with career development color psychology
    const careers: Career[] = [
        {
            id: 'frontend',
            title: 'Frontend Developer',
            icon: <FaCode className="text-2xl" />,
            description: 'Craft engaging user experiences and build interactive web applications using modern frameworks.',
            skills: ['JavaScript/TypeScript', 'React/Vue/Angular', 'HTML/CSS/SASS', 'Responsive Design', 'State Management', 'Web Performance'],
            salary: '$75,000 - $160,000',
            demand: 'Very High',
            growth: '23% (2020-2030)',
            experience: '1-3 years for entry level',
            path: 'HTML/CSS fundamentals → JavaScript mastery → Framework specialization → Advanced patterns → Performance optimization',
            companies: ['Google', 'Meta', 'Netflix', 'Airbnb', 'Spotify', 'Shopify'],
            color: 'from-blue-500 to-cyan-500', // Blue: Trust, Calm, Professionalism
            personality: ['Creative', 'Detail-oriented', 'User-focused', 'Visual thinker']
        },
        {
            id: 'backend',
            title: 'Backend Developer',
            icon: <FaServer className="text-2xl" />,
            description: 'Architect robust server-side systems, APIs, and databases that power modern applications.',
            skills: ['Node.js/Python/Java', 'REST/GraphQL APIs', 'SQL/NoSQL Databases', 'Microservices', 'System Design', 'Security'],
            salary: '$85,000 - $170,000',
            demand: 'Very High',
            growth: '21% (2020-2030)',
            experience: '2-4 years for mid-level',
            path: 'Programming fundamentals → Database design → API development → System architecture → Cloud deployment',
            companies: ['Amazon', 'Microsoft', 'Uber', 'Stripe', 'PayPal', 'Twilio'],
            color: 'from-green-500 to-emerald-500', // Green: Growth, Stability, Reliability
            personality: ['Logical', 'Systematic', 'Problem-solver', 'Architectural thinker']
        },
        {
            id: 'fullstack',
            title: 'Full Stack Developer',
            icon: <FaLaptopCode className="text-2xl" />,
            description: 'Bridge frontend and backend to deliver complete, scalable applications from concept to deployment.',
            skills: ['Frontend frameworks', 'Backend development', 'Database management', 'DevOps basics', 'System Design', 'API Integration'],
            salary: '$95,000 - $180,000',
            demand: 'Extremely High',
            growth: '27% (2020-2030)',
            experience: '3-5 years for senior roles',
            path: 'Full stack fundamentals → Specialization depth → Architecture patterns → Team leadership → Project management',
            companies: ['Netflix', 'Airbnb', 'LinkedIn', 'Shopify', 'Twitch', 'Discord'],
            color: 'from-purple-500 to-pink-500', // Purple: Innovation, Creativity, Wisdom
            personality: ['Versatile', 'Big-picture thinker', 'Adaptable', 'Business-minded']
        },
        {
            id: 'mobile',
            title: 'Mobile Developer',
            icon: <FaMobile className="text-2xl" />,
            description: 'Create innovative mobile experiences for iOS and Android with native or cross-platform technologies.',
            skills: ['Swift/Kotlin', 'React Native/Flutter', 'Mobile UI/UX', 'App Store deployment', 'Performance', 'Offline-first'],
            salary: '$80,000 - $165,000',
            demand: 'High',
            growth: '22% (2020-2030)',
            experience: '1-3 years for entry level',
            path: 'Mobile fundamentals → Platform specialization → Advanced features → Store optimization → Cross-platform',
            companies: ['Apple', 'Google', 'Meta', 'TikTok', 'Snapchat', 'Uber'],
            color: 'from-yellow-500 to-orange-500', // Yellow/Orange: Energy, Innovation, Optimism
            personality: ['Innovative', 'User-centric', 'Platform expert', 'Performance-driven']
        },
        {
            id: 'devops',
            title: 'DevOps Engineer',
            icon: <FaCloud className="text-2xl" />,
            description: 'Automate infrastructure, optimize deployments, and ensure system reliability at scale.',
            skills: ['Docker/Kubernetes', 'AWS/Azure/GCP', 'CI/CD Pipelines', 'Infrastructure as Code', 'Monitoring', 'Security'],
            salary: '$105,000 - $190,000',
            demand: 'Extremely High',
            growth: '30% (2020-2030)',
            experience: '3-5 years for senior roles',
            path: 'Linux/Networking → Cloud fundamentals → Containerization → Automation → SRE practices',
            companies: ['Amazon', 'Google', 'Microsoft', 'Netflix', 'Spotify', 'Slack'],
            color: 'from-red-500 to-pink-500', // Red: Energy, Action, Urgency
            personality: ['Efficient', 'Automation-focused', 'Reliability-driven', 'Process-oriented']
        },
        {
            id: 'ai-ml',
            title: 'AI/ML Engineer',
            icon: <FaBrain className="text-2xl" />,
            description: 'Develop intelligent systems and machine learning models that solve complex business problems.',
            skills: ['Python', 'TensorFlow/PyTorch', 'Data Science', 'MLOps', 'NLP/CV', 'Algorithm Design'],
            salary: '$115,000 - $210,000',
            demand: 'Rapidly Growing',
            growth: '35% (2020-2030)',
            experience: '2-4 years for mid-level',
            path: 'Python & Math → ML fundamentals → Deep learning → Specialization → Production deployment',
            companies: ['OpenAI', 'Google Brain', 'Tesla', 'NVIDIA', 'Microsoft Research', 'Meta AI'],
            color: 'from-indigo-500 to-purple-500', // Indigo: Intelligence, Wisdom, Innovation
            personality: ['Analytical', 'Research-oriented', 'Mathematical', 'Innovative thinker']
        },
        {
            id: 'cybersecurity',
            title: 'Security Engineer',
            icon: <FaShieldAlt className="text-2xl" />,
            description: 'Protect digital assets and build secure systems in an increasingly connected world.',
            skills: ['Ethical Hacking', 'Cryptography', 'Security Protocols', 'Risk Assessment', 'Incident Response', 'Compliance'],
            salary: '$100,000 - $195,000',
            demand: 'Very High',
            growth: '33% (2020-2030)',
            experience: '3-5 years for senior roles',
            path: 'Networking basics → Security fundamentals → Specialized training → Certifications → Leadership',
            companies: ['CrowdStrike', 'Palo Alto Networks', 'Cloudflare', 'Okta', 'Zscaler', 'Rapid7'],
            color: 'from-teal-500 to-green-500', // Teal: Trust, Security, Professionalism
            personality: ['Vigilant', 'Detail-oriented', 'Ethical', 'Problem-solver']
        },
        {
            id: 'data-engineer',
            title: 'Data Engineer',
            icon: <FaDatabase className="text-2xl" />,
            description: 'Build scalable data pipelines and infrastructure that enable data-driven decision making.',
            skills: ['SQL/NoSQL', 'ETL/ELT Processes', 'Big Data tools', 'Data Warehousing', 'Pipeline Design', 'Data Governance'],
            salary: '$95,000 - $175,000',
            demand: 'High',
            growth: '25% (2020-2030)',
            experience: '2-4 years for mid-level',
            path: 'Database fundamentals → ETL processes → Big data tools → Cloud data services → Architecture',
            companies: ['Snowflake', 'Databricks', 'Airbnb', 'Uber', 'LinkedIn', 'Netflix'],
            color: 'from-blue-500 to-indigo-500', // Blue: Trust, Data Integrity
            personality: ['Organized', 'Scalability-focused', 'Data-driven', 'Infrastructure-minded']
        },
        {
            id: 'cloud-architect',
            title: 'Cloud Architect',
            icon: <FaAws className="text-2xl" />,
            description: 'Design and implement cloud solutions that drive digital transformation and business growth.',
            skills: ['Cloud Services', 'Architecture Patterns', 'Networking', 'Cost Optimization', 'Security', 'Migration'],
            salary: '$125,000 - $225,000',
            demand: 'Very High',
            growth: '28% (2020-2030)',
            experience: '5+ years for senior roles',
            path: 'Cloud fundamentals → Architecture patterns → Advanced services → Enterprise strategy → Leadership',
            companies: ['Amazon', 'Microsoft', 'Google', 'Salesforce', 'IBM', 'Oracle'],
            color: 'from-orange-500 to-red-500', // Orange: Innovation, Energy, Transformation
            personality: ['Strategic', 'Big-picture thinker', 'Business-aligned', 'Forward-thinking']
        },
        {
            id: 'ux-engineer',
            title: 'UX Engineer',
            icon: <FaPaintBrush className="text-2xl" />,
            description: 'Bridge design and engineering to create seamless, accessible user experiences.',
            skills: ['UI/UX Design', 'Frontend Development', 'Prototyping', 'Accessibility', 'User Research', 'Design Systems'],
            salary: '$85,000 - $155,000',
            demand: 'Growing',
            growth: '20% (2020-2030)',
            experience: '2-4 years for mid-level',
            path: 'Design fundamentals → Frontend development → UX research → Advanced prototyping → Design systems',
            companies: ['Apple', 'Google', 'Adobe', 'Figma', 'Spotify', 'Airbnb'],
            color: 'from-pink-500 to-rose-500', // Pink: Creativity, Empathy, User-focused
            personality: ['Empathetic', 'Creative', 'User-advocate', 'Detail-oriented']
        },
        {
            id: 'sre',
            title: 'Site Reliability Engineer',
            icon: <FaCog className="text-2xl" />,
            description: 'Ensure system reliability, performance, and scalability through engineering best practices.',
            skills: ['Monitoring', 'Incident Management', 'Capacity Planning', 'Performance', 'Automation', 'Reliability'],
            salary: '$110,000 - $200,000',
            demand: 'High',
            growth: '26% (2020-2030)',
            experience: '3-5 years for senior roles',
            path: 'Systems fundamentals → Monitoring tools → Incident response → SRE practices → Leadership',
            companies: ['Google', 'Microsoft', 'Netflix', 'LinkedIn', 'Slack', 'Dropbox'],
            color: 'from-gray-600 to-blue-500', // Gray/Blue: Reliability, Stability, Professional
            personality: ['Reliable', 'Process-driven', 'Calm under pressure', 'Systematic']
        },
        {
            id: 'blockchain',
            title: 'Blockchain Developer',
            icon: <FaCodeBranch className="text-2xl" />,
            description: 'Build decentralized applications and smart contracts on cutting-edge blockchain platforms.',
            skills: ['Solidity/Rust', 'Smart Contracts', 'Web3.js', 'Blockchain Fundamentals', 'Cryptography', 'DApp Development'],
            salary: '$95,000 - $190,000',
            demand: 'Emerging',
            growth: '40% (2020-2030)',
            experience: '2-4 years for mid-level',
            path: 'Blockchain basics → Smart contracts → DApp development → Advanced protocols → Ecosystem',
            companies: ['Coinbase', 'Chainlink', 'Polygon', 'Consensys', 'Alchemy', 'OpenSea'],
            color: 'from-gray-700 to-purple-600', // Dark Purple: Innovation, Cutting-edge
            personality: ['Innovative', 'Forward-thinking', 'Technically curious', 'Risk-tolerant']
        }
    ];

    const stats = [
        { number: '1.2M+', label: 'Tech Jobs Available', description: 'Annual openings in software development globally' },
        { number: '$105K', label: 'Average Salary', description: 'Median software developer salary in United States' },
        { number: '31%', label: 'Growth Rate', description: 'Much faster than average occupation growth' },
        { number: '5.8M', label: 'Global Workforce', description: 'Software developers and engineers worldwide' }
    ];


    if (!isClient) {
        return (
            <div className="min-h-screen bg-gray-900 flex items-center justify-center">
                <div className="animate-pulse text-white text-xl">Loading...</div>
            </div>
        );
    }

    return (
        <>
            <Head>
                <title>Software Development Careers | MVIT - Build Your Future in Tech</title>
                <meta name="description" content="Discover high-growth software development careers with MVIT's industry-aligned certification programs. Transform your future in technology." />
            </Head>

            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-blue-900 text-white">
                {/* Enhanced Animated Background */}
                <div className="fixed inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
                    <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
                    <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl" />

                    {[...Array(12)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10"
                            style={{
                                width: `${Math.random() * 200 + 50}px`,
                                height: `${Math.random() * 200 + 50}px`,
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                            }}
                            animate={{
                                x: [0, (Math.random() - 0.5) * 100],
                                y: [0, (Math.random() - 0.5) * 100],
                                opacity: [0.1, 0.05, 0.1],
                            }}
                            transition={{
                                duration: Math.random() * 20 + 20,
                                repeat: Infinity,
                                repeatType: 'reverse',
                            }}
                        />
                    ))}
                </div>

                {/* Enhanced Hero Section */}
                <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6"
                        >
                            <FiTrendingUp className="text-blue-400" />
                            <span className="text-blue-300 text-sm font-medium">High-Growth Career Paths</span>
                        </motion.div>

                        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 leading-tight">
                            Your Future in
                            <br />
                            <span className="text-white">Technology Starts Here</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-10 leading-relaxed">
                            Discover your perfect career path in software development. MVIT&apos;s industry-aligned programs
                            transform beginners into high-demand tech professionals with competitive salaries and growth opportunities.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link
                                    href="/pages/study"
                                    className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-2xl text-lg shadow-2xl shadow-blue-500/25 transition-all duration-300 flex items-center gap-3"
                                >
                                    Explore Career Paths <FiArrowRight />
                                </Link>
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link
                                    href="/pages/apply"
                                    className="border-2 border-gray-600 hover:border-blue-500 text-gray-300 hover:text-white font-semibold py-4 px-8 rounded-2xl text-lg transition-all duration-300 flex items-center gap-3"
                                >
                                    <FaBriefcase className="text-lg" />
                                    Tomorrow Start&apos;s Now
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                </section>

                {/* Statistics Section */}
                <section className="relative py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/30 text-center hover:border-blue-500/30 transition-all duration-300"
                            >
                                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                                <div className="text-blue-400 font-semibold mb-1">{stat.label}</div>
                                <div className="text-gray-400 text-sm">{stat.description}</div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Career Paths Section */}
                <section className="relative py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                Discover Your <span className="text-blue-400">Perfect Career Fit</span>
                            </h2>
                            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                                Explore 12 high-demand software development roles. Each path offers unique challenges,
                                competitive compensation, and excellent long-term growth potential.
                            </p>
                        </div>

                        {/* Enhanced Careers Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                            {careers.map((career) => (
                                <motion.div
                                    key={career.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4 }}
                                    className="bg-gray-800/30 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-700/30 hover:border-blue-500/30 group"
                                >
                                    <div
                                        className="p-6 cursor-pointer"
                                        onClick={() => setExpandedCareer(expandedCareer === career.id ? null : career.id)}
                                    >
                                        <div className="flex items-start gap-4">
                                            <div className={`p-3 bg-gradient-to-r ${career.color} rounded-xl text-white group-hover:scale-110 transition-transform duration-300`}>
                                                {career.icon}
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <h3 className="text-xl font-bold">{career.title}</h3>
                                                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                                        career.demand === 'Extremely High' ? 'bg-red-500/20 text-red-400' :
                                                            career.demand === 'Very High' ? 'bg-orange-500/20 text-orange-400' :
                                                                career.demand === 'High' ? 'bg-green-500/20 text-green-400' :
                                                                    'bg-blue-500/20 text-blue-400'
                                                    }`}>
                                                        {career.demand}
                                                    </span>
                                                </div>
                                                <p className="text-gray-300 text-sm leading-relaxed">{career.description}</p>
                                            </div>
                                            <motion.div
                                                animate={{ rotate: expandedCareer === career.id ? 180 : 0 }}
                                                className="text-gray-400 mt-1 group-hover:text-blue-400 transition-colors"
                                            >
                                                <FiChevronDown />
                                            </motion.div>
                                        </div>

                                        {/* Quick Stats */}
                                        <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t border-gray-700/30">
                                            <div>
                                                <div className="text-sm text-gray-400">Salary Range</div>
                                                <div className="text-blue-400 font-semibold">{career.salary}</div>
                                            </div>
                                            <div>
                                                <div className="text-sm text-gray-400">Market Growth</div>
                                                <div className="text-green-400 font-semibold">{career.growth}</div>
                                            </div>
                                        </div>

                                        {/* Personality Match */}
                                        <div className="mt-3">
                                            <div className="text-sm text-gray-400 mb-1">Ideal For:</div>
                                            <div className="flex flex-wrap gap-1">
                                                {career.personality.slice(0, 2).map((trait, i) => (
                                                    <span key={i} className="bg-gray-700/50 px-2 py-1 rounded text-xs text-gray-300">
                                                        {trait}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <AnimatePresence>
                                        {expandedCareer === career.id && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                exit={{ opacity: 0, height: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="px-6 pb-6"
                                            >
                                                <div className="pt-4 border-t border-gray-700/30">
                                                    {/* Enhanced Details Grid */}
                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                                        <div>
                                                            <h4 className="font-semibold text-blue-400 mb-3 flex items-center gap-2">
                                                                <FiStar /> Key Skills
                                                            </h4>
                                                            <div className="flex flex-wrap gap-2">
                                                                {career.skills.map((skill, i) => (
                                                                    <span key={i} className="bg-gray-700/50 px-3 py-2 rounded-lg text-sm border border-gray-600/50">
                                                                        {skill}
                                                                    </span>
                                                                ))}
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <h4 className="font-semibold text-blue-400 mb-3 flex items-center gap-2">
                                                                <FaHandshake /> Top Employers
                                                            </h4>
                                                            <div className="space-y-2">
                                                                {career.companies.map((company, i) => (
                                                                    <div key={i} className="text-gray-300 text-sm flex items-center gap-2">
                                                                        <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                                                                        {company}
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="space-y-4">
                                                        <div>
                                                            <h4 className="font-semibold text-blue-400 mb-2 flex items-center gap-2">
                                                                <FaGraduationCap /> Learning Path
                                                            </h4>
                                                            <p className="text-gray-300 text-sm leading-relaxed">{career.path}</p>
                                                        </div>

                                                        <div className="grid grid-cols-2 gap-4">
                                                            <div>
                                                                <h4 className="font-semibold text-blue-400 mb-2">Experience Level</h4>
                                                                <p className="text-gray-300 text-sm">{career.experience}</p>
                                                            </div>
                                                            <div>
                                                                <h4 className="font-semibold text-blue-400 mb-2">Personality Fit</h4>
                                                                <div className="flex flex-wrap gap-1">
                                                                    {career.personality.map((trait, i) => (
                                                                        <span key={i} className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded text-xs">
                                                                            {trait}
                                                                        </span>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </section>
                {/* Enhanced CTA Section */}
                <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-3xl p-12 border border-blue-500/20"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Ready to Transform Your
                            <span className="text-blue-400"> Career?</span>
                        </h2>
                        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                            Join thousands of students who launched successful tech careers with MVIT&apos;s industry-aligned programs.
                            Your journey to becoming a high-demand software professional starts today.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link
                                    href="/pages/apply"
                                    className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-2xl text-lg shadow-2xl shadow-blue-500/25 transition-all duration-300 inline-flex items-center gap-3"
                                >
                                    <FaRocket />
                                    Start Your Journey
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                </section>
            </div>
        </>
    );
};

export default CareersPage;