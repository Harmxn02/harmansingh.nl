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
		id: 1,
		highlighted: false,
		name: "Hotel client screening",
		imageSrc: AlphaPreview,
		imageAlt: "Preview of project Alpha",
		domain: "ML/AI",
		technologies: ["Python", "pandas", "scikit-learn"],
		description:
			"I applied supervised learning techniques to screen the 500 optimal clients for an exclusive (imaginary) hotel.",
		repository: "https://github.com/Harmxn02/ML-Project",
		deployment:
			"https://drive.google.com/file/d/1L3vT-fNBQ-yBKA0TwXJN-ProcwJ8PSmc/view?usp=sharing",
		button_text: ["Code Repository", "Report"],
	},
	{
		id: 2,
		highlighted: false,
		name: "AI learns to drive",
		imageSrc: BetaPreview,
		imageAlt: "Preview of project Beta.",
		domain: "ML/AI",
		technologies: ["Python", "Stable-Baselines3", "TensorFlow"],
		description:
			"I used several Stable-Baselines3 models to teach an AI to drive on a simulated highway environment.",
		repository: "https://github.com/Harmxn02/RL-Project-highway",
		button_text: ["Code Repository"],
		// this one only has the code repository available, so you only put 1 element in the 'button_text' array
	},
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
		id: 5,
		highlighted: false,
		name: "Art Style Transfer Model",
		imageSrc: EpsilonPreview,
		imageAlt: "Preview of project Epsilon",
		domain: "ML/AI",
		technologies: ["Python", "TensorFlow"],
		description:
			"Used the pre-trained VGG19 model to transfer the style of one painting to another.",
		repository: "https://github.com/Harmxn02/Art-Style-Transfer-Model",
		button_text: ["Code Repository"],
	},
	{
		id: 6,
		highlighted: false,
		name: "Animal Detection using YOLOv5",
		imageSrc: ZetaPreview,
		imageAlt: "Preview of project Zeta",
		domain: "ML/AI",
		technologies: ["Python", "YOLOv5", "OpenCV", "PyTorch"],
		description:
			"Used YOLOv5 to detect and classify animals using video footage from National Geographic.",
		repository: "https://github.com/Harmxn02/Animal-Detection-using-YOLOv5",
		deployment: "https://www.youtube.com/watch?v=b7o9Njpe0Lw",
		button_text: ["Code Repository", "YouTube Video"],
	},
	{
		id: 7,
		highlighted: false,
		name: "NSL-KDD Intrusion Detection",
		imageSrc: EtaPreview,
		imageAlt: "Preview of project Eta",
		domain: "ML/AI",
		technologies: ["Python", "Deep Learning", "PyTorch"],
		description:
			"Trained a model on the NSL-KDD dataset to detect and classifiy cyber security attacks.",
		repository: "https://github.com/Harmxn02/NSL-KDD-IntrusionDectection",
		button_text: ["Code Repository"],
	},
	{
		id: 8,
		highlighted: false,
		name: "Text Classification using Transformers",
		imageSrc: ThetaPreview,
		imageAlt: "Preview of project Theta",
		domain: "ML/AI",
		technologies: [
			"Python",
			"Transformers",
			"NLP",
			"Hugging Face",
			"PyTorch",
		],
		description:
			"Compared several pre-trained models to classify text data.",
		repository:
			"https://github.com/Harmxn02/Text-Classification-with-Transformer-Models",
		button_text: ["Code Repository"],
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
				<p className="mt-1 min-h-[2.75rem] text-left text-sm text-gray-200">
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
		<div
			data-aos="fade-up"
			className="grid grid-cols-1 justify-center gap-4 pt-6 text-center sm:grid-cols-2"
		>
			{project.button_text.map((text, index) => (
				<a
					key={index}
					href={index === 0 ? project.repository : project.deployment}
					target="_blank"
					rel="noreferrer"
					className="border-project-button-border bg-project-button-bG hover:border-project-button-border-hOVER rounded-xs border-[1px] p-2 font-semibold text-white transition-all duration-300"
				>
					{text}
				</a>
			))}
		</div>
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
