"use client"
import React from "react"
import Image from "next/image"
import Link from "next/link"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"

const projectData = [
	{
		id: 1,
		title: "Gogo Rides - Custom Geospatial SaaS",
		category: "Fullstack / Web3",
		image: "/images/p1.jpg",
		url: "https://gogorides.example.com",
	},
	{
		id: 2,
		title: "Decentralized Finance Dashboard",
		category: "Web3 Integration",
		image: "/images/p2.jpg",
		url: "https://defidash.example.com",
	},
	{
		id: 3,
		title: "Smart Contract Audit Tool",
		category: "Blockchain Security",
		image: "/images/p3.jpg",
		url: "https://audit.example.com",
	},
	{
		id: 4,
		title: "Gogo Rides - Custom Geospatial SaaS",
		category: "Fullstack / Web3",
		image: "/images/p1.jpg",
		url: "https://gogorides.example.com",
	},
	{
		id: 5,
		title: "Decentralized Finance Dashboard",
		category: "Web3 Integration",
		image: "/images/p2.jpg",
		url: "https://defidash.example.com",
	},
	{
		id: 6,
		title: "Smart Contract Audit Tool",
		category: "Blockchain Security",
		image: "/images/p3.jpg",
		url: "https://audit.example.com",
	},
]

const responsive = {
	superLargeDesktop: {
		breakpoint: { max: 4000, min: 1600 },
		items: 3,
		slidesToSlide: 1,
	},
	desktop: {
		breakpoint: { max: 1600, min: 1024 },
		items: 3,
		slidesToSlide: 1,
	},
	tablet: {
		breakpoint: { max: 1024, min: 768 },
		items: 2,
		slidesToSlide: 1,
	},
	mobile: {
		breakpoint: { max: 767, min: 0 },
		items: 1,
		slidesToSlide: 1,
	},
}

const Projects = () => {
	return (
		<div className="container py-16 mb-8" id="projects">
			<h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-foreground">
				A small selection of recent <br /> <span className="text-accent">projects</span>
			</h1>

			<div className="w-[90%] mx-auto mt-16">
				<Carousel
					responsive={responsive}
					infinite={true}
					autoPlay={true}
					autoPlaySpeed={2000}
					keyBoardControl={true}
					showDots={false}
					arrows={false}
					containerClass="carousel-container"
					dotListClass="custom-dot-list-style"
					itemClass="px-4 pb-12">
					{projectData.map((project) => (
						<Link href={project.url} key={project.id} target="_blank" className="block group h-full">
							<div className="flex flex-col h-full relative overflow-hidden rounded-xl bg-tertiary-dark border border-gray-800 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-accent/5">
								<div className="relative aspect-video w-full overflow-hidden">
									<Image
										src={project.image}
										alt={project.title}
										fill
										className="object-cover transition-transform duration-500 group-hover:scale-105"
									/>
								</div>

								<div className="p-6 flex-grow flex flex-col justify-between">
									<div>
										<h2 className="text-xl font-semibold text-foreground transition-colors group-hover:text-accent">
											{project.title}
										</h2>
										<p className="pt-2 text-sm md:text-base font-medium text-foreground opacity-60 uppercase tracking-widest">
											{project.category}
										</p>
									</div>
								</div>
							</div>
						</Link>
					))}
				</Carousel>
			</div>
		</div>
	)
}

export default Projects
