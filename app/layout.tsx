import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav"
import Footer from "@/components/Home/Footer/Footer"
import ScrollToTop from "@/components/Helper/ScrollToTop"

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	style: ["normal", "italic"],
	variable: "--font-poppins",
})

export const metadata: Metadata = {
	title: "The0_ph1lus Porfolio",
	description: "Portfolio website made with Nextjs 15",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en" className="scroll-smooth">
			<body className={`${poppins.className} antialiased bg-secondary`}>
				<ResponsiveNav />
				{children}
				<Footer />
				<ScrollToTop />
			</body>
		</html>
	)
}
