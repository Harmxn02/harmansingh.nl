import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import SectionHeader from "../SectionHeader";
import toast, { Toaster } from "react-hot-toast";

function Input(props) {
	return (
		<input
			type={props.type}
			id={props.id}
			placeholder={props.placeholder}
			name={props.name}
			required={true}
			className="bg-[#f9fafb] w-full p-3 focus:outline-0 text-sm border border-[#d1d5db] rounded-lg"
		/>
	);
}

function TextArea(props) {
	return (
		<textarea
			id={props.id}
			placeholder={props.placeholder}
			rows={4}
			name={props.name}
			required={true}
			className="bg-[#f9fafb] w-full p-3 text-sm border border-[#d1d5db]  rounded-lg"
		/>
	);
}

function Label(props) {
	return (
		<label
			// className="text-[#111827] font-semibold text-sm"
			className="text-white font-semibold text-sm"
			htmlFor={props.htmlFor}
			value={props.value}
		>
			{props.children}
		</label>
	);
}

function LabelHint(props) {
	return <p className="text-xs text-gray-300 ">{props.children}</p>;
}

export default function Contact() {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_rcvjl4h",
				"contact_form",
				form.current,
				"qx8-vBmAm9yCXji1-",
			)
			.then(
				(result) => {
					console.log(result);
					toast("✅ Email sent succesfully.");
				},
				(error) => {
					console.log(error);
					toast(
						"❌ Something went wrong with sending the email. Please try again",
					);
				},
			);
	};

	return (
		<div>
			<SectionHeader
				type=""
				section="CONTACT"
				title="Contact"
				desc="reach out and let's have a word"
			/>

			<div
				data-aos="fade-up"
				className="mt-12 pb-24 p-6 rounded-xl max-w-4xl mx-auto"
			>
				<form
					ref={form}
					onSubmit={sendEmail}
					className="flex flex-col gap-4"
				>
					<div>
						<div className="mb-2 flex flex-col sm:flex-row sm:items-center justify-between ">
							<Label htmlFor="name1" value="Your name">
								Your name
							</Label>
							<LabelHint>or your company&apos;s name</LabelHint>
						</div>

						<Input
							type="text"
							id="name1"
							placeholder="Your name"
							required={true}
							name="from_name"
						/>
					</div>
					<div>
						<div className="mb-2 flex flex-col sm:flex-row sm:items-center justify-between ">
							<Label htmlFor="email1" value="Your email">
								Your email
							</Label>
							<LabelHint>
								so I can get back in touch with you
							</LabelHint>
						</div>

						<Input
							type="email"
							id="email1"
							placeholder="name@email.com"
							required={true}
							name="from_email"
						/>
					</div>
					<div id="textarea">
						<div className="mb-2 block">
							<Label htmlFor="comment" value="Your message">
								Your message
							</Label>
						</div>

						<TextArea
							id="comment"
							type="email"
							placeholder="Leave a message ..."
							required="true"
							name="message"
						/>
					</div>

					<div>
						<Toaster />
						<button
							className="bg-brandPurple text-sm rounded-lg font-medium text-white p-3 w-full hover:bg-brandPurpleFade transition-colors duration-500"
							type="submit"
							value="send"
						>
							Send
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
