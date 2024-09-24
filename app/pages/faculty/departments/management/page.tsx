import Image from "next/image";
import Rashid from "@/public/faculty/rashid.jpg";
import Kamran from "@/public/faculty/kamran.jpg";
import Maqsood from "@/public/faculty/maqsood.jpg";

export default function CSDepartment(){
    return(
        <div className={'container flex flex-col py-16'}>
            <p className={'text-3xl md:text-2xl font-bold text-start py-2 lg:py-10 '}>Faculty of Management</p>
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