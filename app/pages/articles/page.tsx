'use client'
import { FaBookOpen, FaLaptopCode, FaLayerGroup, FaSearch, FaCalendarAlt, FaClock, FaTags } from 'react-icons/fa';
import { RiArticleLine } from 'react-icons/ri';
import Head from 'next/head';
import {useState} from "react";

// Define types for our content
type ContentItem = {
    id: string;
    title: string;
    description: string;
    category: 'article' | 'tutorial' | 'series';
    tags: string[];
    date: string;
    readTime: string;
    author: string;
    imageUrl?: string;
};

// Mock data - replace with your actual content or API calls
const contentData: ContentItem[] = [
    {
        id: '1',
        title: 'Getting Started with Next.js',
        description: 'Learn the fundamentals of Next.js and how to build your first application with this powerful React framework.',
        category: 'article',
        tags: ['Next.js', 'React', 'JavaScript'],
        date: '2023-10-15',
        readTime: '5 min',
        author: 'Jane Doe',
        imageUrl: '/images/nextjs-article.jpg'
    },
    {
        id: '2',
        title: 'Mastering TypeScript in 2023',
        description: 'A comprehensive guide to TypeScript features and best practices for modern web development.',
        category: 'tutorial',
        tags: ['TypeScript', 'JavaScript', 'Web Development'],
        date: '2023-09-22',
        readTime: '15 min',
        author: 'John Smith',
        imageUrl: '/images/typescript-tutorial.jpg'
    },
    {
        id: '3',
        title: 'The Complete React Series',
        description: 'From basics to advanced patterns, this series covers everything you need to know about React.',
        category: 'series',
        tags: ['React', 'Frontend', 'JavaScript'],
        date: '2023-08-10',
        readTime: '60 min',
        author: 'Alex Johnson',
        imageUrl: '/images/react-series.jpg'
    },
    // Add more content items as needed
    {
        id: '4',
        title: 'CSS Grid Layout Explained',
        description: 'Deep dive into CSS Grid layout system with practical examples and use cases.',
        category: 'article',
        tags: ['CSS', 'Frontend', 'Web Design'],
        date: '2023-07-05',
        readTime: '8 min',
        author: 'Maria Garcia'
    },
    {
        id: '5',
        title: 'Building REST APIs with Node.js',
        description: 'Step-by-step tutorial on creating robust REST APIs using Node.js and Express.',
        category: 'tutorial',
        tags: ['Node.js', 'Backend', 'API'],
        date: '2023-06-18',
        readTime: '20 min',
        author: 'David Kim'
    },
    {
        id: '6',
        title: 'JavaScript Design Patterns',
        description: 'Learn common JavaScript design patterns to write more maintainable and scalable code.',
        category: 'series',
        tags: ['JavaScript', 'Patterns', 'Architecture'],
        date: '2023-05-30',
        readTime: '45 min',
        author: 'Sarah Williams'
    }
];

const categoryIcons = {
    article: <RiArticleLine className="text-blue-500" />,
    tutorial: <FaLaptopCode className="text-green-500" />,
    series: <FaLayerGroup className="text-purple-500" />
};

const categoryColors = {
    article: 'bg-blue-100 text-blue-800',
    tutorial: 'bg-green-100 text-green-800',
    series: 'bg-purple-100 text-purple-800'
};

