import React from "react";

const skills = {
	webDevelopment: [
		"HTML",
		"CSS",
		"Responsive design",
		"React",
		"Next.js",
		"TailwindCSS",
		"Node.js",
	],
	dataScience: [
		"TensorFlow",
		"PyTorch",
		"scikit-learn",
		"pandas",
		"Polars",
		"NumPy",
		"Matplotlib",
		"Seaborn",
	],
	tools: ["Git", "Docker"],
	databases: ["MySQL", "MongoDB", "PostgreSQL"],
	languages: ["Python", "JavaScript", "TypeScript", "SQL", "Java", "PHP"],
};

const SectionTitle = () => {
	return (
		<div className="mb-8">
			<h2 className="text-4xl font-semibold tracking-tight">About Me</h2>
			<div className="mt-2 h-1 w-24 bg-white"></div>
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

const About = () => {
	return (
		<div className="mx-auto max-w-(--breakpoint-2xl) bg-black px-8 py-24 text-white 2xl:px-1">
			<SectionTitle />

			<div className="grid gap-8 md:grid-cols-2">
				<div className="space-y-6">
					<p className="text-lg leading-relaxed text-gray-300">
						Hello! I'm Harman Singh, a Software Engineer / Data
						Scientist based in Belgium 🇧🇪.
					</p>
					<p className="text-lg leading-relaxed text-gray-300">
						My journey in tech started all the way back in 2020,
						when during the COVID-19 Lockdown I discovered a new
						interest in programming. I started with CS50's
						introduction to programming course, and I have not
						stopped learning since.
					</p>
					<p className="text-lg leading-relaxed text-gray-300">
						At the moment I am finishing up my bachelor's in Applied
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
				</div>

				<div className="space-y-6">
					<div className="rounded-md border-dashed py-4">
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
							<p className="text-gray-300">
								Howest University of Applied Sciences
							</p>
						</div>
					</div>
					<div className="rounded-md border-dashed py-4">
						<h3 className="mb-4 text-xl font-medium">Education</h3>
						<div className="space-y-2">
							<p className="flex items-center justify-between">
								<span className="font-medium">
									Bachelor, Applied Computer Science
								</span>
								<span className="text-sm text-gray-400">
									2021 - 2025
								</span>
							</p>
							<p className="text-gray-300">
								Howest University of Applied Sciences
							</p>
						</div>
					</div>{" "}
					<div className="rounded-md border-dashed py-4">
						<h3 className="mb-4 text-xl font-medium">Skills</h3>

						{Object.entries(skills).map(
							([category, categorySkills]) => (
								<div key={category} className="mb-4">
									<h4 className="text-md mb-2 text-gray-300 capitalize">
										{category
											.replace(/([A-Z])/g, " $1")
											.trim()}
									</h4>
									<div className="mb-3 flex flex-wrap gap-1">
										{categorySkills.map((skill) => (
											<span
												key={skill}
												className="rounded-full bg-gray-500/30 px-3 py-1.5 text-sm"
											>
												{skill}
											</span>
										))}
									</div>
								</div>
							),
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
