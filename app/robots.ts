import { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
	const baseUrl = "https://the0ph1lus.xyz"

	return {
		rules: {
			userAgent: "*",
			allow: "/",
			disallow: "/private/",
		},
		sitemap: `${baseUrl}/sitemap.xml`,
	}
}
