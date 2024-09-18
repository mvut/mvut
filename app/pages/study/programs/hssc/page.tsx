import { MdArrowBackIos } from "react-icons/md";
import Link from "next/link";

export default function StudySchemeComponent(){
    return(
        <div className={'container flex flex-col sm:py-16 my-10'}>
            <Link href={'/pages/study'} className={'flex text-xs hover:text-red-500 items-center'}><MdArrowBackIos />Back</Link>
            <h1 className={'text-lg sm:text-3xl text-gray-500 py-2 sm:py-4'}>Scheme of Study</h1>
            <h2 className={'text-lg sm:text-4xl'}>Professional Computer Science Certificate (PCSC)</h2>
            <div className={'flex flex-col items-start justify-center py-4 sm:py-10'}>
                <div className={'flex text-sm sm:text-lg gap-2'}>
                    <label className={'text-indigo-700'}>Classes: </label>
                    <p className={'text-red-700'}>Online/Onsite</p>
                </div>
                <div className={'flex text-sm sm:text-lg gap-2'}>
                    <label className={'text-indigo-700'}>Total Semester: </label>
                    <p className={'text-red-700'}>04</p>
                </div>
                <div className={'flex text-sm sm:text-lg gap-2'}>
                    <label className={'text-indigo-700'}>Total credit hours: </label>
                    <p className={'text-red-700'}>87(Theory:51, Practical:36)</p>
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
                    <td>MVC-17</td>
                    <td className={'text-start'}>Introduction to C++ Programming</td>
                    <td>1</td>
                    <td>6 (Theory:3, Practical:3)</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>MVC-18</td>
                    <td className={'text-start'}>Generative AI Fundamentals</td>
                    <td>1</td>
                    <td>6 (Theory:3, Practical:3)</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>MVC-19</td>
                    <td className={'text-start'}>Principles of Management</td>
                    <td>1</td>
                    <td>6 (Theory:3, Practical:3)</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>MVC-20</td>
                    <td className={'text-start'}>Operating Systems</td>
                    <td>1</td>
                    <td>6 (Theory:3, Practical:3)</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>MVC-21</td>
                    <td className={'text-start'}>Data Structures and Algorithms</td>
                    <td>2</td>
                    <td>6 (Theory:3, Practical:3)</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>MVC-22</td>
                    <td className={'text-start'}>Principles of Marketing</td>
                    <td>2</td>
                    <td>3 (Theory:3, Practical:0)</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>MVC-23</td>
                    <td className={'text-start'}>Information Security and Management</td>
                    <td>2</td>
                    <td>3 (Theory:3, Practical:3)</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>MVC-24</td>
                    <td className={'text-start'}>Graphics and Creative Art</td>
                    <td>2</td>
                    <td>3 (Theory:3, Practical:0)</td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>MVC-25</td>
                    <td className={'text-start'}>Data Science and Robotics</td>
                    <td>3</td>
                    <td>6 (Theory:3, Practical:3)</td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>MVC-26</td>
                    <td className={'text-start'}>Next.js and Vercel Deployment </td>
                    <td>3</td>
                    <td>6 (Theory:3, Practical:3)</td>
                </tr>
                <tr>
                    <td>11</td>
                    <td>MVC-27</td>
                    <td className={'text-start'}>Communication and Business Ethics</td>
                    <td>3</td>
                    <td>3 (Theory:3, Practical:0)</td>
                </tr>
                <tr>
                    <td>12</td>
                    <td>MVC-28</td>
                    <td className={'text-start'}>Typescript Programming</td>
                    <td>3</td>
                    <td>6 (Theory:3, Practical:3)</td>
                </tr>
                <tr>
                    <td>13</td>
                    <td>MVC-29</td>
                    <td className={'text-start'}>Software Architecture and Design</td>
                    <td>4</td>
                    <td>6 (Theory:3, Practical:3)</td>
                </tr>
                <tr>
                    <td>14</td>
                    <td>MVC-30</td>
                    <td className={'text-start'}>Video Editing Tools and Techniques</td>
                    <td>4</td>
                    <td>6 (Theory:3, Practical:3)</td>
                </tr>
                <tr>
                    <td>15</td>
                    <td>MVC-31</td>
                    <td className={'text-start'}>Cloud Computing</td>
                    <td>4</td>
                    <td>3 (Theory:3, Practical:0)</td>
                </tr>
                <tr>
                    <td>16</td>
                    <td>MVC-32</td>
                    <td className={'text-start'}>MERN Stack Development</td>
                    <td>4</td>
                    <td>6 (Theory:3, Practical:3)</td>
                </tr>
                <tr>
                    <td>17</td>
                    <td>MVC-33</td>
                    <td className={'text-start'}>English Comprehension</td>
                    <td>4</td>
                    <td>3 (Theory:3, Practical:0)</td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}