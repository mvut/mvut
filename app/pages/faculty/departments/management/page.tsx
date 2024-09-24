import Image from "next/image";
import Rashid from "@/public/faculty/rashid.jpg";
import Kamran from "@/public/faculty/kamran.jpg";
import Maqsood from "@/public/faculty/maqsood.jpg";

export default function ManagementDepartment(){
    return(
        <div className={'container flex flex-col min-h-screen'}>
            <p className={'text-xl md:text-2xl font-bold text-start py-2 lg:py-4 '}>Faculty of Management</p>
            <p className={'text-xs sm:text-sm'}>
                The Faculty of Management at MVIT empowers future leaders to navigate complex business landscapes, fostering strategic thinking, innovation, and collaborative problem-solving. Our expert faculty deliver a comprehensive curriculum encompassing business administration, management science, entrepreneurship, finance, marketing, and human resources. With a focus on experiential learning, case studies, and industry partnerships, students develop skills in decision-making, data analysis, and global perspective. Through research opportunities, internships, and executive mentorship, graduates are equipped to drive organizational success, lead change initiatives, and shape the future of business.

            </p>
            <div
                className={'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 justify-center items-start sm:gap-6 sm:px-6 '}>
                {/* Leader */}
                <div
                    className={'flex flex-col items-center justify-center gap-2 py-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'}>
                    <div className={'border-2 border-stone-900 rounded-full'}>
                        <Image src={Rashid} alt={''} className={'h-44 w-44 rounded-full'}/>
                    </div>
                    <div className={'flex flex-col items-center justify-center'}>
                        <h2 className={'text-lg font-bold'}>Rashid Zafar</h2>
                        <h2 className={'text-sm'}>MBA, M. Sc (Sports), B.Ed., LLB</h2>
                        <h2 className={'text-sm'}>Instructor Marketing Education</h2>
                        <h2 className={'text-sm'}>Pakistan</h2>
                    </div>
                </div>
                {/* Leader */}
                <div
                    className={'flex flex-col items-center justify-center gap-2 py-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'}>
                    <div className={'border-2 border-stone-900 rounded-full'}>
                        <Image src={Kamran} alt={''} className={'h-44 w-44 rounded-full'}/>
                    </div>
                    <div className={'flex flex-col items-center justify-center'}>
                        <h2 className={'text-lg font-bold'}>Kamran Shareef</h2>
                        <h2 className={'text-sm'}>MBA</h2>
                        <h2 className={'text-sm'}>Instructor Business Management</h2>
                        <h2 className={'text-sm'}>Pakistan</h2>
                    </div>
                </div>
                {/* Leader */}
                <div
                    className={'flex flex-col items-center justify-center gap-2 py-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'}>
                    <div className={'border-2 border-stone-900 rounded-full'}>
                        <Image src={Maqsood} alt={''} className={'h-44 w-44 rounded-full'}/>
                    </div>
                    <div className={'flex flex-col items-center justify-center'}>
                        <h2 className={'text-lg font-bold'}>Maqsood Ahmad</h2>
                        <h2 className={'text-sm'}>M. Sc. E-Commerce, B. Ed.</h2>
                        <h2 className={'text-sm'}>Instructor Commerce</h2>
                        <h2 className={'text-sm'}>Pakistan</h2>
                    </div>
                </div>

            </div>
        </div>
    )
}