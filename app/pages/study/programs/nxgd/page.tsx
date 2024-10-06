import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";
import Link from "next/link";

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
            <h2 className={'text-lg sm:text-4xl'}>Next-Generation Web Development with Python (NXGDP)</h2>
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
                    <p className={'text-red-700'}>123(Theory:63, Practical:60)</p>
                </div>
            </div>
            <p className={'text-2xl'}>Roadmap</p>
            <table className={"table-auto text-center text-xs sm:text-lg"}>
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
                    <td>MVC-18</td>
                    <td className={'text-start'}>Generative AI Fundamentals</td>
                    <td>1</td>
                    <td>6 (Theory:3, Practical:3)</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>MVC-93</td>
                    <td className={'text-start'}>HTML Fundamentals</td>
                    <td>1</td>
                    <td>6 (Theory:3, Practical:3)</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>MVC-94</td>
                    <td className={'text-start'}>Learn to Style for the Web</td>
                    <td>1</td>
                    <td>6 (Theory:3, Practical:3)</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>MVC-15</td>
                    <td className={'text-start'}>Introduction to JavaScript Programming</td>
                    <td>1</td>
                    <td>6 (Theory:3, Practical:3)</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>MVC-111</td>
                    <td className={'text-start'}>Version Control (Git)</td>
                    <td>1</td>
                    <td>6 (Theory:3, Practical:3)</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>MVC-116</td>
                    <td className={'text-start'}>Making Python Project</td>
                    <td>1</td>
                    <td>6 (Theory:3, Practical:3)</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>MVC-98</td>
                    <td className={'text-start'}>Responsive Web Design with Tailwind CSS</td>
                    <td>2</td>
                    <td>6 (Theory:3, Practical:3)</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>MVC-06</td>
                    <td className={'text-start'}>Introduction to Python Programming</td>
                    <td>2</td>
                    <td>6 (Theory:3, Practical:3)</td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>MVC-13</td>
                    <td className={'text-start'}>Database Management Systems</td>
                    <td>2</td>
                    <td>3 (Theory:3, Practical:0)</td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>MVC-108</td>
                    <td className={'text-start'}>Queries with MySQL</td>
                    <td>2</td>
                    <td>6 (Theory:3, Practical:3)</td>
                </tr>
                <tr>
                    <td>11</td>
                    <td>MVC-112</td>
                    <td className={'text-start'}>Adobe Photoshop Essential</td>
                    <td>2</td>
                    <td>6 (Theory:3, Practical:3)</td>
                </tr>
                <tr>
                    <td>12</td>
                    <td>MVC-113</td>
                    <td className={'text-start'}>Web Designing with Adobe XD</td>
                    <td>3</td>
                    <td>6 (Theory:3, Practical:3)</td>
                </tr>
                <tr>
                    <td>13</td>
                    <td>MVC-114</td>
                    <td className={'text-start'}>Responsive Design with Figma</td>
                    <td>3</td>
                    <td>6 (Theory:3, Practical:3)</td>
                </tr>
                <tr>
                    <td>14</td>
                    <td>MVC-110</td>
                    <td className={'text-start'}>Organization Background, Activities and Operations</td>
                    <td>3</td>
                    <td>6 (Theory:3, Practical:3)</td>
                </tr>
                <tr>
                    <td>15</td>
                    <td>MVC-103</td>
                    <td className={'text-start'}>Full Stack Development with Python</td>
                    <td>3</td>
                    <td>6 (Theory:3, Practical:3)</td>
                </tr>
                <tr>
                    <td>16</td>
                    <td>MVC-118</td>
                    <td className={'text-start'}>FastAPI Framework</td>
                    <td>3</td>
                    <td>6 (Theory:3, Practical:3)</td>
                </tr>

                {/**/}

                <tr>
                    <td>17</td>
                    <td>MVC-121</td>
                    <td className={'text-start'}>Cloud deployment (AWS, Azure, Google Cloud)</td>
                    <td>4</td>
                    <td>6 (Theory:3, Practical:3)</td>
                </tr>
                <tr>
                    <td>18</td>
                    <td>MVC-122</td>
                    <td className={'text-start'}>Serverless deployment (AWS Lambda)</td>
                    <td>4</td>
                    <td>6 (Theory:3, Practical:3)</td>
                </tr>
                <tr>
                    <td>19</td>
                    <td>MVC-123</td>
                    <td className={'text-start'}>Containerization (Docker)</td>
                    <td>4</td>
                    <td>6 (Theory:3, Practical:3)</td>
                </tr>
                <tr>
                    <td>20</td>
                    <td>MVC-124</td>
                    <td className={'text-start'}>Orchestration (Kubernetes)</td>
                    <td>4</td>
                    <td>6 (Theory:3, Practical:3)</td>
                </tr>
                <tr>
                    <td>21</td>
                    <td>MVC-48</td>
                    <td className={'text-start'}>Final Project</td>
                    <td>4</td>
                    <td>6 (Theory:3, Practical:3)</td>
                </tr>
                </tbody>
            </table>

        </div>
    )
}