"use client";

import Navigation from "../components/Navigation";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function BachelorThesis() {
	// Initialize AOS for animations
	useEffect(() => {
		AOS.init({
			duration: 800,
			once: true,
			easing: "ease-in-out",
			offset: 100,
		});
	}, []);

	const currentDate = new Date();
	const thesisDate = new Date("2025-06-16T11:00:00");
	const isUpcoming = thesisDate > currentDate;
	const thesisStatus = isUpcoming ? "Upcoming" : "Past";

	return (
		<main className="mx-auto flex min-h-screen max-w-screen-2xl flex-col items-center justify-between px-6 py-24 md:px-24">
			<section className="mt-16 w-full md:mt-24">
				<div
					className="mx-auto max-w-3xl"
					data-aos="fade-up"
					data-aos-delay="300"
				>
					<h1 className="mb-8 text-4xl font-bold text-[#24497E] md:text-5xl">
						Generalised AI for Intrusion Detection
					</h1>
					<div className="prose prose-lg dark:prose-invert">
						<p className="mb-6 max-w-fit bg-[#24497E] px-4 py-4 text-xl text-white">
							Enhancing cyber security with artificial
							intelligence
						</p>
						<div className="flex items-center space-x-3 text-xl font-bold text-[#24497E]">
							<p
								className={`${isUpcoming ? "bg-green-800" : "bg-red-800"} px-2 py-1 font-medium text-white`}
							>
								{thesisStatus} event
							</p>
							<p>16 June '25</p>
							<p>—</p>
							<p>11:00 AM</p>
						</div>
						<div className="mt-12 space-y-4 border-4 border-[#244a7e3a] p-4 text-xl leading-8">
							<p className="font-semibold text-[#24497E] uppercase">
								Information
							</p>
							<p>
								This thesis investigates the use of artificial
								intelligence to improve intrusion detection
								systems, which play a crucial role in
								identifying and responding to unauthorised
								activity within computer networks.
							</p>
							<p>
								Traditional approaches to intrusion detection
								often rely on predefined rules or known attack
								signatures, which can limit their effectiveness
								against novel or evolving threats.
							</p>
							<p>
								By exploring generalised AI techniques, the aim
								is to develop models that can learn patterns of
								normal and abnormal behaviour from data,
								enabling more adaptive and intelligent detection
								mechanisms.
							</p>
						</div>
						<p className="group mt-12 max-w-fit cursor-pointer rounded-full bg-[#24497E] px-8 py-4 text-xl text-white">
							More about the speaker:{" "}
							<a
								href="/"
								className="underline-offset-2 group-hover:underline"
							>
								harmansingh.nl
							</a>
						</p>
					</div>
				</div>
			</section>
		</main>
	);
}
