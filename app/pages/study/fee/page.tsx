import Link from "next/link";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";
export default function FeeStructure(){
    return (
        <div className={`container flex flex-col overflow-auto py-10 min-h-screen `}>
            <div className={'flex gap-10 '}>
                <Link href={'/pages/study'}
                      className={'flex text-xs hover:text-red-500 items-center gap-2'}><FaArrowAltCircleLeft/>Studies</Link>
                <Link href={'/pages/apply'}
                      className={'flex text-xs hover:text-red-500 items-center gap-2'}><FaArrowAltCircleRight/>Apply</Link>
            </div>
            <p className={'text-3xl py-10'}>Fee Structure</p>
            <table className="table-auto text-center text-xs sm:text-lg ">
                <thead>
                <tr className={'bg-stone-700 text-gray-50'}>
                    <th className={'p-2'}>Sr.</th>
                    <th className={'text-start'}>Program</th>
                    <th>Classes</th>
                    <th>Semesters</th>
                    <th>Registration</th>
                    <th>Monthly</th>
                    <th>Program</th>
                </tr>
                </thead>
                <tbody>
                <tr className={'odd:bg-gray-200 even:bg-teal-100'}>
                    <td className={'p-2'}>01</td>
                    <td className={'text-start'}><Link href={'/pages/study/programs/fsdn'}
                              className={'flex gap-2 hover:text-red-500 transition-all delay-50'}
                    >
                        Full Stack Development with Next.js (FSDN)
                    </Link></td>
                    <td>Online</td>
                    <td>04</td>
                    <td>$50</td>
                    <td>$20</td>
                    <td>$530</td>
                </tr>
                <tr className={'odd:bg-gray-200 even:bg-teal-100'}>
                    <td className={'p-2'}>02</td>
                    <td className={'text-start'}><Link href={'/pages/study/programs/omc'}
                              className={'flex gap-2  hover:text-red-500 transition-all delay-50'}
                    >
                        Office Management and Work Ethics (OM&WE)
                    </Link></td>
                    <td>Online</td>
                    <td>02</td>
                    <td>$50</td>
                    <td>$20</td>
                    <td>$290</td>
                </tr>
                <tr className={'odd:bg-gray-200 even:bg-teal-100'}>
                    <td className={'p-2'}>03</td>
                    <td className={'text-start'}><Link href={'/pages/study/programs/cwt'}
                              className={'flex gap-2 hover:text-red-500 transition-all delay-50'}
                    >
                        Core Web Technologies (CWT)
                    </Link></td>
                    <td>Online</td>
                    <td>01</td>
                    <td>$50</td>
                    <td>$20</td>
                    <td>$170</td>
                </tr>
                <tr className={'odd:bg-gray-200 even:bg-teal-100'}>
                    <td className={'p-2'}>04</td>
                    <td className={'text-start'}><Link href={'/pages/study/programs/php'}
                              className={'flex gap-2 hover:text-red-500 transition-all delay-50'}
                    >
                        Full Stack PHP Development (FSP)
                    </Link></td>
                    <td>Online</td>
                    <td>04</td>
                    <td>$50</td>
                    <td>$20</td>
                    <td>$530</td>
                </tr>
                <tr className={'odd:bg-gray-200 even:bg-teal-100'}>
                    <td className={'p-2'}>05</td>
                    <td className={'text-start'}><Link href={'/pages/study/programs/psc'}
                              className={'flex gap-2 hover:text-red-500 transition-all delay-50'}
                    >
                        Junior Computer Science Certificate (JCSC)
                    </Link></td>
                    <td>Online</td>
                    <td>04</td>
                    <td>$50</td>
                    <td>$10</td>
                    <td>$290</td>
                </tr>
                <tr className={'odd:bg-gray-200 even:bg-teal-100'}>
                    <td className={'p-2'}>06</td>
                    <td className={'text-start'}><Link href={'/pages/study/programs/esc'}
                              className={'flex gap-2 hover:text-red-500 transition-all delay-50'}
                    >
                        Senior Computer Science Certificate (SCSC)
                    </Link></td>
                    <td>Online</td>
                    <td>06</td>
                    <td>$50</td>
                    <td>$13</td>
                    <td>$518</td>
                </tr>
                <tr className={'odd:bg-gray-200 even:bg-teal-100'}>
                    <td className={'p-2'}>07</td>
                    <td className={'text-start'}><Link href={'/pages/study/programs/ssc'}
                              className={'flex gap-2 hover:text-red-500 transition-all delay-50'}
                    >
                        Advance Computer Science Certificate (ACSC)
                    </Link></td>
                    <td>Online</td>
                    <td>04</td>
                    <td>$50</td>
                    <td>$15</td>
                    <td>$410</td>
                </tr>
                <tr className={'odd:bg-gray-200 even:bg-teal-100'}>
                    <td className={'p-2'}>08</td>
                    <td className={'text-start'}><Link href={'/pages/study/programs/hssc'}
                              className={'flex gap-2 hover:text-red-500 transition-all delay-50'}
                    >
                        Professional Computer Science Certificate (PCSC)
                    </Link></td>
                    <td>Online</td>
                    <td>04</td>
                    <td>$50</td>
                    <td>$16</td>
                    <td>$434</td>
                </tr>
                <tr className={'odd:bg-gray-200 even:bg-teal-100'}>
                    <td className={'p-2'}>09</td>
                    <td className={'text-start'}><Link href={'/pages/study/programs/bscs'}
                              className={'flex gap-2 hover:text-red-500 transition-all delay-50'}
                    >
                        Premier Certificate in Computer Science (PCCS)
                    </Link></td>
                    <td>Online</td>
                    <td>08</td>
                    <td>$50</td>
                    <td>$25</td>
                    <td>$1250</td>
                </tr>
                <tr className={'odd:bg-gray-200 even:bg-teal-100'}>
                    <td className={'p-2'}>10</td>
                    <td className={'text-start'}><Link href={'/pages/study/programs/pgdfsn'}
                              className={'flex gap-2 hover:text-red-500 transition-all delay-50'}
                    >
                        Certified Web Professional in Full Stack Next.js (CWP FSN)
                    </Link></td>
                    <td>Online</td>
                    <td>02</td>
                    <td>$50</td>
                    <td>$30</td>
                    <td>$410</td>
                </tr>
                <tr className={'odd:bg-gray-200 even:bg-teal-100'}>
                    <td className={'p-2'}>11</td>
                    <td className={'text-start'}><Link href={'/pages/study/programs/pgdfsp'}
                              className={'flex gap-2 hover:text-red-500 transition-all delay-50'}
                    >
                        Certified Web Professional in Full Stack PHP (CWP FSP)
                    </Link></td>
                    <td>Online</td>
                    <td>02</td>
                    <td>$50</td>
                    <td>$30</td>
                    <td>$410</td>
                </tr>
                <tr className={'odd:bg-gray-200 even:bg-teal-100'}>
                    <td className={'p-2'}>12</td>
                    <td className={'text-start'}><Link href={'/pages/study/programs/msfsd'}
                              className={'flex gap-2 hover:text-red-500 transition-all delay-50'}
                    >
                        Advance Professional Certificate in Web Development (APCWD)
                    </Link></td>
                    <td>Online</td>
                    <td>04</td>
                    <td>$75</td>
                    <td>$50</td>
                    <td>$1275</td>
                </tr>
                <tr className={'odd:bg-gray-200 even:bg-teal-100'} >
                    <td className={'p-2'}>13</td>
                    <td className={' text-start'}><Link href={'/pages/study/programs/phdfsd'}
                              className={'flex gap-2 hover:text-red-500 transition-all delay-50'}
                    >
                        Certificate of Philosophy in Web Development (CPWD)
                    </Link></td>
                    <td>Online</td>
                    <td>06</td>
                    <td>$100</td>
                    <td>$60</td>
                    <td>$2260</td>
                </tr>
                <tr className={'odd:bg-gray-200 even:bg-teal-100'} >
                    <td className={'p-2'}>14</td>
                    <td className={'text-start'}><Link href={'/pages/courses'}
                              className={'flex gap-2 hover:text-red-500 transition-all delay-50'}
                    >
                        Short Courses
                    </Link></td>
                    <td>Online</td>
                    <td>1/2</td>
                    <td>$10</td>
                    <td>$20</td>
                    <td>$70</td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}