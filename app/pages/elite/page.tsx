'use client'

import Head from 'next/head';
import Link from 'next/link';
import {
  FaGlobe, FaBook, FaPen, FaHeadphones, FaMicrophone,
  FaCrown, FaChartLine, FaShieldAlt, FaNetworkWired,
  FaLightbulb, FaRobot, FaAward, FaChevronRight,
  FaCheck, FaUserTie, FaGraduationCap, FaHandshake
} from 'react-icons/fa';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Types
interface AssessmentComponent {
  title: string;
  description: string;
  icon: JSX.Element;
  details: string[];
}

interface ValueProposition {
  icon: JSX.Element;
  title: string;
  description: string;
  stat?: string;
}

interface PricingTier {
  name: string;
  price: string;
  features: string[];
  cta: string;
  featured: boolean;
}

// Data
const assessmentComponents: AssessmentComponent[] = [
  {
    title: 'Text Analysis Mastery',
    description: 'Decipher complex global texts with analytical precision',
    icon: <FaBook className="text-xl text-amber-400" />,
    details: [
      '20% of total assessment',
      '60 minute case study',
      'Cultural context evaluation',
      'Critical analysis scoring'
    ]
  },
  {
    title: 'Strategic Writing',
    description: 'Craft compelling narratives with structured techniques',
    icon: <FaPen className="text-xl text-amber-400" />,
    details: [
      '20% of total assessment',
      '45 minute essay',
      'Persuasive structure grading',
      'Executive tone evaluation'
    ]
  },
  {
    title: 'Global Listening',
    description: 'Master comprehension of diverse professional contexts',
    icon: <FaHeadphones className="text-xl text-amber-400" />,
    details: [
      '15% of total assessment',
      '30 minute audio analysis',
      'Accent comprehension',
      'Contextual understanding'
    ]
  },
  {
    title: 'Executive Speaking',
    description: 'Command boardroom discussions with confidence',
    icon: <FaMicrophone className="text-xl text-amber-400" />,
    details: [
      '15% of total assessment',
      '45 minute presentation',
      'Articulation scoring',
      'Leadership presence'
    ]
  },
  {
    title: 'Leadership Simulation',
    description: 'Demonstrate visionary leadership in scenarios',
    icon: <FaCrown className="text-xl text-amber-400" />,
    details: [
      '20% of total assessment',
      '60 minute role play',
      'Decision-making evaluation',
      'Crisis management'
    ]
  },
  {
    title: 'AI Literacy Test',
    description: 'Evaluate proficiency in leveraging AI technologies',
    icon: <FaRobot className="text-xl text-amber-400" />,
    details: [
      '10% of total assessment',
      '30 minute practical',
      'Technical comprehension',
      'Ethical application'
    ]
  }
];

const valuePropositions: ValueProposition[] = [
  {
    icon: <FaChartLine className="text-2xl text-amber-400" />,
    title: 'Career Acceleration',
    description: 'Certified professionals achieve faster promotions',
    stat: '87%'
  },
  {
    icon: <FaShieldAlt className="text-2xl text-amber-400" />,
    title: 'Global Recognition',
    description: 'Recognized by top-tier organizations worldwide',
    stat: '92%'
  },
  {
    icon: <FaNetworkWired className="text-2xl text-amber-400" />,
    title: 'Elite Network',
    description: 'Access to exclusive global leadership community'
  },
  {
    icon: <FaLightbulb className="text-2xl text-amber-400" />,
    title: 'Innovation Edge',
    description: 'Cutting-edge methodologies for modern executives'
  }
];

