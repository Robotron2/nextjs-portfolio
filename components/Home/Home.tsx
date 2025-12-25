import React from "react"
import Hero from "./Hero/Hero"
import Service from "./Services/Service"
import Resume from "./Resume/Resume"
import Projects from "./Projects/Projects"
import Skills from "./Skills/Skills"

const Home = () => {
	return (
		<div className="overflow-hidden text-5xl text-foreground">
			<Hero />
			<Service />
			<Resume />
			<Projects />
			<Skills />
		</div>
	)
}

export default Home
