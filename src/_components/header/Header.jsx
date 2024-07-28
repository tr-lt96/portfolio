"use client";
import Link from 'next/link';
import { fontSecondary } from '@/_utils/fonts';
import { PROFILE_DATA, RESUME_FILE } from '@/_data/constants';
import { DownloadIcon, GithubIcon, LinkedInIcon } from './icons'
//import { useScroll } from 'framer-motions';

const RESUME_TITLE = "LukeTran_Resume.pdf"
const THEME = {
    transparent: {
        getResumeClassName: "text-d-background bg-d-primary",
        contactMeClassName: "text-d-primary bg-d-primary/20",
        iconClassName: "text-d-primary fill-d-primary"
    },
    solid: {
        getResumeClassName: "text-d-foreground bg-d-background",
        contactMeClassName: "text-d-background bg-d-background/20",
        iconClassName: "text-d-background fill-d-background"
    },
}

const IconLinks = () => {
    return (
        <>
            <GithubIcon className={`w-6 h-6 ${THEME.solid.iconClassName}`} />
            <LinkedInIcon className={`w-6 h-6 ${THEME.solid.iconClassName}`} />
        </>
    )
}
const DownloadResumeLink = () => {
    const href = `/${RESUME_FILE}`

    return (
        <Link href={href} target={"_blank"} download={RESUME_TITLE} className={`rounded-lg flex py-2 px-4 gap-2 text-base ${THEME.solid.getResumeClassName}`}>
            <DownloadIcon className={'w-6 h-6'} />
            <p className={'font-medium'}>Get my resume</p>
        </Link>
    )
}

const ContactMeLink = () => {
    const emailLink = `mailto:${PROFILE_DATA.email}`

    return (
        <Link href={emailLink} target={"_blank"} className={`rounded-lg flex py-2 px-4 gap-4 text-base ${THEME.solid.contactMeClassName}`}>
            <p className={'font-medium'}>Contact me</p>
        </Link>
    )
}

export default function Header() {
    return (
        <>
            {/* header */}
            <div className="flex justify-end align-items-center px-2 max-w-[1160px] w-full fixed z-50 h-fit">
                <div className="flex gap-x-4 w-fit py-2 px-4 h-fit bg-d-primary rounded-b-lg items-center">
                    <IconLinks />
                    <ContactMeLink />
                    <DownloadResumeLink />
                </div>
            </div>
        </>
    )
}

