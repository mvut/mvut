import Link from "next/link";
import {FaArrowAltCircleLeft, FaArrowAltCircleRight} from "react-icons/fa";

export default function StudySchemeComponent(){
    return(
        <div className={'container flex flex-col sm:py-16 my-10'}>
            <div className={'flex gap-10 '}>
                <Link href={'/pages/study'}
                      className={'flex text-xs hover:text-red-500 items-center gap-2'}><FaArrowAltCircleLeft/>Studies</Link>
                <Link href={'/pages/study/fee'}
                      className={'flex text-xs hover:text-red-500 items-center gap-2'}><FaArrowAltCircleRight/>Fee</Link>
            </div>
            <h1 className={'text-lg sm:text-3xl text-gray-500 py-2 sm:py-4'}>Scheme of Study</h1>
            <h2 className={'text-lg sm:text-4xl'}>Corporate Communication for IT Professionals
                (CCIP)</h2>
            <div className={'flex flex-col items-start justify-center py-4 sm:py-10'}>
                <div className={'flex text-sm sm:text-lg gap-2'}>
                    <label className={'text-indigo-700'}>Classes: </label>
                    <p className={'text-red-700'}>Online/Onsite</p>
                </div>
                <div className={'flex text-sm sm:text-lg gap-2'}>
                    <label className={'text-indigo-700'}>Total Semester: </label>
                    <p className={'text-red-700'}>01</p>
                </div>
                <div className={'flex text-sm sm:text-lg gap-2'}>
                    <label className={'text-indigo-700'}>Total credit hours: </label>
                    <p className={'text-red-700'}>18(Theory:18, Practical:0)</p>
                </div>
            </div>
            <p className={'text-2xl'}>Roadmap</p>
            <table className="table-auto text-center text-xs sm:text-lg overflow-auto">
                <thead>
                <tr>
                    <th>Sr.</th>
                    <th>Course Code</th>
                    <th className={'text-start'}>Course Title</th>
                    <th>Semester</th>
                    <th>Credit Hours</th>
                </tr>
                </thead>
                <tbody className={'odd:bg-red-400'}>

                <tr>
                    <td>1</td>
                    <td>MVC-201</td>
                    <td className={'text-start'}>Business English</td>
                    <td>1</td>
                    <td>3 (Theory:3, Practical:0)</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>MVC-202</td>
                    <td className={'text-start'}>Speaking English For Advanced Learners</td>
                    <td>1</td>
                    <td>3 (Theory:3, Practical:0)</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>MVC-203</td>
                    <td className={'text-start'}>Corporate Standard American Accent Training</td>
                    <td>1</td>
                    <td>3 (Theory:3, Practical:0)</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>MVC-204</td>
                    <td className={'text-start'}>Kinesthetic Language (How To Read Minds)</td>
                    <td>1</td>
                    <td>3 (Theory:3, Practical:0)</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>MVC-205</td>
                    <td className={'text-start'}>Body Language For Leaders</td>
                    <td>1</td>
                    <td>3 (Theory:3, Practical:0)</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>MVC-206</td>
                    <td className={'text-start'}>Effective Communication Skills At Workplace And Home</td>
                    <td>1</td>
                    <td>3 (Theory:3, Practical:0)</td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}