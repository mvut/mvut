import Abs from '@/public/faculty/abs.png';
import Younas from '@/public/faculty/younis.jpg';
import Mst from '@/public/faculty/mst.jpg';
import Hussain from '@/public/faculty/hussain.jpg';
import ArshadIqbal from '@/public/faculty/arshadiqbal.jpg';
import GhulamAbbas from '@/public/faculty/gabbas2.jpeg';
import Daha from '@/public/faculty/daha.jpg';
import Arshad from '@/public/faculty/arshadit.jpg';
import Gami from '@/public/faculty/gami.jpg';
import Abid from '@/public/faculty/abid.jpg';
import Haris from '@/public/faculty/haris.jpg';
import Mike from '@/public/faculty/mike2.jpg';
import SARFRAZ from '@/public/faculty/SARFRAZ.jpg';
import AliIjaz from '@/public/faculty/ali.png';
import Babar from '@/public/faculty/babar.jpg';
import Sabar from '@/public/faculty/sabar.jpg';
import Amir from '@/public/faculty/amir.jpg';
import Mabbas from '@/public/faculty/mabbas.jpg';
import Sohail from '@/public/faculty/sohail2.jpg';
import Hameed from '@/public/faculty/hameed.jpg';
import Yasir from '@/public/faculty/yasir.jpg';
import Kamran from '@/public/faculty/kamran.jpg';
import Dummy from '@/public/faculty/dummy.png';
import Yasri from '@/public/faculty/yassri.jpeg';
import Safdar from '@/public/faculty/safdar.jpg';
import Ikram from '@/public/faculty/ikram.jpg';
import Image from "next/image";

