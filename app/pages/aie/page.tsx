'use client'

import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {
  FaRobot, FaLaptopCode, FaChalkboardTeacher, FaChild,
  FaUniversity, FaGraduationCap, FaUsers, FaGlobeAmericas,
  FaChartLine, FaHandsHelping, FaBrain, FaMoneyBillWave,
  FaIndustry, FaFlask, FaStethoscope, FaChartBar, FaSeedling,
  FaCheck,
  FaCrown
} from 'react-icons/fa';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Types
interface AgeGroup {
  title: string;
  description: string;
  icon: JSX.Element;
  features: string[];
}

interface PricingTier {
  name: string;
  price: string;
  period: string;
  features: string[];
  cta: string;
  featured: boolean;
}

interface MvitTariffItem {
  level: string;
  cost: string;
  duration: string;
}

interface ImpactArea {
  icon: JSX.Element;
  title: string;
  description: string;
  stat?: string;
}

interface EducationLevel {
  level: string;
  focus: string;
  icon: JSX.Element;
}

// Data
const ageGroups: AgeGroup[] = [
  {
    title: 'Kids (5-12)',
    description: 'Fun introduction to AI concepts through games and storytelling',
    icon: <FaChild className="text-2xl" />,
    features: [
      'Interactive AI games',
      'Story-based learning',
      'Visual programming',
      'Ethics through stories',
      'Parent progress reports'
    ]
  },
  {
    title: 'Teens (13-19)',
    description: 'Hands-on AI projects and career exploration',
    icon: <FaGraduationCap className="text-2xl" />,
    features: [
      'Python fundamentals',
      'ML model building',
      'AI ethics discussions',
      'Career pathways',
      'Project portfolio'
    ]
  },
  {
    title: 'Adults (20+)',
    description: 'Professional AI skills development',
    icon: <FaUsers className="text-2xl" />,
    features: [
      'Industry-relevant skills',
      'Real-world projects',
      'Certification prep',
      'Networking opportunities',
      'Career coaching'
    ]
  },
  {
    title: 'Seniors (60+)',
    description: 'AI literacy for daily life and lifelong learning',
    icon: <FaHandsHelping className="text-2xl" />,
    features: [
      'Digital literacy',
      'AI tools for health',
      'Scam prevention',
      'Social connection',
      'Personalized pace'
    ]
  }
];

const pricingTiers: PricingTier[] = [
  {
    name: 'Starter',
    price: '$70',
    period: 'one-time',
    features: [
      'Lifetime access to core curriculum',
      'Basic certifications',
      'Community forum access',
      'Monthly progress reports',
      'Email support'
    ],
    cta: 'Get Started',
    featured: false
  },
  {
    name: 'Professional',
    price: '$35',
    period: 'month',
    features: [
      'All Starter features',
      'Advanced certifications',
      'Weekly mentor sessions',
      'Project feedback',
      'Career coaching',
      'Portfolio building'
    ],
    cta: 'Go Professional',
    featured: true
  },
  {
    name: 'Enterprise',
    price: '$490',
    period: 'year',
    features: [
      'All Professional features',
      'Unlimited mentor access',
      'Job placement assistance',
      'Custom learning paths',
      'Team management',
      'Priority support'
    ],
    cta: 'Organizational Plan',
    featured: false
  }
];

const mvitTariff: MvitTariffItem[] = [
  { level: 'Basic Digital Literacy', cost: 'Included', duration: '4 weeks' },
  { level: 'AI Fundamentals', cost: 'Included', duration: '8 weeks' },
  { level: 'Intermediate AI Skills', cost: 'Included', duration: '12 weeks' },
  { level: 'Advanced Certification', cost: 'Included', duration: '16 weeks' },
  { level: 'Professional Diploma', cost: 'Included', duration: '24 weeks' }
];

