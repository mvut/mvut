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
                <tr>
                    <td>04</td>
                    <td>Full Stack PHP Development (FSP)</td>
                    <td>Online</td>
                    <td>04</td>
                    <td>10000</td>
                    <td>5000</td>
                    <td>130000</td>
                </tr>
                <tr>
                    <td>05</td>
                    <td>Primary School Certificate (PSC)</td>
                    <td>Online</td>
                    <td>04</td>
                    <td>2500</td>
                    <td>2000</td>
                    <td>50500</td>
                </tr>
                <tr>
                    <td>06</td>
                    <td>Elementary School Certificate (ESC)</td>
                    <td>Online</td>
                    <td>06</td>
                    <td>5000</td>
                    <td>3000</td>
                    <td>113000</td>
                </tr>
                <tr>
                    <td>07</td>
                    <td>Secondary School Certificate (SSC)</td>
                    <td>Online</td>
                    <td>04</td>
                    <td>7500</td>
                    <td>3000</td>
                    <td>79500</td>
                </tr>
                <tr>
                    <td>08</td>
                    <td>Higher Secondary School Certificate (HSSC)</td>
                    <td>Online</td>
                    <td>04</td>
                    <td>8000</td>
                    <td>3500</td>
                    <td>92000</td>
                </tr>
                <tr>
                    <td>09</td>
                    <td>Bachelor of Science in Computer Science (BSCS)</td>
                    <td>Online</td>
                    <td>08</td>
                    <td>10000</td>
                    <td>5000</td>
                    <td>250000</td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>PGD in Full Stack Next.js (PGD FSN)</td>
                    <td>Online</td>
                    <td>02</td>
                    <td>10000</td>
                    <td>5000</td>
                    <td>70000</td>
                </tr>
                <tr>
                    <td>11</td>
                    <td>PGD in Full Stack PHP (PGD FSP)</td>
                    <td>Online</td>
                    <td>02</td>
                    <td>10000</td>
                    <td>5000</td>
                    <td>70000</td>
                </tr>
                <tr>
                    <td>12</td>
                    <td>Master of Science in Full Stack Development MS(FSD)</td>
                    <td>Online</td>
                    <td>04</td>
                    <td>10000</td>
                    <td>6000</td>
                    <td>154000</td>
                </tr>
                <tr>
                    <td>13</td>
                    <td>Ph.D. in Full Stack Development (Ph.D. FSD)</td>
                    <td>Online</td>
                    <td>06</td>
                    <td>10000</td>
                    <td>6000</td>
                    <td>226000</td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}