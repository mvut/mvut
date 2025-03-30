// app/qat-exam/page.tsx
"use client";

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
    FiChevronLeft,
    FiChevronRight,
    FiFlag,
    FiClock,
    FiMenu,
    FiX
} from 'react-icons/fi';
import { FaCircle, FaRegCircle } from 'react-icons/fa';
import Image from 'next/image';
import MVITLogo from '@/public/mvutflame.png';

// Temporary login credentials
const TEMP_CREDENTIALS = {
    studentId: 'MVIT2023001',
    password: 'qat@2023',
    name: 'Alex Johnson',
    program: 'B.Tech CSE'
};

const generateQuestions = () => {
    const programmingConcepts = [
        'HTML semantics', 'CSS Flexbox', 'JavaScript closures',
        'React hooks', 'Node.js event loop', 'Database normalization'
    ];

    const mcqs = Array.from({ length: 30 }, (_, i) => {
        const concept = programmingConcepts[i % programmingConcepts.length];
        return {
            id: `mcq${i + 1}`,
            type: 'mcq' as const,
            text: `Which of these best describes ${concept}?`,
            options: [
                `${concept} relates to visual styling only`,
                `The ${concept} pattern is used for state management`,
                `In ${concept}, the main advantage is code reusability`,
                `${concept} primarily deals with asynchronous operations`
            ],
            marks: 2,
            correctAnswer: `In ${concept}, the main advantage is code reusability`
        };
    });

    const subjectives = Array.from({ length: 15 }, (_, i) => ({
        id: `sub${i + 1}`,
        type: 'subjective' as const,
        text: `Explain ${programmingConcepts[i % programmingConcepts.length]} in detail with examples.`,
        marks: 5,
        minWords: 100
    }));

    return [...mcqs, ...subjectives];
};

