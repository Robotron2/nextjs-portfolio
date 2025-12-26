export const NavLinks = [
	{ id: 1, url: "/", label: "Home" },
	{ id: 2, url: "#services", label: "Services" },
	{ id: 3, url: "#resume", label: "Resume" },
	{ id: 4, url: "#projects", label: "Works" },
	{ id: 5, url: "#skills", label: "Skills" },
	// { id: 6, url: "#", label: "Testimonials" },
	{ id: 7, url: "#contact", label: "Contact" },
]
import { SiSolidity, SiNextdotjs } from "react-icons/si"
import { FaServer, FaCogs } from "react-icons/fa"

export const ServiceData = [
	{
		id: 1,
		icon: SiSolidity,
		name: "Smart Contract Engineering",
		description:
			"Writing secure, gas-optimized Solidity smart contracts for DeFi protocols, NFTs, and DAOs, ensuring vulnerability-free logic.",
	},
	{
		id: 2,
		icon: SiNextdotjs,
		name: "dApp Frontend Architecture",
		description:
			"Building responsive, high-performance decentralized application interfaces using Next.js and Tailwind, integrated with Ethers.js/Wagmi.",
	},
	{
		id: 3,
		icon: FaServer,
		name: "Full-Stack Web Development",
		description:
			"Developing scalable traditional web applications with the MERN stack (MongoDB, Express, React, Node.js) and custom REST APIs.",
	},
	{
		id: 4,
		icon: FaCogs,
		name: "System Architecture & Logic",
		description:
			"Designing complex backend algorithms and map-agnostic logic (like geospatial routing) for custom software solutions.",
	},
]