const pricingTiers: PricingTier[] = [
  {
    name: 'Standard',
    price: '$299',
    features: [
      'Full assessment access',
      'Digital certification',
      'Basic credential verification',
      'Preparation materials',
      'Email support'
    ],
    cta: 'Start Standard',
    featured: false
  },
  {
    name: 'Premium',
    price: '$499',
    features: [
      'Priority assessment scheduling',
      'Executive coaching session',
      'Enhanced digital credential',
      'LinkedIn verification',
      'Dedicated support',
      'Performance analytics'
    ],
    cta: 'Choose Premium',
    featured: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    features: [
      'Bulk enrollment discounts',
      'Custom assessments',
      'Account manager',
      'Analytics dashboard',
      'Team certifications',
      'White-glove onboarding'
    ],
    cta: 'Contact Sales',
    featured: false
  }
];

// Animated Components
const AnimatedSection = ({ children, className = '', bgPattern = false }: { children: React.ReactNode; className?: string; bgPattern?: boolean }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
      <motion.section
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className={`relative py-20 md:py-28 overflow-hidden ${className}`}
      >
        {bgPattern && (
            <div className="absolute inset-0 opacity-10 bg-[url('/gold-grid-pattern.svg')] bg-[length:120px_120px]"></div>
        )}
        {children}
      </motion.section>
  );
};

const GoldenCard = ({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => {
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
          whileHover={{ y: -8, scale: 1.02 }}
          className={`bg-gradient-to-br from-gray-900 to-black rounded-xl border border-gray-800 hover:border-amber-500/50 transition-all shadow-xl hover:shadow-amber-500/10 ${className}`}
      >
        {children}
      </motion.div>
  );
};

const GoldenParticles = () => {
  return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
            <motion.div
                key={i}
                className="absolute rounded-full bg-amber-500/10"
                initial={{
                  x: Math.random() * 100,
                  y: Math.random() * 100,
                  width: Math.random() * 8 + 2,
                  height: Math.random() * 8 + 2,
                  opacity: Math.random() * 0.2 + 0.1
                }}
                animate={{
                  y: [0, Math.random() * 100 - 50],
                  x: [0, Math.random() * 100 - 50],
                  transition: {
                    duration: Math.random() * 20 + 10,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    ease: 'easeInOut'
                  }
                }}
            />
        ))}
      </div>
  );
};

