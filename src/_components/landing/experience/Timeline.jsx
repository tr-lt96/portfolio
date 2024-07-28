"use client";
import { fontSecondary } from '@/_utils/fonts';
import React from 'react'
import EXP from './data/experience';

const MONTH = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

const SORTED_EXP = EXP.sort((exp1, exp2) => {
    const currentYear = (new Date()).getFullYear()
    const toDate1 = exp1.to?.getFullYear() || currentYear
    const toDate2 = exp2.to?.getFullYear() || currentYear

    return toDate2 - toDate1
})

const EXP_BY_YEAR = SORTED_EXP.reduce((prev, exp, _index) => {

    const toYear = (exp.to || new Date()).getFullYear()
    const fromYear = exp.from.getFullYear()

    if (!prev[toYear]) {
        prev[toYear] = []
    }

    if (!prev[fromYear]) {
        prev[fromYear] = []
    }

    prev[toYear].push(exp)
    return prev
}, {})

const YEAR_KEYS = Object.keys(EXP_BY_YEAR).sort((a, b) => parseInt(b) - parseInt(a))

const TimeSection = ({ item, index, isLatestYear }) => {
    const { company, title, from, to, description } = item

    const [fromMonth, fromYear] = [from.getMonth(), from.getFullYear()]
    const [toMonth, toYear] = [to?.getMonth(), (to || new Date()).getFullYear()]

    const fromDate = `${fromMonth !== undefined ? MONTH[fromMonth] : ""} ${fromYear}`
    const toDate = toYear ? `${toMonth !== undefined ? MONTH[toMonth] : ""} ${toYear}` : ""
    const isCurrentYear = toYear === (new Date()).getFullYear()
    return (
        <>
            <div className="flex items-start gap-x-1 lg:gap-x-2 md:col-start-1 h-full">
                <span className={`w-2 h-full ${isCurrentYear ? "bg-d-primary" : "bg-d-primary/10"} ${isLatestYear && index === 0 && "rounded-t-lg"}`}></span>
                {index === 0 && <span className={`${fontSecondary.className} font-light  lg:text-xl text-d-foreground/50`}>{toYear}</span>}
            </div>
            <div className={"flex flex-col min-h-[160px] gap-2"}>
                <div className={"flex gap-2 font-medium"}>
                    <h4 className={"text-d-primary"}>{title}</h4>
                    <h4>@</h4>
                    <h4>{company}</h4>
                </div>
                <h5 className={"font-light"}>{fromDate} - {!!to ? toDate : 'current'}</h5>
                <p className="mt-2">{description}</p>
            </div>
        </>
    )
}

export default function Timeline() {
    return YEAR_KEYS.map((year, yearIndex) => {
        return EXP_BY_YEAR[year].map((exp, index) => {
            return (
                <React.Fragment key={`exp-${year}-${index}`}>
                    <TimeSection item={exp} index={index} isLatestYear={yearIndex === 0}/>
                </React.Fragment>
            )
        })
    })
}