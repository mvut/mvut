import Link from "next/link";
import {FaArrowAltCircleLeft, FaArrowAltCircleRight} from "react-icons/fa";
import Image from "next/image";
import Img6 from "@/public/resources/research.png";
import { FaStar } from "react-icons/fa";

export default function CoursesPage(){
    return(
        <div className={'container flex flex-col sm:py-16 my-10'}>

            <h2 className={'text-lg sm:text-4xl my-6'}>List of Admitted Candidates</h2>
            <ul>
                <li>Sr#</li>
                <li>Candidate Name</li>
                <li>Email</li>
                <li>Country</li>
            </ul>

        </div>
    )
}