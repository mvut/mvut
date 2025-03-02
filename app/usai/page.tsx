import Link from "next/link";
import { FaGithub } from "react-icons/fa";


export default function UnitedSchoolOfAI(){
    return(
        <div className={'flex flex-col gap-8 container min-h-screen py-16'}>
            <h1 className={'text-3xl font-bold uppercase'}>United School of Artificial Intelligence</h1>
            <p className={'leading-relaxed'}>
                Imagine a school where Kindergarten children can learn and play alongside artificial intelligence and computer science technologies! Welcome to the United School of Artificial Intelligence (USAI), where we&apos;re revolutionizing early childhood education. Our innovative program brings AI and computer science to the youngest learners, fostering creativity, critical thinking, and problem-solving skills. Our experienced educators provide onsite training and education, carefully crafting a nurturing environment that sparks curiosity and excitement. Admissions are now open for the upcoming semester! Don&apos;t miss this opportunity to give your child a head start in the world of AI and technology.
            </p>

            <div>
                <h2 className={'text-xl font-bold'}>Kindergarten (K.G.) STEM Entrepreneurs</h2>
                <p className={'leading-relaxed'}>
                    Welcome to USAI Kindergarten, where curiosity meets innovation! Our comprehensive program is divided into four terms, each spanning 12 weeks and consisting of 36 classes, with three engaging sessions per week. Throughout the year, our young learners embark on an exciting journey, exploring coding, STEM, entrepreneurship, and phonics. From becoming Little Coders in Term-I to transforming into STEM Explorers in Term-II, Entrepreneurs in Term-III, and Phonics Wizards in Term-IV, our students develop essential skills, creativity, and critical thinking, setting them up for lifelong success.
                </p>
            </div>

            <div>
                <h2 className={'text-xl font-bold'}>Learning Roadmap</h2>
                <ul >
                    <li>Term-0 Tiny Stars</li>
                    <li>Term-I Little Coders</li>
                    <li>Term-II STEM Explorers</li>
                    <li>Term-III Entrepreneurs</li>
                    <li>Term-IV Phonics Wizards</li>
                </ul>
            </div>

            <div className={'flex flex-col items-start justify-start gap-10'}>
                <Link className={'flex items-center justify-center text-xl text-slate-50 p-2 bg-red-500 hover:bg-red-700 w-24 rounded-lg'} href={'/usai/apply'}> Apply</Link>

                {/*<Link href={'https://github.com/drsagher/USAI'}><FaGithub size={55}/></Link>*/}


            </div>
        </div>
    )
}