export default function ResearchComponent(){
    return (
        <div className="text-center py-6 w-full bg-gray-100 px-24">

            <h2 className="text-5xl font-bold ">Career</h2>
            <p className="flex py-6 text-center items-center justify-center text-lg">
                Our career development and research courses power discoveries that revolutionize our world, boost human prosperity, and advance global understanding
            </p>

            <div className="flex justify-between p-4 items-center border-t-2 border-b-2 gap-8 mt-8">
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

            <button className="p-2 bg-black mt-8 hover:bg-red-600 text-white mb-8 mt-14">More about research</button>
        </div>
    )
}