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
            <h2 className={'text-lg sm:text-4xl'}>Next-Generation Web Development (NXGD)</h2>
            <div className={'flex flex-col items-start justify-center py-4 sm:py-10'}>
                <div className={'flex text-sm sm:text-lg gap-2'}>
                    <label className={'text-indigo-700'}>Classes: </label>
                    <p className={'text-red-700'}>Online/Onsite</p>
                </div>
                <div className={'flex text-sm sm:text-lg gap-2'}>
                    <label className={'text-indigo-700'}>Total Semester: </label>
                    <p className={'text-red-700'}>08</p>
                </div>
                <div className={'flex text-sm sm:text-lg gap-2'}>
                    <label className={'text-indigo-700'}>Total credit hours: </label>
                    <p className={'text-red-700'}>234(Theory:144, Practical:90)</p>
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
                    <td>MVC-03</td>
                    <td className={'text-start'}>Computer Networks</td>
                    <td>1</td>
                    <td>6 (Theory:3, Practical:3)</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>MVC-04</td>
                    <td className={'text-start'}>AI and STEM Fundamentals</td>
                    <td>1</td>
                    <td>6 (Theory:3, Practical:3)</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>MVC-05</td>
                    <td className={'text-start'}>Entrepreneurship</td>
                    <td>1</td>
                    <td>3 (Theory:3, Practical:0)</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>MVC-06</td>
                    <td className={'text-start'}>PowerPoint Presentation Essentials</td>
                    <td>1</td>
                    <td>6 (Theory:3, Practical:3)</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>MVC-07</td>
                    <td className={'text-start'}>Object Oriented Programming</td>
                    <td>2</td>
                    <td>3 (Theory:3, Practical:0)</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>MVC-08</td>
                    <td className={'text-start'}>Introduction to Python Programming</td>
                    <td>2</td>
                    <td>6 (Theory:3, Practical:3)</td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>MVC-09</td>
                    <td className={'text-start'}>Web Technologies</td>
                    <td>2</td>
                    <td>6 (Theory:3, Practical:3)</td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>MVC-10</td>
                    <td className={'text-start'}>Online Professionalism and Ethics</td>
                    <td>2</td>
                    <td>6 (Theory:3, Practical:3)</td>
                </tr>
                <tr>
                    <td>11</td>
                    <td>MVC-11</td>
                    <td className={'text-start'}>Software Engineering</td>
                    <td>2</td>
                    <td>2 (Theory:3, Practical:0)</td>
                </tr>
                <tr>
                    <td>12</td>
                    <td>MVC-12</td>
                    <td className={'text-start'}>Excel Data Analysis</td>
                    <td>2</td>
                    <td>6 (Theory:3, Practical:3)</td>
                </tr>
                <tr>
                    <td>13</td>
                    <td>MVC-13</td>
                    <td className={'text-start'}>Database Management Systems</td>
                    <td>3</td>
                    <td>6 (Theory:3, Practical:3)</td>
                </tr>
                <tr>
                    <td>14</td>
                    <td>MVC-14</td>
                    <td className={'text-start'}>Introduction to Web Designing</td>
                    <td>3</td>
                    <td>6 (Theory:3, Practical:3)</td>
                </tr>
                <tr>
                    <td>15</td>
                    <td>MVC-15</td>
                    <td className={'text-start'}>Introduction to JavaScript Programming</td>
                    <td>3</td>
                    <td>6 (Theory:3, Practical:3)</td>
                </tr>
                <tr>
                    <td>16</td>
                    <td>MVC-16</td>
                    <td className={'text-start'}>Full Stack Application Development</td>
                    <td>3</td>
                    <td>6 (Theory:3, Practical:3)</td>
                </tr>
                <tr>
                    <td>17</td>
                    <td>MVC-17</td>
                    <td className={'text-start'}>Introduction to C++ Programming</td>
                    <td>3</td>
                    <td>6 (Theory:3, Practical:3)</td>
                </tr>

                <tr>
                    <td>18</td>
                    <td>MVC-18</td>
                    <td className={'text-start'}>Generative AI Fundamentals</td>
                    <td>3</td>
                    <td>6 (Theory:3, Practical:3)</td>
                </tr>
                <tr>
                    <td>19</td>
                    <td>MVC-19</td>
                    <td className={'text-start'}>Principles of Management</td>
                    <td>4</td>
                    <td>3 (Theory:3, Practical:0)</td>
                </tr>
                <tr>
                    <td>20</td>
                    <td>MVC-20</td>
                    <td className={'text-start'}>Operating Systems</td>
                    <td>4</td>
                    <td>6 (Theory:3, Practical:3)</td>
                </tr>
                <tr>
                    <td>21</td>
                    <td>MVC-21</td>
                    <td className={'text-start'}>Data Structures and Algorithms</td>
                    <td>4</td>
                    <td>6 (Theory:3, Practical:3)</td>
                </tr>
                <tr>
                    <td>22</td>
                    <td>MVC-22</td>
                    <td className={'text-start'}>Principles of Marketing</td>
                    <td>4</td>
                    <td>3 (Theory:3, Practical:0)</td>
                </tr>
                <tr>
                    <td>23</td>
                    <td>MVC-23</td>
                    <td className={'text-start'}>Information Security and Management</td>
                    <td>4</td>
                    <td>3 (Theory:3, Practical:0)</td>
                </tr>
                <tr>
                    <td>24</td>
                    <td>MVC-24</td>
                    <td className={'text-start'}>Graphics and Creative Art</td>
                    <td>4</td>
                    <td>6 (Theory:3, Practical:3)</td>
                </tr>
                <tr>
                    <td>25</td>
                    <td>MVC-25</td>
                    <td className={'text-start'}>Data Science and Robotics</td>
                    <td>5</td>
                    <td>6 (Theory:3, Practical:3)</td>
                </tr>
                <tr>
                    <td>26</td>
                    <td>MVC-26</td>
                    <td className={'text-start'}>Next.js and Vercel Deployment </td>
                    <td>5</td>
                    <td>6 (Theory:3, Practical:3)</td>
                </tr>
                <tr>
                    <td>27</td>
                    <td>MVC-27</td>
                    <td className={'text-start'}>Communication and Business Ethics</td>
                    <td>5</td>
                    <td>3 (Theory:3, Practical:0)</td>
                </tr>
                <tr>
                    <td>28</td>
                    <td>MVC-28</td>
                    <td className={'text-start'}>Typescript Programming</td>
                    <td>5</td>
                    <td>6 (Theory:3, Practical:3)</td>
                </tr>
                <tr>
                    <td>29</td>
                    <td>MVC-29</td>
                    <td className={'text-start'}>Software Architecture and Design</td>
                    <td>5</td>
                    <td>6 (Theory:3, Practical:3)</td>
                </tr>
                <tr>
                    <td>30</td>
                    <td>MVC-30</td>
                    <td className={'text-start'}>Video Editing Tools and Techniques</td>
                    <td>5</td>
                    <td>6 (Theory:3, Practical:3)</td>
                </tr>
                <tr>
                    <td>31</td>
                    <td>MVC-31</td>
                    <td className={'text-start'}>Cloud Computing</td>
                    <td>6</td>
                    <td>3 (Theory:3, Practical:0)</td>
                </tr>
                <tr>
                    <td>32</td>
                    <td>MVC-32</td>
                    <td className={'text-start'}>MERN Stack Development</td>
                    <td>6</td>
                    <td>6 (Theory:3, Practical:3)</td>
                </tr>
                <tr>
                    <td>33</td>
                    <td>MVC-33</td>
                    <td className={'text-start'}>English Comprehension</td>
                    <td>6</td>
                    <td>3 (Theory:3, Practical:0)</td>
                </tr>
                <tr>
                    <td>34</td>
                    <td>MVC-34</td>
                    <td className={'text-start'}>Designing UI/UX and Frontend Tools</td>
                    <td>6</td>
                    <td>6 (Theory:3, Practical:3)</td>
                </tr>
                <tr>
                    <td>35</td>
                    <td>MVC-35</td>
                    <td className={'text-start'}>Advanced Backend Development Techniques</td>
                    <td>6</td>
                    <td>6 (Theory:3, Practical:3)</td>
                </tr>
                <tr>
                    <td>36</td>
                    <td>MVC-36</td>
                    <td className={'text-start'}>Theory of Automata</td>
                    <td>6</td>
                    <td>3 (Theory:3, Practical:0)</td>
                </tr>
                <tr>
                    <td>37</td>
                    <td>MVC-37</td>
                    <td className={'text-start'}>Digital Logic Design</td>
                    <td>7</td>
                    <td>3 (Theory:3, Practical:0)</td>
                </tr>
                <tr>
                    <td>38</td>
                    <td>MVC-38</td>
                    <td className={'text-start'}>Computer Architecture</td>
                    <td>7</td>
                    <td>3 (Theory:3, Practical:0)</td>
                </tr>
                <tr>
                    <td>39</td>
                    <td>MVC-39</td>
                    <td className={'text-start'}>Discrete Mathematics</td>
                    <td>7</td>
                    <td>3 (Theory:3, Practical:0)</td>
                </tr>
                <tr>
                    <td>40</td>
                    <td>MVC-40</td>
                    <td className={'text-start'}>Statistics and Probability</td>
                    <td>7</td>
                    <td>6 (Theory:3, Practical:3)</td>
                </tr>
                <tr>
                    <td>41</td>
                    <td>MVC-41</td>
                    <td className={'text-start'}>Parallel and Distributed Computing</td>
                    <td>7</td>
                    <td>3 (Theory:3, Practical:0)</td>
                </tr>
                <tr>
                    <td>42</td>
                    <td>MVC-42</td>
                    <td className={'text-start'}>Modelling and Simulation</td>
                    <td>7</td>
                    <td>6 (Theory:3, Practical:3)</td>
                </tr>
                <tr>
                    <td>43</td>
                    <td>MVC-43</td>
                    <td className={'text-start'}>Deep Learning</td>
                    <td>8</td>
                    <td>6 (Theory:3, Practical:3)</td>
                </tr>
                <tr>
                    <td>44</td>
                    <td>MVC-44</td>
                    <td className={'text-start'}>Data Warehousing</td>
                    <td>8</td>
                    <td>3 (Theory:3, Practical:0)</td>
                </tr>
                <tr>
                    <td>45</td>
                    <td>MVC-45</td>
                    <td className={'text-start'}>Data Mining Techniques</td>
                    <td>8</td>
                    <td>3 (Theory:3, Practical:0)</td>
                </tr>
                <tr>
                    <td>46</td>
                    <td>MVC-46</td>
                    <td className={'text-start'}>Big Data Analytics</td>
                    <td>8</td>
                    <td>3 (Theory:3, Practical:0)</td>
                </tr>
                <tr>
                    <td>47</td>
                    <td>MVC-47</td>
                    <td className={'text-start'}>Next Generation Networks</td>
                    <td>8</td>
                    <td>3 (Theory:3, Practical:0)</td>
                </tr>
                <tr>
                    <td>48</td>
                    <td>MVC-48</td>
                    <td className={'text-start'}>Final Project</td>
                    <td>8</td>
                    <td>3 (Theory:3, Practical:3)</td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}