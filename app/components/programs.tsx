import WebImage from '../../public/resources/freelance.jpg';
import Image from "next/image";
import Ug from '@/public/resources/ug.jpg';
import Gra from '@/public/resources/gra.jpg';
import Doct from '@/public/resources/doct.jpg';
import Dip from '@/public/resources/dip.jpg';

export default function ProgramComponent(){
    return (
        <div className="flex-col container mb-8 container mx-auto">
            <h2 className="text-xl text-indigo-900 font-bold">Online Learning Skills for a Brighter Tomorrow</h2>

            <div className="flex py-10 gap-4">
                <div
                    className="flex-col relative w-1/5 items-center justify-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                    <Image src={Ug} alt="" height={240} width={240}/>
                    <button className="absolute left-0 bottom-0 bg-amber-400 p-2 hover:bg-gray-200 text-xs">Undergraduate
                    </button>
                </div>

                <div
                    className="flex-col relative w-1/5 items-center justify-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                    <Image src={Gra} alt="" height={240} width={240}/>
                    <button className="absolute left-0 bottom-0 bg-amber-400 p-2 hover:bg-gray-200 text-xs">Graduate
                    </button>
                </div>

                <div
                    className="flex-col relative w-1/5 items-center justify-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                    <Image src={Doct} alt="" height={240} width={240}/>
                    <button className="absolute left-0 bottom-0 bg-amber-400 p-2 hover:bg-gray-200 text-xs">Doctorate</button>
                </div>

                <div
                    className="flex-col relative w-1/5 items-center justify-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                    <Image src={Dip} alt="" height={240} width={240}/>
                    <button className="absolute left-0 bottom-0 bg-amber-400 p-2 hover:bg-gray-200 text-xs">Diploma</button>
                </div>

                <div
                    className="flex-col relative w-1/5 items-center justify-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                    <Image src={WebImage} alt="" height={240} width={240}/>
                    <button className="absolute left-0 bottom-0 bg-amber-400 p-2 hover:bg-gray-200 text-xs">Freelance
                    </button>
                </div>

            </div>

        </div>
    )
}