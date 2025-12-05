import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Image from "next/image";

import CTA from "./shared/CTA";
import SectionTitle from "./shared/SectionTitle";

import { FaLinkedin } from "react-icons/fa";

// import images
import HowestLogo from "../../../public/assets/howest_logo.webp";
import OULogo from "../../../public/assets/ou_logo.webp";

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
						Hello! I&apos;m Harman, a Data
						Scientist / ML Engineer based in Belgium 🇧🇪.
					</p>
					<p className="text-textPrimary text-lg leading-relaxed">
						My journey in tech started all the way back in 2020,
						when during the COVID-19 lockdown I discovered a new
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
					></CTA>
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
							<div className="flex items-center justify-between">
								{/* Applied AI Researcher */}
								<div className="flex items-center">
									<Image
										src={HowestLogo}
										alt="Howest logo"
										width={32}
										height={32}
										className="mr-4 mb-1 inline-block"
									/>
									<div>
										<p className="font-medium">
											Applied AI Researcher
										</p>
										<p className="text-textPrimary">
											Howest University of Applied
											Sciences
										</p>
									</div>
								</div>
								<span className="text-sm text-gray-400">
									Feb 2025 - May 2025
								</span>
							</div>
						</div>
					</div>{" "}
					<div
						className="border-pillSecondary rounded-md border px-4 py-4"
						data-aos="fade-up"
						data-aos-delay="300"
					>
						<h3 className="mb-4 text-xl font-medium">Education</h3>
						<div className="space-y-4">
							<div className="flex items-center">
								<Image
									src={OULogo}
									alt="Open Universiteit logo"
									width={32}
									height={32}
									className="mr-4 mb-1 inline-block"
								/>
								<div>
									<span className="font-medium">
										Master of Science in Artificial
										Intelligence
									</span>

									<p className="text-textPrimary">
										Open Universiteit
									</p>
								</div>
							</div>
							<div className="flex items-center">
								<Image
									src={HowestLogo}
									alt="Howest logo"
									width={32}
									height={32}
									className="mr-4 mb-1 inline-block"
								/>
								<div>
									<span className="font-medium">
										Bachelor in Applied Computer Science
									</span>

									<p className="text-textPrimary">
										Howest University of Applied Sciences
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
