import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import CTA from "./shared/CTA";
import SectionTitle from "./shared/SectionTitle";

import { FaLinkedin } from "react-icons/fa";

const About = () => {
	// Initialize AOS
	useEffect(() => {
		AOS.init({
			duration: 800,
			once: true,
			easing: "ease-in-out",
		});
	}, []);

	return (
		<section
			id="about"
			className="mx-auto max-w-(--breakpoint-2xl) px-8 py-24 text-white 2xl:px-1"
			data-aos="fade-up"
		>
			<SectionTitle content="About Me" />

			<div className="grid gap-8 md:grid-cols-2">
				<div
					className="space-y-6"
					data-aos="fade-up"
					data-aos-delay="100"
				>
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
						At the moment I am pursuing a Master of Science in
						Artificial Intelligence at The Open University of The
						Netherlands.
					</p>

					{/* <p className="text-textPrimary text-lg leading-relaxed italic">
						p.s. I also have a blog (
						<strong>
							<a
								href="https://ti.harmansingh.nl"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Harman Singh's blog"
								className="text-purple-light underline"
							>
								ti.harmansingh.nl
							</a>
						</strong>
						). I made it for a course in my bachelor&apos;s degree
						programme, but it&apos;s still up.
					</p> */}
					<CTA
						icon={<FaLinkedin className="text-[#0072b1]" />}
						content="LinkedIn"
						redirect={true}
						url="https://www.linkedin.com/in/harmanpnahal/"
					>
						{/* <svg
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
						</svg> */}
					</CTA>
				</div>{" "}
				<div
					className="space-y-6"
					data-aos="fade-up"
					data-aos-delay="200"
				>
					<div
						className="border-pillSecondary rounded-md border px-4 py-4"
						data-aos="fade-up"
						data-aos-delay="250"
					>
						<h3 className="mb-4 text-xl font-medium">Experience</h3>
						<div className="space-y-6">
							<div>
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
						</div>
					</div>{" "}
					<div
						className="border-pillSecondary rounded-md border px-4 py-4"
						data-aos="fade-up"
						data-aos-delay="300"
					>
						<h3 className="mb-4 text-xl font-medium">Education</h3>
						<div className="space-y-6">
							<div className="">
								<p className="flex items-center justify-between">
									<span className="font-medium">
										MS, Artificial Intelligence
									</span>
									<span className="text-sm text-gray-400">
										in progress ...{" "}
									</span>
								</p>
								<p className="text-textPrimary">
									Open Universiteit
								</p>
							</div>{" "}
							<div className="">
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
			</div>
		</section>
	);
};

export default About;
