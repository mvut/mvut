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
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-900 via-red-800 to-black">
                <div className="text-white">Loading...</div>
            </div>
        );
    }

    // If authenticated, don't render anything (will redirect)
    if (status === "authenticated") {
        return null;
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-900 via-red-800 to-black p-4">
            <div className="w-full max-w-md bg-white/90 backdrop-blur-sm rounded-xl shadow-2xl overflow-hidden border border-white/20">
                {/* Header with MVIT Logo */}
                <div className="bg-red-800 p-6 text-center border-b border-red-700">
                    <div className="flex flex-col items-center justify-center">
                        <div className="relative w-24 h-24 mb-4">
                            <Image
                                src={MVITLogo}
                                alt="MVIT Logo"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                        <h1 className="text-2xl font-bold text-white">MVIT Student Portal</h1>
                        <p className="text-red-200 text-sm mt-1">Mansha Virtual Institute of Technologies</p>
                    </div>
                </div>

                {/* Login Form */}
                <form onSubmit={handleSubmit} className="p-8 space-y-6">
                    {error && (
                        <div className="bg-red-50 border-l-4 border-red-500 text-red-700 p-4 rounded">
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
                                className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 bg-white/70"
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
                                className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 bg-white/70"
                            />
                        </div>

                        {/* Hidden Designation Field */}
                        <div className="relative hidden">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <FiLock className="text-gray-500" />
                            </div>
                            <select
                                name="designation"
                                className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 bg-white/70"
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
                                    className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                                />
                                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                                    Remember me
                                </label>
                            </div>
                            <div className="text-sm">
                                <a href="#" className="font-medium text-red-600 hover:text-red-500">
                                    Forgot password?
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Login Button */}
                    <button
                        type="submit"
                        disabled={isLoading}
                        className={`w-full flex items-center justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-white bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-all duration-300 ${isLoading ? 'opacity-75 cursor-not-allowed' : ''}`}
                    >
                        {isLoading ? (
                            'Signing in...'
                        ) : (
                            <>
                                <FiLogIn className="mr-2" />
                                Student Login
                            </>
                        )}
                    </button>

                    {/* Additional Options */}
                    <div className="text-center text-sm text-gray-600 pt-2">
                        <p className="flex items-center justify-center">
                            <FiBook className="mr-2" />
                            New to MVIT?{' '}
                            <a href="/student/register" className="text-red-600 hover:text-red-800 ml-1 font-medium">
                                Register here
                            </a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}