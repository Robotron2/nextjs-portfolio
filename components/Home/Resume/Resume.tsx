import React from "react"
import ResumeCard from "./ResumeCard"
import { FaReact, FaCode, FaLayerGroup } from "react-icons/fa"
import { BsDatabase } from "react-icons/bs"
import { IoSchool } from "react-icons/io5" // Added an icon for education

const Resume = () => {
	return (
		<div className="container pt-20 pb-16 bg-[0f142e]">
			<div className="w-[95%] sm:w-[90%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10">
				{/* My Work Experience */}
				<div>
					<h1 className="text-3xl sm:text-4xl font-bold text-white mb-8">
						My Work <span className="text-accent">Experience</span>
					</h1>
					<div className="space-y-6">
						<ResumeCard
							Icon={FaLayerGroup}
							// date="2024 - Present"
							role="Frontend Web3 Developer"
							title="PulseDelta Startup (Hackathon)"
							description="Leading the frontend architecture for a grant-focused Web3 MVP. Specializing in integrating smart contracts with Next.js, managing complex dApp states, and crafting seamless user experiences to ensure high adoption during the hackathon judging phase."
						/>

						{/* Job 2: Full Stack */}
						<ResumeCard
							Icon={FaCode}
							// date="2022 - 2024"
							role="Full Stack Developer (MERN)"
							title="Gogo Rides"
							description="Architected a flexible ride-booking platform supporting both interstate and intrastate travel. Engineered a custom geospatial algorithm to calculate routes and fares independent of external Map APIs. Implemented WebSockets to power a real-time notification engine for instant driver assignment."
						/>

						{/* Job 3: Frontend */}
						<ResumeCard
							Icon={FaReact}
							// date="2020 - 2022"
							role="Frontend Developer"
							title="Gogo Rides"
							description="Translated UI/UX designs into pixel-perfect code using React.js. Collaborated with backend teams to integrate APIs and improve site performance by 30%."
						/>
					</div>
				</div>

				{/* My Education */}
				<div>
					<h1 className="text-3xl sm:text-4xl font-bold text-white mb-8">
						My <span className="text-accent">Education</span>
					</h1>
					<div className="space-y-6">
						<ResumeCard
							Icon={IoSchool}
							date="Jan 2020 - Jun 2025"
							role="Bachelor in Mechatronics Engineering"
							title="Federal University, Oye-Ekiti, Ekiti"
							description="Focused on the intersection of hardware and software systems. Developed a strong engineering foundation in logic design, automation, and algorithmic problem-solving, applying engineering principles to complex coding challenges."
						/>
						<ResumeCard
							Icon={BsDatabase}
							date="Aug 2022 - Oct 2022"
							role="Web Developer Intern"
							title="SQI College of ICT"
							description="Immersive internship focusing on modern web standards. Gained hands-on experience in building responsive user interfaces, mastering version control with Git, and collaborating in an agile development environment."
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Resume
