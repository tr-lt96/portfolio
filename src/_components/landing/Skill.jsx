"use client";
import React from 'react'
import LandingSection from './LandingSection';
import SKILLS from '@/_data/skills'
import { fontSecondary } from '@/_utils/fonts';
import { motion } from "framer-motion"
import SkillThumbnail from "@/_components/illustration/SkillThumbnail"

export default function Skill() {

    return (
        <div className="flex justify-center relative py-16">
            <LandingSection>
                <div className="flex flex-col text-center items-center w-full gap-8">
                    <SkillThumbnail className={'w-14 h-14 md:w-20 md:h-20'}/>
                    <h1>Skills & Experiences</h1>
                    <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
                        {SKILLS.map(({ title, description, Icon }, index) => (
                            <motion.div key={`skill-${title}`} className='border-2 border-p-charcoal rounded-2xl flex flex-col p-4 gap-4 text-left min-h-[120px] md:min-h-0' style={{rotateY: "90deg"}} whileInView={{rotateY: 0}} transition={{duration: 0.5, delay: index * 0.25}} viewport={{once: true}}>
                                <div className='flex flex-col md:flex-row gap-4 items-center justify-center md:justify-start'>
                                    <div className='w-12 h-12 p-2 rounded-full bg-p-charcoal/30'>
                                        <Icon/>
                                    </div>
                                    <h5 className={`${fontSecondary.className} uppercase text-p-cinnabar text-center md:text-left`}>{title}</h5>
                                </div>
                                {/* <p className='mt-2'>{description}</p> */}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </LandingSection>
        </div>
    )
}
