// "use client"

// import Image from "next/image"
// import Link from "next/link" // Import Link
// import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs"
// import TypewriterComponent from "typewriter-effect"
// import ParticlesHero from "./ParticleBackground"

// const Hero = () => {
// 	return (
// 		<div
// 			className="relative h-screen flex items-center justify-center overflow-hidden flex-col bg-[#0f142e"
// 			id="about">
// 			<ParticlesHero />

// 			{/* Main Content */}
// 			<div className="container relative z-10 flex flex-col items-center mt-14 md:-mt-16 w-[90%] mx-auto">
// 				<div className="relative">
// 					<Image
// 						data-aos="fade-up"
// 						src="/images/Robotronpfp.png"
// 						alt="Theophilus"
// 						width={180}
// 						height={180}
// 						className="rounded-full border-[6px] border-accent/30 shadow-2xl object-cover"
// 					/>
// 				</div>

// 				<h1
// 					className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-8 text-center font-bold tracking-tight text-white leading-tight"
// 					data-aos="fade-up"
// 					data-aos-delay="200">
// 					Architecting Scalable <br />
// 					<span className="text-accent bg-clip-text bg-gradient-to-r from-accent to-accent-dark">
// 						Decentralized Applications
// 					</span>
// 				</h1>

// 				<h2
// 					className="mt-6 text-base px-2 text-center sm:text-2xl text-gray-300 font-medium flex flex-col sm:flex-row items-center gap-2"
// 					data-aos="fade-up"
// 					data-aos-delay="400">
// 					<span>Hi, I&apos;m Theophilus. I am a</span>
// 					<span className="text-accent font-bold">
// 						<TypewriterComponent
// 							options={{
// 								strings: [
// 									"Full Stack Web3 Dev",
// 									"Smart Contract Engineer",
// 									"React/Next.js Specialist",
// 									"Solidity Developer",
// 								],
// 								autoStart: true,
// 								loop: true,
// 								delay: 50,
// 								deleteSpeed: 30,
// 								wrapperClassName: "pl-2",
// 							}}
// 						/>
// 					</span>
// 				</h2>

// 				<p
// 					className="mt-4 text-center text-gray-400 max-w-2xl text-sm sm:text-base"
// 					data-aos="fade-up"
// 					data-aos-delay="600">
// 					Building secure, user-centric interfaces connected to the blockchain. Merging clean code with
// 					complex backend logic.
// 				</p>

// 				{/* CTA Buttons */}
// 				<div
// 					className="mt-8 flex flex-col sm:flex-row items-center gap-6"
// 					data-aos="fade-up"
// 					data-aos-delay="800">
// 					<Link
// 						href="#projects"
// 						className="px-8 py-3.5 bg-accent hover:bg-accent-dark transition-all duration-300 cursor-pointer rounded-full text-white text-base font-semibold shadow-lg hover:shadow-accent/50 flex items-center">
// 						<span>View Projects</span>
// 						<BsArrowRight className="w-5 h-5 ml-2" />
// 					</Link>

// 					<div className="flex items-center gap-6">
// 						<Link
// 							href="https://github.com/robotron2"
// 							target="_blank"
// 							className="text-gray-400 hover:text-white transition-colors duration-300">
// 							<BsGithub className="w-7 h-7" />
// 						</Link>
// 						<Link
// 							href="https://www.linkedin.com/in/the0ph1lus"
// 							className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
// 							<BsLinkedin className="w-7 h-7" />
// 						</Link>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	)
// }

// export default Hero

// "use client"

// import Image from "next/image"
// import Link from "next/link"
// import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs"
// import TypewriterComponent from "typewriter-effect"
// import ParticlesHero from "./ParticleBackground"

// const Hero = () => {
// 	return (
// 		<div className="relative min-h-screen w-full flex items-center overflow-hidden bg-[#0f142e]" id="about">
// 			<ParticlesHero />

