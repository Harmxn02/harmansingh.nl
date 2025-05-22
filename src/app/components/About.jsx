import React from "react";

import CTA from "./shared/CTA";
import HeadingUnderline from "./shared/HeadingUnderline";

const SectionTitle = () => {
	return (
		<div className="mb-8">
			<h2 className="text-4xl font-semibold tracking-tight">About Me</h2>
			<HeadingUnderline />
		</div>
	);
};

const About = () => {
	return (
		<section
			id="about"
			className="mx-auto max-w-(--breakpoint-2xl) px-8 py-24 text-white 2xl:px-1"
		>
			<SectionTitle />

			<div className="grid gap-8 md:grid-cols-2">
				<div className="space-y-6">
					<p className="text-textPrimary text-lg leading-relaxed">
						Hello! I&apos;m Harman Singh, a Software Engineer / Data
						Scientist based in Belgium 🇧🇪.
					</p>
					<p className="text-textPrimary text-lg leading-relaxed">
						My journey in tech started all the way back in 2020,
						when during the COVID-19 Lockdown I discovered a new
						interest in programming. I started with CS50&apos;s
						introduction to programming course, and I have not
						stopped learning since.
					</p>
					<p className="text-textPrimary text-lg leading-relaxed">
						At the moment I am finishing up my bachelor&apos;s in Applied
						Computer Science at Howest University of Applied
						Sciences. I recently finished an internship there as an
						Applied AI Researcher (more about that on my LinkedIn)
					</p>
					<CTA
						content="LinkedIn"
						url="https://www.linkedin.com/in/harmanpnahal/"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							className="size-5"
						>
							<path
								fillRule="evenodd"
								d="M15.75 2.25H21a.75.75 0 0 1 .75.75v5.25a.75.75 0 0 1-1.5 0V4.81L8.03 17.03a.75.75 0 0 1-1.06-1.06L19.19 3.75h-3.44a.75.75 0 0 1 0-1.5Zm-10.5 4.5a1.5 1.5 0 0 0-1.5 1.5v10.5a1.5 1.5 0 0 0 1.5 1.5h10.5a1.5 1.5 0 0 0 1.5-1.5V10.5a.75.75 0 0 1 1.5 0v8.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V8.25a3 3 0 0 1 3-3h8.25a.75.75 0 0 1 0 1.5H5.25Z"
								clipRule="evenodd"
							/>
						</svg>
					</CTA>
				</div>{" "}
				<div className="space-y-6">
					<div className="border-pillSecondary rounded-md border px-4 py-4">
						<h3 className="mb-4 text-xl font-medium">Experience</h3>
						<div className="space-y-2">
							<p className="flex items-center justify-between">
								<span className="font-medium">
									Applied AI Researcher
								</span>
								<span className="text-sm text-gray-400">
									Feb 2025 - May 2025
								</span>
							</p>
							<p className="text-textPrimary">
								Howest University of Applied Sciences
							</p>
						</div>
					</div>{" "}
					<div className="border-pillSecondary rounded-md border px-4 py-4">
						<h3 className="mb-4 text-xl font-medium">Education</h3>
						<div className="space-y-2">
							<p className="flex items-center justify-between">
								<span className="font-medium">
									Bachelor, Applied Computer Science
								</span>
								<span className="text-sm text-gray-400">
									June 2025
								</span>
							</p>
							<p className="text-textPrimary">
								Howest University of Applied Sciences
							</p>
						</div>{" "}
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
