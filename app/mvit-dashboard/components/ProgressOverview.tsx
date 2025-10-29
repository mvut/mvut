// components/charts/ProgressOverview.tsx
import { motion } from 'framer-motion';

const ProgressOverview = () => {
    const progressData = [
        { label: 'Course Completion', value: 78, color: 'bg-blue-500' },
        { label: 'Assignment Submission', value: 85, color: 'bg-green-500' },
        { label: 'Video Watching', value: 65, color: 'bg-purple-500' },
        { label: 'Quiz Performance', value: 72, color: 'bg-orange-500' }
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-xl shadow-sm border border-gray-100 p-6"
        >
            <h2 className="text-lg font-semibold text-gray-900 mb-6">Progress Overview</h2>

            <div className="space-y-6">
                {progressData.map((item, index) => (
                    <div key={index}>
                        <div className="flex justify-between text-sm mb-2">
                            <span className="text-gray-600">{item.label}</span>
                            <span className="font-medium text-gray-900">{item.value}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${item.value}%` }}
                                transition={{ delay: 0.5 + index * 0.1, duration: 1 }}
                                className={`h-2 rounded-full ${item.color}`}
                            />
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Overall Progress</span>
                    <span className="font-bold text-lg text-gray-900">75%</span>
                </div>
            </div>
        </motion.div>
    );
};

export default ProgressOverview;