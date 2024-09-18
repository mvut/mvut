import { MdArrowBackIos } from "react-icons/md";
import Link from "next/link";

export default function StudySchemeComponent(){
    return(
        <div className={'container flex flex-col sm:py-16 my-10'}>
            <Link href={'/pages/study'} className={'flex text-xs hover:text-red-500 items-center'}><MdArrowBackIos />Back</Link>
            <h1 className={'text-lg sm:text-3xl text-gray-500 py-2 sm:py-4'}>Scheme of Study</h1>
            <h2 className={'text-lg sm:text-4xl'}>Senior Computer Science Certificate (SCSC)</h2>
            <div className={'flex flex-col items-start justify-center py-4 sm:py-10'}>
                <div className={'flex text-sm sm:text-lg gap-2'}>
                    <label className={'text-indigo-700'}>Classes: </label>
                    <p className={'text-red-700'}>Online/Onsite</p>
                </div>
                <div className={'flex text-sm sm:text-lg gap-2'}>
                    <label className={'text-indigo-700'}>Total Semester: </label>
                    <p className={'text-red-700'}>06</p>
                </div>
                <div className={'flex text-sm sm:text-lg gap-2'}>
                    <label className={'text-indigo-700'}>Total credit hours: </label>
                    <p className={'text-red-700'}>66(Theory:39, Practical:27)</p>
                </div>
            </div>
            <p className={'text-2xl'}>Roadmap</p>
            <table className={"table-auto text-center text-xs sm:text-lg overflow-auto"}>
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
                    <td>MVC-01</td>
                    <td className={'text-start'}>Artificial Intelligence</td>
                    <td>1</td>
                    <td>6 (Theory:3, Practical:3)</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>MVC-02</td>
                    <td className={'text-start'}>Microsoft Word for Office Work</td>
                    <td>1</td>
                    <td>6 (Theory:3, Practical:3)</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>MVC-09</td>
                    <td className={'text-start'}>Web Technologies</td>
                    <td>2</td>
                    <td>6 (Theory:3, Practical:3)</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>MVC-03</td>
                    <td className={'text-start'}>Computer Networks</td>
                    <td>2</td>
                    <td>6 (Theory:3, Practical:3)</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>MVC-04</td>
                    <td className={'text-start'}>AI and STEM Fundamentals</td>
                    <td>3</td>
                    <td>6 (Theory:3, Practical:3)</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>MVC-05</td>
                    <td className={'text-start'}>Entrepreneurship</td>
                    <td>3</td>
                    <td>3 (Theory:3, Practical:0)</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>MVC-06</td>
                    <td className={'text-start'}>PowerPoint Presentation Essentials</td>
                    <td>4</td>
                    <td>6 (Theory:3, Practical:3)</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>MVC-10</td>
                    <td className={'text-start'}>Online Professionalism and Ethics</td>
                    <td>4</td>
                    <td>6 (Theory:3, Practical:3)</td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>MVC-07</td>
                    <td className={'text-start'}>Object Oriented Programming</td>
                    <td>5</td>
                    <td>3 (Theory:3, Practical:0)</td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>MVC-11</td>
                    <td className={'text-start'}>Software Engineering</td>
                    <td>5</td>
                    <td>3 (Theory:3, Practical:0)</td>
                </tr>
                <tr>
                    <td>11</td>
                    <td>MVC-08</td>
                    <td className={'text-start'}>Introduction to Python Programming</td>
                    <td>6</td>
                    <td>6 (Theory:3, Practical:3)</td>
                </tr>
                <tr>
                    <td>12</td>
                    <td>MVC-12</td>
                    <td className={'text-start'}>Excel Data Analysis</td>
                    <td>6</td>
                    <td>6 (Theory:3, Practical:3)</td>
                </tr>
                <tr>
                    <td>13</td>
                    <td>MVC-33</td>
                    <td className={'text-start'}>English Comprehension</td>
                    <td>6</td>
                    <td>3 (Theory:3, Practical:0)</td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}