import Image from "next/image";
import Dummy from "@/public/faculty/dummy.png";

export default function PhysicsDepartment(){
    return(
        <div className={'container flex flex-col min-h-screen'}>
            <p className={'text-xl md:text-2xl font-bold text-start py-2 lg:py-4 '}>Faculty of Physics</p>
            <p className={'text-xs sm:text-sm'}>
                The Faculty of Physics at MVIT explores the fundamental laws of the universe, cultivating innovative thinkers and leaders in the pursuit of scientific discovery. Our renowned faculty deliver a comprehensive curriculum encompassing theoretical and experimental physics, from classical mechanics to quantum field theory, and applied physics, including materials science, nanotechnology, and biophysics. With state-of-the-art laboratories, research centers, and international collaborations, students investigate phenomena at the forefront of modern physics, tackling complex challenges in energy, environment, and technology. Graduates are equipped for careers in research, academia, industry, and government, driving breakthroughs and advancing our understanding of the physical world.
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
                        <h2 className={'text-lg font-bold'}>Hafiza Shahpara</h2>
                        <h2 className={'text-sm'}>M.Phil. Physics, B. Ed.</h2>
                        <h2 className={'text-sm'}>Instructor Physics</h2>
                        <h2 className={'text-sm'}>Pakistan</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}