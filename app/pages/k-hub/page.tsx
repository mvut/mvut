'use client';
import { useState, useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaHeart, FaStar, FaFilter, FaBook } from 'react-icons/fa';
import { Poppins, Roboto } from 'next/font/google';

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '600', '700'],
    variable: '--font-poppins',
});

const roboto = Roboto({
    subsets: ['latin'],
    weight: ['400', '500'],
    variable: '--font-roboto',
});

interface Book {
    id: string;
    title: string;
    author: string;
    category: string;
    description: string;
    rating: number;
}

const books: Book[] = [
    {
        id: '1',
        title: 'Introduction to Algorithms',
        author: 'Thomas H. Cormen',
        category: 'Computer Science',
        description: 'A comprehensive guide to algorithms and data structures.',
        rating: 4.8,
    },
    {
        id: '2',
        title: 'Pride and Prejudice',
        author: 'Jane Austen',
        category: 'Literature',
        description: 'A classic novel exploring love and societal expectations.',
        rating: 4.5,
    },
    {
        id: '3',
        title: 'Quantum Physics',
        author: 'Richard Feynman',
        category: 'Physics',
        description: 'An introduction to quantum mechanics.',
        rating: 4.7,
    },
    {
        id: '4',
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        category: 'Literature',
        description: 'A tale of wealth and tragedy in the Jazz Age.',
        rating: 4.3,
    },
];

