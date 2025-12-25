"use client"
import React, { useState } from "react"
import { useFormik } from "formik"
import * as Yup from "yup"
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser"
import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi"
import { FaInstagram, FaTwitter } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa6"

const validationSchema = Yup.object({
	name: Yup.string().required("Name is required"),
	email: Yup.string().email("Invalid email address").required("Email is required"),
	phone: Yup.string().required("Mobile Number is required"),
	message: Yup.string().required("Message is required"),
})

const Contact = () => {
	const [successMessage, setSuccessMessage] = useState("")
	const [errorMessage, setErrorMessage] = useState("")
	const [isSubmitting, setIsSubmitting] = useState(false)

	const formik = useFormik({
		initialValues: {
			name: "",
			email: "",
			phone: "",
			message: "",
		},
		validationSchema,
		onSubmit: (values, { resetForm }) => {
			setIsSubmitting(true)
			setErrorMessage("")
			setSuccessMessage("")

			const YOUR_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!
			const YOUR_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!
			const YOUR_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!

			emailjs
				.send(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, values, YOUR_PUBLIC_KEY)
				.then(
					(result: EmailJSResponseStatus) => {
						setSuccessMessage("Message sent successfully!")
						resetForm()
					},
					(error: EmailJSResponseStatus) => {
						setErrorMessage("Failed to send message. Please try again.")
					}
				)
				.finally(() => {
					setIsSubmitting(false)
					setTimeout(() => {
						setSuccessMessage("")
						setErrorMessage("")
					}, 3000)
				})
		},
	})

	const inputStyles =
		"w-full px-4 py-2.5 bg-secondary text-xl text-foreground rounded-md outline-none placeholder:text-foreground opacity-70 focus:ring-2 focus:ring-accent/50 transition-all duration-300"

	return (
		<div className="container py-16">
			<div className="w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
				{/*Left  */}
				<div>
					<h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
						Schedule a call with me to see if I can help
					</h1>
					<p className="text-base text-foreground opacity-70 mb-8">
						Reach out to me today, let us discuss how I can help achieve your goals.
					</p>

					<div className="space-y-6">
						<div className="flex items-center space-x-4">
							<BiPhone className="w-7 h-7 text-accent shrink-0" />
							<p className="text-lg md:text-xl font-semibold text-foreground opacity-90">
								+234 903 439 2134
							</p>
						</div>
						<div className="flex items-center space-x-4">
							<BiEnvelope className="w-7 h-7 text-accent shrink-0" />
							<p className="text-lg md:text-xl font-semibold text-foreground opacity-90">
								theophilusadesola002@gmail.com
							</p>
						</div>
						<div className="flex items-center space-x-4">
							<BiMap className="w-7 h-7 text-accent shrink-0" />
							<p className="text-lg md:text-xl font-semibold text-foreground opacity-90">
								Lagos, Nigeria
							</p>
						</div>
					</div>

					{/* Social Icons */}
					<div className="flex items-center mt-10 space-x-4">
						{[
							{ icon: FaLinkedin, color: "hover:bg-blue-800", url: "" },
							{ icon: FaTwitter, color: "hover:bg-sky-400", url: "" },
							{ icon: FaInstagram, color: "hover:bg-pink-800", url: "" },
						].map(({ icon: Icon, color }, index) => (
							<a
								key={index}
								href="#"
								className={`w-12 h-12 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 ${color} group`}>
								<Icon className="text-foreground group-hover:text-white w-5 h-5 transition-colors duration-300" />
							</a>
						))}
					</div>
				</div>

				{/* Right Side */}
				<div className="md:p-10 p-6 bg-tertiary-dark rounded-xl shadow-lg">
					<form onSubmit={formik.handleSubmit} className="space-y-5">
						{/* Name  */}
						<div>
							<input
								type="text"
								name="name"
								placeholder="Name"
								className={inputStyles}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								value={formik.values.name}
							/>
							{formik.touched.name && formik.errors.name && (
								<div className="text-red-500 text-sm mt-1">{formik.errors.name}</div>
							)}
						</div>

						{/* Email  */}
						<div>
							<input
								type="email"
								name="email"
								placeholder="Email Address"
								className={inputStyles}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								value={formik.values.email}
							/>
							{formik.touched.email && formik.errors.email && (
								<div className="text-red-500 text-sm mt-1">{formik.errors.email}</div>
							)}
						</div>

						{/* Mobile Number  */}
						<div>
							<input
								type="text"
								name="phone"
								placeholder="Mobile Number"
								className={inputStyles}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								value={formik.values.phone}
							/>
							{formik.touched.phone && formik.errors.phone && (
								<div className="text-red-500 text-sm mt-1">{formik.errors.phone}</div>
							)}
						</div>

						{/* Message Textarea */}
						<div>
							<textarea
								name="message"
								rows={4}
								placeholder="Your Message"
								className={`${inputStyles} resize-none`}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								value={formik.values.message}
							/>
							{formik.touched.message && formik.errors.message && (
								<div className="text-red-500 text-sm mt-1">{formik.errors.message}</div>
							)}
						</div>

						{/* Form Status Messages */}
						{successMessage && (
							<p className="text-green-500 text-center font-medium text-lg">{successMessage}</p>
						)}
						{errorMessage && <p className="text-red-500 text-center font-medium text-lg">{errorMessage}</p>}

						{/* Submit Button */}
						<button
							type="submit"
							disabled={isSubmitting}
							className="w-[50%] px-8 py-2 bg-accent hover:bg-accent-dark text-foreground text-xl font-semibold rounded-full transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed">
							{isSubmitting ? "Sending..." : "Send Message"}
						</button>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Contact
