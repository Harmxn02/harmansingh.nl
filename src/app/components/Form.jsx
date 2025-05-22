import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import HeadingUnderline from "./shared/HeadingUnderline";

function Input(props) {
	return (
		<input
			type={props.type}
			id={props.id}
			placeholder={props.placeholder}
			name={props.name}
			required={true}
			className="focus:border-purple-light focus:ring-purple-light w-full rounded-md border border-zinc-800 bg-zinc-900/80 p-3 text-sm text-white placeholder-zinc-400 focus:ring-1 focus:outline-0"
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
			className="focus:border-purple-light focus:ring-purple-light w-full rounded-md border border-zinc-800 bg-zinc-900/80 p-3 text-sm text-white placeholder-zinc-400 focus:ring-1 focus:outline-0"
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

const SectionTitle = () => {
	return (
		<div className="mb-8">
			<h2 className="text-4xl font-semibold tracking-tight">Contact</h2>
			<HeadingUnderline />
		</div>
	);
};

export default function Contact() {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
				process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
				form.current,
				process.env.NEXT_PUBLIC_EMAILJS_USER_ID,
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
		<section
			id="contact"
			className="mx-auto max-w-(--breakpoint-2xl) px-8 py-24 text-white 2xl:px-1"
		>
			<SectionTitle />
			<div className="mt-12 max-w-4xl rounded-md border border-zinc-800 bg-zinc-900/40 p-6 pb-24 backdrop-blur-sm">
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
						<Toaster />{" "}
						<button
							className="w-full rounded-md bg-[#755eac] p-3 text-sm font-medium text-white transition-colors duration-500 hover:bg-[#997db6]"
							type="submit"
							value="send"
						>
							Send
						</button>
					</div>
				</form>{" "}
				<p className="pt-8 text-white">
					Or send a regular email:{" "}
					<a
						className="font-medium text-[#997db6] underline-offset-2 transition-colors duration-500 hover:text-[#958ab5] hover:underline"
						href="mailto:harman.pnahal@gmail.com"
						// onClick={copyEmail}
					>
						harman.pnahal@gmail.com
					</a>
				</p>
			</div>
		</section>
	);
}
