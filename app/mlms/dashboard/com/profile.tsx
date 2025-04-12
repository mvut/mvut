import {FiUser} from "react-icons/fi";

export default function ProfileComponent(){
    const studentProfile = {
        name: "Alex Johnson",
        studentId: "STU2023001",
        email: "alex.johnson@university.edu",
        program: "Bachelor of Computer Science",
        semester: "Fall 2023",
        cgpa: 3.75,
        avatar: "",
    };
    return(
        <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-glass-inner p-6 rounded-xl border border-white/10">
                <div className="flex flex-col items-center">
                    <div className="relative w-24 h-24 rounded-full bg-purple-500/20 flex items-center justify-center mb-4 group">
                        <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <FiUser size={40} className="text-purple-400 z-10" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{studentProfile.name}</h3>
                    <p className="text-sm text-white/60">{studentProfile.studentId}</p>
                    <button className="mt-4 w-full py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 shadow-lg shadow-purple-500/20">
                        Upload Photo
                    </button>
                </div>
                <div className="mt-6 space-y-3">
                    <div className="flex justify-between py-2 border-b border-white/10">
                        <span className="font-medium text-white/80">Program:</span>
                        <span className="text-white">{studentProfile.program}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-white/10">
                        <span className="font-medium text-white/80">Semester:</span>
                        <span className="text-white">{studentProfile.semester}</span>
                    </div>
                    <div className="flex justify-between py-2">
                        <span className="font-medium text-white/80">CGPA:</span>
                        <span className="text-white">{studentProfile.cgpa}</span>
                    </div>
                </div>
            </div>
            <div className="md:col-span-2 bg-glass-inner p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-bold mb-6 text-white">Personal Information</h3>
                <form className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                        <input
                            className="p-3 bg-white/5 rounded-lg border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent"
                            placeholder="First Name"
                            defaultValue="Alex"
                        />
                        <input
                            className="p-3 bg-white/5 rounded-lg border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent"
                            placeholder="Last Name"
                            defaultValue="Johnson"
                        />
                        <input
                            className="p-3 bg-white/5 rounded-lg border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent md:col-span-2"
                            placeholder="Email"
                            defaultValue={studentProfile.email}
                        />
                        <input
                            className="p-3 bg-white/5 rounded-lg border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent"
                            placeholder="Phone"
                        />
                        <input
                            type="date"
                            className="p-3 bg-white/5 rounded-lg border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent"
                        />
                    </div>
                    <textarea
                        className="w-full p-3 bg-white/5 rounded-lg border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent"
                        rows={3}
                        placeholder="Address"
                    />
                    <button className="w-full py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 shadow-lg shadow-purple-500/20">
                        Save Changes
                    </button>
                </form>
            </div>
        </div>
    )
}