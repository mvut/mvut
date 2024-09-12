export default function ResearchComponent(){
    return (
        <div className="flex flex-col text-teal-200 text-center w-full bg-teal-950 py-10">

            <h2 className="text-3xl font-bold text-center">Career</h2>
            <p className="flex py-6 px-2 text-center items-center justify-center text-lg leading-relaxed">
                Mvit Ignite Curiosity and Illuminate Possibilities. We empower people by offering Online and On-Site Career Building Opportunities and Lifelong Learning, Leading in Computer Science, Information Technology, Business Management, Custom Software, Web Application, Communication Skill, Leadership Training and Research Methodologies
            </p>

            <div className="flex flex-col md:flex-row justify-between p-4 items-center border-t-2 border-b-2 gap-8 mt-8">
                <div>
                    <h2 className="text-xl font-bold">Artificial Intelligence</h2>
                    <p>Unlock the future with our comprehensive suite of over 15 courses</p>
                </div>
                <div>
                    <h2 className="text-xl font-bold">Computer Science and IT</h2>
                    <p>Explore over 25 diverse fields of professional growth and scientific inquiry</p>
                </div>
                <div>
                    <h2 className="text-xl font-bold">Research and Development </h2>
                    <p>Go from zero to hero in emerging technologies with our courses, transforming you from a complete beginner to a skilled professional</p>
                </div>
            </div>

            {/*<button className="p-2 bg-black mt-8 hover:bg-red-600 text-white mb-8 mt-14">More about research</button>*/}
        </div>
    )
}