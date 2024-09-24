import Image from "next/image";
import Babar from "@/public/faculty/babar.jpg";
import Amir from "@/public/faculty/amir.jpg";

export default function CSDepartment(){
    return(
        <div className={'container flex flex-col py-16'}>
            <p className={'text-3xl md:text-2xl font-bold text-start py-2 lg:py-10 '}>Faculty of Mathematics</p>
            <div
                className={'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 justify-center items-start sm:gap-6 sm:px-6 '}>
                {/* Leader */}
                <div
                    className={'flex flex-col items-center justify-center gap-2 py-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'}>
                    <div className={'border-2 border-stone-900 rounded-full'}>
                        <Image src={Babar} alt={''} className={'h-44 w-44 rounded-full'}/>
                    </div>
                    <div className={'flex flex-col items-center justify-center'}>
                        <h2 className={'text-lg font-bold'}>Babar Hussain</h2>
                        <h2 className={'text-sm'}>M.Phil. Mathematics, B. Ed.</h2>
                        <h2 className={'text-sm'}>Instructor Mathematics</h2>
                        <h2 className={'text-sm'}>Pakistan</h2>
                    </div>
                </div>
                {/* Leader */}
                <div
                    className={'flex flex-col items-center justify-center gap-2 py-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'}>
                    <div className={'border-2 border-stone-900 rounded-full'}>
                        <Image src={Amir} alt={''} className={'h-44 w-44 rounded-full'}/>
                    </div>
                    <div className={'flex flex-col items-center justify-center'}>
                        <h2 className={'text-lg font-bold'}>Amir Shahzad</h2>
                        <h2 className={'text-sm'}>M.Phil. Mathematics, B. Ed.</h2>
                        <h2 className={'text-sm'}>Instructor Computational Algorithms</h2>
                        <h2 className={'text-sm'}>Pakistan</h2>
                    </div>
                </div>

            </div>
        </div>
    )
}