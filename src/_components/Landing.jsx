"use client";
import About from "./landing/About";
import Hero from "./landing/Hero";
import Portfolio from "./landing/Portfolio";
import Skill from "./landing/Skill"

export default function Landing() {
    return (
        <div className="flex flex-col content-center w-full">
            <Hero />
            <About />
            <Skill />
            <Portfolio />
        </div>
    )
}
