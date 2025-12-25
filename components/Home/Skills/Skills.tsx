"use client"
import React from "react"
import Tilt from "react-parallax-tilt"
import {
	SiSolidity,
	SiNextdotjs,
	SiTypescript,
	SiNodedotjs,
	SiTailwindcss,
	SiMongodb,
	SiEthereum,
	SiReact,
	SiCplusplus,
} from "react-icons/si"
import { FaMicrochip } from "react-icons/fa6"

const skills = [
	{
		name: "Solidity",
		icon: <SiSolidity />,
	},
	{
		name: "Next.js",
		icon: <SiNextdotjs />,
	},
	{
		name: "TypeScript",
		icon: <SiTypescript />,
	},
	{
		name: "Node.js",
		icon: <SiNodedotjs />,
	},
	{
		name: "Embedded Systems",
		icon: <FaMicrochip />,
	},
	{
		name: "C++",
		icon: <SiCplusplus />,
	},
	{
		name: "Web3 Integration",
		icon: <SiEthereum />,
	},
	{
		name: "React",
		icon: <SiReact />,
	},
	{
		name: "MongoDB",
		icon: <SiMongodb />,
	},
	{
		name: "Tailwind CSS",
		icon: <SiTailwindcss />,
	},
]

const Skills = () => {
	return (
		<div className="container py-16">
			<h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-foreground">
				My <span className="text-accent">Skills</span>
			</h1>

			<div className="w-[90%] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-16">
				{skills.map((skill) => {
					return (
						<Tilt key={skill.name} scale={1.1} transitionSpeed={2500} tiltMaxAngleX={15} tiltMaxAngleY={15}>
							<div className="bg-tertiary-dark h-full p-6 rounded-2xl flex flex-col items-center justify-center shadow-lg cursor-pointer transition-all duration-300 group">
								<div className="text-5xl md:text-6xl mb-4 text-foreground opacity-80 group-hover:text-accent group-hover:opacity-100 transition-all duration-300">
									{skill.icon}
								</div>
								<p className="text-accent text-lg md:text-xl font-medium text-center group-hover:text-white transition-colors duration-300">
									{skill.name}
								</p>
							</div>
						</Tilt>
					)
				})}
			</div>
		</div>
	)
}

export default Skills
