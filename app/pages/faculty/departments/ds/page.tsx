import Image from "next/image";
import ArshadIqbal from "@/public/faculty/arshadiqbal.jpg";
import Mabbas from "@/public/faculty/mabbas.jpg";
import Abid from "@/public/faculty/abid.jpg";
import Sohail from "@/public/faculty/sohail2.jpg";

export default function CSDepartment(){
    return(
        <div className={'container flex flex-col py-16'}>
            <p className={'text-3xl md:text-2xl font-bold text-start py-2 lg:py-10 '}>Faculty of Data Science & Machine Learning</p>
            <div
                className={'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 justify-center items-start sm:gap-6 sm:px-6 '}>
                {/* Leader */}
                <div
                    className={'flex flex-col items-center justify-center gap-2 py-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'}>
                    <div className={'border-2 border-stone-900 rounded-full'}>
                        <Image src={ArshadIqbal} alt={''} className={'h-44 w-44 rounded-full'}/>
                    </div>
                    <div className={'flex flex-col items-center justify-center'}>
                        <h2 className={'text-lg font-bold'}>Arshad Iqbal</h2>
                        <h2 className={'text-sm'}>M.Phil. Statistics, M. Ed.</h2>
                        <h2 className={'text-sm'}>Instructor Data Science</h2>
                        <h2 className={'text-sm'}>Pakistan</h2>
                    </div>
                </div>
                {/* Leader */}
                <div
                    className={'flex flex-col items-center justify-center gap-2 py-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'}>
                    <div className={'border-2 border-stone-900 rounded-full'}>
                        <Image src={Mabbas} alt={''} className={'h-44 w-44 rounded-full'}/>
                    </div>
                    <div className={'flex flex-col items-center justify-center'}>
                        <h2 className={'text-lg font-bold'}>Abbas Muhammad</h2>
                        <h2 className={'text-sm'}>MS (CS), B. Ed.</h2>
                        <h2 className={'text-sm'}>Instructor SE & Databases</h2>
                        <h2 className={'text-sm'}>Pakistan</h2>
                    </div>
                </div>
                {/* Leader */}
                <div
                    className={'flex flex-col items-center justify-center gap-2 py-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'}>
                    <div className={'border-2 border-stone-900 rounded-full'}>
                        <Image src={Abid} alt={''} className={'h-44 w-44 rounded-full'}/>
                    </div>
                    <div className={'flex flex-col items-center justify-center'}>
                        <h2 className={'text-lg font-bold'}>Abid Hussain</h2>
                        <h2 className={'text-sm'}>MS (CS), M. Ed.</h2>
                        <h2 className={'text-sm'}>Instructor CS & Simulations</h2>
                        <h2 className={'text-sm'}>Pakistan</h2>
                    </div>
                </div>

                {/* Leader */}
                <div
                    className={'flex flex-col items-center justify-center gap-2 py-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'}>
                    <div className={'border-2 border-stone-900 rounded-full'}>
                        <Image src={Sohail} alt={''} className={'h-44 w-44 rounded-full'}/>
                    </div>
                    <div className={'flex flex-col items-center justify-center'}>
                        <h2 className={'text-lg font-bold'}>Sohail Ahmed</h2>
                        <h2 className={'text-sm'}>MS (CS), M. Ed.</h2>
                        <h2 className={'text-sm'}>Instructor R&D, Simulation</h2>
                        <h2 className={'text-sm'}>Pakistan</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}