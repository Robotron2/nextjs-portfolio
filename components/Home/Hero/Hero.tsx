"use client"

import Image from "next/image"
import Link from "next/link" // Import Link
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs"
import TypewriterComponent from "typewriter-effect"
import ParticlesHero from "./ParticleBackground"

const Hero = () => {
	return (
		<div
			className="relative h-screen flex items-center justify-center overflow-hidden flex-col bg-[#0f142e"
			id="about">
			<ParticlesHero />

			{/* Main Content */}
			<div className="container relative z-10 flex flex-col items-center mt-14 md:-mt-16 w-[90%] mx-auto">
				<div className="relative">
					<Image
						data-aos="fade-up"
						src="/images/Robotronpfp.png"
						alt="Theophilus"
						width={180}
						height={180}
						className="rounded-full border-[6px] border-accent/30 shadow-2xl object-cover"
					/>
				</div>

				<h1
					className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-8 text-center font-bold tracking-tight text-white leading-tight"
					data-aos="fade-up"
					data-aos-delay="200">
					Architecting Scalable <br />
					<span className="text-accent bg-clip-text bg-gradient-to-r from-accent to-accent-dark">
						Decentralized Applications
					</span>
				</h1>

				<h2
					className="mt-6 text-base px-2 text-center sm:text-2xl text-gray-300 font-medium flex flex-col sm:flex-row items-center gap-2"
					data-aos="fade-up"
					data-aos-delay="400">
					<span>Hi, I&apos;m Theophilus. I am a</span>
					<span className="text-accent font-bold">
						<TypewriterComponent
							options={{
								strings: [
									"Full Stack Web3 Dev",
									"Smart Contract Engineer",
									"React/Next.js Specialist",
									"Solidity Developer",
								],
								autoStart: true,
								loop: true,
								delay: 50,
								deleteSpeed: 30,
								wrapperClassName: "pl-2",
							}}
						/>
					</span>
				</h2>

				<p
					className="mt-4 text-center text-gray-400 max-w-2xl text-sm sm:text-base"
					data-aos="fade-up"
					data-aos-delay="600">
					Building secure, user-centric interfaces connected to the blockchain. Merging clean code with
					complex backend logic.
				</p>

				{/* CTA Buttons */}
				<div
					className="mt-8 flex flex-col sm:flex-row items-center gap-6"
					data-aos="fade-up"
					data-aos-delay="800">
					<Link
						href="#projects"
						className="px-8 py-3.5 bg-accent hover:bg-accent-dark transition-all duration-300 cursor-pointer rounded-full text-white text-base font-semibold shadow-lg hover:shadow-accent/50 flex items-center">
						<span>View Projects</span>
						<BsArrowRight className="w-5 h-5 ml-2" />
					</Link>

					<div className="flex items-center gap-6">
						<Link
							href="https://github.com/robotron2"
							target="_blank"
							className="text-gray-400 hover:text-white transition-colors duration-300">
							<BsGithub className="w-7 h-7" />
						</Link>
						<Link
							href="https://www.linkedin.com/in/the0ph1lus"
							className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
							<BsLinkedin className="w-7 h-7" />
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Hero
