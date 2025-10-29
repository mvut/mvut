// components/ui/StatCard.tsx
import { motion } from 'framer-motion';
import { IconType } from 'react-icons';

interface StatCardProps {
    stat: {
        title: string;
        value: string;
        icon: IconType;
        change: string;
        color: string;
    };
    index: number;
}

const StatCard: React.FC<StatCardProps> = ({ stat, index }) => {
    const colorClasses = {
        blue: 'from-blue-500 to-blue-600',
        green: 'from-green-500 to-green-600',
        purple: 'from-purple-500 to-purple-600',
        orange: 'from-orange-500 to-orange-600'
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow"
        >
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                    <p className={`text-sm mt-2 ${
                        stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
                    }`}>
                        {stat.change} from last month
                    </p>
                </div>
                <div className={`p-3 rounded-lg bg-gradient-to-r ${colorClasses[stat.color as keyof typeof colorClasses]}`}>
                    <stat.icon className="w-6 h-6 text-white" />
                </div>
            </div>
        </motion.div>
    );
};

export default StatCard;