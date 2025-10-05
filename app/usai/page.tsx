'use client';

import Link from 'next/link';
import { useState } from 'react';

const KindergartenSTEM = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="min-h-screen bg-gradient-to-b from-amber-50 via-pink-50 to-purple-50">
            {/* Hero Section */}
            <section className="relative pt-12 pb-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto text-center">
                    {/* Badge */}
                    <div className="inline-block mb-6 px-6 py-2 bg-gradient-to-r from-amber-300 to-orange-400 text-amber-900 font-bold rounded-full shadow-md animate-pulse">
                        🌟 Logical & Physical AI Education for Kids
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 leading-tight mb-6">
                        Kindergarten <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">STEM Entrepreneurs</span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-10 leading-relaxed">
                        Nurture curiosity, creativity, and confidence in your 5–6 year old through playful robotics, AI storytelling, and hands-on invention—building the foundation for tomorrow’s innovators.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
                        <Link
                            href="/usai/apply"
                            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-bold shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
                        >
                            🎒 Enroll Now — Only $70 Admission
                        </Link>
                        <button className="border-2 border-purple-300 text-purple-700 px-8 py-4 rounded-full text-lg font-medium hover:bg-purple-50 transition">
                            ▶️ Watch Our Classroom Tour
                        </button>
                    </div>

                    {/* Pricing Highlight */}
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 max-w-md mx-auto border border-purple-200 shadow-md">
                        <div className="text-2xl font-bold text-purple-800 mb-2">Transparent Pricing</div>
                        <div className="flex justify-center items-baseline gap-2 mb-1">
                            <span className="text-4xl font-extrabold text-gray-900">$70</span>
                            <span className="text-gray-600">one-time admission</span>
                        </div>
                        <div className="flex justify-center items-baseline gap-2">
                            <span className="text-3xl font-bold text-gray-900">$35</span>
                            <span className="text-gray-600">per month</span>
                        </div>
                        <p className="text-sm text-gray-500 mt-2">Excluding all materials, robot kits, and weekly take-home projects!</p>
                    </div>
                </div>
            </section>

            {/* What They'll Learn */}
            <section className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                            What Your Child Will Create & Learn
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Through play, storytelling, and building, your child develops real-world skills disguised as fun!
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: '🤖', title: 'Build Robots', desc: 'Simple motors, sensors, and stories' },
                            { icon: '🧠', title: 'Think Like AI', desc: 'Pattern games & smart choices' },
                            { icon: '🎨', title: 'Create Smart Art', desc: 'AI-assisted drawing & music' },
                            { icon: '💡', title: 'Solve Problems', desc: 'Team challenges & inventions' },
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 text-center border border-purple-100 hover:border-purple-300 transition"
                            >
                                <div className="text-5xl mb-4">{item.icon}</div>
                                <h3 className="font-bold text-lg text-gray-800 mb-2">{item.title}</h3>
                                <p className="text-gray-600 text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Program Details */}
            <section className="py-16 bg-gradient-to-r from-amber-100 to-pink-100">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                                Designed for Little Hands, Big Minds
                            </h2>
                            <ul className="space-y-4">
                                {[
                                    '👶 Ages 4–9 (Kindergarten)',
                                    '📅 5 sessions/week • 120 minutes each',
                                    '🏫 Small groups: max 10 children',
                                    '👩‍🏫 1:10 teacher-to-student ratio',
                                    '📦 Code Literacy for All',
                                    '🎓 End-of-term showcase for families',
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start">
                                        <span className="text-purple-600 mr-3 text-xl">✓</span>
                                        <span className="text-gray-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-white rounded-3xl p-6 shadow-lg">
                            <div className="text-center">
                                <div className="text-8xl mb-4 animate-bounce">👧</div>
                                <blockquote className="text-xl italic text-gray-700 mb-4">
                                    “I made my robot hug my teddy bear!”
                                </blockquote>
                                <div className="font-bold text-purple-700">— Abdullah, Age 7</div>
                                <div className="flex justify-center mt-4 space-x-1">
                                    {[...Array(5)].map((_, i) => (
                                        <span key={i} className="text-yellow-400 text-xl">★</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Parents Love Us */}
            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        Why Families Choose Us
                    </h2>
                    <p className="text-gray-600 mb-12">
                        We blend emotional safety with intellectual adventure.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: 'No Screens Overload',
                                desc: 'Most activities are hands-on with physical robots and crafts.',
                            },
                            {
                                title: 'Growth Mindset Focus',
                                desc: 'We celebrate “happy mistakes” and creative problem-solving.',
                            },
                            {
                                title: 'Future-Ready Skills',
                                desc: 'AI literacy starts with curiosity—not code.',
                            },
                        ].map((item, i) => (
                            <div key={i} className="p-6">
                                <div className="text-4xl mb-4 text-purple-600">✨</div>
                                <h3 className="font-bold text-lg text-gray-800 mb-2">{item.title}</h3>
                                <p className="text-gray-600">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA with Pricing Reminder */}
            <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Give Your Child the Gift of Confident Creation
                    </h2>
                    <p className="text-purple-100 text-lg mb-8 max-w-2xl mx-auto">
                        Limited spots available. Admission: <strong>$70</strong> • Monthly: <strong>$35</strong>
                    </p>

                    <div
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        className="inline-block"
                    >
                        <Link
                            href="/usai/apply"
                            className={`bg-white text-purple-700 px-10 py-5 rounded-full text-xl font-bold shadow-xl transition-all transform ${
                                isHovered ? 'scale-110 shadow-2xl' : 'scale-100'
                            }`}
                        >
                            🎉 Secure Your Spot Today
                        </Link>
                    </div>

                    <p className="text-purple-200 text-sm mt-6">
                        Includes starter robot kit, project journal, and family showcase invitation!
                    </p>
                </div>
            </section>
        </div>
    );
};

export default KindergartenSTEM;