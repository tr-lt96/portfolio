// Profile data constants
export const PROFILE_DATA = {
    email: "luattran96@gmail.com",
    mobile: "0411",
    github: "",
    linkedIn: ""
}

// Static file names
export const RESUME_FILE = "resume.pdf"
export const PROFILE_PIC = "profile.jpg"
export const PROJECT_FOLDER = "projects"

// Static configs
export const COLORS = ["yellow", "green", "lime", "blue", "orange", "foreground"].reduce((prev, color, _) => {
    return {
        ...prev,
        [color]: {
            bg: `bg-d-${color}`,
            text: `text-d-${color}`,
            fill: `fill-d-${color}`
        }
    }
}, {})