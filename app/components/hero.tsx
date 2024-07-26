import { BsInfoSquare } from "react-icons/bs";
import Logo from "@/public/mvut_logo.png";
import Image from "next/image";
export default function HeroPage(){
    return (
        <div className="flex flex-col justify-center items-center text-center px-10 py-10 h-96 bg-gray-100 w-full">
            <Image src={Logo} alt="MVUT Logo" height={130} width={130} />
            <h2 className="text-3xl font-bold py-4">Welcome to Mansha Virtual University of Technologies</h2>
            <h3 className="text-2xl py-4">A Worth Living Education</h3>
            <div className="flex justify-center py-4">
                <button
                    className="flex justify-center items-center bg-black hover:bg-red-900 text-white rounded-lg gap-2 p-2">
                        <BsInfoSquare size={23}/>
                    <p>More Information</p>
                </button>
            </div>
        </div>
    )
}