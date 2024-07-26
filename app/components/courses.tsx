import FullStackImage from '../../public/resources/webdesign.jpg';
import AIIntroImage from '../../public/resources/aiintro.jpg';
import DataScImage from '../../public/resources/datasc.jpg';
import ResearchDevImage from '../../public/resources/researchdev.jpg';
import GraphicsImage from '../../public/resources/graphics.jpg';
import Image from "next/image";

export default function CoursesPage(){
    const courses =[
        {id:1, name:'Full Stack App Development', pic:FullStackImage, pageLink:'#',
            description:'Unlock the power of full stack development and bring your ideas to life! Learn to design, build, and deploy dynamic web applications from scratch, mastering both front-end and back-end development skills. From user interface to server-side logic, get ready to create seamless user experiences and take your skills to the next level.'},
        {id:2, name:'An Introduction to Artificial Intelligence (AI) for Beginners', pic:AIIntroImage, pageLink:'#',
            description:'Uncover the fundamentals of Artificial Intelligence (AI) and unlock its potential! This beginner-friendly course introduces you to the basics of AI, including machine learning, deep learning, and neural networks. Learn how AI is transforming industries and daily life, and gain hands-on experience with practical exercises and projects. No prior experience needed - just curiosity and enthusiasm!'},
        {id:3, name:'Web Designing and Graphics', pic:GraphicsImage, pageLink:'#',
            description:'Bring your creativity to life on the web! Learn the art of web designing and graphics, from visual storytelling to user-friendly interfaces. Master the skills to craft stunning websites, logos, and graphics that captivate audiences. Discover the perfect blend of design principles, visual elements, and technical expertise to make your digital presence shine!'},
        {id:4, name:'AI and Data Science with Python', pic:DataScImage, pageLink:'#',
            description:'Unlock the power of AI and Data Science with Python! Learn to harness the potential of machine learning, data analysis, and visualization using Python\'s popular libraries like NumPy, pandas, and scikit-learn. Master the skills to extract insights, build predictive models, and drive business decisions with data-driven solutions. Dive into the world of AI and Data Science with Python and shape the future!'},
        {id:5, name:'Research and Development', pic:ResearchDevImage, pageLink:'#',
            description:'Drive innovation and shape the future! Learn the systematic approach to Research and Development (R&D), from idea generation to prototype development. Master the skills to design experiments, collect data, and analyze results to bring cutting-edge solutions to life. Discover how to turn creativity into reality and make a meaningful impact in various industries and fields.'},
    ]
    return(
        <div className={'flex flex-col items-center justify-center py-10'}>
            <p className={'text-2xl font-bold text-center'}>Top 5 Courses</p>
            <div className={'flex sm:flex-col lg:flex-row justify-center items-center gap-6 py-10 px-6'}>
                {courses.map((link) => {
                    return (
                        <div key={link.id}
                             className={'flex flex-col transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 bg-gray-200 p-1'}>
                            <Image src={link.pic} alt={''}/>
                            <h2 className={'font-bold text-lg text-indigo-950'}>{link.name}</h2>
                            <p className={'text-sm text-gray-950'}>{link.description}</p>
                            {/*<Link className={'hover:font-bold text-red-600 text-sm'} href={link.pageLink}>Read*/}
                            {/*    more...</Link>*/}
                        </div>

                    );
                })}

            </div>
        </div>
    )
}