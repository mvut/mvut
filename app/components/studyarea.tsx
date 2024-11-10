import { FaComputer } from "react-icons/fa6";
import { FaGlobe } from "react-icons/fa";
import { GiVintageRobot } from "react-icons/gi";
import { FaChartBar } from "react-icons/fa";
import { IoBusiness } from "react-icons/io5";
import { LuLanguages } from "react-icons/lu";
import { MdOutlineSupervisedUserCircle } from "react-icons/md";
import { FcReading } from "react-icons/fc";

export default function StudyAreaComponent(){
    return(
        <div className={'flex flex-col items-center justify-center py-24 bg-[url(../public/resources/laptop.jpg)] bg-fixed'}>
            <h2 className={'flex items-center justify-center text-3xl font-bold pb-16 text-amber-400'}><FcReading size={45}/>
                Areas of study</h2>
            <div className={'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-16'}>
                <div className={'hover-fill flex items-center justify-start gap-2 bg-gray-900 rounded-l-full text-amber-400  p-2 w-96'}>
                    <FaComputer />
                    <p>Computer Science</p>
                </div>
                <div className={'hover-fill flex items-center justify-start gap-2 bg-gray-900 rounded-l-full text-amber-400  p-2 w-96'}>
                    <FaGlobe />
                    <p>Information Technology</p>
                </div>
                <div className={'hover-fill flex items-center justify-start gap-2 bg-gray-900 rounded-l-full text-amber-400  p-2 w-96'}>
                    <GiVintageRobot />
                    <p>Artificial Intelligence</p>
                </div>
                <div className={'hover-fill flex items-center justify-start gap-2 bg-gray-900 rounded-l-full text-amber-400  p-2 w-96'}>
                    <FaChartBar />
                    <p>Data Science</p>
                </div>
                <div className={'hover-fill flex items-center justify-start gap-2 bg-gray-900 rounded-l-full text-amber-400  p-2 w-96'}>
                    <IoBusiness />
                    <p>Business & Management Studies</p>
                </div>
                <div className={'hover-fill flex items-center justify-start gap-2 bg-gray-900 rounded-l-full text-amber-400  p-2 w-96'}>
                    <IoBusiness />
                    <p>E-Commerce & Finance</p>
                </div>
                <div className={'hover-fill flex items-center justify-start gap-2 bg-gray-900 rounded-l-full text-amber-400  p-2 w-96'}>
                    <LuLanguages />
                    <p>English Linguistic Studies</p>
                </div>
                <div className={'hover-fill flex items-center justify-start gap-2 bg-gray-900 rounded-l-full text-amber-400  p-2 w-96'}>
                    <MdOutlineSupervisedUserCircle />
                    <p>Education Studies</p>
                </div>
            </div>
        </div>
    )
}