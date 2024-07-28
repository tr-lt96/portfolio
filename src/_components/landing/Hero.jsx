import LandingSection from './LandingSection';
import { fontSecondary } from '@/_utils/fonts';
import { motion } from "framer-motion"

const titles = ["data analyst", "data scientist", "business analyst"]

const LineNumDecorator = () => {
  return (
    <div className="flex items-start gap-x-1 lg:gap-x-2 md:col-start-1">
      <span className="w-2 bg-d-primary rounded-lg h-full"></span>
      <span className={`${fontSecondary.className} font-light  lg:text-xl text-d-dark`}>{'[1]:'}</span>
    </div>
  )
}
const TitleSection = () => {
  return (
    <div className={`bg-d-dark ${fontSecondary.className} p-4 font-thin leading-normal text-base lg:text-[32px] w-full`}>
      <span className={`text-d-background`}>{'t=['}</span>
      {titles.map((title, index) => {
        return (
          <span key={`${title}-${index}`}>
            <p className={`inline font-thin ${index > 0 && "pl-4"}`}>{`"${title}"`}</p>
            {index < titles.length - 1 && <span className="text-d-background">{','}</span>}
            {index < titles.length - 1 && <br />}
          </span>)
      })}
      <span className={`text-d-background typewriter-text`}>{']'}</span>
    </div>
  )
}

export default function Hero() {
  return (
    <div className="max-w-[1160px] w-full h-screen px-8 flex items-center">
      <div className="grid section-template gap-y-8 w-full">
        <div className="font-normal md:col-start-2">
          <h1 className="inline">{"Hi, I'm"}</h1>
          <h1 className="inline text-d-primary">{" Luke Tran"}</h1>
        </div>
        
        <LineNumDecorator/>
        <TitleSection />
      </div>
    </div>
  )
}