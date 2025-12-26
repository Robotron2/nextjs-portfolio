import React from "react"
// import ServiceCard from "./ServiceCard"
import { ServiceData } from "@/constants/constants"
import ServiceCard from "./ServiceCard"

const Service = () => {
	return (
		<div className="container py-16 mb-8" id="services">
			<h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-foreground">
				Delivering results <br /> for <span className="text-accent">brands</span> and{" "}
				<span className="text-accent">agencies</span>.
			</h1>
			<div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 mt-20 items-start">
				{ServiceData.map((service, i) => {
					return (
						<div
							key={service.id}
							data-aos="fade-right"
							data-aos-anchor-placement="top-center"
							data-aos-delay={i * 100}>
							<ServiceCard name={service.name} description={service.description} icon={service.icon} />
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default Service
