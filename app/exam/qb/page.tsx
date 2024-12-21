import React from "react";

export default function  QuestionBankDeveloper(){
    return(
        <div className={'container min-h-screen py-16'}>
            <h1 className={'text-xl font-bold pb-10'}>Question Registration Form</h1>
            <form>
                <div className={'grid grid-cols-1 md:grid-cols-2 gap-6'}>
                    <div className={'flex flex-col '}>
                        <label>course_code</label>
                        <select className={'h-10  md:h-10 w-auto bg-teal-50 p-1 border-2 border-teal-200'}
                                name={'course_code'}>
                            {/*<option value={1}>Spring 2024</option>*/}
                            <option value={'MVC-93'}>MVC-93</option>
                        </select>
                    </div>

                    <div className={'flex flex-col '}>
                        <label>chapter_no</label>
                        <input type={'text'} placeholder={'Enter chapter_no'}
                               className={'h-10  md:h-10 w-auto bg-teal-50 p-1 border-2 border-teal-200'}
                               required={true} name={'chapter_no'}/>
                    </div>

                    <div className={'flex flex-col '}>
                        <label>chapter_name</label>
                        <input type={'text'} placeholder={'Enter chapter_name'}
                               className={'h-10  md:h-10 w-auto bg-teal-50 p-1 border-2 border-teal-200'}
                               required={true} name={'chapter_name'}/>
                    </div>

                    <div className={'flex flex-col '}>
                        <label>question_topic</label>
                        <input type={'text'} placeholder={'Enter question_topic'}
                               className={'h-10  md:h-10 w-auto bg-teal-50 p-1 border-2 border-teal-200'}
                               required={true} name={'question_topic'}/>
                    </div>

                    <div className={'flex flex-col '}>
                        <label>question_type</label>
                        <select className={'h-10  md:h-10 w-auto bg-teal-50 p-1 border-2 border-teal-200'}
                                name={'question_type'}>
                            {/*<option value={1}>Spring 2024</option>*/}
                            <option value={'Objective'}>Objective</option>
                            <option value={'Subjective'}>Subjective</option>
                        </select>
                    </div>

                    <div className={'flex flex-col '}>
                        <label>question</label>
                        <input type={'text'} placeholder={'Enter question'}
                               className={'h-10  md:h-10 w-auto bg-teal-50 p-1 border-2 border-teal-200'}
                               required={true} name={'question'}/>
                    </div>

                    <div className={'flex flex-col '}>
                        <label>option_1</label>
                        <input type={'text'} placeholder={'Enter option_1'}
                               className={'h-10  md:h-10 w-auto bg-teal-50 p-1 border-2 border-teal-200'}
                               required={true} name={'option_1'}/>
                    </div>

                    <div className={'flex flex-col '}>
                        <label>option_2</label>
                        <input type={'text'} placeholder={'Enter option_2'}
                               className={'h-10  md:h-10 w-auto bg-teal-50 p-1 border-2 border-teal-200'}
                               required={true} name={'option_2'}/>
                    </div>

                    <div className={'flex flex-col '}>
                        <label>option_3</label>
                        <input type={'text'} placeholder={'Enter option_3'}
                               className={'h-10  md:h-10 w-auto bg-teal-50 p-1 border-2 border-teal-200'}
                               required={true} name={'option_3'}/>
                    </div>

                    <div className={'flex flex-col '}>
                        <label>option_4</label>
                        <input type={'text'} placeholder={'Enter option_4'}
                               className={'h-10  md:h-10 w-auto bg-teal-50 p-1 border-2 border-teal-200'}
                               required={true} name={'option_4'}/>
                    </div>

                    <div className={'flex flex-col '}>
                        <label>option_5</label>
                        <input type={'text'} placeholder={'Enter option_5'}
                               className={'h-10  md:h-10 w-auto bg-teal-50 p-1 border-2 border-teal-200'}
                               required={true} name={'option_5'}/>
                    </div>

                    <div className={'flex flex-col '}>
                        <label>answer</label>
                        <input type={'text'} placeholder={'Enter answer'}
                               className={'h-10  md:h-10 w-auto bg-teal-50 p-1 border-2 border-teal-200'}
                               required={true} name={'answer'}/>
                    </div>

                    <div className={'flex flex-col '}>
                        <label>gallery</label>
                        <input type={'text'} placeholder={'Enter gallery'}
                               className={'h-10  md:h-10 w-auto bg-teal-50 p-1 border-2 border-teal-200'}
                               required={true} name={'gallery'}/>
                    </div>

                </div>
                <button type={'submit'}
                        className={'text-md bg-teal-950 text-teal-300 rounded-lg uppercase hover:bg-teal-800 p-2 px-6 py-2 mt-2'}>Register
                </button>
            </form>
        </div>
    )
}