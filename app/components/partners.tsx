'use client';

import ABSI from '@/public/resources/partners/absi.png';
import MIKES from '@/public/resources/partners/mikesint.png';
import MIKEVERSITY from '@/public/resources/partners/mikeversity.png';
import ABS_ACADEMY from '@/public/resources/partners/abs-academy.png';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
});

type Partner = {
    name: string;
    logo: any;
    url: string;
    tagline: string;
    description: string;
    focusAreas: string[];
    impact: string;
    color: 'blue' | 'purple' | 'pink' | 'amber';
};

const partners: Partner[] = [
    {
        name: 'ASB International',
        logo: ABSI,
        url: '/pages/absinternational',
        tagline: 'Social Training Support',
        description:
            'ASB International bridges the gap between corporations and social impact through customized training programs.',
        focusAreas: ['Corporate Training', 'CSR Strategy', 'Community Engagement'],
        impact: '200+ corporate partners | 300+ training programs',
        color: 'pink',
    },
    {
        name: 'ABS Academy',
        logo: ABS_ACADEMY,
        url: '/pages/absacademy',
        tagline: 'STEM & AI Education',
        description:
            'ABS Academy prepares the next generation of innovators through cutting-edge STEM education and AI training.',
        focusAreas: ['STEM Curriculum', 'AI Certification', 'Professional Upskilling'],
        impact: '10,000+ graduates | 85% career placement',
        color: 'amber',
    },
];

// Clean, professional color mapping
const colorMap = {
    blue: { border: 'border-blue-500', text: 'text-blue-600', bg: 'bg-blue-50' },
    purple: { border: 'border-purple-500', text: 'text-purple-600', bg: 'bg-purple-50' },
    pink: { border: 'border-pink-500', text: 'text-pink-600', bg: 'bg-pink-50' },
    amber: { border: 'border-amber-500', text: 'text-amber-600', bg: 'bg-amber-50' },
};

export default function StrategicPartners() {
    return (
        <div className={`min-h-screen bg-white py-20 ${montserrat.className}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Strategic Partners
                    </h1>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        We collaborate with visionary organizations to amplify impact, drive innovation, and shape a more equitable future.
                    </p>
                </motion.div>

                {/* Partner Grid */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-8"
                >
                    {partners.map((partner, index) => {
                        const colors = colorMap[partner.color];
                        return (
                            <motion.div
                                key={partner.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -8 }}
                                className={`border ${colors.border} rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 bg-white`}
                            >
                                <Link
                                    href={partner.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block h-full"
                                >
                                    {/* Logo & Tagline */}
                                    <div className={`p-6 ${colors.bg}`}>
                                        <div className="flex items-center space-x-4">
                                            <div className="flex-shrink-0 w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                                                <Image
                                                    src={partner.logo}
                                                    alt={partner.name}
                                                    width={48}
                                                    height={48}
                                                    className="object-contain"
                                                />
                                            </div>
                                            <div>
                                                <h2 className="text-xl font-semibold text-gray-900">{partner.name}</h2>
                                                <p className={`text-sm font-medium ${colors.text}`}>{partner.tagline}</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Body */}
                                    <div className="p-6">
                                        <p className="text-gray-700 mb-5">{partner.description}</p>

                                        <div className="mb-5">
                                            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                                                Focus Areas
                                            </h3>
                                            <div className="flex flex-wrap gap-2">
                                                {partner.focusAreas.map((area) => (
                                                    <span
                                                        key={area}
                                                        className={`text-xs px-2.5 py-1 rounded-md ${colors.bg} ${colors.text} font-medium`}
                                                    >
                            {area}
                          </span>
                                                ))}
                                            </div>
                                        </div>

                                        <div>
                                            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                                                Impact
                                            </h3>
                                            <p className="text-gray-700 text-sm">{partner.impact}</p>
                                        </div>
                                    </div>

                                    {/* CTA */}
                                    <div className="px-6 pb-6">
                    <span className={`inline-flex items-center text-sm font-medium ${colors.text}`}>
                      Learn more
                      <svg
                          className="w-4 h-4 ml-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                                    </div>
                                </Link>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Final CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="mt-20 text-center"
                >
                    <div className="bg-gray-50 rounded-2xl p-10 max-w-4xl mx-auto border border-gray-200">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Become a Strategic Partner</h2>
                        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                            Join a network of forward-thinking organizations committed to innovation, education, and social impact.
                        </p>
                        <button
                            className="inline-flex items-center px-6 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors"
                        >
                            Initiate Partnership
                            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}