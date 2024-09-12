import Link from "next/link";
import {MdArrowBackIos} from "react-icons/md";

export default function FeeStructure(){
    return (
        <div className={'container flex flex-col py-16 min-h-screen'}>
            <Link href={'/pages/study'} className={'flex text-xs hover:text-red-500 items-center'}><MdArrowBackIos />Back</Link>

            <p className={'text-3xl py-10'}>Fee Structure</p>
            <table className="table-auto text-center text-xs sm:text-lg overflow-auto">
                <thead>
                <tr>
                    <th>Sr.</th>
                    <th>Program</th>
                    <th>Classes</th>
                    <th>Semesters</th>
                    <th>Admission Fee (PKR)</th>
                    <th>Monthly Fee (PKR)</th>
                    <th>Program Fee (PKR)</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>01</td>
                    <td>Full Stack Development with Next.js (FSDN)</td>
                    <td>Online</td>
                    <td>04</td>
                    <td>10000</td>
                    <td>5000</td>
                    <td>130000</td>
                </tr>
                <tr>
                    <td>02</td>
                    <td>Office Management and Work Ethics (OM&WE)</td>
                    <td>Online</td>
                    <td>02</td>
                    <td>10000</td>
                    <td>5000</td>
                    <td>70000</td>
                </tr>
                <tr>
                    <td>03</td>
                    <td>Core Web Technologies (CWT)</td>
                    <td>Online</td>
                    <td>01</td>
                    <td>10000</td>
                    <td>5000</td>
                    <td>40000</td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}