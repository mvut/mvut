import Link from "next/link";
import { FaArrowUpRightDots } from "react-icons/fa6";

export default function SteamPage() {
    return (
        <div className={'container py-16 min-h-screen bg-[#FFD700]'}>

            <h2 className={'bg-red-500 p-1 inline text-gray-50'}>United Minds, Global Learning</h2>
            <h1 className={'text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight'}>
                STEAM </h1>

            <p className={'text-lg md:text-xl lg:text-2xl xl:text-3xl leading-relaxed py-6'}>
                STEAM (Science, Technology, Engineering, AI, and Mathematics) represents a transformative evolution of the traditional STEM framework, integrating Artificial Intelligence (AI) as a core pillar to drive innovation and interdisciplinary learning.
            </p>

            <p className={'text-lg md:text-xl lg:text-2xl xl:text-3xl leading-relaxed '}>
                Unlike conventional approaches, STEAM emphasizes the synergy between technical rigor and creative problem-solving, empowering learners to explore real-world challenges through a lens that blends scientific inquiry, engineering design, mathematical logic, and cutting-edge AI tools.
            </p>

            <p className={'text-lg md:text-xl lg:text-2xl xl:text-3xl leading-relaxed py-6'}>
                This holistic approach fosters critical thinking, adaptability, and digital literacy, preparing students and professionals alike for a future where AI reshapes industries.
                This integration not only modernizes learning but also bridges the gap between abstract theory and practical application, making education more engaging, inclusive, and future-ready.
            </p>

            <div className={'flex flex-col md:flex-row items-start justify-between gap-10 py-16 text-xl uppercase font-bold'}>
                <Link href="/" className={'hover:text-amber-400 transition-all ease-in-out delay-100'}><FaArrowUpRightDots size={35}/>Science</Link>
                <Link href="/" className={'hover:text-amber-400 transition-all ease-in-out delay-100'}><FaArrowUpRightDots size={35}/>Technology</Link>
                <Link href="/" className={'hover:text-amber-400 transition-all ease-in-out delay-100'}><FaArrowUpRightDots size={35}/>Engineering</Link>
                <Link href="/" className={'hover:text-amber-400 transition-all ease-in-out delay-100'}><FaArrowUpRightDots size={35}/>Artificial Intelligence</Link>
                <Link href="/" className={'hover:text-amber-400 transition-all ease-in-out delay-100'}><FaArrowUpRightDots size={35}/>Mathematics</Link>

            </div>
        </div>
    )
}