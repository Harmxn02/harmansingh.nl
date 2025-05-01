import SectionHeader from "../SectionHeader";
// import bongo from "../images/bongo.jpg";
import Image from "next/image";
import AlphaPreview from "./previews/Alpha2.webp";
import BetaPreview from "./previews/roundabout-env.gif";
import GammaPreview from "./previews/harmansingh.nl.png";
import DeltaPreview from "./previews/links.harmansingh.nl-square.png";
import EpsilonPreview from "./previews/art_style_transfer_model.png";
import ZetaPreview from "./previews/animal_detection_using_yolov5.png";
import EtaPreview from "./previews/nsl-kdd.jpg";
import ThetaPreview from "./previews/text_classification_transformers.png";

const projects = [
	{
		id: 3,
		highlighted: false,
		name: "harmansingh.nl",
		imageSrc: GammaPreview,
		imageAlt: "Preview of project Gamma.",
		domain: "Frontend",
		technologies: ["Next.js", "Tailwind CSS"],
		description:
			"The website you are currently looking at was coded from scratch using Next.js and Tailwind CSS.",
		repository: "https://github.com/Harmxn02/harmansingh.nl",
		deployment: "https://www.harmansingh.nl",
		button_text: ["Code Repository", "Live Deployment"],
	},
	{
		id: 4,
		highlighted: false,
		name: "links.harmansingh.nl",
		imageSrc: DeltaPreview,
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
		imageSrc: "https://placehold.co/10x10",
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
		imageSrc: "https://placehold.co/10x10",
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
		imageSrc: "https://placehold.co/10x10",
		imageAlt: "Preview of project Kappa",
		domain: "ML/AI",
		technologies: ["Python", "PyTorch", "Computer Vision"],
		description:
			"Implemented and analysed the effectiveness of adversarial attacks on pre-trained computer vision models.",
		repository: "https://github.com/Harmxn02/",
		button_text: ["no code available"],
	},
];

const ProjectCard = ({ project }) => (
	<div data-aos="fade-up" key={project.id} className="group relative pb-16">
		{/* Highlight Badge */}
		{project.highlighted && (
			<div className="absolute top-2 left-2 z-50 rounded-md bg-yellow-500 px-2 py-1 text-xs font-semibold text-white">
				⭐ Highlighted
			</div>
		)}

		<div className="lg:aspect-w-1 aspect-w-2 aspect-h-1 lg:aspect-none min-h-80 w-full overflow-hidden lg:h-80">
			{project.imageSrc ? (
				<Image
					src={project.imageSrc}
					alt={project.imageAlt}
					width={400}
					height={400}
					className="bg-brand-background border-gradient-skinny h-full w-full object-cover object-center text-transparent lg:h-full lg:w-full"
				/>
			) : (
				<div className="border-gradient-skinny h-full w-full object-cover object-center text-transparent lg:h-full lg:w-full"></div>
			)}
		</div>
		<div className="GRID mt-4">
			<div data-aos="fade-up">
				<div className="flex justify-between">
					<h1 className="text-md text-left font-semibold text-gray-400">
						{project.name}
					</h1>
					<p className="h-fit max-w-fit rounded-sm bg-gray-600 px-1.5 py-1 text-xs font-medium text-white xl:text-sm">
						{project.domain}
					</p>
				</div>
				<p className="mt-1 min-h-[3.75rem] text-left text-sm text-gray-200">
					{project.description}
				</p>
				<ul className="mt-2 flex flex-wrap gap-1">
					{project.technologies.map((tech, index) => (
						<li
							key={index}
							className="h-fit max-w-fit rounded-sm bg-gray-800 px-1.5 py-1 text-xs font-medium text-gray-100"
						>
							{tech}
						</li>
					))}
				</ul>
			</div>
		</div>
		{project.button_text.some((text) => text) && (
			<div
				data-aos="fade-up"
				className="grid grid-cols-1 justify-center gap-4 pt-6 text-center sm:grid-cols-2"
			>
				{project.button_text.map(
					(text, index) =>
						text && (
							<a
								key={index}
								href={
									index === 0
										? project.repository
										: project.deployment
								}
								target="_blank"
								rel="noreferrer"
								className="border-project-button-border bg-project-button-bG hover:border-project-button-border-hOVER rounded-xs border-[1px] p-2 font-semibold text-white transition-all duration-300"
							>
								{text}
							</a>
						),
				)}
			</div>
		)}
	</div>
);

const ProjectsSection = () => (
	<div className="min-h-screen" id="PROJECTS">
		<SectionHeader section="PROJECTS" type="" title="Projects" />
		<div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
			<div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-1 lg:grid-cols-3 xl:gap-x-8">
				{projects.map((project) => (
					<ProjectCard key={project.id} project={project} />
				))}
			</div>
		</div>
	</div>
);

export default ProjectsSection;
