import SectionHeader from "../SectionHeader";

const Title = ({ content }) => {
	return (
		<p
			data-aos="fade-up"
			// className="text-xl font-medium text-white border-gradient-skinny max-w-fit py-2 px-6"
			className="text-xl font-semibold bg-gradient-to-r from-[#aa63b1] to-brandPurple rounded max-w-fit py-2 px-4"
		>
			{content}
		</p>
	);
};

const Subtitle = ({ children }) => {
	return (
		<p data-aos="fade-up" className="text-md font-medium py-2 text-white">
			{children}
		</p>
	);
};

const Skill = ({ content }) => {
	return (
		<p
			className="rounded max-w-fit bg-gray-300 p-2 text-xs font-medium text-gray-600"
			data-aos="fade-up"
		>
			{content}
		</p>
	);
};

const Container = ({ children }) => {
	return (
		<div className="flex flex-wrap gap-4 max-w-lg mt-6" data-aos="fade-up">
			{children}
		</div>
	);
};

const Bigcontainer = ({ children }) => {
	return (
		<div className="" data-aos="fade-up">
			{children}
		</div>
	);
};

export default function SkillsCards() {
	return (
		<div id="SKILLS" className="min-h-screen max-w-fit mx-auto px-6">
			<SectionHeader
				section="SKILLS"
				type=""
				title="Skills"
				// desc="Frontend, backend and data."
			/>

			<div className="text-white flex flex-col lg:flex-row pt-12 md:pt-24 gap-16">
				<Bigcontainer>
					<Title content="Software Engineering" />
					{/* <p className="max-w-[60ch] opacity-75 pt-2">I originally started my programming journey in 2020 with <strong>Front End Web Development</strong> </p> */}
					<Container>
						<div>
							<Subtitle>Front End</Subtitle>
							<div className="flex flex-wrap gap-2">
								<Skill content="HTML" />
								<Skill content="CSS" />
								<Skill content="Responsive Design" />
								<Skill content="JavaScript" />
								<Skill content="TypeScript" />
								<Skill content="React" />
								<Skill content="Vue.js" />
								<Skill content="Next.js" />
								<Skill content="Tailwind CSS" />
								<Skill content="SASS" />
							</div>
						</div>

						<div>
							<Subtitle>Back End</Subtitle>
							<div className="flex flex-wrap gap-2">
								<Skill content="Java (Vert.x)" />
								<Skill content="PHP (Laravel)" />
								<Skill content="Node.js" />
							</div>
						</div>

						<div>
							<Subtitle>Databases</Subtitle>
							<div className="flex flex-wrap gap-2">
								<Skill content="MySQL" />
								<Skill content="PostgreSQL" />
								<Skill content="MongoDB" />
								<Skill content="GraphQL" />
							</div>
						</div>
					</Container>
				</Bigcontainer>

				<Bigcontainer>
					<Title content="Artificial Intelligence" />
					<Container>
						<div>
							<Subtitle>Data Science</Subtitle>
							<div className="flex flex-wrap gap-2">
								<Skill content="Python" />
								<Skill content="R" />
								{/* <span className="flex items-center text-gray-400" >/</span> */}
								<Skill content="scikit-learn" />
								<Skill content="TensorFlow" />
								<Skill content="PyTorch" />
								<Skill content="pandas" />
								<Skill content="Polars" />
								<Skill content="numpy" />
							</div>
						</div>

						<div>
							<Subtitle>Data Analytics</Subtitle>
							<div className="flex flex-wrap gap-2">
								<Skill content="Excel" />
								<Skill content="SQL" />
								<Skill content="Tableau" />
								<Skill content="Power BI" />
								<Skill content="Google Data Studio" />
							</div>
						</div>

						<div>
							<Subtitle>Data Visualization</Subtitle>
							<div className="flex flex-wrap gap-2">
								<Skill content="seaborn" />
								<Skill content="matplotlib" />
								<Skill content="Patsy" />
								<Skill content="Tableau" />
								<Skill content="statsmodel" />
							</div>
						</div>
					</Container>
				</Bigcontainer>
			</div>
		</div>
	);
}
