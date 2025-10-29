// components/tables/RecentActivities.tsx
import { motion } from 'framer-motion';
import { FiBook, FiUser, FiVideo, FiMessageSquare } from 'react-icons/fi';

const RecentActivities = () => {
    const activities = [
        {
            id: 1,
            type: 'course',
            title: 'New course published',
            description: 'Advanced React Patterns',
            time: '2 hours ago',
            icon: FiBook,
            color: 'blue'
        },
        {
            id: 2,
            type: 'student',
            title: 'Student enrolled',
            description: 'Sarah Johnson joined Web Development',
            time: '4 hours ago',
            icon: FiUser,
            color: 'green'
        },
        {
            id: 3,
            type: 'video',
            title: 'New video uploaded',
            description: 'React Hooks Deep Dive',
            time: '6 hours ago',
            icon: FiVideo,
            color: 'purple'
        },
        {
            id: 4,
            type: 'discussion',
            title: 'New forum post',
            description: 'Question about state management',
            time: '8 hours ago',
            icon: FiMessageSquare,
            color: 'orange'
        }
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-xl shadow-sm border border-gray-100 p-6"
        >
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-gray-900">Recent Activities</h2>
                <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                    View All
                </button>
            </div>

            <div className="space-y-4">
                {activities.map((activity, index) => (
                    <motion.div
                        key={activity.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                        <div className={`p-2 rounded-lg bg-${activity.color}-100`}>
                            <activity.icon className={`w-4 h-4 text-${activity.color}-600`} />
                        </div>
                        <div className="flex-1">
                            <p className="text-sm font-medium text-gray-900">{activity.title}</p>
                            <p className="text-sm text-gray-600">{activity.description}</p>
                        </div>
                        <span className="text-xs text-gray-500">{activity.time}</span>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default RecentActivities;