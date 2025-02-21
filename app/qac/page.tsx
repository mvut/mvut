import Link from "next/link";

export default function QualityAssuranceCell(){
    return(
        <div className={'container py-16'}>

         <div className={'mb-10'}>
             <h1 className={'text-xl font-bold'}>Quality Assurance Cell</h1>
             <p>
                 The Quality Assurance Cell (QAC) plays a vital role in ensuring the academic integrity and excellence of an institution by facilitating a true and unbiased assessment of students&apos; performance. The QAC serves as a guardian of academic standards, guaranteeing that evaluations are fair, transparent, and free from bias. By establishing and implementing rigorous quality control measures, the QAC enables a precise and reliable assessment of students&apos; knowledge, skills, and competencies. Ultimately, the QAC&apos;s meticulous efforts culminate in the awarding of genuine grades that accurately reflect students&apos; achievements, providing a credible measure of their academic prowess and preparing them for future success. By upholding the highest standards of academic assessment, the QAC reinforces the institution&apos;s commitment to excellence, fostering a culture of accountability, transparency, and academic integrity.
             </p>

         </div>

        <div>
            <Link href={'/qac/IR'} className={'p-2 hover:bg-red-500 mt-10 bg-blue-500'}>Institute Registration (IR)</Link>
        </div>


        </div>
    )
}