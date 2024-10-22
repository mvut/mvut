export default function BoGPage(){
    return(
        <div className={'container flex flex-col overflow-auto py-10 min-h-screen '}>
            <h1 className={'text-3xl pb-8'}>Board of Governors</h1>
            <table className={"table-auto text-center text-xs sm:text-lg "}>
                <tbody>
                <tr className={'odd:bg-gray-200 even:bg-teal-100'}>
                    <td className={'px-4'}>1</td>
                    <td className={'text-start'}>President (Founder and Owner)</td>
                    <td>Chairman</td>
                </tr>
                <tr className={'odd:bg-gray-200 even:bg-teal-100'}>
                    <td className={'px-4'}>2</td>
                    <td className={'text-start'}>Vice-President</td>
                    <td>Co-Chairman</td>
                </tr>
                <tr className={'odd:bg-gray-200 even:bg-teal-100'}>
                    <td className={'px-4'}>3</td>
                    <td className={'text-start'}>Rector, Mansha Virtual Institute of Technologies</td>
                    <td>Member</td>
                </tr>
                <tr className={'odd:bg-gray-200 even:bg-teal-100'}>
                    <td className={'px-4'}>4</td>
                    <td className={'text-start'}>Deans from Departments of Mansha Virtual Institute of Technologies</td>
                    <td>Member</td>
                </tr>
                <tr className={'odd:bg-gray-200 even:bg-teal-100'}>
                    <td className={'px-4'}>5</td>
                    <td className={'text-start'}>Registrar, Mansha Virtual Institute of Technologies</td>
                    <td>Secretary</td>
                </tr>
                <tr className={'odd:bg-gray-200 even:bg-teal-100'}>
                    <td className={'px-4'}>6</td>
                    <td className={'text-start'}>Academic Representative</td>
                    <td>Member</td>
                </tr>
                <tr className={'odd:bg-gray-200 even:bg-teal-100'}>
                    <td className={'px-4'}>7</td>
                    <td className={'text-start'}>Finance Expert/Treasurer</td>
                    <td>Member</td>
                </tr>
                <tr className={'odd:bg-gray-200 even:bg-teal-100'}>
                    <td className={'px-4'}>8</td>
                    <td className={'text-start'}>Legal Advisor</td>
                    <td>Member</td>
                </tr>
                <tr className={'odd:bg-gray-200 even:bg-teal-100'}>
                    <td className={'px-4'}>9</td>
                    <td className={'text-start'}>Industry and Community Representatives</td>
                    <td>Member</td>
                </tr>
                <tr className={'odd:bg-gray-200 even:bg-teal-100'}>
                    <td className={'px-4'}>10</td>
                    <td className={'text-start'}>Alumni and Student Representatives</td>
                    <td>Member</td>
                </tr>
                </tbody>
            </table>
            <h1 className={'text-3xl py-8'}>Organizational Structure</h1>
            <ul className={'list-disc pl-16 text-xs sm:text-lg'}>
                <li>The President (Founder and Owner) serves as the Chancellor of the Mansha Virtual Institute of Technologies.</li>
                <li>The Rector serves as the Chief Executive Officer and Chief Academic Officer of the Mansha Virtual Institute of Technologies.</li>
                <li>Other Officers of the institute includes
                   Registrar,
                    Deans,
                    Directors,
                   Chairpersons or Heads of the Teaching Departments,
                    Director Finance,
                    Controller of Examinations.
                </li>
                <li>The Board of Governors serves as the highest authority of the Mansha Virtual Institute of
                    Technologies, entrusted with overseeing and guiding its administrative, academic, and financial matters, as well as establishing policies and regulations</li>
                <li>Other key authorities of the Institute includes

                   Executive Council,
                    Academic Council,
                   Board of Studies,
                    Advanced Studies and Research Board,
                    Selection Board,
                    Finance and Planning Council,
                   Affiliation Committee.
                </li>
            </ul>
        </div>
    )
}