const QATExamSystem = () => {
    const router = useRouter();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [credentials, setCredentials] = useState({
        studentId: '',
        password: ''
    });
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState<Record<string, string>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [timeLeft, setTimeLeft] = useState(180 * 60);
    const [questions] = useState(generateQuestions());
    const [loginError, setLoginError] = useState('');
    const [flaggedQuestions, setFlaggedQuestions] = useState<Set<string>>(new Set());
    const [showResults, setShowResults] = useState(false);
    const [mcqResults, setMcqResults] = useState({
        correct: 0,
        total: 0,
        marks: 0
    });
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [wordCounts, setWordCounts] = useState<Record<string, number>>({});

    const currentQuestion = questions[currentQuestionIndex];
    const totalQuestions = questions.length;
    const answeredQuestions = Object.keys(answers).length;
    const progress = Math.round((answeredQuestions / totalQuestions) * 100);

    // Calculate viewport dimensions
    const [windowSize, setWindowSize] = useState({
        width: typeof window !== 'undefined' ? window.innerWidth : 0,
        height: typeof window !== 'undefined' ? window.innerHeight : 0
    });

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const isMobile = windowSize.width < 768;

    const calculateResults = useCallback(() => {
        const mcqQuestions = questions.filter(q => q.type === 'mcq');
        const correct = mcqQuestions.reduce((sum, q) =>
            sum + (answers[q.id] === q.correctAnswer ? 1 : 0), 0);
        const total = mcqQuestions.length;
        const marks = correct * 2;

        setMcqResults({ correct, total, marks });
        return { correct, total, marks };
    }, [answers, questions]);

    const handleMCQSelection = (option: string) => {
        const newAnswers = {
            ...answers,
            [currentQuestion.id]: option
        };
        setAnswers(newAnswers);
        if (showResults) calculateResults();
    };

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (credentials.studentId === TEMP_CREDENTIALS.studentId &&
            credentials.password === TEMP_CREDENTIALS.password) {
            setIsLoggedIn(true);
        } else {
            setLoginError('Invalid credentials. Use studentId: MVIT2023001, password: qat@2023');
        }
    };

    useEffect(() => {
        let timer: NodeJS.Timeout;

        if (isLoggedIn && timeLeft > 0) {
            timer = setInterval(() => {
                setTimeLeft(prev => {
                    if (prev === 600) {
                        alert('Warning: Only 10 minutes remaining!');
                    }
                    return prev <= 0 ? 0 : prev - 1;
                });
            }, 1000);
        } else if (timeLeft === 0) {
            handleSubmit();
        }

        return () => clearInterval(timer);
    }, [isLoggedIn, timeLeft]);

    const navigateQuestion = useCallback((direction: 'first' | 'last' | 'prev' | 'next' | number) => {
        if (typeof direction === 'number') {
            setCurrentQuestionIndex(Math.max(0, Math.min(totalQuestions - 1, direction)));
            return;
        }

        switch (direction) {
            case 'first': setCurrentQuestionIndex(0); break;
            case 'last': setCurrentQuestionIndex(totalQuestions - 1); break;
            case 'prev': setCurrentQuestionIndex(prev => Math.max(0, prev - 1)); break;
            case 'next': setCurrentQuestionIndex(prev => Math.min(totalQuestions - 1, prev + 1)); break;
        }

        if (isMobile) {
            setIsMobileMenuOpen(false);
        }
    }, [totalQuestions, isMobile]);

    const updateWordCount = (questionId: string, text: string) => {
        const count = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
        setWordCounts(prev => ({ ...prev, [questionId]: count }));
    };

    const toggleFlag = () => {
        const newFlags = new Set(flaggedQuestions);
        newFlags.has(currentQuestion.id)
            ? newFlags.delete(currentQuestion.id)
            : newFlags.add(currentQuestion.id);
        setFlaggedQuestions(newFlags);
    };

    const handleSubmit = async () => {
        setIsSubmitting(true);
        const mcqResults = calculateResults();

        try {
            const response = await fetch('/api/auth/qat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    studentId: TEMP_CREDENTIALS.studentId,
                    answers,
                    mcqMarks: mcqResults.marks,
                    timeSpent: 180 * 60 - timeLeft,
                    flaggedQuestions: Array.from(flaggedQuestions),
                    wordCounts
                })
            });

            if (!response.ok) {
                throw new Error('Submission failed');
            }

            const result = await response.json();
            setShowResults(true);
            setMcqResults({
                correct: result.mcqResults.correct,
                total: result.mcqResults.total,
                marks: result.mcqResults.marks
            });

        } catch (error) {
            console.error('Submission error:', error);
            alert('Failed to submit exam. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const formatTime = (seconds: number) => {
        const hrs = Math.floor(seconds / 3600);
        const mins = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    if (!isLoggedIn) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-red-900 via-black to-red-900 flex items-center justify-center p-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="w-full max-w-md bg-black bg-opacity-70 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden border border-red-700 p-6"
                >
                    <div className="flex flex-col items-center mb-6">
                        <div className="relative w-20 h-20 md:w-24 md:h-24 mb-4">
                            <Image
                                src={MVITLogo}
                                alt="MVIT Logo"
                                layout="fill"
                                objectFit="contain"
                                className="filter brightness-0 invert"
                            />
                        </div>
                        <h1 className="text-xl md:text-2xl font-bold text-white text-center">QAT Examination Portal</h1>
                        <p className="text-sm md:text-base text-red-300 text-center mt-1">Quality Assurance Test - MVIT</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-4">
                        {loginError && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="bg-red-900 bg-opacity-50 p-3 rounded-lg border border-red-700 text-red-200 text-sm"
                            >
                                {loginError}
                                <div className="mt-1 text-xs">
                                    Test credentials: ID: MVIT2023001, Password: qat@2023
                                </div>
                            </motion.div>
                        )}

                        <div>
                            <label className="block text-red-300 text-sm font-medium mb-1">Student ID</label>
                            <input
                                type="text"
                                value={credentials.studentId}
                                onChange={(e) => setCredentials({...credentials, studentId: e.target.value})}
                                className="w-full px-4 py-2 bg-black bg-opacity-50 border border-red-800 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-600 text-sm md:text-base"
                                placeholder="MVIT2023001"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-red-300 text-sm font-medium mb-1">Password</label>
                            <input
                                type="password"
                                value={credentials.password}
                                onChange={(e) => setCredentials({...credentials, password: e.target.value})}
                                className="w-full px-4 py-2 bg-black bg-opacity-50 border border-red-800 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-600 text-sm md:text-base"
                                placeholder="qat@2023"
                                required
                            />
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            type="submit"
                            className="w-full bg-gradient-to-r from-red-700 to-red-900 text-white font-bold py-2 px-4 rounded-lg shadow-lg hover:shadow-red-800/50 transition-all text-sm md:text-base"
                        >
                            Sign In
                        </motion.button>
                    </form>
                </motion.div>
            </div>
        );
    }

    if (showResults) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-red-900 via-black to-red-900 flex items-center justify-center p-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="w-full max-w-2xl bg-black bg-opacity-70 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden border border-red-700 p-6 md:p-8"
                >
                    <div className="flex flex-col items-center mb-6">
                        <div className="relative w-20 h-20 md:w-24 md:h-24 mb-4">
                            <Image
                                src={MVITLogo}
                                alt="MVIT Logo"
                                layout="fill"
                                objectFit="contain"
                                className="filter brightness-0 invert"
                            />
                        </div>
                        <h1 className="text-xl md:text-2xl font-bold text-white text-center">Exam Results</h1>
                        <p className="text-sm md:text-base text-red-300 text-center mt-1">Quality Assurance Test - MVIT</p>
                    </div>

                    <div className="space-y-4 md:space-y-6">
                        <div className="bg-black bg-opacity-50 p-4 rounded-lg border border-red-800">
                            <h2 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4">MCQ Results</h2>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 text-center">
                                <div className="bg-red-900 bg-opacity-30 p-2 md:p-3 rounded-lg">
                                    <div className="text-2xl md:text-3xl font-bold text-white">{mcqResults.correct}</div>
                                    <div className="text-xs md:text-sm text-red-300">Correct</div>
                                </div>
                                <div className="bg-gray-900 bg-opacity-30 p-2 md:p-3 rounded-lg">
                                    <div className="text-2xl md:text-3xl font-bold text-white">{mcqResults.total - mcqResults.correct}</div>
                                    <div className="text-xs md:text-sm text-gray-300">Incorrect</div>
                                </div>
                                <div className="col-span-2 md:col-span-1 bg-green-900 bg-opacity-30 p-2 md:p-3 rounded-lg">
                                    <div className="text-2xl md:text-3xl font-bold text-white">{mcqResults.marks}</div>
                                    <div className="text-xs md:text-sm text-green-300">Marks Obtained</div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-black bg-opacity-50 p-4 rounded-lg border border-red-800">
                            <h2 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">Subjective Questions</h2>
                            <p className="text-xs md:text-sm text-gray-300">
                                Your subjective answers have been submitted for evaluation by the instructor.
                                You&apos;ll receive your final results once grading is complete.
                            </p>
                        </div>

                        <div className="flex justify-center">
                            <motion.button
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                onClick={() => router.push('/')}
                                className="px-4 py-2 md:px-6 md:py-2.5 bg-gradient-to-r from-red-700 to-red-900 rounded-lg font-bold shadow-lg hover:shadow-red-800/50 transition-all text-sm md:text-base"
                            >
                                Return to Dashboard
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-red-900 via-black to-red-900 text-gray-200">
            {/* Header */}
            <header className="bg-black bg-opacity-70 backdrop-blur-sm border-b border-red-900 sticky top-0 z-20">
                <div className="container mx-auto px-4 md:px-6 py-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2 md:space-x-3">
                            <div className="relative w-8 h-8 md:w-10 md:h-10">
                                <Image
                                    src={MVITLogo}
                                    alt="MVIT Logo"
                                    layout="fill"
                                    objectFit="contain"
                                    className="filter brightness-0 invert"
                                />
                            </div>
                            <div>
                                <h1 className="text-sm md:text-base font-bold text-white">MVIT QAT</h1>
                                <p className="text-xs text-gray-400 hidden md:block">
                                    {TEMP_CREDENTIALS.name} • {TEMP_CREDENTIALS.program}
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center space-x-2 md:space-x-4">
                            <div className="hidden sm:flex items-center space-x-1 md:space-x-2 bg-black bg-opacity-50 px-2 md:px-3 py-1 rounded-lg border border-red-800">
                                <FiClock className="text-red-500 text-sm md:text-base" />
                                <span className="font-mono text-xs md:text-sm">{formatTime(timeLeft)}</span>
                            </div>

                            <div className="hidden md:flex items-center space-x-1">
                                <div className="h-2 w-16 md:w-24 bg-gray-800 rounded-full overflow-hidden">
                                    <motion.div
                                        className="h-full bg-gradient-to-r from-red-600 to-red-800 rounded-full"
                                        initial={{ width: '0%' }}
                                        animate={{ width: `${progress}%` }}
                                        transition={{ duration: 0.5 }}
                                    />
                                </div>
                                <span className="text-xs font-medium">{progress}%</span>
                            </div>

                            <div className="hidden sm:block text-xs bg-black bg-opacity-50 px-2 py-1 rounded border border-red-800">
                                <span className="text-red-400">ID:</span> {TEMP_CREDENTIALS.studentId}
                            </div>

                            <button
                                className="md:hidden p-2 text-gray-400 hover:text-white"
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            >
                                {isMobileMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
                            </button>
                        </div>
                    </div>

                    {/* Mobile progress bar */}
                    <div className="mt-2 flex md:hidden items-center space-x-2">
                        <div className="h-2 flex-1 bg-gray-800 rounded-full overflow-hidden">
                            <motion.div
                                className="h-full bg-gradient-to-r from-red-600 to-red-800 rounded-full"
                                initial={{ width: '0%' }}
                                animate={{ width: `${progress}%` }}
                                transition={{ duration: 0.5 }}
                            />
                        </div>
                        <span className="text-xs font-medium">{progress}%</span>
                    </div>
                </div>
            </header>

            <main className="container mx-auto px-2 sm:px-4 py-4 md:py-6">
                <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                    {/* Mobile question navigator */}
                    {isMobile && isMobileMenuOpen && (
                        <div className="md:hidden bg-black bg-opacity-80 backdrop-blur-sm rounded-lg border border-red-800 p-4 z-10">
                            <div className="grid grid-cols-5 gap-2 max-h-[60vh] overflow-y-auto">
                                {questions.map((q, index) => (
                                    <button
                                        key={q.id}
                                        onClick={() => navigateQuestion(index)}
                                        className={`aspect-square rounded-lg flex items-center justify-center text-xs font-medium transition-all ${
                                            currentQuestionIndex === index
                                                ? 'bg-red-700 text-white shadow-lg shadow-red-900/50'
                                                : answers[q.id]
                                                    ? 'bg-green-900 text-green-300 border border-green-800'
                                                    : flaggedQuestions.has(q.id)
                                                        ? 'bg-yellow-900 text-yellow-300 border border-yellow-800'
                                                        : 'bg-gray-900 hover:bg-gray-800 border border-gray-800'
                                        }`}
                                    >
                                        {index + 1}
                                        {flaggedQuestions.has(q.id) && (
                                            <FiFlag className="absolute -top-1 -right-1 text-xs text-yellow-500" />
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Questions navigation sidebar - Desktop */}
                    <div className="hidden md:block md:w-1/4 lg:w-1/5">
                        <div className="bg-black bg-opacity-50 rounded-xl border border-red-800 p-4 sticky top-24 h-[calc(100vh-8rem)] overflow-y-auto">
                            <h3 className="text-sm md:text-base font-bold text-red-500 mb-3 md:mb-4">Questions</h3>
                            <div className="grid grid-cols-4 lg:grid-cols-5 gap-2">
                                {questions.map((q, index) => (
                                    <button
                                        key={q.id}
                                        onClick={() => navigateQuestion(index)}
                                        className={`aspect-square rounded-lg flex items-center justify-center text-xs font-medium transition-all ${
                                            currentQuestionIndex === index
                                                ? 'bg-red-700 text-white shadow-lg shadow-red-900/50'
                                                : answers[q.id]
                                                    ? 'bg-green-900 text-green-300 border border-green-800'
                                                    : flaggedQuestions.has(q.id)
                                                        ? 'bg-yellow-900 text-yellow-300 border border-yellow-800'
                                                        : 'bg-gray-900 hover:bg-gray-800 border border-gray-800'
                                        }`}
                                    >
                                        {index + 1}
                                        {flaggedQuestions.has(q.id) && (
                                            <FiFlag className="absolute -top-1 -right-1 text-xs text-yellow-500" />
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Main question area */}
                    <div className="flex-1">
                        <div className="bg-black bg-opacity-50 rounded-xl border border-red-800 overflow-hidden">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentQuestion.id}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <div className="p-4 md:p-6">
                                        {/* Question header */}
                                        <div className="flex justify-between items-start mb-4 md:mb-6">
                                            <div>
                                                <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span className={`inline-block text-xs px-2 py-1 rounded-full ${
                              currentQuestion.type === 'mcq'
                                  ? 'bg-blue-900/30 text-blue-300 border border-blue-800/50'
                                  : 'bg-purple-900/30 text-purple-300 border border-purple-800/50'
                          }`}>
                            {currentQuestion.type === 'mcq' ? 'MCQ' : 'Subjective'}
                          </span>
                                                    <span className="text-xs bg-gray-900/30 px-2 py-1 rounded border border-gray-800/50">
                            {currentQuestion.marks} mark{currentQuestion.marks !== 1 ? 's' : ''}
                          </span>
                                                    {flaggedQuestions.has(currentQuestion.id) && (
                                                        <span className="text-xs bg-yellow-900/30 px-2 py-1 rounded border border-yellow-800/50 flex items-center">
                              <FiFlag className="mr-1 text-yellow-500" /> Flagged
                            </span>
                                                    )}
                                                </div>
                                                <h2 className="text-lg md:text-xl font-bold text-white">
                                                    Q{currentQuestionIndex + 1} of {totalQuestions}
                                                </h2>
                                            </div>
                                            <button
                                                onClick={toggleFlag}
                                                className={`p-2 rounded-full ${
                                                    flaggedQuestions.has(currentQuestion.id)
                                                        ? 'text-yellow-500 bg-yellow-900/30 border border-yellow-800/50'
                                                        : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-900/10'
                                                }`}
                                            >
                                                <FiFlag size={18} />
                                            </button>
                                        </div>

                                        {/* Question content */}
                                        <div className="mb-6 md:mb-8">
                                            <p className="text-base md:text-lg mb-4 md:mb-6 leading-relaxed">{currentQuestion.text}</p>

                                            {currentQuestion.type === 'mcq' ? (
                                                <div className="space-y-2 md:space-y-3">
                                                    {currentQuestion.options?.map((option, i) => (
                                                        <motion.label
                                                            key={i}
                                                            whileHover={{ scale: 1.01 }}
                                                            className={`flex items-start space-x-2 md:space-x-3 p-2 md:p-3 rounded-lg cursor-pointer transition-all ${
                                                                answers[currentQuestion.id] === option
                                                                    ? 'bg-red-900/30 border border-red-800/50'
                                                                    : 'bg-gray-900/30 hover:bg-gray-800/30 border border-gray-800/50'
                                                            }`}
                                                            onClick={() => handleMCQSelection(option)}
                                                        >
                                                            {answers[currentQuestion.id] === option ? (
                                                                <FaCircle className="text-red-500 mt-0.5 flex-shrink-0 text-sm md:text-base" />
                                                            ) : (
                                                                <FaRegCircle className="text-gray-500 mt-0.5 flex-shrink-0 text-sm md:text-base" />
                                                            )}
                                                            <span className="text-sm md:text-base">{option}</span>
                                                        </motion.label>
                                                    ))}
                                                </div>
                                            ) : (
                                                <div>
                          <textarea
                              value={answers[currentQuestion.id] || ''}
                              onChange={(e) => {
                                  handleAnswerChange(e.target.value);
                                  updateWordCount(currentQuestion.id, e.target.value);
                              }}
                              className="w-full px-3 md:px-4 py-2 md:py-3 bg-black/30 border border-gray-800/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600/50 focus:border-transparent min-h-[150px] md:min-h-[200px] text-white placeholder-gray-500 text-sm md:text-base"
                              placeholder="Type your detailed answer here..."
                          />
                                                    {currentQuestion.minWords && (
                                                        <div className="mt-2 flex justify-between items-center text-xs md:text-sm text-gray-400">
                                                            <div>
                                                                {wordCounts[currentQuestion.id] || 0} words (min {currentQuestion.minWords})
                                                            </div>
                                                            <div className={`${
                                                                (wordCounts[currentQuestion.id] || 0) >= currentQuestion.minWords
                                                                    ? 'text-green-400'
                                                                    : 'text-yellow-400'
                                                            }`}>
                                                                {((wordCounts[currentQuestion.id] || 0) >= currentQuestion.minWords
                                                                    ? '✓ Requirement met'
                                                                    : '⚠️ Minimum not met')
                                                                }
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>

                            {/* Navigation buttons */}
                            <div className="bg-black/70 border-t border-red-800 p-3 md:p-4 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
                                <div className="flex space-x-2 w-full sm:w-auto">
                                    <motion.button
                                        whileHover={{ scale: 1.03 }}
                                        whileTap={{ scale: 0.97 }}
                                        onClick={() => navigateQuestion('first')}
                                        disabled={currentQuestionIndex === 0}
                                        className="px-3 py-1.5 md:px-4 md:py-2 bg-gray-900/50 rounded-lg border border-gray-800/50 disabled:opacity-50 flex items-center justify-center text-xs md:text-sm w-full sm:w-auto"
                                    >
                                        <FiChevronLeft className="mr-1" /> First
                                    </motion.button>
                                    <motion.button
                                        whileHover={{ scale: 1.03 }}
                                        whileTap={{ scale: 0.97 }}
                                        onClick={() => navigateQuestion('prev')}
                                        disabled={currentQuestionIndex === 0}
                                        className="px-3 py-1.5 md:px-4 md:py-2 bg-gray-900/50 rounded-lg border border-gray-800/50 disabled:opacity-50 flex items-center justify-center text-xs md:text-sm w-full sm:w-auto"
                                    >
                                        <FiChevronLeft className="mr-1" /> Prev
                                    </motion.button>
                                </div>

                                <div className="text-xs md:text-sm text-gray-400 px-2 hidden sm:block">
                                    {currentQuestionIndex + 1} / {totalQuestions}
                                </div>

                                <div className="flex space-x-2 w-full sm:w-auto">
                                    <motion.button
                                        whileHover={{ scale: 1.03 }}
                                        whileTap={{ scale: 0.97 }}
                                        onClick={() => navigateQuestion('next')}
                                        disabled={currentQuestionIndex === totalQuestions - 1}
                                        className="px-3 py-1.5 md:px-4 md:py-2 bg-gray-900/50 rounded-lg border border-gray-800/50 disabled:opacity-50 flex items-center justify-center text-xs md:text-sm w-full sm:w-auto"
                                    >
                                        Next <FiChevronRight className="ml-1" />
                                    </motion.button>
                                    <motion.button
                                        whileHover={{ scale: 1.03 }}
                                        whileTap={{ scale: 0.97 }}
                                        onClick={() => navigateQuestion('last')}
                                        disabled={currentQuestionIndex === totalQuestions - 1}
                                        className="px-3 py-1.5 md:px-4 md:py-2 bg-gray-900/50 rounded-lg border border-gray-800/50 disabled:opacity-50 flex items-center justify-center text-xs md:text-sm w-full sm:w-auto"
                                    >
                                        Last <FiChevronRight className="ml-1" />
                                    </motion.button>
                                </div>
                            </div>
                        </div>

                        {/* Submit button */}
                        <div className="mt-4 md:mt-6 flex justify-center">
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => {
                                    if (confirm('Are you sure you want to submit your exam?')) {
                                        handleSubmit();
                                    }
                                }}
                                disabled={isSubmitting}
                                className="px-6 py-2 md:px-8 md:py-3 bg-gradient-to-r from-red-700 to-red-900 rounded-lg font-bold shadow-lg hover:shadow-red-800/50 transition-all disabled:opacity-70 text-sm md:text-base"
                            >
                                {isSubmitting ? (
                                    <>
                                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Submitting...
                                    </>
                                ) : (
                                    'Submit Exam'
                                )}
                            </motion.button>
                        </div>
                    </div>
                </div>
            </main>

            <footer className="bg-black/70 border-t border-red-800 py-3 md:py-4 mt-4 md:mt-6">
                <div className="container mx-auto px-4 text-center text-xs text-gray-500">
                    <p>© {new Date().getFullYear()} MVIT Quality Assurance Cell. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default QATExamSystem;