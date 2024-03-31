"use client";
import React from 'react'
import LandingSection from './LandingSection';
import SKILLS from '@/_data/skills'
import { fontSecondary } from '@/_utils/fonts';

export default function Skill() {
    return (
        <div className="flex justify-center relative py-16">
            <LandingSection>
                <div className="flex flex-col text-center w-full">
                    <h1>Skills & Experiences</h1>

                    <div className='mt-8 grid grid-cols-2 md:grid-cols-3 gap-4'>
                        {SKILLS.map(({ title, description, Icon }) => (
                            <div key={`skill-${title}`} className='border-2 border-p-charcoal rounded-2xl flex flex-col p-4 gap-4 text-left min-h-[120px] md:min-h-0'>
                                <div className='flex flex-col md:flex-row gap-4 items-center justify-center md:justify-start'>
                                    <div className='w-8 md:w-10 h-8 md:h-10'>
                                        <Icon/>
                                    </div>
                                    <h5 className={`${fontSecondary.className} uppercase text-p-cinnabar text-center md:text-left`}>{title}</h5>
                                </div>
                                {/* <p className='mt-2'>{description}</p> */}
                            </div>
                        ))}
                    </div>
                </div>
            </LandingSection>
        </div>
    )
}
