import { CiSquareMore } from "react-icons/ci";

export default function SloganPage(){
    return (
        <div className="flex flex-col bg-black items-center h-64 justify-center text-white gap-6 w-full">

            <h2 className="text-xl font-bold ">
                We Believe in the Quality of Education, Logic and Humanity.
            </h2>
            <p className="">Let`s Bring Clarity, Innovation and Peace Together</p>

            <button
                className="flex justify-center items-center bg-white hover:bg-red-900 hover:text-white text-red-600 rounded-lg gap-2 p-2">
                <CiSquareMore size={23}/>
                <p>Explore Programs</p>
            </button>

        </div>
    )
}