const EliteCertificationPage = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  return (
      <>
        <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-amber-900/10 text-white">
          {/* Hero Section */}
          <AnimatedSection className="pt-36 pb-32">
            <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-amber-900/20 z-0">
              <GoldenParticles />
              <div className="absolute inset-0 opacity-20 bg-[url('/gold-grid-pattern.svg')] bg-[length:150px_150px]"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10 text-center">
              <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="inline-flex items-center justify-center w-20 h-20 bg-amber-500/20 rounded-full mb-8 backdrop-blur-sm border border-amber-500/30"
              >
                <FaGlobe className="text-3xl text-amber-400" />
              </motion.div>

              <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-amber-600 leading-tight"
              >
                ELITE Global Leadership <br />Certification
              </motion.h1>

              <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 text-gray-300"
              >
                The gold standard in executive communication, strategic leadership, and AI fluency for global business leaders
              </motion.p>

              <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex flex-col sm:flex-row justify-center gap-4"
              >
                <Link
                    href={'/pages/apply'}
                    className="relative group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-800 rounded-full font-medium text-white hover:from-amber-500 hover:to-amber-700 transition-all duration-300 shadow-lg hover:shadow-amber-500/30"
                >
                  <span className="relative z-10">Begin Certification</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-amber-700 to-amber-900 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-md"></span>
                </Link>
                <Link
                    href={'/pages/study'}
                    className="px-8 py-4 border border-gray-700 hover:border-amber-500 text-white rounded-full hover:bg-amber-500/10 transition-all font-medium inline-flex items-center justify-center gap-2"
                >
                  Explore Program <FaChevronRight className="text-sm" />
                </Link>
              </motion.div>

              <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="mt-16 flex flex-wrap justify-center gap-6 text-sm text-gray-400"
              >
                <div className="flex items-center gap-3">
                  <FaAward className="text-amber-400 text-lg" /> Industry Recognized
                </div>
                <div className="flex items-center gap-3">
                  <FaUserTie className="text-amber-400 text-lg" /> Executive Level
                </div>
                <div className="flex items-center gap-3">
                  <FaGraduationCap className="text-amber-400 text-lg" /> Accredited
                </div>
                <div className="flex items-center gap-3">
                  <FaHandshake className="text-amber-400 text-lg" /> Global Network
                </div>
              </motion.div>
            </div>
          </AnimatedSection>

          {/* Value Propositions */}
          <AnimatedSection bgPattern>
            <div className="container mx-auto px-4">
              <div className="text-center mb-16 max-w-3xl mx-auto">
                <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="inline-block bg-gradient-to-r from-amber-500 to-amber-700 text-white px-6 py-2 rounded-full text-sm font-medium mb-4 shadow-lg shadow-amber-500/30"
                >
                  WHY ELITE CERTIFICATION
                </motion.span>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl md:text-5xl font-bold mb-4"
                >
                  The <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-amber-500">Definitive</span> Leadership Credential
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-xl text-gray-300"
                >
                  Distinguish yourself in the global marketplace with the most comprehensive leadership validation
                </motion.p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {valuePropositions.map((prop, index) => (
                    <GoldenCard key={index} delay={index * 0.1}>
                      <div className="p-8 h-full flex flex-col">
                        <div className="flex items-center mb-6">
                          <div className="p-4 bg-gradient-to-br from-amber-500/10 to-amber-700/10 rounded-xl mr-4 text-amber-400">
                            {prop.icon}
                          </div>
                          <h3 className="text-xl font-bold text-white">{prop.title}</h3>
                        </div>
                        {prop.stat && (
                            <p className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-amber-500 mb-3">
                              {prop.stat}
                            </p>
                        )}
                        <p className="text-gray-400">{prop.description}</p>
                      </div>
                    </GoldenCard>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Assessment Components */}
          <AnimatedSection className="bg-gradient-to-br from-gray-950 via-black to-amber-900/20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16 max-w-3xl mx-auto">
                <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="inline-block bg-gradient-to-r from-amber-500 to-amber-700 text-white px-6 py-2 rounded-full text-sm font-medium mb-4 shadow-lg shadow-amber-500/30"
                >
                  COMPREHENSIVE ASSESSMENT
                </motion.span>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl md:text-5xl font-bold mb-4"
                >
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-amber-500">Multidimensional</span> Evaluation
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-xl text-gray-300"
                >
                  Measuring the complete spectrum of executive leadership capabilities
                </motion.p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {assessmentComponents.map((test, index) => (
                    <GoldenCard key={index} delay={index * 0.1}>
                      <div className="p-8 h-full flex flex-col">
                        <div className="flex items-center mb-6">
                          <div className="p-4 bg-gradient-to-br from-amber-500/10 to-amber-700/10 rounded-xl mr-4">
                            {test.icon}
                          </div>
                          <h3 className="text-xl font-bold text-white">{test.title}</h3>
                        </div>
                        <p className="text-gray-400 mb-6">{test.description}</p>
                        <ul className="mt-auto space-y-3">
                          {test.details.map((detail, idx) => (
                              <li key={idx} className="flex items-start text-sm text-gray-300">
                                <FaCheck className="text-amber-400 mr-2 mt-1 flex-shrink-0" />
                                {detail}
                              </li>
                          ))}
                        </ul>
                      </div>
                    </GoldenCard>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Pricing Tiers */}
          <AnimatedSection className="bg-gradient-to-br from-black via-gray-900 to-amber-900/20" bgPattern>
            <div className="container mx-auto px-4">
              <div className="text-center mb-16 max-w-3xl mx-auto">
                <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="inline-block bg-gradient-to-r from-amber-500 to-amber-700 text-white px-6 py-2 rounded-full text-sm font-medium mb-4 shadow-lg shadow-amber-500/30"
                >
                  INVESTMENT OPTIONS
                </motion.span>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl md:text-5xl font-bold mb-4"
                >
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-amber-500">Flexible</span> Certification Paths
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-xl text-gray-300"
                >
                  Choose the program that matches your professional aspirations
                </motion.p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {pricingTiers.map((tier, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className={`relative ${tier.featured ? 'lg:-translate-y-4' : ''}`}
                    >
                      {tier.featured && (
                          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-500 to-amber-700 text-white px-6 py-1 rounded-full text-sm font-bold shadow-lg shadow-amber-500/30 whitespace-nowrap">
                            RECOMMENDED CHOICE
                          </div>
                      )}

                      <GoldenCard>
                        <div className={`p-8 ${tier.featured ? 'border-b-2 border-amber-500' : 'border-b border-gray-800'}`}>
                          <h3 className="text-2xl font-bold text-white mb-1">{tier.name}</h3>
                          <p className={`text-lg ${tier.featured ? 'text-amber-200' : 'text-gray-400'}`}>
                            {tier.price === 'Custom' ? 'Tailored enterprise solution' : 'Complete certification package'}
                          </p>
                        </div>
                        <div className="p-8">
                          <div className="text-5xl font-bold mb-6 text-white flex items-end justify-center">
                            {tier.price}
                            {tier.price !== "Custom" && (
                                <span className="text-lg text-gray-400 ml-2">/assessment</span>
                            )}
                          </div>
                          <ul className="space-y-4 mb-8">
                            {tier.features.map((feature, idx) => (
                                <li key={idx} className="flex items-start text-gray-300">
                                  <FaCheck className={`text-lg mr-3 mt-0.5 ${tier.featured ? 'text-amber-400' : 'text-amber-500'}`} />
                                  {feature}
                                </li>
                            ))}
                          </ul>
                          <Link
                              href={''}
                              className={`w-full block text-center ${tier.featured ? 'bg-gradient-to-r from-amber-500 to-amber-700 hover:from-amber-400 hover:to-amber-600' : 'bg-gray-800 hover:bg-gray-700'} text-white py-4 rounded-lg transition-all font-medium text-lg`}
                          >
                            {tier.cta}
                          </Link>
                        </div>
                      </GoldenCard>
                    </motion.div>
                ))}
              </div>

              <div className="mt-12 text-center text-gray-400">
                <p>Need help deciding? <Link href={''} className="text-amber-400 hover:underline">Compare all plans</Link></p>
              </div>
            </div>
          </AnimatedSection>

          {/* Final CTA */}
          <AnimatedSection className="bg-gradient-to-br from-black via-amber-900/20 to-black">
            <div className="absolute inset-0 bg-[url('/gold-grid-pattern.svg')] opacity-10"></div>
            <div className="container mx-auto px-4 text-center relative">
              <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="text-4xl md:text-5xl font-bold mb-6"
              >
                Join the <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-amber-500">Global Elite</span>
              </motion.h2>

              <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-xl text-gray-300 max-w-2xl mx-auto mb-8"
              >
                Elevate your leadership profile with the world&apos;s most respected certification
              </motion.p>

              <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex flex-col sm:flex-row justify-center gap-4"
              >
                <Link
                    href={'/pages/apply'}
                    className="px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-800 text-white rounded-full hover:from-amber-500 hover:to-amber-700 transition-all shadow-lg hover:shadow-amber-500/30 font-medium"
                >
                  Begin Certification
                </Link>
                <Link
                    href={''}
                    className="px-8 py-4 border border-amber-500 text-amber-400 rounded-full hover:bg-amber-500/10 transition-all font-medium"
                >
                  Speak to Advisor
                </Link>
              </motion.div>
            </div>
          </AnimatedSection>
        </main>
      </>
  );
};

export default EliteCertificationPage;