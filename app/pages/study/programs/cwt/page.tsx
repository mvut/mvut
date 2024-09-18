import { MdArrowBackIos } from "react-icons/md";
import Link from "next/link";

export default function StudySchemeComponent(){
    return(
        <div className={'container flex flex-col sm:py-16 my-10'}>
            <Link href={'/pages/study'} className={'flex text-xs hover:text-red-500 items-center'}><MdArrowBackIos />Back</Link>
            <h1 className={'text-lg sm:text-3xl text-gray-500 py-2 sm:py-4'}>Scheme of Study</h1>
            <h2 className={'text-lg sm:text-4xl'}>Core Web Technologies (CWT)</h2>
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
                    <p className={'text-red-700'}>30(Theory:15, Practical:15)</p>
                </div>
            </div>
            <p className={'text-2xl'}>Roadmap</p>
            <table className="table-auto text-center text-xs sm:text-lg">
                <thead>
                <tr>
                    <th>Sr.</th>
                    <th>Course Code</th>
                    <th className={'text-start'}>Course Title</th>
                    <th>Semester</th>
                    <th>Credit Hours</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td>MVC-15</td>
                    <td className={'text-start'}>Introduction to JavaScript Programming</td>
                    <td>1</td>
                    <td>6 (Theory:3, Practical:3)</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>MVC-34</td>
                    <td className={'text-start'}>Designing UI/UX and Frontend Tools</td>
                    <td>1</td>
                    <td>6 (Theory:3, Practical:3)</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>MVC-93</td>
                    <td className={'text-start'}>HTML Fundamentals</td>
                    <td>1</td>
                    <td>6 (Theory:3, Practical:3)</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>MVC-94</td>
                    <td className={'text-start'}>Learn to Style for the Web</td>
                    <td>1</td>
                    <td>6 (Theory:3, Practical:3)</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>MVC-18</td>
                    <td className={'text-start'}>Generative AI Fundamentals</td>
                    <td>1</td>
                    <td>6 (Theory:3, Practical:3)</td>
                </tr>

                </tbody>
            </table>
        </div>
    )
}