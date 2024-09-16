import Abs from '@/public/faculty/abs.png';
import Younas from '@/public/faculty/younis.jpg';
import Mst from '@/public/faculty/mst.jpg';
import Hussain from '@/public/faculty/hussain.jpg';
import ArshadIqbal from '@/public/faculty/arshadiqbal.jpg';
import GhulamAbbas from '@/public/faculty/gabbas.jpg';
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
import Image from "next/image";
import Link from "next/link";

export default function FacultyComponent(){
    return(
        <div className={' flex flex-col items-center justify-center py-6'}>
            <p className={'text-lg md:text-3xl font-bold text-center py-2 lg:py-10 uppercase'}>Faculty</p>
            <div className={'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-center items-start gap-6 px-6 '}>
                {/*    */}
                <div
                    className={'w-auto h-full grid grid-cols-1 transition ease-in-out delay-150 odd:bg-blue-700 even:bg-teal-700 p-2 hover:-translate-y-1 hover:scale-110 hover:bg-amber-700 rounded-xl duration-300 '}>
                    <Image src={Abs} alt={''} className={'h-96 w-full'}/>
                    <h2 className={'font-bold text-lg text-white'}>Abubakar Siddique<Link
                        href={'https://www.linkedin.com/in/drsagher/'} target={'_blank'}
                        className={'text-xs text-amber-200'}>(Profile)</Link></h2>
                    <p className={'text-xs sm:text-sm md:text-md lg:text-lg text-white'}>
                        Full Stack Developer
                    </p>
                    <p className={'text-xs sm:text-sm text-white'}>MS in Computer Science (MDS, WSN, MCS), B. Ed., LCC (AMAP), BTI (CIT, Australia), LDT (open SAP), CLC (Peking University, China), CAC (TEVTA, PAK), ICSC (The Open University, UK), Data Science (SAP), RPJ (VU, PAK) </p>

                    <p className={'text-xs sm:text-sm md:text-md lg:text-lg text-white italic'}>Pakistan</p>
                </div>
                {/*    */}
                <div
                    className={'w-auto h-full grid grid-cols-1 transition ease-in-out delay-150 odd:bg-blue-700 even:bg-teal-700 p-2 hover:-translate-y-1 hover:scale-110 hover:bg-amber-700 rounded-xl duration-300 '}>
                    <Image src={Mike} alt={''} className={'h-96 w-full'}/>
                    <h2 className={'font-bold text-lg text-white'}>Mike Litman <Link
                        href={'https://www.mikeversity.com/'} target={'_blank'}
                        className={'text-xs text-amber-200'}>(Profile)</Link></h2>
                    <p className={'text-xs sm:text-sm md:text-md lg:text-lg text-white'}>
                        Global Thought Leader
                    </p>
                    <p className={'text-xs sm:text-sm text-white'}>Honorary Doctorate, Master of Business Management, CYD</p>

                    <p className={'text-xs sm:text-sm md:text-md lg:text-lg text-white italic'}>United States</p>
                </div>
                {/*    */}
                <div
                    className={'w-auto h-full grid grid-cols-1 transition ease-in-out delay-150 odd:bg-blue-700 even:bg-red-700 p-2 hover:-translate-y-1 hover:scale-110 hover:bg-amber-700 rounded-xl duration-300 '}>
                    <Image src={SARFRAZ} alt={''} className={'h-96 w-full'}/>
                    <h2 className={'font-bold text-lg text-white'}>Sarfraz Ahmad</h2>
                    <p className={'text-xs sm:text-sm md:text-md lg:text-lg text-white'}>
                        Legal Advisor
                    </p>
                    <p className={'text-xs sm:text-sm text-white'}>M.Phil. in Sociology, M. Sc. Criminology and Security Studies, Bachelor of Law</p>
                    <p className={'text-xs sm:text-sm md:text-md lg:text-lg text-white italic'}>Pakistan</p>
                </div>
                {/*    */}
                <div
                    className={'w-auto h-full grid grid-cols-1 transition ease-in-out delay-150 odd:bg-blue-700 even:bg-teal-700 p-2 hover:-translate-y-1 hover:scale-110 hover:bg-amber-700 rounded-xl duration-300 '}>
                    <Image src={ArshadIqbal} alt={''} className={'h-96 w-full'}/>
                    <h2 className={'font-bold text-lg text-white'}>Arshad Iqbal</h2>
                    <p className={'text-xs sm:text-sm md:text-md lg:text-lg text-white'}>
                        Data Scientist
                    </p>
                    <p className={'text-xs sm:text-sm text-white'}>M.Phil. in Statistics, Master of Education</p>
                    <p className={'text-xs sm:text-sm md:text-md lg:text-lg text-white italic'}>Pakistan</p>
                </div>
                {/*    */}
                <div
                    className={'w-auto h-full grid grid-cols-1 transition ease-in-out delay-150 odd:bg-blue-700 even:bg-red-700 p-2 hover:-translate-y-1 hover:scale-110 hover:bg-amber-700 rounded-xl duration-300 '}>
                    <Image src={Younas} alt={''} className={'h-96 w-full'}/>
                    <h2 className={'font-bold text-lg text-white'}>Muhammad Younas Alam</h2>
                    <p className={'text-xs sm:text-sm md:text-md lg:text-lg text-white'}>
                        Foreign Language Expert
                    </p>
                    <p className={'text-xs sm:text-sm text-white'}>M.Phil. in Linguistics, Master of Education, Bachelor of Law</p>

                    <p className={'text-xs sm:text-sm md:text-md lg:text-lg text-white italic'}>Pakistan</p>
                </div>
                {/*    */}
                <div
                    className={'w-auto h-full grid grid-cols-1 transition ease-in-out delay-150 odd:bg-blue-700 even:bg-red-700 p-2 hover:-translate-y-1 hover:scale-110 hover:bg-amber-700 rounded-xl duration-300 '}>
                    <Image src={Sabar} alt={''} className={'h-96 w-full'}/>
                    <h2 className={'font-bold text-lg text-white'}>Sabar Hussain</h2>
                    <p className={'text-xs sm:text-sm md:text-md lg:text-lg text-white'}>
                        Technical English Language Coach
                    </p>
                    <p className={'text-xs sm:text-sm text-white'}>M.Phil. in English, Bachelor of Education</p>

                    <p className={'text-xs sm:text-sm md:text-md lg:text-lg text-white italic'}>Pakistan</p>
                </div>
                {/*    */}
                <div
                    className={'w-auto h-full grid grid-cols-1 transition ease-in-out delay-150 odd:bg-blue-700 even:bg-teal-700 p-2 hover:-translate-y-1 hover:scale-110 hover:bg-amber-700 rounded-xl duration-300 '}>
                    <Image src={Babar} alt={''} className={'h-96 w-full'}/>
                    <h2 className={'font-bold text-lg text-white'}>Babar Hussain</h2>
                    <p className={'text-xs sm:text-sm md:text-md lg:text-lg text-white'}>
                        Mathematician and Algorithm Analyst
                    </p>
                    <p className={'text-xs sm:text-sm text-white'}>M.S. in Mathematics, Bachelor of Education</p>
                    <p className={'text-xs sm:text-sm md:text-md lg:text-lg text-white italic'}>Pakistan</p>
                </div>
                {/*    */}
                <div
                    className={'w-auto h-full grid grid-cols-1 transition ease-in-out delay-150 odd:bg-blue-700 even:bg-teal-700 p-2 hover:-translate-y-1 hover:scale-110 hover:bg-amber-700 rounded-xl duration-300 '}>
                    <Image src={Amir} alt={''} className={'h-96 w-full'}/>
                    <h2 className={'font-bold text-lg text-white'}>Amir Shahzad</h2>
                    <p className={'text-xs sm:text-sm md:text-md lg:text-lg text-white'}>
                        Expert in Mathematical Computation and Simulation Modeling
                    </p>
                    <p className={'text-xs sm:text-sm text-white'}>M.S. in Mathematics</p>
                    <p className={'text-xs sm:text-sm md:text-md lg:text-lg text-white italic'}>Pakistan</p>
                </div>
                {/*    */}
                <div
                    className={'w-auto h-full grid grid-cols-1 transition ease-in-out delay-150 odd:bg-blue-700 even:bg-teal-700 p-2 hover:-translate-y-1 hover:scale-110 hover:bg-amber-700 rounded-xl duration-300 '}>
                    <Image src={Abid} alt={''} className={'h-96 w-full'}/>
                    <h2 className={'font-bold text-lg text-white'}>Abid Hussain</h2>
                    <p className={'text-xs sm:text-sm md:text-md lg:text-lg text-white'}>
                        Blockchain / AI Expert
                    </p>
                    <p className={'text-xs sm:text-sm text-white'}>M.S. in Computer Science, Master of Education</p>
                    <p className={'text-xs sm:text-sm md:text-md lg:text-lg text-white italic'}>Pakistan</p>
                </div>
                {/*    */}
                <div
                    className={'w-auto h-full grid grid-cols-1 transition ease-in-out delay-150 odd:bg-blue-700 even:bg-red-700 p-2 hover:-translate-y-1 hover:scale-110 hover:bg-amber-700 rounded-xl duration-300 '}>
                    <Image src={Arshad} alt={''} className={'h-96 w-full'}/>
                    <h2 className={'font-bold text-lg text-white'}>Muhammad Arshad</h2>
                    <p className={'text-xs sm:text-sm md:text-md lg:text-lg text-white'}>
                        Software Engineer
                    </p>
                    <p className={'text-xs sm:text-sm text-white'}>M.S. in Computer Science, Master of Education</p>
                    <p className={'text-xs sm:text-sm md:text-md lg:text-lg text-white italic'}>Pakistan</p>
                </div>
                {/*    */}
                <div
                    className={'w-auto h-full grid grid-cols-1 transition ease-in-out delay-150 odd:bg-blue-700 even:bg-red-700 p-2 hover:-translate-y-1 hover:scale-110 hover:bg-amber-700 rounded-xl duration-300 '}>
                    <Image src={GhulamAbbas} alt={''} className={'h-96 w-full'}/>
                    <h2 className={'font-bold text-lg text-white'}>Ghulam Abbas</h2>
                    <p className={'text-xs sm:text-sm md:text-md lg:text-lg text-white'}>
                        Software Engineer
                    </p>
                    <p className={'text-xs sm:text-sm text-white'}>M.S. in Computer Science, M.Sc. Mathematics, Bachelor of Education</p>
                    <p className={'text-xs sm:text-sm md:text-md lg:text-lg text-white italic'}>Pakistan</p>
                </div>
                {/*    */}
                <div
                    className={'w-auto h-full grid grid-cols-1 transition ease-in-out delay-150 odd:bg-blue-700 even:bg-red-700 p-2 hover:-translate-y-1 hover:scale-110 hover:bg-amber-700 rounded-xl duration-300 '}>
                    <Image src={Mst} alt={''} className={'h-96 w-full'}/>
                    <h2 className={'font-bold text-lg text-white'}>Muhammad Shaban</h2>
                    <p className={'text-xs sm:text-sm md:text-md lg:text-lg text-white'}>
                        Full Stack PHP Developer
                    </p>
                    <p className={'text-xs sm:text-sm text-white'}>Bachelor of Computer Science, Certified in Computer Hardware</p>
                    <p className={'text-xs sm:text-sm md:text-md lg:text-lg text-white italic'}>Pakistan</p>
                </div>
                {/*    */}
                <div
                    className={'w-auto h-full grid grid-cols-1 transition ease-in-out delay-150 odd:bg-blue-700 even:bg-red-700 p-2 hover:-translate-y-1 hover:scale-110 hover:bg-amber-700 rounded-xl duration-300 '}>
                    <Image src={Hussain} alt={''} className={'h-96 w-full'}/>
                    <h2 className={'font-bold text-lg text-white'}>Muhammad Hussain</h2>
                    <p className={'text-xs sm:text-sm md:text-md lg:text-lg text-white'}>
                        Graphics and Artist
                    </p>
                    <p className={'text-xs sm:text-sm text-white'}>Bachelor of Computer Science, Certified in Computer Hardware</p>

                    <p className={'text-xs sm:text-sm md:text-md lg:text-lg text-white italic'}>Pakistan</p>
                </div>
                {/*    */}
                <div
                    className={'w-auto h-full grid grid-cols-1 transition ease-in-out delay-150 odd:bg-blue-700 even:bg-red-700 p-2 hover:-translate-y-1 hover:scale-110 hover:bg-amber-700 rounded-xl duration-300 '}>
                    <Image src={AliIjaz} alt={''} className={'h-96 w-full'}/>
                    <h2 className={'font-bold text-lg text-white'}>Ali Ijaz</h2>
                    <p className={'text-xs sm:text-sm md:text-md lg:text-lg text-white'}>
                        Web Developer
                    </p>
                    <p className={'text-xs sm:text-sm text-white'}>Master of Computer Science, Master of Education</p>

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
                    <p className={'text-xs sm:text-sm text-white'}>B.S. of Computer Science</p>
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
                    <p className={'text-xs sm:text-sm text-white'}>Intermediate</p>
                    <p className={'text-xs sm:text-sm md:text-md lg:text-lg text-white italic'}>Pakistan</p>
                </div>
                {/*    */}
                <div
                    className={'w-auto h-full grid grid-cols-1 transition ease-in-out delay-150 odd:bg-blue-700 even:bg-red-700 p-2 hover:-translate-y-1 hover:scale-110 hover:bg-amber-700 rounded-xl duration-300 '}>
                    <Image src={Haris} alt={''} className={'h-96 w-full'}/>
                    <h2 className={'font-bold text-lg text-white'}>Muhammad Haris</h2>
                    <p className={'text-xs sm:text-sm md:text-md lg:text-lg text-white'}>
                        Frontend Designer
                    </p>
                    <p className={'text-xs sm:text-sm text-white'}>Intermediate</p>
                    <p className={'text-xs sm:text-sm md:text-md lg:text-lg text-white italic'}>Pakistan</p>
                </div>
            </div>
        </div>
    )
}