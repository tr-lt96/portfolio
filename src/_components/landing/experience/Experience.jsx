import LandingSection from "../LandingSection"
import ExperienceIcon from "./ExperienceIcon"
import Timeline from "./Timeline"

export default function Experience() {
    return (
        <LandingSection title="experience" TitleIcon={ExperienceIcon}>
            <Timeline/>
        </LandingSection>
    )
}
