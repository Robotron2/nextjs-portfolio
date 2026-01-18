import withPWAInit from "@ducanh2912/next-pwa"

const withPWA = withPWAInit({
	dest: "public", // Where to output the service worker
	cacheOnFrontEndNav: true,
	aggressiveFrontEndNavCaching: true,
	reloadOnOnline: true,
	// swcMinify: true,
	disable: process.env.NODE_ENV === "development", // Disable in dev mode so it doesn't cache everything while you code
	workboxOptions: {
		disableDevLogs: true,
	},
})

import type { NextConfig } from "next"

const nextConfig: NextConfig = {
	/* config options here */
	allowedDevOrigins: ["192.168.0.184:3000"],
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "**",
			},
		],
	},
}

export default withPWA(nextConfig)
