"use client";
import React from 'react'
import LandingSection from '../LandingSection';
import { ExcelIcon, PythonIcon, JupyterIcon, TableauIcon, SQLIcon, SkillsIcon } from './icons'
import { COLORS } from '@/_data/constants';
import SKILLS from './data/skills';

const SkillPill = ({ skillItem }) => {
    const { title, Icon, color } = skillItem
    const { bg, text, fill } = color || COLORS.foreground
    return (
        <div className={`flex flex-nowrap items-center bg-opacity-20 ${bg} ${text} ${fill} rounded-lg gap-2 px-4 py-2`}>
            <Icon className={`w-7 h-7 ${fill}`} />
            <p className="uppercase">{title}</p>
        </div>
    )
}

export default function Skill() {
    return (
        <LandingSection title="skills" TitleIcon={SkillsIcon}>
            <div className={"flex flex-wrap gap-4 md:col-start-2"}>
                {SKILLS.map((skill, index) => {
                    return <SkillPill skillItem={skill} key={`skill-${index + 1}-${skill.title}`} />
                })}
            </div>
        </LandingSection>
    )
}