export default function Home() {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [bookshelf, setBookshelf] = useState<string[]>([]);
    const heroRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ['start end', 'end start'],
    });

    const backgroundOpacity = useTransform(scrollYProgress, [0, 0.5], [0.4, 1]);
    const particleScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.2]);

    const categories = ['All', ...new Set(books.map((book) => book.category))];
    const filteredBooks = selectedCategory === 'All'
        ? books
        : books.filter((book) => book.category === selectedCategory);

    const toggleBookshelf = (bookId: string) => {
        setBookshelf((prev) =>
            prev.includes(bookId) ? prev.filter((id) => id !== bookId) : [...prev, bookId]
        );
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50, rotateX: 10 },
        visible: {
            opacity: 1,
            y: 0,
            rotateX: 0,
            transition: { duration: 0.6, ease: 'easeOut' },
        },
        hover: {
            scale: 1.05,
            boxShadow: '0 15px 30px rgba(0, 0, 0, 0.2)',
            transition: { duration: 0.3 },
        },
    };

    return (
        <div
            className={`relative min-h-screen text-gray-100 ${poppins.variable} ${roboto.variable} overflow-hidden`}
        >
            {/* Super Background Animation */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-br from-gray-950 via-indigo-950 to-blue-950"
                style={{ opacity: backgroundOpacity }}
                animate={{
                    background: [
                        'linear-gradient(135deg, #1a1a3d 0%, #2a2a6d 50%, #3a3a9d 100%)',
                        'linear-gradient(135deg, #3a3a9d 0%, #1a1a3d 50%, #2a2a6d 100%)',
                        'linear-gradient(135deg, #2a2a6d 0%, #3a3a9d 50%, #1a1a3d 100%)',
                    ],
                }}
                transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
                className="absolute inset-0 pointer-events-none"
                style={{ scale: particleScale }}
                animate={{
                    opacity: [0.3, 0.5, 0.3],
                    translateX: [0, 20, 0],
                    translateY: [0, -20, 0],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            >
                {[...Array(50)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-white rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            scale: [0.5, 1, 0.5],
                            opacity: [0.2, 0.8, 0.2],
                        }}
                        transition={{
                            duration: Math.random() * 5 + 5,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                        }}
                    />
                ))}
            </motion.div>
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay pointer-events-none" />

            {/* Hero Section */}
            <section
                ref={heroRef}
                className="relative py-32 text-center overflow-hidden"
            >
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="container mx-auto px-6 z-10 relative"
                >
                    <h2 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-red-400 mb-6 tracking-tight">
                        Unlock a Universe of Knowledge
                    </h2>
                    <p className="text-lg md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
                        Dive into MVIT’s digital library—read, annotate, and share ideas with a vibrant community of learners.
                    </p>
                    <Link
                        href="#books"
                        className="inline-block bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-700 hover:to-red-700 text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-blue-500/30"
                    >
                        Begin Your Journey
                    </Link>
                </motion.div>
            </section>

            {/* Category Filter */}
            <section className="container mx-auto px-6 py-12">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col sm:flex-row justify-between items-center mb-8"
                >
                    <h3 className="text-3xl font-bold text-white flex items-center">
                        <FaFilter className="mr-3 text-blue-400" /> Browse by Category
                    </h3>
                    <motion.select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="mt-4 sm:mt-0 px-4 py-2 rounded-xl bg-gray-900/50 border border-blue-500/30 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 backdrop-blur-sm"
                        whileHover={{ scale: 1.05 }}
                    >
                        {categories.map((cat) => (
                            <option key={cat} value={cat} className="bg-gray-900 text-white">
                                {cat}
                            </option>
                        ))}
                    </motion.select>
                </motion.div>
            </section>

            {/* Book Catalog */}
            <section id="books" className="container mx-auto px-6 py-12">
                <h3 className="text-4xl font-bold text-white mb-8">Featured Books</h3>
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
                    }}
                >
                    {filteredBooks.map((book) => (
                        <motion.div
                            key={book.id}
                            variants={cardVariants}
                            whileHover="hover"
                            className="relative bg-gray-900/40 backdrop-blur-xl rounded-2xl p-6 border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300"
                        >
                            <div className="flex items-center mb-4">
                                <FaBook className="text-blue-400 mr-3" size={24} />
                                <h4 className="text-xl font-semibold text-white truncate">{book.title}</h4>
                            </div>
                            <p className="text-gray-300 text-sm mb-2">by {book.author}</p>
                            <p className="text-gray-400 text-xs mb-3 italic">{book.category}</p>
                            <p className="text-gray-200 text-sm mb-4 line-clamp-3">{book.description}</p>
                            <div className="flex items-center mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <FaStar
                                        key={i}
                                        className={i < Math.round(book.rating) ? 'text-yellow-400' : 'text-gray-600'}
                                        size={16}
                                    />
                                ))}
                                <span className="ml-2 text-sm text-gray-400">{book.rating}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <motion.button
                                    onClick={() => toggleBookshelf(book.id)}
                                    className={`p-2 rounded-full ${
                                        bookshelf.includes(book.id) ? 'bg-blue-500 text-white' : 'bg-gray-800 text-gray-400'
                                    } hover:bg-blue-600 transition`}
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <FaHeart size={16} />
                                </motion.button>
                                <Link
                                    href={`/books/${book.id}`}
                                    className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition"
                                >
                                    <FaBook size={16} />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
                <motion.div className="text-center mt-10">
                    <Link
                        href="/books"
                        className="inline-block bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-700 hover:to-red-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                    >
                        Further Explore Books
                    </Link>
                </motion.div>
            </section>

            {/* My Bookshelf */}
            <section className="container mx-auto px-6 py-12">
                <h3 className="text-4xl font-bold text-white mb-8">My Bookshelf</h3>
                {bookshelf.length === 0 ? (
                    <p className="text-gray-400 text-center text-lg">
                        Your bookshelf is empty. Add some books!
                    </p>
                ) : (
                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
                        }}
                    >
                        {books
                            .filter((book) => bookshelf.includes(book.id))
                            .map((book) => (
                                <motion.div
                                    key={book.id}
                                    variants={cardVariants}
                                    className="bg-gray-900/40 backdrop-blur-xl rounded-2xl p-6 border border-blue-500/30"
                                >
                                    <div className="flex items-center mb-4">
                                        <FaBook className="text-blue-400 mr-3" size={20} />
                                        <h4 className="text-lg font-semibold text-white truncate">{book.title}</h4>
                                    </div>
                                    <motion.button
                                        onClick={() => toggleBookshelf(book.id)}
                                        className="text-red-400 hover:text-red-300 text-sm"
                                        whileHover={{ scale: 1.1 }}
                                    >
                                        Remove
                                    </motion.button>
                                </motion.div>
                            ))}
                    </motion.div>
                )}
            </section>

            {/* Trending Section */}
            <section className="container mx-auto px-6 py-12 bg-gradient-to-r from-blue-900/50 to-red-900/50 rounded-3xl my-12 backdrop-blur-sm">
                <h3 className="text-4xl font-bold text-white mb-8">Trending Now</h3>
                <motion.div
                    className="flex overflow-x-auto space-x-4 pb-4"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
                    }}
                >
                    {books.slice(0, 3).map((book) => (
                        <motion.div
                            key={book.id}
                            variants={cardVariants}
                            className="flex-shrink-0 w-48 bg-gray-900/40 backdrop-blur-xl rounded-lg p-4 border border-blue-500/30 text-white"
                        >
                            <div className="flex items-center mb-2">
                                <FaBook className="text-blue-400 mr-2" size={16} />
                                <h4 className="text-sm font-semibold truncate">{book.title}</h4>
                            </div>
                            <p className="text-xs text-gray-300">{book.author}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </section>
        </div>
    );
}