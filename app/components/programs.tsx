import Link from "next/link";

export default function ProgramComponent(){
    return (
        <div className="flex flex-col items-center justify-center py-16">
            <p className="text-5xl py-4">Services</p>
            <div
                className={'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 items-center justify-center gap-16 py-4'}>
                <div
                    className={'flex flex-col items-start justify-start h-72 w-72 bg-gray-200 p-2 border-y-4 border-amber-600'}>
                    <h2 className={'text-xl font-bold py-2 text-amber-600'}>Solutions</h2>
                    <p className={'text-sm'}>
                        MVIT Solutions delivers expert IT services, driving business growth through customized
                        solutions, digital transformation, data analytics, cybersecurity, cloud computing, AI, and
                        machine learning. Enhance efficiency, mitigate risks, and unlock data-driven decision-making
                        with our innovative expertise, empowering your organization to thrive in a rapidly evolving
                        landscape.
                    </p>
                </div>
                <div
                    className={'flex flex-col items-start justify-start h-72 w-72 bg-gray-200 p-2 border-y-4 border-stone-600'}>
                    <h2 className={'text-xl font-bold py-2 text-stone-600'}>Research</h2>
                    <p className={'text-sm'}>
                        MVIT Research drives innovation and advancement through cutting-edge solutions, leveraging
                        applied research, industry collaborations, interdisciplinary initiatives, emerging technology
                        exploration, and data-driven insights. Our expert team unlocks new possibilities, drives
                        technological breakthroughs, and shapes the future, fostering a culture of discovery and
                        excellence
                    </p>
                </div>
                <div
                    className={'flex flex-col items-start justify-start h-72 w-72 bg-gray-200 p-2 border-y-4 border-green-600'}>
                    <h2 className={'text-xl font-bold py-2 text-green-600'}>Career</h2>
                    <p className={'text-sm'}>
                        MVIT Career fuels professional growth, empowering students and professionals to achieve their
                        goals through comprehensive services, including career counseling, internship and job placement
                        support, industry networking, resume building, and continuing education, enhancing employability
                        and unlocking new opportunities for success.
                    </p>
                </div>
                <div
                    className={'flex flex-col items-start justify-start h-72 w-72 bg-gray-200 p-2 border-y-4 border-blue-600'}>
                    <h2 className={'text-xl font-bold py-2 text-blue-600'}>Internship</h2>
                    <p className={'text-sm'}>
                        MVIT Internships provide hands-on learning, industry collaborations, mentorship, project-based
                        work, and career advancement support, bridging the gap between academics and professional
                        experience. By doing so, we launch successful careers, foster innovative thinking, and cultivate
                        the next generation of leaders and visionaries.

                    </p>
                </div>

                <div
                    className={'flex flex-col items-start justify-start h-72 w-72 bg-gray-200 p-2 border-y-4 border-stone-700'}>
                    <h2 className={'text-xl font-bold py-2 text-stone-700'}>Education</h2>
                    <p className={'text-sm'}>
                        MVIT Education fosters academic excellence through innovative teaching methods, cutting-edge
                        curriculum, and hands-on learning experiences. Our comprehensive programs includes
                        certifications, and professional development courses, empowering students with industry-relevant
                        skills, critical thinking, and problem-solving abilities.
                    </p>
                </div>
                <div
                    className={'flex flex-col items-start justify-start h-72 w-72 bg-gray-200 p-2 border-y-4 border-red-700'}>
                    <h2 className={'text-xl font-bold py-2 text-red-700'}>Advisory</h2>
                    <p className={'text-sm'}>
                        MVIT Advisory offers expert guidance on technology, digital transformation, market trends, operational optimization, and growth planning, empowering organizations to make informed decisions and drive success.
                    </p>
                </div>
                <div
                    className={'flex flex-col items-start justify-start h-72 w-72 bg-gray-200 p-2 border-y-4 border-blue-700'}>
                    <h2 className={'text-xl font-bold py-2 text-blue-700'}>Entrepreneurship </h2>
                    <p className={'text-sm'}>
                        MVIT Entrepreneurship propels innovative ideas into successful businesses through comprehensive support, including incubation and acceleration programs, expert mentorship, funding opportunities, strategic networking, business model validation, and access to cutting-edge technologies.
                    </p>
                </div>
                <div
                    className={'flex flex-col items-start justify-start h-72 w-72 bg-gray-200 p-2 border-y-4 border-amber-600'}>
                    <h2 className={'text-xl font-bold py-2 text-amber-600'}>Training and Development </h2>
                    <p className={'text-sm'}>
                        MVIT Training and Development offers expert-led programs for professional growth, including certifications, workshops, leadership development, technical skills training, and soft skills enhancement, fueling success in a dynamic world
                    </p>
                </div>
            </div>
        </div>
    )
}