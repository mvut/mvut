import Link from "next/link";
import {FaFacebookF, FaWhatsapp} from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import {CiYoutube} from "react-icons/ci";
// import { TfiLocationPin } from "react-icons/tfi";

export default function FooterComponent(){
    return (
        <div >
            <div className="flex flex-col sm:flex-row sm:h-60 bg-gray-900 justify-between items-center sm:px-10 text-gray-50">
                <div className={'flex flex-col items-start justify-center'}>
                    <p className={'font-bold text-sm sm:text-lg'}>Contact</p>
                    <div className={'flex items-center justify-center sm:h-10 gap-1'}>
                        <TfiEmail/>
                        <p>mvut.usa@gmail.com</p>
                    </div>
                    <div className={'flex items-center justify-center sm:h-10 gap-1'}>
                        <FaWhatsapp/>
                        <p>+17472094775</p>
                    </div>
                </div>
                <div className={'flex items-center justify-center text-center'}>

                    <Link target="_blank" href="https://chat.whatsapp.com/CFrP44L2ZbP9V01e1lcTN7"
                          className="hover:text-green-400">
                        <FaWhatsapp size={25}/>
                    </Link>

                    <Link target="_blank" href="https://web.facebook.com/mvutus" className=" hover:text-blue-700">
                        <FaFacebookF size={25}/>
                    </Link>

                    <Link target="_blank" href="https://www.youtube.com/@mvut" className=" hover:text-red-500">
                        <CiYoutube size={25}/>
                    </Link>
                </div>
            </div>
            <div className={'flex items-center justify-center text-gray-50 text-center bg-gray-950 h-10'}>
                <p className={'text-xs'}>Powered by
                    <Link className={'text-amber-300 uppercase'} href={'/'} target={'_blank'}> Mvut.us</Link>
                </p>
            </div>
        </div>
    )
}