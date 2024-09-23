import Link from "next/link";
import {FaFacebookF, FaWhatsapp} from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import {CiYoutube} from "react-icons/ci";
import React from "react";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"

export default function FooterComponent() {
    return (
        <div>
            <div
                className="flex flex-col sm:flex-row sm:h-60 bg-gray-900 justify-between items-center sm:px-10 text-gray-50">
                <div className={'flex flex-col items-start justify-center'}>
                    <p className={'font-bold text-sm sm:text-lg'}>Contact</p>
                    <div className={'flex items-center justify-center sm:h-10 gap-1'}>
                        <TfiEmail/>
                        <p>mvut.usa@gmail.com</p>
                    </div>
                    <div className={'flex items-center justify-center sm:h-10 gap-1'}>
                        <FaWhatsapp/>
                        <p>+1(747)209-4775</p>
                    </div>
                </div>
                <div className={'flex items-center justify-center text-center py-4'}>

                    <Link target="_blank" href="https://chat.whatsapp.com/IpG66lObuHo3MUelWoH6tu"
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

            <div className={'flex items-center justify-start gap-4 pl-4 text-gray-50 text-center bg-gray-950 h-10'}>
                <p className={'text-xs'}>Powered by
                    <Link className={'text-amber-300 uppercase'} href={'/'} target={'_blank'}> MVIT</Link>
                </p>

                <HoverCard>
                    <HoverCardTrigger className={'text-xs'}>Data Privacy</HoverCardTrigger>
                    <HoverCardContent className={'text-xs'}>
                        <p className={'font-bold'}>Data Privacy Policy</p>
                        <p>
                            At MVIT, we prioritize data protection, collecting only necessary personal data (contact,
                            device, usage, and location information) to enhance your experience, communicate
                            effectively, and comply with regulations. We implement robust security measures to safeguard
                            your data and may share it with affiliates, service providers, and law enforcement as
                            required. You have the right to access, update, withdraw consent, object, and request
                            deletion of your data. Our commitment to transparency and security ensures your trust and
                            confidence.
                        </p>
                    </HoverCardContent>
                </HoverCard>

            </div>
        </div>
    )
}