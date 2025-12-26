import React from "react"
import Link from "next/link"
import { FaCode, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"
import { BiEnvelope, BiMap } from "react-icons/bi"

const Footer = () => {
	const date = new Date().getFullYear()
	return (
		<div className="pt-16 pb-8 bg-[#0f142e] ">
			<div className="container w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-10 border-b border-gray-800/50">
				{/* Brand Section */}
				<div className="space-y-6">
					<div className="flex items-center space-x-2">
						<div className="w-10 h-10 bg-foreground rounded-full flex items-center justify-center flex-col">
							<FaCode className="w-5 h-5 text-secondary" />
						</div>
						<h1 className="text-2xl text-foreground font-bold">The0</h1>
					</div>
					<p className="text-foreground opacity-70 leading-relaxed text-sm w-[90%]">
						Architecting scalable decentralized applications and secure smart contracts. Let&apos;s build
						the future of the web together.
					</p>
					<div className="flex items-center space-x-4">
						{[
							{ icon: FaGithub, href: "https://github.com/robotron2" },
							{ icon: FaLinkedin, href: "https://www.linkedin.com/in/the0ph1lus" },
							{ icon: FaTwitter, href: "https://x.com/The0_ph1lus" },
						].map(({ icon: Icon, href }, index) => (
							<Link
								key={index}
								href={href}
								target="_blank"
								className="w-10 h-10 bg-blue-950/30 rounded-full flex items-center justify-center cursor-pointer hover:bg-accent hover:scale-110 transition-all duration-300 group">
								<Icon className="text-foreground group-hover:text-white w-4 h-4 transition-colors duration-300" />
							</Link>
						))}
					</div>
				</div>

				{/* Quick Links */}
				<div>
					<h1 className="text-xl font-bold text-foreground mb-6">Quick Links</h1>
					<ul className="space-y-4 text-sm font-medium text-foreground opacity-80">
						<li>
							<Link href="/" className="hover:text-accent transition-colors duration-200">
								Home
							</Link>
						</li>
						<li>
							<Link href="#about" className="hover:text-accent transition-colors duration-200">
								About
							</Link>
						</li>
						<li>
							<Link href="#services" className="hover:text-accent transition-colors duration-200">
								Services
							</Link>
						</li>
						<li>
							<Link href="#projects" className="hover:text-accent transition-colors duration-200">
								Projects
							</Link>
						</li>
						<li>
							<Link href="#contact" className="hover:text-accent transition-colors duration-200">
								Contact
							</Link>
						</li>
					</ul>
				</div>

				{/* Services/Expertise */}
				<div>
					<h1 className="text-xl font-bold text-foreground mb-6">Expertise</h1>
					<ul className="space-y-4 text-sm font-medium text-foreground opacity-80">
						<li className="flex items-center gap-2">
							<span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
							Smart Contract Development
						</li>
						<li className="flex items-center gap-2">
							<span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
							DApp Architecture
						</li>
						<li className="flex items-center gap-2">
							<span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
							Frontend Integration
						</li>
						<li className="flex items-center gap-2">
							<span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
							Web3 Security Audit
						</li>
					</ul>
				</div>

				{/* Contact Info */}
				<div>
					<h1 className="text-xl font-bold text-foreground mb-6">Get in Touch</h1>
					<div className="space-y-4 text-sm text-foreground opacity-80">
						<div className="flex items-center space-x-3">
							<BiMap className="w-5 h-5 text-accent" />
							<span>Lagos, Nigeria</span>
						</div>
						<div className="flex items-center space-x-3">
							<BiEnvelope className="w-5 h-5 text-accent" />
							<span>theophilusadesola002@gmail.com</span>
						</div>
						{/* Status Indicator */}
						<div className="pt-4 flex items-center gap-2">
							<span className="relative flex h-3 w-3">
								<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
								<span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
							</span>
							<span className="text-green-400 text-xs font-semibold">Available for Freelance</span>
						</div>
					</div>
				</div>
			</div>

			{/* Bottom Bar */}
			<div className="w-[90%] mx-auto mt-6 flex flex-col md:flex-row items-center justify-between text-foreground opacity-60 text-sm">
				<p>© {date} Theophilus. All Rights Reserved.</p>
				<div className="flex items-center space-x-6 mt-4 md:mt-0">
					<p className="cursor-pointer hover:text-accent transition-colors">Privacy Policy</p>
					<p className="cursor-pointer hover:text-accent transition-colors">Terms of Service</p>
				</div>
			</div>
		</div>
	)
}

export default Footer
