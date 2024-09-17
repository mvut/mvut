import Link from "next/link";
import {MdArrowBackIos} from "react-icons/md";

export default function FeeStructure(){
    return (
        <div className={`container flex flex-col overflow-auto py-10 min-h-screen `}>
            <Link href={'/pages/study'} className={'flex text-xs hover:text-red-500 items-center'}><MdArrowBackIos />Back</Link>

            <p className={'text-3xl py-10'}>Fee Structure</p>
            <table className="table-auto text-center text-xs sm:text-lg ">
                <thead>
                <tr className={'bg-stone-700 text-gray-50'}>
                    <th>Sr.</th>
                    <th>Program</th>
                    <th>Classes</th>
                    <th>Semesters</th>
                    <th>Registration</th>
                    <th>Monthly</th>
                    <th>Program</th>
                </tr>
                </thead>
                <tbody>
                <tr className={'odd:bg-gray-200 even:bg-teal-100'}>
                    <td>01</td>
                    <td>Full Stack Development with Next.js (FSDN)</td>
                    <td>Online</td>
                    <td>04</td>
                    <td>$50</td>
                    <td>$20</td>
                    <td>$530</td>
                </tr>
                <tr className={'odd:bg-gray-200 even:bg-teal-100'}>
                    <td>02</td>
                    <td>Office Management and Work Ethics (OM&WE)</td>
                    <td>Online</td>
                    <td>02</td>
                    <td>$50</td>
                    <td>$20</td>
                    <td>$290</td>
                </tr>
                <tr className={'odd:bg-gray-200 even:bg-teal-100'}>
                    <td>03</td>
                    <td>Core Web Technologies (CWT)</td>
                    <td>Online</td>
                    <td>01</td>
                    <td>$50</td>
                    <td>$20</td>
                    <td>$170</td>
                </tr>
                <tr className={'odd:bg-gray-200 even:bg-teal-100'}>
                    <td>04</td>
                    <td>Full Stack PHP Development (FSP)</td>
                    <td>Online</td>
                    <td>04</td>
                    <td>$50</td>
                    <td>$20</td>
                    <td>$530</td>
                </tr>
                <tr className={'odd:bg-gray-200 even:bg-teal-100'}>
                    <td>05</td>
                    <td>Primary School Certificate (PSC)</td>
                    <td>Online</td>
                    <td>04</td>
                    <td>$50</td>
                    <td>$10</td>
                    <td>$290</td>
                </tr>
                <tr className={'odd:bg-gray-200 even:bg-teal-100'}>
                    <td>06</td>
                    <td>Elementary School Certificate (ESC)</td>
                    <td>Online</td>
                    <td>06</td>
                    <td>$50</td>
                    <td>$13</td>
                    <td>$518</td>
                </tr>
                <tr className={'odd:bg-gray-200 even:bg-teal-100'}>
                    <td>07</td>
                    <td>Secondary School Certificate (SSC)</td>
                    <td>Online</td>
                    <td>04</td>
                    <td>$50</td>
                    <td>$15</td>
                    <td>$410</td>
                </tr>
                <tr className={'odd:bg-gray-200 even:bg-teal-100'}>
                    <td>08</td>
                    <td>Higher Secondary School Certificate (HSSC)</td>
                    <td>Online</td>
                    <td>04</td>
                    <td>$50</td>
                    <td>$16</td>
                    <td>$434</td>
                </tr>
                <tr className={'odd:bg-gray-200 even:bg-teal-100'}>
                    <td>09</td>
                    <td>Bachelor of Science in Computer Science (BSCS)</td>
                    <td>Online</td>
                    <td>08</td>
                    <td>$50</td>
                    <td>$25</td>
                    <td>$1250</td>
                </tr>
                <tr className={'odd:bg-gray-200 even:bg-teal-100'}>
                    <td>10</td>
                    <td>PGD in Full Stack Next.js (PGD FSN)</td>
                    <td>Online</td>
                    <td>02</td>
                    <td>$50</td>
                    <td>$30</td>
                    <td>$410</td>
                </tr>
                <tr className={'odd:bg-gray-200 even:bg-teal-100'}>
                    <td>11</td>
                    <td>PGD in Full Stack PHP (PGD FSP)</td>
                    <td>Online</td>
                    <td>02</td>
                    <td>$50</td>
                    <td>$30</td>
                    <td>$410</td>
                </tr>
                <tr className={'odd:bg-gray-200 even:bg-teal-100'}>
                    <td>12</td>
                    <td>Master of Science in Full Stack Development MS(FSD)</td>
                    <td>Online</td>
                    <td>04</td>
                    <td>$75</td>
                    <td>$50</td>
                    <td>$1275</td>
                </tr>
                <tr className={'odd:bg-gray-200 even:bg-teal-100'} >
                    <td>13</td>
                    <td>Ph.D. in Full Stack Development (Ph.D. FSD)</td>
                    <td>Online</td>
                    <td>06</td>
                    <td>$100</td>
                    <td>$60</td>
                    <td>$2260</td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}