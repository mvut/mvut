import Abs from '@/public/faculty/abs3.jpg';
import Image from "next/image";
import Link from "next/link";
import {FaArrowAltCircleLeft} from "react-icons/fa";

export default function ResearchComponent(){
    return(
        <div className={'container flex flex-col py-16'}>
            <Link href={'/pages/faculty'} className={'flex text-lg hover:text-red-500 items-center gap-2'}><FaArrowAltCircleLeft/>Faculties</Link>

            <p className={'text-xl md:text-2xl font-bold text-start py-2 lg:py-4 '}>Faculty of Research and Development</p>
            <p className={'text-xs sm:text-sm'}>
                The Research and Development Department at MVIT is a hub of innovation, driving technological advancements and business growth through cutting-edge research, experimentation, and product development. Our mission is to develop innovative solutions, products, and services that enhance competitiveness, sustainability, and social impact, while fostering a culture of continuous learning and improvement. Focusing on Web Development, Artificial Intelligence, Data Science, Machine Learning, Blockchain and Internet of Things, our multidisciplinary team employs design thinking, agile development, and experimentation to transform ideas into tangible solutions. Through collaboration with internal stakeholders, academia, and industry partners, we develop intellectual property, commercialize innovative solutions, and enhance organizational capabilities, striving to become a leading R&D organization recognized for excellence and transformative impact.

            </p>
            <div>
                <div
                    className={'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 justify-center items-start sm:gap-6 sm:px-6 '}>
                    {/* Leader */}
                    <div
                        className={'flex flex-col items-center justify-center gap-2 py-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'}>
                        <div className={'border-2 border-stone-900 rounded-full'}>
                            <Image src={Abs} alt={''} className={'h-44 w-44 rounded-full'}/>
                        </div>
                        <div className={'flex flex-col items-center justify-center'}>
                            <h2 className={'text-lg font-bold'}>Abubakar Siddique</h2>
                            <h2 className={'text-sm'}>MS (CS), B. Ed.</h2>
                            <h2 className={'text-sm'}>Instructor CS & IT</h2>
                            <h2 className={'text-sm'}>Pakistan</h2>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}