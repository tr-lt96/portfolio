import LandingSection from "./LandingSection"
import Image from "next/image"
import { motion } from "framer-motion"

const content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

export default function About() {
    return (
        <div className="flex justify-center relative py-16">
            <LandingSection>
                <div className="flex flex-col text-center md:flex-row md:text-left items-center md:items-start gap-16">
                    <div className="min-w-40 w-40 h-40 relative">
                        <Image src="/profile.jpg" alt="" fill style={{ objectFit: 'cover' }} className='blue-filter rounded-full border-4 border-p-cinnabar' />
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