export default function FacultyComponent(){
    return(
        <div className={' flex flex-col items-center justify-center py-16'}>
            <p className={'text-3xl md:text-5xl font-bold text-center py-2 lg:py-10 '}>Faculty</p>
            <div
                className={'container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 justify-center items-start sm:gap-6 sm:px-6 '}>
                {/*---------------------------------------*/}
                {/* Leader */}
                <div className={'flex flex-col items-center justify-center gap-2 py-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'}>
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
                {/* Leader */}
                <div className={'flex flex-col items-center justify-center gap-2 py-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'}>
                    <div className={'border-2 border-stone-900 rounded-full'}>
                        <Image src={SARFRAZ} alt={''} className={'h-44 w-44 rounded-full'}/>
                    </div>
                    <div className={'flex flex-col items-center justify-center'}>
                        <h2 className={'text-lg font-bold'}>Sarfraz Ahmad</h2>
                        <h2 className={'text-sm'}>M.Phil. in Sociology, LLB</h2>
                        <h2 className={'text-sm'}>Legal Advisor</h2>
                        <h2 className={'text-sm'}>Pakistan</h2>
                    </div>
                </div>
                {/* Leader */}
                <div className={'flex flex-col items-center justify-center gap-2 py-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'}>
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
                {/* Leader */}
                <div className={'flex flex-col items-center justify-center gap-2 py-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'}>
                    <div className={'border-2 border-stone-900 rounded-full'}>
                        <Image src={ArshadIqbal} alt={''} className={'h-44 w-44 rounded-full'}/>
                    </div>
                    <div className={'flex flex-col items-center justify-center'}>
                        <h2 className={'text-lg font-bold'}>Arshad Iqbal</h2>
                        <h2 className={'text-sm'}>M.Phil. Statistics, M. Ed.</h2>
                        <h2 className={'text-sm'}>Instructor Data Science</h2>
                        <h2 className={'text-sm'}>Pakistan</h2>
                    </div>
                </div>
                {/* Leader */}
                <div className={'flex flex-col items-center justify-center gap-2 py-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'}>
                    <div className={'border-2 border-stone-900 rounded-full'}>
                        <Image src={Dummy} alt={''} className={'h-44 w-44 rounded-full'}/>
                    </div>
                    <div className={'flex flex-col items-center justify-center'}>
                        <h2 className={'text-lg font-bold'}>Shah Para</h2>
                        <h2 className={'text-sm'}>Ph.D. Physics</h2>
                        <h2 className={'text-sm'}>Instructor Physics</h2>
                        <h2 className={'text-sm'}>Pakistan</h2>
                    </div>
                </div>
                {/* Leader */}
                <div className={'flex flex-col items-center justify-center gap-2 py-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'}>
                    <div className={'border-2 border-stone-900 rounded-full'}>
                        <Image src={Kamran} alt={''} className={'h-44 w-44 rounded-full'}/>
                    </div>
                    <div className={'flex flex-col items-center justify-center'}>
                        <h2 className={'text-lg font-bold'}>Kamran Shareef</h2>
                        <h2 className={'text-sm'}>MBA</h2>
                        <h2 className={'text-sm'}>Instructor Business Management</h2>
                        <h2 className={'text-sm'}>Pakistan</h2>
                    </div>
                </div>
                {/* Leader */}
                <div className={'flex flex-col items-center justify-center gap-2 py-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'}>
                    <div className={'border-2 border-stone-900 rounded-full'}>
                        <Image src={Mabbas} alt={''} className={'h-44 w-44 rounded-full'}/>
                    </div>
                    <div className={'flex flex-col items-center justify-center'}>
                        <h2 className={'text-lg font-bold'}>Abbas Muhammad</h2>
                        <h2 className={'text-sm'}>MS (CS), B. Ed.</h2>
                        <h2 className={'text-sm'}>Instructor SE & Databases</h2>
                        <h2 className={'text-sm'}>Pakistan</h2>
                    </div>
                </div>
                {/* Leader */}
                <div className={'flex flex-col items-center justify-center gap-2 py-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'}>
                    <div className={'border-2 border-stone-900 rounded-full'}>
                        <Image src={Sohail} alt={''} className={'h-44 w-44 rounded-full'}/>
                    </div>
                    <div className={'flex flex-col items-center justify-center'}>
                        <h2 className={'text-lg font-bold'}>Sohail Ahmed</h2>
                        <h2 className={'text-sm'}>MS (CS), M. Ed.</h2>
                        <h2 className={'text-sm'}>Instructor R&D, Simulation</h2>
                        <h2 className={'text-sm'}>Pakistan</h2>
                    </div>
                </div>
                {/* Leader */}
                <div className={'flex flex-col items-center justify-center gap-2 py-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'}>
                    <div className={'border-2 border-stone-900 rounded-full'}>
                        <Image src={Younas} alt={''} className={'h-44 w-44 rounded-full'}/>
                    </div>
                    <div className={'flex flex-col items-center justify-center'}>
                        <h2 className={'text-lg font-bold'}>Muhammad Younas Alam</h2>
                        <h2 className={'text-sm'}>M.Phil. Linguistics, M.A. Edu, LLB</h2>
                        <h2 className={'text-sm'}>Instructor English Language</h2>
                        <h2 className={'text-sm'}>Pakistan</h2>
                    </div>
                </div>
                {/* Leader */}
                <div className={'flex flex-col items-center justify-center gap-2 py-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'}>
                    <div className={'border-2 border-stone-900 rounded-full'}>
                        <Image src={Sabar} alt={''} className={'h-44 w-44 rounded-full'}/>
                    </div>
                    <div className={'flex flex-col items-center justify-center'}>
                        <h2 className={'text-lg font-bold'}>Sabar Hussain</h2>
                        <h2 className={'text-sm'}>M.Phil. English, M. Ed.</h2>
                        <h2 className={'text-sm'}>Instructor English Language</h2>
                        <h2 className={'text-sm'}>Pakistan</h2>
                    </div>
                </div>
                {/* Leader */}
                <div className={'flex flex-col items-center justify-center gap-2 py-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'}>
                    <div className={'border-2 border-stone-900 rounded-full'}>
                        <Image src={Safdar} alt={''} className={'h-44 w-44 rounded-full'}/>
                    </div>
                    <div className={'flex flex-col items-center justify-center'}>
                        <h2 className={'text-lg font-bold'}>Safdar Hussain</h2>
                        <h2 className={'text-sm'}>M.A. English, M. Ed.</h2>
                        <h2 className={'text-sm'}>Instructor English, Education</h2>
                        <h2 className={'text-sm'}>Pakistan</h2>
                    </div>
                </div>
                {/* Leader */}
                <div className={'flex flex-col items-center justify-center gap-2 py-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'}>
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
                <div className={'flex flex-col items-center justify-center gap-2 py-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'}>
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
                {/* Leader */}
                <div className={'flex flex-col items-center justify-center gap-2 py-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'}>
                    <div className={'border-2 border-stone-900 rounded-full'}>
                        <Image src={Abid} alt={''} className={'h-44 w-44 rounded-full'}/>
                    </div>
                    <div className={'flex flex-col items-center justify-center'}>
                        <h2 className={'text-lg font-bold'}>Abid Hussain</h2>
                        <h2 className={'text-sm'}>MS (CS), M. Ed.</h2>
                        <h2 className={'text-sm'}>Instructor CS & Simulations</h2>
                        <h2 className={'text-sm'}>Pakistan</h2>
                    </div>
                </div>
                {/* Leader */}
                <div className={'flex flex-col items-center justify-center gap-2 py-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'}>
                    <div className={'border-2 border-stone-900 rounded-full'}>
                        <Image src={Arshad} alt={''} className={'h-44 w-44 rounded-full'}/>
                    </div>
                    <div className={'flex flex-col items-center justify-center'}>
                        <h2 className={'text-lg font-bold'}>Muhammad Arshad</h2>
                        <h2 className={'text-sm'}>MS (CS), M. Ed.</h2>
                        <h2 className={'text-sm'}>Instructor Software Engineering</h2>
                        <h2 className={'text-sm'}>Pakistan</h2>
                    </div>
                </div>
                {/* Leader */}
                <div className={'flex flex-col items-center justify-center gap-2 py-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'}>
                    <div className={'border-2 border-stone-900 rounded-full'}>
                        <Image src={GhulamAbbas} alt={''} className={'h-44 w-44 rounded-full'}/>
                    </div>
                    <div className={'flex flex-col items-center justify-center'}>
                        <h2 className={'text-lg font-bold'}>Ghulam Abbas</h2>
                        <h2 className={'text-sm'}>MS (CS), M.Sc Mathematics, B. Ed.</h2>
                        <h2 className={'text-sm'}>Instructor Programming & Algorithms</h2>
                        <h2 className={'text-sm'}>Pakistan</h2>
                    </div>
                </div>
                {/* Leader */}
                <div className={'flex flex-col items-center justify-center gap-2 py-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'}>
                    <div className={'border-2 border-stone-900 rounded-full'}>
                        <Image src={Ikram} alt={''} className={'h-44 w-44 rounded-full'}/>
                    </div>
                    <div className={'flex flex-col items-center justify-center'}>
                        <h2 className={'text-lg font-bold'}>Muhammad Ikram</h2>
                        <h2 className={'text-sm'}>M.A Urdu, B. Ed.</h2>
                        <h2 className={'text-sm'}>Instructor National Language</h2>
                        <h2 className={'text-sm'}>Pakistan</h2>
                    </div>
                </div>
                {/* Leader */}
                <div className={'flex flex-col items-center justify-center gap-2 py-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'}>
                    <div className={'border-2 border-stone-900 rounded-full'}>
                        <Image src={Yasri} alt={''} className={'h-44 w-44 rounded-full'}/>
                    </div>
                    <div className={'flex flex-col items-center justify-center'}>
                        <h2 className={'text-lg font-bold'}>Muhammad Yasir</h2>
                        <h2 className={'text-sm'}>M.A. Political Science</h2>
                        <h2 className={'text-sm'}>Instructor Political Science</h2>
                        <h2 className={'text-sm'}>Pakistan</h2>
                    </div>
                </div>
                {/* Leader */}
                <div className={'flex flex-col items-center justify-center gap-2 py-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'}>
                    <div className={'border-2 border-stone-900 rounded-full'}>
                        <Image src={Mst} alt={''} className={'h-44 w-44 rounded-full'}/>
                    </div>
                    <div className={'flex flex-col items-center justify-center'}>
                        <h2 className={'text-lg font-bold'}>Muhammad Shaban</h2>
                        <h2 className={'text-sm'}>BCS</h2>
                        <h2 className={'text-sm'}>Instructor Full Stack PHP Development</h2>
                        <h2 className={'text-sm'}>Pakistan</h2>
                    </div>
                </div>
                {/* Leader */}
                <div className={'flex flex-col items-center justify-center gap-2 py-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'}>
                    <div className={'border-2 border-stone-900 rounded-full'}>
                        <Image src={Hussain} alt={''} className={'h-44 w-44 rounded-full'}/>
                    </div>
                    <div className={'flex flex-col items-center justify-center'}>
                        <h2 className={'text-lg font-bold'}>Muhammad Hussain</h2>
                        <h2 className={'text-sm'}>BCS</h2>
                        <h2 className={'text-sm'}>Instructor Computer Graphics</h2>
                        <h2 className={'text-sm'}>Pakistan</h2>
                    </div>
                </div>
                {/* Leader */}
                <div className={'flex flex-col items-center justify-center gap-2 py-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'}>
                    <div className={'border-2 border-stone-900 rounded-full'}>
                        <Image src={Yasir} alt={''} className={'h-44 w-44 rounded-full'}/>
                    </div>
                    <div className={'flex flex-col items-center justify-center'}>
                        <h2 className={'text-lg font-bold'}>Yasir Ali</h2>
                        <h2 className={'text-sm'}>M.A. Education</h2>
                        <h2 className={'text-sm'}>Instructor Educational Studies</h2>
                        <h2 className={'text-sm'}>Pakistan</h2>
                    </div>
                </div>
                {/* Leader */}
                <div className={'flex flex-col items-center justify-center gap-2 py-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'}>
                    <div className={'border-2 border-stone-900 rounded-full'}>
                        <Image src={Hameed} alt={''} className={'h-44 w-44 rounded-full'}/>
                    </div>
                    <div className={'flex flex-col items-center justify-center'}>
                        <h2 className={'text-lg font-bold'}>Abdul Hameed</h2>
                        <h2 className={'text-sm'}>M.A. Islamic Studies, M. Ed.</h2>
                        <h2 className={'text-sm'}>Instructor Islamic Studies</h2>
                        <h2 className={'text-sm'}>Pakistan</h2>
                    </div>
                </div>
                {/* Leader */}
                <div className={'flex flex-col items-center justify-center gap-2 py-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'}>
                    <div className={'border-2 border-stone-900 rounded-full'}>
                        <Image src={AliIjaz} alt={''} className={'h-44 w-44 rounded-full'}/>
                    </div>
                    <div className={'flex flex-col items-center justify-center'}>
                        <h2 className={'text-lg font-bold'}>Ali Ijaz</h2>
                        <h2 className={'text-sm'}>MCS, M.Ed.</h2>
                        <h2 className={'text-sm'}>Instructor Computer Science</h2>
                        <h2 className={'text-sm'}>Pakistan</h2>
                    </div>
                </div>
                {/* Leader */}
                <div className={'flex flex-col items-center justify-center gap-2 py-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'}>
                    <div className={'border-2 border-stone-900 rounded-full'}>
                        <Image src={Daha} alt={''} className={'h-44 w-44 rounded-full'}/>
                    </div>
                    <div className={'flex flex-col items-center justify-center'}>
                        <h2 className={'text-lg font-bold'}>Daha Qalbi</h2>
                        <h2 className={'text-sm'}>BS (CS)</h2>
                        <h2 className={'text-sm'}>Instructor MERN Stack</h2>
                        <h2 className={'text-sm'}>Pakistan</h2>
                    </div>
                </div>
                {/* Leader */}
                <div className={'flex flex-col items-center justify-center gap-2 py-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'}>
                    <div className={'border-2 border-stone-900 rounded-full'}>
                        <Image src={Dummy} alt={''} className={'h-44 w-44 rounded-full'}/>
                    </div>
                    <div className={'flex flex-col items-center justify-center'}>
                        <h2 className={'text-lg font-bold'}>Aneela Abubakar</h2>
                        <h2 className={'text-sm'}>BCS</h2>
                        <h2 className={'text-sm'}>Technical Assistant</h2>
                        <h2 className={'text-sm'}>Pakistan</h2>
                    </div>
                </div>
                {/* Leader */}
                <div className={'flex flex-col items-center justify-center gap-2 py-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'}>
                    <div className={'border-2 border-stone-900 rounded-full'}>
                        <Image src={Gami} alt={''} className={'h-44 w-44 rounded-full'}/>
                    </div>
                    <div className={'flex flex-col items-center justify-center'}>
                        <h2 className={'text-lg font-bold'}>Ghulam Muhammad</h2>
                        <h2 className={'text-sm'}>ICS</h2>
                        <h2 className={'text-sm'}>Instructor Amazon VAk</h2>
                        <h2 className={'text-sm'}>Pakistan</h2>
                    </div>
                </div>
                {/* Leader */}
                <div className={'flex flex-col items-center justify-center gap-2 py-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'}>
                    <div className={'border-2 border-stone-900 rounded-full'}>
                        <Image src={Haris} alt={''} className={'h-44 w-44 rounded-full'}/>
                    </div>
                    <div className={'flex flex-col items-center justify-center'}>
                        <h2 className={'text-lg font-bold'}>Muhammad Haris</h2>
                        <h2 className={'text-sm'}>ICS</h2>
                        <h2 className={'text-sm'}>Instructor Frontend Design</h2>
                        <h2 className={'text-sm'}>Pakistan</h2>
                    </div>
                </div>
                {/*---------------------------------------*/}

            </div>
        </div>
    )
}