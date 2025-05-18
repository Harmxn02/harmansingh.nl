import React from "react";
import { FaCode, FaDatabase, FaTools } from "react-icons/fa";
import { IoLanguage } from "react-icons/io5";
import { TbMathSymbols } from "react-icons/tb";

const categoryIcons = {
	webDevelopment: <FaCode className="text-xl text-white" />,
	dataScience: <TbMathSymbols className="text-xl text-white" />,
	tools: <FaTools className="text-xl text-white" />,
	databases: <FaDatabase className="text-xl text-white" />,
	languages: <IoLanguage className="text-xl text-white" />,
};

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
	tools: ["Git", "Docker", "Jupyter Notebook", "Postman", "Figma"],
	databases: ["MySQL", "MongoDB", "PostgreSQL"],
	languages: ["Python", "JavaScript", "TypeScript", "SQL", "Java", "PHP"],
};

const SectionTitle = () => {
	return (
		<div className="mb-8">
			<h2 className="text-4xl font-semibold tracking-tight">Skills</h2>
			<div className="mt-2 h-1 w-24 bg-white"></div>
		</div>
	);
};

const Skills = () => {
	return (
		<div className="mx-auto max-w-(--breakpoint-2xl) bg-black px-8 py-24 text-white 2xl:px-1">
			<SectionTitle />{" "}
			<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
				{Object.entries(skills).map(([category, categorySkills]) => (
					<div
						key={category}
						className="relative rounded-md border border-gray-800 p-6"
					>
						<div className="absolute top-5 right-5">
							{categoryIcons[category]}
						</div>
						<h3 className="mb-4 text-xl font-medium capitalize">
							{category.replace(/([A-Z])/g, " $1").trim()}
						</h3>
						<div className="flex flex-wrap gap-2">
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
				))}
			</div>
			<p className="mt-6">
				In addition to these I am currently learning
				<strong> Rust</strong> and <strong>Go</strong>!
			</p>
		</div>
	);
};

export default Skills;
