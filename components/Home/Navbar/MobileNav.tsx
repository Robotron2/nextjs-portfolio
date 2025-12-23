import { NavLinks } from "@/constants/constants"
import Link from "next/link"
import React from "react"
import { CgClose } from "react-icons/cg"

type MobileNavProps = {
	showNav: boolean
	closeNav: () => void
}

const MobileNav = ({ showNav, closeNav }: MobileNavProps) => {
	// Determine translation and pointer events
	const navOpen = showNav ? "translate-x-0" : "translate-x-[100%]"

	return (
		<div>
			{/* overlay */}
			<div
				className={`fixed ${navOpen} transform transition-all duration-500 inset-0 z-[1000] bg-black opacity-70 w-full h-screen ${
					showNav ? "pointer-events-auto" : "pointer-events-none"
				}`}
				onClick={closeNav}
			/>

			{/* Navlinks */}
			<div
				className={`text-foreground ${navOpen} fixed justify-center flex flex-col h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-accent space-y-6 z-[10002] right-0 ${
					showNav ? "pointer-events-auto" : "pointer-events-none"
				}`}>
				{NavLinks.map((link) => {
					return (
						<Link key={link.id} href={link.url} onClick={closeNav}>
							<p className="text-foreground w-fit text-xl ml-12 border-b-[1.5px] pb-1 border-foreground sm:text-[30px]">
								{link.label}
							</p>
						</Link>
					)
				})}
				{/* Close btn */}
				<CgClose
					className="absolute top-6 right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6 cursor-pointer"
					onClick={closeNav}
				/>
			</div>
		</div>
	)
}

export default MobileNav
