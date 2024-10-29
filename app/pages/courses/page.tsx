import Link from "next/link";
import {FaArrowAltCircleLeft, FaArrowAltCircleRight} from "react-icons/fa";

export default function CoursesPage(){
    return(
        <div className={'container flex flex-col sm:py-16 my-10'}>
            <div className={'flex gap-10 '}>
                <Link href={'/pages/study'}
                      className={'flex text-xs hover:text-red-500 items-center gap-2'}><FaArrowAltCircleLeft/>Back</Link>
                <Link href={'/pages/study/fee'}
                      className={'flex text-xs hover:text-red-500 items-center gap-2'}><FaArrowAltCircleRight/>Fee</Link>
            </div>
            <h2 className={'text-lg sm:text-4xl my-6'}>List of Short Courses</h2>
            <div className={'flex flex-col items-start justify-center py-4 sm:py-6'}>
                <div className={'flex text-sm sm:text-lg gap-2'}>
                    <label className={'text-indigo-700'}>Classes: </label>
                    <p className={'text-red-700'}>Online/Onsite</p>
                </div>
                <div className={'flex text-sm sm:text-lg gap-2'}>
                    <label className={'text-indigo-700'}>Duration:</label>
                    <p className={'text-red-700'}>03 Months</p>
                </div>
                <div className={'flex text-sm sm:text-lg gap-2'}>
                    <label className={'text-indigo-700'}>Per Course Fee:</label>
                    <p className={'text-red-700'}>$60</p>
                </div>
            </div>
            <table className={"table-auto text-center text-xs sm:text-lg overflow-auto"}>
                <thead>
                <tr>
                    <th>Sr.</th>
                    <th>Course Code</th>
                    <th className={'text-start'}>Course Title</th>
                    <th>Duration</th>
                    <th>Credit Hours</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td>MVC-01</td>
                    <td className={'text-start'}>Artificial Intelligence</td>
                    <td>12 Weeks</td>
                    <td>6 (Theory:3, Practical:3)</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>MVC-02</td>
                    <td className={'text-start'}>Microsoft Word for Office Work</td>
                    <td>12 Weeks</td>
                    <td>6 (Theory:3, Practical:3)</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>MVC-03</td>
                    <td className={'text-start'}>Computer Networks</td>
                    <td>12 Weeks</td>
                    <td>6 (Theory:3, Practical:3)</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>MVC-04</td>
                    <td className={'text-start'}>AI and STEM Fundamentals</td>
                    <td>12 Weeks</td>
                    <td>6 (Theory:3, Practical:3)</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>MVC-05</td>
                    <td className={'text-start'}>Entrepreneurship</td>
                    <td>12 Weeks</td>
                    <td>6 (Theory:3, Practical:3)</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>MVC-06</td>
                    <td className={'text-start'}>PowerPoint Presentation Essentials</td>
                    <td>12 Weeks</td>
                    <td>6 (Theory:3, Practical:3)</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>MVC-07</td>
                    <td className={'text-start'}>Object Oriented Programming</td>
                    <td>12 Weeks</td>
                    <td>6 (Theory:3, Practical:3)</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>MVC-08</td>
                    <td className={'text-start'}>Introduction to Python Programming</td>
                    <td>12 Weeks</td>
                    <td>6 (Theory:3, Practical:3)</td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>MVC-09</td>
                    <td className={'text-start'}>Web Technologies</td>
                    <td>12 Weeks</td>
                    <td>6 (Theory:3, Practical:3)</td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>MVC-10</td>
                    <td className={'text-start'}>Online Professionalism and Ethics</td>
                    <td>12 Weeks</td>
                    <td>6 (Theory:3, Practical:3)</td>
                </tr>
                <tr>
                    <td>11</td>
                    <td>MVC-11</td>
                    <td className={'text-start'}>Software Engineering</td>
                    <td>12 Weeks</td>
                    <td>6 (Theory:3, Practical:3)</td>
                </tr>
                <tr>
                    <td>12</td>
                    <td>MVC-12</td>
                    <td className={'text-start'}>Excel Data Analysis</td>
                    <td>12 Weeks</td>
                    <td>6 (Theory:3, Practical:3)</td>
                </tr>
                <tr>
                    <td>13</td>
                    <td>MVC-13</td>
                    <td className={'text-start'}>Database Management Systems</td>
                    <td>12 Weeks</td>
                    <td>6 (Theory:3, Practical:3)</td>
                </tr>
                <tr>
                    <td>14</td>
                    <td>MVC-14</td>
                    <td className={'text-start'}>Introduction to Web Designing</td>
                    <td>12 Weeks</td>
                    <td>6 (Theory:3, Practical:3)</td>
                </tr>
                <tr>
                    <td>15</td>
                    <td>MVC-15</td>
                    <td className={'text-start'}>Introduction to JavaScript Programming</td>
                    <td>12 Weeks</td>
                    <td>6 (Theory:3, Practical:3)</td>
                </tr>
                <tr>
                    <td>16</td>
                    <td>MVC-16</td>
                    <td className={'text-start'}>Full Stack Application Development</td>
                    <td>12 Weeks</td>
                    <td>6 (Theory:3, Practical:3)</td>
                </tr>
                <tr>
                    <td>17</td>
                    <td>MVC-17</td>
                    <td className={'text-start'}>Introduction to C++ Programming</td>
                    <td>12 Weeks</td>
                    <td>6 (Theory:3, Practical:3)</td>
                </tr>
                <tr>
                    <td>18</td>
                    <td>MVC-18</td>
                    <td className={'text-start'}>Generative AI Fundamentals</td>
                    <td>12 Weeks</td>
                    <td>6 (Theory:3, Practical:3)</td>
                </tr>
                <tr>
                    <td>19</td>
                    <td>MVC-19</td>
                    <td className={'text-start'}>Principles of Management</td>
                    <td>12 Weeks</td>
                    <td>6 (Theory:3, Practical:3)</td>
                </tr>
                <tr>
                    <td>20</td>
                    <td>MVC-20</td>
                    <td className={'text-start'}>Operating Systems</td>
                    <td>12 Weeks</td>
                    <td>6 (Theory:3, Practical:3)</td>
                </tr>
                <tr>
                    <td>21</td>
                    <td>MVC-21</td>
                    <td className={'text-start'}>Data Structures and Algorithms</td>
                    <td>12 Weeks</td>
                    <td>6 (Theory:3, Practical:3)</td>
                </tr>
                <tr>
                    <td>22</td>
                    <td>MVC-22</td>
                    <td className={'text-start'}>Principles of Marketing</td>
                    <td>12 Weeks</td>
                    <td>6 (Theory:3, Practical:3)</td>
                </tr>
                <tr>
                    <td>23</td>
                    <td>MVC-23</td>
                    <td className={'text-start'}>Information Security and Management</td>
                    <td>12 Weeks</td>
                    <td>6 (Theory:3, Practical:3)</td>
                </tr>
                <tr>
                    <td>24</td>
                    <td>MVC-24</td>
                    <td className={'text-start'}>Graphics and Creative Art</td>
                    <td>12 Weeks</td>
                    <td>6 (Theory:3, Practical:3)</td>
                </tr>
                <tr>
                    <td>25</td>
                    <td>MVC-25</td>
                    <td className={'text-start'}>Data Science and Robotics</td>
                    <td>12 Weeks</td>
                    <td>6 (Theory:3, Practical:3)</td>
                </tr>
                <tr>
                    <td>26</td>
                    <td>MVC-26</td>
                    <td className={'text-start'}>Next.js and Vercel Deployment</td>
                    <td>12 Weeks</td>
                    <td>6 (Theory:3, Practical:3)</td>
                </tr>
                <tr>
                    <td>27</td>
                    <td>MVC-27</td>
                    <td className={'text-start'}>Communication and Business Ethics</td>
                    <td>12 Weeks</td>
                    <td>6 (Theory:3, Practical:3)</td>
                </tr>
                <tr>
                    <td>28</td>
                    <td>MVC-28</td>
                    <td className={'text-start'}>Typescript Programming</td>
                    <td>12 Weeks</td>
                    <td>6 (Theory:3, Practical:3)</td>
                </tr>
                <tr>
                    <td>29</td>
                    <td>MVC-29</td>
                    <td className={'text-start'}>Software Architecture and Design</td>
                    <td>12 Weeks</td>
                    <td>6 (Theory:3, Practical:3)</td>
                </tr>
                <tr>
                    <td>30</td>
                    <td>MVC-30</td>
                    <td className={'text-start'}>Video Editing Tools and Techniques</td>
                    <td>12 Weeks</td>
                    <td>6 (Theory:3, Practical:3)</td>
                </tr>
                <tr>
                    <td>31</td>
                    <td>MVC-31</td>
                    <td className={'text-start'}>Cloud Computing</td>
                    <td>12 Weeks</td>
                    <td>6 (Theory:3, Practical:3)</td>
                </tr>
                <tr>
                    <td>32</td>
                    <td>MVC-32</td>
                    <td className={'text-start'}>MERN Stack Development</td>
                    <td>12 Weeks</td>
                    <td>6 (Theory:3, Practical:3)</td>
                </tr>

                <tr>
                    <td>33</td>
                    <td>MVC-34</td>
                    <td className={'text-start'}>Designing UI/UX and Frontend Tools</td>
                    <td>12 Weeks</td>
                    <td>6 (Theory:3, Practical:3)</td>
                </tr>
                <tr>
                    <td>34</td>
                    <td>MVC-93</td>
                    <td className={'text-start'}>HTML Fundamentals</td>
                    <td>12 Weeks</td>
                    <td>6 (Theory:3, Practical:3)</td>
                </tr>
                <tr>
                    <td>35</td>
                    <td>MVC-94</td>
                    <td className={'text-start'}>Learn to Style for the Web</td>
                    <td>12 Weeks</td>
                    <td>6 (Theory:3, Practical:3)</td>
                </tr>
                <tr>
                    <td>36</td>
                    <td>MVC-95</td>
                    <td className={'text-start'}>Responsive Web Design and Bootstrap</td>
                    <td>12 Weeks</td>
                    <td>6 (Theory:3, Practical:3)</td>
                </tr>
                <tr>
                    <td>37</td>
                    <td>MVC-96</td>
                    <td className={'text-start'}>PHP Fundamentals</td>
                    <td>12 Weeks</td>
                    <td>6 (Theory:3, Practical:3)</td>
                </tr>
                <tr>
                    <td>38</td>
                    <td>MVC-99</td>
                    <td className={'text-start'}>PHP Back-end Development</td>
                    <td>12 Weeks</td>
                    <td>6 (Theory:3, Practical:3)</td>
                </tr>
                <tr>
                    <td>39</td>
                    <td>MVC-100</td>
                    <td className={'text-start'}>Tailwind CSS</td>
                    <td>12 Weeks</td>
                    <td>6 (Theory:3, Practical:3)</td>
                </tr>
                <tr>
                    <td>40</td>
                    <td>MVC-104</td>
                    <td className={'text-start'}>Introduction to React Programming</td>
                    <td>12 Weeks</td>
                    <td>6 (Theory:3, Practical:3)</td>
                </tr>
                <tr>
                    <td>41</td>
                    <td>MVC-106</td>
                    <td className={'text-start'}>Modern Applications, Trends and AI Role</td>
                    <td>12 Weeks</td>
                    <td>3 (Theory:3, Practical:0)</td>
                </tr>
                <tr>
                    <td>42</td>
                    <td>MVC-107</td>
                    <td className={'text-start'}>Prompt Engineering and LLMs</td>
                    <td>12 Weeks</td>
                    <td>6 (Theory:3, Practical:3)</td>
                </tr>
                <tr>
                    <td>43</td>
                    <td>MVC-108</td>
                    <td className={'text-start'}>Queries with MySQL</td>
                    <td>12 Weeks</td>
                    <td>6 (Theory:3, Practical:3)</td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}