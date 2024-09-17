export default function ProgramComponent(){
    return (
        <div className="flex flex-col container mb-8 mx-auto py-16 items-center justify-center text-center">
            <p className="text-7xl text-teal-950 font-bold">Services</p>
            <ul className={'flex flex-col md:flex-row text-lg gap-4 text-gray-50 sm:py-10'}>
                <li className={'flex text-center items-center justify-center bg-red-900 p-2 rounded-full h-36 w-36 hover:bg-gray-950 transition-all'}>Solutions</li>
                <li className={'flex text-center items-center justify-center bg-amber-900 p-2 rounded-full h-36 w-36 hover:bg-gray-950 transition-all'}>Research</li>
                <li className={'flex text-center items-center justify-center bg-indigo-900 p-2 rounded-full h-36 w-36 hover:bg-gray-950 transition-all'}>Career</li>
                <li className={'flex text-center items-center justify-center bg-green-900 p-2 rounded-full h-36 w-36 hover:bg-gray-950 transition-all'}>Internship</li>
                <li className={'flex text-center items-center justify-center bg-teal-900 p-2 rounded-full h-36 w-36 hover:bg-gray-950 transition-all'}>Education</li>
            </ul>
        </div>
    )
}