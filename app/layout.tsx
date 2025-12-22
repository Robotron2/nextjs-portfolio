import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const font = Inter({
	weight: ["100", "200", "300", "500", "600", "700", "800", "900"],
	subsets: ["latin"],
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
		<html lang="en">
			<body className={`${font.className} antialiased bg-[#0d0d1f]`}>{children}</body>
		</html>
	)
}
