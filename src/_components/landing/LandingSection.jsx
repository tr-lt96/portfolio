export default function LandingSection({children, ...props}){
    return (
        <div className="max-w-[1000px] w-full px-8 md:px-12" {...props}>
            {children}
        </div>
    )
}