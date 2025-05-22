import React from "react";
import { FaCode, FaDatabase, FaTools } from "react-icons/fa";
import { IoLanguage } from "react-icons/io5";
import { TbMathSymbols } from "react-icons/tb";
import HeadingUnderline from "./shared/HeadingUnderline";

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
			<HeadingUnderline />
		</div>
	);
};

const Skills = () => {
	return (
		<section
			id="skills"
			className="bg-backgroundSecondary mx-auto max-w-(--breakpoint-2xl) px-8 py-24 text-white 2xl:px-1"
		>
			<SectionTitle />{" "}
			<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
				{Object.entries(skills).map(([category, categorySkills]) => (
					<div
						key={category}
						className="border-pillSecondary relative rounded-md border p-6"
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
									className="bg-pillPrimary rounded-full px-3 py-1.5 text-sm"
								>
									{skill}
								</span>
							))}
						</div>
					</div>
				))}
			</div>{" "}
			<p className="mt-6">
				In addition to these I am currently learning
				<strong className="text-purple-light"> Rust</strong> and{" "}
				<strong className="text-purple-light">Go</strong>!
			</p>
		</section>
	);
};

export default Skills;
