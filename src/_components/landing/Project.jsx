"use client";
import React from 'react'
import { fontSecondary } from '@/_utils/fonts';
import PORTFOLIO from "@/_data/portfolio"
import LandingSection from "./LandingSection"
import { motion } from "framer-motion"
import Link from "next/link"
import PortfolioThumbnail from "@/_components/illustration/PortfolioThumbnail"
import { PROJECT_FOLDER } from '@/_data/constants';

export default function Project() {
    return (
        <div className="flex justify-center relative py-16">
            <LandingSection>
                <div className="flex flex-col text-center items-center gap-8">
                    <PortfolioThumbnail className={'w-14 h-14 md:w-20 md:h-20'}/>
                    <h1>Portfolio</h1>
                    <div className='columns-1 md:columns-3 gap-4'>
                        {PORTFOLIO.map(({ title, description, publicId }, index) => (
                            <Link href={`/project/${index + 1}`} key={`skill-${title}`}>
                                <motion.div className='border-2 border-p-charcoal rounded-2xl flex flex-col p-4 gap-4 text-left h-fit mb-4 break-inside-avoid' style={{ rotateY: "90deg" }} whileInView={{ rotateY: 0 }} transition={{ duration: 0.5, delay: index * 0.25 }} viewport={{ once: true }}>
                                    <h5 className={`${fontSecondary.className} uppercase text-p-cinnabar text-center md:text-left`}>{title}</h5>
                                    <p className='mt-2 line-clamp-3'>{description}</p>
                                </motion.div>
                            </Link>
                        ))}
                    </div>
                </div>
            </LandingSection>
        </div>
    )
}
