import Abs from '@/public/faculty/abs.png';
import Younas from '@/public/faculty/younis.jpg';
import Mst from '@/public/faculty/mst.jpg';
import Hussain from '@/public/faculty/hussain.jpg';
import ArshadIqbal from '@/public/faculty/arshadiqbal.jpg';
import GhulamAbbas from '@/public/faculty/gabbas.jpg';
import Daha from '@/public/faculty/daha.jpg';
import Arshad from '@/public/faculty/arshad.jpg';
import Gami from '@/public/faculty/gami.jpg';
import Image from "next/image";

export default function FacultyComponent(){
    return(
        <div className={'container mx-auto flex flex-col items-center justify-center py-6'}>
            <p className={'text-lg md:text-3xl font-bold text-center py-2 lg:py-10 uppercase'}>Faculty</p>
            <div className={'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center items-start gap-6 px-6 '}>
                {/*    */}
                <div
                    className={'w-auto h-full grid grid-cols-1 transition ease-in-out delay-150 odd:bg-blue-700 even:bg-teal-700 p-2 hover:-translate-y-1 hover:scale-110 hover:bg-amber-700 rounded-xl duration-300 '}>
                    <Image src={ArshadIqbal} alt={''} className={'h-96 w-full'}/>
                    <h2 className={'font-bold text-lg text-white'}>Arshad Iqbal</h2>
                    <p className={'text-xs sm:text-sm md:text-md lg:text-lg text-white'}>
                        Data Scientist
                    </p>
                    <p className={'text-xs sm:text-sm md:text-md lg:text-lg text-white italic'}>Pakistan</p>
                </div>
                {/*    */}
                <div
                    className={'w-auto h-full grid grid-cols-1 transition ease-in-out delay-150 odd:bg-blue-700 even:bg-red-700 p-2 hover:-translate-y-1 hover:scale-110 hover:bg-amber-700 rounded-xl duration-300 '}>
                    <Image src={Arshad} alt={''} className={'h-96 w-full'}/>
                    <h2 className={'font-bold text-lg text-white'}>Muhammad Arshad</h2>
                    <p className={'text-xs sm:text-sm md:text-md lg:text-lg text-white'}>
                        Sr. Instructor Computer Science
                    </p>
                    <p className={'text-xs sm:text-sm md:text-md lg:text-lg text-white italic'}>Pakistan</p>
                </div>
                {/*    */}
                <div
                    className={'w-auto h-full grid grid-cols-1 transition ease-in-out delay-150 odd:bg-blue-700 even:bg-red-700 p-2 hover:-translate-y-1 hover:scale-110 hover:bg-amber-700 rounded-xl duration-300 '}>
                    <Image src={GhulamAbbas} alt={''} className={'h-96 w-full'}/>
                    <h2 className={'font-bold text-lg text-white'}>Ghulam Abbas</h2>
                    <p className={'text-xs sm:text-sm md:text-md lg:text-lg text-white'}>
                        Sr. Instructor Programming & Algorithms
                    </p>
                    <p className={'text-xs sm:text-sm md:text-md lg:text-lg text-white italic'}>Pakistan</p>
                </div>
                {/*    */}
                <div
                    className={'w-auto h-full grid grid-cols-1 transition ease-in-out delay-150 odd:bg-blue-700 even:bg-red-700 p-2 hover:-translate-y-1 hover:scale-110 hover:bg-amber-700 rounded-xl duration-300 '}>
                    <Image src={Abs} alt={''} className={'h-96 w-full'}/>
                    <h2 className={'font-bold text-lg text-white'}>Abubakar Siddique</h2>
                    <p className={'text-xs sm:text-sm md:text-md lg:text-lg text-white'}>
                        Software Engineer
                    </p>
                    <p className={'text-xs sm:text-sm md:text-md lg:text-lg text-white italic'}>Pakistan</p>
                </div>
                {/*    */}
                <div
                    className={'w-auto h-full grid grid-cols-1 transition ease-in-out delay-150 odd:bg-blue-700 even:bg-red-700 p-2 hover:-translate-y-1 hover:scale-110 hover:bg-amber-700 rounded-xl duration-300 '}>
                    <Image src={Mst} alt={''} className={'h-96 w-full'}/>
                    <h2 className={'font-bold text-lg text-white'}>Muhammad Shaban</h2>
                    <p className={'text-xs sm:text-sm md:text-md lg:text-lg text-white'}>
                        Full Stack Developer
                    </p>
                    <p className={'text-xs sm:text-sm md:text-md lg:text-lg text-white italic'}>Pakistan</p>
                </div>
                {/*    */}
                <div
                    className={'w-auto h-full grid grid-cols-1 transition ease-in-out delay-150 odd:bg-blue-700 even:bg-red-700 p-2 hover:-translate-y-1 hover:scale-110 hover:bg-amber-700 rounded-xl duration-300 '}>
                    <Image src={Hussain} alt={''} className={'h-96 w-full'}/>
                    <h2 className={'font-bold text-lg text-white'}>Muhammad Hussain</h2>
                    <p className={'text-xs sm:text-sm md:text-md lg:text-lg text-white'}>
                        Graphics and Creative Artist
                    </p>
                    <p className={'text-xs sm:text-sm md:text-md lg:text-lg text-white italic'}>Pakistan</p>
                </div>
                {/*    */}
                <div
                    className={'w-auto h-full grid grid-cols-1 transition ease-in-out delay-150 odd:bg-blue-700 even:bg-red-700 p-2 hover:-translate-y-1 hover:scale-110 hover:bg-amber-700 rounded-xl duration-300 '}>
                    <Image src={Younas} alt={''} className={'h-96 w-full'}/>
                    <h2 className={'font-bold text-lg text-white'}>Muhammad Younas Alam</h2>
                    <p className={'text-xs sm:text-sm md:text-md lg:text-lg text-white'}>
                        Technical English Language Expert
                    </p>
                    <p className={'text-xs sm:text-sm md:text-md lg:text-lg text-white italic'}>Pakistan</p>
                </div>
                {/*    */}
                <div
                    className={'w-auto h-full grid grid-cols-1 transition ease-in-out delay-150 odd:bg-blue-700 even:bg-red-700 p-2 hover:-translate-y-1 hover:scale-110 hover:bg-amber-700 rounded-xl duration-300 '}>
                    <Image src={Daha} alt={''} className={'h-96 w-full'}/>
                    <h2 className={'font-bold text-lg text-white'}>Daha Qalbi</h2>
                    <p className={'text-xs sm:text-sm md:text-md lg:text-lg text-white'}>
                        MERN Stack Developer
                    </p>
                    <p className={'text-xs sm:text-sm md:text-md lg:text-lg text-white italic'}>Pakistan</p>
                </div>
                {/*    */}
                <div
                    className={'w-auto h-full grid grid-cols-1 transition ease-in-out delay-150 odd:bg-blue-700 even:bg-red-700 p-2 hover:-translate-y-1 hover:scale-110 hover:bg-amber-700 rounded-xl duration-300 '}>
                    <Image src={Gami} alt={''} className={'h-96 w-full'}/>
                    <h2 className={'font-bold text-lg text-white'}>Ghulam Muhammad</h2>
                    <p className={'text-xs sm:text-sm md:text-md lg:text-lg text-white'}>
                        Amazon VA Expert
                    </p>
                    <p className={'text-xs sm:text-sm md:text-md lg:text-lg text-white italic'}>Pakistan</p>
                </div>
            </div>
        </div>
    )
}