'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    FaStar, FaRegStar, FaShareAlt, FaBookmark,
    FaLinkedin, FaTwitter, FaFacebook, FaRegClock,
    FaUserTie, FaArrowLeft, FaCalendarAlt, FaTags,
    FaThumbsUp, FaThumbsDown, FaRegComment, FaFire
} from 'react-icons/fa';
import { Inter, Playfair_Display } from 'next/font/google';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

// Load optimized Google Fonts
const inter = Inter({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-inter'
});

const playfair = Playfair_Display({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-playfair'
});

interface Author {
    id: number;
    name: string;
    title: string;
    avatar: string;
    bio: string;
    totalArticles: number;
    rank: number;
}

interface Comment {
    id: number;
    user: string;
    avatar: string;
    date: string;
    content: string;
    likes: number;
    dislikes: number;
    replies: {
        id: number;
        user: string;
        avatar: string;
        date: string;
        content: string;
        likes: number;
        dislikes: number;
    }[];
}

interface RelatedArticle {
    id: number;
    title: string;
    excerpt: string;
    author: string;
    date: string;
    readTime: string;
    image: string;
}

interface BlogPost {
    id: number;
    title: string;
    excerpt: string;
    content: string;
    author: Author;
    rating: number;
    readTime: string;
    date: string;
    category: string;
    tags: string[];
    image: string;
    likes: number;
    dislikes: number;
    shares: number;
    comments: Comment[];
    relatedArticles: RelatedArticle[];
}

