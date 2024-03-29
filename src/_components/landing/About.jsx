import LandingSection from "./LandingSection"

const content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

export default function About() {
    return (
        <div className="flex justify-center relative bg-p-gunmetal py-16">
            <LandingSection>
                <div className="flex flex-col text-center">
                    <h1>About Me</h1>
                    <p className="mt-8">{content}</p>
                </div>
            </LandingSection>
        </div>
    )
}