const aiImpactAreas: ImpactArea[] = [
  {
    icon: <FaIndustry className="text-2xl" />,
    title: "Business & Industry",
    description: "AI automates 45% of repetitive tasks while creating new high-value jobs requiring AI collaboration skills",
    stat: "87% of CEOs report AI as essential for competitiveness"
  },
  {
    icon: <FaStethoscope className="text-2xl" />,
    title: "Healthcare",
    description: "AI diagnostics improve detection rates by 30% while reducing costs",
    stat: "92% of med schools now include AI literacy"
  },
  {
    icon: <FaChartBar className="text-2xl" />,
    title: "Finance",
    description: "Algorithmic trading and fraud detection systems require financial professionals to understand AI systems",
    stat: "AI handles 75% of market transactions"
  },
  {
    icon: <FaSeedling className="text-2xl" />,
    title: "Agriculture",
    description: "Precision farming using AI increases yields while reducing environmental impact",
    stat: "60% of farms use some AI by 2025"
  }
];

const educationLevels: EducationLevel[] = [
  {
    level: "Primary Schools",
    focus: "Digital literacy foundations and ethical AI concepts through games",
    icon: <FaChild className="text-2xl text-yellow-400" />
  },
  {
    level: "Secondary Schools",
    focus: "Computational thinking and basic AI applications across subjects",
    icon: <FaGraduationCap className="text-2xl text-yellow-400" />
  },
  {
    level: "Universities",
    focus: "Discipline-specific AI integration and advanced research methods",
    icon: <FaUniversity className="text-2xl text-yellow-400" />
  },
  {
    level: "Professional",
    focus: "Industry-specific AI tools and continuous upskilling programs",
    icon: <FaUsers className="text-2xl text-yellow-400" />
  }
];

// Animated Components
const TypingHeading = ({ text }: { text: string }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 50);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">
        {displayedText}
        <span className={`inline-block w-2 h-12 bg-yellow-500 ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'}`}></span>
      </h1>
  );
};

const AnimatedSection = ({
                           children,
                           className = '',
                           bgPattern = false
                         }: {
  children: React.ReactNode;
  className?: string;
  bgPattern?: boolean;
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
      <motion.section
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className={`py-16 md:py-24 relative overflow-hidden ${className}`}
      >
        {bgPattern && (
            <div className="absolute inset-0 opacity-20 bg-[url('/grid-pattern.svg')] bg-[length:60px_60px]"></div>
        )}
        {children}
      </motion.section>
  );
};

const GradientCard = ({
                        children,
                        className = '',
                        delay = 0,
                        hoverEffect = true
                      }: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  hoverEffect?: boolean;
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
      <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
          whileHover={hoverEffect ? { y: -8, scale: 1.02 } : {}}
          className={`bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl border border-gray-700 hover:border-yellow-500/50 transition-all shadow-lg hover:shadow-yellow-500/20 ${className}`}
      >
        {children}
      </motion.div>
  );
};

const GradientBackground = () => {
  return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
            className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-yellow-900/20"
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'linear',
            }}
        />
      </div>
  );
};

