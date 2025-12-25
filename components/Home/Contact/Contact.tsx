"use client"
import React, { useState } from "react"
import { useFormik } from "formik"
import * as Yup from "yup"
import emailjs from "@emailjs/browser"
import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi"
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa"

// Validation schema for the form
const validationSchema = Yup.object({
	user_name: Yup.string().required("Name is required"),
	user_email: Yup.string().email("Invalid email address").required("Email is required"),
	user_phone: Yup.string().required("Mobile Number is required"),
	message: Yup.string().required("Message is required"),
})

const Contact = () => {
	const [successMessage, setSuccessMessage] = useState("")
	const [errorMessage, setErrorMessage] = useState("")
	const [isSubmitting, setIsSubmitting] = useState(false)

	const formik = useFormik({
		initialValues: {
			user_name: "",
			user_email: "",
			user_phone: "",
			message: "",
		},
		validationSchema,
		onSubmit: (values, { resetForm }) => {
			setIsSubmitting(true)
			setErrorMessage("")
			setSuccessMessage("")

			const YOUR_SERVICE_ID = "YOUR_SERVICE_ID_PLACEHOLDER"
			const YOUR_TEMPLATE_ID = "YOUR_TEMPLATE_ID_PLACEHOLDER"
			const YOUR_PUBLIC_KEY = "YOUR_PUBLIC_KEY_PLACEHOLDER"

			emailjs
				.send(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, values, YOUR_PUBLIC_KEY)
				.then(
					(result) => {
						console.log("Email sent successfully:", result.text)
						setSuccessMessage("Message sent successfully!")
						resetForm()
					},
					(error) => {
						console.error("Failed to send email:", error.text)
						setErrorMessage("Failed to send message. Please try again.")
					}
				)
				.finally(() => {
					setIsSubmitting(false)
					setTimeout(() => {
						setSuccessMessage("")
						setErrorMessage("")
					}, 5000)
				})
		},
	})

	const inputStyles =
		"w-full px-4 py-2.5 bg-secondary text-xl text-foreground rounded-md outline-none placeholder:text-foreground opacity-70 focus:ring-2 focus:ring-accent/50 transition-all duration-300"

	return (
		<div className="container py-16">
			<div className="w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
				{/* Text & Contact Info - Left Side */}
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
							<p className="text-lg md:text-xl font-semibold text-foreground opacity-90">+893473289</p>
						</div>
						<div className="flex items-center space-x-4">
							<BiEnvelope className="w-7 h-7 text-accent shrink-0" />
							<p className="text-lg md:text-xl font-semibold text-foreground opacity-90">
								hello@example.com
							</p>
						</div>
						<div className="flex items-center space-x-4">
							<BiMap className="w-7 h-7 text-accent shrink-0" />
							<p className="text-lg md:text-xl font-semibold text-foreground opacity-90">
								Dhaka, Bangladesh
							</p>
						</div>
					</div>

					{/* Social Icons */}
					<div className="flex items-center mt-10 space-x-4">
						{[
							{ icon: FaFacebookF, color: "hover:bg-blue-800" },
							{ icon: FaYoutube, color: "hover:bg-red-600" },
							{ icon: FaTwitter, color: "hover:bg-sky-400" },
							{ icon: FaInstagram, color: "hover:bg-pink-800" },
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

				{/* Form - Right Side */}
				<div className="md:p-10 p-6 bg-tertiary-dark rounded-xl shadow-lg">
					<form onSubmit={formik.handleSubmit} className="space-y-5">
						{/* Name Input */}
						<div>
							<input
								type="text"
								name="user_name"
								placeholder="Name"
								className={inputStyles}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								value={formik.values.user_name}
							/>
							{formik.touched.user_name && formik.errors.user_name && (
								<div className="text-red-500 text-sm mt-1">{formik.errors.user_name}</div>
							)}
						</div>

						{/* Email Input */}
						<div>
							<input
								type="email"
								name="user_email"
								placeholder="Email Address"
								className={inputStyles}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								value={formik.values.user_email}
							/>
							{formik.touched.user_email && formik.errors.user_email && (
								<div className="text-red-500 text-sm mt-1">{formik.errors.user_email}</div>
							)}
						</div>

						{/* Mobile Number Input */}
						<div>
							<input
								type="text"
								name="user_phone"
								placeholder="Mobile Number"
								className={inputStyles}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								value={formik.values.user_phone}
							/>
							{formik.touched.user_phone && formik.errors.user_phone && (
								<div className="text-red-500 text-sm mt-1">{formik.errors.user_phone}</div>
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
						{successMessage && <p className="text-green-500 text-center font-medium">{successMessage}</p>}
						{errorMessage && <p className="text-red-500 text-center font-medium">{errorMessage}</p>}

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
