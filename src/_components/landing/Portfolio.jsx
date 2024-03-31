"use client";
import React from 'react'
import { fontSecondary } from '@/_utils/fonts';
import PORTFOLIO from "@/_data/portfolio"
import LandingSection from "./LandingSection"

const content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

export default function Portfolio() {
    return (
        <div className="flex justify-center relative bg-p-blue py-16">
            <LandingSection>
                <div className="flex flex-col text-center">
                    <h1>Portfolio</h1>
                    <div className='mt-8 columns-1 md:columns-3 gap-4'>
                        {PORTFOLIO.map(({ title, description, img }) => (
                            <div key={`skill-${title}`} className='border-2 border-p-charcoal rounded-2xl flex flex-col p-4 gap-4 text-left h-fit mb-4 break-inside-avoid'>
                                <h5 className={`${fontSecondary.className} uppercase text-p-cinnabar text-center md:text-left`}>{title}</h5>
                                <p className='mt-2 line-clamp-3'>{description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </LandingSection>
        </div>
    )
}
