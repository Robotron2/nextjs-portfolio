"use client"
import React, { useState } from "react"
import Nav from "./Nav"
import MobileNav from "./MobileNav"

const ResponsiveNav = () => {
	const [showNav, setShowNav] = useState(false)

	const openNavHandler = () => {
		setShowNav(true)
		console.log("Clicked to open")
	}
	const closeNavHandler = () => {
		setShowNav(false)
		console.log("Clicked to close")
	}
	return (
		<div>
			<Nav openNav={openNavHandler} />
			<MobileNav showNav={showNav} closeNav={closeNavHandler} />
		</div>
	)
}

export default ResponsiveNav
