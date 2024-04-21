"use client";
import Link from 'next/link';
import Image from 'next/image'
import { fontSecondary } from '@/_utils/fonts';
import { RESUME_FILE } from '@/_data/constants';

const RESUME_TITLE = "LukeTran_Resume.pdf"
export default function Header() {
    const href = `${process.env.NEXT_PUBLIC_BASE_PATH}/${RESUME_FILE}`

    return (
        <>
            {/* header */}
            <div className="flex justify-end align-items-center py-2 px-8 w-full fixed z-50 backdrop-blur-md">
                <Link href={href} target={"_blank"} download={RESUME_TITLE} className={`${fontSecondary.className} rounded-lg text-p-cinnabar py-2 px-4 uppercase text-base font-semibold border-2 border-p-charcoal`}>Download CV</Link>
            </div>
        </>
    )
}