export default function ArticlesPage() {
    const [activeCategory, setActiveCategory] = useState<'all' | 'article' | 'tutorial' | 'series'>('all');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredContent = contentData.filter(item => {
        const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
        const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
        return matchesCategory && matchesSearch;
    });

    return (
        <>
            <Head>
                <title>Articles, Tutorials & Series | MVIT Learning Resources</title>
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Montserrat:wght@500;600;700&display=swap" rel="stylesheet" />
            </Head>

            <div className="min-h-screen bg-gray-50">
                {/* Hero Section */}
                <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 font-montserrat">Learning Resources</h1>
                        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                            Explore our collection of articles, tutorials, and series to enhance your development skills
                        </p>
                        <div className="max-w-2xl mx-auto relative">
                            <input
                                type="text"
                                placeholder="Search resources..."
                                className="w-full px-6 py-3 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <FaSearch className="absolute right-6 top-3.5 text-gray-500" />
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="container mx-auto px-4 py-12">
                    {/* Category Filter */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        <button
                            onClick={() => setActiveCategory('all')}
                            className={`flex items-center px-6 py-2 rounded-full ${activeCategory === 'all' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'} transition-colors shadow-md`}
                        >
                            <FaBookOpen className="mr-2" />
                            All Resources
                        </button>
                        <button
                            onClick={() => setActiveCategory('article')}
                            className={`flex items-center px-6 py-2 rounded-full ${activeCategory === 'article' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'} transition-colors shadow-md`}
                        >
                            <RiArticleLine className="mr-2" />
                            Articles
                        </button>
                        <button
                            onClick={() => setActiveCategory('tutorial')}
                            className={`flex items-center px-6 py-2 rounded-full ${activeCategory === 'tutorial' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'} transition-colors shadow-md`}
                        >
                            <FaLaptopCode className="mr-2" />
                            Tutorials
                        </button>
                        <button
                            onClick={() => setActiveCategory('series')}
                            className={`flex items-center px-6 py-2 rounded-full ${activeCategory === 'series' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'} transition-colors shadow-md`}
                        >
                            <FaLayerGroup className="mr-2" />
                            Series
                        </button>
                    </div>

                    {/* Content Grid */}
                    {filteredContent.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredContent.map((item) => (
                                <div key={item.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                                    {item.imageUrl && (
                                        <div className="h-48 bg-gray-200 overflow-hidden">
                                            <img
                                                src={item.imageUrl}
                                                alt={item.title}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    )}
                                    <div className="p-6">
                                        <div className="flex items-center mb-3">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${categoryColors[item.category]}`}>
                        {categoryIcons[item.category]}
                          <span className="ml-2 capitalize">{item.category}</span>
                      </span>
                                        </div>
                                        <h3 className="text-xl font-bold mb-2 font-montserrat">{item.title}</h3>
                                        <p className="text-gray-600 mb-4">{item.description}</p>

                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {item.tags.map(tag => (
                                                <span key={tag} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                          {tag}
                        </span>
                                            ))}
                                        </div>

                                        <div className="flex items-center justify-between text-sm text-gray-500">
                                            <div className="flex items-center">
                                                <FaCalendarAlt className="mr-1" />
                                                <span>{new Date(item.date).toLocaleDateString()}</span>
                                            </div>
                                            <div className="flex items-center">
                                                <FaClock className="mr-1" />
                                                <span>{item.readTime} read</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-12">
                            <h3 className="text-2xl font-bold text-gray-700 mb-4">No resources found</h3>
                            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
                        </div>
                    )}

                    {/* Featured Section */}
                    <div className="mt-16">
                        <h2 className="text-2xl font-bold mb-6 font-montserrat border-b pb-2">Featured Content</h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <div className="bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl p-8 text-white">
                                <div className="flex items-center mb-4">
                                    <FaLaptopCode className="text-2xl mr-2" />
                                    <span className="text-lg font-semibold">TUTORIAL</span>
                                </div>
                                <h3 className="text-2xl font-bold mb-3">Advanced TypeScript Patterns</h3>
                                <p className="mb-4">Learn how to apply advanced TypeScript patterns in your projects to improve type safety and developer experience.</p>
                                <button className="px-6 py-2 bg-white text-blue-600 rounded-full font-medium hover:bg-gray-100 transition-colors">
                                    Start Learning
                                </button>
                            </div>

                            <div className="bg-gradient-to-r from-purple-500 to-purple-700 rounded-xl p-8 text-white">
                                <div className="flex items-center mb-4">
                                    <FaLayerGroup className="text-2xl mr-2" />
                                    <span className="text-lg font-semibold">SERIES</span>
                                </div>
                                <h3 className="text-2xl font-bold mb-3">Full-Stack Development Journey</h3>
                                <p className="mb-4">A comprehensive series covering everything from frontend to backend development and deployment.</p>
                                <button className="px-6 py-2 bg-white text-purple-600 rounded-full font-medium hover:bg-gray-100 transition-colors">
                                    Explore Series
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Newsletter Section */}
                <div className="bg-gray-100 py-16">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-2xl font-bold mb-2 font-montserrat">Stay Updated</h2>
                        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                            Subscribe to our newsletter to receive the latest articles, tutorials, and resources directly to your inbox.
                        </p>
                        <div className="max-w-md mx-auto flex">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="flex-grow px-4 py-3 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-r-lg font-medium transition-colors">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}