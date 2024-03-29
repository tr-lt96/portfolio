"use client";
import Link from 'next/link';
import Image from 'next/image'

export default function Header() {
    return (
        <>
            {/* header */}
            <header className="flex justify-content-space align-items-center py-2">
                <Link href="/" className='w-fit'>
                    <div className='w-6 h-6'>
                        <Image src="/logo.svg" width={160} height={160} alt='logo'/>
                    </div>
                </Link>
            </header>
        </>
    )
}