const AIEducationPage = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
      <>
        <Head>
          <title>AI Education for Everyone | The Essential 21st Century Skill</title>
          <meta name="description" content="Master AI literacy - the most critical skill across all professions and education levels. $50 one-time or $20/month plans." />
          <link rel="canonical" href="https://youraieducation.com" />
        </Head>

        <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-yellow-900/20 text-white font-sans">
          {/* Hero Section */}
          <AnimatedSection className="pt-32 pb-24">
            <GradientBackground />
            <div className="container mx-auto px-4 relative z-10">
              <div className="text-center mb-16">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="inline-flex items-center justify-center w-20 h-20 bg-yellow-500/20 rounded-full mb-8 backdrop-blur-sm border border-yellow-500/30"
                >
                  <FaBrain className="text-3xl text-yellow-400" />
                </motion.div>

                <div className="mb-6 min-h-[120px] md:min-h-[180px] flex items-center justify-center">
                  <TypingHeading text="The AI Education Imperative" />
                </div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-xl md:text-2xl max-w-4xl mx-auto mb-8 text-gray-300"
                >
                  AI literacy has become as fundamental as reading and math - transforming every profession from healthcare to agriculture. The World Economic Forum predicts <span className="text-yellow-400">65% of children</span> entering primary school today will work in jobs that don&apos;t yet exist, most requiring AI collaboration skills.
                </motion.p>
              </div>

              {/* Paradigm Shift Section */}
              <GradientCard className="mb-16">
                <div className="p-8">
                  <h2 className="text-3xl font-bold mb-6 text-yellow-400">The Education Revolution</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Why AI Education is Mandatory:</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <FaCheck className="text-yellow-400 mr-2 mt-1 flex-shrink-0" />
                          <span><strong>85% of jobs</strong> will require AI interaction by 2030 (McKinsey)</span>
                        </li>
                        <li className="flex items-start">
                          <FaCheck className="text-yellow-400 mr-2 mt-1 flex-shrink-0" />
                          <span><strong>47 countries</strong> have mandated AI education in schools (UNESCO)</span>
                        </li>
                        <li className="flex items-start">
                          <FaCheck className="text-yellow-400 mr-2 mt-1 flex-shrink-0" />
                          <span>Students with AI literacy earn <strong>34% higher</strong> starting salaries</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Education Level Requirements:</h3>
                      <div className="space-y-4">
                        {educationLevels.map((edu, index) => (
                            <div key={index} className="flex items-start">
                              <div className="mr-4">{edu.icon}</div>
                              <div>
                                <h4 className="font-medium">{edu.level}</h4>
                                <p className="text-sm text-gray-400">{edu.focus}</p>
                              </div>
                            </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </GradientCard>

              {/* Fixed Button Alignment */}
              <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex flex-col sm:flex-row justify-center gap-4 items-center"
              >
                <Link
                    href={"/pages/apply"}
                    className="relative group inline-flex items-center justify-center"
                >
                <span className="relative z-10 px-8 py-3 bg-gradient-to-r from-yellow-600 to-yellow-800 rounded-full font-medium text-white group-hover:from-yellow-500 group-hover:to-yellow-700 transition-all duration-300 shadow-lg group-hover:shadow-yellow-500/30 whitespace-nowrap">
                  Enroll Now - $70
                </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-yellow-700 to-yellow-900 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-md"></span>
                </Link>
                <Link
                    href={'/pages/study/fee'}
                    className="px-8 py-3 border border-gray-600 text-white rounded-full hover:bg-white/5 transition-all font-medium flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  <FaMoneyBillWave /> Pricing Details
                </Link>
              </motion.div>
            </div>
          </AnimatedSection>

          {/* AI Impact Across Industries Section */}
          <AnimatedSection className="bg-gradient-to-br from-gray-950 via-black to-yellow-900/10" bgPattern>
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="inline-block bg-gradient-to-r from-yellow-500 to-yellow-700 text-white px-6 py-2 rounded-full text-sm font-medium mb-4 shadow-lg shadow-yellow-500/30"
                >
                  TRANSFORMING EVERY FIELD
                </motion.span>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl md:text-5xl font-bold mb-4"
                >
                  AI Literacy <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">Across</span> Professions
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-lg text-gray-300 max-w-3xl mx-auto"
                >
                  No industry remains untouched by the AI revolution - making comprehensive education essential
                </motion.p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {aiImpactAreas.map((area, index) => (
                    <GradientCard key={index} delay={index * 0.1}>
                      <div className="p-6 h-full flex flex-col">
                        <div className="flex items-center mb-4">
                          <div className="p-3 bg-gradient-to-r from-yellow-500/20 to-yellow-700/20 rounded-lg mr-4 text-yellow-300">
                            {area.icon}
                          </div>
                          <h3 className="text-xl font-bold text-white">{area.title}</h3>
                        </div>
                        <p className="text-gray-400 mb-4">{area.description}</p>
                        {area.stat && (
                            <div className="mt-auto pt-4 border-t border-gray-800">
                              <p className="text-sm font-medium text-yellow-400">{area.stat}</p>
                            </div>
                        )}
                      </div>
                    </GradientCard>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Age Groups */}
          <AnimatedSection className="bg-gradient-to-br from-black via-gray-900 to-yellow-900/20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="inline-block bg-gradient-to-r from-yellow-500 to-yellow-700 text-white px-6 py-2 rounded-full text-sm font-medium mb-4 shadow-lg shadow-yellow-500/30"
                >
                  AGE-APPROPRIATE LEARNING
                </motion.span>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl md:text-5xl font-bold mb-4"
                >
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">Tailored</span> for Every Stage of Life
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-lg text-gray-300 max-w-3xl mx-auto"
                >
                  Comprehensive AI education pathways designed for all ages and skill levels
                </motion.p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {ageGroups.map((group, index) => (
                    <GradientCard key={index} delay={index * 0.1}>
                      <div className="p-6 h-full flex flex-col">
                        <div className="flex items-center mb-4">
                          <div className="p-3 bg-gradient-to-r from-yellow-500/20 to-yellow-700/20 rounded-lg mr-4 text-yellow-300">
                            {group.icon}
                          </div>
                          <h3 className="text-xl font-bold text-white">{group.title}</h3>
                        </div>
                        <p className="text-gray-400 mb-4">{group.description}</p>
                        <ul className="mt-auto space-y-2">
                          {group.features.map((feature, idx) => (
                              <li key={idx} className="flex items-start text-sm text-gray-300">
                                <FaCheck className="text-yellow-400 mr-2 mt-1 flex-shrink-0" />
                                {feature}
                              </li>
                          ))}
                        </ul>
                      </div>
                    </GradientCard>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Pricing Section */}
          <AnimatedSection className="bg-gradient-to-br from-gray-950 via-black to-yellow-900/20" bgPattern>
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="inline-block bg-gradient-to-r from-yellow-500 to-yellow-700 text-white px-6 py-2 rounded-full text-sm font-medium mb-4 shadow-lg shadow-yellow-500/30"
                >
                  SIMPLE PRICING OPTIONS
                </motion.span>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl md:text-5xl font-bold mb-4"
                >
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">Flexible</span> Learning Plans
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-lg text-gray-300 max-w-3xl mx-auto"
                >
                  Choose between one-time payment or affordable monthly subscription
                </motion.p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {pricingTiers.map((tier, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className={`relative ${tier.featured ? 'md:-translate-y-4' : ''}`}
                    >
                      {tier.featured && (
                          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-yellow-500 to-yellow-700 text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg shadow-yellow-500/30 whitespace-nowrap">
                            MOST POPULAR
                          </div>
                      )}

                      <GradientCard>
                        <div className={`p-6 ${tier.featured ? 'border-b-2 border-yellow-500' : 'border-b border-gray-700'}`}>
                          <h3 className="text-2xl font-bold mb-1 text-white">{tier.name}</h3>
                          <p className={`text-sm ${tier.featured ? 'text-yellow-200' : 'text-gray-400'}`}>
                            {tier.period === 'one-time' ? 'One payment' : tier.period === 'month' ? 'Monthly subscription' : 'Annual subscription'}
                          </p>
                        </div>
                        <div className="p-6">
                          <div className="text-4xl font-bold mb-4 text-white flex items-end justify-center">
                            {tier.price}
                            {tier.period !== 'one-time' && (
                                <span className="text-lg text-gray-400 ml-2">/{tier.period}</span>
                            )}
                          </div>
                          <ul className="space-y-3 mb-6">
                            {tier.features.map((feature, idx) => (
                                <li key={idx} className="flex items-start text-sm text-gray-300">
                                  <FaCheck className={`mr-2 mt-0.5 ${tier.featured ? 'text-yellow-400' : 'text-yellow-500'}`} />
                                  {feature}
                                </li>
                            ))}
                          </ul>
                          <Link
                              href={``}
                              className={`w-full block text-center ${tier.featured ? 'bg-gradient-to-r from-yellow-500 to-yellow-700 hover:from-yellow-400 hover:to-yellow-600' : 'bg-gray-800 hover:bg-gray-700'} text-white py-3 rounded-lg transition-all font-medium`}
                          >
                            {tier.cta}
                          </Link>
                        </div>
                      </GradientCard>
                    </motion.div>
                ))}
              </div>

              <div className="mt-8 text-center text-gray-400 text-sm">
                <p>All plans include the $50 admission fee. <Link href={''} className="text-yellow-400 hover:underline">See FAQs</Link> for details.</p>
              </div>
            </div>
          </AnimatedSection>

          {/* MVIT Tariff */}
          {/* MVIT Certified Curriculum - Redesigned Section */}
          <AnimatedSection className="bg-gradient-to-br from-gray-900 via-black to-yellow-900/20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="inline-block bg-gradient-to-r from-yellow-500 to-yellow-700 text-white px-6 py-2 rounded-full text-sm font-medium mb-4 shadow-lg shadow-yellow-500/30"
                >
                  MVIT CERTIFIED CURRICULUM
                </motion.span>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl md:text-5xl font-bold mb-4"
                >
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">Comprehensive</span> Learning Framework
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-lg text-gray-300 max-w-3xl mx-auto"
                >
                  Ministry-validated curriculum covering all aspects of AI literacy and application
                </motion.p>
              </div>

              <div className="max-w-5xl mx-auto">
                <GradientCard hoverEffect={false}>
                  <div className="p-6">
                    {/* Foundation Level */}
                    <div className="mb-8">
                      <div className="flex items-center mb-4">
                        <div className="p-3 bg-gradient-to-r from-yellow-500/20 to-yellow-700/20 rounded-lg mr-4 text-yellow-300">
                          <FaUniversity className="text-xl" />
                        </div>
                        <h3 className="text-2xl font-bold text-white">Foundation Certification</h3>
                      </div>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-lg font-semibold mb-2 text-yellow-300">Core Modules</h4>
                          <ul className="space-y-2">
                            <li className="flex items-start text-gray-300">
                              <FaCheck className="text-yellow-400 mr-2 mt-1 flex-shrink-0" />
                              AI Fundamentals & Ethical Considerations
                            </li>
                            <li className="flex items-start text-gray-300">
                              <FaCheck className="text-yellow-400 mr-2 mt-1 flex-shrink-0" />
                              Python Programming Essentials
                            </li>
                            <li className="flex items-start text-gray-300">
                              <FaCheck className="text-yellow-400 mr-2 mt-1 flex-shrink-0" />
                              Data Literacy & Visualization
                            </li>
                            <li className="flex items-start text-gray-300">
                              <FaCheck className="text-yellow-400 mr-2 mt-1 flex-shrink-0" />
                              Machine Learning Basics
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold mb-2 text-yellow-300">Learning Outcomes</h4>
                          <ul className="space-y-2">
                            <li className="flex items-start text-gray-300">
                              <FaCheck className="text-yellow-400 mr-2 mt-1 flex-shrink-0" />
                              Understand AI concepts and terminology
                            </li>
                            <li className="flex items-start text-gray-300">
                              <FaCheck className="text-yellow-400 mr-2 mt-1 flex-shrink-0" />
                              Build simple predictive models
                            </li>
                            <li className="flex items-start text-gray-300">
                              <FaCheck className="text-yellow-400 mr-2 mt-1 flex-shrink-0" />
                              Analyze real-world datasets
                            </li>
                            <li className="flex items-start text-gray-300">
                              <FaCheck className="text-yellow-400 mr-2 mt-1 flex-shrink-0" />
                              Develop ethical AI solutions
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Intermediate Level */}
                    <div className="mb-8 pt-6 border-t border-gray-700">
                      <div className="flex items-center mb-4">
                        <div className="p-3 bg-gradient-to-r from-yellow-500/20 to-yellow-700/20 rounded-lg mr-4 text-yellow-300">
                          <FaChartLine className="text-xl" />
                        </div>
                        <h3 className="text-2xl font-bold text-white">Intermediate Certification</h3>
                      </div>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-lg font-semibold mb-2 text-yellow-300">Advanced Modules</h4>
                          <ul className="space-y-2">
                            <li className="flex items-start text-gray-300">
                              <FaCheck className="text-yellow-400 mr-2 mt-1 flex-shrink-0" />
                              Deep Learning Fundamentals
                            </li>
                            <li className="flex items-start text-gray-300">
                              <FaCheck className="text-yellow-400 mr-2 mt-1 flex-shrink-0" />
                              Natural Language Processing
                            </li>
                            <li className="flex items-start text-gray-300">
                              <FaCheck className="text-yellow-400 mr-2 mt-1 flex-shrink-0" />
                              Computer Vision Applications
                            </li>
                            <li className="flex items-start text-gray-300">
                              <FaCheck className="text-yellow-400 mr-2 mt-1 flex-shrink-0" />
                              AI System Design Principles
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold mb-2 text-yellow-300">Capstone Projects</h4>
                          <ul className="space-y-2">
                            <li className="flex items-start text-gray-300">
                              <FaCheck className="text-yellow-400 mr-2 mt-1 flex-shrink-0" />
                              Sentiment Analysis System
                            </li>
                            <li className="flex items-start text-gray-300">
                              <FaCheck className="text-yellow-400 mr-2 mt-1 flex-shrink-0" />
                              Image Classification Model
                            </li>
                            <li className="flex items-start text-gray-300">
                              <FaCheck className="text-yellow-400 mr-2 mt-1 flex-shrink-0" />
                              Predictive Analytics Dashboard
                            </li>
                            <li className="flex items-start text-gray-300">
                              <FaCheck className="text-yellow-400 mr-2 mt-1 flex-shrink-0" />
                              AI-powered Recommendation Engine
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Advanced Level */}
                    <div className="pt-6 border-t border-gray-700">
                      <div className="flex items-center mb-4">
                        <div className="p-3 bg-gradient-to-r from-yellow-500/20 to-yellow-700/20 rounded-lg mr-4 text-yellow-300">
                          <FaCrown className="text-xl" />
                        </div>
                        <h3 className="text-2xl font-bold text-white">Advanced Certification</h3>
                      </div>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-lg font-semibold mb-2 text-yellow-300">Specializations</h4>
                          <ul className="space-y-2">
                            <li className="flex items-start text-gray-300">
                              <FaCheck className="text-yellow-400 mr-2 mt-1 flex-shrink-0" />
                              AI for Business Strategy
                            </li>
                            <li className="flex items-start text-gray-300">
                              <FaCheck className="text-yellow-400 mr-2 mt-1 flex-shrink-0" />
                              Healthcare AI Applications
                            </li>
                            <li className="flex items-start text-gray-300">
                              <FaCheck className="text-yellow-400 mr-2 mt-1 flex-shrink-0" />
                              Financial AI Systems
                            </li>
                            <li className="flex items-start text-gray-300">
                              <FaCheck className="text-yellow-400 mr-2 mt-1 flex-shrink-0" />
                              Autonomous Systems Engineering
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold mb-2 text-yellow-300">Industry Preparation</h4>
                          <ul className="space-y-2">
                            <li className="flex items-start text-gray-300">
                              <FaCheck className="text-yellow-400 mr-2 mt-1 flex-shrink-0" />
                              Real-world case studies
                            </li>
                            <li className="flex items-start text-gray-300">
                              <FaCheck className="text-yellow-400 mr-2 mt-1 flex-shrink-0" />
                              Enterprise AI implementation
                            </li>
                            <li className="flex items-start text-gray-300">
                              <FaCheck className="text-yellow-400 mr-2 mt-1 flex-shrink-0" />
                              AI project management
                            </li>
                            <li className="flex items-start text-gray-300">
                              <FaCheck className="text-yellow-400 mr-2 mt-1 flex-shrink-0" />
                              Ethical AI governance
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </GradientCard>

                <div className="mt-8 text-center">
                  <Link
                      href={""}
                      className="inline-flex items-center text-yellow-400 hover:text-yellow-300 transition-colors"
                  >
                    View complete curriculum breakdown
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Final CTA */}
          <AnimatedSection className="bg-gradient-to-br from-black via-gray-900 to-yellow-900/20" bgPattern>
            <div className="container mx-auto px-4 text-center relative">
              <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="text-4xl md:text-5xl font-bold mb-6"
              >
                Start Your AI Journey <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">Today</span>
              </motion.h2>

              <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-xl text-gray-300 max-w-2xl mx-auto mb-8"
              >
                Just $50 admission and $20/month unlocks world-class AI education
              </motion.p>

              <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex flex-col sm:flex-row justify-center gap-4 items-center"
              >
                <Link
                    href={'/pages/apply'}
                    className="relative group inline-flex items-center justify-center"
                >
                <span className="relative z-10 px-8 py-3 bg-gradient-to-r from-yellow-600 to-yellow-800 rounded-full font-medium text-white group-hover:from-yellow-500 group-hover:to-yellow-700 transition-all duration-300 shadow-lg group-hover:shadow-yellow-500/30 whitespace-nowrap">
                  Enroll Now - $70
                </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-yellow-700 to-yellow-900 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-md"></span>
                </Link>
                <Link
                    href={''}
                    className="px-8 py-3 border border-yellow-500 text-yellow-400 rounded-full hover:bg-yellow-500/10 transition-all font-medium flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  <FaHandsHelping /> Financial Aid
                </Link>
              </motion.div>
            </div>
          </AnimatedSection>
        </main>
      </>
  );
};

export default AIEducationPage;