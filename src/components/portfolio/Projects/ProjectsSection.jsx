import SectionHeader from "../SectionHeader";
// import bongo from "../images/bongo.jpg";

const projects = [
	{
		id: 1,
		name: "Project Alpha",
		// imageSrc: bongo,
		imageAlt: "Preview of project Alpha",
		domain: "TBD",
		description:
			"Currently empty because I have not made any portfolio-worthy projects yet.",
		source: "https://github.com/Harmxn02",
		live: "https://github.com/Harmxn02",
	},
	{
		id: 2,
		name: "Project Beta",
		// imageSrc: bongo,
		imageAlt: "Preview of project Beta.",
		domain: "TBD",
		description:
			"Currently empty because I have not made any portfolio-worthy projects yet.",
		source: "https://github.com/Harmxn02",
		live: "https://github.com/Harmxn02",
	},
	{
		id: 3,
		name: "Project Gamma",
		// imageSrc: bongo,
		imageAlt: "Preview of project Gamma.",
		domain: "TBD",
		description:
			"Currently empty because I have not made any portfolio-worthy projects yet.",
		source: "https://github.com/Harmxn02",
		live: "https://github.com/Harmxn02",
	},
];

const ProjectCard = ({ project }) => (
	<div data-aos="fade-up" key={project.id} className="group relative pb-16">
		<div className="min-h-80 lg:aspect-w-1 aspect-w-2 aspect-h-1 lg:aspect-none w-full overflow-hidden lg:h-80">
			{/* <img
        src={project.imageSrc}
        alt={project.imageAlt}
        className="h-full w-full bg-brandBackground] text-transparent border-gradient-skinny object-cover object-center lg:h-full lg:w-full"
      /> */}
			{/* ! REPLACE THIS DIV WITH THE IMAGE ONCE YOU HAVE PROJECTS */}
			<div className="h-full w-full text-transparent border-gradient-skinny object-cover object-center lg:h-full lg:w-full"></div>
		</div>
		<div className="mt-4 GRID">
			<div data-aos="fade-up">
				<div className="flex justify-between">
					<h1 className="text-md text-left font-semibold text-gray-400">
						{project.name}
					</h1>
					<p className="text-xs xl:text-sm font-medium max-w-fit bg-gray-600 text-white h-fit p-1 rounded">
						{project.domain}
					</p>
				</div>
				<p className="mt-1 text-left text-sm text-gray-200 min-h-[2.75rem]">
					{project.description}
				</p>
			</div>
		</div>
		<div
			data-aos="fade-up"
			className="grid grid-cols-1 justify-center gap-4 pt-6 text-center sm:grid-cols-2"
		>
			{["Live Deployment", "Code Repository"].map((text, index) => (
				<a
					key={index}
					href={index === 0 ? project.live : project.source}
					target="_blank"
					rel="noreferrer"
					className="rounded-sm border-[1px] border-projectButtonBorder bg-projectButtonBG p-2 font-semibold text-white transition-all duration-300 hover:border-projectButtonBorderHOVER"
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
		<div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
			<div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-1 lg:grid-cols-3 xl:gap-x-8">
				{projects.map((project) => (
					<ProjectCard key={project.id} project={project} />
				))}
			</div>
		</div>
	</div>
);

export default ProjectsSection;
