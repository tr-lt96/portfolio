import LandingSection from "../LandingSection"
import ProjectIcon from "./ProjectIcon"
import PROJECTS from "./data/projects"
import ProjectTile from "./ProjectTile"

export default function Project() {
    return (
        <LandingSection title="projects" TitleIcon={ProjectIcon}>
            <div className={"md:col-start-2 columns-1 md:columns-3 gap-4"}>
                {PROJECTS.map((project, index) => {
                    return <ProjectTile key={`project-${index}`} item={project} index={index}/>
                })}
            </div>
        </LandingSection>
    )
}
