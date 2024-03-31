"use client";
import Link from 'next/link';
import Image from 'next/image'
import { fontSecondary } from '@/_utils/fonts';

export default function Header() {
    return (
        <>
            {/* header */}
            <div className="flex justify-end align-items-center py-2 px-8 w-full fixed z-50 backdrop-blur-md">
                <button type="button" className={`${fontSecondary.className} rounded-lg bg-p-cinnabar py-2 px-4 uppercase text-base`}>Download CV</button>
            </div>
        </>
    )
}

