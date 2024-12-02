import Link from "next/link";
import Image from "next/image";
import Py from '@/public/py.png';

export default function UnitedSchoolOfAI(){
    return(
        <div className={'flex flex-col min-h-screen '}>

            <div className={'flex text-gray-50'}>
                <div className={'flex flex-col bg-rose-800 px-16 py-10'}>
                    <h1 className={'text-3xl '}>
                        United School of Artificial Intelligence</h1>
                    <p className={'text-xl italic'}>Free Code Literacy for All</p>
                    <p className={'text-sm leading-relaxed sm:w-[45%]'}>Welcome to the United School of Artificial Intelligence
                        (USAI), a pioneering institution
                        dedicated to shaping the future through advanced AI education. At USAI, we empower learners from
                        all backgrounds with cutting-edge knowledge and practical skills in artificial intelligence,
                        fostering innovation and excellence. Our programs are designed to cultivate critical thinking,
                        creativity, and technical expertise, preparing students to excel in the evolving global tech
                        landscape.
                    </p>
                </div>

            </div>

            <div className={'container py-24 '}>
                <div className={'flex flex-col h-full sm:w-96 items-center justify-center border-2 bg-gray-100 border-amber-200 rounded-full p-2'}>
                    <Image src={Py} alt={''} height={100} width={100}/>
                    <p className={'text-xl py-3'}>Python for Artificial Intelligence</p>
                    {/* <p className={'leading-relaxed text-justify'}>*/}
                    {/*     Welcome to the Python for AI course! This program introduces you to Python, the leading language*/}
                    {/*     for Artificial Intelligence and machine learning. You&apos;ll learn essential programming skills, explore key libraries like NumPy, Pandas, and TensorFlow, and apply your knowledge through practical AI projects. Designed for learners of all backgrounds, this course provides a strong foundation to start your journey in AI with just a laptop. Let&apos;s unlock the future of AI together!*/}
                    {/*</p>*/}
                    <Link href={'/pages/apply'}
                          className={'bg-gray-700 w-16 hover:bg-rose-700 text-teal-50 rounded-full text-center'}>Enroll</Link>
                </div>
            </div>

        </div>
    )
}