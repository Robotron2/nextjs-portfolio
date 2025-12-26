import React from "react"
import Hero from "./Hero/Hero"
import Service from "./Services/Service"
import Resume from "./Resume/Resume"
import Projects from "./Projects/Projects"
import Skills from "./Skills/Skills"
import Contact from "./Contact/Contact"
import Footer from "./Footer/Footer"

const Home = () => {
	return (
		<div className="overflow-hidden text-5xl text-foreground">
			<Hero />
			<Service />
			<Resume />
			<Projects />
			<Skills />
			<Contact />
			<Footer />
		</div>
	)
}

export default Home
