import React, { useState, useMemo } from "react";
import HeadingUnderline from "./shared/HeadingUnderline";

// Import projects data
const projects = [
	{
		id: 3,
		highlighted: false,
		name: "harmansingh.nl",
		imageSrc: "https://placehold.co/600x400?text=Portfolio+Website",
		imageAlt: "Preview of project Gamma.",
		domain: "Frontend",
		technologies: ["Next.js", "Tailwind CSS"],
		description:
			"My portfolio website was coded from scratch using Next.js and Tailwind CSS.",
		repository: "https://github.com/Harmxn02/harmansingh.nl",
		deployment: "https://www.harmansingh.nl",
		button_text: ["Code Repository", "Live Deployment"],
	},
	{
		id: 2,
		highlighted: false,
		name: "dev.harmansingh.nl",
		imageSrc: "https://placehold.co/600x400/?text=New+Portfolio+Website",
		imageAlt: "Preview of project Gamma.",
		domain: "Frontend",
		technologies: ["Next.js", "Tailwind CSS"],
		description:
			"The website you are currently looking at was also coded from scratch using Next.js and Tailwind CSS.",
		repository: "https://github.com/Harmxn02/dev.harmansingh.nl",
		deployment: "https://www.harmansingh.nl",
		button_text: ["Code Repository", "Live Deployment"],
	},
	{
		id: 4,
		highlighted: false,
		name: "links.harmansingh.nl",
		imageSrc: "https://placehold.co/600x400?text=Links+Website",
		imageAlt: "Preview of project Delta.",
		domain: "Frontend",
		technologies: ["Next.js", "Tailwind CSS"],
		description:
			"A website that showcases all of my social media links in 1 place.",
		repository: "https://github.com/Harmxn02/links.harmansingh.nl",
		deployment: "https://links.harmansingh.nl",
		button_text: ["Code Repository", "Live Deployment"],
	},
	{
		id: 9,
		highlighted: false,
		name: "AI-driven Project Estimations Tool",
		imageSrc: "https://placehold.co/600x400?text=AI+Project+Estimations",
		imageAlt: "Preview of project Iota",
		domain: "ML/AI",
		technologies: ["Python", "NLP", "RAG", "Streamlit", "Microsoft Azure"],
		description:
			"Solution to assist Delaware Consulting consultants in generating more accurate project estimations based on historical data",
		repository: "https://github.com/Harmxn02/DELAWARExHOWEST",
		button_text: ["Code Repository"],
	},
	{
		id: 10,
		highlighted: false,
		name: "Agentic AI to automate ML tasks",
		imageSrc: "https://placehold.co/600x400?text=Agentic+AI",
		imageAlt: "Preview of project Kappa",
		domain: "ML/AI",
		technologies: ["Python", "Hugging Face", "LLM"],
		description:
			"Developed an agentic approach to Machine Learning that included autonomous communication and task delegation.",
		repository: "https://github.com/Harmxn02/",
		button_text: ["no code available"],
	},
	{
		id: 11,
		highlighted: false,
		name: "Adversarial Attacks and Robustness",
		imageSrc: "https://placehold.co/600x400?text=Adversarial+Attacks",
		imageAlt: "Preview of project Kappa",
		domain: "ML/AI",
		technologies: ["Python", "PyTorch", "Computer Vision"],
		description:
			"Implemented and analysed the effectiveness of adversarial attacks on pre-trained computer vision models.",
		repository: "https://github.com/Harmxn02/",
		button_text: ["no code available"],
	},
];

const SectionTitle = () => {
	return (
		<div className="mb-8">
			<h2 className="text-4xl font-semibold tracking-tight">Projects</h2>
			<HeadingUnderline />
		</div>
	);
};

const ProjectCard = ({ project }) => {
	return (
		<div className="border-pillSecondary flex flex-col overflow-hidden rounded-md border transition-all duration-300 hover:shadow-lg">
			<div className="relative h-48 w-full overflow-hidden">
				<img
					src={project.imageSrc}
					alt={project.imageAlt}
					className="h-full w-full object-cover"
				/>
				<div className="absolute top-2 right-2 rounded-full bg-black/80 px-3 py-1 text-xs font-medium text-white">
					{project.domain}
				</div>
			</div>
			<div className="flex flex-1 flex-col justify-between p-6">
				<div>
					<h3 className="mb-2 text-xl font-semibold">
						{project.name}
					</h3>
					<p className="text-textPrimary mb-4">
						{project.description}
					</p>
					<div className="mb-4 flex flex-wrap gap-2">
						{project.technologies.map((tech) => (
							<span
								key={tech}
								className="bg-pillPrimary rounded-full px-3 py-1 text-xs"
							>
								{tech}
							</span>
						))}
					</div>
				</div>
				<div className="flex flex-wrap gap-3">
					{project.repository &&
						project.button_text[0] !== "no code available" && (
							<a
								href={project.repository}
								target="_blank"
								rel="noreferrer"
								className="bg-pillPrimary hover:bg-pillSecondary rounded-md px-4 py-2 text-sm font-medium text-white transition-all"
							>
								{project.button_text[0]}
							</a>
						)}
					{project.deployment && (
						<a
							href={project.deployment}
							target="_blank"
							rel="noreferrer"
							className="bg-buttonSecondary hover:bg-buttonSecondaryHover rounded-md px-4 py-2 text-sm font-medium text-black transition-all"
						>
							{project.button_text[1]}
						</a>
					)}
				</div>
			</div>
		</div>
	);
};

const Projects = () => {
	const [selectedDomain, setSelectedDomain] = useState("All");

	// Extract unique domains and add "All" option
	const domains = useMemo(() => {
		const uniqueDomains = [
			...new Set(projects.map((project) => project.domain)),
		];
		return ["All", ...uniqueDomains];
	}, []);

	// Filter projects based on selected domain
	const filteredProjects = useMemo(() => {
		if (selectedDomain === "All") {
			return projects;
		}
		return projects.filter((project) => project.domain === selectedDomain);
	}, [selectedDomain]);
	return (
		<section
			id="projects"
			className="mx-auto max-w-(--breakpoint-2xl) px-8 py-24 text-white 2xl:px-1"
		>
			<SectionTitle />

			{/* Filter buttons */}
			<div className="mb-8 flex flex-wrap gap-3">
				{domains.map((domain) => (
					<button
						key={domain}
						onClick={() => setSelectedDomain(domain)}
						className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
							selectedDomain === domain
								? "bg-purple-lighter text-black"
								: "bg-pillPrimary hover:bg-pillSecondary cursor-pointer text-white"
						}`}
					>
						{domain}
					</button>
				))}
			</div>

			<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
				{filteredProjects.length > 0 ? (
					filteredProjects.map((project) => (
						<ProjectCard key={project.id} project={project} />
					))
				) : (
					<div className="col-span-full py-10 text-center">
						<p className="text-lg text-gray-400">
							No projects found in this category.
						</p>
					</div>
				)}
			</div>
		</section>
	);
};

export default Projects;
