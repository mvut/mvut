import {useEffect, useState} from "react";

export default function Countdown(){
    const [days, setDays] = useState<number>(0);
    const [hours, setHours] = useState<number>(0);
    const [minutes, setMinutes] = useState<number>(0);
    const [seconds, setSeconds] = useState<number>(0);

    const deadline = "December, 31, 2024";

    const getTime = ()=>{
        const time = Date.parse(deadline) -  Date.now();
        setDays(Math.floor(time/(1000*60*60*24)));
        setHours(Math.floor(time/(1000*60*60)%24));
        setMinutes(Math.floor((time/1000*60)%60));
        setSeconds(Math.floor((time/1000)%60));
    }

    useEffect(()=>{
        const interval = setInterval(()=>getTime(),1000);
        return ()=> clearInterval(interval);
    },[])

    return(
        <div className={'flex flex-col sm:gap-4 text-white py-4'}>
            <p className={'text-lg sm:text-2xl'}>Deadline</p>
            <div className={'flex flex-row gap-2 text-xs'}>
                <div className={'flex flex-col '}>
                    <label className={'text-teal-400'}>Days</label>
                    <h1 className={'text-xl'}>{days < 10 ? '0' + days : days}</h1>
                </div>
                <div className={'flex flex-col '}>
                    <label className={'text-teal-400'}>Hours</label>
                    <h1 className={'text-xl'}>{hours < 10 ? '0' + hours : hours}</h1>
                </div>
                <div className={'flex flex-col '}>
                    <label className={'text-teal-400'}>Minutes</label>
                    <h1 className={'text-xl'}>{minutes < 10 ? '0' + minutes : minutes}</h1>
                </div>
                <div className={'flex flex-col '}>
                    <label className={'text-teal-400'}>Seconds</label>
                    <h1 className={'text-xl'}>{seconds < 10 ? '0' + seconds : seconds}</h1>
                </div>
            </div>
        </div>
    )
}