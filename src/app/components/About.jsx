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
import UGentLogo from "../../../public/assets/ugent_logo.webp";

const ExperienceItem = ({ role, company, duration, logo }) => (
	<div className="xs:flex-row xs:items-center flex min-w-full flex-col justify-between">
		<div className="flex items-center">
			<Image
				src={logo}
				alt={`${company} logo`}
				width={32}
				height={32}
				className="mr-4 mb-1 inline-block"
			/>
			<div>
				<p className="font-medium">{role}</p>
				<p className="text-textPrimary">{company}</p>
			</div>
		</div>
		<span className="text-sm text-gray-400">{duration}</span>
	</div>
);

const EducationItem = ({ institution, degree, logo }) => (
	<div className="flex items-center">
		<Image
			src={logo}
			alt={`${institution} logo`}
			width={32}
			height={32}
			className="mr-4 mb-1 inline-block"
		/>
		<div>
			<span className="font-medium">{degree}</span>
			<p className="text-textPrimary">{institution}</p>
		</div>
	</div>
);

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
						Hello! I&apos;m Harman, a Data Scientist / ML Engineer
						based in Belgium 🇧🇪.
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
						<div className="flex flex-col items-start space-y-6">
							<ExperienceItem
								role="Applied AI Researcher"
								company="Howest University of Applied Sciences"
								duration="Feb 2025 - May 2025"
								logo={HowestLogo}
							/>
						</div>
					</div>{" "}
					<div
						className="border-pillSecondary rounded-md border px-4 py-4"
						data-aos="fade-up"
						data-aos-delay="300"
					>
						<h3 className="mb-4 text-xl font-medium">Education</h3>
						<div className="space-y-4">
							<EducationItem
								institution="Open Universiteit"
								degree="Master of Science in Artificial Intelligence"
								logo={OULogo}
							/>

							<EducationItem
								institution="Howest University of Applied Sciences"
								degree="Bachelor in Applied Computer Science"
								logo={HowestLogo}
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
