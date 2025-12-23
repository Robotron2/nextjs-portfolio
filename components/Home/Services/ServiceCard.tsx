import Image from "next/image"
import React from "react"

export type ServiceCardProps = {
	icon: string
	name: string
	description: string
}

const ServiceCard = ({ description, icon, name }: ServiceCardProps) => {
	return (
		// <div>
		// 	<Image src={icon} alt={"image"} width={60} height={60} className="mx-auto" />
		// 	<h1 className="mt-6 text-xl md:text-2xl font-bold text-gray-200">{name}</h1>
		// 	<p className="mt-6 text-lg text-gray-300">{description}</p>
		// </div>
		<div className="shadow-lg p-8 rounded-xl bg-tertiary hover:scale-105 hover:shadow-2xl hover:bg-tertiary-dark transition-all duration-300 border border-gray-700/50 cursor-pointer text-center relative z-[1]">
			{/* Icon Container with subtle glow */}
			<div className="w-20 h-20 mx-auto bg-gray-800/50 rounded-full flex items-center justify-center mb-6 border border-gray-700 shadow-sm">
				<Image src={icon} alt={name} width={50} height={50} className="object-contain" />
			</div>

			<h1 className="text-xl md:text-2xl font-bold text-gray-100 mb-4 tracking-wide">{name}</h1>

			<p className="text-base text-gray-400 leading-relaxed font-light">{description}</p>

			{/* Optional decorative corner blob */}
			<div className="absolute w-24 h-24 bg-blue-500/5 rounded-full blur-2xl -top-4 -right-4 -z-[1]"></div>
		</div>
	)
}

export default ServiceCard
