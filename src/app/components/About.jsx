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

const About = () => {
	return (
		<div className="mx-auto max-w-(--breakpoint-2xl) bg-black px-8 py-24 text-white 2xl:px-1">
			<SectionTitle />

			<div className="grid gap-8 md:grid-cols-2">
				<div className="space-y-6">
					<p className="text-lg leading-relaxed text-gray-300">
						Hello! I'm Harman Singh, a passionate developer focused
						on creating elegant and efficient solutions. With a
						strong foundation in modern web technologies, I enjoy
						building experiences that are both functional and
						beautiful.
					</p>
					<p className="text-lg leading-relaxed text-gray-300">
						My journey in tech has equipped me with skills in
						frontend and backend development, allowing me to craft
						full-stack applications that solve real-world problems.
					</p>
					<p className="text-lg leading-relaxed text-gray-300">
						When I'm not coding, you can find me exploring new
						technologies, contributing to open-source projects, or
						honing my design skills.
					</p>
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
