"use client"
import Image from "next/image"
import React from "react"
import { BsArrowRight } from "react-icons/bs"
import TypewriterComponent from "typewriter-effect"
import ParticlesHero from "./ParticleBackground"

const Hero = () => {
	return (
		<div className="relative h-screen  flex items-center justify-center overflow-hidden flex-col">
			<ParticlesHero />
			<div className="container relative z-10 flex flex-col items-center -mt-16">
				<Image
					src="/images/s1.jpg"
					alt="heroImage"
					width={150}
					height={150}
					className="rounded-full border-8 border-[#0C0C48AA]"
				/>
				<h1 className="text-2xl sm:text-4xl md:text-5xl lg:teext-6xl mt-6 text-center font-bold tracking-wide">
					Creating web products, <br /> <span className="text-accent-dark"> brands and experiences</span>
				</h1>
				<h2 className="mt-5 text-sm px-2 text-center sm:text-2xl font-medium flex items-center">
					Hi! I&apos;m Theophilus - A passionate
					<span className="text-accent font-bold">
						<TypewriterComponent
							options={{
								strings: ["Frontend Developer", "Backend Developer", "Blockchain Developer"],
								autoStart: true,
								loop: true,
								delay: 75,
								deleteSpeed: 50,
								wrapperClassName: "pl-2",
							}}
						/>
					</span>
				</h2>
				<button className="mt-6 px-10 py-4 bg-primary hover:bg-primary-dark transition-all duration-300 cursor-pointer rounded-full text-lg font-medium">
					<span>See my work</span>
					<BsArrowRight className="w-5 h-5 ml-2 inline-block" />
				</button>
			</div>
		</div>
	)
}

export default Hero