// 			<div className="container relative z-10 w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center py-20 lg:py-0">
// 				{/* 1. Left Content: Text Stack */}
// 				<div className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
// 					<p className="text-white text-lg font-medium mb-2 opacity-90" data-aos="fade-up">
// 						Hello, My Name Is
// 					</p>

// 					<h1
// 						className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.1] mb-6"
// 						data-aos="fade-up"
// 						data-aos-delay="200">
// 						Theophilus <br />
// 						<span className="text-accent">Adeleke</span>
// 					</h1>

// 					<div
// 						className="flex items-center gap-3 mb-8 text-gray-300 text-lg sm:text-2xl font-medium"
// 						data-aos="fade-up"
// 						data-aos-delay="400">
// 						<span className="w-12 h-[2px] bg-accent hidden sm:block"></span>
// 						<p>A Creative</p>
// 						<span className="text-white font-bold">
// 							<TypewriterComponent
// 								options={{
// 									strings: ["Full Stack Web3 Dev", "Smart Contract Engineer", "Next.js Specialist"],
// 									autoStart: true,
// 									loop: true,
// 								}}
// 							/>
// 						</span>
// 					</div>

// 					{/* CTA Section */}
// 					<div
// 						className="flex flex-col sm:flex-row items-center gap-8"
// 						data-aos="fade-up"
// 						data-aos-delay="600">
// 						<Link
// 							href="#projects"
// 							className="group relative px-10 py-4 bg-accent overflow-hidden rounded-full text-white font-bold tracking-wider transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(0,255,255,0.3)]">
// 							<span className="relative z-10 flex items-center">
// 								KNOW MORE{" "}
// 								<BsArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-2" />
// 							</span>
// 						</Link>

// 						<div className="flex items-center gap-6">
// 							<Link
// 								href="https://github.com/robotron2"
// 								target="_blank"
// 								className="text-gray-400 hover:text-white transition-all text-3xl">
// 								<BsGithub />
// 							</Link>
// 							<Link href="#" className="text-gray-400 hover:text-blue-400 transition-all text-3xl">
// 								<BsLinkedin />
// 							</Link>
// 						</div>
// 					</div>
// 				</div>

// 				{/* 2. Right Content: The Image Layout Fix */}
// 				<div className="relative flex justify-center items-end order-1 lg:order-2 h-full min-h-[400px]">
// 					{/* The Background Glow (Matches the reference's atmospheric feel) */}
// 					<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accent/10 rounded-full blur-[120px] -z-10"></div>

// 					<div
// 						className="relative w-full max-w-[500px] aspect-[4/5] lg:aspect-square"
// 						data-aos="zoom-in"
// 						data-aos-delay="400">
// 						<Image
// 							src="/images/Robotronpfp.png"
// 							alt="Theophilus"
// 							fill
// 							priority
// 							className="object-contain lg:object-cover rounded-2xl lg:rounded-none lg:rounded-tl-[100px] lg:rounded-br-[100px] grayscale-[20%] hover:grayscale-0 transition-all duration-700"
// 						/>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	)
// }

// export default Hero

// "use client"

// import Image from "next/image"
// import Link from "next/link"
// import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs"
// import TypewriterComponent from "typewriter-effect"
// import ParticlesHero from "./ParticleBackground"

// const Hero = () => {
// 	return (
// 		<div className="relative min-h-screen w-full flex items-center overflow-hidden bg-[#0f142e]" id="about">
// 			<ParticlesHero />

// 			<div className="container relative z-10 w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center py-20 lg:py-0">
// 				{/* Left Content: Text Stack */}
// 				<div className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
// 					<p className="text-white/70 text-base sm:text-lg font-light mb-3 tracking-wide" data-aos="fade-up">
// 						Hello, My Name Is
// 					</p>

// 					<h1
// 						className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.1] mb-4"
// 						data-aos="fade-up"
// 						data-aos-delay="200">
// 						Theophilus <span className="text-accent">Adeleke</span>
// 					</h1>

