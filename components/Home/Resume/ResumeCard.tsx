import React from "react"
import { IconType } from "react-icons"

type ResumeCardProps = {
	role: string
	Icon: IconType
	date?: string
	title?: string // Added title prop for flexibility (e.g., Company name or Degree)
	description?: string
}

const ResumeCard = ({ Icon, role, date, title, description }: ResumeCardProps) => {
	return (
		<div className="mb-6 bg-tertiary p-6 sm:p-8 rounded-xl shadow-lg hover:bg-tertiary-dark transition-all duration-300 cursor-pointer">
			<div className="flex items-start gap-6">
				<div className="w-12 h-12 sm:w-14 sm:h-14 bg-accent-dark rounded-full flex items-center justify-center shrink-0 shadow-inner">
					<Icon className="w-5 h-5 sm:w-6 sm:h-6 text-foreground" />
				</div>

				<div className="flex-1">
					{date && (
						<div className="bg-white text-black text-xs sm:text-sm font-bold px-4 py-1 rounded-full w-fit mb-3">
							{date}
						</div>
					)}

					<h1 className="text-xl sm:text-2xl font-bold text-white mb-1">{role}</h1>

					{title && <span className="text-accent text-sm font-medium mb-4 block">{title}</span>}

					<p className="text-gray-400 text-sm sm:text-base leading-relaxed">{description}</p>
				</div>
			</div>
		</div>
	)
}

export default ResumeCard