const BlogPostPage = () => {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState<'comments' | 'ratings'>('comments');
    const [newComment, setNewComment] = useState('');
    const [replyingTo, setReplyingTo] = useState<number | null>(null);
    const [replyContent, setReplyContent] = useState('');
    const [userReaction, setUserReaction] = useState<'like' | 'dislike' | null>(null);
    const [showShareOptions, setShowShareOptions] = useState(false);
    const [userRating, setUserRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);
    const [isBookmarked, setIsBookmarked] = useState(false);

    // Mock blog post data
    const blogPost: BlogPost = {
        id: 1,
        title: 'The Future of Digital Banking in 2024',
        excerpt: 'How blockchain and AI are revolutionizing traditional banking systems.',
        content: `
            <h2>Introduction</h2>
            <p>The banking sector is undergoing a radical transformation driven by emerging technologies.</p>
            <h2>The Blockchain Revolution</h2>
            <p>Blockchain technology is eliminating intermediaries in financial transactions.</p>
            <ul>
                <li>Decentralized identity verification systems</li>
                <li>Smart contract-based loan agreements</li>
                <li>Real-time cross-border settlements</li>
            </ul>
        `,
        author: {
            id: 1,
            name: 'Dr. Sarah Johnson',
            title: 'Chief Economist at FinTech Insights',
            avatar: '/authors/sarah-johnson.jpg',
            bio: 'Dr. Johnson has 15 years of experience in financial technology research.',
            totalArticles: 42,
            rank: 3
        },
        rating: 4.7,
        readTime: '8 min read',
        date: 'May 15, 2024',
        category: 'Banking',
        tags: ['Blockchain', 'AI', 'FinTech'],
        image: '/articles/banking-future.jpg',
        likes: 1243,
        dislikes: 42,
        shares: 356,
        comments: [
            {
                id: 1,
                user: 'FinancialAnalyst22',
                avatar: '/users/user1.jpg',
                date: 'May 16, 2024',
                content: 'Excellent analysis! The blockchain case studies were particularly insightful.',
                likes: 24,
                dislikes: 2,
                replies: [
                    {
                        id: 101,
                        user: 'TechInvestor',
                        avatar: '/users/user2.jpg',
                        date: 'May 16, 2024',
                        content: 'I agree! The decentralized identity section was groundbreaking.',
                        likes: 5,
                        dislikes: 0
                    }
                ]
            }
        ],
        relatedArticles: [
            {
                id: 2,
                title: 'Cryptocurrency Market Trends Analysis',
                excerpt: 'In-depth analysis of emerging trends in crypto markets.',
                author: 'Michael Chen',
                date: 'May 10, 2024',
                readTime: '12 min read',
                image: '/articles/crypto-trends.jpg'
            }
        ]
    };

    const handleRateArticle = (rating: number) => {
        setUserRating(rating);
        console.log(`User rated article: ${rating} stars`);
    };

    const handleReaction = (reaction: 'like' | 'dislike') => {
        if (userReaction === reaction) {
            setUserReaction(null);
        } else {
            setUserReaction(reaction);
        }
    };

    const submitComment = () => {
        if (!newComment.trim()) return;
        console.log('New comment:', newComment);
        setNewComment('');
    };

    const submitReply = (commentId: number) => {
        if (!replyContent.trim()) return;
        console.log(`Reply to comment ${commentId}:`, replyContent);
        setReplyingTo(null);
        setReplyContent('');
    };

    const shareArticle = (platform: string) => {
        const url = window.location.href;
        let shareUrl = '';

        switch (platform) {
            case 'twitter':
                shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(blogPost.title)}`;
                break;
            case 'linkedin':
                shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
                break;
            case 'facebook':
                shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
                break;
            default:
                navigator.clipboard.writeText(url);
                alert('Link copied to clipboard!');
                return;
        }

        window.open(shareUrl, '_blank', 'noopener,noreferrer');
    };

    const toggleBookmark = () => {
        setIsBookmarked(!isBookmarked);
    };

    const getRankColor = (rank: number) => {
        if (rank === 1) return 'bg-gradient-to-r from-yellow-400 to-yellow-600';
        if (rank === 2) return 'bg-gradient-to-r from-gray-300 to-gray-400';
        if (rank === 3) return 'bg-gradient-to-r from-amber-600 to-amber-800';
        return 'bg-gradient-to-r from-gray-500 to-gray-700';
    };

    return (
        <div className={`min-h-screen bg-gradient-to-br from-black via-red-900 to-black ${inter.variable} ${playfair.variable} font-sans text-gray-100`}>
            {/* Animated background elements */}
            <div className="fixed inset-0 overflow-hidden -z-10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-900/10 via-transparent to-transparent"></div>
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay"></div>
            </div>

            {/* Navigation */}
            <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <button
                    onClick={() => router.back()}
                    className="flex items-center gap-2 text-gray-400 hover:text-red-400 transition-colors text-sm font-medium"
                >
                    <FaArrowLeft /> Back to Articles
                </button>
            </nav>

            {/* Article Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16"
            >
                <div className="max-w-4xl mx-auto">
                    <div className="flex justify-between items-start mb-6">
                        <span className="inline-block text-xs font-semibold bg-gradient-to-r from-red-600 to-red-800 text-white px-3 py-1.5 rounded-full">
                            {blogPost.category}
                        </span>
                        <button
                            onClick={toggleBookmark}
                            className={`p-2 rounded-full ${isBookmarked ? 'text-red-500' : 'text-gray-400 hover:text-red-400'}`}
                        >
                            <FaBookmark size={18} />
                        </button>
                    </div>

                    <h1 className={`text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 font-serif ${playfair.className}`}>
                        {blogPost.title}
                    </h1>

                    <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                        {blogPost.excerpt}
                    </p>

                    {/* Author Info with Ranking */}
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                        <div className="flex items-center gap-4">
                            <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-red-500/50">
                                <Image
                                    src={blogPost.author.avatar}
                                    alt={blogPost.author.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div>
                                <div className="flex items-center gap-3">
                                    <p className="font-medium">{blogPost.author.name}</p>
                                    <span className={`text-xs font-bold px-2 py-1 rounded-full ${getRankColor(blogPost.author.rank)}`}>
                                        #{blogPost.author.rank} Author
                                    </span>
                                </div>
                                <p className="text-sm text-gray-400">{blogPost.author.title}</p>
                                <p className="text-xs text-gray-500 mt-1">
                                    {blogPost.author.totalArticles} articles published
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-6">
                            <div className="flex items-center gap-1">
                                {[...Array(5)].map((_, i) => {
                                    const ratingValue = i + 1;
                                    return (
                                        <button
                                            key={i}
                                            className="text-lg"
                                            onClick={() => handleRateArticle(ratingValue)}
                                            onMouseEnter={() => setHoverRating(ratingValue)}
                                            onMouseLeave={() => setHoverRating(0)}
                                        >
                                            {ratingValue <= (hoverRating || userRating || Math.floor(blogPost.rating)) ? (
                                                <FaStar className="text-yellow-400" />
                                            ) : (
                                                <FaRegStar className="text-yellow-400" />
                                            )}
                                        </button>
                                    );
                                })}
                                <span className="ml-1 text-gray-300">{blogPost.rating.toFixed(1)}</span>
                            </div>

                            <div className="flex items-center gap-2 text-gray-400">
                                <FaRegClock />
                                <span>{blogPost.readTime}</span>
                            </div>

                            <div className="flex items-center gap-2 text-gray-400">
                                <FaCalendarAlt />
                                <span>{blogPost.date}</span>
                            </div>
                        </div>
                    </div>

                    {/* Featured Image */}
                    <div className="relative h-96 w-full rounded-xl overflow-hidden mb-8 border border-red-900/50 shadow-lg">
                        <Image
                            src={blogPost.image}
                            alt={blogPost.title}
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap items-center gap-4 mb-8">
                        <div className="flex items-center gap-2 text-gray-400">
                            <FaTags />
                            <span className="font-medium text-gray-300">Tags:</span>
                        </div>
                        {blogPost.tags.map(tag => (
                            <span
                                key={tag}
                                className="px-3 py-1 bg-black/40 text-gray-300 rounded-full text-sm border border-red-900/30 backdrop-blur-sm"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Engagement Bar */}
                    <div className="flex items-center justify-between py-4 border-t border-b border-red-900/50 mb-8">
                        <div className="flex items-center gap-4">
                            <button
                                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${userReaction === 'like' ? 'bg-red-900/30 text-red-300 shadow-md' : 'hover:bg-black/30 text-gray-400 hover:text-red-400'}`}
                                onClick={() => handleReaction('like')}
                            >
                                <FaThumbsUp />
                                <span>{blogPost.likes + (userReaction === 'like' ? 1 : 0)}</span>
                            </button>
                            <button
                                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${userReaction === 'dislike' ? 'bg-red-900/30 text-red-300 shadow-md' : 'hover:bg-black/30 text-gray-400 hover:text-red-400'}`}
                                onClick={() => handleReaction('dislike')}
                            >
                                <FaThumbsDown />
                                <span>{blogPost.dislikes + (userReaction === 'dislike' ? 1 : 0)}</span>
                            </button>
                            <button
                                className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-black/30 text-gray-400 hover:text-red-400 transition-all"
                                onClick={() => {
                                    setActiveTab('comments');
                                    document.getElementById('comments-section')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                            >
                                <FaRegComment />
                                <span>{blogPost.comments.length} comments</span>
                            </button>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2 text-gray-400">
                                <FaShareAlt />
                                <span>{blogPost.shares} shares</span>
                            </div>
                            <div className="relative">
                                <button
                                    className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-black/30 text-gray-400 hover:text-red-400 transition-all"
                                    onClick={() => setShowShareOptions(!showShareOptions)}
                                >
                                    Share
                                </button>

                                {showShareOptions && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="absolute right-0 mt-2 w-48 bg-black/80 rounded-lg shadow-xl z-10 border border-red-900/30 backdrop-blur-md"
                                    >
                                        <button
                                            className="flex items-center gap-3 w-full px-4 py-3 hover:bg-red-900/30 text-left transition-colors"
                                            onClick={() => shareArticle('twitter')}
                                        >
                                            <FaTwitter className="text-sky-400" />
                                            <span>Twitter</span>
                                        </button>
                                        <button
                                            className="flex items-center gap-3 w-full px-4 py-3 hover:bg-red-900/30 text-left transition-colors"
                                            onClick={() => shareArticle('linkedin')}
                                        >
                                            <FaLinkedin className="text-blue-400" />
                                            <span>LinkedIn</span>
                                        </button>
                                        <button
                                            className="flex items-center gap-3 w-full px-4 py-3 hover:bg-red-900/30 text-left transition-colors"
                                            onClick={() => shareArticle('facebook')}
                                        >
                                            <FaFacebook className="text-blue-500" />
                                            <span>Facebook</span>
                                        </button>
                                        <button
                                            className="flex items-center gap-3 w-full px-4 py-3 hover:bg-red-900/30 text-left transition-colors"
                                            onClick={() => shareArticle('copy')}
                                        >
                                            <FaShareAlt className="text-gray-400" />
                                            <span>Copy Link</span>
                                        </button>
                                    </motion.div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Article Content */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20"
            >
                <div className="max-w-3xl mx-auto">
                    <article className={`prose prose-invert prose-lg max-w-none font-serif ${playfair.className}`}>
                        <style jsx global>{`
                            .prose {
                                line-height: 1.75;
                                color: #e5e5e5;
                            }
                            .prose h2 {
                                font-size: 1.75rem;
                                font-weight: 600;
                                margin-top: 3rem;
                                margin-bottom: 1.5rem;
                                color: white;
                                position: relative;
                            }
                            .prose h2::after {
                                content: "";
                                display: block;
                                width: 60px;
                                height: 4px;
                                background: linear-gradient(to right, #ef4444, #7f1d1d);
                                margin-top: 0.5rem;
                                border-radius: 2px;
                            }
                            .prose p {
                                margin-bottom: 1.75rem;
                                font-size: 1.125rem;
                            }
                            .prose ul {
                                margin-bottom: 2rem;
                                padding-left: 1.5rem;
                            }
                            .prose li {
                                margin-bottom: 0.75rem;
                                position: relative;
                                font-size: 1.125rem;
                            }
                            .prose li::before {
                                content: "";
                                position: absolute;
                                left: -1.25rem;
                                top: 0.75rem;
                                width: 6px;
                                height: 6px;
                                background-color: #ef4444;
                                border-radius: 50%;
                            }
                        `}</style>
                        <div
                            className="article-content"
                            dangerouslySetInnerHTML={{ __html: blogPost.content }}
                        />
                    </article>
                </div>
            </motion.div>

            {/* Comments and Ratings Section */}
            <motion.div
                id="comments-section"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20"
            >
                <div className="max-w-3xl mx-auto bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-red-900/30 shadow-lg">
                    <div className="flex border-b border-red-900/50 mb-8">
                        <button
                            className={`px-6 py-3 font-medium ${activeTab === 'comments' ? 'text-red-400 border-b-2 border-red-400' : 'text-gray-400 hover:text-white'}`}
                            onClick={() => setActiveTab('comments')}
                        >
                            Comments ({blogPost.comments.length})
                        </button>
                        <button
                            className={`px-6 py-3 font-medium ${activeTab === 'ratings' ? 'text-red-400 border-b-2 border-red-400' : 'text-gray-400 hover:text-white'}`}
                            onClick={() => setActiveTab('ratings')}
                        >
                            Ratings
                        </button>
                    </div>

                    {activeTab === 'comments' ? (
                        <div>
                            {/* Comment Form */}
                            <div className="mb-8">
                                <h3 className="text-xl font-bold mb-4 text-white">Leave a comment</h3>
                                <div className="flex gap-4 mb-4">
                                    <div className="relative w-12 h-12 rounded-full overflow-hidden bg-black/50 border border-red-900/50">
                                        {/* User avatar would go here */}
                                        <div className="w-full h-full flex items-center justify-center text-gray-500">
                                            <FaUserTie size={20} />
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <textarea
                                            className="w-full px-4 py-3 bg-black/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 border border-red-900/50 resize-none"
                                            placeholder="Share your thoughts..."
                                            rows={4}
                                            value={newComment}
                                            onChange={(e) => setNewComment(e.target.value)}
                                        />
                                        <div className="flex justify-end mt-2">
                                            <button
                                                className="px-6 py-2 bg-gradient-to-r from-red-600 to-red-800 text-white font-medium rounded-lg hover:from-red-700 hover:to-red-900 transition-all disabled:opacity-50"
                                                onClick={submitComment}
                                                disabled={!newComment.trim()}
                                            >
                                                Post Comment
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Comments List */}
                            <div className="space-y-6">
                                {blogPost.comments.map(comment => (
                                    <div key={comment.id} className="border-b border-red-900/50 pb-6">
                                        <div className="flex gap-4 mb-3">
                                            <div className="relative w-10 h-10 rounded-full overflow-hidden bg-black/50 border border-red-900/50 flex-shrink-0">
                                                <Image
                                                    src={comment.avatar}
                                                    alt={comment.user}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex items-center justify-between">
                                                    <div>
                                                        <span className="font-medium">{comment.user}</span>
                                                        <span className="text-xs text-gray-500 ml-2">{comment.date}</span>
                                                    </div>
                                                    <div className="flex items-center gap-2 text-gray-500">
                                                        <button className="hover:text-red-400 transition-colors">
                                                            <FaThumbsUp size={14} />
                                                        </button>
                                                        <span className="text-xs">{comment.likes}</span>
                                                        <button className="hover:text-red-400 transition-colors">
                                                            <FaThumbsDown size={14} />
                                                        </button>
                                                        <span className="text-xs">{comment.dislikes}</span>
                                                    </div>
                                                </div>
                                                <p className="text-gray-300 mt-1">{comment.content}</p>

                                                <button
                                                    className="text-sm text-gray-500 hover:text-red-400 mt-2 transition-colors"
                                                    onClick={() => setReplyingTo(replyingTo === comment.id ? null : comment.id)}
                                                >
                                                    Reply
                                                </button>

                                                {replyingTo === comment.id && (
                                                    <div className="flex gap-3 mt-3 pl-4">
                                                        <div className="relative w-8 h-8 rounded-full overflow-hidden bg-black/50 border border-red-900/50 flex-shrink-0">
                                                            {/* User avatar would go here */}
                                                            <div className="w-full h-full flex items-center justify-center text-gray-500">
                                                                <FaUserTie size={14} />
                                                            </div>
                                                        </div>
                                                        <div className="flex-1">
                                                            <textarea
                                                                className="w-full px-3 py-2 bg-black/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-red-500 border border-red-900/50 resize-none text-sm"
                                                                placeholder="Write your reply..."
                                                                rows={2}
                                                                value={replyContent}
                                                                onChange={(e) => setReplyContent(e.target.value)}
                                                            />
                                                            <div className="flex justify-end gap-2 mt-1">
                                                                <button
                                                                    className="px-3 py-1 text-sm text-gray-400 hover:text-white transition-colors"
                                                                    onClick={() => setReplyingTo(null)}
                                                                >
                                                                    Cancel
                                                                </button>
                                                                <button
                                                                    className="px-4 py-1 bg-gradient-to-r from-red-600 to-red-800 text-white text-sm font-medium rounded-lg hover:from-red-700 hover:to-red-900 transition-all disabled:opacity-50"
                                                                    onClick={() => submitReply(comment.id)}
                                                                    disabled={!replyContent.trim()}
                                                                >
                                                                    Reply
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}

                                                {/* Replies */}
                                                {comment.replies.length > 0 && (
                                                    <div className="mt-4 ml-4 pl-4 border-l-2 border-red-900/50 space-y-4">
                                                        {comment.replies.map(reply => (
                                                            <div key={reply.id} className="pt-4">
                                                                <div className="flex gap-3">
                                                                    <div className="relative w-8 h-8 rounded-full overflow-hidden bg-black/50 border border-red-900/50 flex-shrink-0">
                                                                        <Image
                                                                            src={reply.avatar}
                                                                            alt={reply.user}
                                                                            fill
                                                                            className="object-cover"
                                                                        />
                                                                    </div>
                                                                    <div className="flex-1">
                                                                        <div className="flex items-center justify-between">
                                                                            <div>
                                                                                <span className="text-sm font-medium">{reply.user}</span>
                                                                                <span className="text-xs text-gray-500 ml-2">{reply.date}</span>
                                                                            </div>
                                                                            <div className="flex items-center gap-2 text-gray-500">
                                                                                <button className="hover:text-red-400 transition-colors">
                                                                                    <FaThumbsUp size={12} />
                                                                                </button>
                                                                                <span className="text-xs">{reply.likes}</span>
                                                                                <button className="hover:text-red-400 transition-colors">
                                                                                    <FaThumbsDown size={12} />
                                                                                </button>
                                                                                <span className="text-xs">{reply.dislikes}</span>
                                                                            </div>
                                                                        </div>
                                                                        <p className="text-sm text-gray-300 mt-1">{reply.content}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div>
                            <h3 className="text-xl font-bold mb-6 text-white">Reader Ratings</h3>
                            <div className="bg-black/50 rounded-xl p-6 mb-8 border border-red-900/50">
                                <div className="flex items-center justify-between mb-4">
                                    <div>
                                        <span className="text-3xl font-bold">{blogPost.rating.toFixed(1)}</span>
                                        <span className="text-gray-400 ml-1">out of 5</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        {[...Array(5)].map((_, i) => (
                                            i < Math.floor(blogPost.rating) ? (
                                                <FaStar key={i} className="text-yellow-400 text-xl" />
                                            ) : (
                                                <FaRegStar key={i} className="text-yellow-400 text-xl" />
                                            )
                                        ))}
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    {[5, 4, 3, 2, 1].map((stars) => (
                                        <div key={stars} className="flex items-center gap-3">
                                            <span className="w-10 text-gray-400">{stars} star</span>
                                            <div className="flex-1 bg-black/30 rounded-full h-2.5">
                                                <div
                                                    className="bg-red-600 h-2.5 rounded-full"
                                                    style={{ width: `${(stars / 5) * 100}%` }}
                                                ></div>
                                            </div>
                                            <span className="text-sm text-gray-400">{(stars / 5 * 100).toFixed(0)}%</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <h4 className="text-lg font-medium mb-4 text-white">Rate this article</h4>
                            <div className="flex items-center gap-2 mb-6">
                                {[...Array(5)].map((_, i) => {
                                    const ratingValue = i + 1;
                                    return (
                                        <button
                                            key={i}
                                            className="text-2xl"
                                            onClick={() => handleRateArticle(ratingValue)}
                                            onMouseEnter={() => setHoverRating(ratingValue)}
                                            onMouseLeave={() => setHoverRating(0)}
                                        >
                                            {ratingValue <= (hoverRating || userRating) ? (
                                                <FaStar className="text-yellow-400" />
                                            ) : (
                                                <FaRegStar className="text-yellow-400" />
                                            )}
                                        </button>
                                    );
                                })}
                                <span className="ml-2 text-gray-400">
                                    {userRating ? `You rated this ${userRating} star${userRating > 1 ? 's' : ''}` : 'Select rating'}
                                </span>
                            </div>

                            <button
                                className="px-6 py-2 bg-gradient-to-r from-red-600 to-red-800 text-white font-medium rounded-lg hover:from-red-700 hover:to-red-900 transition-all disabled:opacity-50"
                                disabled={!userRating}
                            >
                                Submit Rating
                            </button>
                        </div>
                    )}
                </div>
            </motion.div>

            {/* Author Bio */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="bg-black/40 py-12 border-y border-red-900/30"
            >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-2xl font-bold mb-6 text-white">About the Author</h2>
                        <div className="flex flex-col md:flex-row gap-8">
                            <div className="flex-shrink-0">
                                <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-red-500/50 shadow-md">
                                    <Image
                                        src={blogPost.author.avatar}
                                        alt={blogPost.author.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="mt-4 flex items-center justify-center gap-2">
                                    <FaFire className={`text-sm ${
                                        blogPost.author.rank === 1 ? 'text-yellow-400' :
                                            blogPost.author.rank === 2 ? 'text-gray-300' :
                                                blogPost.author.rank === 3 ? 'text-amber-600' : 'text-gray-500'
                                    }`} />
                                    <span className={`text-xs font-bold px-2 py-1 rounded-full ${getRankColor(blogPost.author.rank)}`}>
                                        Rank #{blogPost.author.rank} Author
                                    </span>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2 text-white">{blogPost.author.name}</h3>
                                <p className="text-gray-400 mb-4">{blogPost.author.title}</p>
                                <p className="text-gray-300 mb-4 leading-relaxed">{blogPost.author.bio}</p>
                                <div className="flex items-center gap-4">
                                    <div className="bg-black/50 px-4 py-2 rounded-lg border border-red-900/30">
                                        <p className="text-sm text-gray-400">Total Articles</p>
                                        <p className="text-lg font-bold text-white">{blogPost.author.totalArticles}</p>
                                    </div>
                                    <div className="bg-black/50 px-4 py-2 rounded-lg border border-red-900/30">
                                        <p className="text-sm text-gray-400">Community Rank</p>
                                        <p className="text-lg font-bold text-white">Top {blogPost.author.rank}%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Related Articles */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="container mx-auto px-4 sm:px-6 lg:px-8 py-16"
            >
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold mb-8 text-white">You Might Also Like</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {blogPost.relatedArticles.map(related => (
                            <motion.div
                                key={related.id}
                                whileHover={{ y: -5 }}
                                className="bg-black/30 rounded-xl overflow-hidden border border-red-900/30 hover:border-red-500/50 transition-all shadow-lg backdrop-blur-sm"
                            >
                                <div className="relative h-48 w-full">
                                    <Image
                                        src={related.image}
                                        alt={related.title}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-lg font-bold mb-2 text-white">{related.title}</h3>
                                    <p className="text-gray-400 text-sm mb-4">{related.excerpt}</p>
                                    <div className="flex items-center justify-between text-sm text-gray-500">
                                        <span>{related.author}</span>
                                        <span>{related.date}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* Newsletter */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="bg-gradient-to-r from-black/80 to-red-900/40 border-t border-b border-red-900/30 py-16"
            >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-2xl font-bold mb-4 text-white">Get More Insights</h2>
                        <p className="text-gray-300 mb-8 leading-relaxed">
                            Subscribe to our newsletter for the latest financial research and analysis.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="flex-grow px-4 py-3 rounded-lg bg-black/50 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 border border-red-900/30 backdrop-blur-sm"
                            />
                            <button className="px-6 py-3 bg-gradient-to-r from-red-600 to-red-800 text-white font-medium rounded-lg hover:from-red-700 hover:to-red-900 transition-all shadow-lg hover:shadow-red-900/20">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default BlogPostPage;