import Image from "next/image";
import Dummy from "@/public/faculty/dummy.png";

export default function BioTechnologyDepartment(){
    return(
        <div className={'container flex flex-col min-h-screen'}>
            <p className={'text-xl md:text-2xl font-bold text-start py-2 lg:py-4 '}>Faculty of Biotechnology</p>
            <p className={'text-xs sm:text-sm'}>
                The Faculty of Biotechnology at MVIT pioneers innovative solutions at the intersection of biology, technology, and medicine, cultivating leaders in the rapidly evolving field of biotechnology. Our esteemed faculty deliver a comprehensive curriculum integrating genetics, molecular biology, biochemistry, and biomedical engineering with cutting-edge techniques in genetic engineering, genomics, proteomics, and bioinformatics. With state-of-the-art laboratories, research centers, and collaborations with industry partners, students explore the frontiers of biotechnology, developing novel therapies, diagnostic tools, and sustainable products. Graduates are equipped to drive breakthroughs in healthcare, agriculture, environmental sustainability, and forensic science, transforming lives and shaping the future of biotechnology.

            </p>
            <div
                className={'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 justify-center items-start sm:gap-6 sm:px-6 '}>
                {/* Leader */}
                <div
                    className={'flex flex-col items-center justify-center gap-2 py-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'}>
                    <div className={'border-2 border-stone-900 rounded-full'}>
                        <Image src={Dummy} alt={''} className={'h-44 w-44 rounded-full'}/>
                    </div>
                    <div className={'flex flex-col items-center justify-center'}>
                        <h2 className={'text-lg font-bold'}>Mehvish K.</h2>
                        <h2 className={'text-sm'}>M. Sc Zoology, B. Ed.</h2>
                        <h2 className={'text-sm'}>Instructor Science Education</h2>
                        <h2 className={'text-sm'}>Pakistan</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}