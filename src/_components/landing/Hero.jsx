import LandingSection from './LandingSection';
import { fontSecondary } from '@/_utils/fonts';
import { motion } from "framer-motion"

const titles = ["Data Analyst", "Data Scientist", "Software Engineer"]
export default function Hero() {
  return (
    <div className="hero-bg m-auto h-screen w-full relative">
      <div className="flex justify-center h-full items-center">
        {/* <Image src="/hero-bg.png" alt="" fill className={"z-0 opacity-10 w-screen invert"} style={{ objectFit: "cover" }} /> */}
        <LandingSection>
          <div className='z-10 flex flex-col w-full justify-center gap-y-4'>
            {/* <div className='w-40 h-40 relative'>
              <Image src="/profile.jpg" alt="" fill style={{ objectFit: 'cover' }} className='rounded-full border-2 border-p-charcoal' />
            </div> */}
            <div className={`typewriter-text text-3xl md:text-[48px] leading-tight text-p-cinnabar font-semibold text-nowrap max-w-fit`}>
              {`Hi, I'm `}
              <span className='text-p-cornsilk pr-4'>Luke Tran</span>
            </div>
            <motion.div className={`${fontSecondary.className} text-p-cinnabar uppercase flex flex-col md:flex-row opacity-0`} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.5, ease: "anticipate" }}>
              {titles.map((title) => (
                <h3 key={`hero-${title}`} className="border-l-2 pl-2 py-1 md:border-l-0 md:border-r-2 last:border-r-0 md:first:pl-0 md:px-4 text-p-cinnabar border-p-charcoal">{title}</h3>
              ))}
            </motion.div>
          </div>
        </LandingSection>

      </div>
    </div>
  );
}
