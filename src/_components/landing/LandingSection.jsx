import { fontSecondary } from "@/_utils/fonts"

export default function LandingSection({ children, ...props }) {
    const {title, TitleIcon, ...sanitisedProps} = props
    return (
        <div className="max-w-[1160px] w-full px-8" {...sanitisedProps}>
            <section className="grid section-template">
                <div className="md:col-start-2 flex gap-4 items-end mb-16">
                    <TitleIcon className="w-9 h-9 fill-d-primary text-d-primary"/>
                    <h2 className="font-normal">{title}</h2>
                </div>
                {children}
            </section>
        </div>
    )
}