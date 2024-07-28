"use client";
import About from "./landing/about/About";
import Experience from "./landing/experience/Experience";
import Hero from "./landing/Hero";
import Project from "./landing/projects/Project";
import Skill from "./landing/skills/Skill";

export default function Landing() {
  return (
    <div className="flex flex-col gap-y-32">
      <Hero />
      <About />
      <Skill />
      <Experience/>
      <Project/>
    </div>
  );
}
