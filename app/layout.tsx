import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav"
import Footer from "@/components/Home/Footer/Footer"
import ScrollToTop from "@/components/Helper/ScrollToTop"
import type { Viewport } from "next"

export const viewport: Viewport = {
	themeColor: "#0f142e",
	width: "device-width",
	initialScale: 1,
	maximumScale: 1,
	userScalable: false, // Prevents zooming like a native app
}

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	style: ["normal", "italic"],
	display: "swap",
	variable: "--font-poppins",
})

const baseUrl = "https://the0ph1lus.xyz"

export const metadata: Metadata = {
	metadataBase: new URL("https://the0ph1lus.xyz"),
	title: {
		default: "Theophilus Adeleke | Full Stack Web3 Developer & Mechatronics Engineer",
		template: "%s | Theophilus Adeleke",
	},

	description:
		"Portfolio of Theophilus Adeleke, a Web3 Developer and Mechatronics Engineer in Lagos. Specializing in Solidity smart contracts, Next.js dApps, and IoT automation.",

	keywords: [
		"Theophilus Adeleke",
		"Web3 Developer Lagos",
		"Web3bridge",
		"Smart Contract Engineer",
		"Solidity Developer",
		"DApp developer",
		"Next.js Portfolio",
		"Mechatronics Engineer Nigeria",
		"Frontend Developer",
		"Blockchain Developer",
		"Gogo Rides",
	],

	authors: [{ name: "Theophilus Adeleke", url: "https://github.com/robotron2" }],
	creator: "Theophilus Adeleke",

	openGraph: {
		type: "website",
		locale: "en_US",
		url: baseUrl,
		title: "Theophilus Adeleke | Web3 & Mechatronics",
		description:
			"Building scalable dApps and secure smart contracts. View my projects in DeFi, IoT, and Geospatial tech.",
		siteName: "Theophilus Adeleke Portfolio",
		images: [
			{
				url: "/og-image.png",
				width: 1200,
				height: 630,
				alt: "Theophilus Adeleke - Web3 Developer Portfolio",
			},
		],
	},

	twitter: {
		card: "summary_large_image",
		title: "Theophilus Adeleke | Web3 Developer",
		description: "Mechatronics Engineer & Blockchain Developer. Check out my latest work.",
		images: ["/og-image.png"],
		creator: "@The0_ph1lus",
	},

	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
}

const jsonLd = {
	"@context": "https://schema.org",
	"@type": "Person",
	name: "Theophilus Adeleke",
	url: "https://the0ph1lus.xyz",
	sameAs: ["https://www.linkedin.com/in/the0ph1lus", "https://github.com/robotron2", "https://x.com/The0_ph1lus"],
	jobTitle: "Web3 Developer & Mechatronics Engineer",
	worksFor: {
		"@type": "Organization",
		name: "Freelance",
	},
	address: {
		"@type": "PostalAddress",
		addressLocality: "Lagos",
		addressCountry: "Nigeria",
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en" className="scroll-smooth">
			<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
			<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
			<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
			<link rel="manifest" href="/site.webmanifest"></link>
			<body className={`${poppins.className} ${poppins.variable} antialiased bg-secondary`}>
				<ResponsiveNav />
				{children}
				<Footer />
				<ScrollToTop />
				<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
			</body>
		</html>
	)
}
