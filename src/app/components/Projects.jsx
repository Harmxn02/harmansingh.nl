import React, { useState, useMemo, useEffect } from "react";
import SectionTitle from "./shared/SectionTitle";
import AOS from "aos";
import "aos/dist/aos.css";

import Image from "next/image";

// Import projects data
import projects from "@/app/data/projects";

const ProjectCard = ({ project, index }) => {
	return (
		<div
			className="border-pillSecondary flex flex-col overflow-hidden rounded-md border transition-all duration-300 hover:shadow-lg"
			data-aos="fade-up"
			data-aos-delay={index * 100}
		>
			<div className="relative h-48 w-full overflow-hidden">
				<Image
					src={project.imageSrc}
					alt={project.imageAlt}
					width={600}
					height={400}
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

	// Initialize AOS
	useEffect(() => {
		AOS.init({
			duration: 800,
			once: true,
			easing: "ease-in-out",
		});
	}, []);

	// Extract unique domains and add "All" option
	const domains = useMemo(() => {
		const uniqueDomains = [
			...new Set(projects.map((project) => project.domain)),
		];
		return ["All", ...uniqueDomains];
	}, []);

	// Filter projects based on selected domain
	const filteredProjects = useMemo(() => {
		const visibleProjects = projects.filter((project) => project.shown);
		
		if (selectedDomain === "All") {
			return visibleProjects;
		}
		return visibleProjects.filter((project) => project.domain === selectedDomain);
	}, [selectedDomain]);
	return (
		<section
			id="projects"
			className="mx-auto max-w-(--breakpoint-2xl) px-8 py-24 text-white 2xl:px-1"
			data-aos="fade-up"
		>
			<SectionTitle content="Projects" />

			{/* Filter buttons */}
			<div
				className="mb-8 flex flex-wrap gap-3"
				data-aos="fade-up"
				data-aos-delay="100"
			>
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
					filteredProjects.map((project, index) => (
						<ProjectCard
							key={project.id}
							project={project}
							index={index}
						/>
					))
				) : (
					<div
						className="col-span-full py-10 text-center"
						data-aos="fade-up"
					>
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
