import Link from "next/link";
import {MdArrowBackIos} from "react-icons/md";

export default function FeeStructure(){
    return (
        <div className={'container flex flex-col py-16 min-h-screen'}>
            <Link href={'/'} className={'flex text-xs hover:text-red-500 items-center'}><MdArrowBackIos />Back</Link>

            <p className={'text-3xl py-10'}>Fee Structure</p>
            <table className="table-auto text-center text-xs sm:text-lg overflow-auto">
                <thead>
                <tr>
                    <th>Sr.</th>
                    <th>Program</th>
                    <th>Classes</th>
                    <th>Duration</th>
                    <th>Admission Fee</th>
                    <th>Monthly Fee</th>
                    <th>Program Fee</th>
                </tr>
                </thead>
                <tbody className={'odd:bg-red-400'}>
                <tr>
                    <td>01</td>
                    <td>Full Stack Development with Next.js (FSDN)</td>
                    <td>Online</td>
                    <td>2 Years</td>
                    <td>10000</td>
                    <td>5000</td>
                    <td>130000</td>
                </tr>
                </tbody>
            </table>
        </div>
)
}