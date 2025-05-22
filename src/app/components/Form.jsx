import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import toast, { Toaster } from "react-hot-toast";

function Input(props) {
	return (
		<input
			type={props.type}
			id={props.id}
			placeholder={props.placeholder}
			name={props.name}
			required={true}
			className="w-full rounded-lg border border-[#d1d5db] bg-[#f9fafb] p-3 text-sm focus:outline-0"
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
			className="w-full rounded-lg border border-[#d1d5db] bg-[#f9fafb] p-3 text-sm"
		/>
	);
}

function Label(props) {
	return (
		<label
			// className="text-[#111827] font-semibold text-sm"
			className="text-sm font-semibold text-white"
			htmlFor={props.htmlFor}
			value={props.value}
		>
			{props.children}
		</label>
	);
}

function LabelHint(props) {
	return <p className="text-xs text-gray-300">{props.children}</p>;
}

// function copyEmail() {
// 	navigator.clipboard.writeText("harman.pnahal@gmail.com");
// 	toast("✅ Email copied to clipboard");
// }

export default function Contact() {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
				process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
				form.current,
				process.env.NEXT_PUBLIC_EMAILJS_USER_ID
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
			<div
				data-aos="fade-up"
				className="mx-auto mt-12 max-w-4xl rounded-xl p-6 pb-24"
			>
				<form
					ref={form}
					onSubmit={sendEmail}
					className="flex flex-col gap-4"
				>
					<div>
						<div className="mb-2 flex flex-col justify-between sm:flex-row sm:items-center">
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
						<div className="mb-2 flex flex-col justify-between sm:flex-row sm:items-center">
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
							className="bg-brand-purple hover:bg-brand-purple-fade w-full rounded-lg p-3 text-sm font-medium text-white transition-colors duration-500"
							type="submit"
							value="send"
						>
							Send
						</button>
					</div>
				</form>
				<p className="pt-8 text-center text-white">
					Or send a regular email:{" "}
					<a
						className="text-brand-purple hover:text-brand-purple-fade font-medium underline-offset-2 transition-colors duration-500 hover:underline"
						href="mailto:harman.pnahal@gmail.com"
						// onClick={copyEmail}
					>
						harman.pnahal@gmail.com
					</a>
				</p>
			</div>
		</div>
	);
}
