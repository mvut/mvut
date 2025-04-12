'use client';
import { FaArrowRight, FaChartLine, FaLightbulb, FaRocket, FaShieldAlt } from 'react-icons/fa';
import Link from 'next/link';
import { Playfair_Display, Poppins } from 'next/font/google';

// Google Fonts
const playfair = Playfair_Display({
    subsets: ['latin'],
    weight: ['400', '600', '700'],
    variable: '--font-playfair',
});

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['300', '400', '600', '700'],
    variable: '--font-poppins',
});

const HeroSection = () => {
    const stats = [
        { value: "50+", label: "Research Papers" },
        { value: "30+", label: "Industry Partners" },
        { value: "100%", label: "Placement Rate" },
        { value: "5x", label: "Growth Since 2020" }
    ];

    return (
        <section className={`relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-red-900 ${playfair.variable} ${poppins.variable}`}>
            {/* Diagonal pattern overlay */}
            <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_bottom_right,_transparent_49%,_red_50%,_transparent_51%)] bg-[length:40px_40px]">
                hero
            </div>

            <div className="container mx-auto px-6 py-24 flex flex-col lg:flex-row items-center justify-between gap-12">
                {/* Left content */}
                <div className="lg:w-1/2 space-y-8 z-10">
                    <div className="inline-block px-4 py-2 bg-red-900/30 backdrop-blur-sm rounded-full border border-red-700/50 mb-6">
                        <p className="text-red-400 font-poppins text-sm font-medium">EST. 2022</p>
                    </div>

                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600 font-playfair">
              MVIT AI
            </span>
                        <span className="text-white block mt-2">Innovation Lab</span>
                    </h1>

                    <p className="text-xl text-gray-300 max-w-2xl font-poppins">
                        Where cutting-edge artificial intelligence meets real-world impact.
                        Join the revolution shaping tomorrow&apos;s technology today.
                    </p>

                    <div className="flex flex-wrap gap-4 mt-8">
                        <Link
                            href="/pages/apply"
                            className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-800 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-red-900/30 transition-all duration-300 flex items-center gap-2"
                        >
                            Apply Now <FaArrowRight />
                        </Link>
                        <Link
                            href="/pages/study"
                            className="px-8 py-4 bg-transparent text-white font-semibold rounded-lg border-2 border-red-900 hover:bg-red-900/20 transition-all duration-300"
                        >
                            Explore Programs
                        </Link>
                    </div>
                </div>

                {/* Right content */}
                <div className="lg:w-1/2 grid grid-cols-2 gap-6 z-10">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-red-700 transition-all duration-300"
                        >
                            <p className="text-4xl font-bold text-red-400 font-playfair">{stat.value}</p>
                            <p className="text-gray-300 mt-2 font-poppins">{stat.label}</p>
                        </div>
                    ))}

                    <div className="col-span-2 bg-gradient-to-br from-black to-red-900/50 p-8 rounded-xl border border-gray-800">
                        <h3 className="text-xl font-semibold text-white mb-4 font-playfair">Why Choose MVIT AI?</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3 text-gray-300 font-poppins">
                                <span className="text-red-400 mt-1"><FaChartLine /></span>
                                Industry-leading AI research facilities
                            </li>
                            <li className="flex items-start gap-3 text-gray-300 font-poppins">
                                <span className="text-red-400 mt-1"><FaLightbulb /></span>
                                Hands-on projects with real-world applications
                            </li>
                            <li className="flex items-start gap-3 text-gray-300 font-poppins">
                                <span className="text-red-400 mt-1"><FaRocket /></span>
                                Startup incubation for AI entrepreneurs
                            </li>
                            <li className="flex items-start gap-3 text-gray-300 font-poppins">
                                <span className="text-red-400 mt-1"><FaShieldAlt /></span>
                                Ethical AI development focus
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;