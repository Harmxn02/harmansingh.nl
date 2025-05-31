import React, { useEffect } from "react";
import CTA from "./shared/CTA";
import AOS from "aos";
import "aos/dist/aos.css";

const TopLogo = () => {
	return (
		<div className="flex max-w-fit items-end space-x-1" data-aos="fade-up">
			<h1 className="text-2xl font-semibold text-white md:text-3xl">
				Harman.
			</h1>
		</div>
	);
};

const Link = ({ content, url, children }) => {
	return (
		<button className="bg-buttonPrimaryHover hover:bg-pillSecondary flex items-center gap-2 rounded-md font-medium text-white transition-colors duration-500">
			<a
				href={url}
				target="_blank"
				rel="noreferrer"
				className="px-5 py-3 text-sm md:text-base"
			>
				{content}
			</a>
			{children}
		</button>
	);
};

const AnimatedPattern = () => {
	return (
		<div
			className="hidden md:flex md:h-full md:items-center md:justify-center"
			data-aos="fade-left"
			data-aos-delay="300"
		>
			<div className="relative h-[250px] w-[250px] lg:h-[350px] lg:w-[350px] xl:h-[400px] xl:w-[400px]">
				{/* Main circle */}
				<div className="border-purple-light absolute inset-0 animate-pulse rounded-full border-2 opacity-20"></div>

				{/* Rotating squares */}
				<div className="animate-spin-slow absolute inset-0">
					<div className="border-purple-lighter absolute top-1/2 left-1/2 h-3/4 w-3/4 -translate-x-1/2 -translate-y-1/2 rotate-45 transform border-2 opacity-30"></div>
				</div>

				{/* Orbiting dot */}
				<div className="animate-orbit absolute top-0 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-white"></div>

				{/* Gradient sphere */}
				<div className="from-buttonPrimaryHover to-purple-darker absolute inset-[15%] rounded-full bg-gradient-to-br opacity-60"></div>

				{/* Code-like lines */}
				<div className="absolute inset-0 flex flex-col items-center justify-center">
					<div className="bg-purple-light mb-1 h-[1px] w-1/2 opacity-20"></div>
					<div className="bg-purple-light mb-1 h-[1px] w-3/4 opacity-30"></div>
					<div className="bg-purple-light mb-1 h-[1px] w-2/3 opacity-25"></div>
					<div className="bg-purple-light h-[1px] w-1/3 opacity-15"></div>
				</div>
			</div>
		</div>
	);
};

const MainContent = () => {
	return (
		<div
			className="flex flex-col justify-center space-y-8 pt-[10vh] pb-[10vh] md:min-h-[80vh]"
			data-aos="fade-up"
			data-aos-delay="100"
		>
			<div className="flex w-full flex-col space-y-1 space-x-2">
				<h1 className="text-[2.5rem] leading-none font-semibold tracking-[-0.125rem] sm:text-[4rem] sm:tracking-[-0.25rem] md:text-[5rem] md:tracking-[-0.375rem] lg:text-[7rem] lg:tracking-[-0.5rem]">
					Harman Singh
				</h1>
				<p className="text-[1rem] sm:text-[1.1rem] md:pl-1 md:text-[1.3rem] lg:pl-2 lg:text-[1.5rem]">
					Software Engineer & Data Scientist
				</p>
				{/* <div className="w-2 mb-[24px] sm:w-4 sm:mb-[14px] md:w-6 md:mb-[18px] lg:mb-[22px] xl:mb-[26px] 2xl:mb-[30px] aspect-square bg-white"></div> */}
			</div>
			<div
				className="flex items-baseline space-y-2 space-x-2"
				data-aos="fade-up"
				data-aos-delay="200"
			>
				<Link
					content="LinkedIn"
					url="https://www.linkedin.com/in/harmanpnahal/"
				></Link>
				<Link
					content="GitHub"
					url="https://github.com/Harmxn02/"
				></Link>
			</div>
		</div>
	);
};

const Hero = () => {
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
			id="hero"
			className="mx-auto max-w-(--breakpoint-2xl) pt-8 pr-8 pl-8 text-white md:min-h-screen 2xl:pr-1 2xl:pl-1"
			data-aos="fade-up"
		>
			<div className="flex items-center justify-between">
				<TopLogo />
				<CTA
					content="Contact"
					url="#contact"
					redirect={false}
					data-aos="fade-up"
					data-aos-delay="50"
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
				</CTA>{" "}
			</div>{" "}
			<div className="flex w-full flex-col md:flex-row md:items-center">
				<MainContent />
				<div className="w-1/2">
					<AnimatedPattern />
				</div>
			</div>
		</section>
	);
};

export default Hero;
