"use client"

import Image from "next/image"
import Link from "next/link"
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs"
import TypewriterComponent from "typewriter-effect"
import dynamic from "next/dynamic"

const Hero = () => {
	const ParticlesHero = dynamic(() => import("./ParticleBackground"), {
		ssr: false,
		loading: () => <div className="absolute inset-0 bg-[#0f142e]"></div>,
	})
	return (
		<div className="relative min-h-screen w-full flex items-center overflow-hidden bg-[#0f142e]" id="about">
			<ParticlesHero />

			<div className="container relative z-10 w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center py-2 lg:py-8 lg:mt-6">
				{/* Left Content: Text Stack */}
				<div className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
					<p className="text-white/70 text-base sm:text-lg font-light mb-3 tracking-wide" data-aos="fade-up">
						Hello, My Name Is
					</p>

					<h1
						className="text-5xl sm:text-6xl md:text-7xl  font-bold text-white leading-[1.1] mb-4"
						data-aos="fade-up"
						data-aos-delay="200">
						Theophilus <span className="text-accent">Adeleke</span>
					</h1>

					<div
						className="flex items-center gap-3 mb-10 text-gray-400 text-lg sm:text-2xl font-light"
						data-aos="fade-up"
						data-aos-delay="400">
						<span className="w-12 h-[1px] bg-accent hidden sm:block"></span>
						<div className="flex flex-wrap justify-center lg:justify-start gap-x-2">
							<span>A Creative</span>
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
									}}
								/>
							</span>
						</div>
					</div>

					{/* CTA Section */}
					<div
						className="flex flex-col sm:flex-row items-center gap-8"
						data-aos="fade-up"
						data-aos-delay="600">
						<Link
							href="#projects"
							className="group relative px-10 py-4 bg-accent overflow-hidden rounded-full text-white font-bold tracking-wider transition-all duration-300 hover:scale-105 active:scale-95  text-sm uppercase">
							<span className="relative z-10 flex items-center">
								KNOW MORE{" "}
								<BsArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-2" />
							</span>
						</Link>

						<div className="flex items-center gap-6">
							<Link
								href="https://github.com/robotron2"
								target="_blank"
								className="text-gray-400 hover:text-white transition-all text-3xl">
								<BsGithub />
							</Link>
							<Link
								href="https://www.linkedin.com/in/the0ph1lus"
								target="_blank"
								className="text-gray-400 hover:text-blue-400 transition-all text-3xl">
								<BsLinkedin />
							</Link>
						</div>
					</div>
				</div>

				{/* Right Content*/}
				<div className="relative flex justify-center lg:justify-end items-end order-1 lg:order-2 h-full min-h-[500px] lg:min-h-[700px] mt-8">
					<div className="absolute top-1/2 right-[-10%] -translate-y-1/2 w-[70%] h-[70%] bg-accent/5 rounded-full blur-[120px] -z-10"></div>

					<div
						className="relative w-full max-w-[450px] lg:max-w-[550px] aspect-[4/5] lg:aspect-[3/4] rounded"
						data-aos="fade-left"
						data-aos-delay="400">
						<div className="absolute inset-0 bg-gradient-to-l from-[#0f142e] via-transparent to-transparent z-10"></div>

						<div className="absolute inset-0 bg-gradient-to-t from-[#0f142e] via-transparent to-transparent z-10"></div>

						<Image
							src="/images/Robotronpfp.png"
							alt="Theophilus Adeleke"
							fill
							priority={true}
							className="object-cover grayscale-[20%] brightness-90 transition-all duration-700 hover:grayscale-0 hover:brightness-100"
							style={{
								objectPosition: "center op",
								maskImage:
									"linear-gradient(to right, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%), linear-gradient(to top, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)",
								WebkitMaskImage:
									"linear-gradient(to right, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%), linear-gradient(to top, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)",
							}}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Hero
