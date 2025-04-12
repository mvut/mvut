'use client';
import { FormEvent, useState, useEffect } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FiLock, FiLogIn, FiMail, FiBook } from "react-icons/fi";
import Image from "next/image";
import MVITLogo from '@/public/mvutflame.png';

export default function StudentLoginForm() {
    const router = useRouter();
    const { data: session, status } = useSession();
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    // Redirect if already logged in
    useEffect(() => {
        if (status === "authenticated") {
            router.push('/mlms/dashboard');
        }
    }, [status, router]);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        const formData = new FormData(e.currentTarget);
        try {
            const response = await signIn('credentials', {
                login_id: formData.get('login_id'),
                login_key: formData.get('login_key'),
                designation: formData.get('designation'),
                redirect: false
            });

            if (response?.error) {
                throw new Error(response.error);
            }

            router.push('/mlms/dashboard');
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Login failed');
        } finally {
            setIsLoading(false);
        }
    };

    // Show loading state while checking session
    if (status === "loading") {
        return (
            <div className="min-h-screen flex items-center justify-center bg-space-gradient">
                <div className="flex flex-col items-center">
                    <div className="relative w-32 h-32 mb-6">
                        <div className="absolute inset-0 rounded-full bg-purple-500/20 animate-ping"></div>
                        <div className="absolute inset-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center">
                            <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                        </div>
                    </div>
                    <span className="text-white text-lg font-medium tracking-wider">PREPARING PORTAL...</span>
                </div>
            </div>
        );
    }

    // If authenticated, don't render anything (will redirect)
    if (status === "authenticated") {
        return null;
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-space-gradient p-4 relative overflow-hidden">
            {/* Cosmic Background Animation */}
            <div className="absolute inset-0 overflow-hidden z-0">
                {/* Stars */}
                <div className="absolute inset-0 bg-starfield opacity-80"></div>

                {/* Nebula Clouds */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-900/30 rounded-full filter blur-[100px] animate-float-slow"></div>
                <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-blue-900/30 rounded-full filter blur-[80px] animate-float-medium"></div>

                {/* Pulsing Glow */}
                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-purple-900/30 to-transparent opacity-50"></div>

                {/* Floating Particles */}
                {[...Array(30)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute rounded-full bg-white/10"
                        style={{
                            width: `${Math.random() * 4 + 1}px`,
                            height: `${Math.random() * 4 + 1}px`,
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            animation: `float ${Math.random() * 20 + 10}s linear infinite`,
                            animationDelay: `${Math.random() * 5}s`
                        }}
                    ></div>
                ))}
            </div>

            {/* Main Login Card */}
            <div className="w-full max-w-md bg-glass backdrop-blur-xl rounded-2xl shadow-cosmic overflow-hidden border border-white/10 transform transition-all duration-500 hover:shadow-cosmic-hover z-10">
                {/* Glowing Header */}
                <div className="relative bg-gradient-to-br from-purple-900/80 to-indigo-900/80 p-8 text-center border-b border-white/10 overflow-hidden">
                    {/* Header Glow Effect */}
                    <div className="absolute -inset-4 bg-purple-500/20 rounded-full filter blur-xl animate-pulse-slow"></div>

                    <div className="relative flex flex-col items-center justify-center">
                        <div
                            className="relative w-28 h-28 mb-5 transition-all duration-700 hover:scale-110 group"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            <div className={`absolute inset-0 bg-purple-500/20 rounded-full blur-md transition-all duration-700 ${isHovered ? 'opacity-80 scale-110' : 'opacity-0'}`}></div>
                            <Image
                                src={MVITLogo}
                                alt="MVIT Logo"
                                fill
                                className={`object-contain transition-all duration-700 ${isHovered ? 'rotate-6 scale-105' : ''}`}
                                priority
                            />
                        </div>
                        <h1 className="text-4xl font-bold text-white tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200 mb-2">
                            MVIT PORTAL
                        </h1>
                        <p className="text-white/80 text-sm font-light tracking-wider">Mansha Virtual Institute of Technologies</p>
                    </div>
                </div>

                {/* Login Form */}
                <form onSubmit={handleSubmit} className="p-8 space-y-6 relative">
                    {/* Error Message */}
                    {error && (
                        <div className="bg-red-500/10 border border-red-500/50 text-red-100 p-4 rounded-lg backdrop-blur-sm animate-fade-in flex items-center">
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            <p>{error}</p>
                        </div>
                    )}

                    <div className="space-y-5">
                        {/* Email Field */}
                        <div className="relative group">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-purple-300/80 group-focus-within:text-purple-400 transition-colors duration-300">
                                <FiMail className="text-lg" />
                            </div>
                            <input
                                name="login_id"
                                type="text"
                                placeholder="Student Email"
                                required
                                className="w-full pl-10 pr-4 py-3 border border-white/10 rounded-lg focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/30 bg-white/5 backdrop-blur-sm placeholder-white/40 text-white transition-all duration-300 focus:shadow-purple-glow"
                            />
                        </div>

                        {/* Password Field */}
                        <div className="relative group">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-purple-300/80 group-focus-within:text-purple-400 transition-colors duration-300">
                                <FiLock className="text-lg" />
                            </div>
                            <input
                                name="login_key"
                                type="password"
                                placeholder="Password"
                                required
                                className="w-full pl-10 pr-4 py-3 border border-white/10 rounded-lg focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/30 bg-white/5 backdrop-blur-sm placeholder-white/40 text-white transition-all duration-300 focus:shadow-purple-glow"
                            />
                        </div>

                        {/* Hidden Designation Field */}
                        <div className="relative hidden">
                            <select
                                name="designation"
                                className="w-full pl-10 pr-3 py-3 border border-white/10 rounded-lg bg-white/5 backdrop-blur-sm text-white"
                                defaultValue="President"
                            >
                                <option value="President">Student</option>
                            </select>
                        </div>

                        {/* Remember Me & Forgot Password */}
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    className="h-4 w-4 text-purple-500 focus:ring-purple-500 border-white/30 rounded bg-white/5 transition-all duration-200"
                                />
                                <label htmlFor="remember-me" className="ml-2 block text-sm text-white/70">
                                    Remember me
                                </label>
                            </div>
                            <div className="text-sm">
                                <a href="#" className="font-medium text-purple-300 hover:text-purple-200 transition-colors duration-200">
                                    Forgot password?
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Login Button */}
                    <button
                        type="submit"
                        disabled={isLoading}
                        className={`w-full flex items-center justify-center py-4 px-6 rounded-lg text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all duration-300 transform hover:scale-[1.02] active:scale-95 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30 relative overflow-hidden ${isLoading ? 'opacity-90 cursor-not-allowed' : ''}`}
                    >
                        {/* Button Glow */}
                        <span className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 opacity-0 hover:opacity-100 transition-opacity duration-300"></span>

                        {isLoading ? (
                            <span className="flex items-center relative">
                                <div className="absolute -left-6 w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                <span className="ml-2 tracking-wider">AUTHENTICATING...</span>
                            </span>
                        ) : (
                            <>
                                <FiLogIn className="mr-3 text-lg" />
                                <span className="tracking-wider">STUDENT LOGIN</span>
                            </>
                        )}
                    </button>

                    {/* Additional Options */}
                    <div className="text-center text-sm text-white/60 pt-2">
                        <p className="flex items-center justify-center">
                            <FiBook className="mr-2 text-white/70" />
                            <span className="tracking-wide">New to MVIT?{' '}</span>
                            <a href="/student/register" className="text-purple-300 hover:text-white ml-1 font-medium transition-colors duration-200 tracking-wider">
                                REGISTER HERE
                            </a>
                        </p>
                    </div>
                </form>
            </div>

            {/* Footer */}
            <div className="absolute bottom-6 left-0 w-full text-center text-white/40 text-xs tracking-wider z-10">
                Code Literacy for All
            </div>

            <style jsx global>{`
                .bg-space-gradient {
                    background: radial-gradient(ellipse at bottom, #0F172A 0%, #020617 100%);
                }

                .bg-glass {
                    background: rgba(15, 23, 42, 0.7);
                    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.2);
                    backdrop-filter: blur(12px);
                    -webkit-backdrop-filter: blur(12px);
                }

                .shadow-cosmic {
                    box-shadow: 0 0 20px rgba(139, 92, 246, 0.1), 0 0 40px rgba(124, 58, 237, 0.1);
                }

                .shadow-cosmic-hover {
                    box-shadow: 0 0 30px rgba(139, 92, 246, 0.2), 0 0 60px rgba(124, 58, 237, 0.2);
                }

                .shadow-purple-glow {
                    box-shadow: 0 0 0 3px rgba(167, 139, 250, 0.3);
                }

                .bg-starfield {
                    background-image:
                            radial-gradient(white, rgba(255,255,255,.2) 1px, transparent 1px),
                            radial-gradient(white, rgba(255,255,255,.15) 1px, transparent 1px),
                            radial-gradient(white, rgba(255,255,255,.1) 1px, transparent 1px);
                    background-size: 200px 200px, 300px 300px, 400px 400px;
                    background-position: 0 0, 40px 60px, 130px 270px;
                }

                @keyframes float {
                    0% {
                        transform: translateY(0) translateX(0);
                        opacity: 1;
                    }
                    100% {
                        transform: translateY(-100vh) translateX(20px);
                        opacity: 0;
                    }
                }

                @keyframes float-slow {
                    0%, 100% {
                        transform: translate(0, 0);
                    }
                    50% {
                        transform: translate(20px, 20px);
                    }
                }

                @keyframes float-medium {
                    0%, 100% {
                        transform: translate(0, 0);
                    }
                    50% {
                        transform: translate(-15px, -15px);
                    }
                }

                @keyframes pulse-slow {
                    0%, 100% {
                        opacity: 0.2;
                    }
                    50% {
                        opacity: 0.4;
                    }
                }

                .animate-float-slow {
                    animation: float-slow 15s ease-in-out infinite;
                }

                .animate-float-medium {
                    animation: float-medium 10s ease-in-out infinite;
                }

                .animate-pulse-slow {
                    animation: pulse-slow 6s ease-in-out infinite;
                }

                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(-10px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                .animate-fade-in {
                    animation: fadeIn 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
                }
            `}</style>
        </div>
    );
}