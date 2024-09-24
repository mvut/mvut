import Image from "next/image";

import Mike from "@/public/faculty/mike2.jpg";

export default function LeadershipDepartment(){
    return(
        <div className={'container flex flex-col min-h-screen'}>
            <p className={'text-xl md:text-2xl font-bold text-start py-2 lg:py-4 '}>Faculty of Entrepreneurial Leadership</p>
            <div
                className={'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 justify-center items-start sm:gap-6 sm:px-6 '}>
                {/* Leader */}
                <div
                    className={'flex flex-col items-center justify-center gap-2 py-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'}>
                    <div className={'border-2 border-stone-900 rounded-full'}>
                        <Image src={Mike} alt={''} className={'h-44 w-44 rounded-full'}/>
                    </div>
                    <div className={'flex flex-col items-center justify-center'}>
                        <h2 className={'text-lg font-bold'}>Mike Litman</h2>
                        <h2 className={'text-sm'}>MBA, CYD</h2>
                        <h2 className={'text-sm'}>Global Thought Leader</h2>
                        <h2 className={'text-sm'}>United States</h2>
                    </div>
                </div>

            </div>
        </div>
    )
}