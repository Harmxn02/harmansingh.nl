import React from "react";

const TopLogo = () => {
	return (
		<div className="flex max-w-fit items-end space-x-1">
			<h1 className="text-2xl font-semibold text-white md:text-3xl">
				Harman.
			</h1>
		</div>
	);
};

const CTA = ({ content, url, children }) => {
	return (
		<button className="bg-buttonSecondary hover:bg-buttonSecondaryHover flex items-center gap-2 rounded-full px-5 py-3 font-medium text-black transition-colors duration-500">
			<a href={url} target="_blank" className="text-sm md:text-base">
				{content}
			</a>
			{children}
		</button>
	);
};

const Link = ({ content, url, children }) => {
	return (
		<button className="bg-buttonPrimary hover:bg-buttonPrimaryHover flex items-center gap-2 rounded-md px-5 py-3 font-medium text-white transition-colors duration-500">
			<a
				href={url}
				target="_blank"
				rel="noreferrer"
				className="text-sm md:text-base"
			>
				{content}
			</a>
			{children}
		</button>
	);
};

const MainContent = () => {
	return (
		<div className="flex min-h-[80vh] flex-col justify-center space-y-8">
			<div className="flex w-full items-end space-x-2">
				<h1 className="text-[5rem] leading-none font-semibold tracking-[-0.25rem] sm:text-[8rem] sm:tracking-[-0.5rem] md:text-[10rem] md:tracking-[-0.75rem] lg:text-[14rem] lg:tracking-[-1rem]">
					Harman <br></br> Singh
				</h1>
				{/* <div className="w-2 mb-[24px] sm:w-4 sm:mb-[14px] md:w-6 md:mb-[18px] lg:mb-[22px] xl:mb-[26px] 2xl:mb-[30px] aspect-square bg-white"></div> */}
			</div>
			<div className="flex items-baseline space-y-2 space-x-2">
				<Link
					content="LinkedIn"
					url="https://www.linkedin.com/in/harmanpnahal/"
				></Link>
				<Link
					content="GitHub"
					url="https://github.com/Harmxn02/"
				></Link>
				<Link
					content="Portfolio"
					url="https://www.harmansingh.nl"
				></Link>
			</div>
		</div>
	);
};

const Hero = () => {
	return (
		<div className="mx-auto min-h-screen max-w-(--breakpoint-2xl) bg-black pt-8 pr-8 pl-8 text-white 2xl:pr-1 2xl:pl-1">
			<div className="flex items-center justify-between">
				<TopLogo />
				<CTA content="Contact" url="mailto:harman.pnahal@gmail.com">
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
			</div>
			<MainContent />
		</div>
	);
};

export default Hero;
