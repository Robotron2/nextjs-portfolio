import React from "react"
// import ServiceCard from "./ServiceCard"
import { ServiceData } from "@/constants/constants"
import ServiceCard from "./ServiceCard"

const Service = () => {
	return (
		<div className="py-16">
			<h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-foreground">
				Delivering results <br /> for <span className="text-accent">brands</span> and{" "}
				<span className="text-accent">agencies</span>.
			</h1>
			<div className="w-[90%] max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 mt-20 items-start">
				{ServiceData.map((service) => {
					return (
						<div key={service.id}>
							<ServiceCard name={service.name} description={service.description} icon={service.icon} />
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default Service
