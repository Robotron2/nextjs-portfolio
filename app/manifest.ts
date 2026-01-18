import { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: "Theophilus Adeleke Portfolio",
		short_name: "The0",
		description: "Portfolio of Theophilus Adeleke - Web3 Developer & Mechatronics Engineer",
		start_url: "/",
		display: "standalone",
		background_color: "#0f142e",
		theme_color: "#0f142e",
		icons: [
			{
				src: "/icon-192.png",
				sizes: "192x192",
				type: "image/png",
			},
			{
				src: "/icon-512.png",
				sizes: "512x512",
				type: "image/png",
			},
		],
	}
}
