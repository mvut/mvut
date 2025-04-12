import {FiCalendar} from "react-icons/fi";

export default function CalendarComponent(){
    type Event = {
        id: string;
        title: string;
        date: string;
        type: "assignment" | "quiz" | "event";
    };
    const events: Event[] = [
        { id: "e1", title: "CS 101 Assignment 3 Due", date: "2025-04-10", type: "assignment" },
        { id: "e2", title: "Math 202 Quiz", date: "2025-04-12", type: "quiz" },
        { id: "e3", title: "Career Fair", date: "2025-04-15", type: "event" },
    ];
    return(
        <div className="space-y-6">
            <div className="bg-glass-inner p-6 rounded-xl border border-white/10">
                <h2 className="text-xl font-semibold mb-4 text-white">
                    <FiCalendar className="inline mr-2 text-purple-400" /> Upcoming Events
                </h2>
                {events.map((event) => (
                    <div
                        key={event.id}
                        className="flex items-center justify-between p-4 bg-white/5 rounded-lg mb-3 hover:bg-white/10 transition-colors duration-200"
                    >
                        <div>
                            <p className="text-sm font-medium text-white">{event.title}</p>
                            <p className="text-xs text-white/60">{event.date}</p>
                        </div>
                        <span
                            className={`px-3 py-1 rounded-full text-xs ${
                                event.type === "assignment" ? "bg-blue-500/20 text-blue-400" :
                                    event.type === "quiz" ? "bg-purple-500/20 text-purple-400" : "bg-green-500/20 text-green-400"
                            }`}
                        >
                                            {event.type}
                                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}