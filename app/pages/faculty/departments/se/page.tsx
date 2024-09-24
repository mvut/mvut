import Image from "next/image";
import Arshad from "@/public/faculty/arshadit.jpg";
import GhulamAbbas from "@/public/faculty/gabbas2.jpeg";

export default function SoftwareEngineeringDepartment(){
    return(
        <div className={'container flex flex-col min-h-screen'}>
            <p className={'text-xl md:text-2xl font-bold text-start py-2 lg:py-4 '}>Faculty of Software Engineering</p>
            <div
                className={'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 justify-center items-start sm:gap-6 sm:px-6 '}>
                {/* Leader */}
                <div
                    className={'flex flex-col items-center justify-center gap-2 py-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'}>
                    <div className={'border-2 border-stone-900 rounded-full'}>
                        <Image src={Arshad} alt={''} className={'h-44 w-44 rounded-full'}/>
                    </div>
                    <div className={'flex flex-col items-center justify-center'}>
                        <h2 className={'text-lg font-bold'}>Muhammad Arshad</h2>
                        <h2 className={'text-sm'}>MS (CS), M. Ed.</h2>
                        <h2 className={'text-sm'}>Instructor Software Engineering</h2>
                        <h2 className={'text-sm'}>Pakistan</h2>
                    </div>
                </div>
                {/* Leader */}
                <div
                    className={'flex flex-col items-center justify-center gap-2 py-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'}>
                    <div className={'border-2 border-stone-900 rounded-full'}>
                        <Image src={GhulamAbbas} alt={''} className={'h-44 w-44 rounded-full'}/>
                    </div>
                    <div className={'flex flex-col items-center justify-center'}>
                        <h2 className={'text-lg font-bold'}>Ghulam Abbas</h2>
                        <h2 className={'text-sm'}>MS (CS), M.Sc Mathematics, B. Ed.</h2>
                        <h2 className={'text-sm'}>Instructor Programming & Algorithms</h2>
                        <h2 className={'text-sm'}>Pakistan</h2>
                    </div>
                </div>

            </div>
        </div>
    )
}