import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { FaPython } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiPhp } from "react-icons/si";
import { IoLogoLaravel } from "react-icons/io5";
import { FaSymfony } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";
import { IoLogoVercel } from "react-icons/io5";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiMysql } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { SiAdobephotoshop } from "react-icons/si";
import { IoLogoFigma } from "react-icons/io5";
import { SiCsharp } from "react-icons/si";
import { SiGooglecloud } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { SiKubernetes } from "react-icons/si";
import { MdAnalytics } from "react-icons/md";

export default function TechComponent(){
    return(
        <div className={'container flex flex-col items-center justify-center text-teal-500 my-16 text-center'}>
                <p className={'text-3xl pb-10 text-teal-950'}>Cutting-Edge Solutions</p>
            <div className={'grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-12 gap-2'}>
                    <FaReact size={75} className={'hover:text-stone-900 transition-all ease-in-out delay-200'}/>
                    <FaNodeJs size={75} className={'hover:text-stone-900 transition-all ease-in-out delay-200'}/>
                    <RiNextjsFill size={75} className={'hover:text-stone-900 transition-all ease-in-out delay-200'}/>
                    <FaPython size={75} className={'hover:text-stone-900 transition-all ease-in-out delay-200'}/>
                    <FaBootstrap size={75} className={'hover:text-stone-900 transition-all ease-in-out delay-200'}/>
                    <RiTailwindCssFill size={75} className={'hover:text-stone-900 transition-all ease-in-out delay-200'}/>
                    <FaHtml5 size={75} className={'hover:text-stone-900 transition-all ease-in-out delay-200'}/>
                    <FaCss3Alt size={75} className={'hover:text-stone-900 transition-all ease-in-out delay-200'}/>
                    <IoLogoJavascript size={75} className={'hover:text-stone-900 transition-all ease-in-out delay-200'}/>
                    <SiPhp size={75} className={'hover:text-stone-900 transition-all ease-in-out delay-200'}/>
                    <IoLogoLaravel size={75} className={'hover:text-stone-900 transition-all ease-in-out delay-200'}/>
                    <FaSymfony size={75} className={'hover:text-stone-900 transition-all ease-in-out delay-200'}/>
                    <TbBrandCpp size={75} className={'hover:text-stone-900 transition-all ease-in-out delay-200'}/>
                    <IoLogoVercel size={75} className={'hover:text-stone-900 transition-all ease-in-out delay-200'}/>
                    <BiLogoPostgresql size={75} className={'hover:text-stone-900 transition-all ease-in-out delay-200'}/>
                    <SiMysql size={75} className={'hover:text-stone-900 transition-all ease-in-out delay-200'}/>
                    <DiMongodb size={75} className={'hover:text-stone-900 transition-all ease-in-out delay-200'}/>
                    <SiAdobephotoshop size={75} className={'hover:text-stone-900 transition-all ease-in-out delay-200'}/>
                    <IoLogoFigma size={75} className={'hover:text-stone-900 transition-all ease-in-out delay-200'}/>
                    <SiCsharp size={75} className={'hover:text-stone-900 transition-all ease-in-out delay-200'}/>
                    <SiGooglecloud size={75} className={'hover:text-stone-900 transition-all ease-in-out delay-200'}/>
                    <FaDocker size={75} className={'hover:text-stone-900 transition-all ease-in-out delay-200'}/>
                    <SiKubernetes size={75} className={'hover:text-stone-900 transition-all ease-in-out delay-200'}/>
                    <MdAnalytics size={75} className={'hover:text-stone-900 transition-all ease-in-out delay-200'}/>
            </div>

        </div>
    )
}