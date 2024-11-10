import { MdOutlineSchool } from "react-icons/md";
import { FaAward } from "react-icons/fa6";
import { PiStudentBold } from "react-icons/pi";
import { PiCertificateDuotone } from "react-icons/pi";
import { GiDiploma } from "react-icons/gi";

export default function StatisticsComponent(){
    return(
        <div
            className={'flex flex-col w-full bg-[url(../public/resources/microbiology.jpg)] items-center justify-center text-center gap-16 bg-fixed text-amber-600 py-10 sm:py-16 lg:py-32'}>
            <h2 className={'text-3xl font-bold text-white'}>Important Facts</h2>

            <div className={'grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-16 px-2'}>
                <div className={'grid grid-cols-1 items-center justify-center text-start text-amber-600'}>
                    <p className={'text-5xl text-amber-600'}>10+</p>
                    <div className={'flex flex-row text-xl text-white'}>
                        <MdOutlineSchool size={55}/>
                        <p className={'font-bold'}>Professional<br/>Certification</p>
                    </div>
                </div>

                <div className={'grid grid-cols-1 items-center justify-center text-start text-amber-600'}>
                    <p className={'text-5xl text-amber-600'}>5+</p>
                    <div className={'flex flex-row text-xl text-white'}>
                        <GiDiploma size={65}/>
                        <p className={'font-bold'}>Specialization<br/>Programs</p>
                    </div>
                </div>

                <div className={'grid grid-cols-1 items-center justify-center text-start gap-2 text-amber-600'}>
                    <p className={'text-5xl text-amber-600'}>150+</p>
                    <div className={'flex flex-row text-xl text-white'}>
                        <PiCertificateDuotone size={65}/>
                        <p className={'font-bold'}>Skills<br/>Courses</p>
                    </div>
                </div>

                <div className={'grid grid-cols-1 items-center justify-center text-start gap-2 text-amber-600'}>
                    <p className={'text-5xl text-amber-600'}>10+</p>
                    <div className={'flex flex-row text-xl text-white'}>
                        <PiStudentBold size={65}/>
                        <p className={'font-bold'}>Active<br/>Students</p>
                    </div>
                </div>

                <div className={'grid grid-cols-1 items-center justify-center text-start gap-2 text-amber-600'}>
                    <p className={'text-5xl text-amber-600'}>100+</p>
                    <div className={'flex flex-row text-xl text-white'}>
                        <FaAward size={65}/>
                        <p className={'font-bold'}>Total<br/>Certified</p>
                    </div>
                </div>


            </div>

        </div>
    )
}