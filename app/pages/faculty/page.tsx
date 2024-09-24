import Abs from '@/public/faculty/abs3.jpg';
import Image from "next/image";

export default function ResearchComponent(){
    return(
        <div className={'container flex flex-col min-h-screen'}>
            <p className={'text-xl md:text-2xl font-bold text-start py-2 lg:py-4 '}>Faculty of Research and Development</p>
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