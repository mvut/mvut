'use client'

import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { FiMail, FiLock } from 'react-icons/fi'

export default function SignInForm() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setError('')

        try {
            const result = await signIn('credentials', {
                email,
                password,
                redirect: false
            })

            if (result?.error) {
                throw new Error(result.error)
            }

            router.push('/dashboard')
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Authentication failed')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="w-full max-w-md space-y-8">
            <div className="text-center">
                <h2 className="text-3xl font-bold">Sign in to your account</h2>
            </div>

            {error && (
                <div className="bg-red-100 border-l-4 border-red-500 p-4 mb-4">
                    <p className="text-red-700">{error}</p>
                </div>
            )}

            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                <div className="space-y-4">
                    <div>
                        <label htmlFor="email" className="sr-only">Email</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <FiMail className="text-gray-400" />
                            </div>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                placeholder="Email address"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="password" className="sr-only">Password</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <FiLock className="text-gray-400" />
                            </div>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                placeholder="Password"
                            />
                        </div>
                    </div>
                </div>

                <div>
                    <button
                        type="submit"
                        disabled={loading}
                        className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
                            loading ? 'opacity-75 cursor-not-allowed' : ''
                        }`}
                    >
                        {loading ? 'Signing in...' : 'Sign in'}
                    </button>
                </div>
            </form>
        </div>
    )
}