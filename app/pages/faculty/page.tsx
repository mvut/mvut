import Abs from '@/public/resources/img1.jpg';
import Img5 from '@/public/resources/img5.jpg';
import Img6 from '@/public/resources/research.png';
import Img7 from '@/public/resources/ai-generated2.jpg';
import Img15 from '@/public/resources/img15.jpg';
import Img17 from '@/public/resources/img17.jpg';
import Img18 from '@/public/resources/img18.jpg';
import Img19 from '@/public/resources/img19.jpg';
import Img13 from '@/public/resources/img13.jpg';
import Img8 from '@/public/resources/img8.jpg';
import Img20 from '@/public/resources/img20.jpg';
import Img16 from '@/public/resources/img16.jpg';
import Image from "next/image";
import Img3 from "@/public/resources/img3.jpg";
import Link from "next/link";

export default function ResearchComponent(){
    return(
        <div className={'container flex flex-col min-h-screen pt-10 pb-24 '}>

            <p className={'text-3xl md:text-5xl font-bold text-start py-10'}>Faculties</p>
            <div className={'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16'}>
                {/*    */}
                <div
                    className={'border-4 border-stone-900 group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-lg hover:shadow-teal-700'}>
                    <div className={'flex flex-col gap-8 bg-slate-200'}>
                        <Image src={Img5} alt={''}
                               className={'h-48 w-full object-cover transition-transform duration-500 rotate-3 scale-110 group-hover:scale-125'}/>
                    </div>
                    <div
                        className={'flex bg-stone-950 text-gray-200 h-24 items-center justify-center p-4 hover:bg-stone-800'}>
                        <Link href={'/pages/faculty/departments/research'} className={''}>Faculty of Research and
                            Development</Link>
                        {/*<p className={'text-xl'}>Faculty of Research and Development</p>*/}
                    </div>
                </div>
                {/*    */}
                <div
                    className={'border-4 border-stone-900 group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-lg hover:shadow-teal-700'}>
                    <div className={'flex flex-col gap-8 bg-slate-200'}>
                        <Image src={Img6} alt={''}
                               className={'h-48 w-full object-cover transition-transform duration-500 rotate-3 scale-110 group-hover:scale-125'}/>
                    </div>
                    <div
                        className={'flex bg-stone-950 text-gray-200 h-24 items-center justify-center p-4 hover:bg-stone-800'}>
                        <Link href={'/pages/faculty/departments/appdev'} className={''}>Faculty of Application
                            Development</Link>
                        {/*<p className={'text-xl'}>Faculty of Research and Development</p>*/}
                    </div>
                </div>
                {/*    */}
                <div
                    className={'border-4 border-stone-900 group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-lg hover:shadow-teal-700'}>
                    <div className={'flex flex-col gap-8 bg-slate-200'}>
                        <Image src={Img7} alt={''}
                               className={'h-48 w-full object-cover transition-transform duration-500 rotate-3 scale-110 group-hover:scale-125'}/>
                    </div>
                    <div
                        className={'flex bg-stone-950 text-gray-200 h-24 items-center justify-center p-4 hover:bg-stone-800'}>
                        <Link href={'/pages/faculty/departments/ds'} className={''}>Faculty of Data Science & Machine
                            Learning</Link>
                        {/*<p className={'text-xl'}>Faculty of Research and Development</p>*/}
                    </div>
                </div>
                {/*    */}
                <div
                    className={'border-4 border-stone-900 group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-lg hover:shadow-teal-700'}>
                    <div className={'flex flex-col gap-8 bg-slate-200'}>
                        <Image src={Img15} alt={''}
                               className={'h-48 w-full object-cover transition-transform duration-500 rotate-3 scale-110 group-hover:scale-125'}/>
                    </div>
                    <div
                        className={'flex bg-stone-950 text-gray-200 h-24 items-center justify-center p-4 hover:bg-stone-800'}>
                        <Link href={'/pages/faculty/departments/CS'} className={''}>Faculty of Computer Science</Link>
                        {/*<p className={'text-xl'}>Faculty of Research and Development</p>*/}
                    </div>
                </div>
                {/*    */}
                <div
                    className={'border-4 border-stone-900 group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-lg hover:shadow-teal-700'}>
                    <div className={'flex flex-col gap-8 bg-slate-200'}>
                        <Image src={Img17} alt={''}
                               className={'h-48 w-full object-cover transition-transform duration-500 rotate-3 scale-110 group-hover:scale-125'}/>
                    </div>
                    <div
                        className={'flex bg-stone-950 text-gray-200 h-24 items-center justify-center p-4 hover:bg-stone-800'}>
                        <Link href={'/pages/faculty/departments/se'} className={''}>Faculty of Software
                            Engineering</Link>
                        {/*<p className={'text-xl'}>Faculty of Research and Development</p>*/}
                    </div>
                </div>
                {/*    */}
                <div
                    className={'border-4 border-stone-900 group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-lg hover:shadow-teal-700'}>
                    <div className={'flex flex-col gap-8 bg-slate-200'}>
                        <Image src={Img18} alt={''}
                               className={'h-48 w-full object-cover transition-transform duration-500 rotate-3 scale-110 group-hover:scale-125'}/>
                    </div>
                    <div
                        className={'flex bg-stone-950 text-gray-200 h-24 items-center justify-center p-4 hover:bg-stone-800'}>
                        <Link href={'/pages/faculty/departments/math'} className={''}>Faculty of Mathematics</Link>
                        {/*<p className={'text-xl'}>Faculty of Research and Development</p>*/}
                    </div>
                </div>
                {/*    */}
                <div
                    className={'border-4 border-stone-900 group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-lg hover:shadow-teal-700'}>
                    <div className={'flex flex-col gap-8 bg-slate-200'}>
                        <Image src={Img19} alt={''}
                               className={'h-48 w-full object-cover transition-transform duration-500 rotate-3 scale-110 group-hover:scale-125'}/>
                    </div>
                    <div
                        className={'flex bg-stone-950 text-gray-200 h-24 items-center justify-center p-4 hover:bg-stone-800'}>
                        <Link href={'/pages/faculty/departments/eng'} className={''}>Faculty of English Language</Link>
                        {/*<p className={'text-xl'}>Faculty of Research and Development</p>*/}
                    </div>
                </div>
                {/*    */}
                <div
                    className={'border-4 border-stone-900 group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-lg hover:shadow-teal-700'}>
                    <div className={'flex flex-col gap-8 bg-slate-200'}>
                        <Image src={Img13} alt={''}
                               className={'h-48 w-full object-cover transition-transform duration-500 rotate-3 scale-110 group-hover:scale-125'}/>
                    </div>
                    <div
                        className={'flex bg-stone-950 text-gray-200 h-24 items-center justify-center p-4 hover:bg-stone-800'}>
                        <Link href={'/pages/faculty/departments/management'} className={''}>Faculty of Management</Link>
                        {/*<p className={'text-xl'}>Faculty of Research and Development</p>*/}
                    </div>
                </div>
                {/*    */}
                <div
                    className={'border-4 border-stone-900 group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-lg hover:shadow-teal-700'}>
                    <div className={'flex flex-col gap-8 bg-slate-200'}>
                        <Image src={Img8} alt={''}
                               className={'h-48 w-full object-cover transition-transform duration-500 rotate-3 scale-110 group-hover:scale-125'}/>
                    </div>
                    <div
                        className={'flex bg-stone-950 text-gray-200 h-24 items-center justify-center p-4 hover:bg-stone-800'}>
                        <Link href={'/pages/faculty/departments/leadership'} className={''}>Faculty of Entrepreneurial
                            Leadership</Link>
                        {/*<p className={'text-xl'}>Faculty of Research and Development</p>*/}
                    </div>
                </div>
                {/*    */}
                <div
                    className={'border-4 border-stone-900 group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-lg hover:shadow-teal-700'}>
                    <div className={'flex flex-col gap-8 bg-slate-200'}>
                        <Image src={Img20} alt={''}
                               className={'h-48 w-full object-cover transition-transform duration-500 rotate-3 scale-110 group-hover:scale-125'}/>
                    </div>
                    <div
                        className={'flex bg-stone-950 text-gray-200 h-24 items-center justify-center p-4 hover:bg-stone-800'}>
                        <Link href={'/pages/faculty/departments/sociology'} className={''}>Faculty of Sociology</Link>
                        {/*<p className={'text-xl'}>Faculty of Research and Development</p>*/}
                    </div>
                </div>
                {/*    */}
                <div
                    className={'border-4 border-stone-900 group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-lg hover:shadow-teal-700'}>
                    <div className={'flex flex-col gap-8 bg-slate-200'}>
                        <Image src={Img16} alt={''}
                               className={'h-48 w-full object-cover transition-transform duration-500 rotate-3 scale-110 group-hover:scale-125'}/>
                    </div>
                    <div
                        className={'flex bg-stone-950 text-gray-200 h-24 items-center justify-center p-4 hover:bg-stone-800'}>
                        <Link href={'/pages/faculty/departments/interdisp'} className={''}>Faculty of Interdisciplinary
                            Education</Link>
                        {/*<p className={'text-xl'}>Faculty of Research and Development</p>*/}
                    </div>
                </div>
                {/*    */}
            </div>
        </div>
    )
}