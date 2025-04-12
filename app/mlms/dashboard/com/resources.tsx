import {FiFolder} from "react-icons/fi";

export default function ResourcesComponent() {
    const resources = [
        { id: "r1", title: "CS 101 Lecture Notes", type: "pdf" },
        { id: "r2", title: "Linear Algebra Cheat Sheet", type: "pdf" },
        { id: "r3", title: "Writing Guide", type: "link" },
    ];

    return (
        <div className="space-y-6">
            <div className="bg-glass-inner p-6 rounded-xl border border-white/10">
                <h2 className="text-xl font-semibold mb-4 text-white">
                    <FiFolder className="inline mr-2 text-purple-400" /> Resource Library
                </h2>
                {resources.map((resource) => (
                    <div
                        key={resource.id}
                        className="flex items-center justify-between p-4 bg-white/5 rounded-lg mb-3 hover:bg-white/10 transition-colors duration-200"
                    >
                        <p className="text-sm text-white">{resource.title}</p>
                        <span className="text-xs px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full">
                                            {resource.type}
                                        </span>
                    </div>
                ))}
                <button className="mt-4 w-full py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 shadow-lg shadow-purple-500/20">
                    Add Resource
                </button>
            </div>
        </div>
    )
}