// 					<div
// 						className="flex items-center gap-3 mb-10 text-gray-400 text-lg sm:text-2xl font-light"
// 						data-aos="fade-up"
// 						data-aos-delay="400">
// 						<span className="w-12 h-[1px] bg-accent hidden sm:block"></span>
// 						<div className="flex flex-wrap justify-center lg:justify-start gap-x-2">
// 							<span>A Creative</span>
// 							<span className="text-accent font-bold">
// 								<TypewriterComponent
// 									options={{
// 										strings: [
// 											"Full Stack Web3 Dev",
// 											"Smart Contract Engineer",
// 											"React/Next.js Specialist",
// 											"Solidity Developer",
// 										],
// 										autoStart: true,
// 										loop: true,
// 										delay: 50,
// 										deleteSpeed: 30,
// 									}}
// 								/>
// 							</span>
// 						</div>
// 					</div>

// 					{/* CTA Section */}
// 					<div
// 						className="flex flex-col sm:flex-row items-center gap-8"
// 						data-aos="fade-up"
// 						data-aos-delay="600">
// 						<Link
// 							href="#projects"
// 							className="group relative px-10 py-4 bg-accent overflow-hidden rounded-full text-white font-bold tracking-wider transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(0,255,255,0.3)] text-sm uppercase">
// 							<span className="relative z-10 flex items-center">
// 								KNOW MORE
// 								<BsArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-2" />
// 							</span>
// 						</Link>

// 						<div className="flex items-center gap-6">
// 							<Link
// 								href="https://github.com/robotron2"
// 								target="_blank"
// 								className="text-gray-400 hover:text-white transition-all text-3xl">
// 								<BsGithub />
// 							</Link>
// 							<Link
// 								href="https://www.linkedin.com/in/the0ph1lus"
// 								target="_blank"
// 								className="text-gray-400 hover:text-blue-400 transition-all text-3xl">
// 								<BsLinkedin />
// 							</Link>
// 						</div>
// 					</div>
// 				</div>

// 				{/* Right Content: The "Diffusion" Image Layout */}
// 				<div className="relative flex justify-center lg:justify-end items-end order-1 lg:order-2 h-full min-h-[500px] lg:min-h-[700px]">
// 					{/* Atmospheric Glow */}
// 					<div className="absolute top-1/2 right-0 -translate-y-1/2 w-[70%] h-[70%] bg-accent/10 rounded-full blur-[120px] -z-10"></div>

// 					<div
// 						className="relative w-full max-w-[500px] lg:max-w-[650px] aspect-[4/5] lg:aspect-[3/4]"
// 						data-aos="fade-left"
// 						data-aos-delay="400">
// 						{/* 1. Gradient Overlay for Left-to-Right Diffusion */}
// 						<div className="absolute inset-0 bg-gradient-to-r from-[#0f142e] via-transparent to-transparent z-10"></div>

// 						{/* 2. Gradient Overlay for Bottom Diffusion */}
// 						<div className="absolute inset-0 bg-gradient-to-t from-[#0f142e] via-transparent to-transparent z-10"></div>

// 						<Image
// 							src="/images/Robotronpfp.png"
// 							alt="Theophilus Adeleke"
// 							fill
// 							priority
// 							className="object-cover grayscale-[20%] brightness-90 transition-all duration-700 hover:grayscale-0 hover:brightness-100"
// 							style={{
// 								objectPosition: "center top",
// 								maskImage:
// 									"linear-gradient(to left, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%), linear-gradient(to top, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)",
// 								WebkitMaskImage:
// 									"linear-gradient(to left, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%), linear-gradient(to top, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)",
// 							}}
// 						/>
// 					</div>
// 				</div>
// 			</div>

// 			{/* Bottom transition to next section */}
// 			<div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0f142e] to-transparent z-20"></div>
// 		</div>
// 	)
// }

// export default Hero

"use client"

import Image from "next/image"
import Link from "next/link"
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs"
import TypewriterComponent from "typewriter-effect"
import ParticlesHero from "./ParticleBackground"

const Hero = () => {
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
						className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.1] mb-4"
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
							priority
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
