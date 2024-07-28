import LandingSection from "../LandingSection"
import Image from "next/image"
import { motion } from "framer-motion"
import { PROFILE_PIC } from "@/_data/constants"
import AboutIcon from "./AboutIcon"

const content = `I'm a data analyst with 1 year experience and strong background in medical field and data visualisation. Seeking a challenging position where my analytical skills and expertise in utilising tools such as Excel, Python, and SQL can contribute to informed decision-making and drive business success.`

const ProfilePic = () => {
    const profilePic = `${process.env.NEXT_PUBLIC_BASE_PATH}/${PROFILE_PIC}`
    return (
        <div className="min-w-32 w-32 h-32 relative">
            <Image src={profilePic} alt="" fill style={{ objectFit: 'cover' }} className='rounded-[16px]' />
        </div>
    )
}

const pVariants = {
    offscreen: {
        y: 300,
        opacity: 0
    },
    onscreen: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8
        }
    }
};

const imgVariants = {
    offscreen: {
        scale: 0
    },
    onscreen: {
        scale: 1,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8
        }
    }
}

export default function About() {
    return (
        <LandingSection title="about me" TitleIcon={AboutIcon}>
            <motion.article className="md:col-start-2 flex gap-4 lg:gap-8" initial="offscreen" whileInView="onscreen" viewport={{ once: true }}>
                <motion.div className="hidden md:block" variants={imgVariants}>
                    <ProfilePic />
                </motion.div>
                <motion.p className="p-4 lg:p-8 rounded-lg md:rounded-tl-none bg-d-foreground text-d-dark" variants={pVariants}>{content}</motion.p>
            </motion.article>
        </LandingSection>
    )
}
