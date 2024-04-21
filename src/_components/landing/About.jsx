import LandingSection from "./LandingSection"
import Image from "next/image"
import { motion } from "framer-motion"
import { PROFILE_PIC } from "@/_data/constants"

const content = `I'm a data analyst with 1 year experience and strong background in medical field and data visualisation. Seeking a challenging position where my analytical skills and expertise in utilising tools such as Excel, Python, and SQL can
contribute to informed decision-making and drive business success.`

export default function About() {
    const profilePic = `${process.env.NEXT_PUBLIC_BASE_PATH}/${PROFILE_PIC}`
    return (
        <div className="flex justify-center relative py-16">
            <LandingSection>
                <div className="flex flex-col text-center md:flex-row md:text-left items-center md:items-start gap-16">
                    <div className="min-w-40 w-40 h-40 relative">
                        <Image src={profilePic} alt="" fill style={{ objectFit: 'cover' }} className='blue-filter rounded-full border-4 border-p-cinnabar' />
                    </div>
                    <div className="w-full">
                        <h1>About Me</h1>
                        <motion.p className="mt-4 md:mt-8 opacity-0" whileInView={{ opacity: 1 }} transition={{ duration: 1, ease: "anticipate" }} viewport={{once: true}}>{content}</motion.p>
                    </div>
                </div>
            </LandingSection>
        </div>
    )
}
