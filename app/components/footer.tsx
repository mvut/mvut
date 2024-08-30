import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";

export default function FooterComponent(){
    return (
        <div className="flex flex-col w-full bg-teal-900">

            <div className="flex flex-col sm:flex-row justify-between items-center text-white py-6 px-6">
                <div className="flex flex-col justify-center items-start gap-2 py-2 ">
                    <p className={'font-bold text-xl'}>MVUT</p>
                    <p className={'flex items-center justify-center text-white gap-2'}>
                        <TfiEmail/> mvut.usa@gmail.com
                    </p>
                    <p className={'flex items-center justify-center text-white gap-2'}>
                        <FaWhatsapp/> +17472094775
                    </p>
                </div>
                <p className={'text-xs'}>Powered by
                    <Link className={'text-amber-300'} href={'https://www.linkedin.com/in/drsagher/'} target={'_blank'}> Abubakar</Link>
                </p>
            </div>

        </div>
    )
}