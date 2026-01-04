"use client"

import { NavLinks } from "@/constants/constants"
import Link from "next/link"
import { useEffect, useState } from "react"
import { BiDownload } from "react-icons/bi"
import { FaCode } from "react-icons/fa"
import { HiBars3BottomRight } from "react-icons/hi2"

type NavProps = {
	openNav: () => void
}

const Nav = ({ openNav }: NavProps) => {
	const [navBg, setNavBg] = useState(false)

	useEffect(() => {
		const handler = () => {
			if (window.scrollY >= 90) setNavBg(true)
			if (window.scrollY < 90) setNavBg(false)
		}
		window.addEventListener("scroll", handler)
		return () => window.removeEventListener("scroll", handler)
	}, [])

	return (
		<div
			className={`fixed w-full transition-all duration-200 h-[12vh] z-[1000] ${
				navBg ? "bg-[#0F142E]/70 backdrop-blur-md shadow-md" : ""
			}`}>
			<div className="flex items-center h-full justify-between w-[90%] mx-auto">
				{/* Logo */}
				<Link href={"/"} className="flex items-center space-x-2">
					<div className="w-10 h-10 bg-foreground rounded-full flex items-center justify-center flex-col">
						<FaCode className="w-5 h-5 text-secondary" />
					</div>
					<h1 className="text-xl hidden sm:block md:text-2xl text-foreground font-bold">The0</h1>
				</Link>
				{/* NavLinks */}
				<div className="hidden lg:flex items-center space-x-10">
					{NavLinks.map((link) => {
						return (
							<Link
								key={link.id}
								href={link.url}
								className="text-base hover:text-accent text-foreground font-medium transition-all duration-200">
								<p>{link.label}</p>
							</Link>
						)
					})}
				</div>
				{/* Buttons */}
				<div className="flex items-center space-x-4">
					{/* CV button */}
					<a
						href="/Resume.pdf"
						download="Theophilus_resume"
						className="px-8 py-3.5 text-sm cursor-pointer rounded-full bg-accent hover:bg-accent-dark transition-all duration-300 text-foreground flex items-center space-x-2">
						<BiDownload className="w-5 h-5" />
						{/* <span className="font-bold">Download CV</span> */}
					</a>

					{/* Burger */}
					<HiBars3BottomRight
						className="w-8 h-8 cursor-pointer text-foreground lg:hidden"
						onClick={openNav}
					/>
				</div>
			</div>
		</div>
	)
}

export default Nav
