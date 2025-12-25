import React from "react"
import Hero from "./Hero/Hero"
import Service from "./Services/Service"
import Resume from "./Resume/Resume"
import Projects from "./Projects/Projects"

const Home = () => {
	return (
		<div className="overflow-hidden text-5xl text-foreground">
			<Hero />
			<Service />
			<Resume />
			<Projects />
		</div>
	)
}

export default Home
