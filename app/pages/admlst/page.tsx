import Image from "next/image";
import Awais from '@/public/trainees/awais.jpg';
import Sami from '@/public/trainees/sami.jpg';
import Talha from '@/public/trainees/asad.jpg';
import Haroon from '@/public/trainees/haroonraza.jpg';
import Yassri from '@/public/trainees/yassri.jpeg';
import Babar from '@/public/trainees/babar.jpg';
import Samina from '@/public/faculty/dummy.png';
import Shafique from '@/public/trainees/shafiqueahmad.jpg';
import Link from "next/link";

export default function ListOfAdmittedCandidates(){
    return (
        <div className={'container min-h-screen py-16'}>
            <p className={'font-bold pb-6 text-2xl '}>List of Admitted Candidates in Fall 2024</p>
            <div className={'grid grid-cols-2 gap-6 sm:pl-10'}>
                <div className={'flex flex-wrap gap-4'}>
                    <Image src={Awais} alt={'Muhammad Awais'} className={'w-24 h-24'}/>
                    <div className={''}>
                        <p className={'text-xl font-bold'}>Muhammad Awais</p>
                        <Link href={'/pages/study/programs/nxgd'} className={'text-lg hover:text-blue-500'}>Next-Generation Web Development with Python</Link>
                        <p>MVIT, Pakistan</p>
                    </div>
                </div>

                <div className={'flex flex-wrap gap-4'}>
                    <Image src={Haroon} alt={'Haroon Raza'} className={'w-24 h-24'}/>
                    <div className={''}>
                        <p className={'text-xl font-bold'}>Haroon Raza</p>
                        <Link href={'/pages/study/programs/nxgd'} className={'text-lg hover:text-blue-500'}>Next-Generation Web Development with Python</Link>
                        <p>MVIT, Pakistan</p>
                    </div>
                </div>

                <div className={'flex flex-wrap gap-4'}>
                    <Image src={Sami} alt={'Sami Munir'} className={'w-24 h-24'}/>
                    <div className={''}>
                        <p className={'text-xl font-bold'}>Sami Muneer</p>
                        <Link href={'/pages/study/programs/nxgd'} className={'text-lg hover:text-blue-500'}>Next-Generation Web Development with Python</Link>
                        <p>MVIT, Pakistan</p>
                    </div>
                </div>

                <div className={'flex flex-wrap gap-4'}>
                    <Image src={Talha} alt={'Talha Zaheer'} className={'w-24 h-24'}/>
                    <div className={''}>
                        <p className={'text-xl font-bold'}>Talha Zaheer</p>
                        <Link href={'/pages/study/programs/nxgd'} className={'text-lg hover:text-blue-500'}>Next-Generation Web Development with Python</Link>
                        <p>MVIT, Pakistan</p>
                    </div>
                </div>

                <div className={'flex flex-wrap gap-4'}>
                    <Image src={Yassri} alt={'Muhammad Yasir'} className={'w-24 h-24'}/>
                    <div className={''}>
                        <p className={'text-xl font-bold'}>Muhammad Yasir</p>
                        <Link href={'/pages/study/programs/nxgd'} className={'text-lg hover:text-blue-500'}>Next-Generation Web Development with Python</Link>
                        <p>MVIT, Pakistan</p>
                    </div>
                </div>

                <div className={'flex flex-wrap gap-4'}>
                    <Image src={Babar} alt={'Babar Hussain'} className={'w-24 h-24'}/>
                    <div className={''}>
                        <p className={'text-xl font-bold'}>Babar Hussain</p>
                        <Link href={'/pages/study/programs/nxgd'} className={'text-lg hover:text-blue-500'}>Next-Generation Web Development with Python</Link>
                        <p>MVIT, Pakistan</p>
                    </div>
                </div>

                <div className={'flex flex-wrap gap-4'}>
                    <Image src={Samina} alt={'Samina Hassan'} className={'w-24 h-24'}/>
                    <div className={''}>
                        <p className={'text-xl font-bold'}>Samina Hassan</p>
                        <Link href={'/pages/study/programs/nxgd'} className={'text-lg hover:text-blue-500'}>Next-Generation Web Development with Python</Link>
                        <p>MVIT, Pakistan</p>
                    </div>
                </div>

                {/*<div className={'flex flex-wrap gap-4'}>*/}
                {/*    <Image src={Shafique} alt={'Muhammad Shafique'} className={'w-24 h-24'}/>*/}
                {/*    <div className={''}>*/}
                {/*        <p className={'text-xl font-bold'}>Muhammad Shafique</p>*/}
                {/*        <Link href={'/pages/study/programs/nxgd'} className={'text-lg hover:text-blue-500'}>Next-Generation Web Development with Python</Link>*/}
                {/*        <p>MVIT, Pakistan</p>*/}
                {/*    </div>*/}
                {/*</div>*/}


            </div>
        </div>
    )
}