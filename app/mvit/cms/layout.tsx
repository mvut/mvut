import Link from "next/link";
export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>)
{
    return (
        <div className={'flex'}>
           <div className={'flex flex-col text-gray-200 text-xl cursor-pointer w-1/6 bg-teal-950 pl-2 pt-2'}>
               <Link href={'/mvit/cms'}>Home</Link>
               <Link href={'/mvit/cms/add-user'}>Add User</Link>
           </div>
            <div className={'flex w-5/6'}>
                {children}
            </div>

        </div>
    )
}