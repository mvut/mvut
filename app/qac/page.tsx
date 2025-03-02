import Link from "next/link";

export default function QualityAssuranceCell(){
    return(
        <div className={'container py-16'}>

         <div className={'mb-10'}>
             <h1 className={'text-xl font-bold'}>Quality Assurance Test - QAT</h1>
             <p>
                 As part of our commitment to excellence in education, we are launching a monthly QAT for students from Nursery to Class Eight. This initiative aims to control and assess the quality of education in schools, empowering students to meet the latest educational demands. To make this opportunity accessible to all, we are offering free registration to schools. By participating in our monthly tests, schools will receive valuable insights into their students&apos; performance, enabling them to identify areas of improvement and tailor their teaching methods to meet the evolving needs of their students.             </p>

         </div>

        <div className={'flex gap-4'}>
            <Link href={'/qac/IR'} className={'p-2 hover:bg-red-500 mt-10 bg-blue-500'}>Institute Registration</Link>

            <Link href={'/qac/studentenrollment'} className={'p-2 bg-green-500 mt-10 hover:bg-blue-500'}>Student Enrollment</Link>
        </div>


        </div>
    )
}