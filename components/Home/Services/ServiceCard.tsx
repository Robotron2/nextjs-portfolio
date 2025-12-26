import React from "react"
import { IconType } from "react-icons"

type ServiceCardProps = {
	name: string
	description: string
	icon: IconType
}

const ServiceCard = ({ description, icon: Icon, name }: ServiceCardProps) => {
	const boxShadow =
		"shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.5),0px_4px_6px_-2px_rgba(0,0,0,0.3),inset_0px_2px_4px_rgba(255,255,255,0.1)] "
	return (
		<div
			className={`p-8 rounded-xl bg-tertiary hover:scale-105 hover:shadow-2xl hover:bg-tertiary-dark transition-all duration-30 cursor-pointer text-center relative z-[1] ${boxShadow}`}>
			{/* Icon Container */}
			<div
				className={`w-20 h-20 mx-auto bg-tertiary rounded-full flex items-center justify-center mb-6 
    relative group ${boxShadow}`}>
				<div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>

				<Icon className="w-10 h-10 text-accent drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] " />
			</div>

			<h1 className="text-xl md:text-2xl font-bold text-gray-100 mb-4 tracking-wide">{name}</h1>

			<p className="text-base text-gray-400 leading-relaxed font-light">{description}</p>

			{/* Decorative Blob */}
			<div className="absolute w-24 h-24 bg-blue-500/5 rounded-full blur-2xl -top-4 -right-4 -z-[1]"></div>
		</div>
	)
}

export default ServiceCard
