export default function ApplicationForm(){
    const programs =[
        {id:1, program:"Full Stack Development (FSD"},
        {id:2, program:"Artificial Intelligence"},
        {id:3, program:"Web Designing and Graphics"},
        {id:4, program:"Data Science"},
        {id:5, program:"Research and Development"},
        {id:6, program:"Interpersonal Skills"},
    ]
    return(
        <div className={'flex flex-row md:min-h-screen items-center justify-center'}>
            <div className={'hidden md:flex md:flex-col min-h-screen md:w-1/2 bg-teal-400 items-center justify-center'}>
                <p className={'text-teal-100 text-5xl font-bold text-center'}>Build a Career</p>
                <p className={'text-teal-500 text-6xl font-bold text-center'}>Admission Open</p>
            </div>

            <form className={'flex flex-col md:w-1/2 items-start justify-center md:gap-6 p-2 lg:pl-16'}>
                <p className={'text-teal-900 text-2xl font-bold text-center'}>Application Form</p>

                <input type={'text'} placeholder={'Enter your full name'} className={'md:h-10 md:w-96 bg-teal-50 p-1 border-2 border-teal-200'}/>
                <input type={'text'} placeholder={'Enter gmail account'} className={'md:h-10 md:w-96 bg-teal-50 p-1 border-2 border-teal-200'}/>
                <input type={'text'} placeholder={'Enter your WhatsApp number'} className={'md:h-10 md:w-96 bg-teal-50 p-1 border-2 border-teal-200'}/>

                <div className={'flex flex-col'}>
                    <label className={'text-teal-900'}>Choose Program:</label>
                    <select className={'md:h-10 md:w-96 bg-teal-50 p-1 border-2 border-teal-200'}>
                        {
                            programs ?
                                programs.map((program) => {
                                    return <option key={program["program"]}
                                                   value={program["id"]}>{program["id"]} {program["program"]}</option>
                                }) : null
                        }
                    </select>
                </div>

                <div className={'flex flex-col '}>
                    <label>Classes</label>
                    <select className={'md:h-10 md:w-96 bg-teal-50 p-1 border-2 border-teal-200'}>
                        <option value={1}>Online</option>
                        <option value={2}>Onsite</option>
                    </select>
                </div>

                <button type={'submit'}
                        className={'text-md bg-teal-950 text-teal-300 rounded-lg uppercase hover:bg-teal-800 md:p-2 md:px-6 py-2 mt-2'}>Apply
                </button>
            </form>


        </div>
    )
}