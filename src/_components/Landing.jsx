"use client";
import About from "./landing/About";
import Hero from "./landing/Hero";
import Project from "./landing/Project";
import Skill from "./landing/Skill"

export default function Landing() {
    return (
        <div className="flex flex-col content-center w-full">
            <Hero />
            <About />
            <Skill />
            <Project />
        </div>
    )
}
