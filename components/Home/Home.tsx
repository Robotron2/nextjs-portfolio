import React from "react"
import Hero from "./Hero/Hero"
import Service from "./Services/Service"

const Home = () => {
	return (
		<div className="overflow-hidden text-5xl text-foreground">
			<Hero />
			<Service />
		</div>
	)
}

export default Home
