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
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-gray-900">
                <div className="flex flex-col items-center">
                    <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin mb-4"></div>
                    <span className="text-white text-lg font-medium">Loading...</span>
                </div>
            </div>
        );
    }

    // If authenticated, don't render anything (will redirect)
    if (status === "authenticated") {
        return null;
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-gray-900 p-4 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-0 w-64 h-64 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-0 left-1/2 w-64 h-64 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
            </div>

            <div className="w-full max-w-md bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden border border-white/20 transform transition-all duration-500 hover:shadow-3xl hover:scale-[1.01]">
                {/* Header with MVIT Logo */}
                <div className="bg-gradient-to-r from-indigo-700 to-purple-700 p-6 text-center border-b border-white/20">
                    <div className="flex flex-col items-center justify-center">
                        <div
                            className="relative w-24 h-24 mb-4 transition-all duration-500 hover:scale-110"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            <Image
                                src={MVITLogo}
                                alt="MVIT Logo"
                                fill
                                className={`object-contain transition-transform duration-700 ${isHovered ? 'rotate-6' : ''}`}
                                priority
                            />
                        </div>
                        <h1 className="text-3xl font-bold text-white tracking-tight">MVIT Student Portal</h1>
                        <p className="text-white/80 text-sm mt-1 font-light">Mansha Virtual Institute of Technologies</p>
                    </div>
                </div>

                {/* Login Form */}
                <form onSubmit={handleSubmit} className="p-8 space-y-6">
                    {error && (
                        <div className="bg-red-100/80 border-l-4 border-red-500 text-red-800 p-4 rounded-lg animate-fade-in">
                            <p>{error}</p>
                        </div>
                    )}

                    <div className="space-y-5">
                        {/* Email Field */}
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <FiMail className="text-gray-500" />
                            </div>
                            <input
                                name="login_id"
                                type="text"
                                placeholder="Student Email"
                                required
                                className="w-full pl-10 pr-3 py-3 border border-gray-300/70 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 bg-white/70 backdrop-blur-sm transition-all duration-300 focus:shadow-md"
                            />
                        </div>

                        {/* Password Field */}
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <FiLock className="text-gray-500" />
                            </div>
                            <input
                                name="login_key"
                                type="password"
                                placeholder="Password"
                                required
                                className="w-full pl-10 pr-3 py-3 border border-gray-300/70 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 bg-white/70 backdrop-blur-sm transition-all duration-300 focus:shadow-md"
                            />
                        </div>

                        {/* Hidden Designation Field */}
                        <div className="relative hidden">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <FiLock className="text-gray-500" />
                            </div>
                            <select
                                name="designation"
                                className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 bg-white/70"
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
                                    className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded transition-all duration-200"
                                />
                                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                                    Remember me
                                </label>
                            </div>
                            <div className="text-sm">
                                <a href="#" className="font-medium text-purple-600 hover:text-purple-500 transition-colors duration-200">
                                    Forgot password?
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Login Button */}
                    <button
                        type="submit"
                        disabled={isLoading}
                        className={`w-full flex items-center justify-center py-3 px-4 border border-transparent rounded-lg shadow-lg text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-300 transform hover:scale-[1.02] active:scale-95 ${isLoading ? 'opacity-75 cursor-not-allowed' : ''}`}
                    >
                        {isLoading ? (
                            <span className="flex items-center">
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Signing in...
                            </span>
                        ) : (
                            <>
                                <FiLogIn className="mr-2" />
                                Student Login
                            </>
                        )}
                    </button>

                    {/* Additional Options */}
                    <div className="text-center text-sm text-gray-200 pt-2">
                        <p className="flex items-center justify-center">
                            <FiBook className="mr-2" />
                            <span className="text-white/80">New to MVIT?{' '}</span>
                            <a href="/student/register" className="text-white hover:text-purple-300 ml-1 font-medium transition-colors duration-200">
                                Register here
                            </a>
                        </p>
                    </div>
                </form>
            </div>

            {/* Footer */}
            <div className="absolute bottom-4 left-0 w-full text-center text-white/50 text-xs">
                © {new Date().getFullYear()} MVIT Student Portal. All rights reserved.
            </div>

            <style jsx global>{`
                @keyframes blob {
                    0% {
                        transform: translate(0px, 0px) scale(1);
                    }
                    33% {
                        transform: translate(30px, -50px) scale(1.1);
                    }
                    66% {
                        transform: translate(-20px, 20px) scale(0.9);
                    }
                    100% {
                        transform: translate(0px, 0px) scale(1);
                    }
                }
                .animate-blob {
                    animation: blob 7s infinite;
                }
                .animation-delay-2000 {
                    animation-delay: 2s;
                }
                .animation-delay-4000 {
                    animation-delay: 4s;
                }
                .animate-fade-in {
                    animation: fadeIn 0.3s ease-in-out;
                }
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(-10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </div>
    );
}