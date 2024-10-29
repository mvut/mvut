import Link from "next/link";

export default function TopHeaderComponent(){
    return(
        <div className={'flex items-center justify-center text-gray-100 text-center bg-blue-600 py-1'}>
            <p className={'text-sm'}>Become a skilled professional and demonstrate the true value of your degree. Elon Musk
                {/*<Link href={'/pages/apply'} className={'text-sm text-amber-200'}>Apply</Link>*/}
            </p>

        </div>
    )
}